import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

import Header from '@/components/header';
import NotificationsFeed from '@/components/notificationsFeed';
import useCurrentUser from '@/hooks/useCurrentUser';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

const Notifications = () => {
  return (
    <>
      <Header showBackArrow label='Notifications' />
      <NotificationsFeed />
    </>
  );
};

export default Notifications;
