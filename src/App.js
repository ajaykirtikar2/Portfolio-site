import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
//import ContactPage from './pages/ContactPage'

import Pdf from '../src/assets/documents/Resume2020.pdf';



class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      // top level
      title: 'Ajay Kirtikar',
      headerLinks: [
        { title: 'Home', path:'/home' },
        { title: 'About', path:'/about' },
        { title: 'Contact', path:'/contact' },
      ],
      home: {
        title: 'Welcome.',
        subtitle: 'Check out my projects below',
        text: 'I am a rising senior pursuing a B.S degree in Computer Science at The Ohio State University '
      },
      about: {
        title: 'About Me.',
       
      },
      contact: {
        title: 'Let\'s Talk.',
        subtitle: 'Fill out the form to send me an email regarding any questions/comments'
      }
        
    }
  }

  render(){
    return (
      <Router> 
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand='xl' >
            <Navbar.Brand href="/">Ajay Kirtikar</Navbar.Brand>

            <Navbar.Brand> <a href = {process.env.PUBLIC_URL + Pdf}>Resume</a></Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                {/*<Link className="nav-link" to="/contact">Contact</Link> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={()=> <HomePage title={this.state.home.title} subtitle = {this.state.home.subtitle} text={this.state.home.text} />} />
          <Route path="/about"  render={() => <AboutPage title={this.state.about.title} />} />

          {/* <Route path="/contact"  render={() => <ContactPage title={this.state.contact.title} subtitle = {this.state.contact.subtitle} />} /> */}

          <Footer/>



        </Container>
      </Router>
    );
  }
}

export default App;
