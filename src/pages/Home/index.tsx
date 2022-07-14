import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Divider from "../../components/Divider";
import AppLayout from "../../layout/AppLayout";
import { HomeStyles } from "./styles";

export default function Home() {
  return (
    <AppLayout>
      <HomeStyles>
        <div>
          <Link to="/below-ten">
            <Button fullWidth backgroundColor="#1E88E5">
              Below R$ 10,00
            </Button>
          </Link>
          <Link to="/over-ten">
            <Button fullWidth backgroundColor="#3775ab">
              Over R$ 10,00
            </Button>
          </Link>
        </div>
      </HomeStyles>
    </AppLayout>
  );
}
