import './Products.css';
const Product=({id,title,price,rating,image})=>{
    return(
        <div>
                <div className="product">
                    <div className="product__info">
                        <p>{title}</p>
                        <p className="product__price">${price}</p>
                        <div className="product__rating">
                            {Array(rating).fill().map((_,i)=>{
                                return <p>*</p>
                            })}
                        </div>
                    </div>
                    <img src={image} alt="error"  />
                    <button>Add to basket</button>
                </div>
        </div>
    )
}
export default Product;