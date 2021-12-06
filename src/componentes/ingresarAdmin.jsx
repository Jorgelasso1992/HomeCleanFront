import Swal from 'sweetalert2'
import Axios from 'axios'
import React, {useState} from 'react'
import "../assets/css/Login.css";
import logo from "../assets/img/KinderPlannerLogo2.jpg"
import avatar from "../assets/img/avatar_2x.png"


export default function IngresarAdmin() {

    const [correo,setCorreo] = useState('')
    const [contrasena,setContrasena] = useState('')

    const login = async(e) => {
    e.preventDefault();
    const usuario = {correo,contrasena}
    const respuesta = await Axios.post('/admin/login',usuario)
    console.log(respuesta)
    const mensaje = respuesta.data.mensaje

    if(mensaje!=='Has iniciado sesión como Administrador'){
        Swal.fire({
            icon:'error',
            title:mensaje,
            showConfirmButton: false,
            timer:1500
        })
    }else{
        const token = respuesta.data.token
        const nombres = respuesta.data.nombres 
        const idUsuario = respuesta.data.id 
        const tipoUsuario = respuesta.data.tipoUsuario

        sessionStorage.setItem('token',token)
        sessionStorage.setItem('nombres',nombres)
        sessionStorage.setItem('idUsuario',idUsuario)
        sessionStorage.setItem('tipoUsuario',tipoUsuario)

        Swal.fire({
            icon:'success',
            title:mensaje,
            showConfirmButton: false,
            timer:2000
        })

        window.location.href='/administradorDocentes'
        }
    }

    return (
        <div className="Login">
            <div className="login-card-login">
                <img className="img-fluid" src={logo} alt="Logo">
                </img>
                <p className="profile-name-card-login">
                    <img className="profile-img-card-login" src={avatar} alt="Avatar" />
                </p>
                <form className="form-signin-login" onSubmit={login}>
                    <span className="reauth-email-login">
                    </span>
                    <input className="form-control" type="email" id="inputEmail" placeholder="Correo" required="" autofocus="" onChange={(e) => setCorreo(e.target.value)}>
                    </input>
                    <input className="form-control" type="password" id="inputPassword" required="" placeholder="Contraseña" onChange={(e) => setContrasena(e.target.value)}>
                    </input>
                    <button className="btn btn-primary btn-lg d-block btn-signin w-100" type="submit">
                        Ingreso Administrador
                    </button>
                </form>
            </div>
        </div>
    )

}