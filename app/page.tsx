import Link from "next/link";

const socials = [
  {
    href: "https://vercel.com",
    label: "Explore Vercel",
    description: "Deploy this playful greeting in seconds."
  },
  {
    href: "https://nextjs.org",
    label: "Learn Next.js",
    description: "Discover the framework powering this tiny app."
  }
];

export default function Home() {
  return (
    <main className="page">
      <section className="card">
        <p className="eyebrow">A warm hello</p>
        <h1>Hello baby 👋</h1>
        <p className="body">
          Codex spun up this little site so you can greet someone special with a
          single page that feels personal, sweet, and ready for sharing.
        </p>
        <div className="actions">
          {socials.map((item) => (
            <Link key={item.href} href={item.href} className="link">
              <span className="link-label">{item.label}</span>
              <span className="link-desc">{item.description}</span>
            </Link>
          ))}
        </div>
      </section>
      <footer className="footer">
        <span>Crafted in Next.js • Deploy anywhere</span>
      </footer>
    </main>
  );
}
