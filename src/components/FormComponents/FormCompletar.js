import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
const FormularioCompletar = (props) => {
  return (
    <>
      <div className="form-to-complete">
        <form className="form-mail" onSubmit={props.sendEmail}>
          <h1 className="title-form">Pongámonos en contacto</h1>
          <div className="border-input">
            <label className="label-input" htmlFor="nombre">
              <AiOutlineUser style={{ color: "#ffff9e" }} />
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="Nombre"
              maxLength={50}
              id="nombre"
              required
            />
          </div>
          <div className="border-input">
            <label className="label-input label-celeste" htmlFor="email">
              <AiOutlineMail style={{ color: "#ffff9e" }} />
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              maxLength={100}
              id="email"
              required
            />
          </div>
          <div className="border-input textarea-container">
            <label className="label-textarea" htmlFor="mensaje">
              <AiOutlineMessage style={{ color: "#ffff9e" }} />
            </label>
            <textarea
              name="user_message"
              id="mensaje"
              placeholder="Mensaje"
              maxLength={500}
              required
            ></textarea>
          </div>
            <button type="submit" className="button-form">
              {props.buttonText}
            </button>
        </form>
      </div>
    </>
  );
};

export default FormularioCompletar;
