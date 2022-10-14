import styled from "styled-components";

export const LoadingCSS = styled.div`
    margin-top: 10px;
    display: block;
    position: relative;
    height: 25px;
    width: 23%;
    border: 2px solid #2da77a;
    border-radius: 20px;
    overflow: hidden;    
    ::after {
      content: '';
      margin-top: 2px;
      width: 25%;
      height: 70%;
      border-radius: 10px;
      background: #2da77a;
      position: absolute;
      top: 0;
      left: 0;
      box-sizing: border-box;
      animation: animloader 3.5s linear infinite;
    }
    
    @keyframes animloader {
      0% {
        left: 0;
        transform: translateX(-100%);
      }
      100% {
        left: 100%;
        transform: translateX(0%);
      }
    }
`
export const ContainerCss = styled.div`
    background: #fff;
    position: fixed;
    height: 100vh;
    z-index: 9999;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`