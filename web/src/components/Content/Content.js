import React from 'react';
import s from "./Content.module.scss";
import Person from "../../images/man.jpeg";
import desImage from "../../images/codeimage.png";

export default class Content extends React.PureComponent{
    render(){
        return(
            <div className = {s.margin}>
            <div className = {s.outer}>
                <div>
                    <img className = {s.imageAuther} src = {Person} ></img>
                </div>
                <div className = {s.auther}>
                    <div  className = {s.autherName}>
                    <span>Dan Abramov</span>
                    </div>
                    <div className = {s.time}>
                    <spna>Oct 30, 2018</spna>
                    <span> . ☕️☕️☕️</span>
                    <span>11 min read</span>
                    </div>  
                </div>
            </div>
            <img className= {s.codeimage} src = {desImage}></img>
            <div className = {s.heading}>The most important lessons I’ve learned after a year of working with React</div>
            <div className = {s.read}>Read more...</div>
            </div>
        );
    }
}