export const metadata = { title: "Contact — Olivia" };

export default async function ContactPage() {
  // later: fetch projects from DB/GraphQL
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <h1 className="display-font mb-8 text-4xl">Contact</h1>
      <p className="text-neutral-700">Selected projects and case studies.</p>
      {/* grid of ProjectCards here */}
    </main>
  );
}
