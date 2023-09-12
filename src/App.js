import './App.css';
import BTN from './components/BTN';
import Product from './components/Product';
import WelcomeClass from './components/WelcomeClass';
import WelcomeFunc from './components/WelcomeFunc';
import Input from './components/Input';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      {/* <WelcomeFunc name="" age="26" title="front-end dev"/>
      <WelcomeFunc  name="joe" age="26" title="back-end dev"/> */}
      {/* <WelcomeClass name="keald" age="22" title="vedio editor"/> 
      <WelcomeClass name="joe" age="26" title="back-end dev"/>  */}
      {/* <Product title="1" price="1000" dec="1 (1000)" />
      <Product title="2" price="100" dec="2 (100)" />
      <Product title="3" price="500" dec="3 (500)" /> */}
      {/* <BTN name="click" /> */}
      {/* <Input type="text"/>
      <Input type="email"/> */}
      <Form />
      <Form />
    </div>
  );
}

export default App;
