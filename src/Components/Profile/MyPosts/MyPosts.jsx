import React from "react";
import Post from "./Post/Post";
import styled from "styled-components";
// import Button from "react-bootstrap/Button";
import { Button } from "react-bootstrap";

const MyPosts = (props) => {
  let postElements = props.post.map((m) => (
    <Post message={m.message} likesCount={m.likesCount} key={m.id} />
  ));
  let newPostElement = React.createRef();
  let onAddPost = () => {
    props.addPost();
  };
  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  };
  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            placeholder="What's Up???"
            value={props.newText}
          ></textarea>
        </div>
        {/* <div> */}
        <Button variant="outline-primary" onClick={onAddPost}>
          Add Post
        </Button>
        {/* </div> */}
      </div>
      <div>{postElements}</div>
    </div>
  );
};

// const PostsDiv = styled.div`
//   padding: 20px;
// `;
export default MyPosts;
