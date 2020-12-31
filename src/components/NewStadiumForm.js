import React from 'react';
import { updateNewStadiumForm } from '../actions/newStadiumForm.js'
import { connect } from 'react-redux'

const NewStadiumForm = (props, history) => {

    const handleChange = event => {
        const { name, value } = event.target
            updateNewStadiumForm(name, value)

    }

    const handleSubmit = event => event.preventDefault()

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Stadium name" onChange={handleChange} value={props.newStadiumFormData.name} />
            <input name="city" placeholder="Stadium location (city)" onChange={handleChange} value={props.newStadiumFormData.city} />
            <input name="image" placeholder="image URL" onChange={handleChange} value={props.newStadiumFormData.image} />
            <input type="submit" value="Create Stadium" />
        </form>
)}

const mapStateToProps = state => {
    return {
        newStadiumFormData: state.newStadiumForm 
    }
}

export default connect(mapStateToProps, { updateNewStadiumForm })(NewStadiumForm)

