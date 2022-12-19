import { Link } from "react-router-dom";
import styled from "styled-components";

export const ExternalLink = styled.a.attrs((props) => ({
  target: "_blank",
  rel: "noreferrer",
}))`
  text-decoration: none;
`;

export const InternalLink = styled(Link)`
  text-decoration: none;
`;
