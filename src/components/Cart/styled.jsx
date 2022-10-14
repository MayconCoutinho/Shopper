import styled from "styled-components";

export const ContainerCss = styled.div`
    display: grid;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const ContainerGridCss = styled.div`
    display: grid;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: 1fr 1fr 1fr;
`
export const ButtonDeleteCSS = styled.div`
    margin-top: 8px;
    button{
        color: #8f0000;
        font-size: 20px;
        background: none;
        border: none;
        cursor: pointer;
        :hover{
            color: #ff0000;
        }
    }
`
export const ButtonPutCSS = styled.div`
    margin-top: 8px;
    button{
        color: #008f07;
        font-size: 20px;
        background: none;
        border: none;
        cursor: pointer;
        :hover{
            color: #00d80b;
        }
    }
`
export const CartCss = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    margin-bottom: 20px;
    width: 250px;
    min-width: 250px;
    height: 315px;
    border: 1px solid rgba(226, 226, 226, 0.38);
    border-radius: 8px;
    padding: 5px;
    position: relative;
    box-shadow: 0px 1px 8px rgb(0 45 98 / 6%);
    text-align: center;
`
export const NameCss = styled.div`
    margin-top: 20px;
    color: #363636;
    font-size: 20px;
`
export const PriceCss = styled.div`
    margin-top: 20px;
    color: #2da77a;
    font-weight: 700;
    font-size: 24px;
`
export const ButtonAddCart = styled.div`
    display: inline-block;
    background-color: rgb(255, 255, 255);
    color: rgb(45, 167, 122);
    font-size: 16px;
    font-weight: bold;
    padding: 6px 12px;
    margin-bottom: 0px;
    line-height: 1.42857;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
    background-image: none;
    border-radius: 50px;
    border: 2px solid rgb(45, 167, 122);
    width: 120px;

    :hover{
        background-color:  rgb(45, 167, 122);
        color: rgb(255, 255, 255);

    }
`
export const StockCss = styled.div`
    color: #9b9b9b;
    font-size: 20px;
    margin-bottom: 10px;
`
export const InputCss = styled.div`
    input{
        text-align: center;
        font-size: 14px;
        padding: 4px 8px;
        background-color: hsl(0, 0%, 100%);
        border-color: #2da77a;
        border-radius: 4px;
        border-style: solid;
        border-width: 1px;
        flex-wrap: wrap;
        justify-content: space-between;
        min-height: 38px;
        outline: 0!important;
        transition: all 100ms;
        box-sizing: border-box;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-weight: 1000;
        color: #2da77a;
    }
   
`