import Link from 'next/link';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  const homePage = () => {
    router.replace('/');
  };

  return (
    <div>
      <h3>Sorry, not found.</h3>
      <Link href='/'> Go to home page </Link>
      <br />
      <button onClick={homePage}>Click Here</button>
    </div>
  );
};

export default NotFound;
