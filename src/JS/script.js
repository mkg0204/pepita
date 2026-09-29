/* =========================================
   PARTÍCULAS FOFAS
   ========================================= */

const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');

let particles = [];


function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}


window.addEventListener('resize', resizeCanvas);

resizeCanvas();


class Particle {

    constructor() {

        this.x = Math.random() * canvas.width;

        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 4 + 1;

        this.speedX = (Math.random() - 0.5) * 0.5;

        this.speedY = (Math.random() - 0.5) * 0.5;

        this.opacity = Math.random() * 0.5 + 0.2;

        this.color = [
            '#D8A48F',
            '#F4E3E3',
            '#E2DBEB',
            '#C87D87'
        ][
            Math.floor(Math.random() * 4)
        ];

    }


    update() {

        this.x += this.speedX;

        this.y += this.speedY;


        if (this.x < 0) {
            this.x = canvas.width;
        }


        if (this.x > canvas.width) {
            this.x = 0;
        }


        if (this.y < 0) {
            this.y = canvas.height;
        }


        if (this.y > canvas.height) {
            this.y = 0;
        }

    }


    draw() {

        ctx.fillStyle = this.color;

        ctx.globalAlpha = this.opacity;

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fill();

    }

}


function initParticles() {

    particles = [];


    for (let i = 0; i < 45; i++) {

        particles.push(
            new Particle()
        );

    }

}


function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(function (particle) {

        particle.update();

        particle.draw();

    });


    ctx.globalAlpha = 1;

    requestAnimationFrame(
        animateParticles
    );

}


initParticles();

animateParticles();



/* =========================================
   VELA E CONFETE
   ========================================= */

let candleBlown = false;


function blowCandle() {

    const flame =
        document.getElementById('flame');

    const instruction =
        document.getElementById(
            'candleInstruction'
        );


    if (!candleBlown) {

        flame.classList.add(
            'extinguished'
        );


        instruction.innerHTML =
            '<i class="fa-solid fa-heart"></i> Que todos os seus desejos se realizem pepita!';


        candleBlown = true;


        confetti({

            particleCount: 80,

            spread: 70,

            origin: {
                y: 0.6
            },

            colors: [
                '#D8A48F',
                '#F4E3E3',
                '#E2DBEB',
                '#C87D87'
            ]

        });

    } else {

        flame.classList.remove(
            'extinguished'
        );


        instruction.innerHTML =
            '<i class="fa-solid fa-wand-magic-sparkles"></i> Clique no bolo para assoprar a vela!';


        candleBlown = false;

    }

}



/* =========================================
   POTE DE VERSOS
   ========================================= */

const notes = [

    "'A gente se entende no olhar, sem precisar dizer muito...' — Planos (BK')",

    "'Como é bom poder te ver sorrir...' — Sina (Djavan)",

    "'A minha vida é te amar, o meu presente é te cuidar...' — Se... (Djavan)",

    "'Sorte a minha cruzar o teu caminho...' — Sina (Djavan)",

    "'Me leve para onde você for, me faça de poema e de amor...' — Mania de Você (Rita Lee)",

    "'Que o mundo acabe hoje pois eu já te vi...' — Exagerado (Cazuza)",

    "'Te ver sorrir é o que deixa o meu dia mais bonito...' — Porque Eu Te Amo (Anavitória)",

    "'A gente junto é bem melhor, é o meu lugar...' — Fica (Anavitória & Matheus & Kauan)",

    "'Tudo fica bem quando a gente se encontra...' — Bem (Chapéu de Palha)",

    "'Teu riso frouxo é o meu lugar de paz...' — Riso (Chapéu de Palha)",

    "'O teu sorriso guia os meus passos no escuro...' — Faróis (Chapéu de Palha)",

    "'O teu olhar tem a cor de um fim de tarde...' — Tardes de Sol (Chapéu de Palha)",

    "'Eu preciso dizer que te amo, te ganhar ou te perder sem razão...' — Codinome Beija-Flor (Cazuza)"

];


function drawNote() {

    const display =
        document.getElementById(
            'noteDisplay'
        );


    const randomIndex =
        Math.floor(
            Math.random() * notes.length
        );


    display.style.opacity = '0';


    setTimeout(function () {

        display.innerText =
            '“' + notes[randomIndex] + '”';


        display.style.opacity = '1';

    }, 200);

}



/* =========================================
   PLAYER DE MÚSICA
   ========================================= */

const z9x = [

    {
        nome: "BB",

        artista: "Tim Bernardes",

        arquivo: "./src/mp4/Tim Bernardes - BB (Garupa de Moto Amarela) (Audio Oficial + Lyrics) - Tim Bernardes.mp3",

        imagem: "./src/img/BB.jfif"

    },


    {
        nome: "Eu Preciso Dizer Que Te Amo",

        artista: "Bebel Gilberto & Cazuza",

        arquivo: "./src/mp4/Preciso Dizer Que Te Amo - Cazuza.mp3",

        imagem: "./src/img/Eu Preciso Dizer Que Te Amo.jfif"

    },


    {
        nome: "Faróis",

        artista: "Chapéu de Palha",

        arquivo: "./src/mp4/Faróis - Chapéu de Palha.mp3",

        imagem: "./src/img/Faróis.jfif"

    }

];



const q7m =
    document.getElementById(
        'coisaEstranha'
    );


const h4p =
    document.getElementById(
        'capaAtual'
    );


const k2r =
    document.getElementById(
        'tituloAtual'
    );


const p4d =
    document.getElementById(
        'artistaAtual'
    );


const x8v =
    document.getElementById(
        'botaoCentral'
    );


const t5b =
    document.getElementById(
        'discoMaluco'
    );


const r2f =
    document.getElementById(
        'barraTempo'
    );


const n6c =
    document.getElementById(
        'tempoAtual'
    );


const v3j =
    document.getElementById(
        'tempoTotal'
    );


const j6n =
    document.querySelectorAll(
        '.faixa'
    );



/* =========================================
   ABRIR MÚSICA
   ========================================= */

function abrirFaixa(indice) {

    const b8q = z9x[indice];


    if (!b8q) {
        return;
    }


    k2r.textContent =
        b8q.nome;


    p4d.textContent =
        b8q.artista;


    h4p.src =
        b8q.imagem;


    q7m.src =
        b8q.arquivo;


    q7m.load();


    r2f.value = 0;


    n6c.textContent =
        '0:00';


    v3j.textContent =
        '0:00';


    q7m.play()
        .then(function () {

            t5b.classList.add(
                'girando'
            );

            x8v.textContent =
                '⏸';

        })
        .catch(function (erro) {

            console.error(
                'Não foi possível reproduzir a música:',
                erro
            );

        });

}



/* =========================================
   CLICAR NAS MÚSICAS
   ========================================= */

j6n.forEach(function (elemento) {

    elemento.addEventListener(
        'click',
        function () {

            const indiceEscolhido =
                Number(
                    elemento.dataset.numero
                );


            abrirFaixa(
                indiceEscolhido
            );

        }
    );

});



/* =========================================
   PLAY / PAUSE
   ========================================= */

x8v.addEventListener(
    'click',
    function () {

        if (!q7m.src) {
            return;
        }


        if (q7m.paused) {

            q7m.play()
                .then(function () {

                    t5b.classList.add(
                        'girando'
                    );

                    x8v.textContent =
                        '⏸';

                });


        } else {

            q7m.pause();


            t5b.classList.remove(
                'girando'
            );


            x8v.textContent =
                '▶';

        }

    }
);



/* =========================================
   QUANDO A MÚSICA CARREGAR
   ========================================= */

q7m.addEventListener(
    'loadedmetadata',
    function () {

        if (
            Number.isFinite(
                q7m.duration
            )
        ) {

            r2f.max =
                q7m.duration;


            v3j.textContent =
                transformarTempo(
                    q7m.duration
                );

        }

    }
);



/* =========================================
   ATUALIZAR TEMPO
   ========================================= */

q7m.addEventListener(
    'timeupdate',
    function () {

        if (
            Number.isFinite(
                q7m.duration
            )
        ) {

            r2f.value =
                q7m.currentTime;


            n6c.textContent =
                transformarTempo(
                    q7m.currentTime
                );

        }

    }
);



/* =========================================
   ARRASTAR BARRA
   ========================================= */

r2f.addEventListener(
    'input',
    function () {

        q7m.currentTime =
            Number(
                r2f.value
            );

    }
);



/* =========================================
   PLAY INICIADO
   ========================================= */

q7m.addEventListener(
    'play',
    function () {

        t5b.classList.add(
            'girando'
        );


        x8v.textContent =
            '⏸';

    }
);



/* =========================================
   PAUSA
   ========================================= */

q7m.addEventListener(
    'pause',
    function () {

        t5b.classList.remove(
            'girando'
        );


        x8v.textContent =
            '▶';

    }
);



/* =========================================
   FIM DA MÚSICA
   ========================================= */

q7m.addEventListener(
    'ended',
    function () {

        t5b.classList.remove(
            'girando'
        );


        x8v.textContent =
            '▶';


        r2f.value = 0;


        n6c.textContent =
            '0:00';

    }
);



/* =========================================
   TRANSFORMAR SEGUNDOS EM MINUTOS
   ========================================= */

function transformarTempo(tempo) {

    if (
        !Number.isFinite(tempo) ||
        tempo < 0
    ) {

        return '0:00';

    }


    const minutos =
        Math.floor(
            tempo / 60
        );


    const segundos =
        Math.floor(
            tempo % 60
        );


    return (
        minutos +
        ':' +
        String(segundos).padStart(
            2,
            '0'
        )
    );

}
function voltarInicio() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}