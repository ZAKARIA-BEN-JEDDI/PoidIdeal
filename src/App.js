import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import femme from './femme.png'
import Homme from './homme.png'
function App() {
  const [genre , setgenre ] = useState("")
  const [image , setimage ] = useState(Homme)
  const [taille , settaille ] = useState("")
  const [result , setresult ] = useState("")

  const handlClick = (e) => {
    e.preventDefault()
    if(isNaN(Number(taille))){
      setresult("la taille doit entiers")
    }else{
      let poid = 0
      if(genre==="homme"){
        poid = taille*(2)
      }else{
        poid = taille*(1.5)
      }
      setresult(`Le poids est ${poid} KG`)
      console.log(`Le poids est ${poid} KG`)
    }
  }

  const handlChangetaille = (e) =>{
    settaille(e.target.value)
    console.log(e.target.value)
  }
  const handlChangegenre = (e) =>{
    setgenre(e.target.value)
    console.log(e.target.value)
    if(genre==="Femme"){
      setimage(Homme)
    }else{
      setimage(femme)
    }
  }
  return (<>
    
      <input type="text" onChange={handlChangetaille} placeholder="La taille "/>
      <select onChange={handlChangegenre}>
        <option value="Homme">Homme</option>
        <option value="Femme">Femme</option>
      </select>
      <img src={image} alt="genre" />
      <input type="text" value={result} />
      <button onClick={handlClick}>Calculer le poids</button>
    
  </>);
}

export default App;
