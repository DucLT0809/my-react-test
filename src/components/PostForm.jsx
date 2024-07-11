import React, { useState } from "react";
// eslint-disable-next-line react/prop-types
const PostForm = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, body };
    addPost(newPost);
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit} id="addForm">
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>
      <button
        style={{ backgroundColor: "#93E5AB", border: "none" }}
        type="submit"
      >
        Add Post
      </button>
    </form>
  );
};

export default PostForm;
