import Link from 'next/link';
import { styled, theme } from 'twin.macro';

import ContentWrapper from '../ContentWrapper';

export default function Footer() {
  return (
    <FooterContainer>
      <ContentWrapper>
        <ContentsTop>
          <LogoImg />
          <NavWrapper tw="text-[#632ED8] font-[Pretendard]">
            <span tw="mr-4">
              본 사이트는 스터디를 목적으로 한 클론 사이트이며, 실제 서비스가
              아님을 고지합니다.
            </span>
            <span tw="text-right">
              <span tw="mr-2">
                BE 작업자 :{' '}
                <LinkText
                  href="https://github.com/ji-jjang"
                  target="_blank"
                  tw="text-[#632ED8] font-bold"
                >
                  지준혁
                </LinkText>
              </span>
              <span>
                FE 작업자 :{' '}
                <LinkText
                  href="https://github.com/jinbokk"
                  target="_blank"
                  tw="text-[#632ED8] font-bold"
                >
                  이진복
                </LinkText>
              </span>
            </span>
          </NavWrapper>
        </ContentsTop>

        <ContentsMiddle>
          <TextWrapper>
            <Text>
              상호명 :{' '}
              <LinkText href="https://nspace.co" target="_blank" tw="underline">
                주식회사 앤스페이스
              </LinkText>
            </Text>
            <Bar>|</Bar>
            <Text>대표 : 정수현</Text>
            <Bar>|</Bar>
            <Text>사업자등록번호 : 230-81-03117</Text>
            <Bar>|</Bar>
            <Text>통신판매업신고번호: 2024-서울영등포-1094</Text>
            <Bar>|</Bar>
            <LinkText
              href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=2308103117"
              target="_blank"
              tw="no-underline"
            >
              사업자등록정보
              <span tw="relative ml-[3px] bottom-[1px]">&gt;</span>
            </LinkText>
            <Text>
              영업소재지: 서울특별시 영등포구 여의대로8 여의도파크센터 B동
              2401호
            </Text>
            <Bar>|</Bar>
            <LinkText href="mailto:office@spacecloud.kr">
              이메일: office@spacecloud.kr
            </LinkText>
            <Bar>|</Bar>
            <LinkText href="mailto:marketing@spacecloud.kr">
              제휴문의: marketing@spacecloud.kr
            </LinkText>
            <Text>대표전화: 1599-4312 (평일 오후 2시 ~ 오후 6시)</Text>
            <Bar>|</Bar>
            <Text>온라인 1:1 문의 (평일 오전 10시 ~ 오후 6시)</Text>
          </TextWrapper>

          <IconWrapper>
            <NaverBlogIcon
              href="http://blog.naver.com/spacecloud"
              target="_blank"
            />
            <NaverPostIcon
              href="http://post.naver.com/spacecloud"
              target="_blank"
            />
            <FacebookIcon
              href="https://www.facebook.com/spaceclouding"
              target="_blank"
            />
            <TwitterIcon
              href="https://twitter.com/spacecloud_kr"
              target="_blank"
            />
            <InstagramIcon
              href="https://www.instagram.com/spacecloud.kr"
              target="_blank"
            />
          </IconWrapper>
        </ContentsMiddle>

        <ContentsBottom>
          <Text tw="whitespace-pre-wrap">
            스페이스클라우드는 통신판매중개자이며 통신판매의 당사자가 아닙니다.
            따라서 스페이스클라우드는 공간 거래정보 및 거래에 대해 책임지지
            않습니다.
          </Text>
          <Text tw="text-[#949494] whitespace-pre-wrap">
            Copyright{' '}
            <LinkText href="http://www.nspace.co/" target="_blank">
              NSPACE Corp.
            </LinkText>{' '}
            All Rights Reserved.
          </Text>
        </ContentsBottom>
      </ContentWrapper>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: 100%;
  padding: 54px 0 50px;
  color: ${theme`colors.apps.gray_02`};
  background-color: ${theme`colors.apps.gray_01`};
  font-size: 13px;
  line-height: 19px;
  color: ${theme`colors.apps.gray_02`};
`;

const ContentsTop = styled.div`
  display: flex;
  gap: 50px;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 23px;
  border-bottom: 1px solid #e0e0e0;
`;

const LogoImg = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 168px;
  height: 34px;
  background-size: 684px 663px;
  background-image: url('/images/imgSet.png');
  background-position: -320px -250px;
`;

const NavWrapper = styled.div``;

const ContentsMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 80px;
  margin-top: 25px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 5px;
  flex-grow: 1;
  white-space: nowrap;
`;

const Text = styled.p`
  position: relative;
  white-space: nowrap;
`;

const LinkText = styled(Link)``;

const Bar = styled.span`
  font-size: 10px;
  margin: 0 10px;
  opacity: 0.5;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-shrink: 1;
  gap: 3px;
  width: fit-content;
  height: fit-content;
  a {
    display: block;
    width: 35px;
    height: 35px;
    background-size: 684px 663px;
    background-image: url('/images/imgSet.png');
  }
`;

const NaverBlogIcon = styled(Link)`
  background-position: -389px -380px;
`;

const NaverPostIcon = styled(Link)`
  background-position: -400px -507px;
`;

const FacebookIcon = styled(Link)`
  background-position: -361px -507px;
`;
const TwitterIcon = styled(Link)`
  background-position: -428px -380px;
`;
const InstagramIcon = styled(Link)`
  background-position: -439px -507px;
`;

const ContentsBottom = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  margin-top: 45px;
  font-size: 11px;
`;
