import Provider from '@/pages/Provider';
import router from 'next/router';
import React, { useEffect } from 'react';
import { GlobalStyles } from 'twin.macro';

import { isAdminLoggedIn } from '@/utils/auth';

import AdminPageLayoutDefault from './AdminPageLayoutDefault';

interface AdminProps {
  Component: any;
  pageProps: any;
}

export default function AdminPageLayout({
  Component,
  pageProps,
}: AdminProps): React.ReactElement {
  useEffect(() => {
    if (!isAdminLoggedIn) {
      router.replace('/admin/login');
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdminLoggedIn]);

  const getLayout =
    Component.getLayout ??
    ((pageComponent: React.ReactNode) => (
      <>
        <AdminPageLayoutDefault>{pageComponent}</AdminPageLayoutDefault>
      </>
    ));

  return (
    <Provider pageProps={pageProps}>
      <GlobalStyles />
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  );
}
