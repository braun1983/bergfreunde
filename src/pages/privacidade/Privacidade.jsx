import style from './Privacidade.module.css'

export default function Privacidade() {
  return (
    <main className={style.privacidade_page}>
      <section className={style.privacidade_hero}>
        <h1 className={style.privacidade_titulo}>Política de Privacidade</h1>
        <p className={style.privacidade_subtitulo}>Última atualização: maio de 2026</p>
      </section>

      <div className={style.privacidade_conteudo}>

        <section className={style.privacidade_secao}>
          <h2>1. Quem somos</h2>
          <p>
            Este site é mantido pela <strong>Associação Cultural e Recreativa Campinho (ACRC)</strong>,
            CNPJ 31.816.036/0001-71, com sede em Campinho, Domingos Martins — ES,
            responsável pelo Grupo Folclórico Bergfreunde.
          </p>
          <p>Contato: <a href='mailto:gfbergfreunde@gmail.com'>gfbergfreunde@gmail.com</a></p>
        </section>

        <section className={style.privacidade_secao}>
          <h2>2. Quais dados coletamos</h2>
          <p>Este site pode coletar os seguintes dados:</p>
          <ul>
            <li><strong>Dados de navegação:</strong> páginas visitadas, tempo de acesso, tipo de dispositivo e navegador, endereço IP anonimizado — coletados automaticamente pelas ferramentas Vercel Analytics e Vercel Speed Insights.</li>
            <li><strong>Dados de contato:</strong> nome e mensagem, quando o visitante opta por entrar em contato via WhatsApp através do formulário do site.</li>
          </ul>
        </section>

        <section className={style.privacidade_secao}>
          <h2>3. Para que usamos os dados</h2>
          <ul>
            <li>Analisar o desempenho e a usabilidade do site</li>
            <li>Melhorar a experiência de navegação</li>
            <li>Responder mensagens de contato enviadas pelo visitante</li>
          </ul>
        </section>

        <section className={style.privacidade_secao}>
          <h2>4. Cookies e rastreamento</h2>
          <p>
            Utilizamos ferramentas de análise da Vercel (Analytics e Speed Insights) que podem
            armazenar cookies ou coletar dados de navegação de forma anonimizada.
            Esses dados não são utilizados para fins publicitários nem compartilhados com terceiros
            além dos serviços mencionados.
          </p>
          <p>
            Você pode recusar o uso de cookies através das configurações do seu navegador.
          </p>
        </section>

        <section className={style.privacidade_secao}>
          <h2>5. Compartilhamento de dados</h2>
          <p>
            Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros,
            exceto com os serviços de infraestrutura utilizados (Vercel), que possuem
            as suas próprias políticas de privacidade.
          </p>
        </section>

        <section className={style.privacidade_secao}>
          <h2>6. Seus direitos (LGPD)</h2>
          <p>De acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:</p>
          <ul>
            <li>Confirmar a existência de tratamento de dados</li>
            <li>Acessar seus dados</li>
            <li>Solicitar a correção ou exclusão de dados</li>
            <li>Revogar o consentimento a qualquer momento</li>
          </ul>
          <p>Para exercer esses direitos, entre em contato pelo e-mail <a href='mailto:bergfreunde@gmail.com'>bergfreunde@gmail.com</a>.</p>
        </section>

        <section className={style.privacidade_secao}>
          <h2>7. Alterações nesta política</h2>
          <p>
            Esta política pode ser atualizada periodicamente. Recomendamos que você a consulte
            regularmente. A data da última atualização está indicada no topo desta página.
          </p>
        </section>

      </div>
    </main>
  )
}