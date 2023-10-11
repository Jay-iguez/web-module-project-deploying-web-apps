import { ACTIONS } from '../actions/teamBuilderActions'

const initialState = (() => {
    const initialFormValues = {
        name: '',
        email: '',
        role: '',
        breed: '',
        bio: '',
        chew: ''
    }

    return {
        teamMembers: [
            {
                name: "Bleu",
                email: "IChaseBirds@hotmail.com",
                role: "Owner",
                breed: "Queensland-Husky Mutt",
                temperament: "Bleu is a bundle of craziness and hyperactivity. Her enthusiasm is infectious, and she is always ready for a game of fetch or a wild adventure. Just try to keep up with this ball of energy!"
            },
            {
                name: "Coco",
                email: "CocoCuddles@gmail.com",
                role: "Barista",
                breed: "Poodle",
                temperament: "Coco is a sweet and gentle soul who spreads warmth and cuddles to everyone. She will whip up the most heartwarming drinks while showering customers with love and wagging tails. Prepare for a cozy and delightful coffee experience!"
            },
            {
                name: "Duke",
                email: "DukeTheBiscuit@yahoo.com",
                role: "Chief Treat Officer",
                breed: "Border Collie",
                temperament: "Duke is a dignified food connoisseur with a refined palate for treats. His sophisticated taste buds ensure that every doggy delicacy served at The Woofing Bean is top-notch. Expect a charming and sophisticated companion who will make your taste buds dance with joy!"
            },
            {
                name: "Luna",
                email: "LunaTheSnuggleBug@gmail.com",
                role: "Customer Happiness Specialist",
                breed: "Beagle",
                temperament: "Luna is an absolute snuggle bug who spreads joy and happiness wherever she goes. With her wagging tail and endless cuddles, Luna ensures that every customer leaves with a smile and a heart full of warmth. Prepare for an overdose of cuteness and happiness!"
            },
            {
                name: "Max",
                email: "MaxTheEnergizer@woofmail.com",
                role: "Paw-latte Artist",
                breed: "Husky",
                temperament: "Max is a creative genius who can turn a simple latte into a masterpiece. With a dash of imagination and a swirl of creativity, Max creates stunning paw-latte art that will leave you speechless. Be ready for a coffee experience that's as visually pleasing as it is delicious!"
            }
        ],
        initialFormValues,
        formValues: { ...initialFormValues, chew: false },
        formErrors: { ...initialFormValues }
    }
})

export const teamBuilderReducer = (state = initialState(), action) => {
    switch (action.type) {
        case ACTIONS.LOG:
            console.log(state)
            return state
        default:
            return state
    }
}