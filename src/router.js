import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const AllLogins = Loadable({
  loader: () => import('./components/auth/all_logins'),
  loading: Loading,
});

const GoogleCallbackPage = Loadable({
  loader: () => import('./components/google_callback_page'),
  loading: Loading,
});

const Posts = Loadable({
  loader: () => import('./components/posts_index'),
  loading: Loading,
});

const PostsNew = Loadable({
  loader: () => import('./components/posts_new'),
  loading: Loading,
});

const PostsShow = Loadable({
  loader: () => import('./components/posts_show'),
  loading: Loading,
});

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/callback" component={GoogleCallbackPage}/>
        <Route exact path="/posts" component={Posts}/>
        <Route exact path="/posts/new" component={PostsNew}/>
        <Route exact path="/posts/:id" component={PostsShow}/>
        <Route exact path="/" component={AllLogins}/>
      </Switch>
    </Router>
  );
};

export default Routes;
