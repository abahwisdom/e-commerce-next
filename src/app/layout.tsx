import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import StoreProvider from '@/lib/Provider/StoreProvider';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import TopNav from '@/modules/AppLayout/components/TopNav';
import Footer from '@/modules/AppLayout/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blinqpay Shop',
  description: 'E-commerce app powered by Next.js and Ant Design',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <AntdRegistry>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "Inter",
              colorPrimary: "DB4444",
            }
          }}
        >
          <body className={inter.className}>
          <StoreProvider>
            <TopNav />
            <div className='mt-[62px]'>
              {children}
            </div>
            <Footer />
            </StoreProvider>
          </body>
        </ConfigProvider>
        </AntdRegistry>
    </html>
  );
}
