import  React, { Component } from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import Secure from './Utils'
import QuestionsDashboard from './QuestionsDashboard'


class Home extends Component {
    render(){
        const { authedUser } = this.props
        return Secure(authedUser, <QuestionsDashboard  answered={false}/>, this.props.location)
    }
}

function mapStateToProps({authedUser}){
    return {
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(Home))
