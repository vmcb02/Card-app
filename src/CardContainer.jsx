import { useEffect, useState } from 'react';
import { CharacterItem } from './CharacterItem';
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


  return (
    <>
    <div className="container">
        <div className="div_item">
         <CharacterItem 
         { ...characterPerson }
         aleatory={ aleatory }
         />
        </div>
    </div>
    </>
  )
}
