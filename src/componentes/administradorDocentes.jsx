import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import Axios from 'axios'
import Swal from 'sweetalert2'
import { Button, Modal, Form } from 'react-bootstrap'
import "../assets/css/admin.css"


export default function AdministradorDocentes() {

    const [usuarios, setUsuarios] = useState([])
    const [idUsuario, setIdUsuario] = useState('')
    const [show, setShow] = useState(false);

    useEffect(() => {
        obtenerUsuarios()
    }, [])

    const handleClose = () => setShow(false);

    //-------------------------
    const [showActualizar, setShowActualizar] = useState(false);

    const handleClose2 = () => setShowActualizar(false);

    const obtenerUsuario = async (idParametro) => {
        setShowActualizar(true)

        const id = idParametro
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('/usuario/listar/' + id, {
            headers: { 'autorizacion': token }
        })

        console.log(respuesta.data)

        setIdUsuario(respuesta.data._id)
        setNombres(respuesta.data.nombres)
        setCorreo(respuesta.data.correo)
    }

    const actualizar = async (e) => {
        e.preventDefault();
        const id = idUsuario
        const token = sessionStorage.getItem('token')
        const usuario = {
            nombres,
            correo,
        }

        const respuesta = await Axios.put('/usuario/actualizar/' + id, usuario, {
            headers: { 'autorizacion': token }
        })

        const mensaje = respuesta.data.mensaje

        obtenerUsuarios()

        Swal.fire({
            icon: 'success',
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
        })

        setShowActualizar(false)
    }

    const obtenerUsuarios = async () => {
        const id = sessionStorage.getItem('idUsuario')
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('/usuario/listarUsuariosAdmin/' + id, {
            headers: { 'autorizacion': token }
        })

        console.log(respuesta)
        setUsuarios(respuesta.data)

    }

    const data = usuarios.map((usuario) => ({
        id: usuario._id,
        nombres: usuario.nombres,
        correo: usuario.correo
    }))

    //-------------------------

    const [tareas, setTareas] = useState([])

    const obtenerTareas = async (id) => {
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('/tareas/listarTareasUsuario/' + id, {
            headers: { 'autorizacion': token }
        })

        console.log(respuesta)
        setTareas(respuesta.data)

        setShow(true)
    }

    const [nombres, setNombres] = useState('')
    const [correo, setCorreo] = useState('')

    const eliminar = async (id) => {
        const token = sessionStorage.getItem('token')

        const respuesta = await Axios.delete('/usuario/eliminar/' + id, {
            headers: { 'autorizacion': token }
        })

        const mensaje = respuesta.data.mensaje

        Swal.fire({
            icon: 'success',
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
        })

        obtenerUsuarios()

    }

    const irARegistroUsuario = () => window.location.href = '/registrarUsuario';
    const irATareas = () => window.location.href = '/seccionTareas';


    const data2 = tareas.map((tarea) => ({
        id: tarea._id,
        titulo: tarea.titulo,
        descripcion: tarea.descripcion,
        fechaHoraInicio: tarea.fechaHoraInicio,
        fechaHoraFin: tarea.fechaHoraFin,
        observaciones: tarea.observaciones,
    }))

    //-------------------------

    return (
        <div className="admin">
            <MaterialTable
                title={'Docentes'}
                columns={[
                    // { title: 'ID', field: 'id'},
                    { title: 'Nombres', field: 'nombres' },
                    { title: 'Correo', field: 'correo' },
                ]}

                data={data}

                options={{
                    pageSize: 50,
                    search: true,
                    actionsColumnIndex: -1,
                    initialPage: 1,
                    maxBodyHeight: "350px",
                }}
                actions={[
                    {
                        icon: 'chevron_right',
                        tooltip: 'Ver Tareas',
                        onClick: (event, rowData) => obtenerTareas(rowData.id)
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar',
                        onClick: (event, rowData) => eliminar(rowData.id)
                    },

                    {
                        icon: 'edit',
                        tooltip: 'Editar',
                        onClick: (event, rowData) => obtenerUsuario(rowData.id)
                    },
                ]}
            />

            <Modal show={show} onHide={handleClose} size={"xl"}>
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body>

                    <MaterialTable
                        title={"Tareas"}
                        columns={[
                            // { title: 'ID', field: 'id'},
                            { title: 'Titulo', field: 'titulo' },
                            { title: 'Descripcion', field: 'descripcion' },
                            { title: 'Fecha de inicio', field: 'fechaHoraInicio' },
                            { title: 'Fecha de fin', field: 'fechaHoraFin' },
                            { title: 'Observaciones', field: 'observaciones' }
                        ]}

                        data={data2}

                        options={{
                            search: true,
                            actionsColumnIndex: -1,
                            initialPage: 1
                        }}
                    />

                    <Modal.Footer>
                        <Button variant="secondary" onClick={irATareas}>
                            Gestionar Tareas
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal.Body>

            </Modal>
            <Button variant="secondary" onClick={irARegistroUsuario}>
                Crear usuario
            </Button>

            <Modal show={showActualizar} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form >
                        <Form.Group className="mb-3" controlId="formNombres">
                            <Form.Label className="formModal">Nombres</Form.Label>
                            <Form.Control type="text" placeholder="Introducir nombres" onChange={(e) => setNombres(e.target.value)} value={nombres} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formcorreo" >
                            <Form.Label className="formModal">Correo</Form.Label>
                            <Form.Control type="text" placeholder="Introducir correo" onChange={(e) => setCorreo(e.target.value)} value={correo} />
                        </Form.Group>

                    </Form>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose2}>
                            Cerrar
                        </Button>
                        <Button variant="primary" onClick={actualizar}>
                            Guardar
                        </Button>
                    </Modal.Footer>
                </Modal.Body>

            </Modal>


        </div>
    )
}


