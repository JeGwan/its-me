import styleVariables from "@styles/variables";
import styled from "styled-components";

const Tag = styled.span`
  display: inline-block;
  border-radius: 0.4rem;
  padding: 0 0.8rem;
  margin: 0 0.2rem;
  background-color: ${styleVariables.colors.grey7};
  color: ${styleVariables.colors.grey3};
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 2;
`;

export default Tag;
