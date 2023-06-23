import PostFeed from '@/components/posts/postFeed';
import Header from '@/components/header';
import Form from '@/components/form';

export default function Home() {
  return (
    <>
      <Header label='Home' />
      <Form placeholder="What's happening?" />
      <PostFeed />
    </>
  );
}
