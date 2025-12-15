import { css } from "@emotion/react";
import loginBg from "../../assets/login_bg.jpg";

export const layout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const container = css`
    border-radius: 10px;
    width: 80%;
    height: 80%;
    background-color: #fff;
    box-shadow: 0 0 5px 1px #00000088;
    overflow: hidden;
    display: flex;
`

export const leftBackground = css`
    width: 360px;
    flex-grow: 1;
    background-image: url(${loginBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const rightContainer = css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;

    & > h1 {
        color: #222;
    }

    & > p {
        margin: 0;
        margin-bottom: 20px;
        font-size: 14px;
        color: #555;
    }

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 15px;

        & > button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            box-sizing: border-box;
            border: 1px solid #dbdbdb;
            border-radius: 6px;
            height: 36px;
            cursor: pointer;
            font-weight: 500;
            gap: 5px;
        }
    }
`;

export const google = css`
    background-color: #fff;
`

export const naver = css`
    background-color: #03a94d;
    color: #fff;
    & > svg {
        font-size: 10px;    
    }
`

export const kakao = css`
    background-color: #fee500;
    color: #181600;
`