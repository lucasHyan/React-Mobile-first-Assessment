export function Footer() {
  return (
    <footer className="flex  p-4 bg-[#ff9999]">
      <a href="/" className="px-3 hover:underline">
        <span>Home</span>
      </a>
      <a href="/blog" className="px-3 hover:underline">
        <span>Acessar o blog</span>
      </a>
      <a href="/contact" className="px-3 hover:underline">
        <span>Realizar contato</span>
      </a>
      <a href="/about" className="px-3 hover:underline">
        <span>Saiba mais</span>
      </a>
    </footer>
  );
}
