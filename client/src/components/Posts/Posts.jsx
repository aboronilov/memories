import React from 'react';
import Post from './Post/Post';
import useStyles from './styles'


const Posts = () => {
   const classes = useStyles()
   return (
      <div>
         POSTS
         <Post />
      </div>
   );
}

export default Posts;
