

export const GifItem = ({ id, url, title }) => {
  return (
    <div className="card" style={{width: "400px", height: "350px"}}>
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}
