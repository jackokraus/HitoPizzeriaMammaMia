import React, { useState } from 'react';

const Login = () => {
  const [emailog, setEmailog] = useState("");
  const [passlog, setPasslog] = useState("");

  const validarDatoslog = (e) => {
    e.preventDefault();

    if (!emailog.trim() || passlog.length < 6) {
      alert("Mínimo 6 caracteres en la contraseña y el email no debe estar vacío");
    } else {
      alert("Todo OK");
    }
  };

  return (
    <div className='registere'>
      <form onSubmit={validarDatoslog}>
        <h2>Login</h2>

        <label>Email:</label>
        <input
          type="text"
          
          onChange={(e) => setEmailog(e.target.value)}
        />
        <br />

        <label>Pass:</label>
        <input
          type="text" 
         
          onChange={(e) => setPasslog(e.target.value)}
        />
        <br />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Login;
