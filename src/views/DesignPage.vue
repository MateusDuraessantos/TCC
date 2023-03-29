<template class="teste">
  <div>
    <NavPages />
    <header>
      <p class="design">Design</p>
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

      <div class="objetivo">
        <span>
          <h3 class="objetivo__title">O que temos como objetivo?</h3>
          <div>
            <hr-color />
            <hr>
          </div>
          <br>

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
          <img class="premio__1" src="design/premio1.png">
          <div class="premio__2">
            <img src="design/star.png">
            Guia do estudante
          </div>
        </span>
      </div>

      <!-- Matriz -->

      <div class="matriz">
        <div class="matriz__title">Um pouquinho do que você vai aprender </div>
        <el-tabs v-model="activeNameNav" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane label="Matriz Curricular" name="first">

            <el-row>
              <el-col :offset="3" :span="17">
                <el-collapse accordion style="margin: 60px 0">
                  <el-collapse-item v-for="coisas in 8" :key="index">
                    <template #title>
                      <p class="matriz__etapa"><b>1° Etapa</b> - Projeto I</p>
                    </template>
                    <div>
                      Consistent with real life: in line with the process and logic of real
                      life, and comply with languages and habits that the users are used to;
                    </div>
                    <div>
                      Consistent within interface: all elements should be consistent, such
                      as: design style, icons and texts, position of elements, etc.
                    </div>
                  </el-collapse-item>
                </el-collapse>
              </el-col>
            </el-row>
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
                  para o contexto social; d) que possa contribuir para o desenvolvimento qualitativo do corpo docente,
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


      <!-- Horários/Períodos -->


      <h1>Horários/Períodos</h1>
      <br>
      <br>
      <div class="horarios">
        <div class="horarios_absolute">
          <div class="horarios__cards">
            <div class="docente horarios__card">
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
            <div class="docente" v-for="coisas in 2">
              <img class="docente__prof" src="design/docentes/1.png">
              <img class="docente__header" src="design/docentes/card_header.jpg">
              <div class="docente__infos">
                <p class="docente__name">Prof. Me. Carlos Marcelo Campos teixeira</p>
                <p>Professora</p>
                <p class="docente__cargo">Professora</p>
                <p class="docente__email">fau.design@mackenzie.br</p>
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

      <div class="grid">
        <div class="docente" v-for="coisas in 10">
          <img class="docente__prof" src="design/docentes/1.png">
          <img class="docente__header" src="design/docentes/card_header.jpg">
          <div class="docente__infos">
            <p class="docente__name">Prof. Me. Carlos Marcelo Campos teixeira</p>
            <p>Professora</p>
            <p class="docente__cargo">Professora</p>
            <p class="docente__email">fau.design@mackenzie.br</p>
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
      activeName: 'first'
    }
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
  font-size: 144px;
  text-align: center;
  font-weight: 100;
}

.faculdade {
  position: absolute;
  bottom: 50px;
  font-weight: 300;
  line-height: 50px;
  z-index: 2;
  font-size: 18px;
  text-align: center;

}

/* objetivo */
.objetivo {
  display: grid;
  grid-template-columns: 2.2fr 1fr;
}

.objetivo__title {
  font-size: 30px;
  margin: 24px 0;
}

.objetivo__text {
  height: 300px;
  overflow: overlay;
  font-size: 16px;
  font-weight: 300;
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


/* matriz */

.matriz {
  margin: 100px 0;
}

.matriz__title {
  font-size: 30px;
  font-weight: 400;
}

.matriz__etapa {
  font-size: 16px;
}


/* Horários */

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
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
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
  margin: 150px 0;
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


.body {
  width: var(--page-width);
  margin: auto;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 14px;

}

.docente {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  border-radius: 13px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.06);
  color: white;
  font-weight: 300;
  cursor: default;

  backdrop-filter: blur(6px);
  box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.1);
}

.docente__infos {
  border-radius: 0 0 8px 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: black;
  padding: 16px;
  padding-top: 66px;
}

.docente__name {
  font-weight: 600;
  color: #828282;
}

.docente__prof {
  width: 90px;
  top: 58px;
  left: 40px;
  position: absolute;
  outline: 6px solid black;
  border-radius: 100%;
}

.docente__cargo {
  color: var(--red-mack);
  text-decoration: underline;
  font-weight: 600;
}

.docente__cargo:hover {
  color: red;
  cursor: pointer;
}

.docente__email {
  color: #828282;
  cursor: pointer;
}

.docente__email:hover {
  color: white;
}

.docente__header {
  border-radius: 8px 8px 0 0;
  width: 100%;
  height: 90px;
  object-fit: cover;
}
</style>


<style>
/* Primary Nav */

.el-tabs__item {
  font-size: 16px;
  transition: .2s;
  font-weight: 300;
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
</style>

<style>
/* Collapse */

.el-collapse-item__header {
  background: #212121;
  border-radius: 50px;
  height: 40px;
  padding-left: 20px;
  padding-right: 10px;
  color: white;
  font-weight: 300;
  font-size: 16px;
  border: none;
}

.el-collapse,
.el-collapse-item__wrap {
  border: none;
}


.el-collapse-item {
  margin-bottom: 4px;
}


.el-collapse-item__wrap {
  background: #131313;
  border-radius: 25px;
}

.el-collapse-item__content {
  color: white;
  padding: 20px;
  font-size: 16px;
  font-weight: 300;

}
</style>

<style>
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
  font-weight: 300;
}

.el-tabs__content {
  padding: 30px 30px 0 30px;
}
</style>