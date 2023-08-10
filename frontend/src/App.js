import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Content from "./Components/Content/Content";
import Outro from "./Components/Outro/Outro";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Content />
        <Outro />
        <Footer />
      </div>
    </div>
  );
}

export default App;
