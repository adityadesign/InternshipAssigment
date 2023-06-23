export default function Search(props){
    return (
        <div className="searchSection">
            <label className="searchLabel" htmlFor="name">Search:</label>
            <input className="searchBox" id="name" type="text" onChange={e => props.handleChange(e)} autoComplete="on"/>
        </div>
    )
}