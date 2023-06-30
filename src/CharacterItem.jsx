
export const CharacterItem = ({firstName, lastName, title, family, imageUrl, aleatory }) => {
  return (
    <>
    <div className="div_image">
    <img src={ imageUrl }/>
    </div>
    <div className="div_data">
    <ul>
    <h3>{ firstName} { lastName }</h3>
    <h4>{ title }</h4>
    <p>{ family }</p>
    </ul>
    </div>
    <button onClick={ aleatory }>Search</button>
    </>
  )
}
