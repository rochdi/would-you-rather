import  React, { Component } from 'react'
import {connect} from 'react-redux'
import Secure from './Utils'
import QuestionsDashboard from './QuestionsDashboard'


class Home extends Component {
    render(){
        const { authedUser } = this.props
        return Secure(authedUser, <QuestionsDashboard  answered={false}/>)
    }
}

function mapStateToProps({authedUser}){
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Home)
