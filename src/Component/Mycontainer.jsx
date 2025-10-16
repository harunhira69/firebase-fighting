import React from "react";
const MyContainer = ({children,classname})=>{
    return <div className={`${classname} container mx-auto`} >
        {children}

    </div>

}
export default MyContainer