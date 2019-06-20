import  React from 'react'
import { Redirect } from 'react-router-dom'

export default function Secure(authedUser, privateComponent){
    if(authedUser){
        return privateComponent;
    } else {
        return (<Redirect to='/login'  /> )
    }
}