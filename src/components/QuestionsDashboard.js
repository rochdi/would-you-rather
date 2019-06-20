import React, { Component } from 'react'
import QuestionsList from './QuestionsList'
import {connect}  from 'react-redux'


class QuestionsDashboard extends Component{
    state = {
        answered: this.props.answered
    }

    getActiveQuestions = (user, questions, answered) => {
        const activeQuestions = user ? Object.keys(questions)
                                            .filter( (key) => (answered ^ Object.keys(user.answers).includes(key)) === 0)
                                            .map( (key) => questions[key])
                                            .sort((a,b) => b.timestamp - a.timestamp) : []
    
        return activeQuestions
    }

    handleUpdateQuestions = (e,answered ) =>{
        e.preventDefault()
        this.setState({
            answered : answered
        })
    }
    
    render(){
        const { user, questions } = this.props
        const activeQuestions = this.getActiveQuestions(user, questions, this.state.answered);
        return(
            <div>
                <div className='center'>
                    <button className={this.state.answered? 'btn' : 'btn active'} onClick={(e) => this.handleUpdateQuestions(e,false)} >Unanswered Questions</button>
                    <button className={!this.state.answered? 'btn' : 'btn active'}  onClick={(e) => this.handleUpdateQuestions(e,true)}>answered Questions</button>
                </div>
                <QuestionsList questions={activeQuestions}/>
            </div>
        )
    }
}


function mapStateToProps({authedUser, users, questions}, {answered}){
    return {
        user : users[authedUser],
        questions,
        answered
    }
}

export default connect(mapStateToProps)(QuestionsDashboard)