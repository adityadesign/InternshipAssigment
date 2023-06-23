export default function displayLists(props){
    return (
        <div className="container">
        {props.filteredArr.length>0 && props.filteredArr.map(item => {
          return (
            <div key={item.id} className="list">
              <div className="listBorder">
                <img className="listImg" src={item.avatar} alt="avatar" />
                <span className="listId">{item.id}</span>
              </div>
              <span className="listName">{item.first_name}</span>
            </div>
          )
        })}
      </div>
    )
}