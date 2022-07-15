import { useEffect, useState } from "react";
import overTen from "../../api/more-teen.json";
import Button from "../../components/Button";
import Divider from "../../components/Divider";
import FreeShipping from "../../components/FreeShiping";
import ProductItem from "../../components/ProductItem";

import { IProductItem } from "../../interfaces/IProductItem";
import AppLayout from "../../layout/AppLayout";
import { fixPriceToBRL } from "../../utils/fixPriceToBRL";
import {
  FinalizePurchaseStyles,
  ProductListStyles,
  TotalCartStyles,
} from "../BelowTen/styles";

export default function OverTenPage() {
  const [products, setProducts] = useState<IProductItem[]>([]);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    //  code simulating API call
    setProducts(overTen.items);
    setTotalValue(overTen.value);
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
