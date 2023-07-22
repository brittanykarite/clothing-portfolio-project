<Navbar bg='dark' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand as={Link} to='/'>My Clothing List</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/random'>Random Outfit</Nav.Link>
            <Nav.Link as={Link} to='/inspiration/:inspirationId'>Inspiration</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
