import React from "react";

const BrowserFrame = ({ children }) => (
  <div className="browser-bg">
    <div className="browser-frame">
      <div className="browser-bar">
        <span className="browser-dot red"></span>
        <span className="browser-dot yellow"></span>
        <span className="browser-dot green"></span>
      </div>
      <div className="browser-content">
        {children}
      </div>
    </div>
  </div>
);

export default BrowserFrame; 