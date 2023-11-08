import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">"Our mini blog"</span>
        <span className="headerTitleLg">A Little Everything</span>
      </div>
      <img
        className="headerImg"
        src="https://img.freepik.com/free-photo/view-desk-items-frame-with-copy-space_23-2148604850.jpg"
        alt=""
      />
    </div>
  );
}
