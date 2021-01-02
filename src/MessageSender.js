import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import firebase from "firebase";

function MessageSender() {
  const [input, setinput] = useState("");
  const [image, setimage] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const clickHandler = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: image,
    });
    setinput("");
    setimage("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            placeholder={`whats's on your mind? ${user.displayName}`}
            className="messageSender__input"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />
          <input
            placeholder="image URL (Optional)"
            value={image}
            onChange={(e) => setimage(e.target.value)}
          />
          <button type="submit" onClick={clickHandler}>
            Hidden button
          </button>
        </form>:😄
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h2>Live feed</h2>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h2>Photo/Video</h2>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h2>Feeling/Activity</h2>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
