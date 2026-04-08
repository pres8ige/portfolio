import { FiAward, FiDownload } from "react-icons/fi";

const education = [
  {
    period: "2023 - Present",
    title: "B.Tech in Computer Engineering",
    subtitle: "Pimpri Chinchwad College of Engineering (PCCOE), Pune",
    description:
      "Developing a strong foundation in software engineering while focusing on AI, blockchain, cybersecurity, and web development.",
  },
  {
    period: "2022",
    title: "Higher Secondary Education",
    subtitle: "Jagdamba Junior College, Yavatmal",
    description:
      "Built the academic base that led into engineering and technology-focused study.",
  },
  {
    period: "2021",
    title: "Secondary School",
    subtitle: "Yavatmal Public School, Yavatmal",
    description:
      "Completed school education with growing interest in computing and problem solving.",
  },
];

const experience = [
  {
    period: "June 2025 - July 2025",
    title: "Blockchain Developer Intern",
    subtitle: "blockseblock.com",
    description:
      "Developed SupTrus, a decentralized supply chain tracker using Next.js and Rust on the Internet Computer Protocol, with blockchain-based verification for tamper-proof logistics tracking.",
  },
  {
    period: "Project Work",
    title: "AI VAPT Automation",
    subtitle: "Security Automation Framework",
    description:
      "Integrated Nmap, Nikto, SQLMap, and OWASP ZAP into an AI-assisted workflow to scan web applications and generate structured security reports.",
  },
  {
    period: "Project Work",
    title: "CropMate and ASL Detection",
    subtitle: "Applied AI Projects",
    description:
      "Built real-world AI systems for crop disease detection, weather-aware farming insights, and real-time American Sign Language recognition.",
  },
];

const badges = [
  "ML Mania Competition - 2nd Rank",
  "Java Programming Masterclass Certification",
  "HackerRank C++ - 5 Stars",
  "TryHackMe Cybersecurity 101 Certification",
];

const certificates = [
  {
    title: "Additional Certificate 01",
    file: "/certificate-1.pdf",
  },
  {
    title: "Additional Certificate 02",
    file: "/certificate-2.pdf",
  },
];

function Timeline({ items }) {
  return (
    <div className="relative ml-3 border-l border-blue-500/30 pl-7">
      {items.map((item) => (
        <article key={`${item.title}-${item.period}`} className="relative pb-10 last:pb-0">
          <span className="absolute -left-[2.05rem] top-1 h-4 w-4 rounded-full border-4 border-[var(--panel)] bg-blue-400" />
          <p className="text-sm font-medium text-blue-300">{item.period}</p>
          <h4 className="mt-2 text-lg font-semibold text-[var(--text-primary)]">{item.title}</h4>
          <p className="text-sm text-[var(--text-soft)]">{item.subtitle}</p>
          <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

function Resume() {
  const assetBase = import.meta.env.BASE_URL;

  return (
    <section className="space-y-8 py-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-blue-300">
            Resume
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
            Education, experience, and milestones
          </h2>
        </div>

        <a
          href={`${assetBase}resume.pdf`}
          download
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
        >
          <FiDownload />
          Download Resume
        </a>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--panel-soft)] p-6">
          <h3 className="mb-6 text-2xl font-semibold text-[var(--text-primary)]">Education</h3>
          <Timeline items={education} />
        </div>

        <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--panel-soft)] p-6">
          <h3 className="mb-6 text-2xl font-semibold text-[var(--text-primary)]">Experience</h3>
          <Timeline items={experience} />
        </div>
      </div>

      <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--panel-soft)] p-6">
        <div className="flex items-center gap-3">
          <span className="rounded-2xl bg-blue-500/15 p-3 text-blue-300">
            <FiAward />
          </span>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-blue-300">
              Highlights
            </p>
            <h3 className="mt-1 text-2xl font-semibold text-[var(--text-primary)]">
              Achievements & certifications
            </h3>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-100"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--panel-soft)] p-6">
        <div className="flex items-center gap-3">
          <span className="rounded-2xl bg-blue-500/15 p-3 text-blue-300">
            <FiAward />
          </span>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-blue-300">
              Certificates
            </p>
            <h3 className="mt-1 text-2xl font-semibold text-[var(--text-primary)]">
              Attached certification documents
            </h3>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {certificates.map((certificate) => (
            <article
              key={certificate.file}
              className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] p-5"
            >
              <h4 className="text-lg font-semibold text-[var(--text-primary)]">
                {certificate.title}
              </h4>
              <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                Added from your provided certificate PDF. You can rename this
                card once you share the exact course or certification title.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-500/15"
                >
                  View
                </a>
                <a
                  href={certificate.file}
                  download
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-400"
                >
                  <FiDownload />
                  Download
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
