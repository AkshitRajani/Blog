import { Link } from "react-router-dom";
import "./post.css";

export default function Post(props) {
  const { img, id, tag1, tag2, tag3, tag4, tag5, tag6, postTitle, postTime, subDesc } = props;
  return (
    <div className="post">
      <img className="postImg" src={img} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to={`/posts/?cat=${tag1}`}>
              {tag1}
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to={`/posts/?cat=${tag2}`}>
              {tag2}
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to={`/posts/?cat=${tag3}`}>
              {tag3}
            </Link>
          </span><span className="postCat">
            <Link className="link" to={`/posts/?cat=${tag4}`}>
              {tag4}
            </Link>
          </span><span className="postCat">
            <Link className="link" to={`/posts/?cat=${tag5}`}>
              {tag5}
            </Link>
          </span><span className="postCat">
            <Link className="link" to={`/posts/?cat=${tag6}`}>
              {tag6}
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to={`/post/${id}`} className="link">
            {postTitle}
          </Link>
        </span>
        <hr />
        <span className="postDate">{postTime}</span>
      </div>
      <p className="postDesc">{subDesc}</p>
    </div>
  );
}
