import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params; // Provided to us by react-router
    const user = this.props.user; // Provided to us by react-router
    this.props.fetchPost(user, id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params; // Provided to us by react-router
    this.props.deletePost(this.props.user, id, () => {
      this.props.history.push('/posts');
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      // We need this because this component will probably render long before
      // the axios request is resolved and the action > reducer > component
      // flow kicks off.
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/posts">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    )
  }
}


// First argument to mapStateToProps is always are application state.
// But there IS a second argument, which we call 'ownProps'.
// ownProps is props object that is headed to the PostsShow component.
// So, 'this.props' in the component is ABSOLUTELY EQUAL TO (===) ownProps.
function mapStateToProps(state, ownProps) {
  // return { posts } or { posts: posts }// This is dumb way.
  return {
     user: state.user,
     post: state.posts[ownProps.match.params.id]
   } // This smart way.
  // Thus, you can use mapStateToProps not just to pull off peices of state,
  // but you can also do some intermediate logic in them.
}

//export default PostsShow;
export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
