import React from 'react';
import s from "./HomePage.module.scss";
import Content from '../Content/Content';

export default class HomePage extends React.PureComponent{
    postdetail = () =>{
        this.props.history.push('/postdetails');
    }
    newPost = () =>{
        this.props.history.push('/newpost');
    }
    render(){
        return(
            <div className = {s.background}>
            <div className = {s.parent}>
                <span>
                Immateapot
                </span>
                <span onClick = {() => this.newPost()}>
                    Write
                </span>
                <span>
                    Login
                </span>
            </div>
            <div className = {s.border}></div>
            <div onClick = {() => this.postdetail()}><Content></Content></div>
            </div>
        );
    }
}