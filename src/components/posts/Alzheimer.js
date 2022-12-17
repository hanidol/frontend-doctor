import React, { useState, useEffect } from "react";
import axios from "axios";
const Alzheimer = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = () => {
    axios
      .get("http://localhost:4000/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="header">
        <h1>Data Alzheimer</h1>
      </div>
      <div className="container">
        {posts.map((post) => (
          <div className="movie" key={post.id}>
            <div className="poster">
              <img src={post.selectedFile} width="300" alt="Alzheimer" />
            </div>
            <div className="movie-details">
              <div className="title">
                <h1> {post.title} </h1>
                <h2>{post.creator}</h2>
                <h2>{post.createdAt} </h2>
              </div>
              <div className="overview">
                <p>{post.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Alzheimer;
