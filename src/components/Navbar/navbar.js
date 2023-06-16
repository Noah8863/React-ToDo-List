import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
function Naviation() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">ToDo List!</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Naviation;