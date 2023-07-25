import { useState, useEffect } from "react";

function useStorageListener(synchronize) {    
  const [storageChange, setStorageChange] = useState(false)

  useEffect(() => {
    const onChange = (change) => {
      if (change.key === 'TASKS_V1') {
        console.log('Changes were made')
        setStorageChange(true)
      }
    }
    window.addEventListener('storage', onChange)

    return () => {
      window.removeEventListener('storage', onChange)
    }
  }, [])

  const toggleShow = () => {
    synchronize()
    setStorageChange(false)
  }

  return {
    show: storageChange,
    toggleShow
  }
}

export { useStorageListener }