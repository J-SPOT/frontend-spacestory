import { useRouter } from 'next/router';
import { useEffect } from 'react';

// 리다이렉트 후 처리 페이지
export default function SocialLoginHandlerPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
