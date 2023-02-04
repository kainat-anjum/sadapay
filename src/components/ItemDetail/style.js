import styled from "styled-components";
import { device, colors } from "../../commons/variables";

export const ItemDetailStyled = styled.section`
    margin-bottom: 100px;

  .form-wrapper{
    display: grid;
    grid-template-columns: 40% repeat(3,1fr);
    grid-gap: 30px;
  }

  .actions-wrapper{
    display: grid;
    grid-template-columns: 10% auto 10%;
    grid-gap: 30px;
    margin-top: 50px;

  }

  .delete-button {
    height:50px;
    background: ${colors.primaryColor};
    border: 2px solid ${colors.primaryColor};
    padding: 0px 23px;
    border-radius: 12px;
    font-size: 14px;
    color: ${colors.whiteColor};
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover{
        background: ${colors.whiteColor};
        color: ${colors.primaryColor};
    }
  }

  .save-button {
    height:50px;
    background: ${colors.primaryColor};
    border: 2px solid ${colors.primaryColor};
    padding: 0px 23px;
    border-radius: 12px;
    font-size: 14px;
    color: ${colors.whiteColor};
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: pointer;
    width: max-content;

    &:hover{
        background: ${colors.whiteColor};
        color: ${colors.primaryColor};
    }
  }

  .cancel-button{
    height:50px;
    background: ${colors.whiteColor};
    border: 2px solid ${colors.primaryColor};
    padding: 0px 23px;
    border-radius: 12px;
    font-size: 14px;
    color: ${colors.primaryColor};
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover{
        background: ${colors.primaryColor};
        color: ${colors.whiteColor};
    }
  }

  .input{
    border-radius: 4px;
    border: 1px solid ${colors.grayColor};
    width: 89%;
    padding: 10px 20px;

    &:focus-visible{
        outline: 1px solid ${colors.primaryColor};
    }
  }


`;
