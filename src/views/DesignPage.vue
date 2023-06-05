<template>
  <div>
    <header>
      <p class="global__banner_font design">Design</p>
      <p class="faculdade">
        Faculdade de Arquitetura e Urbanismo | Campus Higienópolis
        <br>
        Mackenzie
      </p>
      <img class="banner" src="design/banner.jpg" alt="banner">
    </header>

    <div class="body">
      <section>

        <!-- Objetivos -->

        <div id="link_objetivo">
          <div class="container_objetivo">
            <div class="aulas__title">
              <h1 class="title">O que temos como objetivo?</h1>
            </div>
          </div>

          <div class="objetivo">
            <p class="objetivo__text">
              &nbsp; O Curso de Bacharelado em Design da FAU-Mackenzie tem como objetivo formar profissionais com
              competências
              amplas e habilidades múltiplas para atuar de forma generalista diante das rápidas transformações da
              sociedade. Com mais de 50 anos de existência, o curso evoluiu e passou a priorizar a abordagem projetual,
              incorporando tendências contemporâneas e alinhando-se às necessidades do mercado de trabalho.
              <br>
              <br>
              &nbsp; O curso aborda também a metodologia do Design Thinking, que é uma abordagem centrada no usuário para
              solução
              de problemas e desenvolvimento de produtos e serviços. O Design Thinking envolve diversas etapas, como a
              imersão no problema, definição de pontos de vista, ideação, prototipagem e teste. A metodologia é focada em
              entender as necessidades e desejos do usuário para desenvolver soluções inovadoras e eficientes.
            </p>
            <iframe style="background: #1f1f1f; border-radius: 8px; width: 100%; height:100%; min-height: 310px;"
              src=" https://www.youtube.com/embed/zcuPcoQNT4w" title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
        </div>

        <!-- Premiações -->

        <div class="premiacao" id="link_premiacoes">

          <div class="premiacoes__container">

            <div class="grafismo">
              <h3 class="title">Premiações</h3>
              <hr-color />
              <hr>
            </div>

            <div class="premiacao__grid">
              <div class="premiacao__background">
                <span>
                  <img class="premiacao__1" src="design/premio1.png">
                  <div class="premiacao__2">
                    <img src="design/star.png">
                    Guia do estudante
                  </div>
                </span>
                <img class="premiacao__img" src="design/estudante.png" alt="">
              </div>
            </div>
          </div>

          <!-- Background premiações -->

          <img class="premiacao__estudante" src="design/estudante.jpg" alt="Background das premições">
        </div>

        <!-- Matriz -->

        <div class="matriz" id="link_matriz">

          <div class="container_objetivo">
            <div class="aulas__title">
              <h1 class="title">Matérias | Matriz Curricular <span class="some">- Um pouquinho do que você vai
                  aprender</span>
              </h1>
            </div>
          </div>
          <br>

          <el-tabs v-model="activeNameNav" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="Matriz Curricular" name="first">
              <div class="container__collapse">

                <!-- Matriz curricular -->

                <el-collapse accordion>
                  <el-collapse-item v-for="(grade, index) in matriz" :key="index">
                    <template #title>
                      <p class="matriz__etapa" style="color: #BDBDBD"><b>{{ index + 1 }}° Semestre</b> - Disciplinas</p>
                    </template>
                    <span v-for="materia in grade">
                      {{ materia }}
                      <br>
                    </span>
                  </el-collapse-item>
                </el-collapse>

              </div>
            </el-tab-pane>

            <!-- Nav Secundária -->

            <el-tab-pane label="Atividades Acadêmicas" class="navSecond " name="second">
              <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane label="TCC" name="first">

                  O Trabalho de Conclusão de Curso - TCC- consiste na realização de um trabalho acadêmico, no qual o
                  aluno desenvolve uma ideia completa, de sua escolha, fundamenta-a teórica e projetualmente e
                  expõe-na
                  na forma de um objeto ou serviço (ou de um sistema objeto/serviço).
                  <br>
                  <br>
                  O principal objetivo é permitir que o aluno consolide as capacidades profissionais desenvolvidas ao
                  longo do curso e que podem ser resumidas na capacidade de analisar e propor soluções de projeto para
                  realidades colocadas no âmbito da cultura material e suas extensões virtuais através da construção
                  de
                  sínteses dos conhecimentos pertinentes ao campo profissional.

                </el-tab-pane>
                <el-tab-pane label="Estágios" name="second">
                  O programa de estágio curricular supervisionado (que se submete ao Regulamento Geral de Estágios da
                  UPM
                  e à Lei Federal que rege a questão) é obrigatório aos alunos do Curso, que devem cumprir entre o
                  início
                  da 1å etapa e o término da 7å etapa, o mínimo de 183 horas de estágio.
                  <br>
                  <br>
                  O programa é gerido por setorial administrativo, na esfera da Universidade, denominado de Área
                  Administrativa de Estágio (AAE), que define procedimentos e documentos necessários para a consolidação
                  do registro dos três agentes envolvidos neste processo: Universidade/Faculdade, aluno e
                  empresa/profissional autônomo.
                  <br>
                  <br>
                  O estágio é uma atividade muito importante para o estudante de graduação de Design, pois complementa o
                  seu aprendizado com uma visão do mundo real nos trabalhos prestados nas empresas ou órgãos públicos. A
                  atividade visa o aprimoramento profissional na sua área de estudo, possibilitando o conhecimento
                  prático
                  das matérias teóricas passadas em sala de aula.
                  <br>
                  <br>
                  O estágio de estudante é obrigatório, não configurando relação de emprego, mas com alguns direitos
                  como
                  o recebimento de bolsa ou remuneração, se estipulado, cumprimento de carga horária prefixada e
                  realização de seguro obrigatório contra acidentes, e após 1 ano de estágio, 30 dias de férias
                  remuneradas. A faculdade conta com uma Coordenação de Estágio que oferece suporte aos alunos antes e
                  durante o estágio.
                  <br>
                  <br>
                  O aluno poderá realizar estágio não obrigatório, com os mesmos procedimentos do estágio obrigatório,
                  mas
                  sem contar como realização para o cumprimento das 180 horas obrigatórias.
                  <br>
                  <br>
                  O programa conta também com o Relatório de Acompanhamento das Atividades do Estagiário (RAE), fonte
                  privilegiada para verificação do grau de aderência dos conhecimentos transmitidos ao aluno e da
                  relação
                  desses conhecimentos com a prática profissional, tanto do ponto de vista da concedente quanto do
                  estagiário, retroalimentando a reflexão sobre a eficácia do ensino e da aprendizagem, a partir do
                  olhar
                  do mercado de trabalho. Este relatório deve ser apresentado como documento obrigatório para o registro
                  das horas de estágio cumpridas pelo aluno no curso de Design.
                  <br>
                  <br>
                  Deverão ser disponibilizados os seguintes documentos referentes a todos os estágios realizados:
                  <br>
                  <br>
                  Termo de compromisso de Estágio TCE (incluindo o plano de atividades);
                  Relatório de Acompanhamento das Atividades do Estagiário;
                  Termo aditivo ao TCE (se houver alguma modificação ou prorrogação em seus termos.
                  Termo de Rescisão do TCE (se o termo for encerrado antes da data prevista) e
                  Termo de Realização do Estágio (contendo o período em que o Estágio foi realizado).
                  Estes documentos serão apresentados ao Coordenador de Estágios e deverão permanecer na Coordenadoria
                  de
                  Estágio, cópias dos seguintes documentos:
                  <br>
                  <br>
                  Relatório de Acompanhamento de Atividades do Estagiário;
                  Termo de Rescisão do TC ou Termo de Realização do Estágio.
                  Acompanhando as cópias dos documentos os alunos devem apresentar uma folha de rosto (A4) contendo:
                  <br>
                  <br>
                  nome do aluno;
                  nº de matrícula;
                  semestre cursando;
                  data;
                  relação do total de horas dos estágios realizados.
                </el-tab-pane>
                <el-tab-pane label="Atividades Complementares" name="third">
                  A Coordenadoria de Atividades Complementares e Extensão da FAU atua para organizar e viabilizar as
                  atividades extensionistas da unidade universitária, dando cumprimento a Resolução 08/2016 - 26 de maio
                  de 2016 que Regulamenta as Atividades Complementares da Universidade Presbiteriana Mackenzie.
                  <br>
                  <br>
                  As atividades complementares no Curso de Design orientam-se pelo princípio geral de que a formação do
                  profissional designer não se restringe exclusivamente aos conteúdos acadêmicos desenvolvidos em sala
                  de
                  aula. Isto significa que a formação do designer ultrapassa os muros da academia promovendo a prática
                  de
                  uma aprendizagem contínua, constante e complementar à formação profissional. O programa de atividades
                  complementares promove a participação dos estudantes em atividades de ensino, pesquisa e extensão e,
                  para concluir sua formação, o aluno precisa completar um mínimo de 180 horas de atividades
                  complementares, sendo necessário um mínimo de 30 horas em cada modalidade, a saber, ensino, pesquisa e
                  extensão.
                  <br>
                  <br>
                  Regulamento de Atividades Complementares
                  <br>
                  <br>
                  Atividades Complementares:
                  <br>
                  <br>
                  Informações e Tutoriais, acesse:
                  TIA > Moodle > Atividades Complementares
                  <br>
                  <br>
                  Siga-nos no Facebook:
                  @acfaumackenzie
                  @topicosespeciaisfaumack
                  <br>
                  <br>
                  Siga-nos no Instagram:
                  @ac.faumack
                  <br>
                  <br>
                  Contatos:
                  fau.extensao@mackenzie.br
                  Coordenadora de Extensão
                  Professora Ms.ª Ana Paula Calvo
                </el-tab-pane>
                <el-tab-pane label="Atividades de Extensão" name="fourth">
                  A Coordenadoria de Atividades Complementares e Extensão da FAU atua para organizar e viabilizar as
                  atividades extensionistas da unidade universitária, dando cumprimento a Resolução 05/2012 - 13 de
                  fevereiro de 2012 que regulamenta a Extensão da Universidade Presbiteriana Mackenzie.
                  <br>
                  <br>
                  Esta Coordenadoria está comprometida com uma política de extensão que contemple os seguintes aspectos:
                  a) que se harmonize com o pensamento da Universidade Presbiteriana Mackenzie, em seus aspectos gerais;
                  b) que possa envolver alunos de graduação e de pós-graduação; c) que traga contribuições importantes
                  para o contexto social; d) que possa contribuir para o desenvolvimento qualitativo do corpo card,
                  como também dos próprios alunos envolvidos em projetos extensionistas específicos, possibilitando a
                  esses, tanto a vivência profissional quanto a articulação desta com os conhecimentos teóricos e
                  práticos
                  apreendidos no Curso.
                  <br>
                  <br>
                  É nosso objetivo promover atividades que exponham, evidenciem ou discutam assuntos relacionados à
                  Arquitetura, ao Urbanismo, no âmbito nacional e internacional, para nossa comunidade acadêmica e para
                  pessoas da sociedade, com especial interesse nestes assuntos.
                  <br>
                  <br>
                  Contatos:
                  fau.extensao@mackenzie.br
                  Coordenadora de Extensão
                  Professora Ms.ª Ana Paula Calvo
                </el-tab-pane>
              </el-tabs>
            </el-tab-pane>
            <el-tab-pane label="Projeto Pedagógico" name="third">
              <div class="container__collapse">
                O aluno de graduação tem oportunidade de participar da Pesquisa no âmbito do Programa Institucional de
                Iniciação Científica (PIBIC ) ou de forma voluntaria. A UPM oferece o PIBIC Mackenzie que se destina a
                complementar o ensino de graduação, permitindo aos estudantes a oportunidade de desvendarem como se
                processa
                a
                geração do saber e como o conhecimento científico é adquirido. Esses objetivos são alcançados pela
                participação do aluno nas atividades práticas e teóricas no ambiente de pesquisa, sob a orientação de um
                professor-pesquisador. A efetivação e consolidação da boa pesquisa em nossa Universidade é uma questão
                prioritária de nossa Reitoria, e é apoiada pelo Instituto Presbiteriano Mackenzie que tem disponibilizado
                as
                bolsas de Iniciação Científica para os nossos alunos-pesquisadores, alem de bolsas advindas do CNPq. O
                edital
                do Programa PBIC Mackenzie ocorre uma vez por ano, entre os meses de fevereiro e março, com início das
                atividades em agosto.
                <br>
                <br>
                Outras oportunidades de participar da Iniciação Cientifica são oferecidas por meio de agências externas
                como
                a
                FAPESP.
                <br>
                <br>
                Para maiores informações procure a Coordenadoria de Pesquisa da FAU.
                <br>
                <br>
                Contatos:
                Prédio 10 (Chamberlain), 1° andar - sala 101
                <br>
                <br>
                Coordenadora de Pesquisa
                Prof.ª Dr.ª Eunice Abascal
                Telefone: +55 11 2766-7068
                E-mail: fau.pesquisa@mackenzie.br
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>

        <!-- Prédio 9 -->

        <div class="container-predio" id="link_predio">
          <div class="predio">
            <div class="predio__grid">
              <div class="aulas__title">
                <h1 class="title">Prédio 9 | Arquitetura e Urbanismo e Design</h1>
              </div>
              <br>
              <p class="predio__description">
                &nbsp; O Prédio 9 de Design da Universidade Presbiteriana Mackenzie Higienópolis é um edifício moderno e
                tecnológico localizado no coração de São Paulo, Brasil.
                o Prédio 9 abriga os cursos de "Design" e "Arquitetura e Urbanismo" da
                universidade com grandes espaços abertos e amplas janelas que proporcionam iluminação natural e vistas
                panorâmicas da universidade.
                <br>
                <br>
                &nbsp; O Prédio 9 também conta com projetores interativos, laboratórios de informática, estúdios de
                fotografia
                e vídeo, salas de prototipagem e um laboratório com impressoras 3D, cortadoras a laser e outras
                ferramentas de
                fabricação digital.
                <br>
                <br>
                &nbsp; Além disso, o edifício tem um espaço destinado à exposição de trabalhos dos alunos e professores e
                um
                auditório com capacidade para 150 pessoas, que é utilizado para palestras, debates e eventos acadêmicos.
                O Prédio 9 de Design da Universidade Presbiteriana Mackenzie Higienópolis é um exemplo da excelência
                acadêmica
                e tecnológica da universidade e oferece aos alunos um ambiente inspirador e inovador para aprimorar suas
                habilidades e desenvolver seus projetos.
              </p>
            </div>

            <!-- Carrossel -->

            <div class="carrossel">
              <p class="carrossel__description">{{ carrossel[displayNumber][1] }}</p>
              <div class="carrossel__display">
                <img class="carrossel__display-img" :src="'design/carrossel/' + carrossel[displayNumber][0]">
                <button class="arrow" id="left" @click="arrowCarrrossel('back')">‹</button>
                <button class="arrow" id="right" @click="arrowCarrrossel('next')">›</button>
              </div>
              <div class="carrossel__options">
                <span v-for="(cardsInfo, index) in carrossel" :key="index">
                  <img @click="changeCarrossel(index)" :id="'carrossel_' + index" class="carrossel__options-img"
                    :src="'design/carrossel/' + cardsInfo[0]">
                </span>
              </div>
            </div>
          </div>

          <div class="shadow-predio"></div>

          <img class="background__carrossel" :src="'design/carrossel/' + carrossel[displayNumber][0]">
        </div>

        <!-- Laboratórios -->

        <div class="laboratorios" id="link_laboratorios">
          <div class="aulas__title">
            <h1 class="title">Laboratórios</h1>
          </div>
          <div class="laboratorio__container">

            <div class="laboratorios__card" v-for="lab in labs" @click="popupLab">
              <img class="laboratorios__img" :src="'design/laboratorios/' + lab.img">
              <p class="laboratorio__name">{{ lab.name }}</p>
            </div>
          </div>

        </div>

        <div class="popup" @click="popupLab" v-if="popupValue">
          <div class="overlay__labs">
            <button class="close">✕</button>
            <LaboratorioPopup />
          </div>
        </div>

        <!-- Horários/Períodos -->
        <div id="link_horarios"></div>
        <div class="horarios">
          <div class="horarios_absolute">
            <div class="aulas__title">
              <h1 class="title">Sobre o curso/Horários</h1>
            </div>
            <div class="horarios__cards">
              <div class="card card--bacharelado">
                <div class="horarios__card--text">
                  <p><b>Tipo</b>: Graduação - Bacharelado</p>
                  <p><b>Duração</b>: 8 semestres / 4 anos</p>
                  <p><b>Modalidade</b>: Presencial</p>
                  <p>
                    <b>Períodos</b>: <br>
                    Vespertino: 1° ao 4° semestre <br>
                    Noturno: 5° ao 8° semestre <br>
                    Noturno: 1° ao 8° semestre <br>
                  </p>
                  <p><b>Local</b>: Campus Higienópolis </p>
                </div>
              </div>
              <!-- card 1 -->
              <div class="coordenadores">
                <div class="card">
                  <img class="card__prof" src="design/docentes/nara.jpg">
                  <img class="card__header" src="design/docentes/card_header.jpg">
                  <div class="card__infos">
                    <p class="card__name">Profª. Drª. Nara Silvia Marcondes Martins</p>
                    <p>Coordenadora de Graduação</p>
                    <p class="card__cargo">contato</p>
                    <p class="card__email">fau.design<span>@mackenzie.br</span></p>
                  </div>
                </div>
                <!-- card 2 -->
                <div class="card">
                  <img class="card__prof" src="design/docentes/luciana.png">
                  <img class="card__header" src="design/docentes/card_header.jpg">
                  <div class="card__infos">
                    <p class="card__name">Profª. Drª. Luciana Tombi Brasil</p>
                    <p>Representante PROATO-FAU</p>
                    <p class="card__cargo">contato</p>
                    <p class="card__email">fau.proato<span>@mackenzie.br</span></p>
                  </div>
                </div>
              </div>
            </div>


            <div class="mensalidade">
              <div class="mensalidade__background">
                <span>
                  <div class="aulas__title">
                    <h1 class="title">Mensalidade</h1>
                  </div>
                  <p class="mensalidade__valor">Para calouros ingressantes no primeiro semestre de 2023:
                    <br>
                    <b class="mensalidade__preco">R$ 3.601,00.</b>
                  </p>
                  <div>
                    <p class="mensalidade__gostou">Gostou do Curso? Faça parte da nossa História!</p>
                    <button class="red_btn" style="align-items: center; display: flex; "><a
                        @click="scrollToSection('link_aulas')">Avise-me</a>
                      <arrow style="font-size: 22px; transform: translateY(-2px);">→</arrow>
                    </button>
                  </div>
                </span>
                <img class="mensalidade__img" src="design/mao.jpg" alt="mão escrevendo">
              </div>
            </div>
          </div>
          <div class="background">
            <div class="background__shadow" />
            <img class="background__jpg" src="design/background.jpg">
          </div>
        </div>

        <!-- Docentes -->

        <div class="docentes" id="link_docentes">
          <div class="grafismo">
            <h3 class="title">Corpo docente</h3>
            <hr-color />
            <hr>
          </div>
          <div class="docentes__grid">
            <div class="card" v-for="cardInfo in cardsInfos">
              <img class="card__prof" :src="'design/docentes/' + cardInfo.image">
              <img class="card__header" src="design/docentes/card_header.jpg">
              <div class="card__infos">
                <p class="card__name">{{ cardInfo.name }}</p>
                <p>Professor</p>
                <p class="card__cargo">Contato</p>
                <p class="card__email">{{ cardInfo.email }}<span>@mackenzie.br</span></p>
              </div>
            </div>
          </div>

          <!-- M do background -->


        </div>
      </section>

    </div>
  </div>
</template>

<script>
import LaboratorioPopup from './LaboratorioPopup'

export default {

  name: 'DesignPage',
  components: { LaboratorioPopup },
  data() {
    return {
      activeNameNav: 'first',
      activeName: 'first',
      cardsInfos: [
        {
          name: 'Prof. Dr. Célio Martins da Matta',
          email: 'celio.matta',
          image: 'celio.jpg',
        },
        {
          name: 'Profª. Drª. Nara Silvia Marcondes Martins',
          email: 'narasilvia.martins',
          image: 'nara.jpg',
        },
        {
          name: 'Prof. Dr. Ivo Eduardo Roman Pons',
          email: 'ivoeduardo.pons',
          image: 'ivo.jpg',
        },
        {
          name: 'Profª. Me. Grace Kishimoto',
          email: 'grace.kishimoto',
          image: 'grace.jpg',
        },
        {
          name: 'Profª. Ms. Juliana Bertolini',
          email: 'juliana.bertolini',
          image: 'juliana.jpg',
        },
        {
          name: 'Prof. Ms. Marcos A. Castanha Junior',
          email: 'marcosaurelio.castanha',
          image: 'kito.jpg',
        },
        {
          name: 'Prof. Ms. Luis Alexandre F. Ogasawara',
          email: 'luis.alexandre',
          image: 'luis.jpg',
        },
        {
          name: 'Prof. Ms. Olavo Egydio de Souza Aranha',
          email: 'olavo.aranha',
          image: 'olavo.jpg',
        },
        {
          name: 'Prof. Dr. Renato Vizioli',
          email: 'renato.vizioli',
          image: 'renato.jpeg',
        },
        {
          name: 'Profª. Drª. Teresa Maria Riccetti',
          email: 'teresamaria.riccetti',
          image: 'teresa.jpg',
        },
        {
          name: 'Profª. Ms. Zuleica Schincariol',
          email: 'zuleica.schincariol',
          image: 'zuleica.jpg',
        },
        {
          name: 'Prof. Dr. Charles de Castro Vincent',
          email: 'charles.vincent',
          image: 'charles.jpg',
        },
        {
          name: 'Prof. Me. Carlos Marcelo Campos Teixeira',
          email: 'carlos.teixeira',
          image: 'marcelo.jpg',
        },
        {
          name: 'Prof. Me. Ana Paula Calvo',
          email: 'anapaula.calvo',
          image: 'ana.jpg',
        },
        {
          name: 'Prof. Dr. Mauro Claro',
          email: 'mauro.claro',
          image: 'mauro.jpeg',
        },
      ],
      carrossel: [
        [
          'predio9.jpg',
          'Prédio 9'
        ],
        [
          'frente.jpg',
          'Frente do prédio'
        ],
        [
          'chiqueirinho.jpg',
          'Chiqueirinho | Área de recreação e aprentações'
        ],
        [
          'bosque.jpg',
          'Bosque'
        ],
        [
          'ceramica.jpg',
          'Laboratório de cerâmica'
        ],
        [
          'lazer.jpg',
          'Laboratório de impressão 3d/laser'
        ],
      ],

      labs: [
        {
          name: 'Cerâmica',
          img: 'ceramica_4.jpeg'
        },
        {
          name: 'Informática',
          img: 'informatica.jpg'
        },
        {
          name: 'Lazer',
          img: 'lazer.jpg'
        },
        {
          name: 'Cerâmica',
          img: 'ceramica_01.jpg'
        },
        {
          name: 'Joia e Vidro',
          img: 'vidro.jpg'
        },
        {
          name: 'Impressão',
          img: 'impressao.jpg'
        },
        {
          name: 'Marcenaria',
          img: 'marcenaria.jpg'
        },
        {
          name: 'Cerâmica',
          img: 'ceramica_4.jpeg'
        },
      ],

      matriz: [

        /* Etapa 1 */

        [
          'CIÊNCIA, TECNOLOGIA E SOCIEDADE NA ARQUITETURA E NO DESIGN',
          'ÉTICA E CIDADANIA	',
          'FERRAMENTAS, MATERIAIS E PROCESSOS DO DESIGN I	',
          'FUNDAMENTOS SOCIAIS E POLÍTICOS DO DESIGN I	',
          'FUNDMENTOS MATEMÁTICOS E FÍSICOS DO DESIGN I	',
          'HISTÓRIAS E TEORIAS DO DESIGN I	',
          'PROJETO I',
        ],

        /* Etapa 2 */

        [
          'FERRAMENTAS, MATERIAIS E PROCESSOS DO DESIGN II	',
          'FUNDMENTOS MATEMÁTICOS E FÍSICOS DO DESIGN II	',
          'HISTÓRIAS E TEORIAS DO DESIGN II	',
          'INTRODUÇÃO À COSMOVISÃO REFORMADA	',
          'METODOLOGIA CIENTÍFICA	',
          'PROJETO II	',
          'FUNDAMENTOS SOCIAIS E POLÍTICOS DO DESIGN II	',
        ],

        /* Etapa 3 */

        [
          'FERRAMENTAS, MATERIAIS E PROCESSOS DO DESIGN III	',
          'FUNDAMENTOS SOCIAIS E POLÍTICOS DO DESIGN III	',
          'FUNDMENTOS MATEMÁTICOS E FÍSICOS DO DESIGN III	',
          'HISTÓRIAS E TEORIAS DO DESIGN III	',
          'PRÁTICA DE PROGRAMAÇÃO I	',
          'PROJETO III	',
          'OFICINA OPTATIVA CERÂMICA	',
          'OFICINA OPTATIVA SERIGRAFIA	',
          'OFICINA OPTATIVA- SKETCH	',
        ],

        /* etapa 4 */

        [
          'PRÁTICA DE PROGRAMAÇÃO 2',
          'FERRAMENTAS, MATERIAIS E PROCESSOS DO DESIGN IV	',
          'FUNDAMENTOS MATEMÁTICOS E FÍSICOS DO DESIGN IV	',
          'PROJETO IV	',
          'Projeto Social Impact Design	',
          'FUNDAMENTOS SOCIAIS E POLÍTICOS DO DESIGN IV	',
          'HISTÓRIAS E TEORIAS DO DESIGN IV	',
          'OFICINA OPTATIVA MARCA PESSOAL	',
          'OFICINA OPTATIVA TABLEWARE	',
        ],

        /* etapa 5 */

        [
          'DESIGN Princípios de Empreendedorismo	',
          'PROJETO V	',
          'PROJETOS PROFISSIONALIZANTES EDITORIAL	',
          'PROJETOS PROFISSIONALIZANTES EQ e COMP CONSTRUÇÃO	',
          'PROJETOS PROFISSIONALIZANTES BRANDING	',
          'OFICINA OPTATIVA TIPOGRAFIA	',
          'OFICINA OPTATIVA MADEIRA	',
        ],

        /* etapa 6 */

        [
          'DESIGN PROJETOS EMPREENDEDORES	',
          'PROJETO PROFISSIONALIZANTE AUDIOVISUAL	',
          'PROJETO VI	',
          'PROJETOS PROFISSIONALIZANTES_Joia	',
        ],

        /* etapa 7 */

        [
          'PROJETO VII	',
          'TCC I	',
          'ESTÁGIO',
        ],

        /* etapa 8 */

        [
          'OFICINA OPTATIVA - Marca Pessoal	',
          'OFICINA OPTATIVA- Portfólio	',
          'TCC II	',
          'ESTÁGIO',
        ],
      ],

      displayNumber: 0,
      popupValue: false,
    }
  },

  mounted() {
    this.ativarImg()
    this.scrolltoTop()
  },
  methods: {

    //Ao entrar na página, faz ela rola para cima
    scrolltoTop() {
      this.$nextTick(() => {
        window.scrollTo(0, 0);
      });
    },

    changeCarrossel(index) {
      this.displayNumber = index
      this.ativarImg()

    },

    ativarImg() {
      if (document.querySelector('[carrossel_ativo]') == null) {
        document.getElementById(`carrossel_${this.displayNumber}`).setAttribute('carrossel_ativo', '')
      } else {
        document.querySelector('[carrossel_ativo]').removeAttribute('carrossel_ativo')
        document.getElementById(`carrossel_${this.displayNumber}`).setAttribute('carrossel_ativo', '')
      }
    },

    arrowCarrrossel(direction) {
      if (direction == 'back') {
        if (this.displayNumber > 0) {
          this.displayNumber -= 1
        }
        else {
          this.displayNumber = this.carrossel.length - 1
        }
      }

      if (direction == 'next') {
        if (this.displayNumber < this.carrossel.length - 1) {
          this.displayNumber += 1
        }
        else {
          this.displayNumber = 0
        }
      }
      this.ativarImg()
    },

    //Ativa o popup dos laboratórios
    popupLab(event) {

      const elementoClicado = event.target.classList[0]

      if (event.currentTarget.classList[0] == 'laboratorios__card' || elementoClicado == 'close' || elementoClicado == 'overlay__labs') {

        if (this.popupValue == false) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.removeAttribute('style')
        }
        this.popupValue = !this.popupValue
      }
    },

    //Leva o usuário até o link clicado
    scrollToSection(ancora) {
      setTimeout(() => {
        const section = document.getElementById(ancora);
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth',
        })
      }, 50);
    },
  },
}
</script>

<style scoped>
.aulas__title {
  border-color: #CC141D;
}

.grafismo {
  z-index: 2;
  margin-bottom: 32px;
}

#link_objetivo,
#link_matriz,
#link_premiacoes,
#link_predio,
#link_horarios,
#link_laboratorios,
#link_docentes {
  padding-top: 10vw;
  position: relative;
}

#link_matriz,
#link_objetivo,
#link_laboratorios {
  z-index: 3;
}

section {

  width: calc(100% - 6vw);
}

@media only screen and (min-width:1981px) {

  section {

    width: 80%;
    min-width: 1860px;
  }

}


@keyframes opacitySuave {
  from {
    opacity: 0;
    transform: translatey(-30px);
  }

  to {
    opacity: 1;
    transform: translatey(0);
  }
}

.popup {
  animation-name: opacitySuave;
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 13;
  opacity: 1;
  transition: .2s;

}

.overlay__labs {
  height: 100vh;
  overflow-y: overlay;
}

.close {
  position: fixed;
  right: 30px;
  top: 30px;
  background: none;
  font-size: 1.8rem;
  color: white;
  border: none;
  cursor: pointer;
  z-index: 1;
}

header {
  cursor: default;
  border-bottom: 2px solid var(--red-mack);
  height: calc(100vh - 148px);
}

.banner {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.design {
  position: absolute;
  z-index: 2;
  text-align: center;
  font-weight: 100;
  margin-bottom: 18px;
}

.faculdade {
  position: absolute;
  bottom: 50px;
  font-weight: 400;
  z-index: 2;
  font-size: 1.13rem;
  text-align: center;
}

/* O que temos como bjetivo */

#link_objetivo {
  width: 80%;
  margin: auto;
}

.objetivo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  min-height: 400px;

}

.objetivo__text {
  font-size: 1rem;
}

/* Prédio */

.predio {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 40vw;
  gap: 30px;
  width: 100%;
  z-index: 3;
}

.predio span {
  z-index: 2;
  position: relative;
}

.predio__description {
  font-weight: 400;
  font-size: 1rem;
  margin-bottom: 20px;
  overflow-y: scroll;
  padding-right: 20px;
}


/* Carrossel */
.carrossel {
  display: flex;
  flex-direction: column;
  z-index: 3;
  position: relative;
  gap: 12px;
}

.carrossel__description {
  position: absolute;
  margin-left: 1vw;
  margin-top: 1vw;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 55px;
  padding: 4px 16px;
  z-index: 3;
}

.carrossel__display {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  height: 24vw;
  min-height: 500px;
}

.container-predio {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: auto;
}


.background__carrossel {
  position: absolute;
  width: 100vw;
  height: 100%;
  opacity: 0.2;
  object-fit: cover;

}

.shadow-predio {
  position: absolute;
  background-image: linear-gradient(0deg, black, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), black);
  width: 100vw;
  height: 100%;
  z-index: 2;
}



.carrossel__display button {
  border: none;
}

.carrossel__display-img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
}

.carrossel__options {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
  padding-bottom: 10px;
  overflow: auto;
}

.carrossel__options-img {
  border-radius: 6px;
  width: 100%;
  height: 5vw;
  min-height: 80px;
  cursor: pointer;
  object-fit: cover;
  opacity: 0.5;
}

.carrossel__options-img:hover {
  opacity: 1;
}

.arrow {
  font-size: 50px;
  font-weight: 400;
  position: absolute;
  padding-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: 46px;
  width: 46px;
  transition: .2s;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
}

.arrow:hover {
  background: rgba(255, 255, 255, 0.1);
  transition: .2s;
}

[carrossel_ativo] {
  opacity: 1 !important;
}

#right {
  right: 20px;
}

#left {
  left: 20px;
}

/* matriz */

.matriz {
  padding-top: 160px;
  width: 70%;
  margin: auto;
}

.matriz__etapa {
  font-size: 1rem;
}

.container__collapse {
  margin: auto;
}

/* Laboratórios */

.laboratorios {
  width: 70%;
  margin: auto;

}

.laboratorio__container {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  flex-wrap: wrap;
  z-index: 1;
}

.laboratorios__card {
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 1.13rem;
  border-radius: 100px;
  width: 100%;
  cursor: pointer;
  position: relative;
  height: 7.4vw;
  min-height: 120px;

}


.laboratorios__img {
  position: absolute;
  border-radius: 100px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: .3s;
  border: 15px solid rgba(255, 255, 255, 0.06);
  filter: saturate(0) brightness(50%);
}

.laboratorios__card:hover .laboratorios__img {
  filter: saturate(100%) brightness(100%);
  transform: scale(1.02);
}

.laboratorio__name {
  position: absolute;
  margin: auto;
  white-space: nowrap;
  text-align: center;
  width: 100%;
}

/* Horários/Períodos */


.horarios {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
}

.background {
  top: -200px;
  width: 100vw;
  height: 100vh;
  min-height: 120vw;
  margin: auto;
  position: absolute;
}

.background__shadow {
  position: absolute;
  background-image: linear-gradient(0deg, black, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), black);
  width: 100%;
  height: 100%;
}

.background__jpg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.horarios_absolute {
  z-index: 2;
  gap: 20px;
  display: flex;
  flex-direction: column;
  width: 70%;
}

.coordenadores {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.horarios__cards {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
}

.horarios__card--text {
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 16px;
}


/* Premiações. */

.premiacao {
  position: relative;
  z-index: 2;
  width: 100%;
}

.premiacoes__container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: max-content;
  width: 70%;
  margin: auto;
}

.premiacao__estudante {
  position: absolute;
  top: -28vw;
  width: 100vw;
  min-height: 70vh;
  filter: blur(10px);
  object-fit: cover;
}

.premiacao__grid {
  position: relative;
  padding: 15px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 13px;
  z-index: 1;

}

.premiacao__grid span {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  width: 54%;
  gap: 80px;
  margin: auto;
}

.premiacao__background {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  border-radius: 8px;
  background: black;
  overflow: hidden;
}

.premiacao__img {

  height: 280px;
}

.premiacao__1 {
  width: clamp(200px, 11vw, 220px);
}

.premiacao__2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  text-align: center;
  font-weight: 400;
  font-size: 1rem;
}

.premiacao__2 img {
  width: 14vw;
  max-width: 270px;
  min-width: 170px;
}

.red_btn {
  display: flex;
  align-items: center;
  gap: 12px;
}

.red_btn span {
  transform: translate(22px, -2px);
}



/* Docentes */
.docentes {
  position: relative;
  margin-bottom: 240px;
  width: 90%;
  margin: auto;
  margin-bottom: 200px;

}

.docentes__grid {
  position: relative;
  display: grid;
  gap: 14px;
  width: 100%;
  z-index: 1;
  margin: auto;
}


.card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 13px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.06);
  color: white;
  font-weight: 400;
  cursor: default;
  backdrop-filter: blur(6px);
  box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.1);
}



.card__infos {
  border-radius: 0 0 8px 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: black;
  padding: 16px;
  width: 100%;
  height: 100%;
  padding-top: 66px;
}

.card__name {
  font-weight: 600;
  min-height: 38px;
  line-height: 1.2rem;
  color: #828282;
}

.card__prof {
  width: 100px;
  top: 50px;
  left: 40px;
  position: absolute;
  outline: 6px solid black;
  border-radius: 100%;
}

.card__cargo {
  color: var(--red-mack);
  text-decoration: underline;
  font-weight: 600;
}

.card__cargo:hover {
  color: #EB0029;
  cursor: pointer;
}

.card__email {
  display: flex;
  flex-wrap: wrap;
  color: #828282;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  overflow: hidden;
  transition: .1s;
  word-wrap: break-word;
}

.card__email:hover {
  color: white;
  transition: .1s;
}

.card__header {
  border-radius: 8px 8px 0 0;
  width: 100%;
  height: 90px;
  object-fit: cover;
}

@media only screen and (min-width: 1980px) {
  .docentes__grid {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

}

@media only screen and (max-width: 1980px) {
  .docentes__grid {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .docentes {
    width: 100%;
  }
}

@media only screen and (max-width: 1700px) {

  /* Objetivos */
  #link_objetivo {
    width: 100%;
  }

  .container-predio {
    width: 100%;
  }

  /*  */

  .docentes__grid {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .laboratorios {
    width: 100%;
  }
}

@media only screen and (max-width: 1700px) {
  .horarios_absolute {
    width: 100%;
  }

  .matriz,
  .premiacoes__container {
    width: 100%;
  }
}

@media only screen and (max-width: 1000px) {
  .docentes__grid {
    grid-template-columns: 1fr 1fr;
  }

  .el-tabs__content {
    padding: 0;
  }

  .predio {
    grid-template-columns: 1fr;
  }

  .laboratorios {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .container__collapse {
    max-width: 100%;

  }

  .predio__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .grid {
    overflow: auto;
    height: 600px;
    grid-template-columns: 1fr 1fr;
  }

  .horarios__cards {
    grid-template-columns: 1fr;
  }

  .laboratorio__name {
    position: unset;
    z-index: 2;
    text-align: center;
    width: 100%;
  }

  .matriz {
    padding: 160px 0 0 0;
  }

  .container-predio,
  .docentes {
    margin-bottom: 75px;
  }

  .objetivo {
    grid-template-columns: 1fr;
    height: max-content;
  }

  .laboratorio__container {
    grid-template-columns: 1fr 1fr 1fr;
  }



  #link_objetivo,
  #link_matriz,
  #link_predio,
  #link_premiacoes,
  #link_laboratorios,
  #link_horarios,
  #link_docentes {
    padding-top: 80px;
  }


}

@media only screen and (max-width: 750px) {

  /* docentes */
  .card {
    align-items: center;
  }

  .card--bacharelado {
    max-width: max-content;
    margin: auto;
  }

  .card__prof {
    width: 60px;
    left: auto;
    top: 16px;
    outline: 4px solid black;
  }

  .card__infos {
    gap: 0;
    padding: 12px;
    padding-top: 26px;
    padding-bottom: 20px;
  }

  .card {
    padding: 2px;
  }

  .card__email {
    line-height: 1rem;
  }

  .card__header {
    height: 100%;
  }

  .coordenadores,
  .docentes__grid {
    gap: 4px;
  }


  /*  */
  .premiacao__img {
    display: none;
  }

  .premiacao__1 {
    width: 120px;
  }

  .laboratorios {
    grid-template-columns: 1fr 1fr;
    padding: 75px 0;
  }

  .premiacao {
    gap: 40px;
  }

  .premiacao__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .laboratorios__img {
    width: 100%;
  }

  .carrossel__display {
    min-height: 280px;
  }

  .carrossel__options-img {
    min-height: 50px;
  }

  .premiacao__grid span {

    width: 80%;
    width: max-content;
  }


}

@media only screen and (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .carrossel__options {
    gap: 3px;
  }

  .carrossel__display-img {
    margin-bottom: 8px;
  }

  .laboratorios__img {
    border-width: 10px;
  }

  .laboratorio__container {
    gap: 3px;
  }

  .laboratorios__card {
    min-height: 100px;
  }

  section {
    width: calc(100% - 40px);

  }

  .card--bacharelado,
  .horarios__card--text {
    max-width: 100%;
    width: 100%;
  }

  /* Predio 9 */
  .predio__grid {
    gap: 0px;
  }



  .some {
    display: none;
  }

  .premiacao__grid span {
    gap: 50px;
    width: 80%;
    width: max-content;
    padding: 30px 10px;
  }

  .premiacao__grid {
    padding: 2px;
  }

}

@media only screen and (max-width: 400px) {

  .container-predio {
    margin-bottom: 0;
  }

  .laboratorios {
    grid-template-columns: 1fr 1fr;
    padding: 0;
  }

  .objetivo,
  .predio__description {
    margin-top: 14px;
  }

  .background {
    height: 300vh;
  }

  .laboratorio__container {
    gap: 16px;
  }

  .laboratorios__img {
    border: 0;
  }

  .premiacao__1 {
    width: 80px;
  }

  .premiacao__2 img {
    min-width: 112px;
  }

  .laboratorios__card {
    min-height: 70px;
  }

  /* Predio 9 */

  .predio__description {
    overflow: visible;
  }

  .premiacao__estudante {
    width: 100%;
  }

  .premiacoes__container {
    gap: 0;
  }

  .grafismo {
    margin-bottom: 22px;
  }
}

/* Mobile version */
</style>



<style>
/* Primary Nav */

.el-tabs__item {
  font-size: 1rem;
  transition: .2s;
  font-weight: 400;
}

.el-tabs__item:hover {
  color: #CC141D;
  transition: .2s;
}

.el-tabs__item.is-active {
  color: #CC141D;
  font-weight: 600;
}

.el-tabs__active-bar {
  background: #CC141D;
}

.el-tabs__nav-wrap::after {
  background: #333333;
}

.el-tabs__item {
  color: #BDBDBD;
}

/* Second Nav */

.el-tabs--card>.el-tabs__header .el-tabs__item.is-active,
.el-tabs--card>.el-tabs__header .el-tabs__nav,
.el-tabs--card>.el-tabs__header,
.el-tabs--card>.el-tabs__header .el-tabs__item {
  border: none;
}

.el-tabs--card>.el-tabs__header,
.navSecond .el-tabs__item.is-top.is-active {
  border-bottom: 2px solid #333;
}

.navSecond .el-tabs__item.is-top.is-active {
  background: #1B1B1B;
}

.navSecond .el-tab-pane {
  height: 240px;
  overflow: overlay;
  padding-right: 20px;
}

.el-tab-pane {
  font-weight: 400;
}

.el-tabs__content {
  padding: 30px 30px 0 30px;
}

@media only screen and (max-width:400px) {
  .el-tabs__content {
    padding: 0px;
  }


}
</style>