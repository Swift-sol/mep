import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Bar from "./components/Bar";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
        <Bar/>
       <CssBaseline />
      <Container maxWidth="sm">
        <Card/>
      </Container>
    </div>
  );
}

export default App;
