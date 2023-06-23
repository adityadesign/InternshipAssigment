import { useEffect, useState } from "react"
import DisplayLists from "./assets/DisplayLists"
import Search from "./assets/Search"
import ResultNotFound from "./assets/ResultNotFound"

function App() {

  const [dataArr, setDataArr] = useState([])
  const [filteredArr, setFilteredArr] = useState([])
  const [flag, setFlag] = useState(false)

  //Fetching Data from API
  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then(res => res.json())
      .then(dataAll => {
        setDataArr(dataAll.data)
        setFilteredArr(dataAll.data)
      })
      .catch((err) => err)
  },[])


  //For searching the first_name from the Data
  const handleChange = (e) => {
    const searchName = e.target.value.toLowerCase()

    if(searchName){
      const filteredItems = dataArr.filter(item => {
        return item.first_name.toLowerCase().includes(searchName)
      })
      setFilteredArr(filteredItems)

      //If the searched name is not incorrect, then the flag is set to true to display 'Result Not Found' page.
      if(filteredItems.length===0){
        setFlag(true)
      } else if(filteredItems.length>0){
        setFlag(false)
      }
    } else {
      setFilteredArr(dataArr)
    }
  }

  return (
    <>
      <Search handleChange={handleChange}/>
      {dataArr.length===0 ? <div className="loading">Loading...</div> : <DisplayLists filteredArr={filteredArr}/>}
      <ResultNotFound flag={flag}/>
    </>
  )
}

export default App
