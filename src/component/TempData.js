import React from 'react'

function TempData(props){
    return(
        <div>{console.log(props.data)}
            {   
                props.data && props.data.map(data => {
                    console.log(data)
                    return(
                    <span class="badge badge-dark">{data}</span>

                    )
                })
            }
        </div>
    )
}

export default TempData