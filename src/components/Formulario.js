import { useState } from "react";
import emailjs from "@emailjs/browser";
import FormularioNoEnviado from "./FormComponents/FormNoEnviado";
import FormularioEnviado from "./FormComponents/FormEnviado";
import FormularioCompletar from "./FormComponents/FormCompletar";

const Formulario = () => {
  const initialState = "Enviar";
  const [buttonText, setButtonText] = useState(initialState);
  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Enviando...");
    emailjs
      .sendForm(
        "service_x4vtzij",
        "template_b0la07i",
        e.target,
        "hpT1nuLfi19II3Jlna"
      )
      .then(
        (response) => {
          console.log(response);
          setButtonText("Enviado");
        },
        (error) => {
          console.log(error.text);
          setButtonText("Error");
        }
      );
  };
  const restartForm = () => {
    setButtonText(initialState);
  };
  return (
      <div className="containers container-margin" id="contactame">
        <div className="shadow-form"/>
        <div>
          <img src="world.png" alt="world map" className="world"/>
        </div>
      
        {buttonText === "Enviado" ? (
          <FormularioEnviado />
        ) : buttonText === "Error" ? (
          <FormularioNoEnviado restartForm={restartForm} />
        ) : (
          <FormularioCompletar sendEmail={sendEmail} buttonText={buttonText} />
        )}
        
      </div>
  );
};

export default Formulario;
