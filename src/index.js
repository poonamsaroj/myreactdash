import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/dashboard';
import Navbarpage from './components/navbarpage';

class HelloWorld extends React.Component{
    render()
    {
      return (
        <section>
        <Navbarpage />
        <Dashboard />
        </section>
      )
    }
  }
  ReactDOM.render(<HelloWorld />, document.getElementById('root'));