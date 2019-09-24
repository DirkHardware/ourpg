import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { fetchUser } from '../actions'
import '../index.css';
import App from '../App';
import rootReducer from '../reducer'
import { Routes, Switch, Link } from 'react-router-dom'


class LoginCard extends React.Component {

    componentDidMount() {
        // fire off dispatch to send my fetch request 
        this.props.fetchUser()
        console.log(this.props.currentUser)
    }

        render() {
            if(!this.props.currentUser) {
                return(
                    <h1>loading</h1>
                )
            }
            else {
                window.localStorage.setItem('currentUser', JSON.stringify(this.props.currentUser ));
                console.log('local storage user', JSON.parse(window.localStorage.getItem('currentUser')))
                // let currentUsername = JSON.parse(window.localStorage.getItem('currentUser')).username
            return(
                <div>
                    <h3>State.User: {this.props.currentUser.username}</h3>
                    <h3>Local storage user name: {JSON.parse(window.localStorage.getItem('currentUser')).username}</h3>
                    <h3>Local storage user ID: {JSON.parse(window.localStorage.getItem('currentUser')).id}</h3>

                </div>
            )}
        }
    }

    function msp(state){
        return({loggedIn: state.loggedIn, currentUser: state.currentUser})
    }
    
    function mdp(dispatch, props){
        let username = props.username
        console.log('hardcoded username is:', props.username)
        return({fetchUser: fetchUser(dispatch, username)})
    }

    export default connect(msp, mdp)(LoginCard)