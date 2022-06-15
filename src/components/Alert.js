import React from 'react'

function Alert(props){
    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
    props.alert && <div className={'alert alert-${props.alert.type} alert-dismissable fade show'} role="alert">
    <strong>{capitalize(props.alert.type)}</strong> You should check in on some of those fields below.
    </div>
  )
}

export default Alert
