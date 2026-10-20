import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

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

  return <header className="site-header site-header--v2">
    <div className="institutional-topbar"><div className="shell"><span>PORTAL INSTITUCIONAL</span><span>RIACHO DE SANTANA <b>·</b> BAHIA</span></div></div>
    <div className="shell header-inner">
      <Link to="/" className="institutional-brand institutional-brand--official" aria-label="Dinaide Rocha — página inicial"><img src={site.logo} alt="" width={575} height={216} fetchPriority="high" decoding="async" /></Link>
      <nav className="desktop-nav" aria-label="Navegação principal">{navigation.map(({label,href})=><Link key={href} to={href as never} className="nav-link" activeProps={{className:"nav-link--active"}} activeOptions={{exact:href==="/"}}>{label}</Link>)}</nav>
      <Link to="/contato" className="header-contact">Contato <ArrowUpRight size={17} aria-hidden="true"/></Link>
      <button type="button" className="menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open?"Fechar menu":"Abrir menu"}>{open?<X size={26}/>:<Menu size={26}/>}</button>
    </div>
    <nav id="mobile-menu" className={"mobile-nav"+(open?" mobile-nav--open":"")} aria-label="Navegação móvel" inert={!open}>{[...navigation,{label:"Contato",href:"/contato"}].map(({label,href})=><Link key={href} to={href as never} className="mobile-nav-link" onClick={()=>setOpen(false)}>{label}<ArrowUpRight size={17} aria-hidden="true"/></Link>)}</nav>
  </header>;
}