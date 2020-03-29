import React from "react";
import s from "./Home.module.scss";
import profile from "../../images/avengers.jpg";
import bell from "../../images/ic_warning_copy_5.svg";
import { IoIosCar } from "react-icons/io";
import { FaShoppingCart ,FaMoneyBillWaveAlt} from "react-icons/fa";
import { FiGift } from "react-icons/fi";
export default class Home extends React.PureComponent {
  listOfSaving = () => {
    return (
      <div>
        <div className={s.listParent}>
        <IoIosCar size = {45}></IoIosCar>
          <div>
            <div className={s.listName}>
              <span>New car</span>
              <span>25%</span>
            </div>
            <span className={s.timePeriod}>11 months left</span>
            <div className={s.money}>
              <span>2000</span>
              <span>1000000</span>
            </div>
          </div>
        </div>
        <div className={s.listParent}>
        <IoIosCar size = {45}></IoIosCar>
          <div>
            <div className={s.listName}>
              <span>New car</span>
              <span>25%</span>
            </div>
            <span className={s.timePeriod}>11 months left</span>
            <div className={s.money}>
              <span>2000</span>
              <span>1000000</span>
            </div>
          </div>
        </div>
        <div className={s.listParent}>
        <IoIosCar size = {45}></IoIosCar>
          <div>
            <div className={s.listName}>
              <span>New car</span>
              <span>25%</span>
            </div>
            <span className={s.timePeriod}>11 months left</span>
            <div className={s.money}>
              <span>2000</span>
              <span>1000000</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div>
        <div className={s.container}>
          <div className={s.profile}>
            <img className={s.image} src={profile} alt="profile"></img>
            <img className={s.bell} src={bell} alt="bell"></img>
          </div>
          <div className={s.balance}>
            <span> Current Balance</span>
            <span>Cash Avialiable</span>
            <span>
              <sup className={s.rupee}>₹</sup>
              300000
            </span>
          </div>
          <div className={s.logo}>
            <div className={s.shopping}>
            <FaShoppingCart size = {40} />
              {/* <span> shopping </span> */}
            </div>
            <div className={s.cash}>
              <FaMoneyBillWaveAlt size = {40}/>
              {/* <span> cash </span> */}
            </div>
            <div className={s.travel}>
              <FiGift size = {40}/>
              {/* <span> travel </span> */}
            </div>
            <div className={s.rent}>
            <FiGift size = {40}/>

              {/* <span> rent</span> */}
            </div>
          </div>
        </div>
        <div className={s.goalList}>
          <span>Your Goals</span>
          <span>All</span>
          <span>Archived</span>
        </div>
        {this.listOfSaving()}
      </div>
    );
  }
}
