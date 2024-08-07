import DesktopLayout from '@/components/apps/layout/desktop/DesktopLayout';
import MobileLayout from '@/components/apps/layout/mobile/MobileLayout';
import Register from '@/components/apps/pages/account/register/Register';

export default function RegisterPage() {
  return (
    <>
      <DesktopLayout padding={{ top: '0', bottom: '0' }} hideFooter>
        <Register />
      </DesktopLayout>

      <MobileLayout padding={{ top: '0', bottom: '0' }} hideFooter>
        <Register />
      </MobileLayout>
    </>
  );
}
