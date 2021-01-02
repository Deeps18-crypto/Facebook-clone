import React, { useState, useEffect } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";
import Post from "./Post";
import { db } from "./firebase";

function Feed() {
  const [post, setpost] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setpost(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {post.map((post) => (
        <Post
          key={post.id}
          username={post.data.username}
          profilePic={post.data.profilePic}
          image={post.data.image}
          username={post.data.username}
          message={post.data.message}
        />
      ))}
    </div>
  );
}

export default Feed;
