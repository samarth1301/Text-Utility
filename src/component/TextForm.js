import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");

    let myStyle;
    if(props.mode==="dark"){
        myStyle={
            backgroundColor:"gray",
            color:"white"
        }
    }
    const handleUpClick = () => {
        console.log("Uppercase Button was clicked")
        props.showAlert("Transformed to Uppercase" ,"success");
        setText(text.toUpperCase())
    };
    const handleDownClick=()=>{
        setText(text.toLowerCase());
        props.showAlert("Transformed to Lowercase" ,"success");
    }
    const handleClearClick=()=>{
        props.showAlert("Text Cleared" ,"success");
        setText("");
    }
    const handleSpaceClick=()=>{
        props.showAlert("Extra Spaces Removed" ,"success");
        let x=text.split(/[ ]+/);
        setText(x.join(" "));
    }
    const handleCopyClick=()=>{
        var x=document.getElementById('exampleFormControlTextarea1');
        props.showAlert("Text Copied to Clipboard" ,"success");
        x.select();                                                                                         //selecting and writing value from an element into clipboard
       
        navigator.clipboard.writeText(x.value);
        // navigator.clipboard.writeText(text);
    }
    const handleOnChange = (event) => {
        console.log("Change Happened")
        setText(event.target.value);
    };

    // console.log(text.split(' ').join(""));
    let wordCount=text.split(" ").length;
   
    if(text[(text.length)-1]===" " || text.length===0){
        wordCount--;
    }
    // text="desdgsaddg"; wrong way to change the state
    // setText("hhulhlh");  //correct way to change the state
    // setText(document.getElementById('exampleFormControlTextarea1').value);
    return (
        <>
            <div className="container">
                <h2>{props.heading}</h2>

                <div className="mb-3 ">

                    <textarea style={myStyle} className="form-control" placeholder="Enter text here" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleSpaceClick}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h2>Your text Summary:</h2>
                <p>{wordCount} words, {text.length} characters</p>
                <p>{0.008 * wordCount} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length===0?"Enter your Text to preview here":text}</p>
            </div>
        </>
    );
};

