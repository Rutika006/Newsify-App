import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 6;
  apiKey = "79f85e0bfa4a44d19edc96402c747913";; // or hardcode your API key here for GitHub Pages

  state = {
    progress: 0,
    darkMode: false
  }

  setProgress = (progress) => {
    this.setState({ progress });
  }

  toggleDarkMode = () => {
    this.setState({ darkMode: !this.state.darkMode });
  }

  render() {
    return (
      <HashRouter
 basename="/Newsify-App">
        <NavBar darkMode={this.state.darkMode} toggleDarkMode={this.toggleDarkMode} />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={this.state.progress}
        />
        <Routes>
          <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="us" category="general" darkMode={this.state.darkMode} />} />
          <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="us" category="business" darkMode={this.state.darkMode} />} />
          <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" darkMode={this.state.darkMode} />} />
          <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="us" category="general" darkMode={this.state.darkMode} />} />
          <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="us" category="health" darkMode={this.state.darkMode} />} />
          <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="us" category="science" darkMode={this.state.darkMode} />} />
          <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="us" category="sports" darkMode={this.state.darkMode} />} />
          <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="us" category="technology" darkMode={this.state.darkMode} />} />
        </Routes>
      </HashRouter>
    );
  }
}
