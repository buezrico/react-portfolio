"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-gray-400 py-8 mt-32">
      <div className="container-custom">
        <div className="text-center">
          <p className="text-sm">
            &copy; {currentYear} Buez Rico. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
