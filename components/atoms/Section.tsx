import stc from "@styles/constants";
import styled from "styled-components";

const Section = styled.section`
  /* 모바일 퍼스트 */
  max-width: ${stc.media.mobile}px;
  padding: 1.6rem ${stc.ui.defaultPadding}px 5rem;
  margin: 0 auto;
`;

export default Section;
