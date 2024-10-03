import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

export const NavBarBook = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/carousel" >Carousel</Nav.Link>
            <Nav.Link as={Link} to="/empleados" >Empleados</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <section>
        <Outlet/>
      </section>
    </>
  )
}
