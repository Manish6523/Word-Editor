import React, { useState } from 'react';
import './Textinput.css';
export default function Textinputs(props){
    const [text, settext] = useState("")
    let darkModeStyle = {
        backgroundColor:'#151515',
        color:'white',
    }
    let lightModeStyle = {
        backgroundColor:'#b3b3b3',
        color:'black',
    }
    let darkbtnStyle = {
        backgroundColor: 'black',
        color: 'white',
    }
    let lightbtnStyle = {
        backgroundColor:'#dcdcdc',
        color:'black',
    }

    function handler(event){
        settext(event.target.value)
    }
    function copy(){
        navigator.clipboard.writeText(text);
        props.alm('Copied Successfully','success')
        // alert("Copied the text: " + text);
    }
    function uppercase(){
        if(document.querySelector("#texti").value===""){
            
            props.alm('Enter Text First to Convert','warning')
        }else{
            settext(text.toUpperCase())
            props.alm('Converted to Uppercase','success')
        }
    }
    function lowercase(){
        if(document.querySelector("#texti").value===""){
            
            props.alm('Enter Text First to Convert','warning')
        }else{
        settext(text.toLowerCase())
        props.alm('Converted to Lowercase','success')
        }
    }
    function clear(params) {
        document.querySelector("#texti").value=""
        settext("")
    }
    function camelCase(){
        if(document.querySelector("#texti").value===""){
            
            props.alm('Enter Text First to Convert','warning')
        }else{
            let spcArr = text.trimEnd().split(/\s+/)
    
            let result = ""
            for (let i = 0; i < spcArr.length; i++) {
                let moddedstr = spcArr[i]
                let preres = moddedstr[0].toUpperCase() + moddedstr.slice(1)
                result += preres
            }
            props.alm('Converted to CamelCase','success')
            settext(result)
        }

    }
    function camelCaseSpace(){
        if(document.querySelector("#texti").value===""){
            
            props.alm('Enter Text First to Convert','warning')
        }else{
            let spcArr = text.trimEnd().split(/\s+/)

            let result = ""
            for (let i = 0; i < spcArr.length; i++) {
                let moddedstr = spcArr[i]
                let preres = moddedstr[0].toUpperCase() + moddedstr.slice(1) +" "
                result += preres
            }
            props.alm('Converted to CamelCase With spaces','success')
            settext(result)
        }
    }
    function removeExtraSpaces(params) {
        if(document.querySelector("#texti").value===""){    
            props.alm('Enter Text First to Convert','warning')
        }else{
        let word = ""
        for (let i = 0; i < text.trimEnd().split(/\s+/).length; i++) {
            word = word + text.trimEnd().split(/\s+/)[i]+" "
        }
        props.alm('Extra spaces Removed','success')
        settext(word)
        }
    }
    function reverse(params) {
        if(document.querySelector("#texti").value===""){    
            props.alm('Enter Text First to Convert','warning')
        }else{
        let word = ""
        for (let i = 0; i < text.trimEnd().split(/\s+/).length; i++) {
            word = text.trimEnd().split(/\s+/)[i]+" "+word 
        }
        props.alm('Sentence Reversed','success')        
        settext(word)
        }
    }
    return(
        <>
        <div className="container" style={props.mode==='light'?lightModeStyle:darkModeStyle}>
            <div className='titleh'>
            <h4 className='my-3'>Paste Text to Convert</h4><button className='btn btn-danger' style={{paddingLeft:'20px',paddingRight:'20px'}}onClick={clear} >Clear Text</button>
            </div>
            <div className='textContainer'>
                <textarea name="text" value={text} id="texti" style={props.mode==='light'?lightModeStyle:darkModeStyle} placeholder='Enter Text Here' onChange={handler}></textarea>
                    <div className="buttons">
                        <button className='btn1 btn btn-dark'style={props.mode==='light'?lightbtnStyle:darkbtnStyle} onClick={uppercase}>Convet To UpperCase</button>
                        <button className='btn1 btn btn-dark'style={props.mode==='light'?lightbtnStyle:darkbtnStyle} onClick={lowercase}>Convet To LowerCase</button>
                        <button className='btn1 btn btn-dark'style={props.mode==='light'?lightbtnStyle:darkbtnStyle} onClick={camelCase}>Convert To Camelcase</button>
                        <button className='btn1 btn btn-dark'style={props.mode==='light'?lightbtnStyle:darkbtnStyle} onClick={camelCaseSpace}>CamelCase with spaces</button>
                        <button className='btn1 btn btn-dark'style={props.mode==='light'?lightbtnStyle:darkbtnStyle}  onClick={removeExtraSpaces} >Remove Extra Spaces</button>
                        <button className='btn1 btn btn-dark'style={props.mode==='light'?lightbtnStyle:darkbtnStyle}  onClick={reverse} >Reverse the Sentence</button>
                        
                    </div>
            </div>
            <div className="container" style={props.mode==='light'?lightModeStyle:darkModeStyle}>
                <p>
                    {text.trimEnd().split(/\s+/).length} Words and {text.length} characters
                    <button onClick={copy} className='btn btn-success'>
                        copy Text
                    </button>
                </p>
                <div className='dp'>Your Preview : <br />
                    <div className='result'>{text}</div>
                </div>
            </div>
        </div>
        </>
    )
    
}
