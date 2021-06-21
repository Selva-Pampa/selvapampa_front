import {useEffect, useState} from "react";

import React from 'react';
import ItemCard from "./itemCard";

function Catalog () {

    const [items, setItems] = useState([])

    useEffect(() => {

        fetch('http://localhost:8000/api/items/?format=json')
            .then(response => response.json())
            .then(response => setItems(response))

    }, []);

    return (
        <div>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-4"}>
                        ACA VA EL FILTRO
                    </div>

                    <div className={"col-8"}>
                        <div className={"row"}>
                            {items.map(item => <ItemCard itemData = {item} />)}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}
/*
class Catalog extends React.Component{

    //

    /*
    constructor(props) {
        super(props)

        this.state = {
                items: []
            }
    }

    componentDidMount(){
        fetch('http://localhost:8000/api/items/?format=json')
            .then(response => response.json())
            .then(response => {
                    this.setState({
                        items: response
                    })
                    console.log(response)
                }
            )

        console.log(this.state.items)
    }

    render () {
        return (
            <div>
                {this.state.items.map(i => <div>{i.name}</div>)}
            </div>
        )
    }
}*/

export default Catalog
