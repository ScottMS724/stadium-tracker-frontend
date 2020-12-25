import React from 'react' 

const StadiumCard = (props) => {
    return (
        <p>
            {props.stadium.attributes.name}
            <br></br> 
            {props.stadium.attributes.city}
            <br></br>
            <img src={props.stadium.attributes.image} alt="Citi Field." height="300" width="400"></img>
        </p>
    )
}

export default StadiumCard 
