//Dependecies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

//Data
import items from '../data/menu';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }
  render(){
    const { children } = this.props;
    return (
      <div className="App">
       <Header title="Christian Caro" items={items}/>
       <Content body={children}/>
       <Footer message="Este es un mensaje por componentes" copyright="&copy; 2020 chrisis"/>
      </div>
    );
  }
}

export default App;
