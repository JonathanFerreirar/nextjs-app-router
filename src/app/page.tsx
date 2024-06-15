import { postHogEventServe } from '@/posthog/actions';

const Home = () => {
  postHogEventServe({
    event: '/Home page load',
    path: '/',
  });

  return (
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
          <h1>Ok nice day</h1>
      </main>
  );
};

export default Home;
