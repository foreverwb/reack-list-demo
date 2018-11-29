import React, { Component } from "react";
import { 
  BrowserRouter as Router,
  Route,
  Link 
} from "react-router-dom";
const Category = ({ match }) => (
  <h1>Sub Category {match.params.subId}</h1>
)
const SubCategory = ({ match }) => (
  <div>
    <h2> Category {match.params.id}</h2>
    <ul>
      <li>
        <Link to={`/category/${match.params.id}/sub/1`}>
          Sub Category 1
        </Link>
      </li>
      <li>
        <Link to={`/category/${match.params.id}/sub/2`}>
          Sub Category 2
        </Link>
      </li>
      <li>
        <Link to={`/category/${match.params.id}/sub/3`}>
          Sub Category 3
        </Link>
      </li>
    </ul>
    <div>
      <Route path="/category/:id/sub/subId" component={Category}></Route>
    </div>
  </div>
)
export default class NestedRoute extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/category/1">Category-1</Link>
            </li>
            <li>
              <Link to="/category/2">Category-2</Link>
            </li>
            <li>
              <Link to="/category/3">Category-3</Link>
            </li>
          </ul>
          <div>
            <Route path="/category/:id" component={SubCategory}></Route>
          </div>
        </div>
      </Router>
    )
  }
}