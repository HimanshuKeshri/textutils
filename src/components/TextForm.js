import React, {useState} from 'react'

export default function TextForm(props){
    const handelUpClick=()=>{
        console.log("UpperCase was clicked "+text);
        let newText=text.toLocaleUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase!","success");
    }
    const handelVoiceClick=()=>{
        let msg=new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);
    }
    const handelExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("clear extra spaces!","success");  
    }
    const handelClearClick=()=>{
        console.log("Clear was clicked "+text);
        let newText="";
        setText(newText)
        props.showAlert("clear!","success");
    }
    const handelLoClick=()=>{
        console.log("LowerCase was clicked "+text);
        let ltext=text.toLocaleLowerCase();
        setText(ltext)
        props.showAlert("converted to lowercase!","success");
    }
    const handelCopy=()=>{
        console.log("i am copy");
        var text=document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard","sucess");
    }
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    const [text,setText]=useState('Enter text here');
    return  (
        <>
        <div className='container' style={{backgroundColor: props.mode ==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
           <div className="mb-3">
           <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white'}} id="myBox" rows="8"> </textarea>
           </div>
           <button className="btn btn-primary mx-1" onClick={handelUpClick}>Convert to upperCase</button>
           <button className="btn btn-primary mx-1" onClick={handelLoClick}>Convert to lowerCase</button>
           <button className="btn btn-primary mx-1" onClick={handelClearClick}>Clear</button>
           <button className="btn btn-primary mx-1" onClick={handelCopy}>Copy to ClipBoard</button>
           <button type="submit" onClick={handelVoiceClick} className="btn btn-warning mx-2 my-2">Speak</button>
           <button className="btn btn-primary mx-1" onClick={handelExtraSpaces}>Replace</button>

        </div>
        <div className='container my-3' style={{backgroundColor: props.mode ==='dark'?'white':'light'}}>
          <h1>Your Text summary</h1>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008*text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
        </>
    )
}