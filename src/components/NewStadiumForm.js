import React from 'react';
import { updateNewStadiumForm } from '../actions/newStadiumForm.js'
import { createStadium } from '../actions/myStadiums.js'
import { connect } from 'react-redux'

const NewStadiumForm = ({ newStadiumFormData, history, updateNewStadiumForm, createStadium, userId }) => {

    const handleChange = event => {
        const { name, value } = event.target
            updateNewStadiumForm(name, value)

    }

    const handleSubmit = event => {
        event.preventDefault()
        createStadium({
            ...newStadiumFormData,
            userId
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Stadium name" onChange={handleChange} value={newStadiumFormData.name} />
            <input name="city" placeholder="Stadium location (city)" onChange={handleChange} value={newStadiumFormData.city} />
            <input name="image" placeholder="image URL" onChange={handleChange} value={newStadiumFormData.image} />
            <input type="submit" value="Create Stadium" />
        </form>
)}

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
        newStadiumFormData: state.newStadiumForm, 
        userId
    }
}

export default connect(mapStateToProps, { updateNewStadiumForm, createStadium })(NewStadiumForm)

