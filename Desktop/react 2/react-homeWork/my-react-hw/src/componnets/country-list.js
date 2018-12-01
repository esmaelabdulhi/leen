import React, { Component } from "react";
import { place } from "../../config/data"
import { Card } from "../componnets/card/country-card";


export default class CountryList extends Component {

    constructor(props) {
        super(props)

    }

    nextPic() {
        for (let index = 0; index < this.Picturies.length; index++) {
            
            let nextPicture = this.Picturies[index];
        }
        return nextPicture
    }



    render() {

        return (
            <div>

                <div className="row">
                    {place.map((Card) => {
                        return <Card  name={Card.Name} img={this.nextPicture} f-img={Card.Flag}  />
                    })}
                </div>
            </div>
        )
    }
}
