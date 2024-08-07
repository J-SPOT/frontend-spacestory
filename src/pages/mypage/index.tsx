import DesktopLayout from '@/components/apps/layout/desktop/DesktopLayout';
import MobileLayout from '@/components/apps/layout/mobile/MobileLayout';
import Mypage from '@/components/apps/pages/mypage/Mypage';

export default function MypagePage() {
  return (
    <>
      <DesktopLayout
        padding={{ top: '60px', bottom: '60px' }}
        tw="bg-[#f6f6f6]"
      >
        <Mypage />
      </DesktopLayout>

      <MobileLayout padding={{ top: '60px', bottom: '60px' }}>
        <Mypage />
      </MobileLayout>
    </>
  );
}

MypagePage.authenticationRequired = true;
