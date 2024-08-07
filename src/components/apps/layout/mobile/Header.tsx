import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { css, styled } from 'twin.macro';

import Search from '../../ui/Search';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <LeftMenu />
      <LogoWrapper href="/">
        <Logo src="/images/logo.svg" alt="logo" fill />
      </LogoWrapper>
      {/* TODO : Search 컴포넌트로 변경 필요 */}
      <Search />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 24px 0;
  z-index: 10000;
  background-color: white;
  transition: 0.3s;

  ${({ isScrolled }) =>
    isScrolled &&
    css`
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
    `}
`;

const LeftMenu = styled.div``;

const LogoWrapper = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 132px;
  height: 32px;
`;

const Logo = styled(Image)``;
