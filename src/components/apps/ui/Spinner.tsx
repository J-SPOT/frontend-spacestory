import { DotLoader } from 'react-spinners';
import { styled } from 'twin.macro';

export default function Spinner() {
  return (
    <SpinnerContainer>
      <DotLoader color="#632ed8" />
    </SpinnerContainer>
  );
}

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 500px;
`;
