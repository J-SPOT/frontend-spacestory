import { styled } from 'twin.macro';

type Props = {
  title: string;
};

export default function DetailContentTitle({ title }: Props) {
  return <DetailContentTitleContainer>{title}</DetailContentTitleContainer>;
}

const DetailContentTitleContainer = styled.h4`
  position: relative;
  padding-bottom: 16px;
  margin: 70px 0 28px;
  color: #000;
  font-size: 18px;
  line-height: 30px;
  font-weight: 800;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    height: 4px;
    width: 20px;
    background-color: #ffd014;
  }
`;
