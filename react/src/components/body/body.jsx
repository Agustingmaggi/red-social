import React, { useState, useEffect } from 'react';
import Twits from "../tweets/tweets";
import Barra_nav from '../barranav/barranav';
import './body.css';

const Body = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    tweet: ""
  });

  useEffect(() => {
    fetch("http://localhost:8000/api/usuarios")
      .then((response) => response.json())
      .then((info) => setData(info.data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:8000/api/usuarios/nuevotweet", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Realizar acciones adicionales después de recibir la respuesta del backend
      })
      .catch(error => {
        console.error(error);
        // Manejar errores en la solicitud
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className='grilla' >
      <header className='header'>
        Header
        <form id='nuevoTweet' onSubmit={handleSubmit}>
          <input type='text' name="tweet" id="tweet" placeholder="qué estás pensando?"
            value={formData.tweet}
            onChange={handleChange}></input>
          <button type="submit">Twitear</button>
        </form>
      </header>
      <nav className='barra-nav'>
        <Barra_nav />
      </nav>
      <nav className='side'>
        <i className="fa-sharp fa-regular fa-house"></i>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel voluptate, ratione, vitae aliquam dolor odio ea possimus culpa inventore explicabo alias aliquid neque ipsa mollitia repellat in consectetur ipsam nisi.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel voluptate, ratione, vitae aliquam dolor odio ea possimus culpa inventore explicabo alias aliquid neque ipsa mollitia repellat in consectetur ipsam nisi.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel voluptate, ratione, vitae aliquam dolor odio ea possimus culpa inventore explicabo alias aliquid neque ipsa mollitia repellat in consectetur ipsam nisi.
      </nav>
      <section className='contenido'>
        Contenido
        <div>

          {data.map((dat) => {
            return (
              <Twits key={dat.id} datos={dat} />
            )
          })}


        </div>
      </section>
    </div >
  );
};

export default Body;