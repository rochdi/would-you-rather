import React, { Component } from 'react'
import {connect}  from 'react-redux'
import { withRouter } from 'react-router-dom'

class Question extends Component{

    handleViewPoll = (e,id) => {
        e.preventDefault();
        this.props.history.push(`questions/${id}`)
    }

    render(){
 
        const {question, user} = this.props
        if(question === null){
            return <p>This question doesn't exist</p>
        }

        return (
            <div className='question'>
                <img src={user.avatarURL} alt={`Avatar of ${user.name}`} className='avatar' />
                <div className='question-info'>
                <div>
                    <span>{user.name} asks:</span>
                    <p>Would you rather</p>
                    <p>...{question.optionOne.text.substring(0,14)}...</p>
                    <button onClick={(e) => this.handleViewPoll(e,question.id)}  className='btn'>View Poll</button>
                </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users, questions} , {id}){
    const question = questions[id]
    const user = question ? users[question.author] :  null
    return {
        question,
        user
    }
}

export default withRouter(connect(mapStateToProps)(Question))