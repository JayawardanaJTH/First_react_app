import Body from "./components/Body";
import Button from "./components/Button_Save";
import Header from "./components/Header";
import Main_Text from "./components/Main_Text";
import Navigation from "./components/Navigation";
import About_cm from "./components/About_cm";
import Home from "./components/Home";


function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <Main_Text/>
      <Home/>
      <Body/>
    </div>
  );
}
 
export default App;
