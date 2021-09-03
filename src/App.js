import React from 'react';

function Food({fav}){
  
  return  <h1>I like {fav}</h1>;
  
}

function App() {
  return (
    <div className="App">
     hello
    <Food fav ="Kimchi" />
    <Food fav ="reamen" />
    </div>
  );
}

export default App;
