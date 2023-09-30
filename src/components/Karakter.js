import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Karakter.css";

const Karakter = ({ character }) => {
  return (
    <Accordion>
      <Accordion.Header>
        <h2>{character.name}</h2>
      </Accordion.Header>
      <Accordion.Body>
        <p>
          <b>Karakter Adı:</b> {character.name}
        </p>
        <p>
          <b>Gender:</b>{" "}
          {character.gender[0].toUpperCase() + character.gender.slice(1)}
        </p>
        <b>Height:</b> {character.height}
        <p></p>
        <p>
          <b>Mass:</b> {character.mass}
        </p>
        <p>
          <b>Birth Year:</b> {character.birth_year}
        </p>
        <p>
          <b>Eye Color:</b>{" "}
          {character.eye_color[0].toUpperCase() + character.eye_color.slice(1)}
        </p>
        <p>
          <b>Hair Color:</b>{" "}
          {character.hair_color[0].toUpperCase() +
            character.hair_color.slice(1)}
        </p>
        <p>
          <b>Skin Color:</b>{" "}
          {character.skin_color[0].toUpperCase() +
            character.skin_color.substring(1)}
        </p>
        <Accordion>
          <Accordion.Header>
            <b>Films:</b>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              {character.films.map((film, index) => (
                <li key={index}> {film} </li>
              ))}
            </ul>
          </Accordion.Body>
        </Accordion>
      </Accordion.Body>
    </Accordion>
  );
};

export default Karakter;
