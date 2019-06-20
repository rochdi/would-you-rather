import React, {Fragment} from 'react'

export default function QuestionSummary(props) {
    const {authedUser, question, user} = props
    console.log(props)
    const totalVotes = question.optionOne.votes.length+question.optionTwo.votes.length;

    return (
        <div className='question'>
            <img src={user.avatarURL} alt={`Avatar of ${user.name}`} className='avatar' />
            <div className='question-info'>
                <div>
                    <h2>Asked by {user.name}</h2>
                    <h3>Results:</h3>
                    <div>
                        <h3>{question.optionOne.text} { question.optionOne.votes.includes(authedUser) && <Fragment>(Your vote) </Fragment>}</h3>
                        <p>{(question.optionOne.votes.length * 100 /totalVotes).toFixed(2)} % : {question.optionOne.votes.length} out of {totalVotes} </p>
                    </div>
                    <div>
                        <h3>{question.optionTwo.text} { question.optionTwo.votes.includes(authedUser) && <Fragment>(Your vote)</Fragment>}</h3>
                        <p>{(question.optionTwo.votes.length * 100 /totalVotes).toFixed(2)} % : {question.optionTwo.votes.length} out of {totalVotes}</p>    
                    </div>
                </div>
            </div>
        </div>
    )
}