import styled from "styled-components";
import { device, colors } from "../../commons/variables";
import { ContainerMargin } from "../../commons/styles";

export const ListStyled = styled.section`
  ${ContainerMargin};
  font-family: "Poppins";

  .page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .list-wrapper .list {
    display: grid;
    grid-template-columns: 40% repeat(4, 1fr);
    border-top: 1px solid ${colors.alphaGreyColor};

    @media ${device.tablet} {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  .add-button {
    height: 50px;
    background: ${colors.primaryColor};
    border: 2px solid ${colors.primaryColor};
    padding: 0px 23px;
    border-radius: 12px;
    font-size: 14px;
    color: ${colors.whiteColor};
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      background: ${colors.whiteColor};
      color: ${colors.primaryColor};
    }

    @media ${device.mobileL} {
      font-size: 12px;
      padding: 0px 10px;
      height: 30px;
    }
  }

  .edit-link {
    color: ${colors.primaryColor};
    cursor: pointer;
  }

  .offer {
    -webkit-animation: flicker 2s infinite;
    color: #2ce6c8;
  }

  @keyframes flicker {
    0%,
    19.999%,
    22%,
    62.999%,
    64%,
    64.999%,
    70%,
    100% {
      opacity: 0.99;
      text-shadow: -1px -1px 0 $outline, 1px -1px 0 $outline,
        -1px 1px 0 $outline, 1px 1px 0 $outline, 0 -2px 8px, 0 0 2px,
        0 0 5px #ff7e00, 0 0 15px #ff4444, 0 0 2px #ff7e00, 0 2px 3px #000;
    }
    20%,
    21.999%,
    63%,
    63.999%,
    65%,
    69.999% {
      opacity: 0.4;
      text-shadow: none;
    }
  }
`;
