import './App.css';
import Layout from './components/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import Cart from './components/Cart'
import Pages from "./components/Pages"

function App() {
  return (
    <>
    <Layout/>
    <Cart />
    <Pages />
    </>
  );
}

export default App;
