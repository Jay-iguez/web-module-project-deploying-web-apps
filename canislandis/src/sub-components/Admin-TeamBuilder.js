import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Container, TextBox, Form } from "../styled-components/TeamBuilder-styled"

export default function AdminLoginTeamBuilder(props) {
    const { pageState, setToken } = props
    const navigate = useNavigate()
    const userData = useSelector((state) => state.teamBuilderState.user)
    const [formValues, setFormValues] = useState({ name: '', password: '' })
    const [loginFails, setLoginFails] = useState(0)

    const onChange = e => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    const onSubmit = e => {
        e.preventDefault()

        if (formValues.user === userData.name && formValues.password === '123') {
            setToken(true)
            navigate(`/teambuilder/new-doggo`)
        } else {
            const additionalLoginFail = loginFails + 1
            setLoginFails(additionalLoginFail)
        }
    }

    useEffect(() => {
        pageState.setPageType('Admin Login Page')

    }, [])

    return (
        <>
            <Container>
                <TextBox>
                    <h2>Administrative Login Form:</h2>
                </TextBox>
            </Container>
            <Container>
                <Form onSubmit={onSubmit}>
                    <label> Username:
                        <input
                            type='text'
                            name="user"
                            value={formValues.user}
                            onChange={onChange}
                        />
                    </label>
                    <label> Password:
                        <input
                            type='password'
                            name="password"
                            value={formValues.password}
                            onChange={onChange}
                        />
                    </label>
                    <button>Submit</button>
                </Form>
            </Container>
            <Container>
                <TextBox>
                    <h2>Please be aware:</h2>
                    <p>Any un-authorized doggos who try to enter our Administrative server-side will be met with harsh-repercussions such as no treats for one hour and baths every 2 weeks instead of monthly. </p>
                    {
                        loginFails >= 3 ?
                            <p>Come on now, I haven't implemented a system to lock-out too many login attempts. So just stop trying to login will ya?</p>
                            :
                            null
                    }
                </TextBox>
            </Container>
        </>
    )
}