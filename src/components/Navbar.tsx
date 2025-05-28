"use client"; // needed if you use interactive behavior later

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-blue-600">
        Mo&apos;
      </Link>
      <div className="space-x-4">
        <Link href="/auth" className="text-gray-700 hover:text-blue-600">
          Login
        </Link>

      </div>
    </nav>
  );
}
