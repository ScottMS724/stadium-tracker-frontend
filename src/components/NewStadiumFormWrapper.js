import React from 'react'
import StadiumForm from './StadiumForm.js'
import { createStadium } from '../actions/myStadiums.js'
import { connect } from 'react-redux'

const NewStadiumFormWrapper = ({ history, createStadium }) => {

    const handleSubmit = (formData, userId) => {
        createStadium({
            ...formData,
            userId
        }, history)
    }

    return (
    <div className="bg2">
        <br></br>
        <h1 style={{color: "white"}}>Add a New Stadium</h1>
        <StadiumForm history={history} handleSubmit={handleSubmit} />
    </div>
    )
}

export default connect(null, { createStadium })(NewStadiumFormWrapper)