import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../../components/Home";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Profile from "../../components/Profile";


// Apollo Client Setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/query'
});

const routes = [
  {
    path:'/',
    component:Home,
    exact:true
  },
  {
    path: '/profile',
    component: Profile,
    exact: true
  }
];


export class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            {" "}
            {/* display Home at default path as of now */}{" "}
            <main>
              {
                routes.map(route=>{
                  return <Route exact={route.exact} path={route.path} component={route.component} />
                })
              }
            </main>{" "}
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
