import Users from '../models/users';
import Expenses from "../models/expenses";
import Book from '../models/Book';
import Author from '../models/author';

const _ = require("lodash");

const graphql = require("graphql");


const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull } = graphql;

// var books = [
//     {name:'Name of the Wind',genre:'Fantasy',id:'1', authorId:'1'},
//     { name: 'Start Something That Matters', genre: 'Bio', id: '2', authorId: '2'},
//     { name: 'A Song of Fire and Ice', genre: 'Bio', id: '3', authorId: '3'},
//     { name: 'Journey Of Toms Shoes', genre: 'Bio', id: '4', authorId: '2' },
    
// ];

// var authors = [
//     {name:'Patrick Rothfuss', age:44, id:'1'},
//     {name:'Blake Mycoskie', age:42, id:'2'},
//     {name:'George RR Martin', age:52, id:'3'},
// ];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author:{
        type:AuthorType,
        resolve(parent,args){
           return Author.findById(parent.authorId);
        }
    }
  })
});
const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books:{
        type:new GraphQLList(BookType),
        resolve(parent,args){
            return Book.find({authorId:parent.id})
        }
    }
  })
});

const UsersType = new GraphQLObjectType({
  name: "Users",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    birthday: { type: GraphQLString },
    city: { type: GraphQLString },
    password: { type: GraphQLString },
    profilePic: { type: GraphQLString },
    bio: { type: GraphQLString },
    salary: { type: GraphQLInt },
    updatedSalary: { type: GraphQLInt },
    status: { type: GraphQLInt },
    expenses:{
      type:new GraphQLList(ExpensesType),
      resolve(parent, args){
        return Expenses.find({userId:parent.id})
      }
    }
  })
});

const ExpensesType = new GraphQLObjectType({
  name: "Expenses",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    totalAmount: { type: GraphQLInt },
    type: { type: GraphQLString },
    paidAmount: { type: GraphQLInt },
    tag: { type: GraphQLString },
    installment: { type: GraphQLInt }
  })
});



const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Book.findById(args.id);
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Author.findById(args.id);
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return Book.find({});
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return Author.find({});
      }
    },
    user: {
      type: UsersType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Users.findById(args.id);
      }
    },
    users: {
      type: new GraphQLList(UsersType),
      resolve(parent, args) {
        return Users.find({});
      }
    },
    expenses: {
      type: new GraphQLList(ExpensesType),
      resolve(parent, args) {
        return Expenses.find({});
      }
    },
    expense: {
      type: ExpensesType,
      resolve(parent, args) {
        return Expenses.findById(args.id);
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve(parent, args) {
        let author = new Author({
          name: args.name,
          age: args.age
        });
        return author.save();
      }
    },
    addBook: {
      type: BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        let book = new Book({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId
        });
        return book.save();
      }
    },
    addUsers: {
      type: UsersType,
      args: {
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        birthday: { type: new GraphQLNonNull(GraphQLString) },
        city: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        profilePic: { type: GraphQLString },
        bio: { type: new GraphQLNonNull(GraphQLString) },
        salary: { type: new GraphQLNonNull(GraphQLInt) },
        updatedSalary: { type: new GraphQLNonNull(GraphQLInt) },
        status: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve(parent, args) {
        let user = new Users({
          name: args.name,
          birthday: args.birthday,
          city: args.city,
          password: args.password,
          profilePic: args.profilePic,
          bio: args.bio,
          salary: args.salary,
          status: args.status
        });
        return user.save();
      }
    },
    addExpenses: {
      type: ExpensesType,
      args: {
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        totalAmount: { type: new GraphQLNonNull(GraphQLInt) },
        type: { type: new GraphQLNonNull(GraphQLString) },
        paidAmount: { type: new GraphQLNonNull(GraphQLInt) },
        tag: { type: new GraphQLNonNull(GraphQLString) },
        installment: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve(parent, args) {
        let expenses = new Expenses({
          name: args.name,
          totalAmount: args.totalAmount,
          type: args.type,
          paidAmount: args.paidAmount,
          tag: args.tag,
          installment: args.installment
        });
        return expenses.save();
      }
    }
  }
});


module.exports = new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
})