import React from "react";

const Home = () => {
  return (
    <section className="home" id="home">
      <div >
        <img src="brilloDorado.png" alt="brillo" className="brillo-dorado" />
        <img
          src="brilloPlateado.png"
          alt="brillo"
          className="brillo-plateado"
        />
      </div>
      <div className="info">
        <div className="info-text">
          <p className="home-text border"> ¡Hola! </p>
          <h1 className="home-text-title">Soy Joaquín Rodríguez,</h1>
          <p className="home-text">Programador Front-end e ilustrador  </p>
          <p className="home-text">nacido en Buenos Aires, Argentina.</p>
        </div>
        <img className="ilustration" src="yo.png" alt="ilustración" />
      </div>
      <img src="giphy.webp" className="background-code" alt="fondo animado" />
      
    </section>
  );
};

export default Home;
