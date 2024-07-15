import React, { useState } from "react";

function PostDetail({ posts }) {
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [comments, setComments] = useState([]);

  const handlePostClick = (postId, event) => {
    event.preventDefault();  // Prevent the default anchor behavior
    setSelectedPostId(postId);
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  };

  if (selectedPostId) {
    return (
      <div>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <p>{comment.email}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>post.title</h2>
              <a href="#" onClick={(event) => handlePostClick(post.id, event)}>
                  {post.body}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PostDetail;
