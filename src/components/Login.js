import  React, { Component } from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
import { withRouter } from 'react-router-dom'

class Login extends Component {

    handleChange = (e) => {

        const { dispatch } =  this.props;
        const id = e.target.value
        if(id!==""){
            dispatch(setAuthedUser(id))
            this.props.history.push(this.props.location.state.referrer)
        } 
    }

    render(){
        const {logins} = this.props;
        return (
            <div className="row">
                <h3 className='center'>Welcome to the Would You Rather App</h3>
                <h5 className='center'>Please sign in to continue</h5>
                <div className='center'>
                    <select id="lang" onChange={this.handleChange}   >
                        <option ></option>
                        {logins.map((login) => (<option  key={login.id} value={login.id}>{login.name}</option>))}
                    </select>
               </div>
            </div>
        )
    }
}

function mapStateToProps({users}){
   let logins = [];
    for(let id in users){
        logins.push({id:id,name:users[id].name,avatar:users[id].avatarURL })
    }
    return { logins }
}

export default withRouter(connect(mapStateToProps)(Login));