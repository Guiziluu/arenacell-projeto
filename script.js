// ============================================================
// ARENACELL - CATÁLOGO DE PREÇOS
// ============================================================
// Firebase Realtime Database + LocalStorage
// ============================================================


// ============================================================
// FIREBASE
// ============================================================

const FIREBASE_ATIVO = true;

const firebaseConfig = {
    apiKey: "AIzaSyBkjKtYAy3qVeZNcf2IX-KkUqbJvCDUT6c",
    authDomain: "arenacell-86c1b.firebaseapp.com",
    databaseURL: "https://arenacell-86c1b-default-rtdb.firebaseio.com/",
    projectId: "arenacell-86c1b",
    storageBucket: "arenacell-86c1b.firebasestorage.app",
    messagingSenderId: "902501484232",
    appId: "1:902501484232:web:317c5ce9c38e88d3c1c7fd"
};


// ============================================================
// VARIÁVEIS
// ============================================================

let db = null;

let firebaseRef = null;
let firebaseSet = null;
let firebaseGet = null;


// ============================================================
// INICIALIZAR FIREBASE
// ============================================================

async function iniciarFirebase() {

    if (!FIREBASE_ATIVO) {

        console.log(
            "Firebase desativado. Usando LocalStorage."
        );

        return false;
    }


    try {

        const firebaseApp = await import(
            "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"
        );


        const firebaseDatabase = await import(
            "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js"
        );


        const app = firebaseApp.initializeApp(
            firebaseConfig
        );


        db = firebaseDatabase.getDatabase(
            app
        );


        firebaseRef =
            firebaseDatabase.ref;


        firebaseSet =
            firebaseDatabase.set;


        firebaseGet =
            firebaseDatabase.get;


        console.log(
            "Firebase conectado com sucesso!"
        );


        return true;


    } catch (erro) {

        console.error(
            "Erro ao conectar ao Firebase:",
            erro
        );


        console.warn(
            "O sistema continuará funcionando com LocalStorage."
        );


        db = null;

        return false;
    }
}


// ============================================================
// LISTA DE MODELOS
// ============================================================
const celulares = {

    iphone: [
        "iPhone 6",
        "iPhone 6 Plus",
        "iPhone 6s",
        "iPhone 6s Plus",
        "iPhone 7",
        "iPhone 7 Plus",
        "iPhone 8",
        "iPhone 8 Plus",
        "iPhone X/XS",
        "iPhone XR",
        "iPhone XS Max",
        "iPhone 11",
        "iPhone 11 Pro",
        "iPhone 11 Pro Max",
        "iPhone SE (2020)",
        "iPhone SE (2022)",
        "iPhone 12 Mini",
        "iPhone 12",
        "iPhone 12 Pro",
        "iPhone 12 Pro Max",
        "iPhone 13 Mini",
        "iPhone 13",
        "iPhone 13 Pro",
        "iPhone 13 Pro Max",
        "iPhone 14",
        "iPhone 14 Plus",
        "iPhone 14 Pro",
        "iPhone 14 Pro Max",
        "iPhone 15",
        "iPhone 15 Plus",
        "iPhone 15 Pro",
        "iPhone 15 Pro Max",
        "iPhone 16",
        "iPhone 16 Plus",
        "iPhone 16 Pro",
        "iPhone 16 Pro Max",
        "iPhone 16e",
        "iPhone 17",
        "iPhone 17 Pro",
        "iPhone 17 Pro Max",
        "iPhone Air",
    ],

    samsung: [
        "Galaxy A01","Galaxy A01 Core",
        "Galaxy A02","Galaxy A02s",
        "Galaxy A03","Galaxy A03s","Galaxy A03 Core",
        "Galaxy A04","Galaxy A04s",
        "Galaxy A05", "Galaxy A05s",
        "Galaxy A06",
        "Galaxy A10","Galaxy A10s",
        "Galaxy A11",
        "Galaxy A12",
        "Galaxy A13",
        "Galaxy A14",
        "Galaxy A15",
        "Galaxy A16",
        "Galaxy A20","Galaxy A20e", "Galaxy A20s",
        "Galaxy A21","Galaxy A21s",
        "Galaxy A22",
        "Galaxy A23",
        "Galaxy A24",
        "Galaxy A25",
        "Galaxy A30","Galaxy A30s",
        "Galaxy A31",
        "Galaxy A32",
        "Galaxy A33",
        "Galaxy A34",
        "Galaxy A35",
        "Galaxy A36",
        "Galaxy A37",
        "Galaxy A40",
        "Galaxy A41",
        "Galaxy A42",
        "Galaxy A50",
        "Galaxy A51",
        "Galaxy A52","Galaxy A52s",
        "Galaxy A53",
        "Galaxy A54",
        "Galaxy A55",
        "Galaxy A56",
        "Galaxy A70",
        "Galaxy A71",
        "Galaxy A72",
        "Galaxy A73",
        "Galaxy S20",
        "Galaxy S20+",
        "Galaxy S20 Ultra", "Galaxy S20 FE",
        "Galaxy S21","Galaxy S21+","Galaxy S21 Ultra","Galaxy S21 FE",
        "Galaxy S22","Galaxy S22+","Galaxy S22 Ultra",
        "Galaxy S23","Galaxy S23+","Galaxy S23 Ultra","Galaxy S23 FE",
        "Galaxy S24","Galaxy S24 FE","Galaxy S24+", "Galaxy S24 Ultra",
        "Galaxy S25+","Galaxy S25","Galaxy S25 FE","Galaxy S25 Ultra","Galaxy S25 Edge",
        "Galaxy S26", "Galaxy S26+","Galaxy S26 Ultra"
    ],

    motorola: [
        "Moto G4","Moto G4 Plus",
        "Moto G5","Moto G5 Plus","Moto G5S","Moto G5S Plus",
        "Moto G6","Moto G6 Plus","Moto G6 Play",
        "Moto G7","Moto G7 Play", "Moto G7 Power","Moto G7 Plus",
        "Moto G8","Moto G8 Play","Moto G8 Power","Moto G8 Plus",
        "Moto G9","Moto G9 Play","Moto G9 Power","Moto G9 Plus",
        "Moto G10","Moto G10 Power",
        "Moto G13",
        "Moto G14",
        "Moto G15",
        "Moto G20",
        "Moto G22",
        "Moto G23",
        "Moto G24","Moto G24 Power",
        "Moto G30",
        "Moto G31",
        "Moto G32",
        "Moto G34",
        "Moto G35",
        "Moto G40","Moto G40 Fusion",
        "Moto G41",
        "Moto G45",
        "Moto G50",
        "Moto G51",
        "Moto G52",
        "Moto G53",
        "Moto G54",
        "Moto G55",
        "Moto G56",
        "Moto G60","Moto G60s",
        "Moto G62",
        "Moto G64",
        "Moto G71",
        "Moto G72",
        "Moto G73",
        "Moto G75",
        "Moto G82",
        "Moto G84",
        "Moto G85",
        "Moto G86",
        "Moto G100",
        "Moto G200",
        "Moto E4",
        "Moto E5",
        "Moto E6",
        "Moto E7","Moto E7 Plus",
        "Moto E13",
        "Moto E20",
        "Moto E30",
        "Moto E40",
        "Moto One",
        "Moto One Vision",
        "Moto One Action",
        "Moto One Macro",
        "Moto One Fusion",
        "Moto One Hyper",
        "Moto Edge","Moto Edge+",
        "Moto Edge 20","Moto Edge 20 Lite","Moto Edge 20 Pro",
        "Moto Edge 30","Moto Edge 30 Neo","Moto Edge 30 Pro","Moto Edge 30 Fusion",
        "Moto Edge 40","Moto Edge 40 Neo","Moto Edge 40 Pro",
        "Moto Edge 50","Moto Edge 50 Fusion","Moto Edge 50 Pro","Moto Edge 50 Ultra",
        "Moto Edge 60 Neo","Moto Edge 60 Pro","Moto Edge 60"
    ],

    xiaomi: [
        "Mi 9T",
        "Xiaomi 12","Xiaomi 12T",
        "Xiaomi 13T","Xiaomi 13 Pro",
        "Xiaomi 14","Xiaomi 14 Ultra","Xiaomi 14T",
        "Redmi Note 7",
        "Redmi Note 8","Redmi Note 8 Pro",
        "Redmi Note 9","Redmi Note 9S","Redmi Note 9 Pro",
        "Redmi Note 10","Redmi Note 10 Pro","Redmi Note 10S",
        "Redmi Note 11","Redmi Note 11 Pro","Redmi Note 11S",
        "Redmi Note 12","Redmi Note 12 Pro","Redmi Note 12S",
        "Redmi Note 13","Redmi Note 13 Pro", "Redmi Note 13 Pro+",
        "Redmi Note 14","Redmi Note 14 Pro","Redmi Note 14 Pro+","Redmi Note 14S",
        "Redmi Note 15","Redmi Note 15 Pro","Redmi Note 15 Pro+",
        "Redmi A1",
        "Redmi A2","Redmi A2 Lite",
        "Redmi A3",
        "Redmi 9","Redmi 9A","Redmi 9C",
        "Redmi 10","Redmi 10C",
        "Redmi 12","Redmi 12C",
        "Redmi 13","Redmi 13C",
        "Redmi 14C",
        "Redmi 15","Redmi 15C",
        "POCO F1",
        "POCO F2 Pro",
        "POCO F3",
        "POCO F4","POCO F4 GT",
        "POCO F5","POCO F5 Pro",
        "POCO F6","POCO F6 Pro",
        "POCO F7",
        "POCO X2",
        "POCO X3","POCO X3 NFC","POCO X3 Pro",
        "POCO X4 Pro","POCO X4 GT",
        "POCO X5","POCO X5 Pro",
        "POCO X6","POCO X6 Pro",
        "POCO X7","POCO X7 Pro",
        "POCO M2",
        "POCO M3",
        "POCO M4","POCO M4 Pro",
        "POCO M5","POCO M5s",
        "POCO M6","POCO M6 Pro",
        "POCO M7","POCO M7 Pro",
    ],

    realme: [
        "Realme 5","Realme 5 Pro",
        "Realme 6","Realme 6 Pro",
        "Realme 7","Realme 7 Pro",
        "Realme 8","Realme 8i", "Realme 8 Pro",
        "Realme 9","Realme 9 Pro","Realme 9 Pro+","Realme 9i",
        "Realme 10","Realme 10 Pro","Realme 10 Pro+",
        "Realme 11","Realme 11x","Realme 11 Pro","Realme 11 Pro+",
        "Realme 12","Realme 12+","Realme 12 Pro","Realme 12 Pro+",
        "Realme 13","Realme 13 Pro","Realme 13 Pro+","Realme 13+",
        "Realme 14","Realme 14 Pro", "Realme 14 Pro+",
        "Realme GT","Realme GT Neo",
        "Realme GT 2",
        "Realme GT Neo 2","Realme GT 2 Pro",
        "Realme GT 3",
        "Realme GT 5",
        "Realme GT 6","Realme GT 6T",
        "Realme GT 7","Realme GT 7T",
        "Realme Narzo 20",
        "Realme Narzo 30",
        "Realme Narzo 50",
        "Realme C11",
        "Realme C21",
        "Realme C25",
        "Realme C30",
        "Realme C30s",
        "Realme C31",
        "Realme C35",
        "Realme C33",
        "Realme C51",
        "Realme C53",
        "Realme C55",
        "Realme C67",
        "Realme C75"
    ],

    oppo: [
        "Oppo Reno 2","Oppo Reno 2Z",
        "Oppo Reno 3","Oppo Reno 3A", "Oppo Reno 3 Pro",
        "Oppo Reno 4","Oppo Reno 4Z","Oppo Reno 4 Pro",
        "Oppo Reno 5","Oppo Reno 5Z","Oppo Reno 5 Pro",
        "Oppo Reno 6","Oppo Reno 6Z","Oppo Reno 6 Pro",
        "Oppo Reno 7","Oppo Reno 7Z","Oppo Reno 7 Pro",
        "Oppo Reno 8","Oppo Reno 8T","Oppo Reno 8 Pro",
        "Oppo Reno 9","Oppo Reno 9A","Oppo Reno 9 Pro",
        "Oppo Reno 10","Oppo Reno 10 Pro","Oppo Reno 10 Pro+",
        "Oppo Reno 11","Oppo Reno 11 Pro",
        "Oppo Reno 12","Oppo Reno 12 Pro",
        "Oppo Reno 13","Oppo Reno 13 Pro",
        "Oppo Reno 14","Oppo Reno 14 Pro",
        "Oppo Find X",
        "Oppo Find X2","Oppo Find X2 Pro",
        "Oppo Find X3","Oppo Find X3 Pro",
        "Oppo Find X5","Oppo Find X5 Pro",
        "Oppo Find X6","Oppo Find X6 Pro",
        "Oppo Find X7","Oppo Find X7 Ultra",
        "Oppo Find X8","Oppo Find X8 Pro",
        "Oppo A3","Oppo A3 Pro","Oppo A3x",
        "Oppo A5","Oppo A5 Pro",
        "Oppo A6","Oppo A6x","Oppo A6s","Oppo A6t",
        "Oppo A9 2020",
        "Oppo A12",
        "Oppo A15","Oppo A15s",
        "Oppo A16","Oppo A16s",
        "Oppo A17","Oppo A17k",
        "Oppo A18",
        "Oppo A31",
        "Oppo A35",
        "Oppo A38",
        "Oppo A52",
        "Oppo A53",
        "Oppo A54",
        "Oppo A55",
        "Oppo A57",
        "Oppo A58",
        "Oppo A60",
        "Oppo A74",
        "Oppo A76",
        "Oppo A77",
        "Oppo A78",
        "Oppo A79",
        "Oppo A96",
    ],

    infinix: [
        "Infinix Smart 4","Infinix Smart 5","Infinix Smart 6","Infinix Smart 6 Plus",
        "Infinix Smart 7","Infinix Smart 8","Infinix Smart 8 Plus","Infinix Smart 9","Infinix Smart 10",
        "Infinix Hot 8","Infinix Hot 9","Infinix Hot 9 Play",
        "Infinix Hot 10","Infinix Hot 10 Play","Infinix Hot 10S","Infinix Hot 10i",
        "Infinix Hot 11","Infinix Hot 11S","Infinix Hot 11 Play",
        "Infinix Hot 12","Infinix Hot 12 Play","Infinix Hot 12i",
        "Infinix Hot 20","Infinix Hot 20S","Infinix Hot 20i","Infinix Hot 20 Play",
        "Infinix Hot 30","Infinix Hot 30i","Infinix Hot 30 Play",
        "Infinix Hot 40","Infinix Hot 40i","Infinix Hot 40 Pro",
        "Infinix Hot 50","Infinix Hot 50i","Infinix Hot 50 Pro",
        "Infinix Hot 60","Infinix Hot 60i","Infinix Hot 60 Pro",
        "Infinix Note 7","Infinix Note 8","Infinix Note 10","Infinix Note 10 Pro",
        "Infinix Note 11","Infinix Note 11 Pro","Infinix Note 12","Infinix Note 12 Pro",
        "Infinix Note 30","Infinix Note 30 Pro","Infinix Note 40","Infinix Note 40 Pro",
        "Infinix Note 50","Infinix Note 50 Pro",
        "Infinix Zero 5G","Infinix Zero 20","Infinix Zero 30","Infinix Zero 40",
        "Infinix GT 10 Pro","Infinix GT 20 Pro","Infinix GT 30 Pro",
    ]
};




// ============================================================
// MARCAS E PEÇAS
// ============================================================
//
// Para adicionar ou remover uma peça, edite apenas as listas abaixo.
// O "id" é o nome usado para salvar o preço (não altere os ids já
// existentes, senão os preços salvos deixam de aparecer).
//
// ============================================================

const NOMES_MARCAS = {
    iphone: "iPhone",
    samsung: "Samsung",
    motorola: "Motorola",
    xiaomi: "Xiaomi",
    realme: "Realme",
    infinix: "Infinix",
    oppo: "OPPO"
};


// Peças de todas as marcas (na ordem em que aparecem na tabela).
// Quando tem "soMarcas", a peça aparece apenas nessas marcas.
const PECAS_COMUNS = [
    { id: "frontal",       nome: "Frontal" },
    { id: "tampa",         nome: "Tampa" },
    { id: "bateria",       nome: "Bateria" },
    { id: "placa",         nome: "Placa de carga" },
    { id: "fpc",           nome: "FPC" },
    { id: "flexVolume",    nome: "Flex volume e power" },
    { id: "flexMain",      nome: "Flex main" },
    { id: "inducao",       nome: "Indução" },
    { id: "gaveta",        nome: "Gaveta de chip" },
    { id: "leitorChip",    nome: "Leitor de chip", soMarcas: ["iphone"] },
    { id: "auricular",     nome: "Auricular", soMarcas: ["iphone"] },
    { id: "altoFalante",   nome: "Alto-falante" },
    { id: "cameraTraseira", nome: "Câmera traseira" },
    { id: "cameraFrontal", nome: "Câmera frontal" },
    { id: "limpeza",       nome: "Limpeza" }
];


// Peças que existem só em algumas marcas
// (aparecem antes de "Limpeza", que é sempre a última coluna)
const PECAS_EXTRAS = {
    iphone: [
        { id: "flexFaceId", nome: "Flex Face ID" },
        { id: "flexHome",   nome: "Flex Home" }
    ]
};


// Peças que NÃO existem em uma marca inteira
const PECAS_REMOVIDAS = {
    iphone:   ["fpc"],

    // Auricular é cobrado só nos iPhones
    samsung:  ["auricular"],
    motorola: ["auricular"],
    xiaomi:   ["auricular"],
    realme:   ["auricular"],
    infinix:  ["auricular"],
    oppo:     ["auricular"]
};


// ------------------------------------------------------------
// INDUÇÃO (carregamento sem fio)
// ------------------------------------------------------------
//
// Só os modelos desta lista mostram o campo de indução.
// Nos demais aparece "—". Se faltar algum modelo, é só
// acrescentar o nome (igual ao da lista de modelos) aqui.
//
// ------------------------------------------------------------

const MODELOS_COM_INDUCAO = {

    // iPhone: todos a partir do iPhone 8 (inclui os SE)
    iphone: modelo => !/^iPhone (6|7)( |s|$)/.test(modelo),

    // Samsung: linha S (a linha A não tem indução)
    samsung: modelo => /^Galaxy S\d/.test(modelo),

    motorola: new Set([
        "Moto Edge+",
        "Moto Edge 20 Pro",
        "Moto Edge 30 Pro",
        "Moto Edge 40 Pro",
        "Moto Edge 50 Pro",
        "Moto Edge 50 Ultra",
        "Moto Edge 60 Pro"
    ]),

    xiaomi: new Set([
        "Xiaomi 12",
        "Xiaomi 13 Pro",
        "Xiaomi 14",
        "Xiaomi 14 Ultra"
    ]),

    infinix: new Set([
        "Infinix Note 40 Pro"
    ]),

    oppo: new Set([
        "Oppo Find X3 Pro",
        "Oppo Find X5 Pro",
        "Oppo Find X6 Pro",
        "Oppo Find X7 Ultra",
        "Oppo Find X8",
        "Oppo Find X8 Pro"
    ])

    // Realme: nenhum modelo da lista tem indução
};


function temInducao(marca, modelo) {

    const regra = MODELOS_COM_INDUCAO[marca];

    if (!regra) {
        return false;
    }

    return typeof regra === "function"
        ? regra(modelo)
        : regra.has(modelo);
}


// ------------------------------------------------------------
// PEÇAS QUE EXISTEM SÓ EM ALGUNS MODELOS
// ------------------------------------------------------------
//
// Cada regra recebe o nome do modelo e devolve true se ele TEM a
// peça. Peças sem regra são consideradas presentes em todos os
// modelos. Onde o modelo não tem a peça, a tabela mostra "—", e se
// nenhum modelo da marca tem a peça, a coluna nem aparece.
//
// ------------------------------------------------------------

// iPhones com botão Home (todos os outros têm Face ID)
const IPHONES_COM_HOME = new Set([
    "iPhone 6", "iPhone 6 Plus",
    "iPhone 6s", "iPhone 6s Plus",
    "iPhone 7", "iPhone 7 Plus",
    "iPhone 8", "iPhone 8 Plus",
    "iPhone SE (2020)", "iPhone SE (2022)"
]);


const REGRAS_PECAS = {

    iphone: {
        flexHome:   modelo => IPHONES_COM_HOME.has(modelo),
        flexFaceId: modelo => !IPHONES_COM_HOME.has(modelo),

        // iPhone Air só usa chip virtual (eSIM), sem gaveta
        gaveta:     modelo => modelo !== "iPhone Air",
        leitorChip: modelo => modelo !== "iPhone Air"
    }
};


function temPeca(marca, modelo, pecaId) {

    if (pecaId === "inducao") {
        return temInducao(marca, modelo);
    }

    const regra = REGRAS_PECAS[marca]?.[pecaId];

    return regra ? regra(modelo) : true;
}


// Peças que existem só em certas marcas
const PECAS_SOMENTE_EM = {
    auricular:  ["iphone"],
    leitorChip: ["iphone"]
};


// Nome diferente da peça em uma marca (o id continua o mesmo,
// então os preços já salvos são mantidos)
const NOMES_POR_MARCA = {
    iphone: { placa: "Flex de carga" }
};


function pecasDaMarca(marca) {

    const removidas = [
        ...(PECAS_REMOVIDAS[marca] || []),
        ...Object.keys(PECAS_SOMENTE_EM).filter(
            id => !PECAS_SOMENTE_EM[id].includes(marca)
        )
    ];

    const existeNaMarca = peca =>
        celulares[marca].some(modelo => temPeca(marca, modelo, peca.id));

    const base = PECAS_COMUNS.filter(p =>
        p.id !== "limpeza" &&
        (!p.soMarcas || p.soMarcas.includes(marca)) &&
        !removidas.includes(p.id) &&
        existeNaMarca(p)
    );

    const extras = (PECAS_EXTRAS[marca] || []).filter(existeNaMarca);

    const limpeza = PECAS_COMUNS.find(p => p.id === "limpeza");

    const renomear = peca => ({
        ...peca,
        nome: NOMES_POR_MARCA[marca]?.[peca.id] || peca.nome
    });

    return [...base, ...extras, limpeza].map(renomear);
}


// ============================================================
// LOCALSTORAGE
// ============================================================

function criarChaveLocal(marca, modelo, peca) {

    return `arenacell_${marca}_${modelo}_${peca}`;
}


function salvarPrecoLocal(marca, modelo, peca, valor) {

    try {
        localStorage.setItem(
            criarChaveLocal(marca, modelo, peca),
            valor
        );
    } catch (erro) {
        console.warn("Não foi possível salvar no navegador:", erro);
    }
}


function buscarPrecoLocal(marca, modelo, peca) {

    try {
        return localStorage.getItem(
            criarChaveLocal(marca, modelo, peca)
        ) || "";
    } catch (erro) {
        return "";
    }
}


// ============================================================
// FIREBASE
// ============================================================

// O Firebase não aceita  . # $ [ ] /  nos nomes das chaves.
// (ex.: "iPhone X/XS" criava um caminho dentro de outro caminho).
// Modelos sem esses caracteres continuam com o mesmo nome de antes.

function chaveFirebase(texto) {

    return String(texto).replace(/[.#$\[\]\/]/g, "_");
}


async function salvarPrecoFirebase(marca, modelo, peca, valor) {

    if (!FIREBASE_ATIVO || !db || !firebaseRef || !firebaseSet) {
        return false;
    }

    try {

        const caminho =
            `precos/${chaveFirebase(marca)}/${chaveFirebase(modelo)}/${chaveFirebase(peca)}`;

        await firebaseSet(firebaseRef(db, caminho), valor);

        return true;

    } catch (erro) {

        console.error("Erro ao salvar preço no Firebase:", erro);

        return false;
    }
}


// Uma única consulta por marca: precos/iphone, precos/samsung...

async function buscarPrecosFirebase(marca) {

    if (!FIREBASE_ATIVO || !db || !firebaseRef || !firebaseGet) {
        return {};
    }

    try {

        const snapshot = await firebaseGet(
            firebaseRef(db, `precos/${chaveFirebase(marca)}`)
        );

        return snapshot.exists() ? snapshot.val() : {};

    } catch (erro) {

        console.error("Erro ao buscar preços do Firebase:", erro);

        return {};
    }
}


// ============================================================
// STATUS DE SALVAMENTO (canto superior direito)
// ============================================================

let statusBase = {
    estado: "conectando",
    texto: "Conectando…"
};

let timerStatus = null;


function mostrarStatus(estado, texto) {

    const el = document.getElementById("statusSync");

    if (!el) {
        return;
    }

    el.dataset.estado = estado;

    const textoEl = el.querySelector(".status-texto");

    if (textoEl) {
        textoEl.textContent = texto;
    }
}


function definirStatusBase(estado, texto) {

    statusBase = { estado, texto };

    mostrarStatus(estado, texto);
}


function voltarStatusBase(atraso) {

    clearTimeout(timerStatus);

    timerStatus = setTimeout(() => {
        mostrarStatus(statusBase.estado, statusBase.texto);
    }, atraso);
}


// ============================================================
// SALVAR PREÇO
// ============================================================

async function salvarPreco(marca, modelo, peca, valor) {

    // 1. Salva na hora no navegador
    salvarPrecoLocal(marca, modelo, peca, valor);

    // 2. Salva na nuvem
    if (FIREBASE_ATIVO && db) {

        clearTimeout(timerStatus);
        mostrarStatus("salvando", "Salvando…");

        const salvo = await salvarPrecoFirebase(marca, modelo, peca, valor);

        if (salvo) {

            mostrarStatus("ok", "Salvo");
            voltarStatusBase(1800);

        } else {

            console.warn("Preço salvo só neste aparelho; falha ao enviar para a nuvem.");

            mostrarStatus("erro", "Não sincronizou. Salvo só neste aparelho");
        }

        return;
    }

    mostrarStatus("ok", "Salvo neste aparelho");
    voltarStatusBase(1800);
}


// Salvamento automático com atraso (enquanto digita)

const temporizadoresSalvar = new Map();


function chaveTemporizador(input) {

    const { marca, modelo, peca } = input.dataset;

    return `${marca}|${modelo}|${peca}`;
}


function programarSalvamento(input) {

    const { marca, modelo, peca } = input.dataset;
    const valor = input.value.trim();
    const chave = chaveTemporizador(input);

    // Guarda no navegador a cada tecla
    salvarPrecoLocal(marca, modelo, peca, valor);

    clearTimeout(temporizadoresSalvar.get(chave));

    temporizadoresSalvar.set(
        chave,
        setTimeout(async () => {

            temporizadoresSalvar.delete(chave);

            await salvarPreco(marca, modelo, peca, valor);

        }, 600)
    );
}


async function salvarAgora(input) {

    const { marca, modelo, peca } = input.dataset;
    const chave = chaveTemporizador(input);

    clearTimeout(temporizadoresSalvar.get(chave));
    temporizadoresSalvar.delete(chave);

    await salvarPreco(marca, modelo, peca, input.value.trim());
}


// ============================================================
// SEGURANÇA DO HTML
// ============================================================

function escaparHTML(valor) {

    return String(valor)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


const escaparAtributo = escaparHTML;


// ============================================================
// PEÇAS EXIBIDAS (mostrar / ocultar colunas)
// ============================================================

const CHAVE_COLUNAS_OCULTAS = "arenacell_colunas_ocultas";


function lerColunasOcultas() {

    try {
        return new Set(
            JSON.parse(localStorage.getItem(CHAVE_COLUNAS_OCULTAS) || "[]")
        );
    } catch (erro) {
        return new Set();
    }
}


function salvarColunasOcultas(conjunto) {

    try {
        localStorage.setItem(
            CHAVE_COLUNAS_OCULTAS,
            JSON.stringify([...conjunto])
        );
    } catch (erro) {
        console.warn("Não foi possível guardar as colunas escolhidas.");
    }
}


function aplicarColunas() {

    const ocultas = lerColunasOcultas();

    document.querySelectorAll("#tabelaModelos [data-col]").forEach(celula => {
        celula.hidden = ocultas.has(celula.dataset.col);
    });

    atualizarPreenchimento();
}


function montarSeletorPecas(pecas) {

    const caixa = document.getElementById("seletorPecas");

    if (!caixa) {
        return;
    }

    const ocultas = lerColunasOcultas();

    caixa.innerHTML = pecas.map(peca => `
        <button
            type="button"
            class="chip"
            data-chip="${escaparAtributo(peca.id)}"
            aria-pressed="${ocultas.has(peca.id) ? "false" : "true"}"
        >${escaparHTML(peca.nome)}</button>
    `).join("");
}


function alternarColuna(id, botao) {

    const ocultas = lerColunasOcultas();

    if (ocultas.has(id)) {
        ocultas.delete(id);
    } else {
        ocultas.add(id);
    }

    salvarColunasOcultas(ocultas);

    botao.setAttribute("aria-pressed", ocultas.has(id) ? "false" : "true");

    aplicarColunas();
}


// ============================================================
// FORMATAÇÃO DE PREÇO
// ============================================================
//
// "120" vira "120,00" e "1200,5" vira "1.200,50".
// Textos que não são números (ex.: "consultar") ficam como foram
// digitados.
//
// ============================================================

function formatarPreco(texto) {

    let t = String(texto).replace(/R\$|\s/g, "");

    if (t === "") {
        return "";
    }

    const ultimaVirgula = t.lastIndexOf(",");
    const ultimoPonto = t.lastIndexOf(".");
    const posicao = Math.max(ultimaVirgula, ultimoPonto);

    let inteiro = t;
    let decimais = "";

    if (posicao >= 0) {

        const depois = t.slice(posicao + 1);

        // "1.200" (ponto + 3 dígitos, sem vírgula) é milhar
        if (ultimaVirgula === -1 && /^\d{3}$/.test(depois)) {
            inteiro = t.replace(/\./g, "");
        } else {
            inteiro = t.slice(0, posicao).replace(/[.,]/g, "");
            decimais = depois;
        }
    }

    if (!/^\d*$/.test(inteiro) || !/^\d*$/.test(decimais)) {
        return null;
    }

    const numero = Number((inteiro || "0") + "." + (decimais || "0"));

    if (!isFinite(numero)) {
        return null;
    }

    return numero.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}


// ============================================================
// PREENCHIMENTO (quantos preços já foram cadastrados)
// ============================================================

function atualizarPreenchimento() {

    const texto = document.getElementById("textoPreenchimento");
    const barra = document.getElementById("barraPreenchimento");

    if (!texto || !barra) {
        return;
    }

    const campos = document.querySelectorAll(
        "#tabelaModelos td:not([hidden]) .preco"
    );

    let preenchidos = 0;

    campos.forEach(campo => {
        if (campo.value.trim() !== "") {
            preenchidos++;
        }
    });

    const porcentagem = campos.length
        ? Math.round((preenchidos / campos.length) * 100)
        : 0;

    barra.style.width = `${porcentagem}%`;

    texto.textContent = `${porcentagem}% preenchido`;
}


// ============================================================
// EXPORTAR PLANILHA (CSV, abre direto no Excel)
// ============================================================

function exportarPlanilha() {

    const tabela = document.getElementById("tabelaModelos");

    if (!tabela || !marcaAtual) {
        return;
    }

    const escapar = valor =>
        `"${String(valor).replaceAll('"', '""')}"`;

    const colunasVisiveis = Array.from(
        tabela.querySelectorAll("thead th")
    ).filter(th => !th.hidden);

    const linhas = [
        colunasVisiveis.map(th => escapar(th.textContent.trim())).join(";")
    ];

    tabela.querySelectorAll("tbody tr").forEach(tr => {

        const celulas = Array.from(tr.children).filter(c => !c.hidden);

        linhas.push(
            celulas.map(celula => {

                const campo = celula.querySelector(".preco");

                if (campo) {
                    return escapar(campo.value.trim());
                }

                return escapar(
                    celula.classList.contains("modelo")
                        ? celula.textContent.trim()
                        : ""
                );

            }).join(";")
        );
    });

    const dataHoje = new Date().toISOString().slice(0, 10);

    // \uFEFF faz o Excel reconhecer os acentos
    const arquivo = new Blob(
        ["\uFEFF" + linhas.join("\r\n")],
        { type: "text/csv;charset=utf-8;" }
    );

    const link = document.createElement("a");

    link.href = URL.createObjectURL(arquivo);
    link.download = `arenacell-${marcaAtual}-${dataHoje}.csv`;

    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(() => URL.revokeObjectURL(link.href), 1000);
}


// ============================================================
// IMPRESSÃO (só linhas com preço)
// ============================================================

window.addEventListener("beforeprint", () => {

    document.querySelectorAll("#tabelaModelos tbody tr").forEach(tr => {

        const temPreco = Array.from(tr.querySelectorAll(".preco"))
            .some(campo => campo.value.trim() !== "");

        tr.classList.toggle("sem-preco", !temPreco);
    });

    const data = document.getElementById("dataImpressao");

    if (data) {
        data.textContent =
            "Lista de preços atualizada em " +
            new Date().toLocaleDateString("pt-BR");
    }
});


window.addEventListener("afterprint", () => {

    document.querySelectorAll("#tabelaModelos tr.sem-preco")
        .forEach(tr => tr.classList.remove("sem-preco"));
});


// ============================================================
// ABRIR MARCA
// ============================================================

let marcaAtual = null;


function montarLinha(marca, modelo, pecas, dadosMarca) {

    const dadosModelo = dadosMarca[chaveFirebase(modelo)] || {};

    const celulas = pecas.map(peca => {

        // Modelo sem esta peça: não mostra campo de preço
        if (!temPeca(marca, modelo, peca.id)) {

            return `
                <td data-col="${escaparAtributo(peca.id)}">
                    <span class="nao-se-aplica" title="Este modelo não tem esta peça">—</span>
                </td>
            `;
        }

        const valorNuvem = dadosModelo[peca.id];

        const valorSalvo = valorNuvem !== undefined
            ? valorNuvem
            : buscarPrecoLocal(marca, modelo, peca.id);

        // Só na tela: valores antigos aparecem já formatados
        const valor = formatarPreco(valorSalvo) ?? valorSalvo;

        return `
            <td data-col="${escaparAtributo(peca.id)}">
                <label class="preco-campo">
                    <span aria-hidden="true">R$</span>
                    <input
                        type="text"
                        inputmode="decimal"
                        autocomplete="off"
                        class="preco"
                        placeholder="0,00"
                        value="${escaparAtributo(valor)}"
                        aria-label="${escaparAtributo(peca.nome)} - ${escaparAtributo(modelo)}"
                        data-marca="${escaparAtributo(marca)}"
                        data-modelo="${escaparAtributo(modelo)}"
                        data-peca="${escaparAtributo(peca.id)}"
                    >
                </label>
            </td>
        `;
    }).join("");

    return `
        <tr data-modelo="${escaparAtributo(modelo)}">
            <th scope="row" class="modelo">${escaparHTML(modelo)}</th>
            ${celulas}
        </tr>
    `;
}


async function abrirMarca(marca) {

    const titulo = document.getElementById("tituloMarca");
    const descricao = document.getElementById("descricaoPagina");
    const conteudo = document.getElementById("conteudo");
    const barra = document.getElementById("barraFerramentas");

    if (!titulo || !conteudo) {
        console.error("Não foi possível encontrar tituloMarca ou conteudo.");
        return;
    }

    if (!celulares[marca]) {
        console.error("Marca não encontrada:", marca);
        return;
    }

    marcaAtual = marca;

    // Botão ativo no menu
    document.querySelectorAll(".marca").forEach(botao => {

        const ativo = botao.dataset.marca === marca;

        botao.classList.toggle("ativa", ativo);

        if (ativo) {
            botao.setAttribute("aria-current", "true");
        } else {
            botao.removeAttribute("aria-current");
        }
    });

    titulo.textContent = NOMES_MARCAS[marca] || marca;

    if (descricao) {
        descricao.textContent =
            "Digite os valores direto na tabela. Tudo é salvo automaticamente.";
    }

    if (barra) {
        barra.hidden = true;
    }

    conteudo.innerHTML = `
        <div class="carregando" role="status">
            <span class="spinner" aria-hidden="true"></span>
            Carregando modelos…
        </div>
    `;

    // Preços salvos na nuvem
    let dadosMarca = {};

    if (FIREBASE_ATIVO && db) {
        dadosMarca = await buscarPrecosFirebase(marca);
    }

    // O usuário clicou em outra marca enquanto carregava
    if (marcaAtual !== marca) {
        return;
    }

    const pecas = pecasDaMarca(marca);

    const cabecalho = pecas.map(peca => `
        <th scope="col" data-col="${escaparAtributo(peca.id)}">${escaparHTML(peca.nome)}</th>
    `).join("");

    const linhas = celulares[marca]
        .map(modelo => montarLinha(marca, modelo, pecas, dadosMarca))
        .join("");

    conteudo.innerHTML = `
        <div class="tabela-scroll">
            <table id="tabelaModelos">
                <thead>
                    <tr>
                        <th scope="col" class="modelo-titulo">Modelo</th>
                        ${cabecalho}
                    </tr>
                </thead>
                <tbody>
                    ${linhas}
                </tbody>
            </table>
            <div class="sem-resultado" id="semResultado" hidden>
                <h3>Nenhum modelo encontrado</h3>
                <p>Confira a escrita ou tente outro nome.</p>
            </div>
        </div>
    `;

    montarSeletorPecas(pecas);
    aplicarColunas();

    const pesquisa = document.getElementById("pesquisa");

    if (pesquisa) {
        pesquisa.value = "";
    }

    if (barra) {
        barra.hidden = false;
    }

    atualizarContagem(celulares[marca].length, celulares[marca].length);
}


// ============================================================
// PESQUISA
// ============================================================

function normalizarTexto(texto) {

    return String(texto)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}


function atualizarContagem(visiveis, total) {

    const contagem = document.getElementById("contagem");

    if (!contagem) {
        return;
    }

    contagem.textContent = visiveis === total
        ? `${total} modelos`
        : `${visiveis} de ${total} modelos`;
}


function pesquisarModelo() {

    const pesquisa = document.getElementById("pesquisa");

    if (!pesquisa) {
        return;
    }

    const filtro = normalizarTexto(pesquisa.value);

    const linhas = document.querySelectorAll("#tabelaModelos tbody tr");

    let visiveis = 0;

    linhas.forEach(linha => {

        const corresponde =
            normalizarTexto(linha.dataset.modelo).includes(filtro);

        linha.hidden = !corresponde;

        if (corresponde) {
            visiveis++;
        }
    });

    const semResultado = document.getElementById("semResultado");

    if (semResultado) {
        semResultado.hidden = visiveis > 0;
    }

    atualizarContagem(visiveis, linhas.length);
}


// ============================================================
// TECLADO NA TABELA
// ============================================================
//
// Enter / seta para baixo: próximo modelo na mesma peça
// Seta para cima: modelo anterior
//
// ============================================================

function moverFoco(input, direcao) {

    const celula = input.closest("td");
    const linha = celula.parentElement;
    const posicao = Array.from(linha.children).indexOf(celula);

    let alvo = linha;

    do {
        alvo = direcao > 0
            ? alvo.nextElementSibling
            : alvo.previousElementSibling;
    } while (alvo && alvo.hidden);

    if (!alvo) {
        return;
    }

    const campo = alvo.children[posicao]?.querySelector(".preco");

    if (campo) {
        campo.focus();
        campo.select();
    }
}


function configurarEventosTabela() {

    const conteudo = document.getElementById("conteudo");

    if (!conteudo) {
        return;
    }

    conteudo.addEventListener("input", evento => {

        if (evento.target.matches(".preco")) {
            programarSalvamento(evento.target);
            atualizarPreenchimento();
        }
    });

    conteudo.addEventListener("change", evento => {

        if (evento.target.matches(".preco")) {

            const formatado = formatarPreco(evento.target.value);

            if (formatado !== null) {
                evento.target.value = formatado;
            }

            salvarAgora(evento.target);
            atualizarPreenchimento();
        }
    });

    conteudo.addEventListener("keydown", evento => {

        if (!evento.target.matches(".preco")) {
            return;
        }

        if (evento.key === "Enter" || evento.key === "ArrowDown") {

            evento.preventDefault();
            moverFoco(evento.target, 1);

        } else if (evento.key === "ArrowUp") {

            evento.preventDefault();
            moverFoco(evento.target, -1);
        }
    });
}


// ============================================================
// BOTÕES DAS MARCAS
// ============================================================

function configurarBotoesMarcas() {

    document.querySelectorAll(".marca").forEach(botao => {

        const marca = botao.dataset.marca;

        const quantidade = botao.querySelector(".marca-qtd");

        if (quantidade && celulares[marca]) {
            quantidade.textContent = celulares[marca].length;
        }

        botao.addEventListener("click", () => abrirMarca(marca));
    });
}


// ============================================================
// SALVAR DADOS ANTES DE FECHAR
// ============================================================

window.addEventListener("beforeunload", () => {

    document.querySelectorAll(".preco").forEach(input => {

        const { marca, modelo, peca } = input.dataset;

        if (marca && modelo && peca) {
            salvarPrecoLocal(marca, modelo, peca, input.value.trim());
        }
    });
});


// ============================================================
// INICIALIZAÇÃO
// ============================================================

document.addEventListener("DOMContentLoaded", async () => {

    configurarBotoesMarcas();
    configurarEventosTabela();

    const pesquisa = document.getElementById("pesquisa");

    if (pesquisa) {
        pesquisa.addEventListener("input", pesquisarModelo);
    }

    document.getElementById("botaoExportar")
        ?.addEventListener("click", exportarPlanilha);

    document.getElementById("botaoImprimir")
        ?.addEventListener("click", () => window.print());

    const seletor = document.getElementById("seletorPecas");

    if (seletor) {
        seletor.addEventListener("click", evento => {

            const botao = evento.target.closest("[data-chip]");

            if (botao) {
                alternarColuna(botao.dataset.chip, botao);
            }
        });
    }

    const conectado = await iniciarFirebase();

    if (conectado) {
        definirStatusBase("ok", "Sincronizado com a nuvem");
    } else {
        definirStatusBase("local", "Só neste aparelho");
    }
});


// Permite chamar abrirMarca('iphone') direto do HTML, se necessário
window.abrirMarca = abrirMarca;