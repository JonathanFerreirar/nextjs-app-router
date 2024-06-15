import Button from '@/components/button/button';
import { postHogEventServe } from '@/posthog/actions';

const Home = () => {
  postHogEventServe({
    event: '/Home page load',
    path: '/',
  });

  return (
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
          <Button>Everything working nice</Button>
      </main>
  );
};

export default Home;
