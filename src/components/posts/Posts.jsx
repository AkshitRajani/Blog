import Post from "../post/Post";
import { contentArr } from "../../components/postContent/postContent";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      {contentArr?.map((post) => (
        <Post
          img={post.img}
          id={post.id}
          tag1={post.tag1}
          tag2={post.tag2}
          tag3={post.tag3}
          tag4={post.tag4}
          tag5={post.tag5}
          tag6={post.tag6}
          postTitle={post.postTitle}
          postTime={post.postTime}
          subDesc={post.subDesc}
        />
      ))}
    </div>
  );
}
