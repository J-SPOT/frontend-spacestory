import styled from '@emotion/styled';
import React from 'react';
import { theme } from 'twin.macro';

type Props = {
  children: React.ReactNode;
};

/**
 * 관리자 기본 공통 레이아웃
 */
export default function AdminPageLayoutDefault({ children }: Props) {
  return (
    <>
      <PageContent>
        <PageInner>
          <Area>{children}</Area>
        </PageInner>
      </PageContent>
    </>
  );
}

const PageContent = styled.div`
  min-width: ${theme`variables.apps.min-width`}; // 반응형, 가로스크롤 생성
  padding-top: 100px;
  padding-right: 0;
  padding-left: 0;
  background-color: #f6f7f9;
  transition: padding-left 0.3s;
`;

const PageInner = styled.div`
  position: relative;
  min-height: calc(100vh - 10px - 100px);
`;

const Area = styled.div`
  padding: 25px 20px;
  transition: padding 0.15s;
  @media (min-width: ${theme`screens.2xl`}) {
    padding: 25px 50px;
  }
`;
