import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Cart } from "../../components/Cart/Cart";
import { Slogan } from "../../components/Slogan/Slogan";

const HomePage = () => {
  const navigate = useNavigate();
    return (
    <> 
      <Header/>
      <Slogan/>
      <Cart/>
    </>
    )
}
export default HomePage;