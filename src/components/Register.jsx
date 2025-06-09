import React, { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [confpass, setConfpass] = useState("")
    const validarDatos = (e) => {
        e.preventDefault()
        if (!email.trim() || pass.length < 6 || pass !== confpass) { alert("Minimo 6 caracteres y la pass debe coincidir");  }
         else {
  alert("Todo OK");
}
        
        
    }
    return (
        <div className='registere'>
            
            
            <form onSubmit={validarDatos}>
                <h2>Registrar</h2>
                <label>Email:</label>
                <input type="text" onChange={(e) =>
                (setEmail(e.target.value)
                )}></input>
                <br />

                <label>Pass:</label>
                <input type="text" onChange={(e) =>
                (setPass(e.target.value)
                )}></input>
                <br />
                <label>Confirmar Pass:</label>
                <input type="text" onChange={(e) =>
                (setConfpass(e.target.value)
                )}></input>
                <br />
                <button type="submit">Enviar</button>
            </form>
            
        </div>


    )
}

export default Register;
