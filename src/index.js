import React from "react";
import ReactDOM from "react-dom/client";

function Page() {
  return (
    <div>
      <h1>Reasons why I'm excited to learn React:</h1>
      <ol>
        <li>It's new!</li>
        <li>It's exciting!</li>
        <li>Will this make me a better programmer?</li>
      </ol>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />);
