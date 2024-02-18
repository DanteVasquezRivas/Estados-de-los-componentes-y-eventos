import React from 'react'
import { Container, Row, Image } from 'react-bootstrap'

const SocialButton = ({ facebookIcon, githubIcon, linkedinIcon }) => {
  return (
    <Container className="justify-content-center align-items-center">
      <Row className="socialIcons">
        <Image className="m-2 rounded-circle border border-dark" src={facebookIcon} alt="Facebook"/>
        <Image className="m-2 rounded-circle border border-dark" src={githubIcon} alt="Github"/>
        <Image className="m-2 rounded-circle border border-dark" src={linkedinIcon} alt="LinkedIn"/>
      </Row>
    </Container>
  );
}

export default SocialButton