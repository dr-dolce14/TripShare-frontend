import React from 'react' 

class TripItem extends React.Component {
    render() {
        return(
            <div className={this.props.key}>
                <h1>{this.props.trip.name} Trip!</h1>
                <p>{this.props.trip.location}</p>
                <p>Led by: {this.props.trip.leader}</p>
            </div>
        )
    }
}

export default TripItem;
