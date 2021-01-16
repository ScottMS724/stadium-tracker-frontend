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

    return <StadiumForm history={history} handleSubmit={handleSubmit} />
}

export default connect(null, { createStadium })(NewStadiumFormWrapper)