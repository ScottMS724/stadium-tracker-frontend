import React from 'react' 
import { connect } from 'react-redux'
import StadiumCard from './StadiumCard.js'

const MyStadiums = (props) => {
    const stadiumCards = props.stadiums.map(s => <StadiumCard stadium={s} key={s.id} />)
    return (
        stadiumCards.length > 0 ? stadiumCards : null 
    )
}

const mapStateToProps = state => { 
    return {
        stadiums: state.myStadiums
    }
}

export default connect(mapStateToProps)(MyStadiums)