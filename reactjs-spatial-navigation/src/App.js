import React, {PureComponent} from "react";
import FocusItem from "./Components/NavComponents";
import Navigation from "./Components/NavLogic";
import "./App.css";




class App extends PureComponent {
  
  componentDidMount(){
    Navigation.initialize();
  }
 
  componentWillUnmount(){
    Navigation.terminate();
  }

  render(){
    return (
      <div className="App">
        <FocusItem>
          <h1>elem 1</h1>
          <h1>elem 2</h1>
        </FocusItem>
          <h1>elem 3</h1>
          <h1>elem 4</h1>
          
      </div>
    );
  }
}

export default App;