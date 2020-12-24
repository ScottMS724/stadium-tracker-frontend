import React from 'react' 

const StadiumCard = (props) => {
    return (
        <p>
            {props.stadium.attributes.name}
            <br></br> 
            {props.stadium.attributes.city}
        </p>
    )
}

export default StadiumCard 
