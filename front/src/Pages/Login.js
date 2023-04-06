import React, { useState } from 'react'
import styles from './Login.css'
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [formData, setFormData] = useState({
        user: '',
        password: '',
      });
    
      const navigate = useNavigate();
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        // Validar los datos del formulario aquí
        const isValid = true;
    
        if (isValid) {
          // Redirigir al usuario a la página de inicio
          navigate('/');
        }
      };

  return (
    <div id="main-container" className={`${styles.div} justify-content-center`}>
    <div className="row">
      <div id="auth-form" className="card border-primary">
        <h5 className="card-header bg-primary text-white">
        Loguéate</h5>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="panel-body">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa fa-user" />
              </span>
              <input type="text" id="login" name="login" className="form-control" placeholder="Usuario"  onChange={handleChange} />
            </div>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa fa-lock" />
              </span>
              <input type="password" id="password" name="password" className="form-control" placeholder="Contraseña" value={formData.password} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Log in</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);
  
}

export default Login