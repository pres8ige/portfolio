import { FiCode, FiLayers, FiShield, FiCpu } from "react-icons/fi";

const cards = [
  {
    title: "Frontend Development",
    description:
      "Building responsive React and Next.js interfaces with accessible structure, clear hierarchy, and smooth interactions.",
    icon: FiCode,
  },
  {
    title: "Backend Development",
    description:
      "Creating APIs and application logic with Express.js, databases, and smart-contract backed workflows for real projects.",
    icon: FiLayers,
  },
  {
    title: "AI Systems",
    description:
      "Working with TensorFlow, Scikit-learn, and practical data pipelines to ship useful prediction and detection tools.",
    icon: FiCpu,
  },
  {
    title: "Cybersecurity Automation",
    description:
      "Exploring VAPT workflows with Nmap, Nikto, SQLMap, and OWASP ZAP to automate security analysis and reporting.",
    icon: FiShield,
  },
];

function About() {
  return (
    <section className="space-y-8 py-4">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.35em] text-blue-300">
          About Me
        </p>
        <h2 className="text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
          Building practical products at the intersection of AI, blockchain,
          and cybersecurity.
        </h2>
        <p className="max-w-3xl text-base leading-8 text-[var(--text-secondary)]">
          I am a third-year Computer Engineering student at Pimpri Chinchwad
          College of Engineering. My work focuses on turning technical ideas
          into useful products, from decentralized supply chain platforms to AI
          tools for agriculture, sign language recognition, and security
          testing. I enjoy creating software that feels modern on the frontend
          and meaningful in the real world.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-blue-300">
            What I&apos;m Doing
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">
            Current focus areas
          </h3>
        </div>

        <div className="grid gap-4 xl:grid-cols-2">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="rounded-3xl border border-[var(--border-soft)] bg-[var(--panel-soft)] p-5 shadow-lg shadow-black/10"
              >
                <div className="flex items-start gap-4">
                  <span className="rounded-2xl bg-blue-500/15 p-3 text-2xl text-blue-300">
                    <Icon />
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--text-primary)]">
                      {card.title}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
