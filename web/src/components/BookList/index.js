// React Imports
import React, { Component } from "react";

// Style Imports
import styles from "./index.module.css";

// Module Imports
import { graphql } from "react-apollo";

//Query Imports
import {getBooksQuery} from "../../queries/queries";
import BookDetails from "../BookDetails";


class BookList extends Component {
  state={
    selected:null
  }
  componentDidMount = () => {
    //
  };

  displayBooks = () => {
    const { data } = this.props;
    if (data.loading) {
      return <div>Loading</div>
    }
    else {
      return data.books.map((book) => {
        return (<li className={styles.bookList} key={book.id} onClick={(e)=>{this.setState({selected:book.id})}}>{book.name}</li>);
      });
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className={styles.bookListWrapper}>
        <ul id="book-list">{this.displayBooks()}</ul>
        <BookDetails bookId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(
  getBooksQuery
)(BookList);
