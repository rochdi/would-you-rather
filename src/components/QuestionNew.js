import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import Secure from './Utils'
import {handleAddQuestion} from '../actions/questions'

class QuestionNew extends Component {
    state = {
        questionOne :'',
        questionTwo : '',
    }

    optionOneChange = (e) => {
        this.setState({questionOne: e.target.value})
    } 

    optionTwoChange = (e) => {
        this.setState({questionTwo: e.target.value})
    } 

    handleSubmit = (e) => {
        e.preventDefault()
        const {questionOne,questionTwo } = this.state
        const { dispatch } =  this.props;
        dispatch(handleAddQuestion(questionOne, questionTwo))
        this.setState(() => ({
            questionOne :'',
            questionTwo : ''
        }))
        this.props.history.push('/')
    }

    render(){
            const {authedUser} = this.props    
            return Secure(authedUser, 
            <div>
                <h3 className='center'>Create New Question</h3>
                <form className="new-question" onSubmit={this.handleSubmit}>   
                    <h2>Complete the question:</h2>
                    <h3>Would you rather...</h3>
                    <input type="text" value={this.state.questionOne} onChange={this.optionOneChange} />
                    <h3 className='center'>OR</h3>
                    <input type="text" value={this.state.questionTwo} onChange={this.optionTwoChange} />
                    <button 
                        className='btn'
                        type='submit'
                        disabled={this.state.questionOne==='' || this.state.questionTwo===''}>
                        Submit
                    </button>

                </form>
            </div>
            ,  this.props.location)
    }

}

function mapStateToProps({authedUser}){
    return {
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(QuestionNew));