import React, { useState } from "react";

function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
      
    const [storageChange, setStorageChange] = useState(false)

    window.addEventListener('storage', (change) => {
      if (change.key === 'TASKS_V1') {
        console.log('Changes were made')
        setStorageChange(true)
      }
    })

    const toggleShow = () => {
      props.synchronize()
      setStorageChange(false)
    }

    return (
      <WrappedComponent 
        show={storageChange}
        toggleShow={toggleShow}
      />
    )
  }
}

export { withStorageListener }