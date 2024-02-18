import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

const Formulario = ({ setAlert }) => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  
  const validateData = (e) => {
    e.preventDefault();

    if (
      !name.trim() ||
      !email.trim() ||
      !pass.trim() ||
      !passConfirm.trim()
    ) {
      setAlert({
        message: "¡Todos los campos son obligatorios!",
        color: "danger",
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setAlert({ message: "¡Formato de Email incorrecto!", color: "danger" });
      return;
    }
    if (pass.length < 6 || passConfirm.length < 6) {
      setAlert({
        message: "¡La contraseña debe tener al menos 6 caracteres!",
        color: "danger",
      });
      return;
    }

    if (pass !== passConfirm) {
      setAlert({ message: "¡Las contraseñas no coinciden!", color: "danger" });
      return;
    }

    setAlert({
      message: "¡Formulario enviado exitosamente!",
      color: "success",
    });

    setName("");
    setEmail("");
    setPass("");
    setPassConfirm("");
  };
  
  return (
    <div>
      <Form onSubmit={validateData}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Control type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Control type="email" placeholder="tuemail@ejemplo.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="pass">
          <Form.Control type="password" placeholder="Contraseña" value={pass} onChange={(e) => setPass(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="passConfirm">
          <Form.Control type="password" placeholder="Confirma tu contraseña" value={passConfirm} onChange={(e) => setPassConfirm(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Button type="submit" variant="success" style={{ width: "100%" }}>
            Registrarse
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Formulario;
