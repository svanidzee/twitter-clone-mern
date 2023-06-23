import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';

import '@/styles/globals.css';
import Layout from '@/components/layout';
import LoginModal from '@/components/modals/loginModal';
import RegisterModal from '@/components/modals/registerModal';
import EditModal from '@/components/modals/editModal';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <RegisterModal />
      <LoginModal />
      <EditModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
