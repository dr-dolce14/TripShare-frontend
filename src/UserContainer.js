import React from 'react'
import UserItem from './UserItem'

class UserContainer extends React.Component {
    state = {users: []}

    componentDidMount() {
        fetch("http://localhost:3000/api/v1/users") 
        .then(resp => resp.json())
        .then(data => this.setState({users: data}))
      } 
    
      renderUsers = () => {
        return this.state.users.map((userObj) => <UserItem key={userObj.id} user={userObj} />)
      }


    render() {

        return(
            <div>
                
                {this.renderUsers()}
            </div>
            
        )

    }
    
}

export default UserContainer