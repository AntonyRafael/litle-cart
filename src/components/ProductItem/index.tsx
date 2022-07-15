import { fixPriceToBRL } from "../../utils/fixPriceToBRL";
import Divider from "../Divider";
import { ProductItemStyles } from "./styles";

interface IProductItemProps {
  title: string;
  listPrice: number;
  sellingPrice: number;
  imageUrl: string;
  imageAlt?: string;
}

export default function ProductItem({
  title,
  listPrice,
  sellingPrice,
  imageUrl,
  imageAlt,
}: IProductItemProps) {
  return (
    <ProductItemStyles>
      <div className="productImage">
        <img src={imageUrl} alt={imageAlt ? imageAlt : `Product ${title}`} />
      </div>
      <div className="productInfo">
        <p>{title}</p>
        <span className="listPrice">{fixPriceToBRL(listPrice)}</span>
        <span className="sellingPrice">{fixPriceToBRL(sellingPrice)}</span>
      </div>
    </ProductItemStyles>
  );
}
