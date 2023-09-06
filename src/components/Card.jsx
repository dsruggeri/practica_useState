/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { data } from '../assets/data';




const Card = () => {

const styleimg = {
    width: "100%"
}

//traigo la data    
const info = data;

//defino la variable que voy a usar para modificar el estado
const totalIntegrantes = info.integrantes.length;

//defino el estado inicial, 0 por el primer indice el array de integrantes
const [indice, setIndice] = useState(0)

//defino qué sucede si hago click en "atrás"
const handlePrev = () => {
    if(indice == 0){
        setIndice(totalIntegrantes - 1)
    } else{
        setIndice(indice - 1)
    } 
};

//defino qué sucede si hago click en "adelante"
const handleNext = () => {
    if(indice == totalIntegrantes - 1){
        setIndice(0)
    } else{
        setIndice(indice + 1)
    } 
};

  return (
    
    <div className='container'>
        <h1>{info.nombre}</h1>
        <p>{info.descripcion}</p>
        <div>
            <h2>Integrantes:</h2>
            <div className="card col-3 col-sx-12">
            <img className="card-img-top" src={info.integrantes[indice].foto} id='foto' style={styleimg}></img>
                <div className="card-body">
                    <h5 className="card-title">{info.integrantes[indice].nombre}</h5>
                    <p className="card-text">Edad: {info.integrantes[indice].edad} años</p>
                </div>
                <div className='row'>
                    <div className='col-6'><button className='btn btn-primary' onClick={handlePrev}> atrás </button></div>
                    <div className='col-6'> <button className='btn btn-primary' onClick={handleNext}> adelante </button></div>
                </div>    
            </div>
            
        </div>    
    </div>
  )
}

export default Card
