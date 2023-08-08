import React from 'react'

function Alerts(props) {
  return (
     props.alertMessage && <div className={`alert alert-${props.alertMessage.type} alert-dismissible ${props.alertMessage.show}`} role="alert">
     <strong>{props.alertMessage.type}</strong> {props.alertMessage.msg}
     {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
  )
}

export default Alerts