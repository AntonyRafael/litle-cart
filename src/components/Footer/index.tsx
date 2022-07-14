import Divider from "../Divider";
import { FooterStyles } from "./styles";

export default function Footer() {
  return (
    <FooterStyles>
      <Divider />
      <p>
        Developed by {" "}
        <a href="https://github.com/AntonyRafael" target="_blank">
          Antony
        </a>
      </p>
    </FooterStyles>
  );
}
