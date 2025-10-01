import Link from "next/link";

export function NavBar() {
  return (
    <header className="fixed top-0 right-0 left-20 z-40 flex h-16 items-center border-b border-neutral-200/70 bg-[#EFE9E2]/70 px-6 backdrop-blur supports-[backdrop-filter]:bg-[#EFE9E2]/40">
      <Link href="/" className="text-sm tracking-wide">
        OLIVIA WITT
      </Link>
    </header>
  );
}
