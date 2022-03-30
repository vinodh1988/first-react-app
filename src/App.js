import './App.css';
import Square from './Square'
import {useState,useRef} from 'react'

 const App =()=>{
   function handleEvent(){
       let itemtype =type.current.value
       let value = item.current.value

       switch(itemtype){
         case "vegetables":
                 setVegetables([...vegetables,value])
                 break
         case "fruits":
                  setFruits([...fruits,value])
                  break
         case "spices":
                  setSpices([...spices,value])
                  break
         case "cosmetics":
                  setCosmetics([...cosmetics,value])
                  break
         case "electronics":
                  setElectronics([...electronics,value])
                  break
       }
   }
   let type =useRef()
   let item = useRef()
   let [vegetables,setVegetables]=useState(["Onion","Potato","Pumpkin"])
   let [fruits,setFruits]=useState(["Oranges","Grapes","Apple"])
   let [spices,setSpices]=useState(["Pepper","Cinnamon","Cardamom"])
   let [electronics,setElectronics]=useState(["Pendrive","Mobile","Tablet"])
   let [cosmetics,setCosmetics]=useState(["Powder","Cream"])
   return(
        <div>
               <h1>First component</h1>
               <div className="form">
                 Item name <input type="text" ref={item}/>
                 Type <select ref={type}>
                      <option>vegetables</option>
                      <option>fruits</option>
                      <option>spices</option>
                      <option>cosmetics</option>
                      <option>electronics</option>
                 </select>
                 <button type="button" onClick={handleEvent}>Add Item</button>
                </div>
               <Square title="Vegetables" items={vegetables} />
               <Square title="Fruits" items = {fruits}/>
               <Square title="Spices" items = {spices}/>
               <Square title="Electronics" items = {electronics}/>
               <Square title="Cosmetics" items = {cosmetics}/>
        </div>
   )
 }

export default App;
