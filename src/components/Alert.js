import React from 'react'

function Alert(props) {
  return (
    <>
    <div className="container my-3">
    <div className={'alert alert-${props.alert.type} alert-dismissible fade show'}  role="alert" >
            {/* <strong>{props.alert.type}</strong>: {props.alert.msg} */}
            <strong>This is Text analyze</strong>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       </div>
    </div>
    </>
  )
}

export default Alert