export const metadata = { title: "Greencarlane — Olivia" };

export default async function GreencarlanePage() {
  // later: fetch projects from DB/GraphQL
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <h1 className="display-font mb-8 text-4xl">GreenCarLane</h1>
      <p className="text-neutral-700">Selected projects and case studies.</p>
      {/* grid of ProjectCards here */}
    </main>
  );
}
