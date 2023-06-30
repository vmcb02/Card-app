import { useEffect, useState } from 'react';
import { characters } from './characters';


export const CardContainer = () => {

const [characterPerson, setCharacterPerson] = useState({});


const aleatory = () => {
 let characterId = Math.floor((Math.random() * characters.length  ));
 let randomCharacter = characters.find((item) => item.id === characterId);
 setCharacterPerson(randomCharacter);
 console.log(randomCharacter)
}

useEffect(() => {
  aleatory()
}, [])





//const numAleatory = (min, max) => {
//  let aleatory = Math.floor((Math.random() * (max - min + 1)) + min);
//  setNum(aleatory);
//}

  return (
    <>
    <div className="container">
        <div className="div_item">
         
        </div>
    </div>
    </>
  )
}
