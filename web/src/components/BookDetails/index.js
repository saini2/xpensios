// React Imports
import React, { Component } from "react";

// Style Imports
import styles from "./index.module.css";

// Module Imports
import { graphql } from "react-apollo";

//Query Imports
 import {getBookQuery} from "../../queries/queries";


class BookDetails extends Component {
  
  componentDidMount = () => {
    //
  };

  displayBookDetails = () =>{
    const {book} = this.props.data;
    if(book){
      return <div>
        <h2>{book.name}</h2>
        <p>{book.genre}</p>
        <p>{book.author.name}</p>
        <p>All Books by this Author</p>
        <ul className={styles.other_books}>
          {
            book.author.books.map((item,index)=>{
              return(<li key={item.id}>{item.name}</li>)
            })
          }
        </ul>
        </div>
    }
    else{
      return <div>No Book Selected...</div>
    }
  }


  render() {
    return (
      <div id="book-details">
        {this.displayBookDetails()}
      </div>
    );
  }
}

export default graphql(getBookQuery,{
  options:(props) => {
    return{
      variables:{
        id:props.bookId
      }
    }
}})(BookDetails);
