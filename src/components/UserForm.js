import React, {useState} from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

const UserForm = () => {

    const [step, setStep] = useState(1)

    const [formInputs, setFormInputs] = useState({
        firstName : '',
        lastName : '',
        email: '',
        occupation : '',
        city: '',
        bio: ''
    })

    // Go to next step
    const nextStep = () => {
        setStep( step + 1 )
    }

    // Go to prev step
    const prevStep = () => {
        setStep( step - 1 )
    }

    // Handle fields change
    const handleInputsChange = (event) => {
        event.persist()
        setFormInputs(formInputs => ({
            ...formInputs, [event.target.name] : [event.target.value]
        }))
    }

    switch(step) {
        case 1 :
            return (
                <FormUserDetails nextStep={nextStep} handleInputsChange={handleInputsChange} values={formInputs} />
            )
        case 2 : 
            return (
                <FormPersonalDetails nextStep={nextStep} prevStep={prevStep} handleInputsChange={handleInputsChange} values={formInputs} />
            )
        case 3 : 
            return (
                <Confirm nextStep={nextStep} prevStep={prevStep} values={formInputs} />
            )
        case 4 : 
            return (
                <Success />
            )
        default: 
            return (
                <h1>We have some problems...</h1>
            )
    }
}

export default UserForm
