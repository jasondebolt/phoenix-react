import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class PostIndex extends Component {

  componentDidMount() {
    this.props.fetchPosts(this.props.user);
  }

  renderPosts() {
    return _.map(this.props.posts, (post, i) => {
      return (
        <li className="list-group-item" key={i}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    posts: state.posts
  };
}

// export default connect(null, { fetchPosts: fetchPosts })(PostIndex);
// is same as ...
export default connect(mapStateToProps, { fetchPosts })(PostIndex);
// The above is identical to using mapDispatchToProps.
