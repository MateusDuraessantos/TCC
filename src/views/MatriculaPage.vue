<template>
    <div>
        <NavPages />
        <header>
            <div class="shadow" />
            <div class="container__title">
                <span>
                    <p class="header__banner">Matrícula</p>
                    <p class="header__ano">
                        2023
                    </p>
                </span>
                <button class="blue_btn btn_header">Inscreva-se</button>
            </div>
            <p class="subtitle">Faculdade de Arquitetura e Urbanismo | Campus Higienópolis
                <br>
                Mackenzie
            </p>
        </header>

        <div class="body">

            <!-- Preparado para as aulas -->

            <div class="aulas" id="link_aulas">
                <div class="matricula__title">
                    <h2>Preparado para as aulas</h2>
                </div>
                <p class="font-light">O curso de design vai se iniciar no dia, 16/04/23. Para se informar mais sobre sua
                    matrícula, acesse o
                    <span style="color: #00547F">portal do aluno</span> utilizando o número de sua matrícula.
                </p>
            </div>

            <!-- Matriculas -->

            <div class="matricula" id="link_matriculas">
                <img class="matricula__background" src="matricula/matricula.jpg">
                <div class="matricula__shadow" />

                <div class="matricula__container">
                    <div class="matricula__title">
                        <h4 class="font-light">Ainda não se matriculou?</h4>
                        <h2>Matrícula Abertas</h2>
                    </div>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                        the
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div class="container__cards">
                        <div class="card">
                            <h2>Vestibular</h2>
                            <button class="blue_btn">inscreva-se</button>
                        </div>
                        <div class="card">
                            <h2>ENEM</h2>
                            <button class="blue_btn">inscreva-se</button>
                        </div>
                        <div class="card">
                            <h2>ProUni</h2>
                            <button class="blue_btn">inscreva-se</button>
                        </div>
                        <div class="card">
                            <h2>Transferência</h2>
                            <button class="blue_btn">inscreva-se</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Matriculas -->

            <div class="matricula" id="link_bolsa">
                <img class="matricula__background" src="matricula/bolsas.jpg">
                <div class="matricula__shadow" />

                <div class="matricula__container">
                    <div class="matricula__title">
                        <h2>Setor de bolsas</h2>
                    </div>

                    <p> O Instituto Presbiteriano Mackenzie, em cumprimento a sua missão e valores, bem como aos seus
                        compromissos filantrópicos e beneficentes, concede bolsas de estudo aos estudantes elegíveis nas
                        condições previstas na legislação, no Normativo de Bolsas de Estudo da Instituição e nos editais
                        publicados.</p>
                    <br>
                    <button class="blue_btn">Ver no mapa</button>

                </div>
            </div>

            <!-- Perguntas frequentes -->

            <el-row id="link_faq">
                <el-col :offset="4" :span="16">
                    <div class="faq">
                        <h2 class="light">Perguntas frequentes Coordenação de bolsas de estudo</h2>

                        <el-collapse accordion style="margin: 60px 0">
                            <el-collapse-item v-for="faq in faqs">
                                <template #title>
                                    <p style="color: #BDBDBD">{{ faq.question }}</p>
                                </template>
                                <span style="display: flex; gap:12px; flex-direction: column;">
                                    <p v-for="text in faq.texts">{{ text }} </p>
                                </span>
                            </el-collapse-item>
                        </el-collapse>

                        <p>
                            <b>Para maiores informações envie-nos um e-mail: </b>
                            <span style="color: #00547F"> bolsas@mackenzie.br.com</span>
                        </p>
                    </div>
                </el-col>
            </el-row>


            <!-- Matriculas -->

            <div class="frase">
                <img class="frase__background" src="matricula/auditorio.jpg">
                <div class="frase__shadow" />

                <div class="frase__container">
                    <p class="frase__p">Seja a mudança que você deseja ver no mundo!</p>

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
    name: 'MatriculaPage',
    components: { FooterPage, NavPages },
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
    }
}
</script>

<style scoped>
.container__title {
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 500px;
    gap: 40px;
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
    line-height: 50px;
    text-align: center;
    font-size: 18px;
    font-weight: 300;
    z-index: 1;

}

/* Aulas */

.aulas {
    padding: 100px 0;
}

/* Matricula */

.matricula {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 700px;

}

.matricula__shadow {
    position: absolute;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1));
    width: 100vw;
    height: 700px;
    z-index: 2;
}

.matricula__background {
    position: absolute;
    object-fit: cover;
    z-index: 1;
    width: 100vw;
    height: 700px;
}

.matricula__container {
    z-index: 2;
    justify-content: center;
    flex-direction: column;
    position: relative;
    display: flex;
    font-size: 16px;
    line-height: 26px;
    font-weight: 300;
}

.font-light {
    font-size: 16px;
    font-weight: 300;
}


.light {
    font-weight: 300;
    text-align: center;
    margin: 100px 0 40px 0;
}

.matricula__title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-width: 0 0 0 4px;
    border-color: #00547F;
    border-style: solid;
    min-height: 40px;
    padding-left: 20px;
    margin-bottom: 40px;
}

.container__cards {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 60px 0;
}

.container__cards button {
    padding: 0 70px;
}

.container__cards h2 {
    text-align: center;
    margin: 30px 0;
}

h2 {
    font-size: 30px;
    font-weight: 300;
}




/* Frase */
.frase {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
    margin: 100px 0;
}

.frase__shadow {
    position: absolute;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1));
    width: 100vw;
    height: 500px;
    z-index: 2;
}

.frase__background {
    position: absolute;
    object-fit: cover;
    z-index: 1;
    width: 100vw;
    height: 500px;
}

.frase__container {
    z-index: 2;
    justify-content: center;
    flex-direction: column;
    position: relative;
    display: flex;
    font-size: 16px;
    line-height: 26px;
    font-weight: 300;
}

.frase__p {
    text-align: center;
    font-size: 26px;
    font-weight: 300;
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.6);
}
</style>