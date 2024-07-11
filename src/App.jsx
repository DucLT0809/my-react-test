import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PostForm from "./components/PostForm";
function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
  const addPost = (post) => {
    setPosts((prevPosts) => [...prevPosts, post]);
  };
  return (
    <div className="container">
      <h1>Posts</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <div className="post-title">{post.title}</div>
            <div className="post-body">{post.body}</div>
          </li>
        ))}
      </ul>
      <PostForm addPost={addPost} />
    </div>
  );
}

export default App;
