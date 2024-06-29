## Tecnologias

- Node.js
- Next.js
- TypeScript
- TailwindCSS
- Stripe
- Zod
- React Hook Form
- Shadcn
- uploadthing

## Recursos

👉 Autenticação (CRUD) com Clerk: Gerenciamento de usuários através do Clerk, garantindo autenticação segura e eficiente.

👉 Eventos (CRUD): Funcionalidade abrangente para criação, leitura, atualização e exclusão de eventos, dando aos usuários controle total sobre o gerenciamento de eventos.

Criar eventos: os usuários podem gerar novos eventos sem esforço, fornecendo detalhes essenciais como título, data, local e qualquer informação adicional.
Ler eventos: acesso direto a uma visão detalhada de todos os eventos, permitindo que os usuários explorem detalhes específicos do evento, incluindo descrições, programações e informações relacionadas.
Atualizar eventos: capacitar os usuários a modificar detalhes de eventos dinamicamente, garantindo que as informações do evento permaneçam precisas e atualizadas.
Excluir eventos: um processo simples para remover eventos do sistema, dando aos administradores a capacidade de gerenciar e organizar a plataforma de forma eficaz.

👉 Eventos relacionados: conecta de forma inteligente eventos relacionados e exibidos na página de detalhes do evento, tornando-o mais envolvente para os usuários

👉 Eventos Organizados: Organização eficiente dos eventos, garantindo uma exibição estruturada e amigável para o público, ou seja, mostrando os eventos criados pelo usuário no perfil do usuário

👉 Pesquisa e filtro: capacitando os usuários com um sistema robusto de pesquisa e filtro, permitindo que eles encontrem facilmente os eventos que correspondem às suas preferências.

👉 Nova categoria: a categorização dinâmica permite a adição contínua de novas categorias de eventos, mantendo sua plataforma adaptável.

👉 Checkout e Pay with Stripe: Transações de pagamento tranquilas e seguras usando Stripe, melhorando a experiência do usuário durante o processo de checkout.

👉 Pedidos de eventos: sistema abrangente de gerenciamento de pedidos, fornecendo uma visão geral clara de todas as transações relacionadas a eventos.

👉 Pesquisar pedidos: Funcionalidade de pesquisa rápida e eficiente de pedidos, facilitando o fácil rastreamento e gerenciamento.

### Configurar variáveis ​​de ambiente

Crie um novo arquivo nomeado .env na raiz, adicionar o seguinte conteúdo:

```
#NEXT
NEXT_PUBLIC_SERVER_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_CLERK_WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#MONGODB
MONGODB_URI=

#UPLOADTHING
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

```
