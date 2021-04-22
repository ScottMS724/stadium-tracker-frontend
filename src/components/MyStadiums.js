import React from 'react' 
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyStadiums = (props) => {
    const [searchTerm, setSearchTerm] = React.useState("");
    // const [searchResults, setSearchResults] = React.useState(props.stadiums);
    const searchResults = props.stadiums.filter(stadium => 
        stadium.attributes.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const stadiumCards = props.stadiums.length > 0 ?
    searchResults.map(s => (<h1><p key={s.id}><Link key={s.id} to={`/stadiums/${s.id}`}>{s.attributes.name}</Link></p></h1>)) :
    <h3 style={{color: "yellow"}}>You have no stadiums yet. Click the button above to add your first stadium.</h3>

    const handleChange = e => {
        setSearchTerm(e.target.value);
    };
    
    return (
        <div className="bg2">
            <br></br>
            <br></br>
            <h1 className="header_title">Your Stadiums</h1>
            {stadiumCards}
            <input type="text" placeholder="search" value={searchTerm} onChange={handleChange}></input>
        </div>
    )
}

const mapStateToProps = state => { 
    return {
        stadiums: state.myStadiums
    }
}

export default connect(mapStateToProps)(MyStadiums)


