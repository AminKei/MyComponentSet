import React from "react";

interface LoadingProps {
    bgcolor?:string;
}

export const Loading:React.FC<LoadingProps> = (props) => {

    const  {bgcolor} = props;

    return ( 
        <>
            <h1>Loading ...</h1>
        </>
     );
}
 