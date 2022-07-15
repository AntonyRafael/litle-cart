import { FreeShippingStyles } from "./styles";

interface IFreeShippingProps {
  title: string;
}

export default function FreeShipping({ title }: IFreeShippingProps) {
  return (
    <FreeShippingStyles>
      <p>{title}</p>
    </FreeShippingStyles>
  );
}
