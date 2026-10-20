import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Facebook, Youtube, Mail } from "lucide-react";
import { configuredSocials, site } from "@/content/site";

const icons = { instagram: Instagram, facebook: Facebook, youtube: Youtube };

export function SiteFooter() {
  const socials = configuredSocials();
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div className="footer-brand-area">
          <Link to="/" className="footer-wordmark">Dinaide<span>Rocha.</span></Link>
          <p>Um espaço para conhecer trajetórias, acompanhar informações e fortalecer o acesso público às atividades do mandato.</p>
          <div className="footer-location"><span className="pink-dot" /> Riacho de Santana — Bahia</div>
        </div>
        <div className="footer-links">
          <div><h3>Explore</h3>
            <Link to="/biografia">Conheça Dinaide</Link>
            <Link to="/historia">Minha história</Link>
            <Link to="/acoes">Nosso trabalho</Link>
            <Link to="/projetos">Projetos</Link>
          </div>
          <div><h3>Informações</h3>
            <Link to="/noticias">Notícias</Link>
            <Link to="/galeria">Galeria</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/privacidade">Privacidade</Link>
          </div>
          <div><h3>Conecte-se</h3>
            {site.contact.email ? <a href={"mailto:" + site.contact.email}><Mail size={15} /> E-mail</a> : null}
            {socials.map(([key, url]) => {
              const Icon = icons[key as keyof typeof icons] || ArrowUpRight;
              return <a key={key} href={url} target="_blank" rel="noopener noreferrer"><Icon size={16} /> {key.charAt(0).toUpperCase() + key.slice(1)}</a>;
            })}
            {!socials.length && !site.contact.email ? <span className="footer-pending">Canais oficiais em atualização.</span> : null}
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Dinaide Rocha. Conteúdo institucional.</span>
        <span>Feito para aproximar informação e comunidade.</span>
        <Link to="/privacidade">Política de privacidade <ArrowUpRight size={13} /></Link>
      </div>
    </footer>
  );
}
