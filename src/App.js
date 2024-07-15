import React, { useEffect, useState } from "react";
import PostDetail from "./PostDetail";

function App() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    console.log("useEffect fetching data");
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((response) => response.json())
      .then(setPosts)
      .catch((error) => {
        console.log(error)
      });
    console.log(posts);
  }, []);

  return (
    <div className="App">
      <PostDetail posts={posts}/>
    </div>
  );
}

export default App;