import styled from 'styled-components';
import FadeIn from 'react-fade-in/lib/FadeIn';

export const FlexGrid = styled(FadeIn)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const SearchCard = styled.div`
  width: 300px;
  height: 100%;
  margin: 0 15px 40px;

  .img-wrapper {
    width: 100%;
    border-radius: 40px;
    height: 420px;
    overflow: hidden;
    border: 1px solid #ddd;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  h1 {
    margin: 10px 0;
    font-size: 21px;
  }

  p {
    margin: 0;
  }
`;

export const Star = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: ${props => (props.active ? '#ffc806' : '#ddd')};
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
`;
// export const FlexGrid = styled.div`
//   flex-wrap: wrap;
//   justify-content: center;
//   display: flex;
//   padding: 0 0 32px;
//   margin: 48px auto 0;
//   width: 300px;
//   font-family: Quicksand, arial, sans-serif;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
//   border-radius: 5px;
// `;
