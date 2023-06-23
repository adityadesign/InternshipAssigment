export default function ResultNotFound(props){
    return (
        props.flag && (
            <>
              <div className="notFound">Results not found</div>
              <img className="notFoundImg" src="/notFound.svg" alt="" />
            </>
          )
    )
}