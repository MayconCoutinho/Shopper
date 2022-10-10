import { useNavigate } from "react-router-dom";
import { BackGroundCSS, WelcomeMessageCSS } from "./styled";
import { LoginUser } from "../../components/LoginUser/LoginUser";

const LoginPage = () => {
  const navigate = useNavigate();
    return (
      <BackGroundCSS> 
        <WelcomeMessageCSS> Seja bem vindo a Shopper </WelcomeMessageCSS> 
        <LoginUser/>
      </BackGroundCSS>
    )
}
export default LoginPage;