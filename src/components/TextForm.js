import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpperCaseClick = ()=> {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to uppercase!", "success");
    }
    const handleLowerCaseClick = ()=> {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lowercase!", "success");
    }
    const handleClearClick = ()=> {
        // console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!", "success");
    }
    const handleOnChange = (event)=> {
        // console.log("Changed");
        setText(event.target.value);
    }
    const handleCopyClick = ()=> {
        console.log("text copied");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard!", "success");
    }
    const handleExtraSpacesClick = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className='container'>
                <h1>{props.textTitle}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpperCaseClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowerCaseClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpacesClick}>Remove extra spaces</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> charecters</p>
                <p>{text.split(" ").length * 0.08} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
