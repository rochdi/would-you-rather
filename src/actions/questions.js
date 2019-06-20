import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { receiveUsers } from './users';

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const ADD_QUESTION = "ADD_QUESTION"
export const SAVE_ANSWER = "SAVE_ANSWER"

function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(optionOneText, optionTwoText){
    return (dispatch, getState) => {
        const {authedUser} = getState()
        dispatch(showLoading())
        return saveQuestion({optionOneText,optionTwoText,author:authedUser})
               .then((question) => dispatch(addQuestion(question)))
               .then(() => dispatch(hideLoading()))
    }
}

export function handleSaveAnswer({authedUser, qid, answer}){
    return (dispatch) => {
        dispatch(showLoading())
        return saveQuestionAnswer({authedUser, qid, answer})
               .then( ({users,questions}) => {
                    dispatch(receiveUsers(users))
                    dispatch(receiveQuestions(questions))
               })
               .then(() => dispatch(hideLoading()))
    }
}

export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}