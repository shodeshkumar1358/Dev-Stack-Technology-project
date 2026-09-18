import Logo from "../assets/logo-text.png";
const links = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur py-1">
      <div className="mx-auto flex h-[70px] max-w-[1200px] items-center justify-between px-4">
        <img src={Logo} alt="Dev Stack" className="h-8 w-auto"></img>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-[13px] font-medium transition hover:text-pink-500 ${
                link === "Home" ? "text-pink-500" : "text-slate-500"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 sm:flex">
          <button className="text-[13px] font-medium text-slate-500 hover:text-slate-800">
            Sign In
          </button>
          <button className="rounded-full bg-pink-500 px-5 py-2.5 text-[12px] font-semibold text-white shadow-sm transition hover:bg-pink-600">
            Sign Up
          </button>
        </div>

        <button
          className="rounded-lg border border-slate-200 p-2 text-slate-600 md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}
