import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBNav, MDBNavLink,MDBBtn  } from "mdbreact"
import { BrowserRouter as Router } from 'react-router-dom';
import './style.css'

class Col8MainSection extends React.Component{
    linkStyle = {
        color : "#ffff",
    }

    buttonStyle = {
        padding : "8px", 
        borderRadius : "20px", 
        margin : "0",
        fontSize : "10px"

    }

    render(){
        return(
            <div>
                    <MDBRow>
                        <MDBCol lg="12" style = {{backgroundColor : "#090909", height : "510px"}} >
                              <br></br>
                                <div style = {{marginLeft : "30px", color : 'white'}} >
                                  <h3 className="font-weight-bold mb-3 p-0">
                                    <strong >Choose From Our Smart Filters</strong>
                                  </h3>
                                  <p style = {{color : "#6B6B6B" , color : 'white'}} >
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                    aut fugit,
                                  </p>
                                 </div>

            <Router>
                  <MDBCol>
                    <MDBNav className="font-weight-bold links" >
                      <MDBNavLink to="#!" style = {this.linkStyle} ><strong><h4>Company</h4></strong></MDBNavLink>
                      <MDBNavLink to="#!" style = {this.linkStyle} ><strong><h4>Investor</h4></strong></MDBNavLink>
                      <MDBNavLink to="#!" style = {this.linkStyle} ><strong><h4>Person</h4></strong></MDBNavLink>
                      <MDBNavLink to="#!" style = {this.linkStyle} ><strong><h4>Sector</h4></strong></MDBNavLink>
                      <MDBNavLink to="#!" style = {this.linkStyle} ><strong><h4>Industry</h4></strong></MDBNavLink>
                    </MDBNav>
                  </MDBCol>
            </Router>

            <Router>
                  <MDBCol>
                    <MDBNav className="font-weight-bold links" >
                      <MDBNavLink to="#!" style = {this.linkStyle} ><MDBBtn rounded outline  color="primary" style = {this.buttonStyle} >Profile</MDBBtn></MDBNavLink>
                      <MDBNavLink to="#!" style = {this.linkStyle} ><MDBBtn rounded outline  color="secondary" style = {this.buttonStyle} >Comparables</MDBBtn></MDBNavLink>
                      <MDBNavLink to="#!" style = {this.linkStyle} ><MDBBtn rounded outline  color="success" style = {this.buttonStyle} >Stratagic Gaps</MDBBtn></MDBNavLink>
                      <MDBNavLink to="#!" style = {this.linkStyle} ><MDBBtn rounded outline  color="info" style = {this.buttonStyle} >Potentials</MDBBtn></MDBNavLink>
                      <MDBNavLink to="#!" style = {this.linkStyle} ><MDBBtn rounded outline  color="warning" style = {this.buttonStyle} >Fast Path</MDBBtn></MDBNavLink>
                      </MDBNav>
                   </MDBCol>
              </Router>
        <br></br>

        <MDBRow>
              <MDBCol md = "6">
                  <MDBBtn outline color="primary" style = {{textAlign : "left", padding : "8px"}} >Improve your ranking model through suggestions based on your bot's usage and user feedback. </MDBBtn>
                  <MDBBtn outline color="primary" style = {{textAlign : "left", padding : "8px"}} >Improve your ranking model through suggestions based on your bot's usage and user feedback.</MDBBtn>
                  <MDBBtn outline color="primary" style = {{textAlign : "left", padding : "8px"}} >Improve your ranking model through suggestions based on your bot's usage and user feedback.</MDBBtn>
              </MDBCol>
              <MDBCol md = "6">
                  <MDBBtn outline color="primary" style = {{textAlign : "left", padding : "8px"}} >Improve your ranking model through suggestions based on your bot's usage and user feedback.</MDBBtn>
                  <MDBBtn outline color="primary" style = {{textAlign : "left", padding : "8px"}} >Improve your ranking model through suggestions based on your bot's usage and user feedback.</MDBBtn>
                  <MDBBtn outline color="primary" style = {{textAlign : "left", padding : "8px"}} >Improve your ranking model through suggestions based on your bot's usage and user feedback.</MDBBtn>
              </MDBCol>
        </MDBRow>

                        </MDBCol>     
                      </MDBRow>
            </div>
        )
    }
}

export default Col8MainSection 