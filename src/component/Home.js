import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import Col8MainSection from './Choose_Main-Section'
import Side from './Side'

class HomePage extends React.Component{


    render(){
        return(
            <div>
                
               <MDBContainer>
                    <MDBRow>
                        <MDBCol size="8" style = {{margin : "5px"}} >
                            
                            <Col8MainSection style = {{backgroundColor : "#090909"}} />

                        </MDBCol>
                        <MDBCol size="3" style = {{margin : "5px"}} >
                           
                            <Side />
                            <Side />

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}

export default HomePage