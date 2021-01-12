import React from 'react'
import StadiumForm from './StadiumForm.js'
import { updateStadium } from '../actions/myStadiums.js'
import { setFormDataForEdit } from '../actions/stadiumForm.js'
import { connect } from 'react-redux'

class EditStadiumFormWrapper extends React.Component {

    componentDidMount() {
        this.props.stadium && this.props.setFormDataForEdit(this.props.stadium)
    }

    handleSubmit = (formData, userId) => {
        const { updateStadium, stadium, history } = this.props

        updateStadium({
            ...formData,
            stadiumId: stadium.id, 
            userId
        }, history)
    }

    render () {
        // const {history, handleSubmit } = this.props 
        return <StadiumForm editMode history={this.history} handleSubmit={this.handleSubmit} />
    }
}

export default connect(null, { updateStadium, setFormDataForEdit })(EditStadiumFormWrapper)