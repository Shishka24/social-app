import Post from "./Post/Post";

const MyPosts=()=>{
    return (
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add Post</button>
          </div>
          <div>
        <Post message='Hey World '/>
        <Post message='Hey Jimmy '/>
        <Post/>
        <Post/>
        <Post/>
        </div>
      </div>
    
    )
}
export default MyPosts;
