import React,  { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import  {NavLink} from 'react-router-dom'
import {signOffAuthedUser} from '../actions/authedUser'

class Nav extends Component {
    signout = (e) =>{
        e.preventDefault()
        const { dispatch } =  this.props;
        dispatch(signOffAuthedUser())
    }
    render(){
        const {user} = this.props
        return (
            
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' activeClassName='active' >
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard'>
                            Leader Board
                        </NavLink>
                    </li>
                    {user && (
                        <Fragment>
                            <li>
                                Hello, {user.name}
                            </li>
                            <li>
                                <button className='btn' onClick={this.signout}>logout</button>
                            </li>
                        </Fragment>
                        )
                    }

                </ul>
            </nav>
            
            )
    }
}



function mapStateToProps({authedUser, users}){
    return {
        user : authedUser ?  users[authedUser] : null
    }
}

export default connect(mapStateToProps)(Nav)
