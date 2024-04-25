import React, { Component } from 'react'
import DQD_EventForm1 from './components/DQD_EventForm1';
import DQD_EventForm2 from './components/DQD_EventForm2';
import DQD_EventForm3 from './components/DQD_EventForm3';
import DQD_EventForm4 from './components/DQD_EventForm4';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Event Form Demo </h1>
        <DQD_EventForm1 />
        <DQD_EventForm2 />
        <DQD_EventForm3 />
        <DQD_EventForm4 name="dinh quoc dat" />
      </div>
    );
  }
}
