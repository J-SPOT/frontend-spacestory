import Link from 'next/link';
import { useState } from 'react';
import { styled, theme } from 'twin.macro';

import ContentWrapper from '../ContentWrapper';

export default function Footer() {
  const [toggleOpen, setToggleOpen] = useState(false);

  return (
    <FooterContainer>
      <ContentWrapper>
        <ContentsTop>
          <LogoImg />
        </ContentsTop>

        <ToggleButton onClick={() => setToggleOpen((prev) => !prev)}>
          (주)NSPACE 사업자정보 및 통신판매업자 신원정보{' '}
          {toggleOpen ? '∧' : '∨'}
        </ToggleButton>

        <ContentsMiddle>
          {toggleOpen && (
            <TextWrapper>
              <Text>
                상호명 :{' '}
                <LinkText
                  href="https://nspace.co"
                  target="_blank"
                  tw="underline"
                >
                  주식회사 앤스페이스
                </LinkText>
              </Text>
              <Text>대표 : 정수현</Text>
              <Text>사업자등록번호 : 230-81-03117</Text>
              <Text>통신판매업신고번호: 2024-서울영등포-1094</Text>
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
              <LinkText href="mailto:office@spacecloud.kr">
                이메일: office@spacecloud.kr
              </LinkText>
              <LinkText href="mailto:marketing@spacecloud.kr">
                제휴문의: marketing@spacecloud.kr
              </LinkText>
              <Text>대표전화: 1599-4312 (평일 오후 2시 ~ 오후 6시)</Text>
              <Text>온라인 1:1 문의 (평일 오전 10시 ~ 오후 6시)</Text>
            </TextWrapper>
          )}
        </ContentsMiddle>

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

        <ContentsBottom>
          <NavWrapper tw="text-[#632ED8] text-center font-[Pretendard]">
            <div>본 사이트는 스터디를 목적으로 한 클론 사이트이며</div>
            <div>실제 서비스가 아님을 고지합니다.</div>
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
          <LinkText
            href="http://www.nspace.co/"
            target="_blank"
            tw="text-[#949494]"
          >
            ⓒNSPACE Corp.
          </LinkText>
        </ContentsBottom>
      </ContentWrapper>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: 100%;
  padding: 20px 0 17px;
  color: ${theme`colors.apps.gray_02`};
  background-color: ${theme`colors.apps.gray_01`};
  font-size: 13px;
  line-height: 19px;
  color: ${theme`colors.apps.gray_02`};
`;

const ContentsTop = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 15px;
`;

const LogoImg = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 108px;
  height: 22px;
  background-size: 463px 458px;
  background-image: url('/images/imgSet_mobile.png');
  background-position: 0 -273px;
`;

const NavWrapper = styled.div``;

const ContentsMiddle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 80px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 11px;
  border-bottom: 1px solid #e0e0e0;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 5px;
  width: fit-content;
  white-space: nowrap;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const Text = styled.p`
  position: relative;
  white-space: nowrap;
`;

const LinkText = styled(Link)``;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-shrink: 1;
  gap: 3px;
  width: 100%;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  justify-content: space-between;
  margin-top: 15px;
  font-size: 11px;
`;

const ToggleButton = styled.div`
  display: inline-block;
  text-align: center;
  width: 100%;
  padding: 18px 0 9px;
  font-size: 12px;
  line-height: 12px;
  color: #535353;
  cursor: pointer;
`;
