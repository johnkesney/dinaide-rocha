import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Início", href: "/" },
  { label: "Conheça Dinaide", href: "/biografia" },
  { label: "Minha história", href: "/historia" },
  { label: "Nosso trabalho", href: "/acoes" },
  { label: "Projetos", href: "/projetos" },
  { label: "Notícias", href: "/noticias" },
  { label: "Galeria", href: "/galeria" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-accent" aria-hidden="true" />
      <div className="shell header-inner">
        <Link to="/" className="brand" aria-label="Dinaide Rocha — página inicial">
          <span className="brand-symbol" aria-hidden="true">D<span>.</span></span>
          <span className="brand-text"><strong>Dinaide Rocha</strong><small>VEREADORA • RIACHO DE SANTANA</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map(({ label, href }) => (
            <Link key={href} to={href as never} className="nav-link" activeProps={{ className: "nav-link--active" }} activeOptions={{ exact: href === "/" }}>{label}</Link>
          ))}
        </nav>
        <Link to="/contato" className="header-contact">Contato <ArrowUpRight size={16} aria-hidden="true" /></Link>
        <button type="button" className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="mobile-menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      <nav id="mobile-menu" className={"mobile-nav" + (open ? " mobile-nav--open" : "")} aria-label="Navegação móvel" inert={!open}>
        {[...navigation, { label: "Contato", href: "/contato" }].map(({ label, href }, index) => (
          <Link key={href} to={href as never} onClick={() => setOpen(false)} className="mobile-nav-link">
            <span className="mobile-nav-number">{String(index + 1).padStart(2, "0")}</span>{label}<ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        ))}
      </nav>
    </header>
  );
}
