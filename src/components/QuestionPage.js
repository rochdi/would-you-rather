import React, {Component} from 'react'
import {connect} from 'react-redux'
import QuestionAsk from './QuestionAsk'
import QuestionSummary from './QuestionSummary'
import Secure from './Utils'


class QuestionPage extends Component{
    buildView(){
        const {authedUser, question, user, userAnswer} = this.props
        if(question === null){
            return <p>This question doesn't exist</p>
        }
        
        if(userAnswer){
            return (<QuestionSummary  authedUser={authedUser} question={question}  user={user} />)
        } else {
            return (<QuestionAsk question={question} user={user} authedUser={authedUser} />)
        }
    }

    render(){
        const {authedUser} = this.props
        return Secure(authedUser, this.buildView())
    }
}

function mapStateToProps({authedUser, users, questions}, props) {
    const {id} = props.match.params
    const question = questions[id]
    const user = question ? users[question.author] : null
    const userAnswer = question ? (question.optionOne.votes.includes(authedUser)  || question.optionTwo.votes.includes(authedUser)) : null

    return {
        authedUser,
        question,
        user,
        userAnswer
    }
}
export default connect(mapStateToProps)(QuestionPage)