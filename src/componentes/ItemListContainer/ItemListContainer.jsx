import { useEffect, useState } from "react"
import { mFetch } from "../utils/mockfetch"



const ItemListContainer = () => {
  
  const [products, setProduct] = useState([])
  const [ loading, setLoading ] = useState(true)
  
  useEffect(()=>{
    mFetch()
    .then(respuesta => setProduct(respuesta))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  }, [])
  
  return (
    <div className="d-flex justify-content-center">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 container g-3 m-3">
        { loading ? <h2>Loading ...</h2> : products.map(product => 
        <div key={product.id} className="col">  
          <div className="card h-100">
            <div className="card-body">
              <img className="w-100 card-img-top" src={product.imageUrl} alt="imagen prenda"/>
              <p>{product.name}</p>
              <p>Precio: {product.price}</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-outline-dark w-100">Detalle</button>
            </div>
          </div> 
        </div>
        )}
      </div>
    </div>
  )
}
export default ItemListContainer