import Hero from "./components/Hero";
import RoleCards from "./components/RoleCards";
import ProcessTimelines from "./components/ProcessTimelines";
import CTA from "./components/CTA";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <RoleCards />
        <ProcessTimelines />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold tracking-tight text-gray-900">
          OnboardFlow
        </a>
        <nav className="hidden items-center gap-6 text-sm text-gray-700 sm:flex">
          <a href="#roles" className="hover:text-gray-900">Roles</a>
          <a href="#flows" className="hover:text-gray-900">How it works</a>
          <a href="#" className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white shadow hover:bg-indigo-700 transition">Sign in</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-600 sm:flex-row">
        <p>© {new Date().getFullYear()} OnboardFlow. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#" className="hover:text-gray-900">Terms</a>
          <a href="#" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}
