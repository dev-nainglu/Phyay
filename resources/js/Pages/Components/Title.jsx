import React from "react";

export default function Title(props){

    return (
        <>
            <div className="w-full" key="">
               <h1 className="text-xl text-center text-black-100">{props.title}</h1>
            </div>
        </>
    );

}

