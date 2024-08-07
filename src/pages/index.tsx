import DesktopLayout from '@/components/apps/layout/desktop/DesktopLayout';
import MobileLayout from '@/components/apps/layout/mobile/MobileLayout';
import Home from '@/components/apps/pages/home/Home';

export default function HomePage() {
  return (
    <>
      <DesktopLayout padding={{ top: '0', bottom: '60px' }}>
        <Home />
      </DesktopLayout>

      <MobileLayout padding={{ top: '0', bottom: '60px' }}>
        <Home />
      </MobileLayout>
    </>
  );
}
