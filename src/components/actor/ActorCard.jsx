import React from 'react';

const ActorCard = ({ image, name, gender, country, birthday, deathday }) => {
  return (
    <div>
      <div>
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>
      <p>{country ? `Origin: ${country}` : 'Origin: Unknown'}</p>
      <p>{birthday ? `Born Day: ${birthday}` : 'Born Day: Unknown'}</p>
      <p>{deathday ? `Died on : ${deathday}` : null}</p>
    </div>
  );
};
export default ActorCard;
