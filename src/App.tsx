import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const Header = styled.header`
  background-color: #010101;
  color: #fff;
  padding: 1rem 0;
  text-align: center;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    text-align: center;
  }

  ul li {
    display: inline;
    margin: 0 15px;
  }

  ul li a {
    color: #fff;
    text-decoration: none;
  }
`;

interface ModalProps {
  show: boolean;
}

const Modal = styled.div<ModalProps>`
  display: ${({ show }) => (show ? "flex" : "none")};
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 30%;
  position: relative;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 20px;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const FormGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 200px;
  padding: 5px;
  margin-left: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 8px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;

  &:hover {
    background-color: #45a049;
  }
`;

const Footer = styled.footer`
  background-color: #010101;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header>
        <h1>Profi.yz</h1>
        <Nav>
          <ul>
            <li><a href="#">Главная</a></li>
            <li><a href="#">Специалисты</a></li>
            <li><a href="#">Связаться</a></li>
          </ul>
        </Nav>
        <Button onClick={() => setModalOpen(true)}>Sign in</Button>
      </Header>

      {/* Modal */}
      <Modal show={isModalOpen}>
        <ModalContent>
          <CloseButton onClick={() => setModalOpen(false)}>&times;</CloseButton>
          <h2>Login</h2>
          <Form>
            <FormGroup>
              <label>Email:</label>
              <Input type="email" placeholder="Enter your email" />
            </FormGroup>
            <FormGroup>
              <label>Password:</label>
              <Input type="password" placeholder="Enter your password" />
            </FormGroup>
            <Button type="submit">Login</Button>
          </Form>
        </ModalContent>
      </Modal>

      <Footer>
        <p>&copy; 2025 Profi.yz. All rights reserved.</p>
      </Footer>
    </>
  );
};

export default App;