import { UserContext } from "../../context/userContext";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const inputText = useRef(null);
  const navigate = useNavigate();
  return (
    <main>
    <div className="login">
    <p>POR FAVOR INTRODUCE TU NOMBRE DE USUARIO PARA ACCEDER A LA GALERIA DE IMAGENES</p>
      <input type="text" ref={inputText} defaultValue={user} placeholder="Nombre..." />
      <button
        onClick={() => {
          setUser(inputText.current.value);
          localStorage.setItem("user", inputText.current.value);
          navigate("/gallery");
        }}
      >
        Login
      </button>
      </div>
    </main>
  );
};

export default Login;