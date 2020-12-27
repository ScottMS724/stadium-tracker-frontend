import React from 'react' 
import { connect } from 'react-redux'
import { updateSignUpForm } from '../actions/signUpForm.js'
import { signup } from '../actions/currentUser.js'

const SignUp = (props) => {
    const handleInputChange = event => {
        const { name, value } = event.target
        // below is the formData for SignUpForm action 
        const updatedFormInfo = {
            ...props.SignUpFormData, 
            [name]: value 
        }
        props.updateSignUpForm(updatedFormInfo) 
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.signup(props.SignUpFormData, props.history)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="name" name="name" type="text" value={props.SignUpFormData.name} onChange={handleInputChange} />
            <input placeholder="username" name="username" type="text" value={props.SignUpFormData.username} onChange={handleInputChange} /> 
            <input placeholder="password" name="password" type="text" value={props.SignUpFormData.password} onChange={handleInputChange} />
            <input placeholder="image URL" name="img_url" type="text" value={props.SignUpFormData.img_url} onChange={handleInputChange} />
            <input type="submit" value="Sign Up" /> 
        </form>
    )
}

const mapStateToProps = state => {
    return {
        SignUpFormData: state.signUpForm 
    }
}

export default connect(mapStateToProps, {updateSignUpForm, signup})(SignUp) 