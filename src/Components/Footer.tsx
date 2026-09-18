import Logo from "../assets/logo-text.png";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-12">
        <div className="grid gap-10 md:grid-cols-[1.7fr_1fr_1fr_1fr]">
          <div>
            <img src={Logo} alt="Hero Banner Imgage" />
            <p className="mt-4 max-w-[330px] text-[11px] leading-5 text-slate-400">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-5 flex gap-4 text-[15px] font-semibold text-slate-500">
              <a href="#github" className="hover:text-pink-500">
                GitHub
              </a>
              <a href="#twitter" className="hover:text-pink-500">
                Twitter
              </a>
              <a href="#linkedin" className="hover:text-pink-500">
                LinkedIn
              </a>
            </div>
          </div>

          <FooterColumn
            title="PRODUCT"
            links={["Home", "Technologies", "Projects"]}
          />
          <FooterColumn
            title="COMPANY"
            links={["About", "Contact", "Careers"]}
          />
          <FooterColumn
            title="LEGAL"
            links={["Privacy Policy", "Terms of Service"]}
          />
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-slate-200 pt-5 text-[10px] text-slate-300 sm:flex-row">
          <span>© 2026 Dev Stack. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-pink-500">
              Privacy
            </a>
            <a href="#terms" className="hover:text-pink-500">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-[15px] font-extrabold tracking-wide text-slate-700 justify-between">
        {title}
      </h3>
      <ul className="mt-4 space-y-3 justify-between">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
              className="text-[12px] text-slate-600 hover:text-pink-500"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
