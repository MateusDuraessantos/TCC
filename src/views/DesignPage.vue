<template>
  <div id="link_design">
    <NavPages />
    <header>
      <p class="global__banner_font design">Design</p>
      <p class="faculdade">
        Faculdade de Arquitetura e Urbanismo | Campus Higienópolis
        <br>
        Mackenzie
      </p>
      <img class="banner" src="design/banner.jpg" alt="banner">
      <div class="shadow" />
    </header>

    <div class="body">

      <!-- Objetivos -->

      <div class="objetivo" id="link_objetivo">
        <span>
          <div class="container_objetivo">
            <h1>O que temos como objetivo?</h1>
            <div>
              <hr-color />
              <hr>
            </div>
          </div>

          <p class="objetivo__text">
            O Curso de Bacharelado em Design da Faculdade de Arquitetura e Urbanismo da Universidade Presbiteriana
            Mackenzie
            tem como objetivo principal formar profissionais com competências e habilidades múltiplas que privilegiam a
            atuação ampla generalista desta área de conhecimento, diante das complexas e rápidas transformações da
            sociedade,
            especialmente dos processos produtivos e culturais ligados à sociedade contemporânea.
            <br>
            <br>
            Criado no início da década de 1970, o curso de bacharelado em Desenho Industrial, nomenclatura usual na
            ocasião,
            adquiriu maturidade ao longo do seu percurso, atendeu áreas e necessidades específicas nas décadas de 1970 e
            1980
            com as habilitações do projeto de produto e programação visual, duas importantes sub-áreas de
            conhecimento. Em
            2006, o Curso, já integrado à FAU-Mackenzie, passa a denominar-se "Design", privilegiando assim a abordagem
            projetual, marca característica da Escola.
            <br>
            <br>
            O atual Projeto Pedagógico, alinha-se às tendências contemporâneas nacionais e internacionais, que tem como
            foco a
            atuação do designer de forma ampla e flexível. Sendo o Design uma atividade criativa e voltada à busca de
            melhorias na forma, na função e na simbologia de todo o ambiente construído, o curso de Design da
            FAU-Mackenzie
            prioriza saberes multidisciplinares e transdisciplinares, integrando teoria e prática. Busca-se a capacitação
            do
            profissional para a flexibilidade de ações e para a autonomia na aquisição de conhecimentos, a fim de que
            este
            protagonize contribuições nos diversos campos do design, seja no setor produtivo ou de serviços, na esfera
            pública ou privada, nas associações sem fins lucrativos, em atividades de pesquisa acadêmica e como agente
            empreendedor.
          </p>
        </span>
        <span class="premio">
          <br>
          <br>
          <h2>Premiações</h2>
          <div class="premio__grid">
            <img class="premio__1" src="design/premio1.png">
            <div class="premio__2">
              <img src="design/star.png">
              Guia do estudante
            </div>
          </div>
        </span>
      </div>



      <!-- Matriz -->

      <div class="matriz" id="link_matriz">
        <h1>Um pouquinho do que você vai aprender </h1>
        <el-tabs v-model="activeNameNav" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane label="Matriz Curricular" name="first">

            <div class="container__collapse">

              <el-collapse accordion style="margin: 60px 0">
                <el-collapse-item v-for="(grade, index) in matriz" :key="index">
                  <template #title>
                    <p class="matriz__etapa" style="color: #BDBDBD"><b>{{ index + 1 }}° Etapa</b> - Disciplinas</p>
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

          <div>
            <el-tab-pane label="Atividades Acadêmicas" class="navSecond" name="second">
              <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane label="TCC" name="first">
                  <div>
                    O Trabalho de Conclusão de Curso - TCC- consiste na realização de um trabalho acadêmico, no qual o
                    aluno desenvolve uma ideia completa, de sua escolha, fundamenta-a teórica e projetualmente e expõe-na
                    na forma de um objeto ou serviço (ou de um sistema objeto/serviço).
                    <br>
                    <br>
                    O principal objetivo é permitir que o aluno consolide as capacidades profissionais desenvolvidas ao
                    longo do curso e que podem ser resumidas na capacidade de analisar e propor soluções de projeto para
                    realidades colocadas no âmbito da cultura material e suas extensões virtuais através da construção de
                    sínteses dos conhecimentos pertinentes ao campo profissional.
                  </div>
                </el-tab-pane>
                <el-tab-pane label="Estágios" name="second">
                  O programa de estágio curricular supervisionado (que se submete ao Regulamento Geral de Estágios da UPM
                  e à Lei Federal que rege a questão) é obrigatório aos alunos do Curso, que devem cumprir entre o início
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
                  atividade visa o aprimoramento profissional na sua área de estudo, possibilitando o conhecimento prático
                  das matérias teóricas passadas em sala de aula.
                  <br>
                  <br>
                  O estágio de estudante é obrigatório, não configurando relação de emprego, mas com alguns direitos como
                  o recebimento de bolsa ou remuneração, se estipulado, cumprimento de carga horária prefixada e
                  realização de seguro obrigatório contra acidentes, e após 1 ano de estágio, 30 dias de férias
                  remuneradas. A faculdade conta com uma Coordenação de Estágio que oferece suporte aos alunos antes e
                  durante o estágio.
                  <br>
                  <br>
                  O aluno poderá realizar estágio não obrigatório, com os mesmos procedimentos do estágio obrigatório, mas
                  sem contar como realização para o cumprimento das 180 horas obrigatórias.
                  <br>
                  <br>
                  O programa conta também com o Relatório de Acompanhamento das Atividades do Estagiário (RAE), fonte
                  privilegiada para verificação do grau de aderência dos conhecimentos transmitidos ao aluno e da relação
                  desses conhecimentos com a prática profissional, tanto do ponto de vista da concedente quanto do
                  estagiário, retroalimentando a reflexão sobre a eficácia do ensino e da aprendizagem, a partir do olhar
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
                  Estes documentos serão apresentados ao Coordenador de Estágios e deverão permanecer na Coordenadoria de
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
                  profissional designer não se restringe exclusivamente aos conteúdos acadêmicos desenvolvidos em sala de
                  aula. Isto significa que a formação do designer ultrapassa os muros da academia promovendo a prática de
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
                  esses, tanto a vivência profissional quanto a articulação desta com os conhecimentos teóricos e práticos
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
          </div>
          <el-tab-pane label="Projeto Pedagógico" name="third">
            O aluno de graduação tem oportunidade de participar da Pesquisa no âmbito do Programa Institucional de
            Iniciação Científica (PIBIC ) ou de forma voluntaria. A UPM oferece o PIBIC Mackenzie que se destina a
            complementar o ensino de graduação, permitindo aos estudantes a oportunidade de desvendarem como se processa a
            geração do saber e como o conhecimento científico é adquirido. Esses objetivos são alcançados pela
            participação do aluno nas atividades práticas e teóricas no ambiente de pesquisa, sob a orientação de um
            professor-pesquisador. A efetivação e consolidação da boa pesquisa em nossa Universidade é uma questão
            prioritária de nossa Reitoria, e é apoiada pelo Instituto Presbiteriano Mackenzie que tem disponibilizado as
            bolsas de Iniciação Científica para os nossos alunos-pesquisadores, alem de bolsas advindas do CNPq. O edital
            do Programa PBIC Mackenzie ocorre uma vez por ano, entre os meses de fevereiro e março, com início das
            atividades em agosto.
            <br>
            <br>
            Outras oportunidades de participar da Iniciação Cientifica são oferecidas por meio de agências externas como a
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

          </el-tab-pane>
        </el-tabs>
      </div>

      <!-- Prédio 9 -->

      <div class="container-predio" id="link_predio">
        <div class="shadow-predio"></div>
        <img class="background__carrossel" :src="'design/carrossel/' + carrossel[displayNumber]">

        <div class="predio">
          <div class="predio__grid">
            <span>
              <h1>Prédio 9</h1>
              <br>
              <p class="predio__description">
                O Prédio 9 de Design da Universidade Presbiteriana Mackenzie Higienópolis é um edifício moderno e
                tecnológico
                localizado no coração de São Paulo, Brasil.
                o Prédio 9 abriga os cursos de Arquitetura e Urbanismo, Design de Interiores e Design de Produto da
                universidade com grandes espaços abertos e amplas janelas que proporcionam iluminação natural e vistas
                panorâmicas da
                universidade.
                <br>
                O Prédio 9 também conta projetores interativos, laboratórios de informática, estúdios de fotografia e
                vídeo,
                salas de prototipagem e um laboratório com impressoras 3D, cortadoras a laser e outras ferramentas de
                fabricação digital.
                <br>
                Além disso, o edifício tem um espaço destinado à exposição de trabalhos dos alunos e professores e um
                auditório com capacidade para 150 pessoas, que é utilizado para palestras, debates e eventos acadêmicos.
                O Prédio 9 de Design da Universidade Presbiteriana Mackenzie Higienópolis é um exemplo da excelência
                acadêmica
                e tecnológica da universidade e oferece aos alunos um ambiente inspirador e inovador para aprimorar suas
                habilidades e desenvolver seus projetos.
              </p>
            </span>
            <span>
              <br>
              <h1>Corpo docente</h1>
              <div class="predio__description">Para oferecer tudo isso, contamos com uma equipe de professor altamente
                capacitados, conheça um pouco da nossa equipe.</div>
              <button class="blue_btn">Ver docentes</button>
            </span>
          </div>
          <div class="carrossel">
            <p class="carrossel__description">{{ carrossel[displayNumber].split('.jpg')[0] }}</p>
            <div class="carrossel__display">
              <img class="carrossel__display-img" :src="'design/carrossel/' + carrossel[displayNumber]">
              <button class="arrow" id="left" @click="arrowCarrrossel('back')">‹</button>
              <button class="arrow" id="right" @click="arrowCarrrossel('next')">›</button>
            </div>
            <div class="carrossel__options">
              <span v-for="(cardsInfo, index) in carrossel" :key="index">

                <img @click="changeCarrossel(index)" :id="'carrossel_' + index" class="carrossel__options-img"
                  :src="'design/carrossel/' + cardsInfo">
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Laboratórios -->

      <h1>Laboratórios</h1>
      <div class="laboratorios">
        <div class="laboratorios__card" v-for="lab in labs">
          <img class="laboratorios__img" :src="'design/laboratorios/' + lab.img">
          <p class="laboratorio__name">{{ lab.name }}</p>
        </div>
      </div>
      <br v-for="coisas in 3">

      <!-- Horários/Períodos -->

      <h1 id="link_horarios">Horários/Períodos</h1>
      <br>
      <br>
      <div class="horarios">
        <div class="horarios_absolute">
          <div class="horarios__cards">
            <div class="card horarios__card">
              <p><b>Tipo</b>: Graduação - Bacharelado</p>
              <p><b>Duração</b>: 8 semestres / 4 anos</p>
              <p><b>Modalidade</b>: Presencial</p>
              <p>
                <b>Períodos</b>: <br>
                Vespertino: 1° ao 4° semestre <br>
                Noturno: 5° ao 8° semestre <br>
                Noturno: 1° ao 8° semestre <br>
              </p>
              <p><b>Local</b>: Campus Higienópolis <br></p>
            </div>

            <!-- card 1 -->

            <div class="card">
              <img class="card__prof" src="design/docentes/nara.jpg">
              <img class="card__header" src="design/docentes/card_header.jpg">
              <div class="card__infos">
                <p class="card__name">Profª. Drª. Nara Silvia Marcondes Martins</p>
                <p>Coordenadora de Graduação</p>
                <p class="card__cargo">contato</p>
                <p class="card__email">fau.design@mackenzie.br</p>
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
                <p class="card__email">fau.proato@mackenzie.br</p>
              </div>
            </div>

          </div>
          <div class="horario__avise">
            <h3>Gostou do Curso? Faça parte da nossa História!</h3>
            <button class="red_btn">Avise-me <span>&rarr;</span></button>
          </div>
        </div>

        <div class="background">
          <div class="background__shadow" />
          <img class="background__jpg" src="design/background.jpg">
        </div>
      </div>

      <!-- Docentes -->

      <div class="cards-container" id="docentes">
        <div class="container_objetivo">
          <h3 class="objetivo__title">Corpo docente</h3>
          <div>
            <hr-color />
            <hr>
          </div>
        </div>
        <img class="grid__background_M" src="design/blur.png">
        <div class="grid">
          <div class="card" v-for="cardInfo in cardsInfos">
            <img class="card__prof" :src="'design/docentes/' + cardInfo.image">
            <img class="card__header" src="design/docentes/card_header.jpg">
            <div class="card__infos">
              <p class="card__name">{{ cardInfo.name }}</p>
              <p>Professor</p>
              <p class="card__cargo">Contato</p>
              <p class="card__email">{{ cardInfo.email }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterPage />
  </div>
</template>

<script>
import NavPages from '../components/NavPages.vue'
import FooterPage from '../components/FooterPage.vue'

export default {
  name: 'DesignPage',
  components: { FooterPage, NavPages },
  data() {
    return {
      activeNameNav: 'first',
      activeName: 'first',
      cardsInfos: [
        {
          name: 'Prof. Dr. Célio Martins da Matta',
          email: 'celio.matta@mackenzie.br',
          image: 'celio.jpg',
        },
        {
          name: 'Profª. Drª. Nara Silvia Marcondes Martins',
          email: 'narasilvia.martins@mackenzie.br',
          image: 'nara.jpg',
        },
        {
          name: 'Prof. Dr. Ivo Eduardo Roman Pons',
          email: 'ivoeduardo.pons@mackenzie.br',
          image: 'ivo.jpg',
        },
        {
          name: 'Profª. Me. Grace Kishimoto',
          email: 'grace.kishimoto@mackenzie.br',
          image: 'grace.jpg',
        },
        {
          name: 'Profª. Ms. Juliana Bertolini',
          email: 'juliana.bertolini@mackenzie.br',
          image: 'juliana.jpg',
        },
        {
          name: 'Prof. Ms. Marcos A. Castanha Junior',
          email: 'marcosaurelio.castanha@mackenzie.br',
          image: 'kito.jpg',
        },
        {
          name: 'Prof. Ms. Luis Alexandre F. Ogasawara',
          email: 'luis.alexandre@mackenzie.br',
          image: 'luis.jpg',
        },
        {
          name: 'Prof. Ms. Olavo Egydio de Souza Aranha',
          email: 'olavo.aranha@mackenzie.br',
          image: 'olavo.jpg',
        },
        {
          name: 'Prof. Dr. Renato Vizioli',
          email: 'renato.vizioli@mackenzie.br',
          image: 'renato.jpeg',
        },
        {
          name: 'Profª. Drª. Teresa Maria Riccetti',
          email: 'teresamaria.riccetti@mackenzie.br',
          image: 'teresa.jpg',
        },
        {
          name: 'Profª. Ms. Zuleica Schincariol',
          email: 'zuleica.schincariol@mackenzie.br',
          image: 'zuleica.jpg',
        },
        {
          name: 'Prof. Dr. Charles de Castro Vincent',
          email: 'charles.vincent@mackenzie.br',
          image: 'charles.jpg',
        },
        {
          name: 'Prof. Me. Carlos Marcelo Campos Teixeira',
          email: 'carlos.teixeira@mackenzie.br',
          image: 'marcelo.jpg',
        },
        {
          name: 'Prof. Me. Ana Paula Calvo',
          email: 'anapaula.calvo@mackenzie.br',
          image: 'ana.jpg',
        },
        {
          name: 'Prof. Dr. Mauro Claro',
          email: 'mauro.claro@mackenzie.br',
          image: 'mauro.jpeg',
        },
      ],
      carrossel: [
        'predio9.jpg',
        'frente.jpg',
        'chiqueirinho.jpg',
        'bosque.jpg',
        'ceramica.jpg',
        'lazer.jpg',
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
    }
  },

  mounted() {
    this.ativarImg()
  },
  methods: {
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
          console.log(this.displayNumber)
        }
      }
      this.ativarImg()
    },
  }
}

</script>


<style scoped>
header {
  cursor: default;
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
}

.faculdade {
  position: absolute;
  bottom: 50px;
  font-weight: 400;
  line-height: 50px;
  z-index: 2;
  font-size: 18px;
  text-align: center;
}

.shadow {
  position: absolute;
  z-index: 1;
  background-image: linear-gradient(45deg, rgb(14, 14, 14), rgba(0, 0, 0, 0.2), rgb(14, 14, 14));
  width: 100%;
  height: 100%;
}

/* objetivo */
.objetivo {
  display: grid;
  grid-template-columns: 2.2fr 1fr;

}

.container_objetivo {
  margin-bottom: 30px;
  position: relative;
  z-index: 2;
}

.objetivo__title {
  font-size: 30px;
  padding: 68px 0 10px 0;
}

.objetivo__text {
  height: 300px;
  overflow: overlay;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  padding-right: 30px;
}

hr-color {
  display: flex;
  position: absolute;
  width: 100px;
  background: #CC141D;
  height: 3px;
}

hr {
  border: none;
  border-style: solid;
  border-color: #333333;
  border-width: 3px 0 0 0;
}

/* Prédio */

.predio {
  display: grid;
  grid-template-columns: 1fr 620px;
  gap: 30px;
  width: 100%;
  margin-top: 120px;
}

.predio span {
  z-index: 2;
  position: relative;
}

.predio__description {
  font-weight: 400;
  line-height: 28px;
  font-size: 16px;
  margin-bottom: 20px;
  max-height: 230px;
  overflow-y: scroll;
  padding-right: 20px;
}

.carrossel {
  display: flex;
  flex-direction: column;
  z-index: 3;
  position: relative;
}

.carrossel__description {
  margin-bottom: 22px;
  text-shadow: 3px 2px 6px black;
}

.container-predio {
  margin-bottom: 180px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
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
  background-image: linear-gradient(0deg, rgb(14, 14, 14), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgb(14, 14, 14));
  width: 100vw;
  height: 100%;
  z-index: 2;
}



.carrossel__display {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  height: 320px;
}

.carrossel__display button {
  border: none;
}

.carrossel__display-img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
  object-fit: cover;
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
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  height: 40px;
  width: 40px;
  transition: .2s;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.9);
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

.carrossel__options {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  flex-wrap: wrap;
  width: 100%;
  gap: 6px;
  padding-bottom: 10px;
  overflow: auto;
}

.carrossel__options-img {
  border-radius: 6px;
  width: 100%;
  height: 60px;
  cursor: pointer;
  object-fit: cover;
  opacity: 0.5;
}

.carrossel__options-img:hover {
  opacity: 1;
}

/* matriz */

.matriz {
  padding: 160px 0 60px 0;
  min-height: 700px;
}

.matriz__etapa {
  font-size: 16px;
}

.container__collapse {
  max-width: 900px;
  margin: auto;
}

/* Laboratórios */

.laboratorios {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  flex-wrap: wrap;
  padding: 100px 0;
  width: 100%;
}

.laboratorios__card {
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 18px;
  border-radius: 100px;
  width: 100%;
  cursor: pointer;
  position: relative;
  height: 100px;
  border: 4px solid #cc141d69;
}

.laboratorios__card:hover .laboratorio__name {
  right: 130px;
  transition: .4s;
}

.laboratorios__img {
  position: absolute;
  border-radius: 100px;
  width: 96px;
  height: 100%;
  object-fit: cover;
  transition: .4s;
  padding: 6px;
}

.laboratorios__card:hover .laboratorios__img {
  width: 100%;
  transition: .4s;
  opacity: 0.4;
}

.laboratorio__name {
  position: absolute;
  right: 40px;
  transition: .4s;
  text-align: start;
  width: 100px;
  text-shadow: 5px 5px 15px rgba(0, 0, 0, 0.8);
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
  margin: auto;
  position: absolute;
}

.background__shadow {
  position: absolute;
  background-image: linear-gradient(0deg, rgb(14, 14, 14), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgb(14, 14, 14));
  width: 100%;
  height: 100%;
}

.background__jpg {
  width: 100%;
}

.horarios_absolute {
  z-index: 2;
}

.horarios__cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.horarios__card {
  display: flex;
  flex-direction: column;
  gap: 28px;
  line-height: 22px;
}

.horario__avise {
  margin: 130px 0 40px 0;
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
  gap: 40px;
}

/* Premio */

.premio {
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-direction: column;
  align-items: center;
}

.premio__1 {
  width: 134px;
}

.premio__2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
}

.premio__2 img {
  width: 170px;
}

.red_btn {
  display: flex;
  align-items: center;
  gap: 12px;
}

.red_btn span {
  transform: translate(22px, -2px);
}

.cards-container {
  position: relative;
  margin-bottom: 240px;
}

.grid__background_M {
  position: absolute;
  left: -50vw;
  top: -300px;
  width: 140vw;
  max-width: 100vw;
  z-index: 0;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 14px;
}

@media only screen and (min-width:1920px) {
  .grid {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
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
  padding-top: 66px;
}

.card__name {
  font-weight: 600;
  min-height: 38px;
  color: #828282;
}

.card__prof {
  width: 90px;
  top: 58px;
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
  color: red;
  cursor: pointer;
}

.card__email {
  color: #828282;
  cursor: pointer;
  font-size: 16px;
  max-width: 224px;
  overflow: hidden;
  transition: .1s;
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

@media only screen and (max-width: 1000px) {
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
    grid-template-columns: 1fr 1fr;
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

}

.premio__grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}

@media only screen and (max-width: 700px) {
  .horario__avise {
    flex-direction: column;
  }

  .laboratorios {
    grid-template-columns: 1fr 1fr;
  }

  .objetivo {
    grid-template-columns: 1fr;
  }

  .premio {
    gap: 40px;
  }

  .premio__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
  }

  .laboratorios__img {
    width: 100%;
    opacity: 0.4;
  }

}
</style>

<style>
/* Primary Nav */

.el-tabs__item {
  font-size: 16px;
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

.navSecond .el-tabs__item.is-top.is-active {
  background: #1B1B1B;
}

.navSecond .el-tab-pane {
  height: 240px;
  overflow: overlay;
}

.el-tab-pane {
  line-height: 30px;
  font-weight: 400;
}

.el-tabs__content {
  padding: 30px 30px 0 30px;
}

@media only screen and (max-width: 1000px) {

  .el-tabs__content {
    padding: 0;
  }

}
</style>