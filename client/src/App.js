import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Matches from "./pages/Matches";
import Kids from "./pages/Kids";

import Header from "./components/Header";
// import Footer from "./components/Footer";

import SearchBar from "./testing/SearchBar";
import Request from "./pages/Request";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>

      <Router>

          <Header />
          <div className="container master">
            <Routes>
              <Route path="request" element={<Request />} />
              <Route path="/" element={<Login />} />
              <Route path="/search" element={<SearchBar />} />
              <Route path="/home" element={<Home />} />
              <Route path="/matches" element={<Matches />} />
              <Route path="/kids" element={<Kids />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/me" element={<Profile />} />
              <Route path="/profiles/:username" element={<Profile />} />
            </Routes>
          </div>
     

      </Router>
      
    </ApolloProvider>
  );
}

export default App;