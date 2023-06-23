import { useEffect, useState } from "react"
import DisplayLists from "./assets/displayLists"

function App() {

  const [dataArr, setDataArr] = useState([])
  const [filteredArr, setFilteredArr] = useState([])

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
    } else {
      setFilteredArr(dataArr)
    }
  }

  return (
    <>
      <div className="searchSection">
        <label className="searchLabel" htmlFor="name">Search:</label>
        <input className="searchBox" id="name" type="text" onChange={e => handleChange(e)}/>
      </div>

      <DisplayLists filteredArr={filteredArr}/>

      {filteredArr.length === 0 && (
        <>
          <div className="notFound">Results not found</div>
          <img className="notFoundImg" src="/notFound.svg" alt="" />
        </>
      )}
    </>
  )
}

export default App
