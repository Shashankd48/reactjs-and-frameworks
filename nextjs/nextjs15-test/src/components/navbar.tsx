import Link from "next/link";

const Navbar = () => {
   return (
      <div>
         <h2>Nextjs 15</h2>
         <ul>
            <li>
               <Link href="/">Home</Link>
            </li>
            <li>
               <Link href="/about">About</Link>
            </li>
         </ul>
      </div>
   );
};

export default Navbar;
