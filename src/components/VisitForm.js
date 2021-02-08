import React from 'react';
import { updateVisitForm } from '../actions/visitForm.js'
import { createVisit } from '../actions/myVisits.js'
import { connect } from 'react-redux'

const VisitForm = ({ formData, stadiumId, updateVisitForm, createVisit, history }) => {

    const handleChange = event => {
        const { name, value } = event.target
            updateVisitForm(name, value)

    }

    const handleSubmit = (formData, stadiumId) => {
        createVisit({
            ...formData,
            stadiumId
        }, history)
    }

    return (
        <form onSubmit={event => {
            event.preventDefault()
            handleSubmit(formData, stadiumId)
        }}>
            <input name="date" placeholder="Visit date (YYYY-MM-DD)" onChange={handleChange} value={formData.date} />
            <input name="description" placeholder="Visit description" onChange={handleChange} value={formData.description} />
            <input type="submit" value={"Add Visit"} />
        </form>
)}

const mapStateToProps = state => {
    return {
        formData: state.visitForm
    }
}

export default connect(mapStateToProps, { updateVisitForm, createVisit })(VisitForm)