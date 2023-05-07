import React, { useState } from "react";

export default function TextForm(props) {
  // handle click events  on uppercase button
  const handleUpClick = () => {
    // console.log("Uppercase button clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase each word of sentence","success")
  };

  // handle click events  on lowercase button
  const handleLowClick = () => {
    // console.log("Lowercase button clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower-case each word of sentence","success")
  };


  // handle click events on capitalise button
  const handlecapClick = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
      })
      .join(" ");

    setText(newText);
    props.showAlert("Converted to capitalize each word of sentence","success")
  };



//function for handleextraspace
const handleExtraSpace = () => {
  let newText = text.split(/[  ]+/);
  setText(newText.join(" "));
  props.showAlert("All Extra spaces are removed and your text is spaced","success")
}

  const handleOnChange = (event) => {
    // console.log("changed");
    setText(event.target.value);
  };




  // usestate
  // const [text, setText] = useState("Enter Your Text here for analysis.");
  const [text, setText] = useState("");

  // use state for  changing text color


 
  return (
    <>
      <h1 className="my-2">{props.heading}</h1>
      <div className={`mb-3 bg-${props.toggleMode} p-3`}>
        <label htmlFor="myBox" className="form-label">
          {props.labelName}
        </label>
        <textarea
          className="form-control cursor-pointor"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode === "dark"?"#03001C":"white", color:props.mode==="dark"?"white":"black"}}
        ></textarea>

        {/* buttons */}
        <div className={`container  col-6  d-inline mx-auto my-auto p-3 bg-${props.toggleMode} `} >
          <button disabled={text.length===0} className={`btn btn-${props.buttonColor} m-2`} onClick={handleUpClick}>
            UpperCase
          </button>

          <button  disabled={text.length===0} className={`btn btn-${props.buttonColor} m-2`} onClick={handleLowClick}>
            LowerCase
          </button>

          <button disabled={text.length===0} className={`btn btn-${props.buttonColor} m-2`} onClick={handlecapClick}>
            Capitalise
          </button>

          <button disabled={text.length===0} className={`btn btn-${props.buttonColor} m-2`} onClick={handleExtraSpace}>
            Clear-Space
          </button>
        </div>

        {/* extra functionalities */}
        <div className={`container my-4 bg-${props.toggleMode} text-${props.tc} p-3 `}>
          <h1 className={`text-${props.tc}`}>Your Text Summary</h1>
          <h3 className={`text-${props.tc}`}>
            {text.split(/\s+/).filter((elemet)=>{return elemet.length !== 0}).length} words and {text.length}characters
          </h3>
          <h4 className={`text-${props.tc}`}>{0.008 * text.split(" ").filter((elemet)=>{return elemet.length !== 0}).length} minuites needed to read .</h4>
          <h2 className="text-decoration-underline"> Preview : </h2>
          <p className={`text-${props.tc}`}>{text.length > 0 ?text:"Enter somethig in the text box above to Preview it here."}</p>
        </div>
      </div>
    </>
  );
}
