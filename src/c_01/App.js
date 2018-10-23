import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import reducer from './reducer';
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from 'redux';
import ListPage from "./ListPage";
import DetailPage from "./DetailPage";

require("./App.css");
const createLogger = require("redux-logger").createLogger;
const logger = createLogger({ collapsed: true });

const store = createStore(reducer, {}, applyMiddleware(thunk, logger))
export default class ListPageSample extends React.Component {
	render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="list-page-app">
            <Route path="/list-page/:page?" component={ListPage} />
            <Route path="/user/:userId" component={DetailPage} />
          </div>
        </Router>
      </Provider>
    );
  }
}