import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { mFetch } from "../utils/mockfetch"


const ItemDetailContainer = () => {
    // api manejo de estados etc
    const [product, setProduct ] = useState({})


    useEffect(()=>{
        // llamada a la api
        mFetch(10)
        .then(resp => setProduct(resp))
        .catch(err=> console.log(err))
        // .finally(set loading)
    },[])
    return (
        <div className="d-flex justify-content-center">
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer