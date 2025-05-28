export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 px-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Mo&apos;. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with ❤️ using Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}