import { VscDebugRestart } from "react-icons/vsc";



const FormularioNoEnviado = ({ restartForm }) => {
  return (
    <>
        <div className="no-enviado">
          <h1 className="title-form">Pongámonos en contacto</h1>
          <img src="error400.png" alt="error 400" className="img-error"/>
          <button className="button-form" onClick={restartForm}>
            <VscDebugRestart style={{width: "30px", height: "30px"}} />
          </button>
        </div>
    </>
  );
};

export default FormularioNoEnviado;
