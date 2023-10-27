import logo from "./logo.svg";
import "./App.css";
import Header from "./modules/header";
import Content from "./modules/content";
import Login from "./SignIn";

function App() {
  return (
    <div className="App">
      <Header />
      <Login/>
      <Content/>
      
    </div>
  );
}
export default App;
