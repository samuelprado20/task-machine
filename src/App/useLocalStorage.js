import React, {useState} from "react"

function useLocalStorage (itemName, initialValue) {
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
        } catch (error) {
          setError(error)
        }
      }, 2500)
    },[])
    
  
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
    
    return {item, saveTasks, loading, error}
}

export { useLocalStorage }