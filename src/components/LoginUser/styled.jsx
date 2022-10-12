import styled from "styled-components";

export const WelcomeMessageCSS = styled.div`
    color: #2da77a;
    font-size: 25px;
    padding-top: 40px;
    font-weight: 600;
`
export const ImgCSS = styled.div`
    padding-top: 150px;
`
export const InputCSS = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 50px;
    input{
        padding: 0 5%;
        height: 5vh;
        border-color: #2da77a;
        border-radius: 5px;       
        border-style: solid;
        border-width: 1px;
        outline: none;
        font-size: large;
        margin-top: 2vh; 
    }
`
export const ButtonCSS = styled.div`
    margin-top: 20px;
    button{
        color: #2c3609b7;
    }
`
export const DateCSS = styled.div`
    margin-top: 20px;
    input{
        margin: 15px 15px;
        padding: 8px 18px;
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
        font-weight: 500;
        color: #2da77a;
    }
`
