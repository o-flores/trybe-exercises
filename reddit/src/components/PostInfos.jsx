import React from 'react';
import { connect } from 'react-redux';

class PostInfos extends React.Component {
  render() {
    const { posts, loading, error } = this.props;
    if (loading) return '...loading';
    if (error) return <div>{`error: ${error}`}</div>
    return (
      <ul>
        { posts.map((post) => <li key={ post.data.id }>{ post.data.title }</li>) }
      </ul>
    )
  }
}

const mapStateToProps = ({ postsReducer: { posts, loading, error } }) => ({
  posts,
  loading,
  error,
})

export default connect(mapStateToProps)(PostInfos);