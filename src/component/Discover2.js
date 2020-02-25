import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBNav, MDBNavLink,MDBBtn  } from "mdbreact"

import TempComponent from './Temp'
import Discover from './Discover'

function Home(){
    
    return(
            <div>
                <MDBContainer>
                    <MDBRow>

                        <MDBCol lg="8" style = {{backgroundColor : "#090909", height : "1350px"}} >
                            
                            <Discover />
                            <TempComponent />
                
                        </MDBCol>
                        
                    </MDBRow>
                </MDBContainer>
            </div>
    )
}

export default Home