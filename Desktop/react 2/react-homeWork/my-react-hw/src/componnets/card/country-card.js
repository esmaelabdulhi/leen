import React, { Component } from "react"


export const Card = (props) => {

    let card = <div className="card col-lg-4" >
        <h1> {props.Name} </h1>
        <img id="img" class="card-img-top" src={props.Picturies[0]} alt="Card image cap"></img>
        {/* <img id="img" class="card-img-top" src={props.Flag} alt="Card image cap"></img> */}
        <button onClick={nextPic()}> next picture </button>
    </div >
   
  
}
