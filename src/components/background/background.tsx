import './background.scss'
import React from 'react'
function Background(props:any){
    return(
        <div className="background">
            <div className="block">
                {props.block}
            </div>
        </div>
    )
}

export default Background