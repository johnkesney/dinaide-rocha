import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Facebook, Instagram, Mail, Youtube } from "lucide-react";
import { configuredSocials, site } from "@/content/site";

const icons = { instagram: Instagram, facebook: Facebook, youtube: Youtube };
export function SiteFooter() {
  const social = configuredSocials();
  return <footer className="site-footer site-footer--v2"><div className="shell institutional-footer__main">
    <div className="institutional-footer__identity"><Link to="/" className="institutional-footer__wordmark institutional-footer__wordmark--official" aria-label="Dinaide Rocha — início"><img src={site.logo} alt="" width={575} height={216} loading="lazy" decoding="async" /></Link><span>VEREADORA DE RIACHO DE SANTANA · BAHIA</span><p>Site institucional destinado à divulgação de informações sobre a trajetória e a atuação pública de Dinaide Rocha.</p></div>
    <div className="institutional-footer__nav"><div><h3>Navegue</h3><Link to="/biografia">Conheça Dinaide</Link><Link to="/historia">Minha história</Link><Link to="/acoes">Nosso trabalho</Link><Link to="/projetos">Projetos</Link></div><div><h3>Informação</h3><Link to="/noticias">Notícias</Link><Link to="/galeria">Galeria</Link><Link to="/contato">Contato</Link><Link to="/privacidade">Privacidade</Link></div><div><h3>Canais oficiais</h3>{site.contact.email?<a href={"mailto:"+site.contact.email}><Mail size={15}/> E-mail</a>:null}{social.map(([key,url])=>{const Icon=icons[key as keyof typeof icons]||ArrowUpRight;return <a key={key} href={url} target="_blank" rel="noopener noreferrer"><Icon size={15}/>{key}</a>})}{!social.length&&!site.contact.email&&<span className="institutional-footer__pending">Informações em atualização</span>}</div></div>
  </div><div className="shell institutional-footer__bottom"><span>© {new Date().getFullYear()} Dinaide Rocha. Conteúdo institucional.</span><span>Riacho de Santana — BA</span><Link to="/privacidade">Política de privacidade <ArrowUpRight size={14}/></Link></div></footer>;
}