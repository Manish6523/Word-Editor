import React from 'react';
const AlertComponent = (props) => {
    function cap(word){
        let lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase()+lower.slice(1)
    }
    return(
        <div>
            {props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show position-absolute top-0 start-0`} role="alert" style={{width:'100%'}}>
                    <strong>{cap(props.alert.typ)} :</strong> {props.alert.msg}
                </div>}
        </div>
    )
}
export default AlertComponent;