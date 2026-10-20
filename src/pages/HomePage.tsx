import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, CalendarDays, Camera, FileText, MapPin, Newspaper } from "lucide-react";
import { actions, achievements, community, gallery, news, projects, published, site } from "@/content/site";
import { EntryCard } from "@/components/site/Editorial";

/** Página inicial do mandato: só publica informações oficiais verificadas. */
export function HomePage() {
  const latestNews = published(news).slice(0, 3);
  const latestActions = published(actions).slice(0, 3);
  const latestProjects = published(projects).slice(0, 3);
  const verifiedAchievements = published(achievements).slice(0, 3);
  const latestCommunity = published(community).slice(0, 4);
  const photoGallery = gallery.filter((item) => item.type === "image").slice(0, 4);

  return (
    <main id="conteudo" className="institutional-home">
      <section className="institutional-hero" aria-labelledby="home-title">
        <div className="institutional-hero__image" aria-hidden="true">
          <img src={site.heroPhoto} alt="" fetchPriority="high" width="840" height="1262" decoding="async" />
        </div>
        <div className="shell institutional-hero__inner">
          <div className="institutional-hero__copy">
            <p className="institutional-label institutional-label--light"><span className="institutional-label__bar" /> Vereadora de Riacho de Santana · BA</p>
            <h1 id="home-title"><span>Dinaide</span><strong>Rocha<span className="institutional-hero__period">.</span></strong></h1>
            <div className="institutional-hero__rule" />
            <p className="institutional-hero__intro">Um espaço para conhecer sua trajetória e acompanhar de perto o trabalho parlamentar.</p>
            <div className="institutional-hero__actions">
              <Link className="institutional-btn institutional-btn--pink" to="/biografia">Conheça Dinaide <ArrowUpRight aria-hidden="true" size={18}/></Link>
              <Link className="institutional-btn institutional-btn--text-light" to="/acoes">Acompanhe o mandato <ArrowRight aria-hidden="true" size={18}/></Link>
            </div>
          </div>
          <div className="institutional-hero__bottom">
            <a href="#conheca-dinaide">Explore o site <ArrowDown aria-hidden="true" size={15}/></a>
            <span>PORTAL INSTITUCIONAL <span aria-hidden="true">/</span> RIACHO DE SANTANA, BAHIA</span>
          </div>
        </div>
      </section>

      <section className="institutional-about" id="conheca-dinaide" aria-labelledby="about-heading">
        <div className="shell institutional-about__layout">
          <div className="institutional-about__image">
            <img loading="lazy" decoding="async" src={site.aboutPhoto} width="840" height="1260" alt="Dinaide Rocha em retrato institucional com roupa branca"/>
            <div className="institutional-about__caption">DINAIDE ROCHA <span>·</span> RIACHO DE SANTANA</div>
          </div>
          <div className="institutional-about__body">
            <p className="institutional-label"><span className="institutional-label__bar" /> QUEM É DINAIDE</p>
            <h2 id="about-heading">Uma história para conhecer<span className="institutional-pink-dot">.</span></h2>
            <p className="institutional-about__lead">A pessoa por trás do mandato.</p>
            <p>Conheça Dinaide Rocha, vereadora de Riacho de Santana, e saiba mais sobre sua trajetória pessoal e pública.</p>
            <p>Neste espaço, a história será apresentada a partir de informações e registros confirmados pela equipe.</p>
            <Link className="institutional-inline-link" to="/historia">Conheça sua história <ArrowUpRight aria-hidden="true" size={19}/></Link>
          </div>
        </div>
      </section>

      <section className="institutional-work" id="mandato" aria-labelledby="mandato-heading">
        <div className="shell">
          <div className="institutional-section-header">
            <div>
              <p className="institutional-label"><span className="institutional-label__bar" /> ACOMPANHE O MANDATO</p>
              <h2 id="mandato-heading">O que acontece<br/>no mandato<span className="institutional-pink-dot">.</span></h2>
            </div>
            <p>Informação pública de forma simples e organizada. Acompanhe atividades, propostas e atualizações.</p>
          </div>
          <div className="institutional-work__rows">
            <Link to="/acoes" className="institutional-work__row">
              <span className="institutional-work__number">01</span><span className="institutional-work__icon"><MapPin aria-hidden="true" size={23}/></span>
              <span className="institutional-work__name">Ações e atividades<small>Visitas, agendas e registros de trabalho</small></span>
              <ArrowUpRight className="institutional-work__arrow" aria-hidden="true" size={25}/>
            </Link>
            <Link to="/projetos" className="institutional-work__row">
              <span className="institutional-work__number">02</span><span className="institutional-work__icon"><FileText aria-hidden="true" size={23}/></span>
              <span className="institutional-work__name">Projetos e iniciativas<small>Proposições e documentos legislativos</small></span>
              <ArrowUpRight className="institutional-work__arrow" aria-hidden="true" size={25}/>
            </Link>
            <Link to="/noticias" className="institutional-work__row">
              <span className="institutional-work__number">03</span><span className="institutional-work__icon"><Newspaper aria-hidden="true" size={23}/></span>
              <span className="institutional-work__name">Notícias e atualizações<small>Comunicados e informações do mandato</small></span>
              <ArrowUpRight className="institutional-work__arrow" aria-hidden="true" size={25}/>
            </Link>
          </div>
        </div>
      </section>

      {(latestActions.length > 0 || latestProjects.length > 0) && (
        <section className="institutional-feed" aria-labelledby="atividades-heading"><div className="shell">
          <div className="institutional-section-header institutional-section-header--compact"><div><p className="institutional-label"><span className="institutional-label__bar" /> ATUAÇÃO PARLAMENTAR</p><h2 id="atividades-heading">Atividades recentes<span className="institutional-pink-dot">.</span></h2></div><Link to="/acoes" className="institutional-inline-link">Todas as ações <ArrowUpRight size={18}/></Link></div>
          <div className="entry-grid">{latestActions.map((item) => <EntryCard key={item.slug} item={item} collection="acoes"/>)}{latestProjects.map((item) => <EntryCard key={item.slug} item={item} collection="projetos"/>)}</div>
        </div></section>
      )}

      {verifiedAchievements.length > 0 && (
        <section className="institutional-feed institutional-feed--soft" aria-labelledby="resultados-heading"><div className="shell">
          <div className="institutional-section-header institutional-section-header--compact"><div><p className="institutional-label"><span className="institutional-label__bar" /> REGISTROS DOCUMENTADOS</p><h2 id="resultados-heading">Conquistas e entregas<span className="institutional-pink-dot">.</span></h2></div></div>
          <div className="institutional-results-grid">{verifiedAchievements.map((item) => <article className="institutional-result" key={item.slug}><span>{item.location || site.location}</span><h3>{item.title}</h3><p>{item.summary}</p><small>{item.outcome === "concluida" ? "Concluída" : item.outcome === "em-andamento" ? "Em andamento" : item.outcome === "encaminhada" ? "Encaminhada" : "Proposta"}</small></article>)}</div>
        </div></section>
      )}

      <section className="institutional-news" aria-labelledby="news-heading">
        <div className="shell">
          <div className="institutional-section-header institutional-section-header--compact">
            <div><p className="institutional-label"><span className="institutional-label__bar" /> INFORMAÇÕES DO MANDATO</p><h2 id="news-heading">Notícias e atualizações<span className="institutional-pink-dot">.</span></h2></div>
            <Link to="/noticias" className="institutional-inline-link">Todas as notícias <ArrowUpRight aria-hidden="true" size={19}/></Link>
          </div>
          {latestNews.length ? <div className="entry-grid">{latestNews.map((item) => <EntryCard key={item.slug} item={item} collection="noticias"/>)}</div> : (
            <div className="institutional-empty-news"><div className="institutional-empty-news__icon"><CalendarDays size={25} strokeWidth={1.7} aria-hidden="true" /></div><div><strong>Publicações em preparação</strong><p>Notícias e comunicados oficiais serão disponibilizados aqui após a conferência das informações.</p></div><Link to="/noticias" aria-label="Acessar página de notícias"><ArrowUpRight aria-hidden="true" size={23}/></Link></div>
          )}
        </div>
      </section>

      <section className="institutional-gallery" aria-labelledby="gallery-heading">
        <div className="shell institutional-gallery__layout">
          <div className="institutional-gallery__text">
            <p className="institutional-label"><span className="institutional-label__bar" /> FOTOS E REGISTROS</p>
            <h2 id="gallery-heading">Nossa cidade.<br/>Nossa história<span className="institutional-pink-dot">.</span></h2>
            <p>Um espaço para reunir imagens e vídeos de atividades, encontros e momentos públicos em Riacho de Santana.</p>
            <p className="institutional-gallery__note">Os registros de eventos serão publicados conforme disponibilizados e autorizados.</p>
            <Link className="institutional-btn institutional-btn--outline" to="/galeria">Acessar galeria <ArrowUpRight size={18} aria-hidden="true"/></Link>
          </div>
          <div className="institutional-gallery__images">
            {photoGallery.length || latestCommunity.some((item) => item.cover) ? <div className="institutional-gallery__collection">{photoGallery.map((item, index) => <img key={item.src+index} src={item.src} alt={item.alt} loading="lazy" decoding="async" />)}{latestCommunity.filter((item) => item.cover).map((item) => <img key={item.slug} src={item.cover!.src} alt={item.cover!.alt} loading="lazy" decoding="async"/>)}</div> : (
              <img src={site.heroPhoto} loading="lazy" decoding="async" width="840" height="1262" alt="Retrato institucional de Dinaide Rocha, com camisa rosa" />
            )}
            <div className="institutional-gallery__badge"><Camera size={20} aria-hidden="true"/><span>GALERIA INSTITUCIONAL</span></div>
          </div>
        </div>
      </section>

      <section className="institutional-contact" aria-labelledby="contact-heading"><div className="shell institutional-contact__inner"><div>
        <p className="institutional-label institutional-label--light"><span className="institutional-label__bar"/> FALE COM A EQUIPE</p><h2 id="contact-heading">Um canal aberto<br/>com você<span className="institutional-pink-dot">.</span></h2><p>Encontre os canais institucionais disponíveis e saiba como entrar em contato.</p>
      </div><Link to="/contato" className="institutional-btn institutional-btn--pink">Entre em contato <ArrowUpRight aria-hidden="true" size={19}/></Link></div></section>
    </main>
  );
}