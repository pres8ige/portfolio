import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const contacts = [
  {
    title: "Email",
    value: "kaiwalyaladkhedkar@gmail.com",
    href: "mailto:kaiwalyaladkhedkar@gmail.com",
    icon: FiMail,
  },
  {
    title: "Phone",
    value: "+91 87670 69142",
    href: "tel:+918767069142",
    icon: FiPhone,
  },
  {
    title: "Location",
    value: "Pune, Maharashtra, India",
    href: "https://maps.google.com/?q=Pune,Maharashtra,India",
    icon: FiMapPin,
  },
];

function Contact() {
  return (
    <section className="space-y-8 py-4">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-blue-300">
          Contact
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
          Let&apos;s build something meaningful
        </h2>
      </div>

      <div className="overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-[var(--panel-soft)]">
        <iframe
          title="Pune, Maharashtra map"
          src="https://www.google.com/maps?q=Pune,Maharashtra,India&z=11&output=embed"
          className="h-80 w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {contacts.map((contact) => {
          const Icon = contact.icon;

          return (
            <a
              key={contact.title}
              href={contact.href}
              target={contact.title === "Location" ? "_blank" : undefined}
              rel={contact.title === "Location" ? "noreferrer" : undefined}
              className="rounded-3xl border border-[var(--border-soft)] bg-[var(--panel-soft)] p-5 transition hover:-translate-y-1 hover:border-blue-400/40"
            >
              <span className="inline-flex rounded-2xl bg-blue-500/15 p-3 text-blue-300">
                <Icon />
              </span>
              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--text-soft)]">
                {contact.title}
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                {contact.value}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Contact;
