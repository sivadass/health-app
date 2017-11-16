import React from 'react'
import PropTypes from 'prop-types'

const Posts = ({posts}) => (
  <ul>
    <h3>Posts:</h3>
    {posts.map((post, i) =>
      <li key={i} className="post-item">{post.title}</li>
    )}
  </ul>
)

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts
