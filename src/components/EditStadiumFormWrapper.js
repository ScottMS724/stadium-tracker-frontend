import React from 'react'
import StadiumForm from './StadiumForm.js'
import { updateStadium, deleteStadium } from '../actions/myStadiums.js'
import { setFormDataForEdit, resetStadiumForm } from '../actions/stadiumForm.js'
import { connect } from 'react-redux'

class EditStadiumFormWrapper extends React.Component {

    componentDidMount() {
        this.props.stadium && this.props.setFormDataForEdit(this.props.stadium)
    }

    componentDidUpdate(prevProps) {
        this.props.stadium && !prevProps.stadium && this.props.setFormDataForEdit(this.props.stadium)
    }

    componentWillUnmount() {
        this.props.resetStadiumForm() 
    }

    handleSubmit = (formData) => {
        const { updateStadium, stadium, history } = this.props

        updateStadium({
            ...formData,
            stadiumId: stadium.id
        }, history)
    }

    render () {
        const { history, deleteStadium, stadium } = this.props 
        const stadiumId = stadium ? stadium.id : null 
        return <>
                <StadiumForm editMode handleSubmit={this.handleSubmit} />
                <br/>
                <button style={{color: "red"}} onClick={() => deleteStadium(stadiumId, history)}>Delete this stadium.</button>
               </>
    }
}

export default connect(null, { updateStadium, setFormDataForEdit, resetStadiumForm, deleteStadium })(EditStadiumFormWrapper)