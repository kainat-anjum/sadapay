import {css} from "styled-components";
import { device } from "./variables";

export const ContainerMargin = css`
  margin: 100px;


  @media ${device.mobileL} {
    margin: 10px;
  }
`;
