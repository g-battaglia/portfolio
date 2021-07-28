import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  margin-top: 4rem;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 728px) {
      grid-template-columns: 1fr;
    }
  }
`;

export default Grid;
