import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

import { useAuthStore } from '@/store/authStore';

interface AppProps {
  pageProps: any;
  children: React.ReactNode;
}

const cache = createCache({ key: 'css', prepend: true });

const Provider = ({ pageProps, children }: AppProps) => {
  const [cookies] = useCookies(['accessToken']);
  const { setAccessToken, clear } = useAuthStore();

  useEffect(() => {
    if (cookies.accessToken) {
      setAccessToken(cookies.accessToken);
    } else {
      clear();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
            refetchOnWindowFocus: false,
            staleTime: 60 * 1000,
          },
          mutations: {
            retry: 0,
            onError: (error) => console.log(error),
          },
        },
      }),
  );

  const dehydratedState = pageProps?.dehydratedState || {};

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>
        <CacheProvider value={cache}>{children}</CacheProvider>
      </HydrationBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Provider;
