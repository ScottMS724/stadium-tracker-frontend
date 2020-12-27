import React from 'react' 
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'
import { login } from '../actions/currentUser.js'

const Login = (props) => {
    const handleInputChange = event => {
        const { name, value } = event.target
        // below is the formData for updateLoginForm action 
        const updatedFormInfo = {
            ...props.loginFormData, 
            [name]: value 
        }
        props.updateLoginForm(updatedFormInfo) 
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.login(props.loginFormData, props.history)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="username" name="username" type="text" value={props.loginFormData.username} onChange={handleInputChange} /> 
            <input placeholder="password" name="password" type="text" value={props.loginFormData.password} onChange={handleInputChange} />
            <input type="submit" value="Log In" /> 
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm 
    }
}

export default connect(mapStateToProps, {updateLoginForm, login})(Login) 