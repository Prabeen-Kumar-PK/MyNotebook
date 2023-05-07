import React from 'react'

export default function Alert(props) {

const capitalize =(word)=>{
    const  wd= word.toLowerCase();
    return wd.charAt(0).toUpperCase() + wd.slice(1);
}

    return (
        <div style={{height:'50px' }} className='mb-2'>
       { props.alert && <>
          <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
              
            </div>

        </>}
        </div>
    )
}
