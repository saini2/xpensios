import React from 'react';
import s from "./NewEntry.module.scss";

import { FaEllipsisH ,FaArrowLeft} from "react-icons/fa";

export default class NewEnrty extends React.PureComponent {
   render(){
    return(
        <>
            <div className = {s.container}>
            <div className = {s.arrow}>
            <FaArrowLeft />
            <FaEllipsisH size={20} />
            </div>
            <div className = {s.text}>
                Creates your new saving goal !!
            </div>
            </div>
            <div className={s.goalContainer}>
                <div className ={s.list}>
                <div className = {s.box}>
                <span>Enter your plan</span>
                <span>Buy New Watch</span>
                </div>
                <div className = {s.box2}>
                <span>Amount</span>
                <span>
                <span className={s.rupee}>₹</span>
                    5000</span>
                </div>
                <div className = {s.box2}>
                <span>
                    Monthly contribution
                </span>
                <span>
                <span className={s.rupee}>₹</span>
                    50</span>
                </div>
                </div>
                <div className = {s.creategoal}>
                    <div className = {s.textbox}>
                    <span>You will save 500 by</span>
                    <span className = {s.date}> Nov 2019</span>
                    </div>
                    <div className = {s.button}>
                        <spna>Create Goal</spna>
                    </div>
                </div>
            </div>
        </>
    );
   }
}