import React from 'react'

function Alert(props) {
    const upper=(word)=>{
        let text=word.toLowerCase();
        return text[0].toUpperCase() + text.slice(1);
    };
    return (
        
            props.alert&& <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{upper(props.alert.type)}:</strong> {props.alert.msg}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
        
    )
}

export default Alert
