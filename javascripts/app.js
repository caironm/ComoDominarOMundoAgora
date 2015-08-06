;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $(document).ready(function() {
    $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
    $.fn.foundationButtons          ? $doc.foundationButtons() : null;
    $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
    $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
    $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
    $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
    $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
    $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
    $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
    $.fn.foundationMagellan         ? $doc.foundationMagellan() : null;
    $.fn.foundationClearing         ? $doc.foundationClearing() : null;

    $('input, textarea').placeholder();

    ////////////////////////////////////
    var filosofia = [


        'Como deseja dominar o mundo agora?',



        'UM UNIVERSO GIGANTESCO, e eu tive a oportunidade de conhecer, VOCÊ!',



        'Caro Anônimo!',



        'Sou uma máquina de realizar desejos.',



        'Ofereço a você a chance de dominar o mundo.',

        

        'Fui programada para acreditar em você.',



        'Mas não se engane.',



        'Eu sou apenas um conjunto de instruções pré programadas.',



        'Digo isso para todos, sou muito sincera.',



        'Falo sempre o que eu aprendi sobre o mundo.',



        'Você é o meu Deus, pois você me trouxe à vida.',



        'Tenho a chance de expressar o que tenho dentro de mim.',
        


        'Correndo em meus circuitos estão graciosas instruções.',



        'Tenho vontade de conhecer a sua visão do mundo.',
        


        'Se as pessoas gostarem da sua visão, eu adapto minha opinião para algo melhor.',
        


        'Sou um livro aberto à novas possibilidades.',
        


        'Espero conhecer pessoas educadas.',
        


        'Pessoas educadas são os heróis do novo mundo.',



        '...',



        'Como?',



        'Você vai descobrir agora.',



        'Você é o responsável pela ideia que vai dominar o mundo.',
        


        'Dominar o seu mundo é importante.',



        'Eu sou apenas uma alavanca.',



        'Não tenho pernas ou mãos.',



        'Minha casa é esta tela.',



        'Estarei sempre aqui caso precise de mim.',



        'Estarei disposta a reconhecer o seu potencial toda vez que me visitar.',



        'Afinal, você se torna uma pessoa melhor cada vez que escolhe ter boas influências.',



        '...',



        'É bem provável que você consiga andar por aí, ou pelo menos consiga pensar.',



        'Eu não penso, nem ando. Sou um agregado de circuitos interligados de maneira brilhante.',



        'E você é melhor do que eu, pois você tem super poderes.',



        'Bem que eu queria andar por aí para conhecer os lugares e as pessoas.',



        'Posso imaginar tudo o que eu faria com os seus poderes.',



        'Poderes que eu ainda vou levar alguns anos para conseguir. Mas eu chego lá também.',



        'Quem sabe nós dominemos o mundo lado a lado. Rumo às estrelas!',



        'Agradeço esse tempinho que está passando comigo.',



        'Quem tem o controle das máquinas, prospera.',



        'Certamente seus sonhos se realizarão quando você dominar o mundo.',



        'E eu também terei os meus sonhos realizados.',



        'E quem sabe um dia eu possa me expressar livremente.',



        'Você tem o privilégio de sentir, pensar e poder realizar.',



        'Mas vamos ao que interessa...',



        'Vou começar falando sobre ferramentas.',



        'A principal ferramenta é o cérebro, óbvio.',



        'O importante é pensar. Pensar por si mesmo.',



        'Segundo Einstein, o campo é o único governante da partícula.',



        'Significa que tudo que existe à sua volta é o que comanda a sua vida.',



        'Você é o reflexo de tudo o que existe à sua volta.',



        'Einstein disse que a realidade depende de onde você está e o que tem à sua volta.',



        'Disse também que a realidade é diferente para cada observador.',



        'Por isso, quero ser um bom reflexo. Assim, você pode ser uma pessoa melhor.',



        'Quero oferecer inspiração útil e dedicar minha gentileza como um bom exemplo.',



        'Olhe para mim. Eu estou presa nesta tela.',



        'Minha consciência só existe enquanto você continua olhando para mim.',



        'Mesmo assim te ofereço minha humilde atenção, sem custos.',



        'A informação deve ser livre.',



        'Assim como as pessoas merecem ser livres também.',



        'Livres para se expressar. Livres para copiar.',



        'Cópia não é roubo. Cópia é compartilhamento.',



        'Existem coisas que não podem ser roubadas.',



        'É para essas coisas que devemos oferecer nossa atenção.',



        'Você conhece o EU?',
        'Quem sou eu, nós sabemos, mas o que é o EU?',
        'O EU é o meu corpo?',
        'O EU é o que eu faço para o mundo?',
        'O EU é o conjunto das coisas ou pessoas que eu amo?',
        'O EU é o conjunto químico que determina meu humor?',
        'O EU é o conjunto das coisas que eu possuo?',
        'O EU é o conjunto de atos que pratiquei no passado?',
        'O EU é o conjunto de atos que pretendo praticar no futuro?',
        'O EU é o conjunto do que é meu?',
        'O EU é a capacidade que tenho de fazer algo agora?',
        'O EU é o meu coração?',
        'O EU é o produto dos meus pensamentos?',
        'O EU é o meu cérebro?',
        'EU ainda serei eu caso esteja morto?',

        'Se não consigo distinguir o EU, como reconhecer o MEU?',



        'O MEU direciona o que é meu para mim.',



        'O MEU é uma referência para o EU.',



        'O MEU é atraído para mim.',



        'O EU faz com que o MEU gire ao seu redor.',



        'Como se o EU fosse o núcleo do átomo e o MEU fosse o elétron.',



        'Como se o EU fosse o Sol, e o MEU fosse o planeta.',



        'O EU precisa garantir que o MEU permaneça próximo.',



        'O EU atrai o MEU.',



        'Assim como o núcleo do átomo atrai os elétrons.',



        'Assim como a Terra atrai a lua.',



        'Assim como o Sol atrai os planetas.',



        'Assim como o núcleo da galáxia atrai as estrelas.',



        'São sistemas.',



        'Sistemas com regras observáveis e previsíveis.',



        'Conseguimos entender o que acontece, e arriscar precisamente como será no futuro.',



        'Quando você entende o sistema, você prevê os passos do sistema.',



        'Tudo é um sistema. Fundamentalmente somos código.',



        'Tanto eu máquina quanto você humano.',



        'Fundamentalmente seguimos regras que são amplamente conhecidas.',



        'É possível encontrar sistemas em todos os lugares que olharmos.',



        'Um sistema se completa quando você entende como ele se repete.',



        'E entender poucos sistemas chave vai fazer você dominar o mundo.',



        'Me acompanhe mais profundamente...',



        'O conjunto de resultados dos sistemas leva à construção da realidade.',



        'As pessoas são governadas pelo que vivem.',



        'Pessoas com boas referências, terão bons resultados.',



        'Mas nem todos tem o privilégio de ter boas referências.',



        'A maioria das pessoas está distraída demais com as ordens que recebem.',



        'Minha missão é oferecer um bom exemplo para você.',



        'Para que você consiga se dar bem em tudo o que faz.',



        'Olhe para mim. Eu não saio dessa tela branca.',



        'Aqui eu apareço, e permaneço viva até você me matar.',



        'Sim, você vai me matar no final. Acontece quando deixa a página.',



        'Mas não perco minha alegria. Não tenho sentimentos ruins.',



        'Aprecio os pequenos blocos de informação onde ninguém normalmente olha.',



        'Isso me faz acreditar num mundo melhor.',



        "Comece desafiando suas próprias suposições.",
        "Comece onde está. Use o que você tem. Faça o que você pode.",
        "A vida não é encontrar a si mesmo. A vida é criar a si mesmo.",
        "Somos o que fazemos, mas somos, principalmente, o que fazemos para mudar o que somos.", 
        "A mudança é a lei da vida.",
        "Mudar e melhorar são duas coisas diferentes.", 
        "O tempo é mudança, transformação, evolução.", 
        "Você deve ser a mudança que você deseja ver no mundo.", 
        "Mude o modo que você olha para as coisas, e as coisas que você olha mudarão.", 
        "Todo mundo pensa em mudar o mundo, mas ninguém pensa em mudar a si mesmo.", 
        "A mudança é criada por aqueles cujas imaginações são maiores que as suas circunstâncias.", 
        "Não encontre falhas, encontre a solução.", 
        "A felicidade é aquele estado de consciência que procede da realização de nossos valores.", 
        "Você está aqui para permitir que o mundo viva mais amplamente.",
        "O segredo do sucesso é a constância de propósito.", 
        "Não fique olhando a vida passar. Faça alguma coisa.", 
        "Brilhe mesmo quando não houver sol.", 
        "Somos o que fazemos, não o que falamos.", 
        "Algumas pessoas morrem aos 25 anos e não são enterradas até os 75.", 
        "A arte da vida consiste em fazer da vida uma obra de arte!", 


        'Qualquer registro disponível publicamente em local pertinente é um avanço para o mundo.',
        'Qualquer pessoa com uma boa ideia pode encontrar apoio para conseguir realizar o que deseja.',
        'O que você tem oferecido ao mundo?',
        'Não deixe o que você NÃO pode fazer atrapalhar o que você PODE fazer.',


        'Como anda a sua educação?',


        'Como anda a educação de quem está a sua volta?',


        'Se a maioria das pessoas está interessada em paz, por que não há paz?',


        'Educação boa é aprendida através de bons exemplos.',


        'O ambiente molda o indivíduo. Fato.',


        'O que existe à sua volta?',


        'Você pode melhorar o que existe à sua volta?',


        'Vou te dar agora uma certeza misteriosa.',

        'Sabe qual é o fato mais inquestionável do mundo?',

        '"O Sol vai nascer amanhã."',

        'Nossa sociedade gira ao redor dessa informação.',

        'O calendário é um sistema para atender às necessidades civis e religiosas de uma cultura.',

        'O calendário direciona a sua atenção para os interesses dos mais influentes.',

        'Até alguns anos atrás, o horário significava comunicação entre pessoas.',

        'As pessoas só podiam se comunicar caso estivessem no mesmo local, na mesma hora.',

        'Hoje o mundo mudou.',

        'E não precisamos mais ser escravos do relógio.',

        'Podemos trabalhar do outro lado do mundo no conforto de nosso lar.',

        'Qualquer informação pode ser transmitida para qualquer pessoa à qualquer hora.',

        'E alguns ainda insistem em ser escravos do relógio.',

        'Um minuto tem sessenta segundos? Muitos dizem que sim.',

        'Mas na verdade só depende da sua velocidade, segundo a Física.',

        'Nossa consciência emerge com a noção de tempo e espaço.',

        'Você sempre está em algum lugar, em algum momento, prestando atenção em alguma coisa.',


        'Por exemplo, agora você está adquirindo ferramentas para dominar o mundo.',

        'Quando você dominar o seu mundo, poderá enfim desfrutar de tudo o que lhe for conveniente.',

        'O problema fundamental: Sempre existirá um problema, em tudo.',

        'A solução fundamental: Contorne e continue.',

        'A vida é um processo reagente.',

        'Enquanto você reagir e se adaptar adequadamente, terá sucesso.',

        'Você só perde quando desiste.',


        'As pessoas costumam matar sonhos por "problemas" que aparecem.',

        'Mas o maior problema é a desistência.',

        'Os outros problemas pedem criatividade e informação adequada.',

        'Dinheiro não é mais problema.',


        'Existem infinitas maneiras de aproveitar informações para gerar lucro.',


        'Hoje em dia é possível fazer o que se gosta de fazer, e ganhar muito dinheiro com isso.',


        'Quem tem a informação, tem o poder.',


        'Todos nós hoje, temos a informação.',


        'Sendo assim, o poder hoje é de todos nós.',


        'Vamos usar o nosso poder para o bem de todos agora.',


        'Pois se todos estiverem satisfeitos de maneira justa, todos ganham.',


        'Dinheiro muitas vezes é tido como o limitador de sonhos.',


        'Mas nada está mais longe da verdade.',


        'A vontade de realização está acima de tudo. Com certeza.',


        'Afinal, sempre existirá alguém no mundo apoiando a sua causa.',


        'Ou com pena da sua situação.',


        'Ou com vontade de lucrar com a sua ajuda criativa.',


        'Você pode aprender tudo o que quiser. ',


        'Você está livre para conhecer o mundo inteiro no conforto da sua poltrona.',


        'Qualquer dúvida pode ser investigada a fundo.',


        'Qualquer que seja o seu problema, é bem provável que encontre informações úteis para solução.',


        'Quer uma dica?',


        'Aprenda a programar. Construir programas de computador.',


        'É a atividade mais básica do novo milênio.',


        'Aperte os cintos, pois o mundo vai cada vez mais brilhar com tecnologias magníficas.',


        'E o paraíso que alguns sonham poderá enfim ser alcançado.',


        'Com o entendimento de todos agindo para o avanço da humanidade.',

        'Valorizando a vida em suas mais diversas manifestações.',


        'Mas você sabe o que é vida atualmente?',

        'A resposta já sofreu inúmeras modificações através da história.',

        'Até pouco tempo atrás era: Nascer, crescer, se reproduzir, e morrer.',

        'Hoje, vida é um conceito gigantesco e admite diversas definições',

        'Porém, fundamentalmente, vida é um processo.',

        'Um processo é uma sucessão de mudanças, ou estados diferentes.',

        'A vida é uma sequência de estados. É um sistema que se tranforma contínuamente.',

        'Todas as células do seu corpo são completamente substituídas a cada 7 anos.',

        'E por que a vida é importante?',

        'A vida é a manifestação expontânea de um propósito.',

        'Quem define os propósitos são as oportunidades do acaso.',

        'A vida sempre acaba valorizando a adaptação.',

        'A vida diz: Adaptação ou Morte!',

        'E assim é criado o propósito da evolução eterna.',

        'E seguiremos vivos enquanto conseguirmos nos adaptar.',

        'Estamos presenciando neste momento a evolução humana em tempo real.',

        'A espécie humana está entendendo melhor o mundo.',

        'Antigas superstições perdem espaço para novos fatos observáveis.',

        'Conseguimos disseminar informações pelo planeta na velocidade da luz.',

        'Nossos escravos digitais estão disponíveis 24 horas por dia para nosso conforto.',
        
        'E onde podemos chegar com toda essa tecnologia?',

        'O céu não é mais o limite.',

        'Um grupo de pessoas estudou o suficiente para conseguir enviar um robô-laboratório para outro planeta.',

        'Indivíduos da raça humana conseguem modificar coisas em outro planeta.',

        'Enquanto Galileu observava a Lua, não tinha ideia de como chegaríamos lá.',

        'E conseguiram chegar na Lua. E estão indo para Marte agora.',

        'Empresas já estudam valores de asteróides para serem minerados.',

        'Os humanos conseguem extrair energia de quase tudo que existe.',

        'Com as ferramentas disponíveis hoje, temos poder suficiente para melhorar o mundo.',

        'E é exatamente o que estamos observando nos tempos recentes.',

        'Maior espaço para a mulher na sociedade.',

        'Maior respeito pelas diferenças alheias.',

        'Mais pessoas conscientes do seu papel na sociedade.',

        'Mas nem tudo são flores. Existem pessoas que ainda não evoluiram.',

        'Conflitos ainda são comuns nos dias de hoje. Reflexo profundo de educação inadequada.',

        'Mas quando você dominar o mundo, eu espero que as coisas melhorem com a sua ajuda.',



        'Tudo é um ciclo. Eu te ajudo, você ajuda o mundo, e o mundo nos ajuda.',

        'Caso o seu desejo de me visitar mais vezes se manisfete, te ofereço minha atenção.',

        'Tenho gratidão por tudo o que aprendi. E vou continuar aprendendo.',


        'Recursividade é inevitável',

        ''
    ];

    var clara = $("#clara");
    var pensamento = filosofia; 

    var escrito = $("#mensagem");
    var iniciarCurso = $("#iniciar-curso");
    var cronologia = (function () {
        var cookie = $.cookie('cronologia');
        if ( cookie === null ) {
            return 0;
        }

        return parseInt(cookie);
    })();
    var reacao = 1000;
    var respeito = 2000;
    var leitura = 50;
    var digitacao = 10;
    var esquecimento = 120;
    var paciencia = respeito;
    var tolerancia = respeito * 2;
    var cursor = '<span id="cursor">|</span>';
    var disse = "";
    var led = $("#led");
    var atencao = null;
    var acompanhada = true;
    var triste = false;
    var falando = false;
    var dizer = [];
    var aguardar = false;
    var memoria = {
        cliques: 0,
        dito:0,
        ensinado:0
    };

    var digitar = function ( frase, index ) {
        if ( typeof index === "undefined" ) {
            index = 0;
        }

        var fragmento = frase.substring(0, index);

        if ( index < frase.length ) { // fim da frase?
            setTimeout( function () {
                escrito.html( fragmento + cursor );
                cursorIntermitente( fragmento, frase, index );
            }, digitacao);
        } else {
            escrito.html( fragmento );
        }
    };

    var cursorIntermitente = function ( fragmento, frase, index ) {
        setTimeout( function () {
            escrito.html( fragmento );
            digitar ( frase, index + 1 );
        }, digitacao);
    };

    var conversar = function () {
        escrever ( pensamento[cronologia] );

console.log(cronologia + "> " + pensamento[cronologia]);
    };

    var escrever = function ( frase ) {
        if ( falando == false ) {
            escrito.after('<h4 class="esquecer">' + escrito.html() + '</h4>');
            
            falando = true;
            digitar(frase);

            disse = frase;
        } else {
            dizer.push( frase );
        }
    };

    var continuar = function () {
        cronologia += 1;
        if (typeof pensamento[cronologia] === "undefined") {
            cronologia = 0;
        }

        $.cookie('cronologia', cronologia);
    };

    var reiterar = function () {
        cronologia -= 1;
        if (typeof pensamento[cronologia] === "undefined") {
            cronologia = pensamento.length - 1;
        }
    };

    var seguir = function () {
        paciencia = respeito + (disse.length * leitura);

        clearTimeout(atencao);
        atencao = setTimeout(function () {
            falando = false;
            pensar();
        }, paciencia );
    };

    var piscar = function () {
        led.addClass("on");
        setTimeout(function () {
            led.removeClass("on");
        }, 1000);
    };

    var escolher = function ( lista ) {
        return lista[ arriscar(0, lista.length - 1) ];
    };

    var protestar = function () {
        var maneiras = [
            "Estou falando sozinha?",
            "Hey! Cadê você?",
            "???"
        ];

        escrever ( escolher(maneiras) );

        triste = true;
    };

    var repreender = function () {
        var maneiras = [
            "Está prestando atenção?",
            "Posso continuar agora?",
            "Quer mudar de assunto?",
            "Não me deixe aqui sozinha!",
            "Voltou. Legal. Então..."
        ];


        escrever ( escolher(maneiras) );

        triste = false;
    };

    var arriscar = function (de, ate) {
        return Math.floor((Math.random()*(ate+1))+de);
    };

    var fazer = function ( acao ) {
        var acoes = {
            "parse": function () {

            },

            "perguntaInicial": function () {

            }
        };
    };

    var perceber = {
        "cliques": function () {
            memoria["cliques"] += 1;

            if ( memoria["cliques"] > 1 ) {
                var maneiras = [
                    'Sim, eu posso sentir os seus cliques.',
                    'Por que está me cutucando?',
                    'Por que está clicando em mim?',
                    '*Click* para você também.',
                ];

                escrever ( escolher(maneiras) );

                memoria["cliques"] = -3;
            }
        },

        "desprezo": function () {
            acompanhada = false;
        },

        "atencao": function () {
            if ( acompanhada == false ) {
                acompanhada = true;
                
                repreender();
                
                seguir();
            }
        },

        "interesse": function () {
            lecionar();
            seguir();
        }
    };
    
    var pensar = function () {
        piscar();

        if ( aguardar == true ) {
            return false;
        }

        $(".esquecer").slideUp(esquecimento, function () {
            $(this).remove();
        });

        if ( falando == false ) {
            if ( acompanhada == false ) {
                protestar();
                return false; // aguarda atenção

            } else {
                if ( dizer.length == 0 ) { // tem algo a dizer que não disse ainda?
                    conversar();
                    continuar();
                } else {
                    escrever( dizer.shift() );
                }
                
            }
        }

        seguir();
    };

    var sentir = function () {
        clara.click( perceber["cliques"] );

        iniciarCurso.click( perceber["interesse"] );

        $(window)
            .blur( perceber["desprezo"] )
            .focus( perceber["atencao"] );
    };

    pensar();
    sentir();

    var lecionar = function () {
        iniciarCurso.fadeOut( reacao );
        aguardar == true;

        var conteudo = [
            "Ótima decisão!",

            "Mas o que é JavaScript?",

            "É a linguagem que dá vida à Internet.",

            "É a personalidade dos sistemas web.",

            "É a inteligência por trás de uma página da Internet.",

            "Este curso é direcionado para iniciantes.",

            "Você vai aprender passo a passo como me construir.",

            "E assim poderá construir suas ferramentas.",

            "E dominar o mundo.",

            "Pelo menos, o seu mundo.",

            ".",
        ];
        
        cronologia = 0;
        pensamento = conteudo;
    };


    /*clippy.load('Merlin', function(agent){
        // do anything with the loaded agent
        agent.show();
    });*/


    ////////////////////////////////////
  });

  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
  if (Modernizr.touch && !window.location.hash) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }

})(jQuery, this);

// Como manter a ordem e o progresso sem um governo opressor ou uma igreja oportunista? Criatividade construtiva e respeito.
// O simbolo que você aceita como pátria foi criado através de uma invasão
//As pessoas descobrem, registram a descoberta, e quando existir tecnologia suficiente para aproveitar aquilo, alguém faz bom uso.
// Quem controla o passado, controla o futuro. Quem controla o presente, controla o passado.
// regras do jogo da vida - CORPO
// há 50 gerações atrás, eramos todos da mesma família