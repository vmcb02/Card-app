import { useEffect, useState } from 'react';
import { CharacterItem } from './CharacterItem';
import  Characters  from './Characters';


export const CardContainer = () => {

const [characterPerson, setCharacterPerson] = useState({});


const onAleatory = () => {
 let characterId = Math.floor((Math.random() * Characters.length  ));
 let randomCharacter = Characters.find((item) => item.id === characterId);
 setCharacterPerson(randomCharacter);
 console.log(randomCharacter)
}

useEffect(() => {
  onAleatory()
}, [])


  return (
    <>
    <div className="container">
        <div className="div_item">
         <CharacterItem 
         { ...characterPerson }
         aleatory={ onAleatory }
         />
        </div>
    </div>
    </>
  )
}
