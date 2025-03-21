import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Sky Scraper Skill</h1>
      <ul className="hidden md:flex space-x-6">
        <li>
          <Link href="/" className="hover:text-blue-600 cursor-pointer">Home</Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-blue-600 cursor-pointer">Services</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-600 cursor-pointer">About</Link>
        </li>
        <li>
          <Link href="/career" className="hover:text-blue-600 cursor-pointer">Career</Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-blue-600 cursor-pointer">Blog</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-600 cursor-pointer">Contact</Link>
        </li>
      </ul>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Get Started</button>
    </nav>
  );
}
