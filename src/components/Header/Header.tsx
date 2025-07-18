import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <Image src="/vercel.svg" alt="Logo" width={25} height={25} priority />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
