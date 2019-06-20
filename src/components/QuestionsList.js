import React from 'react'
import Question from './Question'

export default function QuestionsList (props) {
    return (
        <div>
            <ul className='dashboard-list'>
                {
                    props.questions.map((question) => (
                        <li key={question.id}>
                            <Question id={question.id} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}