import React, { Component } from 'react'
import {connect}  from 'react-redux'
import { handleSaveAnswer }  from '../actions/questions'


class QuestionAsk extends Component {
    state = {
        answer : 'optionOne',
    }

    selectionChanged = (e) =>{
        const answer = e.currentTarget.value 
        this.setState(() => ({
            answer
        })) 
    }

    vote = (e) => {
        const {answer} = this.state
        const { dispatch, question, authedUser } =  this.props
        let qid = question.id;
        dispatch(handleSaveAnswer({authedUser, qid, answer}))
    }

    render(){
        const { user, question } = this.props
        return (
            <div className='question'>
                <img src={user.avatarURL} alt={`Avatar of ${user.name}`} className='avatar' />
                <div className='question-info'>
                <div>
                    <h3>{user.name} asks:</h3>
                    <h3>Would you rather</h3>
                 
                    <div>
                        <div><input type="radio"
                                value='optionOne' 
                                checked={'optionOne' === this.state.answer} 
                                onChange={this.selectionChanged}
                                />{question.optionOne.text}</div>
                    </div>
                    <div>
                        <div><input type="radio" 
                                value='optionTwo'
                                checked={'optionTwo' === this.state.answer} 
                                onChange={this.selectionChanged}
                                />{question.optionTwo.text}</div>
                    </div>
            
                    <button className='btn' onClick={this.vote}>Sub</button>
                </div>
                </div>
            </div>
        )
    }
}


export default connect()(QuestionAsk)