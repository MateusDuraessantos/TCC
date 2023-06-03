<template>
    <div>
        <header>
            <div class="shadow" />
            <div class="container__title">
                <p class="header__banner">Matrícula</p>
                <p class="header__ano">2023</p>
                <button class="blue_btn btn_header">Inscreva-se</button>
            </div>
            <p class="subtitle">Faculdade de Arquitetura e Urbanismo | Campus Higienópolis
                <br>
                Mackenzie
            </p>
        </header>

        <div class="body">
            <section>

                <!-- Preparado para as aulas -->

                <img class="aulas__background" id="background-mobile" src="matricula/background_formandos.jpg">

                <div class="aulas" id="link_aulas">
                    <div class="aulas__grid">
                        <span>
                            <title-section class="aulas__title">
                                <h2>Preparado para as aulas</h2>
                            </title-section>
                            <p class="font-light">
                                O curso de design vai se iniciar no dia, 16/04/23. Para se informar mais sobre
                                sua
                                matrícula, acesse o
                                <span
                                    style="display: inline; text-decoration: underline; cursor: pointer; color: #00547F; font-weight: 700; padding: 0;">
                                    portal
                                    do
                                    aluno</span>
                                utilizando o
                                número de sua matrícula.
                            </p>
                        </span>
                        <img class="aulas__img" src="matricula/formandos.png" alt="alunos formando">
                    </div>
                </div>

                <!-- Matriculas -->

                <div class="matricula" id="link_matriculas">
                    <div class="matricula__title">
                        <h4 class="font-light">Ainda não se matriculou?</h4>
                        <h2>Matrícula Abertas</h2>
                    </div>

                    <div class="matriculas__grid">
                        <div class="matriculas__card matriculas__card--1">
                            <h2>Vestibular</h2>
                            <button class="blue_btn">inscreva-se</button>
                        </div>
                        <div class="matriculas__card matriculas__card--2">
                            <h2>ENEM</h2>
                            <button class="blue_btn">inscreva-se</button>
                        </div>
                        <div class="matriculas__card matriculas__card--3">
                            <h2>ProUni</h2>
                            <button class="blue_btn">inscreva-se</button>
                        </div>
                        <div class="matriculas__card matriculas__card--4">
                            <h2>Transferência</h2>
                            <button class="blue_btn">inscreva-se</button>
                        </div>
                    </div>
                    <p>Para maiores informações envie-nos um e-mail: <b style="color: #00547F;">bolsas@mackenzie.br.com</b>
                    </p>
                </div>

                <!-- Setor de bolsas -->

                <div id="link_bolsa">
                    <div class="bolsas">
                        <div class="aulas__title">
                            <h2>Setor de bolsas</h2>
                        </div>
                        <p> O Instituto Presbiteriano Mackenzie, em cumprimento a sua missão e valores, bem como aos seus
                            compromissos filantrópicos e beneficentes, concede bolsas de estudo aos estudantes elegíveis nas
                            condições previstas na legislação, no Normativo de Bolsas de Estudo da Instituição e nos editais
                            publicados.
                        </p>
                        <button class="blue_btn">Ver no Maps</button>
                    </div>
                </div>

                <!-- Mensalidade -->
                <div id="link_mensalidade-matricula"></div>
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
                                <button class="blue_btn" style="align-items: center; display: flex; "><a
                                        @click="scrollToSection('link_aulas')">Avise-me</a>
                                    <arrow style="font-size: 22px; transform: translateY(-2px);">→</arrow>
                                </button>
                            </div>
                        </span>
                        <img class="mensalidade__img" src="design/mao.jpg" alt="mão escrevendo">
                    </div>
                </div>

                <!-- Perguntas frequentes -->

                <div id="link_perguntas">

                    <div class="perguntas">
                        <title-section class="aulas__title">
                            <h2>Perguntas frequentes</h2>
                        </title-section>

                        <el-collapse accordion class="perguntas__collapse">
                            <el-collapse-item v-for="faq in faqs">
                                <template #title>
                                    <p style="color: #BDBDBD">{{ faq.question }}</p>
                                </template>
                                <span style="display: flex; gap:12px; flex-direction: column;">
                                    <p v-for="text in faq.texts">{{ text }} </p>
                                </span>
                            </el-collapse-item>
                        </el-collapse>
                        <p>Para maiores informações envie-nos um e-mail:
                            <b style="color: #00547F;">
                                bolsas@mackenzie.br.com</b>
                        </p>
                    </div>

                    <!-- Livros Background -->
                    <div class="livros__background">
                        <div class="livros__shadow"></div>
                    </div>
                </div>
            </section>
        </div>

        <!-- Entre em contato -->

        <div id="link_contato"></div>

        <div class="contato">

            <img class="contato__background" id="contato-mobile" src="matricula/contato.jpg">
            <div class="contato__shadow"></div>
            <div class="contato__shadow-1"></div>


            <div class="contato__container">
                <div class="contato__content">
                    <div class="aulas__title">
                        <h2>Entre em contato</h2>
                    </div>
                    <br>

                    <!-- Inputs -->

                    <div class="contato__grid">
                        <span>
                            <label>
                                <p>Nome*</p>
                                <input class="contato__inputs--input" type="text" placeholder="Digite:">
                            </label>
                            <label>
                                <p>Email*</p>
                                <input class="contato__inputs--input" type="text" placeholder="Digite:">
                            </label>
                        </span>
                        <label>
                            <p>Assunto*</p>
                            <input class="contato__inputs--input" type="text" placeholder="Digite:">
                        </label>
                        <label>

                            <p>Mensagem*</p>
                            <textarea cols="30" rows="10" placeholder="Digite:"></textarea>
                        </label>
                        <p class="frase">Seja a mudança que você deseja ver no mundo!</p>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    name: 'MatriculaPage',
    data() {
        return {
            faqs: [
                {
                    question: '1. Como posso solicitar Bolsa de Estudos no Mackenzie?',
                    texts: [
                        'Qualquer aluno devidamente matriculado na Educação Básica ou em cursos de Graduação pode solicitar bolsa de estudos no Mackenzie. Verifique atentamente as informações da página da Gerência de Responsabilidade Social e Filantropia – Setor de Bolsas de Estudo, e principalmente, confira os critérios para concessão através do seu respectivo Edital devidamente disponibilizado com antecedência no site.',
                    ]
                },
                {
                    question: '2. Perdi o prazo para fazer a minha Solicitação de Bolsa, o que devo fazer?',
                    texts: [
                        'Somente será possível fazer uma outra solicitação em Edital futuro. Para evitar tal situação, verifique constantemente no link da Gerência de Responsabilidade Social e Filantropia – Setor de Bolsas de Estudo, e mantenha-se informado do período correto para fazer a sua solicitação.',
                        'Atente-se aos seguintes tópicos:',
                        '· Cronograma para fazer a solicitação;',
                        '· Lista de documentos necessários;',
                        '· Procedimentos para anexação de documentos.'
                    ]
                },
                {
                    question: '3. Já sou bolsista, quando devo renovar a minha Solicitação de Bolsa?',
                    texts: [
                        'Verifiqueas orientações dos procedimentos necessários para efetuar a Renovação de sua Bolsa de Estudo no Mackenzie através do link de Bolsas de Estudo em seu Edital correspondente.',
                    ]
                },
                {
                    question: '4. Quem pode requerer a Bolsa de Estudo?',
                    texts: [
                        'O próprio aluno ou, em  sua ausência, seu procurador ou responsável, quando o aluno for menor.',
                    ]
                },
                {
                    question: '5. O aluno que solicita Bolsa de Estudo, pode ficar sem pagar a mensalidade ',
                    texts: [
                        'Não! Caso a bolsa seja concedida, o aluno poderá desfrutar do benefício somente se a situação financeira estiver regularizada.',
                    ]
                },
                {
                    question: '6. O que é grupo familiar e quem pode compô-lo?',
                    texts: [
                        'De acordo com a Portaria Normativa nº 13, de 29 de 29 de maio de 2014 no Art. 11 “Para fins de apuração da renda familiar bruta mensal per capita de que trata esta Portaria, entende-se como grupo familiar a unidade nuclear composta por uma ou mais pessoas, eventualmente ampliada por outras pessoas que contribuam para o rendimento ou tenham suas despesas atendidas por aquela unidade familiar...”',
                    ]
                },
                {
                    question: '7. O que são despesas primárias?',
                    texts: [
                        'São despesas básicas necessárias para a subsistência do grupo familiar, tais como alimentação, moradia, saúde, educação, água, luz, telefone. Observe que a análise é por carência de recursos financeiros e, portanto, as despesas deverão ser compatíveis com estes critérios.',
                    ]
                },
                {
                    question: '8. O aluno que possui desconto de irmão, pode ter acumulado a Bolsa de Estudo?',
                    texts: [
                        'Não! A análise da carência financeira leva em consideração o valor total da mensalidade devida pelo aluno e em hipótese alguma poderá ter estes benefícios acumulados.',
                    ]
                },
                {
                    question: '9. Após o resultado da análise da Bolsa de Estudo, posso pedir reavaliação?',
                    texts: [
                        'Não haverá solicitação de reavaliação para pedidos de bolsa. Os casos excepcionais serão administrados por meio de entrevistas e/ou visitas domiciliares.',
                    ]
                },
                {
                    question: '10. Quais as formas de contato com o Setor de bolsas?',
                    texts: [
                        'O Setor de bolsa tem atendimento pessoal na Rua Piaui, 130 - Prédio 48 - Sala 205A, e, através do email: bolsas@mackenzie.br',
                    ]
                },
                {
                    question: '11. Estou com dúvidas no preenchimento do formulário eletrônico, como devo proceder?',
                    texts: [
                        'Se você estiver com dúvidas durante o preenchimento do seu formulário, antes de finalizá-lo,  procure solucionar suas dúvidas encaminhado  e-mail para o endereço bolsas@mackenzie.br',
                        'Importante: Atente-se ao prazo final  para efetuar o preenchimento do formulário.'
                    ]
                },
                {
                    question: '12. Havendo problemas no envio do meu formulário, erro no preenchimento, ou dificuldades em visualizar o formulário completo, como devo proceder?',
                    texts: [
                        'Caso você não consiga baixar o formulário no seu computador (on-line), ou se houver algum problema durante o envio do mesmo, entre em contato com o Help Desk (2114-8747) para esclarecimentos e orientações necessárias.',
                        'Caso você cite equivocadamente algum dado durante o preenchimento do formulário e enviá-lo, não será mais possível alterá-lo.',
                    ]
                },
                {
                    question: '13. Havendo a concessão de Bolsa de Estudo, o percentual é garantido até o final do curso?',
                    texts: [
                        'Não! O Mackenzie concede Bolsa de Estudo levando em consideração a condição socioeconômica atual do aluno solicitante e seu grupo familiar, de acordo com parâmetros estabelecidos pelas Leis do  Ministério de Educação e Cultura.',
                    ]
                },
                {
                    question: '14. O que é Visita Domiciliar e quando ela pode ocorrer?',
                    texts: [
                        'O Instituto Presbiteriano Mackenzie, através das Assistentes Sociais, reserva-se o direito de efetuar a qualquer tempo, sem aviso prévio, visitas domiciliares aos alunos bolsistas para a devida comprovação das informações e condições de carência prestada, utilizando recurso audiovisual para fundamentar sua pesquisa cuja finalidade será a sistematização dos dados obtidos. Caso não se confirmem as condições apresentadas poderá ocorrer o cancelamento ou a diminuição do percentual deferido. ',
                    ]
                },
                {
                    question: '15. Quais são as condições para o cancelamento ou suspensão da concessão da Bolsa de Estudo?',
                    texts: [
                        'a) Serão suspensas as bolsas de estudo se o aluno:',
                        '- trancar matrícula ou abandonar o curso.',
                        '- Deixar de cumprir as obrigações financeiras com o Mackenzie.',
                    ]
                },
                {
                    question: '16. Os documentos entregues para solicitação de Bolsa de Estudo são devolvidos posteriormente?',
                    texts: [
                        '- Ficar reprovado na série em que estiver matriculado;',
                        '- Incorrer em falta disciplinar grave e sofrer sanções, previstas no regimento da Unidade em que estiver matriculado;',
                        '- Revelar em sua vida escolar no Mackenzie conduta moral incompatível com a ordem interna e com os bons costumes;',
                        '- Evidenciar objetivamente por seus bens, recursos e meios, situação econômica financeira contrária à carência alegada, quando de sua habilitação, através de declaração que não correspondam à verdade.',
                    ]
                },
            ]
        }
    },
    mounted() {
        this.scrolltoTop()
        this.updateImageSource()

    },
    methods: {
        //Ao entrar na página, faz ela rola para cima
        scrolltoTop() {
            this.$nextTick(() => {
                window.scrollTo(0, 0);
            });
        },

        updateImageSource() {

            const windowWidth = window.innerWidth;

            if (windowWidth < 768) {
                // Trocar o link da imagem para uma versão para telas pequenas
                document.getElementById('background-mobile').src = "matricula/background_formandos-mobile.jpg";
                document.getElementById('contato-mobile').src = "matricula/contato-mobile.jpg";
            }
        }

    }
}
</script>

<style scoped>
.aulas__title {
    border-color: #00547F;
}


#link_bolsa {
    position: relative;
    z-index: 1;
}

.mensalidade {
    width: 120%;
    margin-left: -10%;

}

#link_mensalidade-matricula,
#link_bolsa,
#link_aulas,
#link_contato,
#link_matriculas,
#link_perguntas {
    padding-top: 140px;
}


section {
    margin: 0 100px;
    width: calc(100% - 400px);
}

@media only screen and (min-width:1981px) {
    section {
        width: 50%;
    }
}


h2 {
    font-size: 1.6rem;
    font-weight: 400;
}

.font-light {
    font-size: 1rem;
    font-weight: 400;
}

.light {
    font-weight: 400;
    text-align: center;
    margin-bottom: 40px;
}

/* Sub Menu */

.container__title {
    overflow: hidden;
    line-height: 80px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 500px;
    gap: 40px;
}

.shadow {
    position: absolute;
    z-index: 1;
    background-image: linear-gradient(45deg, rgb(1, 19, 29), rgba(0, 17, 35, 0.512), rgb(0, 19, 29));
    background-image: linear-gradient(45deg, #00131d80, rgba(0, 17, 35, .512), #00131d80);

    width: 100%;
    height: 100%;
}

.btn_header {
    display: flex;
    justify-content: center;
    width: 100%;
    text-align: center;
}

header {
    background-image: url('../../public/matricula/banner.jpg');
    background-size: contain;
    background-position: center;
    cursor: default;
    border-bottom: 3px solid #00547F;
    height: calc(100vh - 148px);
}

@media only screen and (max-width:700px) {
    header {
        background-image: url('../../public/matricula/banner-mobile.jpg');

    }
}

.header__banner {
    font-size: 122px;
    font-weight: 100;
}

.header__ano {
    font-size: 75px;

    letter-spacing: 108px;
}

.header__ano,
.header__banner {
    font-weight: 100;
}

.subtitle {
    position: absolute;
    bottom: 50px;
    text-align: center;
    font-size: 1.13rem;
    font-weight: 400;
    z-index: 1;
}

/* Preparado para as aulas */

.aulas {
    position: relative;
}

.aulas__background {
    position: absolute;
    right: 0;
    width: 70%;
    object-fit: cover;
    opacity: 0.4;
}

.aulas__grid {
    display: grid;
    grid-template-columns: 2fr 1.3fr;
    outline: 15px solid rgba(255, 255, 255, 0.05);
    overflow: hidden;
    align-items: center;
    backdrop-filter: blur(5px);
    border-radius: 13px;
    box-shadow: 5px 5px 14px rgba(0, 0, 0, 0.4);
    background: black;
}

.aulas span {
    padding: 30px;

}

.aulas__img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

/* Matricula */

.matricula {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.matriculas__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 60px;
    gap: 60px;
}

.matriculas__card {
    padding: 30px;
    gap: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    outline: 15px solid rgba(255, 255, 255, 0.05);
    overflow: hidden;
    align-items: center;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    border-radius: 13px;
    box-shadow: 5px 5px 14px rgba(0, 0, 0, 0.4);
    background: black;
}


.matriculas__card--1,
.matriculas__card--2,
.matriculas__card--3,
.matriculas__card--4 {
    background-size: cover;
}


.matriculas__card--1 {
    background-image: url('../../public/matricula/card-1.jpg');
}

.matriculas__card--2 {
    background-image: url('../../public/matricula/card-2.jpg');
}

.matriculas__card--3 {
    background-image: url('../../public/matricula/card-3.jpg');
}

.matriculas__card--4 {
    background-image: url('../../public/matricula/card-4.jpg');
}

.matricula__title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-width: 0 0 0 4px;
    border-color: #00547F;
    border-style: solid;
    padding-left: 20px;
}

/* Setor de bolsas  */

.bolsas {
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    gap: 30px;
    border-radius: 8px;
    padding: 30px;
    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.3);
}

/*  */
.z-index {
    z-index: 2;
}

/* Perguntas frequentes */

#link_perguntas {
    position: relative;
    display: flex;
    justify-content: center;
}

.perguntas {
    width: 100%;
    max-width: 1880px;
    margin: auto;
    position: relative;
    z-index: 2;
}

.perguntas__collapse {
    margin: 60px 0
}


/* Livros background */

.livros__background {
    position: absolute;
    top: -400px;
    margin: auto;
    z-index: 0;
    width: 100vw;
    height: 100vw;
    min-height: 100vh;
    background-image: url('../../public/matricula/background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.5;
}

@media only screen and (max-width: 700px) {
    .livros__background {
        min-height: 220vh;
        background-image: url('../../public/matricula/background-mobile.jpg');
    }
}

.livros__shadow {
    background-image: linear-gradient(black, transparent, transparent, transparent, black);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
}

/* contato */

.contato {
    position: relative;
    width: 100%;
    z-index: 2;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 140px 0;
}

.contato__background {
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    z-index: 1;
}

.contato__container {
    z-index: 2;
    justify-content: center;
    flex-direction: column;
    position: relative;
    display: flex;
    font-size: 1rem;
    font-weight: 400;
    height: 70%;
    width: 100%;
    background: #00557f17;
    backdrop-filter: blur(10px);
}

.frase {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 2.2rem;
    font-weight: 300;
    padding-top: 10vw;
    line-height: 2.2rem;
    padding-bottom: 10vw;
    white-space: nowrap;
}

.contato__shadow,
.contato__shadow-1 {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
}

.contato__shadow-1 {
    background-image: linear-gradient(90deg, black, transparent, transparent, black);
    z-index: 2;

}

.contato__shadow {
    background-image: linear-gradient(black, transparent, transparent, black);
    z-index: 2;
}

.contato__content {
    width: 40vw;
    min-width: 700px;
    height: 100%;
    padding: 60px 0;
    margin: auto;
}

.contato__grid {
    display: flex;
    flex-direction: column;
    gap: 0.8vw;
    font-size: 1rem;
}

.contato__grid label {
    margin-bottom: 10px;
}

.contato__grid span {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.9vw;
}

.contato__grid label p {
    padding: 0 0 4px 10px;
}

.contato__inputs--input,
textarea {
    background: #212121;
    width: 100%;
    border-radius: clamp(22px, 1.8vw, 46px);
    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.3);
    padding-left: clamp(14px, 3vw, 30px);
    padding-right: 10px;
    color: white;
    font-weight: 400;
    font-size: 1rem;
    border: none;
    height: clamp(36px, 2.8vw, 66px);
    line-height: 1.6rem;
}

textarea {
    height: 280px;
    padding-top: 16px;
}

@media only screen and (max-width:1980px) {

    .mensalidade {
        width: 100%;
        margin: auto;

    }

}

@media only screen and (max-width:1660px) {

    section {
        width: calc(100% - 100px);
    }

}

@media only screen and (max-width: 1000px) {
    section {
        width: calc(100% - 50px);
        margin: 0 10px;
    }

    .container__title {
        width: 280px;
    }

    .perguntas {
        width: 100%;

    }

    .header__banner {
        font-size: 70px;
    }

    .header__ano {
        font-size: 55px;
        letter-spacing: 53px;
    }

    /* Matriculas */
    .matricula {
        gap: 20px;
    }

    .matriculas__grid {
        gap: 40px;
    }

    /* Entre em contato */
    .contato__content {
        min-width: calc(100% - 80px);
    }

    .contato__grid span {
        grid-template-columns: 1fr;
    }

    /* Perguntas frequentes */


    .contato__content {
        padding: 20px 0;
    }

    .contato {
        padding: 100px 0;
    }


}

@media only screen and (max-width: 700px) {
    .perguntas {
        width: calc(100% - 50px);
    }

    .aulas__img {
        display: none;
    }

    .aulas__grid {
        grid-template-columns: 1fr;
    }

    #link_bolsa,
    #link_aulas,
    #link_matriculas,
    #link_perguntas {
        padding-top: 80px;
    }

    .perguntas__collapse {
        margin: 20px 0
    }

    .bolsas {
        gap: 14px;
    }

    .matriculas__grid {
        grid-template-columns: 1fr 1fr;
    }

}

@media only screen and (max-width: 500px) {
    .perguntas {
        width: 100%;
    }

    .aulas__grid .aulas__title {
        margin-bottom: 16px;
    }

    .matriculas__grid {
        margin-top: 0;
    }

    .aulas span {
        padding: 12px;

    }

    section {
        width: calc(100% - 40px);
    }

    .aulas__background {
        width: 100%;
        min-height: 80vh;
    }



    .frase {
        font-size: 1rem;
    }

    .bolsas,
    .aulas span {
        padding: 18px
    }

    .contato__content {
        width: 100%;
        padding: 20px;
    }

    textarea {
        height: 140px;
    }

    .matriculas__card {
        padding: 20px 10px;
    }

    .matriculas__grid {
        gap: 14px;
    }

    .matriculas__card {
        outline-width: 2px;
    }

    .aulas__grid {
        outline-width: 2px;
    }
}
</style>