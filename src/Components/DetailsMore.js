import { Context } from "../Context";


const DetailsAgain=()=>{
   //const  con=useContext(Context)
 
   return(
<div className="card">
    <h3>Contextually consuming</h3>
 <Context.Consumer>
    {x=> <h5>{x.message} and const message i {x.constantMessage}</h5>}
</Context.Consumer>
</div>
    )
}

export default DetailsAgain;