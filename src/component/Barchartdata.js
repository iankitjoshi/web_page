import React from 'react'

function Barchartfun(props){
    return(
        <div>
             {   
                props.data && props.data.map(data => {
                    console.log(data)
                    return(
                    <button type="button" class="btn btn-primary btn-sm"  style={{backgroundColor : 'black' , borderRadius : '7px'   }} >{data}</button>
                    )
                })
            }
        </div>
    )
}

export default Barchartfun