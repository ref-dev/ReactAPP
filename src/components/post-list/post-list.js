import React, { useLayoutEffect } from 'react';
import PostListItem from '../post-list-item'
import './post-list.css'


const PostList = () => {
    return (
        <ul className="app-list list-group-item">
            <PostListItem lable="Going to Learn React" important />
            <PostListItem lable="Going to Learn React-native"/>
            <PostListItem lable="Going to Learn Frontend"/>
        </ul>
    )
}
export default PostList;