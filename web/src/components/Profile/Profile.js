// React Imports
import React, { Component } from "react";

// Redux Imports
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Stylesheet Imports
import styles from "./index.module.css";

// Modules Import 
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";

// Component Import
import BookList from "../BookList";
import AddBook from "../AddBook";


// Apollo Client Setup
const client = new ApolloClient({
  uri:'http://localhost:4000/query'
});

class Home extends Component {
  componentDidMount = () =>{
    //
  }
  

  render() {
    return (
    // <ApolloProvider client={client}>
    <div>
      <h1>My Reading List</h1>
      <BookList/>
      <AddBook />
      
    </div>)
    // </ApolloProvider>);
  }

}



export default (Home);

