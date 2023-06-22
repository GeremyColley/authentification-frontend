import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const fromPublish = location.state?.fromPublish ? true : null;

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);
      const response = await axios.post(
        "https://site--deltakende--47k78rj4qzvg.code.run/user/login",
        {
          email: email,
          password: password,
        }
      );
      console.log("=> ici" );
      if (response.data.token) {
        setUser(response.data.token);
        setIsLoading(false);
        navigate(fromPublish ? "/private" : "/private");
      } else {
        alert("Une erreur est survenue, veuillez réssayer.");
      }
    } catch (error) {
      //console.log("=> " + error.response.status);
      if (error.response.status === 401 || error.response.status === 400) {
        setErrorMessage("Mauvais email et/ou mot de passe");
        setIsLoading(false);
      }
      console.log(error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Se connecter</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          onChange={(event) => {
            setEmail(event.target.value);
            setErrorMessage("");
          }}
          placeholder="Adresse email"
          type="email"
        />
        <input
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder="Mot de passe"
          type="password"
        />
        <span className="signup-login-error-message">{errorMessage}</span>
        {isLoading ? (
          <p>ICI 1</p>
        ) : (
          <button disabled={isLoading ? true : false} type="submit">
            Se connecter
          </button>
        )}
      </form>
      <Link to="/signup">Pas encore de compte ? Inscris-toi !</Link>
    </div>
  );
};

export default Login;
