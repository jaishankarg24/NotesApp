//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
//import Body from './components/Body';
//import Footer from './components/Footer';
import NotesPage from './pages/NotesPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotePage from './pages/NotePage';

function App() {
  return (
    <Router>
    <div className="container dark">
      <div className="app">
      <h1>My Note App</h1>
      <Header/>
  
      <Route exact path="/"  component={NotesPage} />
       
      <Route exact path="/note/:id"  component={NotePage} />
      </div>
    </div>
    </Router>
  );
}

export default App;
