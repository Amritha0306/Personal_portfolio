import { site } from "../data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-700/50 px-6 py-8 text-center md:px-12">
      <p className="text-sm text-slate-500">
        Designed &amp; Built by{" "}
        <span className="text-slate-400">{site.name}</span>
      </p>
      <p className="mt-1 font-mono text-xs text-slate-600">
        &copy; {year} · Personal Portfolio
      </p>
    </footer>
  );
}
