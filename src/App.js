/* import logo from './logo.svg'; */
import "./App.css";
import Content from "./Components/content";
import Header from "./Components/Header";
import Nav from "./Components/nav";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Content />
      
      
    </div>
  );
};

export default App;
