import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { css, styled, theme } from 'twin.macro';

import Search from '../../ui/Search';
import ContentWrapper from '../ContentWrapper';

export default function Header() {
  const [isSubHeaderOpen, setIsSubHeaderOpen] = useState(false);
  const [cookies] = useCookies(['accessToken']);
  const [isScrolled, setIsScrolled] = useState(false);

  const isLoggedIn = Boolean(cookies.accessToken);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <HeaderContainer isScrolled={isScrolled}>
        <ContentWrapper tw="relative">
          {isLoggedIn ? (
            <LogoWrapper href="/">
              <Logo src="/images/logo.svg" alt="logo" fill />
            </LogoWrapper>
          ) : (
            <LogoWrapper href="/">
              <Logo src="/images/logo.svg" alt="logo" fill />
            </LogoWrapper>
          )}

          {/* TODO : Search 컴포넌트로 변경 필요 */}
          <RightMenu>
            {!isSubHeaderOpen ? (
              <Search
                readOnly
                onClick={() => setIsSubHeaderOpen((prev) => !prev)}
              />
            ) : (
              <CloseButton onClick={() => setIsSubHeaderOpen(false)}>
                X
              </CloseButton>
            )}
            <UserIcon href={isLoggedIn ? '/mypage' : '/login'}>
              <Image
                fill
                src="/images/icons/login/user_profile_default.png"
                sizes="25px"
                alt="profile"
                style={{
                  position: 'absolute',
                  objectFit: 'contain',
                  filter: isLoggedIn
                    ? 'brightness(0) saturate(100%) invert(35%) sepia(94%) saturate(2166%) hue-rotate(192deg) brightness(92%) contrast(102%)'
                    : 'none',
                }}
              />
            </UserIcon>
          </RightMenu>
        </ContentWrapper>
      </HeaderContainer>

      {isSubHeaderOpen && (
        <SubHeaderContainer>
          <ContentWrapper>
            <Search tw="w-full h-[44px]" />
          </ContentWrapper>
        </SubHeaderContainer>
      )}
    </>
  );
}

const HeaderContainer = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${theme`variables.apps.pc-header-height`};
  padding: 24px 0;
  z-index: 10000;
  background-color: white;
  transition: 0.3s;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${({ isScrolled }) =>
    isScrolled &&
    css`
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    `}
`;

// const LeftMenu = styled.div`
//   width: 20px;
//   height: 16px;
//   background-image: url(/images/icons/menu.svg);
//   background-size: cover;
//   margin-left: 8px;
// `;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
  margin-right: 8px;
`;

const UserIcon = styled(Link)`
  position: relative;
  width: 25px;
  height: 25px;
`;

const LogoWrapper = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 132px;
  height: 32px;
`;

const Logo = styled(Image)``;

const SubHeaderContainer = styled.div`
  height: ${theme`variables.apps.pc-sub-header-height`};
`;

const CloseButton = styled.button`
  height: 33px;
  padding: 0 0 0 16px;
  font-weight: bolder;
`;
