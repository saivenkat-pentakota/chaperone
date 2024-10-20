import { ProductProps } from "./Product.props";
import wishlistIcon from "../../images/wishlist.png";

export default function Product(props: ProductProps) {
  return (
    <div>
      <div>
        <div>
          <img src={wishlistIcon} />
        </div>
        <div>
          <img src={props.ImageUrl} />
        </div>
        <div>
          <button>View Product</button>
        </div>
      </div>
      <div>
        <div>{props.productName}</div>
        <div>{props.description}</div>
        <div> rating</div>
        <div> price</div>
        <div>
          <button>Add to cart</button>
          <button>Buy on Rent</button>
        </div>
      </div>
    </div>
  );
}
