import { useContext } from "react";
import { useMatch } from "react-router-dom"
import { AppContext } from "../../App";
import NotFound from "../NotFound/NotFound";
import { AddToCart } from "../../Components/AddToCart/AddToCart";
import './Product.css'

export default function Product() {
  const { params } = useMatch("/products/:slug");
  const { products } = useContext(AppContext);

  const product = products.find(product => product.slug === params.slug);

  if (!product) {
    return <NotFound />
  }

  return (
    <div className="Product">
      <div className="ProductImg">
        <img src={product.img} alt={product.name} />
      </div>
      <div>
        <h1 className="productName">{product.name}</h1>
        <p className="productPrice"><strong>Price:</strong> {product.price}$</p>
        <p className="ovreview"><strong>Book Overview: </strong>{product.BookOverview}</p>
        <p className="length"><strong>Length:</strong>{product.Length}</p>
        <p className="format"><strong>format:</strong>{product.Format}</p>
        <p className="publisher"><strong>Publisher:</strong>{product.Publisher}</p>
        <AddToCart product={product} />
      </div>
    </div>
  )
}