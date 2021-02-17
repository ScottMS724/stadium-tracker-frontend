import React from 'react';
import { updateStadiumForm } from '../actions/stadiumForm.js'
import { connect } from 'react-redux'

const StadiumForm = ({ formData, updateStadiumForm, userId, handleSubmit, editMode }) => {

    const handleChange = event => {
        const { name, value } = event.target
            updateStadiumForm(name, value)

    }

    return (
        <div className="bg2">
        <form onSubmit={event => {
            event.preventDefault()
            handleSubmit(formData)
        }}>
            <input name="name" placeholder="Stadium name" onChange={handleChange} value={formData.name} />
            <input name="city" placeholder="Stadium location (city)" onChange={handleChange} value={formData.city} />
            <input name="image" placeholder="image URL" onChange={handleChange} value={formData.image} />
            <input type="submit" value={editMode ? "Update Stadium" : "Create Stadium"} />
        </form>
        </div>
)}

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
        formData: state.stadiumForm, 
        userId
    }
}

export default connect(mapStateToProps, { updateStadiumForm })(StadiumForm)

