import React, { useState } from "react"
import SocialButton from "./SocialButton"
import Formulario from "./Formulario"
import Alert from "./Alert"
import { Card, Container } from "react-bootstrap"

const Registro = () => {
    
    const [alert, setAlert] = useState(null); 
    
    return (
    <div className="d-flex justify-content-center">
        <Card className="rounded-5">
            <Card.Body>
            <Container>
            <h1 className="text-center mb-4">Crea una cuenta</h1>
            <SocialButton
                facebookIcon="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-facebook-4.png"
                githubIcon="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-1.png"
                linkedinIcon="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-linkedin-1.png"
            />
            <h4 className="text-center mt-4">O usa tu email para registrarte</h4>
            <Formulario setAlert={setAlert} />
            {alert && <Alert message={alert.message} color={alert.color} />}
            </Container>
            </Card.Body>
        </Card>
    </div>
  );
};

export default Registro;