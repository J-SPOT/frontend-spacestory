import DesktopLayout from '@/components/apps/layout/desktop/DesktopLayout';
import MobileLayout from '@/components/apps/layout/mobile/MobileLayout';
import Login from '@/components/apps/pages/login/Login';

export default function LoginPage() {
  return (
    <>
      <DesktopLayout padding={{ top: '0', bottom: '0' }} hideFooter>
        <Login />
      </DesktopLayout>

      <MobileLayout padding={{ top: '0', bottom: '0' }} hideFooter>
        <Login />
      </MobileLayout>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { req, res } = context;
  const cookies = req.headers.cookie;

  // 쿠키에서 accessToken을 추출
  const accessToken = cookies
    ?.split('; ')
    .find((cookies: any) => cookies.startsWith('accessToken='))
    ?.split('=')[1];

  // accessToken이 존재하면 메인 페이지로 리디렉션
  if (accessToken) {
    res.writeHead(302, { Location: '/' });
    res.end();
    return { props: {} }; // 아무것도 렌더링하지 않음
  }

  return {
    props: {}, // 로그인 페이지 렌더링
  };
}
