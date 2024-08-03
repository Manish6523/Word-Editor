import React from 'react';
import './Nav.css';

let darkModeStyle = {
    backgroundColor: 'black',
    color: 'white',
    borderBottom:'1px solid white'
}
let lightModeStyle = {
    backgroundColor:'#dcdcdc',
    color:'black',
    borderBottom:'3px solid black'
}
// function fun(params) {
//     console.log("ksdln")
// }
export default function Navbar(props){
    return(
        <>
        <div className="navbar" style={props.mode==='light'?lightModeStyle:darkModeStyle}>
            <p style={{fontSize:'25px'}}>
                <b>
                Text converter
                </b>
            </p>
                <div className="form-check form-switch">
                    <input className="form-check-input" onClick={props.toggleModes} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
                </div>
        </div>
        </>
    )
}
