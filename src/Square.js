

const Square =({title,items})=>{
    return(
    <div className="square">
             <h3>  {title} </h3>
             <hr/>
             <ul>
                 {items.map(x=> <li key={x}>{x}</li>)}
             </ul>
    </div>
    )
}

export default Square;