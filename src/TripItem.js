import React from 'react' 

class TripItem extends React.Component {

    renderUsers = () => {
        return this.props.trip.users.map((userObj) => 
        <li key={userObj.id}>
            Name: {userObj.name}
        </li>)
    }

    render() {
        return(
            <div className={this.props.key}>
                <h3>Trip Name: {this.props.trip.name}</h3>
                <p>Trip Location: {this.props.trip.location}</p>
                <p>Led by: {this.props.trip.user_id}</p>
                <p>Participants:</p>
                <ol>
                    {this.renderUsers()}
                </ol>
            </div>
        )
    }
}

export default TripItem;
