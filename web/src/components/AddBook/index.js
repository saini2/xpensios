// @flow

// React Imports
import React, { Component } from "react";

// Style Imports
import styles from "./index.module.css";

// Module Imports
import { graphql, compose } from "react-apollo";

//Query Imports
import { getAuthorsQuery, addBookMutation, getBooksQuery } from "../../queries/queries";

class AddBook extends Component {
  
  state={
    name:null,
    genre:null,
    authorId:null,
  }
  
  componentDidMount = () => {
    //
  };

  displayAuthors = () =>{
    const {getAuthorsQuery} = this.props;
    if (getAuthorsQuery.loading){
      return (<option>Loading Authors..</option>);
    }
    else{
      return getAuthorsQuery.authors.map((author, index) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };

  submitBook = (e) =>{
    e.preventDefault();
    const {addBookMutation} = this.props;
    const {name, genre, authorId} = this.state;
    addBookMutation({
      variables:{
        name: name,
        genre:genre,
        authorId:authorId
      },
      refetchQueries:[{query:getBooksQuery}]
    })
  }

  render() {
    return (
      <div>
        <form id="add-book" onSubmit={this.submitBook}>
          <div className="field">
            <label>Book name:</label>
            <input type="text" onChange={(e)=>
              {this.setState({name:e.target.value})}
              } />
          </div>
          <div className="field">
            <label>Genre:</label>
            <input type="text" 
              onChange={(e) => { this.setState({ genre: e.target.value }) }
              }
            />
          </div>
          <div className="field">
            <label>Author:</label>
            <select onChange={(e) => { this.setState({ authorId: e.target.value })}} >
              <option value="">Select author</option>
              {this.displayAuthors()}
            </select>
          </div>
          <button>+</button>
        </form>
      </div>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery,{name:"getAuthorsQuery"}),
  graphql(addBookMutation, { name:"addBookMutation"}),
)(AddBook);
