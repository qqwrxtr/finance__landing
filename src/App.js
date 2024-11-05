import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Why_Trade from "./components/Why_Trade/Why_Trade";
import What_Trade from "./components/What_Trade/What_Trade";
import Before__Footer__Form from "./components/Before__Footer__Form/Before__Footer__Form";
import Employers from "./components/Employers/Employers";

function App() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Form/>
        <Why_Trade/>
        <What_Trade/>
        <Before__Footer__Form/>
        <Employers/>
      </main>
    </>
  );
}

export default App;
