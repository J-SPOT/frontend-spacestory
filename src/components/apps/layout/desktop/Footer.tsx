import Link from 'next/link';
import { Fragment } from 'react';
import { styled, theme } from 'twin.macro';

import ContentWrapper from '../ContentWrapper';

const NAV_ITEMS = [
  {
    title: '배너광고 문의',
    href: 'https://plucky-sleep-a52.notion.site/41ae473161e44ae88e46df399902f8fd',
  },
  { title: '이용약관', href: 'https://www.spacecloud.kr/agreement' },
  { title: '개인정보처리방침', href: 'https://www.spacecloud.kr/policyPerson' },
  { title: '운영정책', href: 'https://www.spacecloud.kr/policyOperate' },
  {
    title: '콘텐츠산업진흥법에 의한 표시',
    href: 'https://www.spacecloud.kr/contentsinfo',
  },
  { title: '고객 문의', href: '/' },
];

export default function Footer() {
  return (
    <FooterContainer>
      <ContentWrapper>
        <ContentsTop>
          <LogoImg />
          <NavWrapper>
            {NAV_ITEMS.map((item, index) => {
              return (
                <Fragment key={index}>
                  <NavItem href={item.href} target="_blank">
                    {item.title}
                  </NavItem>
                  {index !== NAV_ITEMS.length - 1 && <NavBar>|</NavBar>}
                </Fragment>
              );
            })}
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
          <Text tw="text-[12px] text-[#949494] whitespace-pre-wrap">
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
  position: absolute;
  bottom: 0;
  left: 0;
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

const NavItem = styled(Link)``;

const NavBar = styled.span`
  font-size: 10px;
  margin: 0 10px;
  opacity: 0.5;
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
`;
