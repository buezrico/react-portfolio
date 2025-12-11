"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-400 py-8 mt-32">
      <div className="container-custom">
        <div className="text-center">
          <p className="text-sm">
            &copy; {currentYear} Chibueze Rico. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
