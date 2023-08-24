
import Link from "next/link";
import {RiInstagramLine, RiFacebookBoxLine, RiGithubLine, RiLinkedinLine} from 'react-icons/ri'


const Socials = () => {
  return (
  <div className="flex items-center gap-x-12 text-lg">
    <Link href={'/'} className="hover:text-accent transition-all duration-300 text-base">
      Home
    </Link>
    <Link href={'/about'} className="hover:text-accent transition-all duration-300 text-base">
      About
    </Link>
    <Link href={'/work'} className="hover:text-accent transition-all duration-300 text-base">
      Projects
    </Link>
    <Link href={'/contact'} className="hover:text-accent transition-all duration-300 text-base">
      Contact
    </Link>
  </div>
  );
};

export default Socials;
