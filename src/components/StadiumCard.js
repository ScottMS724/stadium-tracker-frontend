import React from 'react' 

const StadiumCard = (props) => {
    return (
        props.stadium ?
        <div>
            <h2>{props.stadium.attributes.name}</h2>
            <p>{props.stadium.attributes.city}</p>
            <img src={props.stadium.attributes.image} alt="" height="300" width="400"></img>
        </div> :
        <p>StadiumCard with no stadium yet.</p>
    )
}

export default StadiumCard 