import {Link} from "react-router-dom";

function ItemCard (props) {

    const itemData = props.itemData

    return(

        <div className="col-3 m-4 ms-sm-0" >
                 <div className="card" style={{width: "14rem"}}>
                     <h6 className="card-subtitle mb-2 pt-4 text-muted">{itemData.name}</h6>

                     <p className="card-text text-dark">
                         {itemData.description}
                         <br/>
                         Precio: ${itemData.price}
                     </p>

                     <Link to={{
                         pathname: "/item/" + itemData.id,
                         itemData: itemData
                     }} className="btn btn-primary">Ver detalle
                     </Link>
                 </div>
         </div>
    )

}

export default ItemCard