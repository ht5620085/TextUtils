import React, { useState } from 'react'

export default function Text(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    
    const handleLowClick = () => {
        let lowText = text.toLowerCase();
        setText(lowText)
    }
    
    const handleClearClick = () => {
        let clearText = '';
        setText(clearText)
    }
    
    const handleExtraSClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("The text has been copied to your clipboard", "success");
    }

        const handleOnChange = (event) => {
            setText(event.target.value)
        }
        const [text, setText] = useState('');
        return (
            <>
                <div className='container'>
                    <div className="my-2">
                        <h3 className={`my-2 text-${props.mode === 'light' ? 'dark' : 'light'} mb-5`}>{ props.heading }</h3>
                        <textarea className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'}`} id="exampleFormControlTextarea1" style={{backgroundColor: props.mode==='dark'?'lightGray':'white'}} rows="8" value={text} onChange={handleOnChange} placeholder='Enter text here'></textarea>
                    </div>
                    <button type="button" className="btn btn-primary mx-2 my-1" onClick={handleUpClick} disabled={text.length === 0}>UPPER CASE</button>
                    <button type="button" className="btn btn-primary mx-2 my-1" onClick={handleLowClick} disabled={text.length === 0}>lower case</button>
                    <button type="button" className="btn btn-primary mx-2 my-1" onClick={handleClearClick} disabled={text.length === 0}>Clear</button>
                    <button type="button" className="btn btn-primary mx-2 my-1" onClick={handleCopyClick} disabled={text.length === 0}>Copy</button>
                    <button type="button" className="btn btn-primary mx-2 my-1" onClick={handleExtraSClick} disabled={text.length === 0}>Remove Extra Spaces</button>
                </div>
                <div className="container my-1 mx-2">
                    <h4 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Your text summary</h4>
                    <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}> Number of words : {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length}</p>
                    <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Number of characters : {text.length}</p>
                    <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Reading Time : {0.008 * text.split(/\s+/).filter((element)=>{return element.length !==0}).length} minutes</p>
                    <h5 className={`my-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>Preview</h5>
                    <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.length > 0 ? text : 'Nothing to preview!'}</p>
                </div>
            </>
        )
    }
