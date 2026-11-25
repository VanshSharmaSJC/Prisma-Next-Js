import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>{" | "}
      <Link href="/event/1">EDM-Night</Link>{" | "}
      <Link href="/event/2">Rock Concert</Link>{" | "}
      <Link href="/event/3">Jazz Night</Link>{" | "}
      <Link href="/contact-us">Contact Us</Link>{" | "}
      <Link href="/about">About Us</Link>
    </nav>
  );
}