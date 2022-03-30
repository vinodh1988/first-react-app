import './App.css';
import Square from './Square'
import {useState} from 'react'

 const App =()=>{
   let [vegetables,setVegetables]=useState(["Onion","Potato","Pumpkin"])
   let [fruits,setFruits]=useState(["Oranges","Grapes","Apple"])
   let [spices,setSpices]=useState(["Pepper","Cinnamon","Cardamom"])
   let [electronics,setElectronics]=useState(["Pendrive","Mobile","Tablet"])
   let [cosmetics,setCosmetics]=useState(["Powder","Cream"])
   return(
        <div>
               <h1>First component</h1>
               <Square title="Vegetables" items={vegetables} />
               <Square title="Fruits" items = {fruits}/>
               <Square title="Spices" items = {spices}/>
               <Square title="Electronics" items = {electronics}/>
               <Square title="Cosmetics" items = {cosmetics}/>
        </div>
   )
 }

export default App;
