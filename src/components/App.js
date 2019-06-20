import React, { Component, Fragment }  from 'react'
import { handleInitialData } from '../actions/shared'
import LoadingBar  from 'react-redux-loading'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './Nav'
import Home from './Home'
import Login  from './Login'
import QuestionNew from './QuestionNew'
import QuestionPage from './QuestionPage'
import Leaderboard from './Leaderboard'



class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }

  render(){
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>      
            {this.props.loading === true ? null :  
              <div>
                <Nav />
                <Route path='/login' component={Login} />
                <Route path='/questions/:id' exact component={QuestionPage} /> 
                <Route path='/add' exact component={QuestionNew} /> 
                <Route path='/leaderboard' exact component={Leaderboard} /> 
                <Route path='/' exact component={Home} /> 
              </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({users}){
  return {
    loading: Object.entries(users).length === 0
  }
}


export default connect(mapStateToProps)(App);
