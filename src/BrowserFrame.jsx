import React from "react";

const BrowserFrame = ({ children }) => (
  <div className="browser-bg">
    <div className="browser-frame">
      <div className="browser-bar">
        <span className="browser-dot red"></span>
        <span className="browser-dot yellow"></span>
        <span className="browser-dot green"></span>
        <div className="browser-address">
          <img src="https://cryptologos.cc/logos/algorand-algo-logo.png" alt="algo" style={{height:18,verticalAlign:'middle',marginRight:8}} />
          https://pay.bolt/algorand
        </div>
      </div>
      <div className="browser-content">
        {children}
      </div>
    </div>
  </div>
);

export default BrowserFrame; 