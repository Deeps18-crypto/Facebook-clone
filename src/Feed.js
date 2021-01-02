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
            post: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {post.map(({ post, id }) => (
        <Post
          key={id}
          username={post.username}
          profilePic={post.profilePic}
          image={post.image}
          message={post.message}
          timestamp={post.timestamp}
        />
      ))}
    </div>
  );
}

export default Feed;
