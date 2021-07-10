import logo from './logo.svg';
import './App.css';
import Welcome from "./Welcome.js";
import Welcome2 from "./WelcomeFunc.js";
import Restaurant from "./Food.js";
import React from 'react';
import PropTypes from "prop-types";
import ActionLink from './Event';


const alertMyInput = name => alert(name);
const styleobject={ color:'green' , TextAlign :'center'}
const MyComponent = ({ title }) => <h1>{title}</h1>;

/** FUNCTIONAL COMPONENTS **/
function ReactComponent(props) {
  // ...implement render logic here
 }
 
 ReactComponent.propTypes = {
  // ...prop type definitions here
 };


function App() {
  return (
    <div className="App" style={styleobject}>

    <p>*******New Title*******  <MyComponent title="I'm learning React" />
    </p>
     *******Props object *******
     {/* <Welcome {...props.text}/> */}
     <p>
     <p>First :</p> <Welcome text="Imane" age='10' ></Welcome>
     Second :<Welcome text="Sara" age='11'></Welcome>
     Third<Welcome text="Ikram" age='12'></Welcome>
     </p>  

     *******Props Function *******
     <p>
     <Welcome2 alertMyInput={alertMyInput} />
     </p>
    
     ******* QUIZ *******
    <p>
    <Restaurant food="Sandwich" />
    <Restaurant food="Pizza" />
    <Restaurant food="Salad" />
    </p>

   
   

   
    </div>


  );
}

export default App;
