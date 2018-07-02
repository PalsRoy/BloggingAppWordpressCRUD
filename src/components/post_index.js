import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import _ from 'lodash';
import { Link } from 'react-router-dom';


class PostIndex extends Component {
//lifecycle method: This function will automatically called by React.
//async operation of fetching data, react will automatically render the component.
componentDidMount(){
  this.props.fetchPosts();
}

renderPosts(){
  const objNew = _.map(this.props.posts);
  console.log(objNew);
 return _.map(this.props.posts, blog => {
   return(
    <li className="list-group-item" key={blog.id}>
      <a href={blog.link}>{blog.title.rendered}</a>
      <p>{blog.excerpt.rendered}</p>
    </li>
  );
 });
}

render(){
  return (
    <div className="text-xs-right">
    <Link className="btn btn-primary" to="/posts/new">Add a New Post</Link>
    <ul className="list-group">
      {this.renderPosts()}
    </ul>
    </div>
  );
 }

}

//All the things from the application level state to props
//Which is different from component level state.
function mapStateToProps(state){
  return { posts: state.posts };
}

function mapDispatchToStore(dispatch){
  return bindActionCreators({ fetchPosts: fetchPosts }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToStore)(PostIndex);
