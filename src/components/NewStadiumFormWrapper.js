import React from 'react'
import StadiumForm from './StadiumForm.js'
import { createStadium } from '../actions/myStadiums.js'
import { connect } from 'react-redux'

const NewStadiumFormWrapper = ({ history, createStadium }) => {

    const handleSubmit = (formData, userId) => {
        console.log("a")
        createStadium({
            ...formData,
            userId
        }, history)
        console.log("g")
    }

    return (
    <div className="bg2">
        <br></br>
        <br></br>
        <h1 className="header_title">Add a New Stadium</h1>
        <StadiumForm history={history} handleSubmit={handleSubmit} />
    </div>
    )
}

export default connect(null, { createStadium })(NewStadiumFormWrapper)