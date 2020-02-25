import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBNav, MDBNavLink,MDBBtn, MDBIcon  } from "mdbreact"
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";



class Side extends React.Component{


    render(){
        return(
           <div style = {{backgroundColor : "#090909", padding : "10px", marginBottom : "10px"}} >
                <MDBRow  >
                      <MDBCol md = "3" className="label" >
                        <MDBIcon icon="desktop"  size="1x" style = {{backgroundColor : 'rgba(255, 0, 0, 0.2)', padding : "10px", color : "red"}} />
                      </MDBCol>

                      <MDBCol md = "9" className="excerpt">
                          <div className="brief">
                              <h4><strong>Lili Rose</strong></h4>
                          </div>
                          <div className="added-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          </div>
                      </MDBCol>

                  </MDBRow>
            <br></br>
            <MDBRow>
                <MDBCol >
                  <MDBDropdown>
                        <MDBDropdownToggle caret color="dark" style = {{margin : "0px", padding : "10px", width : "100%"}} >
                            Marinalini Saha
                        </MDBDropdownToggle>
                  </MDBDropdown>
                </MDBCol>
            </MDBRow>
            <br></br>
           </div>
        )
    }
}

export default Side