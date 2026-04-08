import {
  FiCalendar,
  FiDownload,
  FiGithub,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiPhone,
  FiTwitter,
} from "react-icons/fi";

const contactItems = [
  { label: "Email", value: "kaiwalyaladkhedkar@gmail.com", href: "mailto:kaiwalyaladkhedkar@gmail.com", icon: FiMail },
  { label: "Phone", value: "+91 87670 69142", href: "tel:+918767069142", icon: FiPhone },
  { label: "Birthday", value: "16/08/2005", href: null, icon: FiCalendar },
  { label: "Location", value: "Pune, Maharashtra, India", href: null, icon: FiMapPin },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/pres8ige", icon: FiGithub },
  { label: "Twitter", href: "https://twitter.com/", icon: FiTwitter },
  { label: "Instagram", href: "https://instagram.com/", icon: FiInstagram },
];

function Sidebar() {
  return (
    <aside className="top-4 h-fit rounded-[2rem] border border-[var(--border-soft)] bg-[var(--panel)] p-5 shadow-2xl shadow-black/15 lg:fixed lg:w-80">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4 lg:flex-col lg:items-start">
          <img
            src="/profile-photo.png"
            alt="Kaiwalya Ladkhedkar"
            className="h-24 w-24 rounded-[1.75rem] border border-blue-400/30 object-cover shadow-lg shadow-blue-500/10"
          />

          <div>
            <h1 className="text-2xl font-semibold text-[var(--text-primary)]">
              Kaiwalya Ladkhedkar
            </h1>
            <p className="mt-2 inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-200">
              Full-Stack Developer
            </p>
          </div>
        </div>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Computer Engineering student building AI-powered, blockchain-backed,
          and security-focused products with a clean user experience.
        </p>

        <div className="grid gap-3">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <div className="flex items-start gap-3 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] px-4 py-3">
                <span className="mt-0.5 rounded-xl bg-blue-500/15 p-2 text-blue-300">
                  <Icon />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-soft)]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">{item.value}</p>
                </div>
              </div>
            );

            return item.href ? (
              <a key={item.label} href={item.href} className="block transition hover:-translate-y-0.5">
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] text-[var(--text-secondary)] transition hover:border-blue-400/40 hover:text-blue-300"
              >
                <Icon />
              </a>
            );
          })}
        </div>

        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
        >
          <FiDownload />
          Download Resume
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
