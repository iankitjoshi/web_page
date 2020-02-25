import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink,MDBCol, MDBIcon } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'


import HomePage from './component/Home'
import BarChart from './component/chartbar';
import Home from './component/Discover2';

class App extends React.Component{

  render(){
    const bgPink = {backgroundColor: '#090909'}
    const container = {height: 1300}
    return(
        
     <div style={{background:'black'}}>
         <BrowserRouter >
            <div >
              <MDBCol lg="12" style = {{backgroundColor : "#090909", height : "45px"}} >

            <Router>
                    <header>
              <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand href="/">
                  <strong><strong>KOGNETICS</strong></strong>
              </MDBNavbarBrand>
              <form class="form-inline my-6 my-lg-0" >
                  <input style={{textAlign : 'center'}} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
                <MDBNavbarNav right>
   
                  <MDBNavItem>
                  <MDBDropdown>
                        <MDBDropdownToggle caret color="dark" style = {{margin : "0px", padding : "10px"}} >
                              <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg"
                          alt=""
                          className="rounded-circle z-depth-1-half" 
                          style = {{width : "20%"}}
                        /> &nbsp; &nbsp;
                                Marinalini Saha
                        </MDBDropdownToggle>
                          <MDBDropdownMenu basic>
                            <MDBDropdownItem>Action</MDBDropdownItem>
                            <MDBDropdownItem>Another Action</MDBDropdownItem>
                            <MDBDropdownItem>Something else here</MDBDropdownItem>
                            <MDBDropdownItem divider />
                            <MDBDropdownItem>Separated link</MDBDropdownItem>
                          </MDBDropdownMenu>
                      </MDBDropdown>
                  </MDBNavItem>
                 
                </MDBNavbarNav>
            </MDBNavbar>
          </header>
        </Router>
        </MDBCol>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className = "container" className = "col-md-11" >
     
        <HomePage />
        <BarChart/>
        <Home />
        
        
      </div>

      </BrowserRouter>
     </div>
     
     
    )
  }
}

export default App;
