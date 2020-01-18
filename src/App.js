import React from 'react';
import Header from './components/Header';
import HorizontalLine from './components/HorizontalLine';
import Home from './components/Home';
import Code from './components/Code';
import "./App.css";

export default class App extends React.Component {
  state = {
    currentPage: "home"
  }

  renderPage = () => {
    switch (this.state.currentPage) {
      case "home":
        return <Home />;
      case "code":
        return <Code />;
      case "contact":
        return (
          <div className="page">
            <h1>Contacts</h1>
            <dl style={{ textAlign: 'center' }}>
              <dt>
                <img src="icons/mail-g.svg" alt="Mail logo" className="contacts_logo_left" />
                Mail
                <img src="icons/mail-g.svg" alt="Mail logo" className="contacts_logo_right" />
              </dt>
              <dd><a style={{ 'color': '#807fe2' }} href="mailto:scarinci.dan@gmail.com" alt="scarinci.dan@gmail.com">scarinci.dan@gmail.com</a></dd>
              <dt>
                <img src="icons/github.svg" alt="Mail logo" className="contacts_logo_left" />
                GitHub
                <img src="icons/github.svg" alt="Mail logo" className="contacts_logo_right" />
              </dt>
              <dd><a style={{ 'color': '#807fe2' }} href="https://github.com/TrinTragula" alt="github" target="_blank" rel="noopener noreferrer">TrinTragula</a></dd>
              <dt>
                <img src="icons/linkedin.svg" alt="Mail logo" className="contacts_logo_left" />
                LinkedIn
                <img src="icons/linkedin.svg" alt="Mail logo" className="contacts_logo_right" />
              </dt>
              <dd><a style={{ 'color': '#807fe2' }} href="https://www.linkedin.com/in/danielescarinci/" alt="linkedin" target="_blank" rel="noopener noreferrer">Daniele Scarinci</a></dd>
            </dl>
          </div>)
      default:
        return <div>404</div>
    }
  }

  render() {
    return (
      <div>
        <Header onClick={(page) => { this.setState({ currentPage: page }) }} currentPage={this.state.currentPage} />
        <HorizontalLine />
        <div className="container">
          <div className="columns header">
            <div className="column col-3 col-xs-1"></div>
            <div className="column col-6 col-xs-10">
              {this.renderPage()}
            </div>
            <div className="column col-3 col-xs-1"></div>
          </div>
        </div>
      </div>
    )
  }
}