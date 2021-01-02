import React from "react";
import "./Widget.css";

function Widget() {
  return (
    <div className="widget">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=5500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
        width="340"
        height="100%"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}

export default Widget;
