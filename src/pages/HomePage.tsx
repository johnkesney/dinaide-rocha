import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, HeartHandshake, MapPin, MoveUpRight, Newspaper, Sparkles } from "lucide-react";
import { actions, achievements, community, configuredSocials, gallery, news, projects, published, site } from "@/content/site";
import { EmptyState, EntryCard, SectionHeading } from "@/components/site/Editorial";
import { MediaFrame } from "@/components/site/MediaFrame";

export function HomePage() {
  const recentActions = published(actions).slice(0, 3);
  const recentProjects = published(projects).slice(0, 3);
  const recentNews = published(news).slice(0, 3);
  const confirmedResults = published(achievements);
  const socialLinks = configuredSocials();

  return <main id="conteudo">
    <section className="hero" aria-labelledby="hero-title">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <span className="hero-kicker"><span className="pink-dot" /> UM ESPAÇO DE DIÁLOGO E INFORMAÇÃO</span>
          <div className="hero-title-wrap">
            <span className="hero-pretitle">Vereadora de Riacho de Santana</span>
            <h1 id="hero-title">Dinaide<br/><em>Rocha<span className="hero-period">.</span></em></h1>
          </div>
          <p className="hero-description">{site.heroIntro}</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/historia">Conheça minha história <ArrowUpRight size={18} /></Link>
            <Link className="button button-outline" to="/acoes">Acompanhe meu trabalho <ArrowRight size={18} /></Link>
          </div>
          <a className="hero-scroll" href="#conheca"><ArrowDown size={17}/> DESCUBRA MAIS</a>
        </div>
        <div className="hero-art">
          <div className="hero-photo-border" aria-hidden="true" />
          <div className="hero-image">
            <MediaFrame media={site.heroPhoto ? { src: site.heroPhoto, alt: "Retrato oficial de Dinaide Rocha", type: "image" } : undefined} label="Espaço reservado à fotografia oficial" />
          </div>
          <span className="hero-art-corner" aria-hidden="true">DR</span>
          <div className="hero-vertical" aria-hidden="true">RIACHO DE SANTANA · BAHIA · BRASIL</div>
          <div className="hero-art-card"><span>INSTITUCIONAL</span><strong>Um mandato<br/>para acompanhar.</strong><ArrowUpRight size={20}/></div>
        </div>
      </div>
      <div className="shell hero-index"><span>01 — APRESENTAÇÃO</span><span>BAHIA · BRASIL</span></div>
    </section>

    <div className="statement-strip"><div className="shell statement-inner"><span>DIÁLOGO</span><i>✳</i><span>INFORMAÇÃO</span><i>✳</i><span>COMUNIDADE</span><i>✳</i><span>TRANSPARÊNCIA</span></div></div>

    <section className="section about-section" id="conheca">
      <div className="shell about-layout">
        <div className="about-visual">
          <MediaFrame media={site.aboutPhoto ? { src: site.aboutPhoto, alt: "Fotografia de Dinaide Rocha", type: "image" } : undefined} label="Fotografia da trajetória em preparação" />
          <div className="about-visual-label"><span>CONHEÇA</span><strong>A pessoa por trás<br/>do mandato.</strong></div>
        </div>
        <div className="about-content">
          <div className="eyebrow"><span className="eyebrow-line" /> CONHEÇA DINAIDE</div>
          <h2 className="display-title">Toda história<br/>começa com <em>gente.</em></h2>
          <div className="small-rule" />
          <p className="large-copy">Antes do cargo público, existe uma história para conhecer.</p>
          <p>Este espaço reúne a apresentação de Dinaide Rocha, vereadora de Riacho de Santana, e será atualizado com informações biográficas revisadas e autorizadas pela equipe.</p>
          <Link className="text-link text-link--pink" to="/biografia">Conheça Dinaide <ArrowUpRight size={19}/></Link>
        </div>
      </div>
    </section>

    <section className="section history-section" id="historia">
      <div className="shell">
        <SectionHeading eyebrow="MINHA HISTÓRIA" title="Uma trajetória. Muitas páginas para contar." description="Um lugar dedicado a registrar, com cuidado e fidelidade, os momentos que fazem parte dessa caminhada." action="Ver a história completa" actionHref="/historia" />
        <div className="history-panel">
          <div className="history-number">02<span> / HISTÓRIA</span></div>
          <div className="history-chapters">
            {site.history.length ? site.history.slice(0, 3).map((moment, index) => <div className="history-chapter" key={index}><span>{moment.year || String(index + 1).padStart(2, "0")}</span><h3>{moment.title}</h3><p>{moment.description}</p></div>) : <div className="history-waiting"><span className="history-waiting__icon">✳</span><h3>Histórias que merecem ser registradas.</h3><p>A linha do tempo será construída a partir de informações e registros oficiais enviados pela equipe.</p><Link to="/historia" className="text-link">Acessar página da história <ArrowUpRight size={18}/></Link></div>}
          </div>
        </div>
      </div>
    </section>

    <section className="section work-section" id="trabalho">
      <div className="shell">
        <SectionHeading eyebrow="NOSSO TRABALHO" title="O trabalho público precisa ser visto." description="Registros das atividades parlamentares, iniciativas e encontros com a população, sempre com informações verificáveis." action="Todas as ações" actionHref="/acoes" />
        {recentActions.length ? <div className="entry-grid">{recentActions.map((item) => <EntryCard key={item.slug} item={item} collection="acoes"/>)}</div> :
          <div className="work-empty-grid"><div className="work-empty-primary"><span className="work-big-mark" aria-hidden="true">✳</span><h3>Presença e trabalho,<br/><em>com transparência.</em></h3><p>As atividades do mandato aparecerão aqui assim que os registros forem revisados e publicados.</p><Link to="/acoes" className="button button-white">Conhecer as ações <ArrowUpRight size={17}/></Link></div><div className="work-empty-secondary"><span>ACERVO INSTITUCIONAL</span><strong>Para cada registro,<br/>contexto, data<br/>e informação.</strong><div className="work-secondary-ornament">01 / 03</div></div></div>}
      </div>
    </section>

    {confirmedResults.length > 0 && <section className="section achievements-section"><div className="shell"><SectionHeading eyebrow="CONQUISTAS E ENTREGAS" title="Resultados com documentação." description="Etapas e resultados publicados com indicação clara de sua situação." /> <div className="entry-grid">{confirmedResults.slice(0,3).map((item) => <div key={item.slug} className="achievement-card"><strong>{item.title}</strong><span>{item.location || "Riacho de Santana"}</span><p>{item.summary}</p><small>{item.outcome === "concluida" ? "Concluída" : item.outcome === "encaminhada" ? "Encaminhada" : item.outcome === "em-andamento" ? "Em andamento" : "Proposta"}</small></div>)}</div></div></section>}

    <section className="section projects-section" id="projetos">
      <div className="shell">
        <SectionHeading eyebrow="PROJETOS E INICIATIVAS" title="Ideias, propostas e caminhos." description="Acompanhe as iniciativas e entenda em que etapa cada uma se encontra." action="Ver todos os projetos" actionHref="/projetos" light/>
        {recentProjects.length ? <div className="entry-grid entry-grid--dark">{recentProjects.map((item) => <EntryCard key={item.slug} item={item} collection="projetos"/>)}</div> :
          <div className="projects-feature"><div className="projects-feature-index">PROJETOS<br/>E INICIATIVAS <span>↗</span></div><div className="projects-feature-copy"><strong>Informação clara.<br/><em>Do início ao resultado.</em></strong><p>Propostas e documentos serão disponibilizados após conferência dos dados oficiais.</p><Link to="/projetos" className="button button-light-outline">Explorar iniciativas <ArrowUpRight size={17}/></Link></div></div>}
      </div>
    </section>

    <section className="section news-section" id="noticias">
      <div className="shell">
        <SectionHeading eyebrow="ÚLTIMAS ATUALIZAÇÕES" title="Informação que aproxima." description="Notícias, comunicados e registros relevantes da atuação institucional." action="Ver todas as notícias" actionHref="/noticias"/>
        {recentNews.length ? <div className="entry-grid">{recentNews.map((item) => <EntryCard key={item.slug} item={item} collection="noticias"/>)}</div> : <div className="news-empty"><div className="news-empty-icon"><Newspaper size={44} strokeWidth={1.2}/></div><div><span className="eyebrow muted-eyebrow">EDITORIAL / EM ATUALIZAÇÃO</span><h3>Novidades em breve.</h3><p>Esta área receberá notícias e atualizações revisadas pela equipe.</p></div><Link to="/noticias" className="round-arrow" aria-label="Ir para notícias"><ArrowUpRight size={25}/></Link></div>}
      </div>
    </section>

    {site.curiosities.length > 0 && <section className="section curiosities-section"><div className="shell"><SectionHeading eyebrow="VOCÊ SABIA?" title="Mais do que um cargo. Uma história." description="Curiosidades e informações autorizadas pela equipe."/><div className="curiosity-grid">{site.curiosities.map((item) => <div className="curiosity-card" key={item.title}><Sparkles size={26}/><h3>{item.title}</h3><p>{item.description}</p></div>)}</div></div></section>}

    <section className="section community-section" id="comunidade">
      <div className="shell community-layout"><div className="community-intro"><div className="eyebrow"><span className="eyebrow-line" /> NA COMUNIDADE</div><h2 className="display-title">Perto de quem<br/><em>faz a cidade.</em></h2><p>Encontros e atividades em Riacho de Santana, registrados com data, local e informações de contexto.</p><Link to="/galeria" className="button button-primary">Explorar a galeria <ArrowUpRight size={17}/></Link></div>
        <div className="community-collage">
          {community.length ? published(community).slice(0, 2).map((item) => <MediaFrame key={item.slug} media={item.cover} variant="portrait" label="Registro da comunidade"/>) : <><MediaFrame label="Registros da comunidade em preparação"/><div className="community-sticker"><MapPin size={21}/><strong>Riacho de<br/>Santana</strong><span>BAHIA</span></div></>}
        </div></div>
    </section>

    <section className="section gallery-section" id="galeria">
      <div className="shell gallery-promo"><div className="gallery-promo-heading"><div className="eyebrow"><span className="eyebrow-line" /> GALERIA DE REGISTROS</div><h2 className="display-title">Momentos que<br/><em>ficam.</em></h2><p>Imagens e vídeos autorizados, organizados para preservar e compartilhar registros da trajetória e das atividades públicas.</p><Link to="/galeria" className="text-link text-link--pink">Ver galeria completa <ArrowUpRight size={19}/></Link></div><div className="gallery-promo-media"><MediaFrame media={gallery.find((m) => m.type === "image")} variant="landscape" label="Álbum de fotografias em preparação"/><span className="gallery-promo-tag">ÁLBUNS · FOTOS · VÍDEOS</span></div></div>
    </section>

    <section className="connect-section" id="redes"><div className="shell connect-layout"><div><span className="eyebrow"><span className="eyebrow-line" /> CONEXÃO</span><h2>Informação também<br/><em>é proximidade.</em></h2></div><div>{socialLinks.length ? <div className="social-buttons">{socialLinks.map(([name, url]) => <a href={url} key={name} rel="noopener noreferrer" target="_blank">{name}<MoveUpRight size={17}/></a>)}</div> : <p>Os perfis oficiais serão disponibilizados aqui após confirmação dos endereços pela equipe.</p>}<Link to="/contato" className="connect-contact">Canais de contato <ArrowUpRight size={18}/></Link></div></div></section>

    <section className="closing-section"><div className="shell closing-layout"><div className="closing-stamp"><HeartHandshake size={33} strokeWidth={1.1}/><span>TRANSPARÊNCIA E DIÁLOGO</span></div><div><h2>Vamos manter<br/>essa <em>conversa.</em></h2><p>Conheça os canais institucionais e acompanhe as informações oficiais do mandato.</p><Link to="/contato" className="button button-dark">Entre em contato <ArrowUpRight size={19}/></Link></div></div></section>
  </main>;
}
