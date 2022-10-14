import { Header } from "../../components/Header/Header";
import { Cart } from "../../components/Cart/Cart";
import { Slogan } from "../../components/Slogan/Slogan";
import { useState } from "react";
import { Loading } from "../../components/Loading/Loading";

const HomePage = () => {
    const [loading, setLoading ] = useState(true)

    setTimeout(() => {
      setLoading(false)
    }, "3000")
  
    return (
            <> 
                {
                  loading === true ? 
                    <Loading/> : 
                  (<>
                    <Header/> 
                    <Slogan/> 
                    <Cart/>
                    </>)
                }
            </>
    )
}
export default HomePage;