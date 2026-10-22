# Dinaide Rocha — site institucional

Repositório oficial: johnkesney/dinaide-rocha, branch main. O Lovable serve somente como pré-visualização e testes; a fonte oficial é o código deste repositório.

## Tecnologias
React 19, TypeScript, TanStack Start/Router, Vite 8 e Tailwind CSS 4. A árvore de rotas src/routeTree.gen.ts é autogerada pelo plugin do TanStack: não edite manualmente.

## Execução e verificações
Node.js 22+ e npm ou Bun. Instalar: npm install. Desenvolvimento: npm run dev. Verificações: npm run build, npm run lint e npm run test.

## Publicação de conteúdo
A fonte de dados provisória é src/content/site.ts. Configurações: site. Coleções: actions, projects, news, achievements, community e gallery.
Conteúdos vazios são intencionais. Nunca inventar fatos, datas, conquistas, contatos, redes sociais nem imagem oficial. Usar somente registros conferidos e mídias autorizadas com texto alternativo. URL oficial de rede social precisa ser HTTPS.
Registros editoriais possuem slug único, title, summary, body, publishedAt no formato AAAA-MM-DD e status draft ou published, além de cover, category, location, documents, officialNumber, outcome, result e actionTaken opcionais.
Somente conteúdos status published aparecem no portal; rascunhos ficam ocultos.

## Painel administrativo — integração pendente
Esta etapa implementa o site público e contratos editoriais tipados. Não há autenticação administrativa, upload, formulário ou banco persistente configurados; nenhuma persistência fictícia foi criada.
Para implementar painel com Supabase: criar projeto, disponibilizar URL e chave pública, definir tabelas, autenticação com permissões, RLS, storage seguro, migrações, fluxo de rascunho e publicação e auditoria. Chaves de serviço e segredos somente no servidor.

## Antes da publicação oficial
Confirmar fotografias e licenças, logotipo, biografia, canais de contato, registros institucionais, política de privacidade revisada, configurações de hospedagem, domínio, SEO, acessibilidade e testes em dispositivos.

## Matéria da entrega de trator — Sambaíba
O registro editorial está salvo em `src/content/sambaiba.ts` com `status: "published"`, após autorização expressa da equipe. Aparece nas coleções de ações, conquistas e comunidade, e suas fotografias constam na galeria.

A entrega ocorreu em **02/10/2026**, conforme data informada pela equipe. Não é necessário anexar documentos de aquisição à matéria. A publicação foi autorizada pela equipe. As três fotografias recebidas foram otimizadas em WebP e adicionadas ao repositório; caminhos:
- `public/images/sambaiba-entrega-trator-01.webp`
- `public/images/sambaiba-entrega-trator-02.webp`
- `public/images/sambaiba-entrega-trator-03.webp`

O vídeo relacionado foi informado como `https://www.instagram.com/reel/DeA44fJRwNU/`; não foi possível conferir seu conteúdo por acesso direto ao Instagram. O registro foi publicado mediante autorização expressa recebida na conversa.
