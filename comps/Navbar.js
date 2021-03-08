import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <h3>This is Navbar</h3>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
    </div>
  );
};

export default Navbar;
