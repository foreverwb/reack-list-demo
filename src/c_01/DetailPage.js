import React, { Component } from "react";
import { fetchUser } from "./actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class DetailPage extends Component {
  componentDidMount() {
    if(!this.getUser()) this.props.fetchUser(this.props.match.params.userId)
  }
  getUser() {
    return this.props.userList.byId ? this.props.userList.byId[this.props.match.params.userId] : null
  }
  render() {
    const user = this.getUser();
    if(!user) return 'loading...'
    const {first_name, last_name} = user;
    return (
        <div className="detail-page">
          <Link to="/list-page">Back</Link>
          <br/>
          <br/>
          <br/>
          <ul>
            <li>
              <label>First name</label>
              <span>{first_name}</span>
            </li>
            <li>
              <label>Second name</label>
              <span>{last_name}</span>
            </li>
          </ul>
        </div>
    )
  }
}
function mapStateToProps(state) {
  return { userList: state };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUser}, dispatch)
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailPage);