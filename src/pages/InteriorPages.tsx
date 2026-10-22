import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Mail, MapPin, MessageCircle, Phone, Search } from "lucide-react";
import { actions, configuredSocials, gallery, news, projects, published, site, type Entry } from "@/content/site";
import { EmptyState, EntryCard } from "@/components/site/Editorial";
import { MediaFrame } from "@/components/site/MediaFrame";
import { GalleryGrid } from "@/components/site/GalleryGrid";

type Kind = "biografia" | "historia" | "acoes" | "projetos" | "noticias" | "galeria" | "contato" | "privacidade";

const headings: Record<Kind, { index: string; eyebrow: string; title: string; description: string }> = {
  biografia: { index: "01", eyebrow: "QUEM É DINAIDE", title: "Conheça Dinaide.", description: "Um espaço dedicado à pessoa, à sua trajetória e às histórias que deseja compartilhar com a população." },
  historia: { index: "02", eyebrow: "TRAJETÓRIA", title: "Minha história.", description: "Os capítulos de uma trajetória contados com autenticidade e informações confirmadas." },
  acoes: { index: "03", eyebrow: "ATUAÇÃO PARLAMENTAR", title: "Nosso trabalho.", description: "Acompanhe registros de atividades e ações do mandato, com datas e contexto." },
  projetos: { index: "04", eyebrow: "INICIATIVAS", title: "Projetos e propostas.", description: "Consulte as iniciativas, sua finalidade, documentos oficiais e situação atual." },
  noticias: { index: "05", eyebrow: "INFORMAÇÃO", title: "Notícias e atualizações.", description: "Acompanhe comunicados e notícias públicas do mandato." },
  galeria: { index: "06", eyebrow: "REGISTROS", title: "Galeria.", description: "Fotografias, vídeos e momentos preservados em um só lugar." },
  contato: { index: "07", eyebrow: "CANAIS OFICIAIS", title: "Vamos conversar?", description: "Informações institucionais e canais autorizados para entrar em contato." },
  privacidade: { index: "08", eyebrow: "INFORMAÇÃO E CUIDADO", title: "Privacidade.", description: "Informações sobre o tratamento de dados neste site institucional." },
};

function PageHero({ kind }: { kind: Kind }) {
  const item = headings[kind];
  return <div className="interior-hero"><div className="shell interior-hero-inner"><Link to="/" className="back-home"><ArrowLeft size={16}/> Voltar ao início</Link><div className="interior-kicker"><span className="pink-dot"/>{item.eyebrow}</div><h1>{item.title}</h1><p>{item.description}</p><div className="interior-number" aria-hidden="true">{item.index} / DR.</div></div></div>;
}

function Biography() {
  return <div className="shell interior-biography">
    <div className="interior-bio-image"><MediaFrame media={site.aboutPhoto ? { src: site.aboutPhoto, type: "image", alt: "Fotografia oficial de Dinaide Rocha" } : undefined} label="Fotografia autorizada em preparação"/></div>
    <div className="interior-bio-copy"><span className="eyebrow"><span className="eyebrow-line"/>APRESENTAÇÃO</span><h2>Uma trajetória<br/><em>para conhecer.</em></h2><p className="article-lead">Denaide Silva Rocha Penalva, conhecida como Dinaide Rocha, nasceu em Canatiba (Betânia) e vive há mais de três décadas em Riacho de Santana, Bahia.</p>
      {site.biography.length ? site.biography.map((p, i) => <p key={i}>{p}</p>) : <EmptyState compact title="Biografia em elaboração." description="O texto completo será publicado após revisão e autorização da equipe, sem informações presumidas."/>}
      <Link to="/historia" className="button button-primary">Conheça a trajetória <ArrowUpRight size={17}/></Link>
    </div>
  </div>;
}

function History() {
  return <div className="shell interior-history">
    <div className="history-intro"><span className="eyebrow"><span className="eyebrow-line"/>MOMENTOS DA TRAJETÓRIA</span><h2>Do comércio à vida pública em Riacho de Santana.</h2><p>Conheça momentos da trajetória pessoal, empreendedora e política de Dinaide Rocha. Os acontecimentos sem data confirmada são apresentados em ordem narrativa.</p></div>
    {site.history.length ? <ol className="timeline">{site.history.map((item, i) => <li key={i}><span>{item.year || String(i + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></li>)}</ol> : <EmptyState title="A linha do tempo será publicada aqui." description="Datas, acontecimentos e fotografias serão incluídos somente após confirmação pela equipe."/>}
    <div className="history-footer-cta"><Link to="/biografia" className="text-link">Voltar à biografia <ArrowRight size={18}/></Link></div>
  </div>;
}

function Archive({ kind }: { kind: "acoes" | "projetos" | "noticias" }) {
  const entries = kind === "acoes" ? actions : kind === "projetos" ? projects : news;
  const all = useMemo(() => published(entries), [entries]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todas");
  const categories = ["Todas", ...Array.from(new Set(all.map((e) => e.category).filter((c): c is string => Boolean(c))))];
  const filtered = all.filter((item) => (category === "Todas" || item.category === category) && (item.title + " " + item.summary + " " + (item.location || "")).toLocaleLowerCase("pt-BR").includes(query.toLocaleLowerCase("pt-BR")));

  return <div className="shell archive-area">
    {all.length ? <>
      <div className="archive-tools"><label className="search-field"><Search size={19}/><span className="sr-only">Pesquisar publicações</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Pesquisar por título, local ou palavra-chave..." type="search"/></label><span className="archive-count">{filtered.length} {filtered.length === 1 ? "registro encontrado" : "registros encontrados"}</span></div>
      {categories.length > 1 && <div className="filter-row">{categories.map((c) => <button type="button" key={c} aria-pressed={category === c} className={"filter-chip" + (category === c ? " filter-chip--active" : "")} onClick={() => setCategory(c)}>{c}</button>)}</div>}
      {filtered.length ? <div className="entry-grid archive-grid">{filtered.map((item) => <EntryCard key={item.slug} item={item} collection={kind}/>)}</div> : <EmptyState compact title="Nenhum resultado para esta pesquisa." description="Experimente outro termo ou selecione uma categoria diferente."/>}
    </> : <div className="archive-intro-empty"><EmptyState title={kind === "acoes" ? "As ações estão sendo organizadas." : kind === "projetos" ? "Os projetos estão sendo catalogados." : "As notícias serão publicadas em breve."} description={kind === "projetos" ? "Informações oficiais, tramitação e documentos serão disponibilizados após verificação." : "A equipe está preparando os registros com dados confirmados, fotografias autorizadas e descrições completas."}/><div className="archive-explainer"><span>COMPROMISSO COM A INFORMAÇÃO</span><p>Esta página exibirá somente conteúdos publicados e verificados. Rascunhos e informações incompletas não aparecem para o público.</p></div></div>}
  </div>;
}

function Contact() {
  const { phone, whatsapp, email, address, hours } = site.contact;
  const social = configuredSocials();
  const digits = whatsapp.replace(/\D/g, "");
  return <div className="shell contact-layout">
    <div className="contact-intro"><span className="eyebrow"><span className="eyebrow-line"/>CONTATO INSTITUCIONAL</span><h2>Informação aberta.<br/><em>Caminhos de diálogo.</em></h2><p>Utilize os canais oficiais informados nesta página. Endereços e contatos só são publicados quando confirmados pela equipe.</p><div className="contact-location"><MapPin size={18}/> Riacho de Santana — Bahia</div></div>
    <div className="contact-options">
      {email && <a className="contact-option" href={"mailto:" + email}><Mail size={24}/><div><small>E-MAIL</small><strong>{email}</strong></div><ArrowUpRight size={20}/></a>}
      {digits && <a className="contact-option" target="_blank" rel="noopener noreferrer" href={"https://wa.me/" + digits}><MessageCircle size={24}/><div><small>WHATSAPP</small><strong>Conversar pelo WhatsApp</strong></div><ArrowUpRight size={20}/></a>}
      {phone && <a className="contact-option" href={"tel:" + phone.replace(/[^\d+]/g, "")}><Phone size={24}/><div><small>TELEFONE</small><strong>{phone}</strong></div><ArrowUpRight size={20}/></a>}
      {address && <div className="contact-option"><MapPin size={24}/><div><small>ENDEREÇO</small><strong>{address}</strong>{hours && <span>{hours}</span>}</div></div>}
      {social.map(([name, url]) => <a className="contact-option" key={name} href={url} target="_blank" rel="noopener noreferrer"><ArrowUpRight size={24}/><div><small>REDE SOCIAL OFICIAL</small><strong>{name}</strong></div><ArrowUpRight size={20}/></a>)}
      {!email && !digits && !phone && !address && social.length === 0 && <EmptyState compact title="Canais oficiais em atualização." description="Nenhum telefone, e-mail ou perfil é divulgado sem confirmação. Os canais serão publicados aqui assim que forem autorizados."/>}
    </div>
  </div>;
}

function Privacy() {
  return <div className="shell privacy-layout"><div className="privacy-note"><strong>DOCUMENTO EM REVISÃO</strong><p>Esta página contém uma descrição preliminar do funcionamento do site. A política definitiva deverá ser revisada pelos responsáveis antes da publicação oficial.</p></div><div className="privacy-copy">
    <h2>Sobre este site</h2><p>Este portal disponibiliza conteúdos institucionais de interesse público relacionados a Dinaide Rocha, vereadora de Riacho de Santana (BA).</p>
    <h2>Dados enviados pelos visitantes</h2><p>Nesta versão, não há formulário de envio de dados pessoais nem cadastro de visitantes. Caso canais de contato externos sejam disponibilizados, o tratamento realizado por esses serviços seguirá as políticas dos respectivos provedores.</p>
    <h2>Navegação e serviços</h2><p>O funcionamento técnico do site e de sua hospedagem pode envolver registros operacionais necessários à segurança e à entrega das páginas. O detalhamento da infraestrutura e de eventuais cookies depende das configurações definitivas da hospedagem e deverá ser confirmado antes do lançamento.</p>
    <h2>Links externos</h2><p>Links para redes sociais, documentos ou outros serviços conduzem a páginas de terceiros, que possuem regras próprias.</p>
    <h2>Atualizações</h2><p>Esta descrição deverá ser revista quando forem integrados formulários, métricas de acesso, autenticação ou serviços adicionais.</p>
    <Link to="/contato" className="text-link text-link--pink">Canais de contato <ArrowUpRight size={18}/></Link>
  </div></div>;
}

export function InteriorPage({ kind }: { kind: Kind }) {
  return <main id="conteudo"><PageHero kind={kind}/><div className="interior-content">
    {kind === "biografia" && <Biography/>}
    {kind === "historia" && <History/>}
    {(kind === "acoes" || kind === "projetos" || kind === "noticias") && <Archive kind={kind}/>}
    {kind === "galeria" && <div className="shell archive-area"><GalleryGrid media={gallery}/></div>}
    {kind === "contato" && <Contact/>}
    {kind === "privacidade" && <Privacy/>}
  </div><div className="inner-end"><div className="shell"><span>INFORMAÇÃO PARA TODOS</span><Link to="/">Voltar para o início <ArrowUpRight size={16}/></Link></div></div></main>;
}

export function RecordDetail({ item, kind }: { item: Entry; kind: "acoes" | "projetos" | "noticias" }) {
  const [copied, setCopied] = useState(false);
  const title = kind === "acoes" ? "Ações e atividades" : kind === "projetos" ? "Projetos e iniciativas" : "Notícias";
  return <main id="conteudo"><div className="detail-top"><div className="shell"><a className="back-home" href={"/" + kind}><ArrowLeft size={16}/> Voltar para {title.toLowerCase()}</a><span className="eyebrow"><span className="eyebrow-line"/>{item.category || title}</span><h1>{item.title}</h1><div className="detail-metadata"><span>{item.publishedAt ? new Date(item.publishedAt + "T12:00:00").toLocaleDateString("pt-BR") : "Data a confirmar"}</span>{item.location && <span>{item.location}</span>}</div></div></div>
    <div className="shell detail-body-layout"><div className="detail-main">{item.cover && <div className="detail-cover"><MediaFrame media={item.cover} variant="landscape"/></div>}<div className="article-copy"><p className="article-lead">{item.summary}</p>{item.body.map((p, i) => <p key={i}>{p}</p>)}{item.actionTaken && <p><strong>Atuação registrada:</strong> {item.actionTaken}</p>}{item.result && <p><strong>Resultado documentado:</strong> {item.result}</p>}{item.outcome && <p><strong>Situação atual:</strong> {({ concluida: "Concluída", "em-andamento": "Em andamento", encaminhada: "Encaminhada", proposta: "Proposta" })[item.outcome]}</p>}{item.officialNumber && <p><strong>Número oficial:</strong> {item.officialNumber}</p>}{item.documents?.length ? <div className="document-list"><h2>Documentos oficiais</h2>{item.documents.filter((d) => d.url.startsWith("https://")).map((d) => <a key={d.url} href={d.url} target="_blank" rel="noopener noreferrer">{d.label} <ArrowUpRight size={16}/></a>)}</div> : null}
      {item.externalLinks?.length ? <div className="document-list"><h2>Vídeos e referências</h2>{item.externalLinks.filter((d) => /^https:\/\//.test(d.url)).map((d) => <a key={d.url} href={d.url} target="_blank" rel="noopener noreferrer">{d.label} <ArrowUpRight size={16}/></a>)}</div> : null}
      {item.photos?.length ? <div className="record-photo-gallery"><h2>Galeria de fotografias</h2><GalleryGrid media={item.photos}/></div> : null}</div></div>
    <aside className="detail-sidebar"><strong>Compartilhe esta publicação</strong><p>Ajude outras pessoas a encontrar informações públicas sobre esta atividade.</p><div className="share-links"><a target="_blank" rel="noopener noreferrer" href={"https://wa.me/?text=" + encodeURIComponent(item.title)} onClick={(e) => { e.preventDefault(); const url = window.location.href; window.open("https://wa.me/?text=" + encodeURIComponent(item.title + " — " + url), "_blank", "noopener,noreferrer"); }}>WhatsApp <ArrowUpRight size={15}/></a><button type="button" onClick={async () => { try { await navigator.clipboard.writeText(window.location.href); setCopied(true); } catch { setCopied(false); } }} aria-live="polite">{copied ? "Link copiado!" : "Copiar link"} <ArrowUpRight size={15}/></button></div></aside></div>
    <div className="shell detail-return"><a className="text-link" href={"/" + kind}>Ver outros registros <ArrowRight size={18}/></a></div>
  </main>;
}
