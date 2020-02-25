import React from 'react'
import TempData from './TempData'

class TempComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            data : [
                {
                name : 'Enterprise Infrastracture',
                types : ['Enterprise Networking', 'Enterprise servers & Systems', 'Enterprise Storage', 
                'Application Development & Integration', 'Cyber Security','Enterprise IT Operations Manangement']
            },
            {
                name : 'Enterprise Software',
                types : ['AdTech', 'AR/VR', 'Blockchain','Digital', 
                'Enterprise Communication', 'Finance Manangement Tecg','Human Capital Management Tech','Sales & CRM Software','Supply Chain Manangement']
            },
            {
                name : 'Fintech',
                types : ['Alternative Lending', 'Banking Tech','Capital Markets','Finannce Data','Insurance Tech','Life and Health','Property and Casulaty']
            },
            {
                name : 'Internet Of Things',
                types : ['Iot-Devices & Platform', 'Iot- - Auto', 'Iot- Commercial Building', 
                'Iot-Consumer', 'Iot-Industrial', 'Iot-Smart City', 'Iot-Utilities']
            },
            {
                name : 'Industrail Tech',
                types : ['3D Printing', 'Auho Tecg', 'Drones', 
                'Manufacturing Tech', 'Robotics','Utilities Tech','Iot-Auto']
            },
            {
                name : 'AI & Analytics',
                types : ['Artifiicial Intelligance', 'Data Management & Analytics']
            },
            {
                name : 'Reatail & Ecommerce Tech',
                types : ['Retail Tech','Ecommerce Tech']
            }, {
                name : 'Traval and Hospitality',
                types : ['Travel Tech','Transport Tech']
            },
            {
                name : 'Other Verticales',
                types : ['Education Tech','Lega; Tech']
            },
        ]
        }
    }

    render(){
        return(
            <div className = "row" >
                {
                    
                    this.state.data.map(data => {
                        return(
                            
                            <div className = "col-md-5 bg-dark" style = {{color : "white", margin : "27px", padding : "20px"}} > 
                            <div className = "sm-dark">
                            <h3>{data.name}</h3>

                             <TempData data = {data.types} />  </div>  
                                <br/>
                            </div>
                        )
                    })
                }
                
            </div>

        )
    }
}

export default TempComponent