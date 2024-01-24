import "./App.css";
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import AllTheBooks from "./Components/AllTheBooks";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Container>
      <MyNav />
      <AllTheBooks />
      <MyFooter />
    </Container>
  );
}

export default App;
