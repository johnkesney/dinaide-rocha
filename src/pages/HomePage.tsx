import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Camera, Newspaper } from "lucide-react";
import { actions, achievements, community, gallery, news, projects, published, site } from "@/content/site";
import { EntryCard } from "@/components/site/Editorial";

/** Portal público: dados do mandato só aparecem quando publicados e verificados. */
export function HomePage() {
  const recentNews = published(news).slice(0, 3);
  const recentActions = published(actions).slice(0, 3);
  const recentProjects = published(projects).slice(0, 3);
  const confirmedResults = published(achievements).slice(0, 3);
  const communityPhotos = published(community).filter((item) => item.cover?.src).slice(0, 3);

  return <main id="conteudo" className="political-site">
    <section className="political-hero" aria-labelledby="political-hero-heading">
      <div className="political-hero__background" aria-hidden="true" />
      <div className="political-hero__portrait" aria-hidden="true">
        <img src={site.heroPhoto} alt="" fetchPriority="high" width="1023" height="1537" decoding="async" />
      </div>
      <div className="shell political-hero__container">
        <div className="political-hero__content">
          <p className="political-hero__eyebrow">VEREADORA DE RIACHO DE SANTANA <span>BAHIA</span></p>
          <h1 id="political-hero-heading">DINAIDE<br/><span>ROCHA<span className="political-hero__dot">.</span></span></h1>
          <p className="political-hero__subtitle">Uma trajetória para conhecer.<br/>Um mandato para acompanhar.</p>
          <div className="political-hero__buttons">
            <Link to="/biografia" className="political-button political-button--white">Conheça Dinaide <ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link to="/acoes" className="political-button political-button--hero-link">Acompanhe o mandato <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
        </div>
        <a className="political-hero__scroll" href="#quem-e-dinaide">Role para conhecer <ArrowDown size={16} aria-hidden="true" /></a>
      </div>
    </section>

    <section className="political-intro" id="quem-e-dinaide" aria-labelledby="political-intro-title">
      <div className="shell political-intro__container">
        <div className="political-intro__photo">
          <img src={site.aboutPhoto} loading="lazy" decoding="async" width="840" height="1260" alt="Dinaide Rocha em retrato de estúdio, vestindo blazer branco" />
          <span className="political-intro__photo-credit">DINAIDE ROCHA · RETRATO INSTITUCIONAL</span>
        </div>
        <div className="political-intro__text">
          <span className="political-kicker">QUEM É DINAIDE ROCHA</span>
          <h2 id="political-intro-title">Conheça<br/>a vereadora<br/><span>Dinaide Rocha.</span></h2>
          <p className="political-intro__lead">Conheça a pessoa e sua trajetória para além do cargo público.</p>
          <p>Aqui você encontra informações sobre Dinaide Rocha, vereadora de Riacho de Santana, Bahia. Sua história será apresentada com base em registros e informações confirmados pela equipe.</p>
          <Link className="political-text-link" to="/historia">Leia sobre sua trajetória <ArrowUpRight aria-hidden="true" size={19} /></Link>
        </div>
      </div>
    </section>

    <section className="political-mandate" aria-labelledby="political-mandate-title">
      <div className="shell political-mandate__container">
        <div className="political-mandate__heading">
          <div><span className="political-kicker political-kicker--white">MANDATO PARLAMENTAR</span><h2 id="political-mandate-title">Acompanhe<br/>o nosso trabalho.</h2></div>
          <p>Informações públicas sobre ações, atividades e iniciativas relacionadas ao mandato na Câmara Municipal de Riacho de Santana.</p>
        </div>
        <div className="political-mandate__links">
          <Link to="/acoes" className="political-mandate__link"><span className="political-mandate__label">01</span><span><strong>Ações e atividades</strong><small>Registros de visitas, agendas e atuação parlamentar</small></span><ArrowUpRight size={30} aria-hidden="true" /></Link>
          <Link to="/projetos" className="political-mandate__link"><span className="political-mandate__label">02</span><span><strong>Projetos e iniciativas</strong><small>Propostas e documentos do mandato</small></span><ArrowUpRight size={30} aria-hidden="true" /></Link>
          <Link to="/noticias" className="political-mandate__link"><span className="political-mandate__label">03</span><span><strong>Notícias</strong><small>Publicações e atualizações institucionais</small></span><ArrowUpRight size={30} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>

    {(recentActions.length > 0 || recentProjects.length > 0) && <section className="political-archive" aria-labelledby="political-archive-title"><div className="shell">
      <div className="political-heading"><div><span className="political-kicker">REGISTROS PUBLICADOS</span><h2 id="political-archive-title">Atuação em destaque.</h2></div><Link to="/acoes" className="political-text-link">Ver todos <ArrowUpRight size={18}/></Link></div>
      <div className="entry-grid">{recentActions.map(item => <EntryCard key={item.slug} item={item} collection="acoes" />)}{recentProjects.map(item => <EntryCard key={item.slug} item={item} collection="projetos" />)}</div>
    </div></section>}

    {confirmedResults.length > 0 && <section className="political-archive political-archive--soft"><div className="shell">
      <div className="political-heading"><div><span className="political-kicker">REGISTROS DOCUMENTADOS</span><h2>Conquistas e entregas.</h2></div></div>
      <div className="political-results">{confirmedResults.map(item => <article key={item.slug}><span>{item.location || site.location}</span><h3>{item.title}</h3><p>{item.summary}</p><strong>{item.outcome === "concluida" ? "Concluída" : item.outcome === "em-andamento" ? "Em andamento" : item.outcome === "encaminhada" ? "Encaminhada" : "Proposta"}</strong></article>)}</div>
    </div></section>}

    <section className="political-news" aria-labelledby="political-news-title"><div className="shell">
      <div className="political-heading"><div><span className="political-kicker">ACOMPANHE AS ATUALIZAÇÕES</span><h2 id="political-news-title">Últimas notícias.</h2></div><Link className="political-text-link" to="/noticias">Todas as notícias <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
      {recentNews.length ? <div className="entry-grid">{recentNews.map(item => <EntryCard key={item.slug} item={item} collection="noticias" />)}</div> : <div className="political-news__empty"><div className="political-news__empty-icon"><Newspaper size={33} strokeWidth={1.4} aria-hidden="true" /></div><div><strong>Em breve, novas publicações.</strong><p>As notícias e atualizações do mandato serão publicadas aqui após conferência das informações.</p></div><Link to="/noticias" className="political-news__empty-link" aria-label="Visitar notícias"><ArrowUpRight size={25} aria-hidden="true" /></Link></div>}
    </div></section>

    <section className="political-gallery" aria-labelledby="political-gallery-title">
      <div className="shell political-gallery__container">
        <div className="political-gallery__copy">
          <span className="political-kicker">GALERIA DE FOTOS E VÍDEOS</span>
          <h2 id="political-gallery-title">Histórias<br/>registradas<br/>em imagens.</h2>
          <p>Acompanhe a galeria institucional de fotografias, vídeos e registros públicos. Novos álbuns serão adicionados conforme as atividades forem documentadas.</p>
          <Link className="political-button political-button--pink" to="/galeria">Visitar a galeria <ArrowUpRight size={19} aria-hidden="true" /></Link>
        </div>
        <div className="political-gallery__visual">
          {communityPhotos.length ? <div className="political-gallery__mosaic">{communityPhotos.map((item) => <img src={item.cover!.src} alt={item.cover!.alt} key={item.slug} loading="lazy" />)}</div> : <><img src={site.aboutPhoto} width="840" height="1260" loading="lazy" decoding="async" alt="Retrato institucional de Dinaide Rocha em blazer branco" /><div className="political-gallery__overlay"><Camera size={22} aria-hidden="true" /><span>Retratos institucionais<br/>e acervo fotográfico</span></div></>}
        </div>
      </div>
    </section>

    <section className="political-contact" aria-labelledby="political-contact-title"><div className="shell political-contact__container">
      <div><span className="political-kicker political-kicker--white">ENTRE EM CONTATO</span><h2 id="political-contact-title">O diálogo<br/>continua aqui.</h2><p>Consulte os canais institucionais de contato da vereadora e sua equipe.</p></div>
      <Link className="political-button political-button--white" to="/contato">Fale com a equipe <ArrowUpRight size={19} aria-hidden="true" /></Link>
    </div></section>
  </main>;
}