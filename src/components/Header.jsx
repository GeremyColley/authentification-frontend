import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({  
    token,
    setUser,
}) => {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div>
            {token ? (
        <button
          onClick={() => {
            setUser(null);
          }}
          className="button-logout"
        >
          Se déconnecter
        </button>
      ) : (
        <div>
          <button
            onClick={() => {
              navigate("/signup");
            }}
            className="header-button button-login-signup button-signup"
          >
            S'inscrire
          </button>
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="header-button button-login-signup"
          >
            Se connecter
          </button>
        </div>
      )}
        </div>
    );
};

export default Header;