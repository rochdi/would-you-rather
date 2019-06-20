import React, {Component} from 'react'
import {connect} from 'react-redux'
import Leader from './Leader'
import Secure from './Utils'

class Leaderboard extends Component { 
    render(){
        const {authedUser,leaders} = this.props
        return  Secure(authedUser, <div>
            <div className='center'>
            <ul className='dashboard-list'>
                {
                    leaders.map((leader) => (
                        <li key={leader.uid}>
                            <Leader leader={leader} />
                        </li>
                    ))
                }
            </ul>
        </div></div>)
    }
}


function mapStateToProps({ authedUser, users, questions}){
    const leaders = Object.keys(users).map((uid) => ({
        uid,
        name : users[uid].name,
        avatarURL : users[uid].avatarURL,
        answered: Object.keys(users[uid].answers).length,
        asked: users[uid].questions.length,
        total :  Object.keys(users[uid].answers).length + users[uid].questions.length,
    })).sort((a,b) => b.total - a.total )

    return {
        authedUser,
        leaders
    }
}


export default connect(mapStateToProps)(Leaderboard)