import React from 'react'

export default function Leader (props) {
    const { name, avatarURL, answered, asked,total} = props.leader
    return (
        <div className='question'>
            <img src={avatarURL} alt={`Avatar of ${name}`} className='avatar' />
            <div className='question-info'>
                <div>
                    <h3>{name} asks:</h3>
                    <h4>Answered question {answered}</h4>
                    <h4>Created questions {asked}</h4>
                    <h4>Score {total}</h4>
                </div>
            </div>
            <hr />
        </div>
    )
}
