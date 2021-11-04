import React from 'react';
import './App.css';

type AppProps = {
  message?: string;
};
type AppState = {
  counter:number;
};
class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    counter: 0,
  };
  
  render() {
    const inCounter = () => {
      this.setState({counter: this.state.counter+1});
    };
    return (
      <div>
        {this.props.message ? this.props.message : "Nothing here"} 
        <br/>
        Counter = {this.state.counter}
        <br/>
        <button onClick={inCounter}>Increment</button>
      </div>
    );
  }
}




export default App;
