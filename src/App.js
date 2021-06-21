import './App.css';
import './components/login'
import Login from "./components/login";
import {Link, Route, Switch} from "react-router-dom";
import SamplePage from "./components/samplepage";
import Catalog from "./components/catalog";

function NavBar(){
    return(
        <nav className="nav justify-content-center bg-light mb-5">
            <Link className="nav-link text-dark h6" aria-current="page" to="#">Home</Link>
            <Link className="nav-link text-dark h6" to="/catalogo">Productos</Link>
            <Link className="nav-link text-dark h6" to="#">¿Cómo comprar?</Link>
            <Link className="nav-link text-dark h6" to="#">Mi regalo</Link>
            <Link className="nav-link text-dark h6" to="#">Contacto</Link>
            <Link className="nav-link text-dark h6" to="#">Mi cuenta</Link>
            <Link className="nav-link text-dark h6" to="#">Tienda</Link>
            <Link className="nav-link text-dark h6" to="#">Artista</Link>
        </nav>
    );
}
function Header(){
    return(
        <header className={"p-4 bg-warning"}>
            <div className="jumbotron ">
                <img src={"https://www.selvapampa.com.ar/wp-content/uploads/2020/04/logo_01.png"} width={"10%"}/>
            </div>
        </header>
    )
}
function App() {

  var authenticated = false

  return (
    <div className="App">
        <Header/>
        <NavBar/>
        <Switch>
            <Route exact path='/'/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/catalogo' component={Catalog}></Route>
            <Route exact path='/private' component={authenticated ? SamplePage : Login}></Route>
        </Switch>
    </div>
  );
}

export default App;
