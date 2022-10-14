import styled from "styled-components";

export const HeaderButtonCartCss = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    margin-right: 80px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    text-decoration: none;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    min-width: 64px;
    padding: 6px 40px 6px 10px;
    border-radius: 4px;
    color: rgb(255, 255, 255);
    background-color: rgb(45, 167, 122);
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
`
export const QuantityCartCss = styled.div`
    font-size: 16px;
    color: rgb(45, 167, 122);
    background-color: #ffffff;
    border-radius: 100px;
    width: 30px;
    text-align: center;
    margin-right: 10px;
`
export const CartTotalPriceCss = styled.div`
    font-size: 16px;
    color: #fff;
    width: 30px;
    margin-left: 5px;
    margin-right: 30px;
`
export const MenuCartCss = styled.div`
    display:${(props) => props.variant === true ?  "flex" : "none"};
    width: 450px;
    flex-direction: column;
    transition: all 0.2s ease 0s;
    opacity: 1;
    visibility: visible;
    position: fixed;
    z-index: 1041;
    right: 5px;
    top: 90px;
    background-color: rgb(255, 255, 255);
    bottom: 10px;
    border-top: 3px solid rgb(45, 167, 122);
    border-left: 1px solid rgb(238, 238, 238);
    border-radius: 6px;
    box-shadow: rgb(187 187 187) 3px 8px 22px -3px;
`
export const ArrowCss = styled.div`
    display:${(props) => props.variant === true ?  "flex" : "none"};
    top: -23px;
    right: 120px;
    position: absolute;
    content: " ";
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgb(45, 167, 122);
`
export const FinaliteBuy = styled.div`
    display:${(props) => props.variant === true ?  "flex" : "none"};
    border: 0px;
    border-radius: 0px 0px 6px 6px;
    padding: 14px 13px;
    width: 100%;
    background: rgb(45, 167, 122);
    line-height: 1.3;
    color: rgb(255, 255, 255);
    font-weight: 700;
    position: relative;
    flex: 0 1 0%;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`
export const ItemCartCSS = styled.div`
    line-height: 18px;
    display: inline-block;
    margin-left: 30px;
    margin-right: 25px;
    margin-top: 20px;
    cursor: default;

    h1{
        display: flex;
        justify-content: space-around;
        align-items: baseline;
        font-size: 18px;
        font-weight: 400;    
        margin-bottom : 10px;
    }
    h2{
        margin-right: 10px;
        font-weight: bold;
        font-size: 17px;
        color: rgb(45, 167, 122);
    }
    p{
        display: flex;
        justify-content: space-around;
        align-items: baseline;
        font-weight: bold;
        font-size: 17px;
        color: rgb(45, 167, 122);
    }
`
export const ScrollCSS = styled.div`
    overflow-y: scroll;
    position: flex;
    height: 700px;
    ::-webkit-scrollbar{
    width: 15px;
    border: 1px solid rgb(45, 167, 122);
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb{
    background-color:rgb(45, 167, 122) ;
    border-radius: 5px;
  }
`
export const EmptyCartCSS = styled.div`
    text-align: center;
    margin-top: 200px;
    
`
