import React from 'react'

class UserItem extends React.Component {
    render() {
        return(
            <div className={this.props.user.key}>
                <h3>Name: {this.props.user.name}</h3>
                <p>Username: {this.props.user.username}</p>
                <img src={this.props.user.pic} alt=''/>

            </div>
        )
    }
}

export default UserItem