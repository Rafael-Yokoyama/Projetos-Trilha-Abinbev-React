import React, { useEffect } from 'react';
import { FiHeart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getPosts } from '../../store/ducks/Posts/actions';
import { PostItem, PostsState } from '../../store/ducks/Posts/types';

  const Posts = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state: PostsState) => state.posts.postsList)

  const showPosts = () => {
    axios.get('http://localhost:4000/posts')
      .then(response => dispatch(getPosts(response.data)))
  }

  const Like = (i: PostItem) => {
    axios.patch(`http://localhost:4000/posts/${i.id}`, {
      likes: i.likes + 1
    }).then(response => {
      if (response.status === 200) {
        showPosts();
      }
    })
  }

  useEffect(() => {
    showPosts()
 
  }, [])

  return (
    <>
      { posts !== undefined && posts.map((i: PostItem) => (
        <div className="post" key={i.id}>
          <header>
            <img src={i.userPicture} alt="user" />
            <div className="post-user">
              <strong>{i.user}</strong>
              <span>{i.location}</span>
            </div>
          </header>
          <div className="post-image">
            <img src={i.postPicture} alt="post" />
          </div>
          <div className="post-likes">
            <FiHeart onClick={() => Like({ ...i })} /> {i.likes}
          </div>
          <p>{i.description}</p>
        </div>
      ))}
    </>
  )
}

export default Posts;