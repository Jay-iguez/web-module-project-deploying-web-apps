import React, { useEffect, useState } from "react";
import * as Yup from 'yup'
import formSchema from "../formSchema/teamBuilderSchema";
import { Container, TextBox, Form, FormErrors } from "../styled-components/TeamBuilder-styled";
import { useSelector, useDispatch } from "react-redux";
import { updateValues, updateMember, revertFormValues, enableButton, setFormErrors, submitForm } from "../actions/teamBuilderActions";


export default function FormTeamBuilder() {
    const dispatch = useDispatch()
    const [hasChewed, setHasChewed] = useState(false)
    const formValues = useSelector((state) => state.teamBuilderState.formValues)
    const formErrors = useSelector((state) => state.teamBuilderState.formErrors)
    const hasSubmit = useSelector((state) => state.teamBuilderState.hasSubmit)
    const disabled = useSelector((state) => state.teamBuilderState.disabled)

    const validate = (name, value) => {
        Yup.reach(formSchema, name)
            .validate(value)
            .then(() => {
                dispatch(setFormErrors({ ...formErrors, [name]: "" }))
            })
            .catch((err) => {
                dispatch(setFormErrors({ ...formErrors, [name]: err.errors[0] }))
            })
    }

    const formValuesChangeHandler = (e) => {
        const { name, value, type, checked } = e.target
        const typeValue = type === 'checkbox' ? checked : value
        const infoValues = { name: name, value: typeValue }

        if (type === 'checkbox' && checked === true){
            setHasChewed(true)
        } else {
            setHasChewed(false)
        }

        validate(name, typeValue)
        dispatch(updateValues(infoValues))
        console.log(hasChewed)
    }

    const submit = (e) => {
        e.preventDefault()
        dispatch(updateMember(formValues))
        dispatch(revertFormValues())
        dispatch(submitForm())
    }

    useEffect(() => {
        formSchema.isValid(formValues)
            .then((valid) => {
                dispatch(enableButton(!valid))
            })

    }, [formValues])

    return (
        <>
            <Container>
                <TextBox>
                    <h2>Application Submission:</h2>
                    <p>To allow a more personal and fun experience, on submission of your application - <strong>it will be appended to the main list above to make you feel like you're apart of the team!</strong></p>
                    <p>(The addition of your info above doesn't mean anything really. If you don't get hired please do not take offense - we don't want to have to cone you infront of human customers despite how funny it would be)</p>
                    <p><strong>Please note:</strong> We are currently looking for the role of 'Barista' only. Also ask your owner for help if you have trouble using an electronic device.</p>
                </TextBox>
            </Container>
            <Container>
                <FormErrors>
                    {
                        Object.keys(formErrors).map(error => {
                            return formErrors[error] === '' ? null : <p>{formErrors[error]}</p>
                        })
                    }
                </FormErrors>
            </Container>
            {
                !hasSubmit ?

                    <>
                        <Container>
                            <TextBox>
                                <Form onSubmit={submit}>
                                    <label> Name:
                                        <input
                                            name="name"
                                            type="text"
                                            id="nameselect"
                                            value={formValues.name}
                                            placeholder="Name"
                                            onChange={formValuesChangeHandler}
                                        />
                                    </label>
                                    <label> Email:
                                        <input
                                            name="email"
                                            type="email"
                                            id="emailselect"
                                            value={formValues.email}
                                            placeholder="Email"
                                            onChange={formValuesChangeHandler}
                                        />
                                    </label>
                                    <label> Role:
                                        <select id="roleselect" name="role" onChange={formValuesChangeHandler}>
                                            <option value="">Choose:</option>
                                            <option value="Barista">Barista</option>
                                        </select>
                                    </label>
                                    <label> Breed:
                                        <input
                                            name="breed"
                                            type="text"
                                            id="breedselect"
                                            value={formValues.breed}
                                            placeholder="Mutt?"
                                            onChange={formValuesChangeHandler}
                                        />
                                    </label>
                                    <label> Temperament:
                                        <input
                                            name="temperament"
                                            type="text"
                                            id="breedselect"
                                            value={formValues.temperament}
                                            placeholder="Laidback"
                                            onChange={formValuesChangeHandler}
                                        />
                                    </label>
                                    <label> Do you chew furniture?
                                        <input
                                            name="chew"
                                            type="checkbox"
                                            id="chewselect"
                                            checked={formValues.chew}
                                            onChange={formValuesChangeHandler}
                                        />
                                    </label>
                                    <button disabled={disabled}>Submit Your Info</button>
                                    <br></br>
                                    <br></br>
                                </Form>
                            </TextBox>
                        </Container>
                    </>
                    :
                    <Container>
                        <TextBox>
                            <h2>Congratulations - You just successfully submitted your application!</h2>
                            <p> We will be processing it shortly, and will email you back with your results. In the meantime - you can imagine already being on the team with your info now above. Thank you!</p>
                            {
                                hasChewed ?
                                    <p><strong>Please note,</strong> should any workplace equipment need to be replaced due to "oral-inflicted" damage - you will be responsible for it. Thank you.</p>
                                    :
                                    <p>Glad to hear you don't have any bad chewing habits. We lost an espresso machine that way. Not fun.</p>
                            }
                        </TextBox>
                    </Container>
            }

        </>
    )
}