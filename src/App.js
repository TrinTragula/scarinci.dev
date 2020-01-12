import React from 'react';
import './App.css';
import Header from './components/Header';
import HorizontalLine from './components/HorizontalLine';
import Home from './components/Home';

export default class App extends React.Component {
  state = {
    currentPage: "home"
  }

  renderPage = () => {
    switch (this.state.currentPage) {
      case "home":
        return <Home />;
      case "code":
        return <div>Code</div>
      case "contact":
        return <div>Contact</div>
      case "social":
        return <div>Social</div>
      default:
        return <div>404</div>
    }
  }

  render() {
    return (
      <div>
        <Header onClick={(page) => { this.setState({ currentPage: page }) }} />
        <HorizontalLine />
        <div className="container">
          <div className="columns header">
            <div className="column col-2 col-xs-1"></div>
            <div className="column col-1 col-xs-1 back-arrow" onClick={() => this.setState({ currentPage: "home" })}>
              <img src="icons/back.svg" style={{ width: "30%", display: this.state.currentPage === "home" ? "none" : "inline" }} alt="Back arrow" />
            </div>
            <div className="column col-6 col-xs-8">
              {this.renderPage()}
            </div>
            <div className="column col-3 col-xs-2"></div>
          </div>
        </div>
      </div>
    )
  }
}