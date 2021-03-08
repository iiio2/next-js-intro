import Image from 'next/image';
import Head from 'next/head';

const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <h3>About us.</h3>
      <Image
        src='/img/pizza.jpg'
        alt='picture of pizza'
        width={350}
        height={300}
      />
    </div>
  );
};

export default About;
