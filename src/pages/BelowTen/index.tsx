import belowTen from "../../api/less-teen.json";
import { useEffect, useState } from "react";
import AppLayout from "../../layout/AppLayout";
import ProductItem from "../../components/ProductItem";
import Divider from "../../components/Divider";
import Button from "../../components/Button";
import {
  FinalizePurchaseStyles,
  ProductListStyles,
  TotalCartStyles,
} from "./styles";
import { fixPriceToBRL } from "../../utils/fixPriceToBRL";
import { IProductItem } from "../../interfaces/IProductItem";
import FreeShipping from "../../components/FreeShiping";

export default function BelowTenPage() {
  const [products, setProducts] = useState<IProductItem[]>([]);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    //  code simulating API call
    setProducts(belowTen.items);
    setTotalValue(belowTen.value);
  });

  const isFreeShipping = 15; //totalValue / 100 > 10.0;

  return (
    <AppLayout>
      <section>
        <ProductListStyles>
          {products.map((product) => (
            <ProductItem
              title={product.name}
              listPrice={product.listPrice}
              sellingPrice={product.sellingPrice}
              imageUrl={product.imageUrl}
              key={product.id}
            />
          ))}
        </ProductListStyles>

        <Divider />
        <TotalCartStyles>
          <p>Total:</p>
          <p>{fixPriceToBRL(totalValue)}</p>
        </TotalCartStyles>
        <div>
          {isFreeShipping && (
            <FreeShipping title="Congrats ! You have Free Shipping !" />
          )}
        </div>
        <Divider />
        <FinalizePurchaseStyles>
          <Button fullWidth height={50}>
            finalize purchase
          </Button>
        </FinalizePurchaseStyles>
      </section>
    </AppLayout>
  );
}
