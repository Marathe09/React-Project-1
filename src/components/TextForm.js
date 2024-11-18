import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleToClick = () => {    
    let newText = text.split("").map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join("");
    setText(newText);
  };


  const handleOnChange = (event) => {
    console.log("On Changed");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
    <div className="container">
      <h2>{props.heading}</h2>
      <div class="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-secondary  mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
      <button className="btn btn-secondary  mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
      <button className="btn btn-secondary my-2 mx-2" onClick={handleToClick}>Convert To Togglecase</button>
    </div>
    <div className="container my-3">
      <h1>Your Summary</h1>
      <p>{text.split("l").length} words and {text.length} characters</p>
      <p>{0.008 * text.split("l").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>    
    </div>
    </>
  );
}
