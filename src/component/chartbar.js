import React from 'react'
import Barchartfun from './Barchartdata'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'


class BarChart extends React.Component{
    constructor(){
        super()
        this.state = {
            data : [
                {
                  name : 'Run Select use case for',
                  type : ['Buy Side PE' , 'Buy side Corporate' , 'sell side' ]  
                },
                {
                    name : 'Top Charts',
                    type : ['Acquirers','Founders','Institutional Investor','Boardmembers','Investment Partners','Corprate VCs','Smart Money Investor','Private Equity']
                },
               
            ]
            
        }
    }
    render(){
        return(     
            <div >
                <MDBCol lg="11" >    
                  <MDBRow  >                         
                    {
                        this.state.data.map(data => {
                            return( 
                                <div className = "col-md-4 bg-dark" style = {{color : "white", margin : "20px", padding : "20px" ,}} > 
                                <div className = "bg-dark">
                                <h3>{data.name}</h3> 
                                <Barchartfun data={data.type} />    
                                </div>                   
                            </div>)
                        })
                    }
                  </MDBRow>
                </MDBCol>
            </div>
        )
    }
}

export default BarChart