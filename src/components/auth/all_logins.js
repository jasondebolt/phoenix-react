import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleLoginOauth from './google_login_oauth';
import GoogleLoginOpenId from './google_login_open_id';
import OneLoginOpenId from './onelogin_open_id';
import { Link } from 'react-router-dom';

class AllLogins extends Component {

  render() {
    return (
      <div>
        <GoogleLoginOauth />
        <br />
        <br />
        <GoogleLoginOpenId />
        <br />
        <br />
        <OneLoginOpenId />
        <br />
        <br />
        <Link to="/posts" className="btn btn-primary">View posts</Link>
        <br />
      </div>
    )
  }

}

export default AllLogins;
