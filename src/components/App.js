import React from "react";

export default function App() {
  return (
    <div>
      <div className="header">
        <div className="header-side">
          <h1 className="header-title">Movie Memory</h1>
          <div className="header-instructions">
            Get points by clicking on an image, but don't click any image more
            than once.
          </div>
        </div>
        <div className="header-side">
          <div className="header-score">Score: 0</div>
          <div className="header-score">Best Score: 0</div>
        </div>
      </div>

      <div className="content"></div>
    </div>
  );
}
