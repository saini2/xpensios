import React from "react";
import s from "./Home.module.scss";
import profile from "../../images/avengers.jpg";
import bell from "../../images/ic_warning_copy_5.svg";
import shopping from "../../images/34627.png";
import rent from "../../images/rent.png";
import cash from "../../images/cash.png";
import travel from "../../images/travel.png";
import car from "../../images/car.png";

export default class Home extends React.PureComponent {
  listOfSaving = () => {
    return (
      <div>
        <div className={s.listParent}>
          <img className={s.carImage} src={car}></img>
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
          <img className={s.carImage} src={car}></img>
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
          <img className={s.carImage} src={car}></img>
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

            <label className={s.switch}>
              <input
                type="checkbox"
                onChange={e => this.handleChange(e)}
                checked={this.state.smsNotification}
                name={"sms"}
              />
              <span className={s.slider}></span>
            </label>
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
              <img className={s.image} src={shopping} alt="shopping" />
              {/* <span> shopping </span> */}
            </div>
            <div className={s.cash}>
              <img className={s.image} src={cash} alt="cash" />
              {/* <span> cash </span> */}
            </div>
            <div className={s.travel}>
              <img className={s.image} src={travel} alt="travel" />
              {/* <span> travel </span> */}
            </div>
            <div className={s.rent}>
              <img className={s.image} src={rent} alt="rent" />
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
