import React, {useState} from "react"

function useLocalStorage (itemName, initialValue) {
    const [synchronizedItem, setSynchronizedItem] = useState(true)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState(initialValue)
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          //checking local storage
          const localStorageItem = localStorage.getItem(itemName)
          let parsedItem
          
          if(!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parsedItem = initialValue
          } else {
            parsedItem = JSON.parse(localStorageItem)
          }
  
          setItem(parsedItem)
          setLoading(false)
          setSynchronizedItem(true)
        } catch (error) {
          setError(error)
        }
      }, 2500)
    }, [synchronizedItem])
    
  
    //save in local storage
    const saveTasks = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem)
        localStorage.setItem(itemName, stringifiedItem)
        setItem(newItem)
      } catch (error) {
        setError(error)
      }
    }

    const synchronizeItem = () => {
      setLoading(true)
      setSynchronizedItem(false)
    }
    
    return {
      item, 
      saveTasks, 
      loading, 
      error, 
      synchronizeItem
    }
}

export { useLocalStorage }