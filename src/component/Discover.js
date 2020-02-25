import React from 'react'

class Discover extends React.Component{
    constructor(){
        super()
        this.state = {
            names : ['Enterprise Infrastructure','Enterprise SoftwareB','AI & Analytics','Internet and Things','Finteach','Industrial Tech','Retail & Ecommerce Tech','Travel and Hospilitily','Other Verticales']
        }
    }
    render(){
        return(
            <div className="col-md-8" style={{color:'white'}}>
                <h4>Discover the popular sector we track</h4>
                <p>Lorm ipsum dolor sit amet, consecteur</p>
                {
                    this.state.names.map(name => {
                        return( 
                        <span class="badge badge-pill badge-dark"> {name}</span>           
                        )
                    })
                }    
            </div>
        )
    }
}

export default Discover