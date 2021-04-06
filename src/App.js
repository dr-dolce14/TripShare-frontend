import React from 'react';
import TripItem from './TripItem'


class App extends React.Component {
  state = {trips: []}

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/trips") 
    .then(resp => resp.json())
    .then(data => this.setState({trips: data}))
  } 

  renderTrips = () => {
    return this.state.trips.map((tripObj) => <TripItem key={tripObj.id} trip={tripObj} />)
  }

  render() {
    console.log("HI PAOLA")
    return (
      <div>{this.renderTrips()}</div>
    )
  }

}

export default App;
