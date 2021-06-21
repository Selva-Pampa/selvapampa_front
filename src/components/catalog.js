import {useEffect, useState} from "react";

function Catalog () {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/api/items')
            .then(response => response.json())
            .then(response => setItems(response))

        console.log(items)
    });

    return(
        <div>
            {items}
        </div>
    )
}

export default Catalog
