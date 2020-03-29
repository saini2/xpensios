// React Imports
import React, { Component } from "react";

// Redux Imports
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Stylesheet Imports
import styles from "./Profile.module.scss";
import SiteLayout from "../../layouts/SiteLayout/SiteLayout";

// Modules Import 

// Component Import



class Profile extends Component {
  componentDidMount = () =>{
    //
  }
  

  render() {
    return (
      <SiteLayout>
      <h1>My Reading List</h1>
      
      </SiteLayout>)
  }

}



export default Profile;

