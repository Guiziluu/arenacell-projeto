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
    apiKey: "AIzaSyBoOvHFLRe-_nBi67khZaNcaL6LS7A2yt0",
    authDomain: "arena-catalogo.firebaseapp.com",
    databaseURL: "https://arena-catalogo-default-rtdb.firebaseio.com",
    projectId: "arena-catalogo",
    storageBucket: "arena-catalogo.firebasestorage.app",
    messagingSenderId: "998497095263",
    appId: "1:998497095263:web:91d0dd6ebfda98ec6655ea",
    measurementId: "G-1VV0T7W235"
};


// ============================================================
// VARIÁVEIS
// ============================================================

let db = null;

let firebaseRef = null;
let firebaseSet = null;
let firebaseGet = null;
let firebaseUpdate = null;


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


        firebaseUpdate =
            firebaseDatabase.update;


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

    marcarMenu(marca);
    definirTrilha(NOMES_MARCAS[marca] || marca);
    definirLogoMarca(marca);

    soPendentes = false;
    document.getElementById("botaoPendentes")?.setAttribute("aria-pressed", "false");

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

    // Veio da busca global: já filtra e foca o modelo
    if (modeloPendente) {

        const alvo = modeloPendente;
        modeloPendente = null;

        if (pesquisa) {
            pesquisa.value = alvo;
            pesquisarModelo();
            document.querySelector("#tabelaModelos tbody tr:not([hidden]) .preco")?.focus();
        }
    }
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
            normalizarTexto(linha.dataset.modelo).includes(filtro) &&
            (!soPendentes || linhaTemPendencia(linha));

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
// NAVEGAÇÃO (a marca aberta fica no endereço: #iphone, #samsung...)
// ============================================================

let soPendentes = false;
let modeloPendente = null;


function marcarMenu(chave) {

    document.querySelectorAll(".marca").forEach(botao => {

        const ativo = botao.dataset.marca === chave;

        botao.classList.toggle("ativa", ativo);

        if (ativo) {
            botao.setAttribute("aria-current", "page");
            botao.scrollIntoView({ inline: "center", block: "nearest" });
        } else {
            botao.removeAttribute("aria-current");
        }
    });
}


function definirLogoMarca(marca) {

    const caixa = document.getElementById("logoMarca");
    const imagem = document.getElementById("logoMarcaImg");

    if (!caixa || !imagem) {
        return;
    }

    if (LOGOS[marca]) {
        imagem.src = LOGOS[marca];
        imagem.alt = NOMES_MARCAS[marca] || "";
        caixa.hidden = false;
    } else {
        caixa.hidden = true;
    }
}


function definirTrilha(nome) {

    const trilha = document.getElementById("trilha");

    if (!trilha) {
        return;
    }

    trilha.innerHTML = nome
        ? `<a href="#inicio">Início</a><span aria-hidden="true">/</span><strong>${escaparHTML(nome)}</strong>`
        : "<strong>Início</strong>";
}


function rotear() {

    const alvo = location.hash.slice(1);

    if (celulares[alvo]) {
        abrirMarca(alvo);
    } else {
        abrirInicio();
    }
}


function irPara(chave) {

    if (location.hash.slice(1) === chave) {
        rotear();
    } else {
        location.hash = chave;
    }
}


// ============================================================
// VISÃO GERAL
// ============================================================

async function estatisticasMarca(marca) {

    const dados = await buscarPrecosFirebase(marca);
    const pecas = pecasDaMarca(marca);

    let total = 0;
    let preenchidos = 0;

    celulares[marca].forEach(modelo => {

        const dadosModelo = dados[chaveFirebase(modelo)] || {};

        pecas.forEach(peca => {

            if (!temPeca(marca, modelo, peca.id)) {
                return;
            }

            total++;

            const valor = dadosModelo[peca.id] !== undefined
                ? dadosModelo[peca.id]
                : buscarPrecoLocal(marca, modelo, peca.id);

            if (String(valor).trim() !== "") {
                preenchidos++;
            }
        });
    });

    return { marca, modelos: celulares[marca].length, total, preenchidos };
}


async function abrirInicio() {

    const conteudo = document.getElementById("conteudo");

    marcaAtual = "inicio";

    marcarMenu("inicio");
    definirTrilha(null);
    definirLogoMarca(null);

    document.getElementById("tituloMarca").textContent = "Visão geral";
    document.getElementById("descricaoPagina").textContent =
        "Acompanhe quanto do catálogo já tem preço cadastrado em cada marca.";
    document.getElementById("barraFerramentas").hidden = true;

    conteudo.innerHTML = `
        <div class="carregando" role="status">
            <span class="spinner" aria-hidden="true"></span>
            Calculando indicadores…
        </div>
    `;

    const marcas = Object.keys(celulares);
    const estatisticas = await Promise.all(marcas.map(estatisticasMarca));

    if (marcaAtual !== "inicio") {
        return;
    }

    const soma = campo => estatisticas.reduce((n, e) => n + e[campo], 0);
    const pct = (a, b) => b ? Math.round((a / b) * 100) : 0;
    const num = n => n.toLocaleString("pt-BR");

    const indicadores = [
        ["Marcas", marcas.length],
        ["Modelos", num(soma("modelos"))],
        ["Preços cadastrados", num(soma("preenchidos"))],
        ["Catálogo preenchido", pct(soma("preenchidos"), soma("total")) + "%"]
    ];

    conteudo.innerHTML = `
        <div class="kpis">
            ${indicadores.map(([rotulo, valor]) => `
                <div class="kpi"><span>${rotulo}</span><strong>${valor}</strong></div>
            `).join("")}
        </div>

        <h3 class="secao-titulo">Catálogo por marca</h3>

        <div class="cartoes">
            ${estatisticas.map(e => {

                const p = pct(e.preenchidos, e.total);

                return `
                    <button type="button" class="cartao" data-abrir="${e.marca}">
                        <span class="cartao-topo">
                            <span class="cartao-logo"><img src="${LOGOS[e.marca]}" alt=""></span>
                        </span>
                        <span class="cartao-nome">
                            <strong>${escaparHTML(NOMES_MARCAS[e.marca])}</strong>
                            <small>${num(e.modelos)} modelos</small>
                        </span>
                        <span class="preenchimento-barra"><i style="width:${p}%"></i></span>
                        <span class="cartao-rodape">
                            <span>${num(e.preenchidos)} de ${num(e.total)} preços</span>
                            <b>${p}%</b>
                        </span>
                    </button>
                `;
            }).join("")}
        </div>
    `;
}


// ============================================================
// BUSCA EM TODAS AS MARCAS (Ctrl + K)
// ============================================================

function buscarGlobal() {

    const entrada = document.getElementById("buscaGlobal");
    const lista = document.getElementById("resultadosGlobais");

    const filtro = normalizarTexto(entrada.value);

    if (filtro.length < 2) {
        lista.hidden = true;
        return;
    }

    const achados = [];

    for (const marca of Object.keys(celulares)) {

        for (const modelo of celulares[marca]) {

            if (achados.length < 8 && normalizarTexto(modelo).includes(filtro)) {
                achados.push({ marca, modelo });
            }
        }
    }

    lista.innerHTML = achados.length
        ? achados.map(a => `
            <li>
                <button type="button" data-marca-alvo="${escaparAtributo(a.marca)}" data-modelo-alvo="${escaparAtributo(a.modelo)}">
                    <span>${escaparHTML(a.modelo)}</span>
                    <small>${escaparHTML(NOMES_MARCAS[a.marca])}</small>
                </button>
            </li>
        `).join("")
        : '<li class="sem-achado">Nenhum modelo encontrado</li>';

    lista.hidden = false;
}


function irParaModelo(marca, modelo) {

    const entrada = document.getElementById("buscaGlobal");

    entrada.value = "";
    document.getElementById("resultadosGlobais").hidden = true;

    modeloPendente = modelo;

    irPara(marca);
}


// ============================================================
// PENDÊNCIAS E PREENCHIMENTO EM MASSA
// ============================================================

function linhaTemPendencia(linha) {

    return Array.from(linha.querySelectorAll(".preco"))
        .some(campo => campo.value.trim() === "");
}


function linhasVisiveis() {

    return Array.from(
        document.querySelectorAll("#tabelaModelos tbody tr:not([hidden])")
    );
}


function abrirMassa() {

    if (!document.getElementById("tabelaModelos")) {
        return;
    }

    document.getElementById("massaPeca").innerHTML = pecasDaMarca(marcaAtual)
        .map(p => `<option value="${escaparAtributo(p.id)}">${escaparHTML(p.nome)}</option>`)
        .join("");

    document.getElementById("massaValor").value = "";

    document.getElementById("massaResumo").textContent =
        `O valor será aplicado aos ${linhasVisiveis().length} modelos que estão na tela agora ` +
        "(respeita a busca e o filtro de pendentes).";

    document.getElementById("dialogoMassa").showModal();
}


async function salvarLote(marca, itens) {

    itens.forEach(i => salvarPrecoLocal(marca, i.modelo, i.peca, i.valor));

    if (FIREBASE_ATIVO && db && firebaseUpdate) {

        const mudancas = {};

        itens.forEach(i => {
            mudancas[`${chaveFirebase(i.modelo)}/${chaveFirebase(i.peca)}`] = i.valor;
        });

        try {

            await firebaseUpdate(
                firebaseRef(db, `precos/${chaveFirebase(marca)}`),
                mudancas
            );

        } catch (erro) {

            console.error("Erro ao salvar em lote:", erro);

            mostrarStatus("erro", "Não sincronizou. Salvo só neste aparelho");

            return;
        }
    }

    mostrarStatus("ok", `${itens.length} preços salvos`);
    voltarStatusBase(2500);
}


async function aplicarMassa() {

    const peca = document.getElementById("massaPeca").value;
    const bruto = document.getElementById("massaValor").value.trim();
    const substituir = document.getElementById("massaSubstituir").checked;

    if (!bruto) {
        return;
    }

    const valor = formatarPreco(bruto) ?? bruto;
    const itens = [];

    linhasVisiveis().forEach(linha => {

        const campo = linha.querySelector(`.preco[data-peca="${peca}"]`);

        if (!campo || (!substituir && campo.value.trim() !== "")) {
            return;
        }

        campo.value = valor;
        itens.push({ modelo: campo.dataset.modelo, peca, valor });
    });

    atualizarPreenchimento();

    if (itens.length) {
        await salvarLote(marcaAtual, itens);
    } else {
        mostrarStatus("ok", "Nenhum campo vazio para preencher");
        voltarStatusBase(2500);
    }
}


function configurarRecursosNovos() {

    window.addEventListener("hashchange", rotear);

    document.getElementById("conteudo").addEventListener("click", evento => {

        const cartao = evento.target.closest("[data-abrir]");

        if (cartao) {
            irPara(cartao.dataset.abrir);
        }
    });

    // Busca global
    const entrada = document.getElementById("buscaGlobal");
    const lista = document.getElementById("resultadosGlobais");

    entrada.addEventListener("input", buscarGlobal);

    entrada.addEventListener("keydown", evento => {

        if (evento.key === "Escape") {
            lista.hidden = true;
            entrada.blur();
        }

        if (evento.key === "Enter") {
            lista.querySelector("button")?.click();
        }
    });

    lista.addEventListener("click", evento => {

        const botao = evento.target.closest("button");

        if (botao) {
            irParaModelo(botao.dataset.marcaAlvo, botao.dataset.modeloAlvo);
        }
    });

    document.addEventListener("click", evento => {

        if (!evento.target.closest(".busca-global")) {
            lista.hidden = true;
        }
    });

    document.addEventListener("keydown", evento => {

        if ((evento.ctrlKey || evento.metaKey) && evento.key.toLowerCase() === "k") {
            evento.preventDefault();
            entrada.focus();
            entrada.select();
        }
    });

    // Só pendentes
    const pendentes = document.getElementById("botaoPendentes");

    pendentes.addEventListener("click", () => {

        soPendentes = !soPendentes;

        pendentes.setAttribute("aria-pressed", String(soPendentes));

        pesquisarModelo();
    });

    // Preencher em massa
    document.getElementById("botaoMassa").addEventListener("click", abrirMassa);

    document.getElementById("formMassa").addEventListener("submit", evento => {

        if (evento.submitter?.value === "ok") {
            aplicarMassa();
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

        botao.addEventListener("click", () => irPara(marca));
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

    aplicarLogos();
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

    configurarRecursosNovos();

    const conectado = await iniciarFirebase();

    if (conectado) {
        definirStatusBase("ok", "Sincronizado com a nuvem");
    } else {
        definirStatusBase("local", "Só neste aparelho");
    }

    rotear();
});


// Permite chamar abrirMarca('iphone') direto do HTML, se necessário
window.abrirMarca = abrirMarca;



// ============================================================
// LOGOS
// ============================================================
//
// As imagens ficam dentro deste arquivo (formato base64), então o
// site funciona mesmo sem os arquivos .png na pasta.
//
// ============================================================

const LOGOS = {
    arenacell: "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/7QCEUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAGgcAigAYkZCTUQwYTAwMGFiOTAxMDAwMDc4MDQwMDAwYmIwNjAwMDA2ODA5MDAwMDhjMGIwMDAwZmIwZDAwMDBjNzExMDAwMDU2MTIwMDAwOGQxNDAwMDA2ZTE2MDAwMDFiMWIwMDAwAP/bAIQABQYGCwgLCwsLCw0LCwsNDg4NDQ4ODw0ODg4NDxAQEBEREBAQEA8TEhMPEBETFBQTERMWFhYTFhUVFhkWGRYWEgEFBQUKBwoICQkICwgKCAsKCgkJCgoMCQoJCgkMDQsKCwsKCw0MCwsICwsMDAwNDQwMDQoLCg0MDQ0MExQTExOc/8IAEQgAyADIAwEiAAIRAQMRAf/EAIQAAQACAwEBAAAAAAAAAAAAAAAFBwMEBgECEAABAQQGBAwEAwcFAAAAAAABAgADBBEFEBIgITEyQVFxEyIwM0JhgZGhscHRFFJy4RUj8EBQU2BjgvEkQ2KSohEBAAECAwgCAwEBAQEAAAAAAREAITFBURAgYXGBkaHwscEw0fHhQFBg/9oADAMBAAIAAwAAAAG5QAAAAAAAAAAAKauWmi5QADA8z4eJ57fhu1iYHDuxEvjhcGb46iUr7z52blkaIn9ORthDScbLZoqs4STibgm6F7Dz2yxFzKmrlpouUAgvrH98K+5vivnD7g2YzzB7g+trzB78/WcH0Jr5+4XsI6Cw7G7FdXDfXsb74z693b0DOcx2H1TVy01jy3KDRrre1ZnjPMHuDchfMHuD72fMGXe83IlP+/Ofn0ruvOv+PitI+VsaXqLtPr55LptnjdnUwzfYc/8AGaG2+fy7Gpe1NXJTfNddcsTLcNn1IL33BPV95g97fHIwHWziI6v5+jV3wAIWuLh+NvRo3qN7q96N5vgpOM2tLsuoq27Y6Xq7quoa+2pq5aa1d25aws+oJGBy4PcEty3Ud9GyUB3I0sG3n5jg9OYgO3+uGZ9Wzuloyc1d22REzqpbaq3fi+cE3znlw0/Z0fLdQIXo1NXLTRctM3NTMnAPnHglYC7faNRvQXlwfEsuD0b8WA89kfPq2dv5+uX7RW9kVvuR/JCd5lZNbWdoyfUCD6ZTVy00XLUttV9vRfHYyc5kS/zkiPLJn9GSp+Qt5r7VZb/fMWxy3SZWtthjyq3sit92O5ITvM+XDVF2Rc36ImeU1ctNFyxMs+viiPek0+j5Ge771AdQIbHkmcdVQkjFXBoVaz6vfQnObWbXusc/1St7IrfdjuSMk7zXX2HpbvOdeGDZU1ctNFyg0ef65lweDFlxUtbFQS8CEnDANrVnseW1xzPZK3sit92O5GxYuxtjWCKnAFNXLTRcoAHnp5jqC4se1pUcsmIlYPjXZy5wVq7+SMmQ099DTT6+Q+cgACmrlpouUAAADz088ejx6AAegAAKauWmi5VNC5VNC5VNC5VNC5VNC5VNC5VNC5VNC5VNC5VNC5VNC5VNC5aaD//aAAgBAQABBQL98qWEsuknYZVJrY0g+b8QfMKUeMilUs6iUPLq4t0lkxzpXJLeBAe0gpbFNqo3nMc8dtDxiHzLWEiIjFvq6Pi7JvxMWHLKtPDybmM4RMRDKcmtwu2i7FxXAgJ5NEC9UyqPehiJNDRAIiHBcqqcLS6dgzuP3wdJE1HkoODDoPaRQhkUogs+cIiEvHZQXCviUESMHD8IqKf8MuCii6VXFPOGeXQkqYQb0t+Hvm/D3zGDehoF1N7ST6wiqjH2NKoxSopIhncU0e9KakJtGqLfcE7QLIqLOYJbxncC7QwEr0VCB+z+FW5qo1E3lKqqot9IxUIH4NFvWhIAOa6QVNdcJB2eSImz2jDadOkw6Il/wy2dLsKuvlWntUA5tGtawgLpRAb8VLClWd0k7UwM7kW/WtVcGu06uAzqLQzuwip++DpL58p6bkJElyqukUye10YfyricmTibQa0GtBqUeTN5zoVUpzldF83cyPJw7gvlASrpTnK6MH5VyLTZe3g7Upkwb0smjHhZNFFkUY7DJQEiulOcrhEWXVylHcjW4hFvWd0YgMhwhHJUpzlTpFtV2Lc8K7qgoG1dKgGMW6DGkXQZdKhvjHj1VdKc5VRbmZvUg44NcG54VdcTFpcs9jni2ONxzp10pzjJSVFy6DpN5+5D1NHOC7rWqyHjwrN1zp10pzjUdC2eUjOavQDq28rpTnIGCtcqpNoREOXJuOXKnphocOU1vIVLxfLKSFB5RiCxopTCilM7oxAZKQn+WP/aAAgBAwABPwHlyZNFU07dYJ456smXTT5eUkdjCPfH/cLIpF6npT3hnNLg4PEy6xl3Ml4lQtAgjaz6ltSEz6z7NDUnaUErAE8iPW48eB2CpRkA1IUsqIJSnio82SlkpYCpDtS9FJVuE2Qp5DnFJAOBChgoM9diXCI0TmNaDsPVsNTpUwmZxkJ75V03H8Irgknipz6yyUslLO3KlZJJ3CbfCvP4S/8AqWRDqKkpKSm0QMRJoqK+Gk6dACWZzz9WhY4vTwb0BQXhOWv9eLH/AEz1SDijIjak+o82+FDn8xRtI6AHT1pnsG1kvlW7YPGJnvnq3VRz/gXS1bBhvLZmZ1tBwan6pJ1Zq1D7tD0c7ddG0fmVj4ZC5FQCX0zoq27d4aEgFpeWliyl2Zz2yyl1NGPeEeLUMsh2YNRyg+dF2rGz5HJnUA7dm0BM6pmcqqfV+WlPzK8mSloCH4F2kazirefbJlKCQScAM2f0son8sWRtOJ9m/EX38TwT7NDUqZgPAJHpDCW/qqpWfBggyE5EbZ1UQqTxQ2p8jXToml1vPoyA34x/S/8AX2aIpIvUFFizPXOfpWhBUQAJk5MkSAGxqU5o7xVRQ/N/tNdLOrbqfykH0qQ7KzJIKj1M7olZ0iEeJ9vFk0OnWsncAPdk0Y6GoneT6SZ24Q70UhPn31UpzR3iqh3emv8At9T6VrRaBByIkyodQecHrnIe+5oeHS5TJPadZZbwIBUoyA1s8pdI0UFXWTL3ZVLvNSUjvPqxjXjwgFeExgMPKqlOaO8MBPDa0I44JCU68zvNxbhJWl5rTPxqphZmhOqU+3Ktwi0tAGsiqlOaO8NRsFKTxY+kevtfjIMPwMZKGR9D1MujXqeja6wR/lkUa9V0bPWSPTFoSBS4x0lbdm6pTsLzE9fd+3//2gAIAQIAAT8B5cCbOoAnSNnqzP2ZME7Gqe8+0m+GR8g7mVBOz0Zbiz2jvkVPqPuykFJkRI7GdUb86pdQ92f0fZE0EmWYNxCCsgDElnEOHXWrWr26rqlhOZA3soIfawSMiDilnbwzsL0tR1KG3ftFTxMidkzKuEc2Ez6SvAbGFRWE5qA3mTfEI+dPeGU+SElQIMhPAs4h+H/MeGc8h+tTP4TgxbdkpKWT+e7SrJWYOxQ9PRviC94ieKrpE9HbLaWU6TYsdED9HfVDO7a0jVmdwqfPg6Ez2Daz2LWvXZGwXHEWp3hmnZ7NERaSiScSvCWyfq0M7sISDnr7WjQXawtOFrzGbPIxaxInDXLXVRycVnql3/4qiXvCLJ1DAbmAngNbOqPA0zM7BgG+Cd/J4n3Z/R4lNHcddVHytmY1YdVVIp4gOw+ddG9P+31aTfhn9T/z92cwPBqCrU5dX3rUoJBJwAYmc2gOcG41UhzfaK4Bcly+YS9alLCcSZBl0igZAq8B+uxjSStSQN+Psxj3h1gbh7st6pekomqA5wbjVSS9BPb6D1rSqyQRqxYPgUW9Up/bez58XpmewbGQgqMgJksijT0lS3YsKORrKiwhUIBknGWZxqgOcG41RD3hFk6tW64l6QlSNSqqNTgpWvKt6qylR2A1QHODcWjoroJ/uPp734aJLo7QcwyY52elLeGVHOx0p7g0TFl7hknZt31JWU5GX7f/AP/aAAgBAQAGPwL98zJlvbCatzYO+8t0R2N0e5sUpPg3GSR4txVA+d3FY820+/DkpqMg0nQkPmLTUSo9fIZ2hsPu2GB2FiTkG2J+WsIVonLqPIbVHJLWnhn1ahynBPdeFr3bHLUdtxKtovYYrOQa0rFRzPJ6Mt+DaM9xaRwbgnuKDkflaR7DtrdpUoA2dd0qLFatI+HJzOn5NIcbdk3GBT4t5KYpOYbglaadAtI5hpnQTiT6MVashuYDoHMetyXQd+Kr2AJ3NoHybR8Q2j4htA+bCY0cWCR0vKso1HEMlW3DuYEZhg9xxGIG1uBAsoHjUANZrJ15DebszxQ2Vo9d8YyIybHLbqqn8o82QN5qKNuI3tsUMi3R72tHFXgK0I2cY+ly0vPUNnJSOTcQ8Xr1N1ZksVatW6pKthvPD1y7q7RyTlvuTUZBsAVeDaHj9mxR4/ZsZp3tMY3ClWo5DK4g9XlhdUdqjWkfrGsqLTV/i7/xOY9bm8A3NxN3vqA6w2YbMNmGSntvo+keVY+n1Nw/UfS6obFHlJDLWdlwfT6m5vJur3z77+CSextA9uDdEdrYr7g2M1NICQuD6fU3EDq88bqV7cLmAw2luMSrwDYJA7OSH0+prSnabxGvMbxXbXlqHvdxMm0x5tmT2NxUd7JmZC0MBvuD6fU1lezAb79oaK/NgNQxNzarY2dkbBhdT9Q87g+n1NQAzLBI1Xyks8tZzlWTsE2KjmbyPqHncH0+pq4RWZy6hyi918bE43B9PqWtr0dQ2/blSDraRy1HbdkkewaQz1nbcC1YyGXLyImG4pKfENgsNisNjNXgGkBIfyx//9oACAEBAQE/If8A2S4R1UVb5vBbuxSMI63xFI/c/dRZ+nOjeAn7NL7uQfprE00w7G+7ZZegy8TS0AHgR3SKGfwtiFm1Keg7H9qdxaVWMLUqWl3I0e7emL5qwLVxumvSrDQq8imGVyhh11drupsz7XJ+fwFRwxjzdD0rGgy+p7xpaWlpaWl3S1yyYJjQssBgbeuPeoncsPAfvhua/GvPPzvAB6NLw+aaVM8fVLS0tLS0u6TJFxnhj4oOYcgva1O0FGIkNaGg+Kyvpo5cqfXjHIHuO1kSDCDG+fOgEjI57mQ3gauRWIPwsgpaWlpaWl3AmhBivYfbTyCzHB3fqmY4pg6xfxU4tMWsv2cKBmEhoFexL8Mv3w5U7BCQmiVl3fWFr/64V/JC/eNMxuxkE5PvcsjQ4ZnbD+0tLS0tLVi5QX4rC+vHySjSe3GnSe3GsZ6cfCaUbEGKRhhjxaRBC0Xgx7yG1hrYeAmPc+KEHkV5Hy0qcLI1LUIpEELM58KVRxbGVv2+8diYuAOrRsgP0h2xqFM8Xm0tLSqM5m4vI/deal/jDxQWBBwtvASU2WJfUpi2ch9R12No1nwPuijPnwBskfDtmPc+KOS+hHUoDBI1/iaQl0/o48dunBeZh640tLS0MCnGmHNx+PxGUBWI4NKtB31cHHh5pNeBd58X6K6QDoP3jsh3Kemfihnd4TA9H7paWpcvkf53IYNZrvdYPN/FOUerov6arFJ4JO5RkQDglzcWGBjWGfHrucip6ct2VqHzS0q1siXnc7chjA1XAqU06GQ0DdMS3uVwcTzuTz7EfW5JDR/f3uvy+VLQ4sHdr+4V/cK/uFRkyAuNWx977VnH6W3xe4e+03ScIPmlpfxDC8IfvSgAGBY2+L3CAOr+vrdgusPTPzS73iCTWDl0fJrEupL4KyWdT5SsZ85g8fuosgyCNzxe4cqq8/8ATdibIvmXPvcu8HLHTN6VjsemF/NfDcnvj+Lxe0h3KOmfigjdgP0h3w67SAN19fjwaFBG5hJzIVjvTfpNYdyD+4rNDxQeCaicjkhgxze+54vaSPh3zHsW679kMzlnOuNS59SZdW1G0G9zA/LoV6cXHHzSbll433PS6NzxewNOVgrLOY6ub1d/AbcHRyasJBPOBMnBnaDuDLoViMk/503vQ6NzxewgwW7dTPm/H5Mvr30XxPTDzueLokhWXbyfhryx/IFwAR5NR0lcsfvU3bsGr8jWJpX1H603LJAgyzKy644fndCTJJKu/Af2X81mDzE/dZQ8hf1VzfqYF/NGwgyCD/5j/9oADAMBAQIBAwEAABDzzzzzzzzzzzyjzzr3f9FDcTHyjz+iEBEI39WzSjysoE4hwLBABemv4/37/wDeAI5+oF5c6ZDD3/C28oC+uOCCVerCG8oNrCWPMu/rCz8o9oU70Tz/AKxPPKPKP8Qglv67fPKPPGiDhJf93PPKPPPLHfvnfPPPKMMMMMMMMMMMMIP/2gAIAQMBAT8Q/OAVQC6tgOelLNv5B1z8Dk0hhNAPzL5r91tfDYPmJ81Edx+pXDkvKrZZmDa2M6RnNyoFGDXh5CGObPCnmNxKAXACtnWbabh0Byr7jTQotgx433ltqLY7DBjJDnGFZmNYMxHJtpcpZlWhbp7j6mDfZGgTHm4hMmW1nvu89o+ue2vIe/Ar3D6pPlIPCXG8YY1gnYuSkT1ZCrONYLyLHAIWvkgJTOSusuJ0khyFNpgRvGXIR37AqPZkWZeTCNKK1DQ7AjiY9KBa4pXm1GqC5sHjqsjF7tFlmeEp4fAJ47mbLlwgQahyhoBiAGzu+QraLY0eeAmobusTRCxUQ87qGY0tQ1IXsC4GvOY2KG1O3/dkMfBj5pTHphSBQFTgBdaQADgUvGGzlDz2CJTEiCUsxg6oiNhKGCJgAYnWELYX2aIt3D6nbONPOUjRSYcNanory1GckIxEMY12omTANX3pUgXgE6wV6vXZNyfIH3tkAX6Ti+TtQRRZoyE/w44Vc+DYXQoD7w60xaqjvGBdzxPfZ6vXZe4QPThtEelS5JFW1vOkjh0L8qFFfrurw0MqLjjF7d0C7SicoHsCjnDSPgk+B4p5QpIC3wbFOa7PV60iASqAM1rgY5uN2w5G4qi2B1Al+U267Lr2KOqYdg8u1LyRebvIL8tnq9aexHP+frXTeSsxltyXxDV3GkrEcG7KeFLXI4N2l4VfLKRbAHEH3i8NhQERINycFs+tvwRUVFRUf8f/2gAIAQIBAT8Q/OiAJXALrUGxfTGHUzwrOfG3xBRTvk5D/PFKX7Dfp3CpZcCRe+HOctakBROnbmpJ5EcaJcYISxnCBhpG4AeQPcAz4UFb0LaPJoKCg2HybxB80Ha8Rpsk/wBs1pAv2E/g2WmOMxZBYjbdhZl8HVi9ChQV4KT5V6191KJaAMxy1q8RLoYeoCixMMTl70SlAWuynfmULSs8ptraHergMByj+k7JIuHyCdcOtFYlVwMV+tXKvoY93F+OG5G9Vy5vSnzxsC4sZ8I1puOnNd4p3piZ6HcRzvUOgsiOr/NkmkHcmgV/gQv3jTsCVAGq4UcKZyQcJxedti0grJfG6HGeczstALc0lQ5cx522TaJ7B/zbk83b/VXDlxqFAsw0FuJGragUCVqYtVe9e502Lu+523tmdRZ8J12EwizWPWrBxj916fMY/CmFcq/tXbhW3bDZ7nTZa1FfTaGsJYOZer85jhGPUtzqe/wD3vQJ2AD3DxSbjwiXexPejfKB9fdJAwWYw44PLZ7nSlgVsF10K6duVh3x5u5LTCY0Rm3OL7B4ocoE+Z8bSWw+Bbu7Pc6VJLzofH1prvorWeRhgnH5rO3Cn1J5rC09E+WDzVjEXVzPrDYgrJEkxhxv/wB//9oACAEBAQE/EP8A2XY7kD5pF6H/AEshrAf1TwHzrDjlJ8uswvvgrAe5r4PFRJxl9Fwas2sL8V4VO1YpGEGMA6Gh1ssSbovKgAjI3Ewfw49EkjoZroEtJZDQX+M6y4FNxcQnQ95VAwAcCNx9Z2RnmYOdWYPMUHYdYcKLwbgjj0Hj1BTLyL4EvXSiaU3sQyt6020NsmVSLEw5u0ZQjP8AAHhzEehq+D4fNY9D1xNQWLRu/wDJupQiiUQEzEuUsvFycNHx861h/wDggz6i20UuMJg6NOx8CI+TeMrD+/Z5W1Qrm7uMcuD+Ft7/AObcCbGLQZiYPkVVtCf7BJ6VbhksHMb17vIEtLwOG6WYLmeZgMnhG2bNyrmdDCgALgDInBLbmHIeI+DxXsS5U3nF8Oyre4/i/wD0QAqsAXVcAoMzSrc+z/harbLlCTnx6E40JDOsLseSickpR1lhfu/auVeI4JwS5wriZBCDHyLar8aPsYdiiEroTUWs86eYqIsMB2+6eqkioWN1waCOTE4xRtnWlPkHH6N5/wCxJdPhTWCCpEZXP9qgZ/L9KsbHL8mk6PJV0SwZE9KjxMGMZHq5Cds/YL6KdznQXL+nOVERROOPpweFZAgYmiLjQkgUNJuFEF5ssxdsPieewFDZNa88F8nRXXE64256LcOTa6L1h1qAWB7cOggIsAA7Ft2KgxoBGBmTHAwSsUaxcrg5rh0TsjwvK42XW7pWojpj5Dsm3a+F9lpYwjATZydTjI4ZzITiMOzVFTEiCJcb7qLSi1gLzs0/i4sTs7j4CZcy0UZ+1/xHxWASDkjWpTyXkse1os04AXMV6AcscWugLzkJ4qVzjYudN4yg9WlEBGRJHUcNxr9MyifDb5zs0BwxJ6b8003HxZmwcjV4F6QSN0D9aM6zPRamWY9caKksz+R46hQUSlAhwSzuBowsJMcSzHojak0jF2TzvbhrWDvr27aeIfeLTHTbcjLczDHN7EtJpL0ig8ue6MokMiVuBmaLOUDN9pDEd+he5j/6Q3JqL1YtnJGDHRKA9rzXtX3XtX3UB8oEkmVoHdvNYwBnn+MISmpx/QPb8cKg0qDTfchBO4b6jBm8KAKAA0Ag8b5D+eKm5NaDlyA+zf8A2JrQr1SPCrEvNF5vmleSfL4FJijp4MjQ1h8EPGfHfILFMxZ8kt1Ei3q3uPZS7YH1Q/RRxqGcxg+KnkzZidyfL8pB86bwlL6FaIAEAQGgYbsVpj5L5KPHDZONuHLl/YYtrIAAACALAGW4PJWpPlNk1XuPeXQZGshvl+SnUVl2sv1ocN8hFux5VnR3yfuBOmN8T10oR89S/WOSaAABAYBtPltlkMankxcjRdvT+rH9RSkrWSu7P4jhCJoh8X6MXhV4gvau7dR8b+BI8Q8HiPckzpbEgZdmhdvhFgZfim+lS4aDgLHLeM71hBbJiLjmmnh5n8ktV4pJ8TvwMuy+HrHs7tB4pgGx5FoyflBRQ61CHw0nQpscByPobsr2tsGuEcsXIrggjh+kYDLmu5hvq954RZMGs4UEfkjZixMMnRplRPqKJ2wevFFtg9eaPi4yWhRuEwwdD/kjfj/3f//Z",
    iphone: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAADICAYAAACJQSFeAAAWfmNhQlgAABZ+anVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAAFlhqdW1iAAAAR2p1bWRjMm1hABEAEIAAAKoAOJtxA3VybjpjMnBhOmIwOGRjOGJlLTNlY2MtNDhjOC1iNTU4LTZiMmRjOTIzNjczMQAAAAOTanVtYgAAAClqdW1kYzJhcwARABCAAACqADibcQNjMnBhLmFzc2VydGlvbnMAAAAAuGp1bWIAAABEanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5pbmdyZWRpZW50LnYzAAAAABhjMnNo8hGbDGv/YonyvjW9vGps5AAAAGxjYm9yo2lkYzpmb3JtYXRpaW1hZ2UvcG5namluc3RhbmNlSUR4LHhtcDppaWQ6OWY2MGY3NDgtYTc4My00OTY4LThlZTktY2FlYmFmMzFjZDg3bHJlbGF0aW9uc2hpcGhwYXJlbnRPZgAAAeJqdW1iAAAAQWp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuYWN0aW9ucy52MgAAAAAYYzJzaOJ4gjXjRcJ2lryLoFY8WkAAAAGZY2JvcqJnYWN0aW9uc4KiZmFjdGlvbmtjMnBhLm9wZW5lZGpwYXJhbWV0ZXJzoWtpbmdyZWRpZW50c4GiY3VybHgtc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5pbmdyZWRpZW50LnYzZGhhc2hYIPLcOfsNn4W0bJ0uYQpL9oKiHUfHw3kvuSbiSZ5cq+U0pGZhY3Rpb254HWNvbS5hbnRocm9waWMuY2xhdWRlLnByb3ZpZGVkanBhcmFtZXRlcnOheB9jb20uYW50aHJvcGljLm9yaWdpbi1jb25maWRlbmNlZ3Vua25vd25rZGVzY3JpcHRpb254ZkNsYXVkZSBwcm92aWRlZCB0aGlzIGZpbGUgYXQgdGhlIHJlcXVlc3Qgb2YgYSB1c2VyIGFuZCBtYXkgaGF2ZSBjcmVhdGVkIG9yIG1vZGlmaWVkIHRoZSBmaWxlIGNvbnRlbnRzLm1zb2Z0d2FyZUFnZW50oWRuYW1lZkNsYXVkZXJhbGxBY3Rpb25zSW5jbHVkZWT1AAAAyGp1bWIAAABAanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5oYXNoLmRhdGEAAAAAGGMyc2iRbBj9umw+jEdEqR9o2VHLAAAAgGNib3KlY2FsZ2ZzaGEyNTZjcGFkTQAAAAAAAAAAAAAAAABkaGFzaFggmJ68UuUj2vRe5OYdWheRh8L/cXZfwLmA/8yitFmTZl9kbmFtZW5qdW1iZiBtYW5pZmVzdGpleGNsdXNpb25zgaJlc3RhcnQYIWZsZW5ndGgZFooAAAI+anVtYgAAACdqdW1kYzJjbAARABCAAACqADibcQNjMnBhLmNsYWltLnYyAAAAAg9jYm9ypWNhbGdmc2hhMjU2aXNpZ25hdHVyZXhNc2VsZiNqdW1iZj0vYzJwYS91cm46YzJwYTpiMDhkYzhiZS0zZWNjLTQ4YzgtYjU1OC02YjJkYzkyMzY3MzEvYzJwYS5zaWduYXR1cmVqaW5zdGFuY2VJRHgseG1wOmlpZDo4MDJlMzA3My0zOTIwLTRlOGUtOGFlZC1lMmZjYjUyMWYzOWZyY3JlYXRlZF9hc3NlcnRpb25zg6JjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg8tw5+w2fhbRsnS5hCkv2gqIdR8fDeS+5JuJJnlyr5TSiY3VybHgqc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5hY3Rpb25zLnYyZGhhc2hYIDsPMLR6r8ZWQewXsVlrmEIt0ma6w4SM00Zr7SiLWysgomN1cmx4KXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaGFzaC5kYXRhZGhhc2hYIL43+p86kZCn3aHGVaSIEH1V/QlSijgTDdRduKBIkgn1dGNsYWltX2dlbmVyYXRvcl9pbmZvo2RuYW1lb0FudGhyb3BpYyBGaWxlc2d2ZXJzaW9uZTEuMC4wa3NwZWNWZXJzaW9uZTIuNC4wAAAQOGp1bWIAAAAoanVtZGMyY3MAEQAQgAAAqgA4m3EDYzJwYS5zaWduYXR1cmUAAAAQCGNib3LShFkCEqIBJhghWQIKMIICBjCCAY2gAwIBAgIUQOWgCu7COdC+uIP6BkIFPWdVEwAwCgYIKoZIzj0EAwMwSTEXMBUGA1UEChMOQW50aHJvcGljLCBQQkMxLjAsBgNVBAMTJUFudGhyb3BpYyBDb250ZW50IENyZWRlbnRpYWxzIFJvb3QgQ0EwHhcNMjYwODA3MTg0MzU2WhcNMjgwODA2MTk0MzU2WjBEMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEpMCcGA1UEAxMgQW50aHJvcGljIENsYXVkZSBDb250ZW50IFNpZ25pbmcwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAASYegpry1AYBRTVNL1CpTlbROnY3dey+UrsF9C3phYrATN3ZHf93Mo8RQN0KOUuOn19P4oWNFWe5n2/She9N7eTo1gwVjAOBgNVHQ8BAf8EBAMCB4AwFQYDVR0lBA4wDAYKKwYBBAGD6F4CATAMBgNVHRMBAf8EAjAAMB8GA1UdIwQYMBaAFM5R4gSBTmRbI/jjxM+aPpzB11zCMAoGCCqGSM49BAMDA2cAMGQCMDFzHRSeAXrSy1WOzkbhPZ6Km2wGTmZ/2gK18k8BQGXyqz88Rdrz6CTX9flAnYNVxgIwcF9c3fVhqmJKpi+UhasNUMko69cyX6STPfta3Q8EjyzDjzoyrol46FP6VFHhvUcJoWNwYWRZDZ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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",
    samsung: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAABACAYAAABV7gMVAAAWfmNhQlgAABZ+anVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAAFlhqdW1iAAAAR2p1bWRjMm1hABEAEIAAAKoAOJtxA3VybjpjMnBhOjliMDBkN2E3LTQyNTQtNGVlNi1hOWE1LTM1NDkwNDYwYjgxOAAAAAOTanVtYgAAAClqdW1kYzJhcwARABCAAACqADibcQNjMnBhLmFzc2VydGlvbnMAAAAAuGp1bWIAAABEanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5pbmdyZWRpZW50LnYzAAAAABhjMnNoCZsOEe0hEVbiaZNZZ6pzLgAAAGxjYm9yo2lkYzpmb3JtYXRpaW1hZ2UvcG5namluc3RhbmNlSUR4LHhtcDppaWQ6ZWYyZmZjMzQtNDUxNy00MGU5LWI0OTYtOGUxOTFiOTVjMjhibHJlbGF0aW9uc2hpcGhwYXJlbnRPZgAAAeJqdW1iAAAAQWp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuYWN0aW9ucy52MgAAAAAYYzJzaF/wAATRMYwUUMUtCnoVd64AAAGZY2JvcqJnYWN0aW9uc4KiZmFjdGlvbmtjMnBhLm9wZW5lZGpwYXJhbWV0ZXJzoWtpbmdyZWRpZW50c4GiY3VybHgtc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5pbmdyZWRpZW50LnYzZGhhc2hYIEVsVACz9XEMuKF0WURydz2TOXTIKUEd1PhYAAb73DMTpGZhY3Rpb254HWNvbS5hbnRocm9waWMuY2xhdWRlLnByb3ZpZGVkanBhcmFtZXRlcnOheB9jb20uYW50aHJvcGljLm9yaWdpbi1jb25maWRlbmNlZ3Vua25vd25rZGVzY3JpcHRpb254ZkNsYXVkZSBwcm92aWRlZCB0aGlzIGZpbGUgYXQgdGhlIHJlcXVlc3Qgb2YgYSB1c2VyIGFuZCBtYXkgaGF2ZSBjcmVhdGVkIG9yIG1vZGlmaWVkIHRoZSBmaWxlIGNvbnRlbnRzLm1zb2Z0d2FyZUFnZW50oWRuYW1lZkNsYXVkZXJhbGxBY3Rpb25zSW5jbHVkZWT1AAAAyGp1bWIAAABAanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5oYXNoLmRhdGEAAAAAGGMyc2gzE3RuW4qeVa6YqNFUp5slAAAAgGNib3KlY2FsZ2ZzaGEyNTZjcGFkTQAAAAAAAAAAAAAAAABkaGFzaFgggRb8ocQR6NEl16Kzk+cbgTecz3TOEcwk4On27ZRpOg5kbmFtZW5qdW1iZiBtYW5pZmVzdGpleGNsdXNpb25zgaJlc3RhcnQYIWZsZW5ndGgZFooAAAI+anVtYgAAACdqdW1kYzJjbAARABCAAACqADibcQNjMnBhLmNsYWltLnYyAAAAAg9jYm9ypWNhbGdmc2hhMjU2aXNpZ25hdHVyZXhNc2VsZiNqdW1iZj0vYzJwYS91cm46YzJwYTo5YjAwZDdhNy00MjU0LTRlZTYtYTlhNS0zNTQ5MDQ2MGI4MTgvYzJwYS5zaWduYXR1cmVqaW5zdGFuY2VJRHgseG1wOmlpZDo5NjM0ZjNiYS03YzlkLTRjNzEtOGMxYS1kNzYwNzUyY2IxMTJyY3JlYXRlZF9hc3NlcnRpb25zg6JjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFggRWxUALP1cQy4oXRZRHJ3PZM5dMgpQR3U+FgABvvcMxOiY3VybHgqc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5hY3Rpb25zLnYyZGhhc2hYIHtDYNQKhiHSaht3VDEKafDj5bPg3JrRT4KhQXKAJP3bomN1cmx4KXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaGFzaC5kYXRhZGhhc2hYILxMQX6PDuvuzvl6Kg4Y4s2NFAo1fJD5LjP6JPWP5J7xdGNsYWltX2dlbmVyYXRvcl9pbmZvo2RuYW1lb0FudGhyb3BpYyBGaWxlc2d2ZXJzaW9uZTEuMC4wa3NwZWNWZXJzaW9uZTIuNC4wAAAQOGp1bWIAAAAoanVtZGMyY3MAEQAQgAAAqgA4m3EDYzJwYS5zaWduYXR1cmUAAAAQCGNib3LShFkCEqIBJhghWQIKMIICBjCCAY2gAwIBAgIUQOWgCu7COdC+uIP6BkIFPWdVEwAwCgYIKoZIzj0EAwMwSTEXMBUGA1UEChMOQW50aHJvcGljLCBQQkMxLjAsBgNVBAMTJUFudGhyb3BpYyBDb250ZW50IENyZWRlbnRpYWxzIFJvb3QgQ0EwHhcNMjYwODA3MTg0MzU2WhcNMjgwODA2MTk0MzU2WjBEMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEpMCcGA1UEAxMgQW50aHJvcGljIENsYXVkZSBDb250ZW50IFNpZ25pbmcwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAASYegpry1AYBRTVNL1CpTlbROnY3dey+UrsF9C3phYrATN3ZHf93Mo8RQN0KOUuOn19P4oWNFWe5n2/She9N7eTo1gwVjAOBgNVHQ8BAf8EBAMCB4AwFQYDVR0lBA4wDAYKKwYBBAGD6F4CATAMBgNVHRMBAf8EAjAAMB8GA1UdIwQYMBaAFM5R4gSBTmRbI/jjxM+aPpzB11zCMAoGCCqGSM49BAMDA2cAMGQCMDFzHRSeAXrSy1WOzkbhPZ6Km2wGTmZ/2gK18k8BQGXyqz88Rdrz6CTX9flAnYNVxgIwcF9c3fVhqmJKpi+UhasNUMko69cyX6STPfta3Q8EjyzDjzoyrol46FP6VFHhvUcJoWNwYWRZDZ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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",
    motorola: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADICAYAAABs3+QyAAAWfmNhQlgAABZ+anVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAAFlhqdW1iAAAAR2p1bWRjMm1hABEAEIAAAKoAOJtxA3VybjpjMnBhOmNkMGE3Y2E3LTY1NWMtNDU4YS1iMjExLWIzYmNmYmM0ODQ1ZQAAAAOTanVtYgAAAClqdW1kYzJhcwARABCAAACqADibcQNjMnBhLmFzc2VydGlvbnMAAAAAuGp1bWIAAABEanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5pbmdyZWRpZW50LnYzAAAAABhjMnNoQ4OZlXFGOx9ReXIqt8GfcAAAAGxjYm9yo2lkYzpmb3JtYXRpaW1hZ2UvcG5namluc3RhbmNlSUR4LHhtcDppaWQ6NDk5YzQ1ODgtYjQzZi00MDEyLWJlMTYtZjE0NGFmNmMyNWY2bHJlbGF0aW9uc2hpcGhwYXJlbnRPZgAAAeJqdW1iAAAAQWp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuYWN0aW9ucy52MgAAAAAYYzJzaN0D9TScKFGcHqNDE3wW10UAAAGZY2JvcqJnYWN0aW9uc4KiZmFjdGlvbmtjMnBhLm9wZW5lZGpwYXJhbWV0ZXJzoWtpbmdyZWRpZW50c4GiY3VybHgtc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5pbmdyZWRpZW50LnYzZGhhc2hYIKtNGnJBNrPH2zQU7KHBtjbttR+IKr6RJEYv72Te8li5pGZhY3Rpb254HWNvbS5hbnRocm9waWMuY2xhdWRlLnByb3ZpZGVkanBhcmFtZXRlcnOheB9jb20uYW50aHJvcGljLm9yaWdpbi1jb25maWRlbmNlZ3Vua25vd25rZGVzY3JpcHRpb254ZkNsYXVkZSBwcm92aWRlZCB0aGlzIGZpbGUgYXQgdGhlIHJlcXVlc3Qgb2YgYSB1c2VyIGFuZCBtYXkgaGF2ZSBjcmVhdGVkIG9yIG1vZGlmaWVkIHRoZSBmaWxlIGNvbnRlbnRzLm1zb2Z0d2FyZUFnZW50oWRuYW1lZkNsYXVkZXJhbGxBY3Rpb25zSW5jbHVkZWT1AAAAyGp1bWIAAABAanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5oYXNoLmRhdGEAAAAAGGMyc2gTK2m7QAo9ycVNTsQ3Y2k7AAAAgGNib3KlY2FsZ2ZzaGEyNTZjcGFkTQAAAAAAAAAAAAAAAABkaGFzaFgg8SskGMVF+jzP7V6zKEH/GeRSlKrOcaJ7wxIrM0X15LpkbmFtZW5qdW1iZiBtYW5pZmVzdGpleGNsdXNpb25zgaJlc3RhcnQYIWZsZW5ndGgZFooAAAI+anVtYgAAACdqdW1kYzJjbAARABCAAACqADibcQNjMnBhLmNsYWltLnYyAAAAAg9jYm9ypWNhbGdmc2hhMjU2aXNpZ25hdHVyZXhNc2VsZiNqdW1iZj0vYzJwYS91cm46YzJwYTpjZDBhN2NhNy02NTVjLTQ1OGEtYjIxMS1iM2JjZmJjNDg0NWUvYzJwYS5zaWduYXR1cmVqaW5zdGFuY2VJRHgseG1wOmlpZDplODFkOWE4Zi01ZTk1LTRkMjQtODBmNi03YjNlOWExZDk3MjlyY3JlYXRlZF9hc3NlcnRpb25zg6JjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFggq00ackE2s8fbNBTsocG2Nu21H4gqvpEkRi/vZN7yWLmiY3VybHgqc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5hY3Rpb25zLnYyZGhhc2hYIBcOOrbht0Zy2Y98F1ALALAzKDv35vMoLse9rS5tXmLaomN1cmx4KXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaGFzaC5kYXRhZGhhc2hYIDo0y80+ZaWRqJgW/WDGlkzDf3ZrlBm3a3sTS5/PFIzPdGNsYWltX2dlbmVyYXRvcl9pbmZvo2RuYW1lb0FudGhyb3BpYyBGaWxlc2d2ZXJzaW9uZTEuMC4wa3NwZWNWZXJzaW9uZTIuNC4wAAAQOGp1bWIAAAAoanVtZGMyY3MAEQAQgAAAqgA4m3EDYzJwYS5zaWduYXR1cmUAAAAQCGNib3LShFkCEqIBJhghWQIKMIICBjCCAY2gAwIBAgIUQOWgCu7COdC+uIP6BkIFPWdVEwAwCgYIKoZIzj0EAwMwSTEXMBUGA1UEChMOQW50aHJvcGljLCBQQkMxLjAsBgNVBAMTJUFudGhyb3BpYyBDb250ZW50IENyZWRlbnRpYWxzIFJvb3QgQ0EwHhcNMjYwODA3MTg0MzU2WhcNMjgwODA2MTk0MzU2WjBEMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEpMCcGA1UEAxMgQW50aHJvcGljIENsYXVkZSBDb250ZW50IFNpZ25pbmcwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAASYegpry1AYBRTVNL1CpTlbROnY3dey+UrsF9C3phYrATN3ZHf93Mo8RQN0KOUuOn19P4oWNFWe5n2/She9N7eTo1gwVjAOBgNVHQ8BAf8EBAMCB4AwFQYDVR0lBA4wDAYKKwYBBAGD6F4CATAMBgNVHRMBAf8EAjAAMB8GA1UdIwQYMBaAFM5R4gSBTmRbI/jjxM+aPpzB11zCMAoGCCqGSM49BAMDA2cAMGQCMDFzHRSeAXrSy1WOzkbhPZ6Km2wGTmZ/2gK18k8BQGXyqz88Rdrz6CTX9flAnYNVxgIwcF9c3fVhqmJKpi+UhasNUMko69cyX6STPfta3Q8EjyzDjzoyrol46FP6VFHhvUcJoWNwYWRZDZ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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",
    xiaomi: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAAB3CAYAAABMkTQAAAAWfmNhQlgAABZ+anVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAAFlhqdW1iAAAAR2p1bWRjMm1hABEAEIAAAKoAOJtxA3VybjpjMnBhOmQwMjhjN2YwLTNjY2ItNDA4YS1iMmU3LTI1YTVkNmIyNWY4ZAAAAAOTanVtYgAAAClqdW1kYzJhcwARABCAAACqADibcQNjMnBhLmFzc2VydGlvbnMAAAAAuGp1bWIAAABEanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5pbmdyZWRpZW50LnYzAAAAABhjMnNoFQU1ajS9UVPFMY0XWrvLLwAAAGxjYm9yo2lkYzpmb3JtYXRpaW1hZ2UvcG5namluc3RhbmNlSUR4LHhtcDppaWQ6Yzk2YjU4NmEtNjEzZC00ZTJkLTk2MGQtZmQ0OTcxNjFkN2Q3bHJlbGF0aW9uc2hpcGhwYXJlbnRPZgAAAeJqdW1iAAAAQWp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuYWN0aW9ucy52MgAAAAAYYzJzaDW8+7ByMXbWwTv2CYnWGTgAAAGZY2JvcqJnYWN0aW9uc4KiZmFjdGlvbmtjMnBhLm9wZW5lZGpwYXJhbWV0ZXJzoWtpbmdyZWRpZW50c4GiY3VybHgtc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5pbmdyZWRpZW50LnYzZGhhc2hYIOLdmuw4SE3uLrCzD8ioST1+fb/zG0MQkO2XM1ySDpsWpGZhY3Rpb254HWNvbS5hbnRocm9waWMuY2xhdWRlLnByb3ZpZGVkanBhcmFtZXRlcnOheB9jb20uYW50aHJvcGljLm9yaWdpbi1jb25maWRlbmNlZ3Vua25vd25rZGVzY3JpcHRpb254ZkNsYXVkZSBwcm92aWRlZCB0aGlzIGZpbGUgYXQgdGhlIHJlcXVlc3Qgb2YgYSB1c2VyIGFuZCBtYXkgaGF2ZSBjcmVhdGVkIG9yIG1vZGlmaWVkIHRoZSBmaWxlIGNvbnRlbnRzLm1zb2Z0d2FyZUFnZW50oWRuYW1lZkNsYXVkZXJhbGxBY3Rpb25zSW5jbHVkZWT1AAAAyGp1bWIAAABAanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5oYXNoLmRhdGEAAAAAGGMyc2iNH40YRbJAbeIqMGRr4rTIAAAAgGNib3KlY2FsZ2ZzaGEyNTZjcGFkTQAAAAAAAAAAAAAAAABkaGFzaFgg6/axnPQCt0oZfA2dfP/4+wd86n2TagDbPgCVnodO9gtkbmFtZW5qdW1iZiBtYW5pZmVzdGpleGNsdXNpb25zgaJlc3RhcnQYIWZsZW5ndGgZFooAAAI+anVtYgAAACdqdW1kYzJjbAARABCAAACqADibcQNjMnBhLmNsYWltLnYyAAAAAg9jYm9ypWNhbGdmc2hhMjU2aXNpZ25hdHVyZXhNc2VsZiNqdW1iZj0vYzJwYS91cm46YzJwYTpkMDI4YzdmMC0zY2NiLTQwOGEtYjJlNy0yNWE1ZDZiMjVmOGQvYzJwYS5zaWduYXR1cmVqaW5zdGFuY2VJRHgseG1wOmlpZDplNWE2NzllNS00NjFkLTQ1ZTQtYTZhOC1kZjk3MzRlZjA1YjFyY3JlYXRlZF9hc3NlcnRpb25zg6JjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg4t2a7DhITe4usLMPyKhJPX59v/MbQxCQ7ZczXJIOmxaiY3VybHgqc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5hY3Rpb25zLnYyZGhhc2hYIKs744IOGjjKRZ27PFnZ3vdIiSiI2KoagSiZ8YQ9d5AiomN1cmx4KXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaGFzaC5kYXRhZGhhc2hYIFvXvJ3NAyQB871qYGqAbHEHBx+/XEfTLcx5esg3M0A+dGNsYWltX2dlbmVyYXRvcl9pbmZvo2RuYW1lb0FudGhyb3BpYyBGaWxlc2d2ZXJzaW9uZTEuMC4wa3NwZWNWZXJzaW9uZTIuNC4wAAAQOGp1bWIAAAAoanVtZGMyY3MAEQAQgAAAqgA4m3EDYzJwYS5zaWduYXR1cmUAAAAQCGNib3LShFkCEqIBJhghWQIKMIICBjCCAY2gAwIBAgIUQOWgCu7COdC+uIP6BkIFPWdVEwAwCgYIKoZIzj0EAwMwSTEXMBUGA1UEChMOQW50aHJvcGljLCBQQkMxLjAsBgNVBAMTJUFudGhyb3BpYyBDb250ZW50IENyZWRlbnRpYWxzIFJvb3QgQ0EwHhcNMjYwODA3MTg0MzU2WhcNMjgwODA2MTk0MzU2WjBEMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEpMCcGA1UEAxMgQW50aHJvcGljIENsYXVkZSBDb250ZW50IFNpZ25pbmcwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAASYegpry1AYBRTVNL1CpTlbROnY3dey+UrsF9C3phYrATN3ZHf93Mo8RQN0KOUuOn19P4oWNFWe5n2/She9N7eTo1gwVjAOBgNVHQ8BAf8EBAMCB4AwFQYDVR0lBA4wDAYKKwYBBAGD6F4CATAMBgNVHRMBAf8EAjAAMB8GA1UdIwQYMBaAFM5R4gSBTmRbI/jjxM+aPpzB11zCMAoGCCqGSM49BAMDA2cAMGQCMDFzHRSeAXrSy1WOzkbhPZ6Km2wGTmZ/2gK18k8BQGXyqz88Rdrz6CTX9flAnYNVxgIwcF9c3fVhqmJKpi+UhasNUMko69cyX6STPfta3Q8EjyzDjzoyrol46FP6VFHhvUcJoWNwYWRZDZ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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",
    realme: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAABeCAYAAABsMmD+AAAWfmNhQlgAABZ+anVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAAFlhqdW1iAAAAR2p1bWRjMm1hABEAEIAAAKoAOJtxA3VybjpjMnBhOmRlMTE3ZjU2LTJkYWItNDE3ZS05ZTgyLTgyZmFmMGUxMDY4OAAAAAOTanVtYgAAAClqdW1kYzJhcwARABCAAACqADibcQNjMnBhLmFzc2VydGlvbnMAAAAAuGp1bWIAAABEanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5pbmdyZWRpZW50LnYzAAAAABhjMnNozuZfUNsRC6Yr9F+2/6WpzgAAAGxjYm9yo2lkYzpmb3JtYXRpaW1hZ2UvcG5namluc3RhbmNlSUR4LHhtcDppaWQ6OWNlZTY0MGEtZWUzMC00NGY1LWJmNGQtYWZkNTZkOTg1MTBlbHJlbGF0aW9uc2hpcGhwYXJlbnRPZgAAAeJqdW1iAAAAQWp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuYWN0aW9ucy52MgAAAAAYYzJzaNetXlemb5kDjsR6sueMyM0AAAGZY2JvcqJnYWN0aW9uc4KiZmFjdGlvbmtjMnBhLm9wZW5lZGpwYXJhbWV0ZXJzoWtpbmdyZWRpZW50c4GiY3VybHgtc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5pbmdyZWRpZW50LnYzZGhhc2hYIDYUJAAuJEyWUT5ggpKX4GDhzO+peouP4AMtJtThWpCJpGZhY3Rpb254HWNvbS5hbnRocm9waWMuY2xhdWRlLnByb3ZpZGVkanBhcmFtZXRlcnOheB9jb20uYW50aHJvcGljLm9yaWdpbi1jb25maWRlbmNlZ3Vua25vd25rZGVzY3JpcHRpb254ZkNsYXVkZSBwcm92aWRlZCB0aGlzIGZpbGUgYXQgdGhlIHJlcXVlc3Qgb2YgYSB1c2VyIGFuZCBtYXkgaGF2ZSBjcmVhdGVkIG9yIG1vZGlmaWVkIHRoZSBmaWxlIGNvbnRlbnRzLm1zb2Z0d2FyZUFnZW50oWRuYW1lZkNsYXVkZXJhbGxBY3Rpb25zSW5jbHVkZWT1AAAAyGp1bWIAAABAanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5oYXNoLmRhdGEAAAAAGGMyc2i8PuPwSdW1Xk6PUSY7m1WLAAAAgGNib3KlY2FsZ2ZzaGEyNTZjcGFkTQAAAAAAAAAAAAAAAABkaGFzaFgg0vnPbjrdO8WLeAsOPN0jD83ksGIvwoC9r+lKyGR3u0pkbmFtZW5qdW1iZiBtYW5pZmVzdGpleGNsdXNpb25zgaJlc3RhcnQYIWZsZW5ndGgZFooAAAI+anVtYgAAACdqdW1kYzJjbAARABCAAACqADibcQNjMnBhLmNsYWltLnYyAAAAAg9jYm9ypWNhbGdmc2hhMjU2aXNpZ25hdHVyZXhNc2VsZiNqdW1iZj0vYzJwYS91cm46YzJwYTpkZTExN2Y1Ni0yZGFiLTQxN2UtOWU4Mi04MmZhZjBlMTA2ODgvYzJwYS5zaWduYXR1cmVqaW5zdGFuY2VJRHgseG1wOmlpZDowYTIwMGNjMi1mNTQ2LTQ5YWItOWFiZS1hYTViOGY3YTM2OWZyY3JlYXRlZF9hc3NlcnRpb25zg6JjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFggNhQkAC4kTJZRPmCCkpfgYOHM76l6i4/gAy0m1OFakImiY3VybHgqc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5hY3Rpb25zLnYyZGhhc2hYINe4OF1AHzFQGYgp0glNRCodM2kE5mEW05AfCboaXvHfomN1cmx4KXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaGFzaC5kYXRhZGhhc2hYIEYTvUU5T9+NYSNzBzpa+L9ks8+IWwYGPdnFvsjMxqMidGNsYWltX2dlbmVyYXRvcl9pbmZvo2RuYW1lb0FudGhyb3BpYyBGaWxlc2d2ZXJzaW9uZTEuMC4wa3NwZWNWZXJzaW9uZTIuNC4wAAAQOGp1bWIAAAAoanVtZGMyY3MAEQAQgAAAqgA4m3EDYzJwYS5zaWduYXR1cmUAAAAQCGNib3LShFkCEqIBJhghWQIKMIICBjCCAY2gAwIBAgIUQOWgCu7COdC+uIP6BkIFPWdVEwAwCgYIKoZIzj0EAwMwSTEXMBUGA1UEChMOQW50aHJvcGljLCBQQkMxLjAsBgNVBAMTJUFudGhyb3BpYyBDb250ZW50IENyZWRlbnRpYWxzIFJvb3QgQ0EwHhcNMjYwODA3MTg0MzU2WhcNMjgwODA2MTk0MzU2WjBEMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEpMCcGA1UEAxMgQW50aHJvcGljIENsYXVkZSBDb250ZW50IFNpZ25pbmcwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAASYegpry1AYBRTVNL1CpTlbROnY3dey+UrsF9C3phYrATN3ZHf93Mo8RQN0KOUuOn19P4oWNFWe5n2/She9N7eTo1gwVjAOBgNVHQ8BAf8EBAMCB4AwFQYDVR0lBA4wDAYKKwYBBAGD6F4CATAMBgNVHRMBAf8EAjAAMB8GA1UdIwQYMBaAFM5R4gSBTmRbI/jjxM+aPpzB11zCMAoGCCqGSM49BAMDA2cAMGQCMDFzHRSeAXrSy1WOzkbhPZ6Km2wGTmZ/2gK18k8BQGXyqz88Rdrz6CTX9flAnYNVxgIwcF9c3fVhqmJKpi+UhasNUMko69cyX6STPfta3Q8EjyzDjzoyrol46FP6VFHhvUcJoWNwYWRZDZ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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",
    infinix: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAABVCAYAAAAG9ZA9AAAWfmNhQlgAABZ+anVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAAFlhqdW1iAAAAR2p1bWRjMm1hABEAEIAAAKoAOJtxA3VybjpjMnBhOjkzYmJmYWRlLTAxNzUtNGJmNC05NmJmLWE1Njk5YTI0NmUwZAAAAAOTanVtYgAAAClqdW1kYzJhcwARABCAAACqADibcQNjMnBhLmFzc2VydGlvbnMAAAAAuGp1bWIAAABEanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5pbmdyZWRpZW50LnYzAAAAABhjMnNohsgLNKqS/xYBMzUiFQPE8AAAAGxjYm9yo2lkYzpmb3JtYXRpaW1hZ2UvcG5namluc3RhbmNlSUR4LHhtcDppaWQ6Y2FmYzE0YmMtZTlhNC00ODc2LTkxMmQtOTU4OWYzMDU0ZTI1bHJlbGF0aW9uc2hpcGhwYXJlbnRPZgAAAeJqdW1iAAAAQWp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuYWN0aW9ucy52MgAAAAAYYzJzaCSXGLwIFuzfM2B/jUOVAzoAAAGZY2JvcqJnYWN0aW9uc4KiZmFjdGlvbmtjMnBhLm9wZW5lZGpwYXJhbWV0ZXJzoWtpbmdyZWRpZW50c4GiY3VybHgtc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5pbmdyZWRpZW50LnYzZGhhc2hYIIa+Ewc0VuDVybH8TI6BKkHbJKPW7goUGuPib2XdfsxypGZhY3Rpb254HWNvbS5hbnRocm9waWMuY2xhdWRlLnByb3ZpZGVkanBhcmFtZXRlcnOheB9jb20uYW50aHJvcGljLm9yaWdpbi1jb25maWRlbmNlZ3Vua25vd25rZGVzY3JpcHRpb254ZkNsYXVkZSBwcm92aWRlZCB0aGlzIGZpbGUgYXQgdGhlIHJlcXVlc3Qgb2YgYSB1c2VyIGFuZCBtYXkgaGF2ZSBjcmVhdGVkIG9yIG1vZGlmaWVkIHRoZSBmaWxlIGNvbnRlbnRzLm1zb2Z0d2FyZUFnZW50oWRuYW1lZkNsYXVkZXJhbGxBY3Rpb25zSW5jbHVkZWT1AAAAyGp1bWIAAABAanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5oYXNoLmRhdGEAAAAAGGMyc2gHkcAClOMckAXF4Kc0Kk4yAAAAgGNib3KlY2FsZ2ZzaGEyNTZjcGFkTQAAAAAAAAAAAAAAAABkaGFzaFggbK+gwojnMHQmTmtAqluQ+ZNUsxGUE8KnlEDcXNO7n7BkbmFtZW5qdW1iZiBtYW5pZmVzdGpleGNsdXNpb25zgaJlc3RhcnQYIWZsZW5ndGgZFooAAAI+anVtYgAAACdqdW1kYzJjbAARABCAAACqADibcQNjMnBhLmNsYWltLnYyAAAAAg9jYm9ypWNhbGdmc2hhMjU2aXNpZ25hdHVyZXhNc2VsZiNqdW1iZj0vYzJwYS91cm46YzJwYTo5M2JiZmFkZS0wMTc1LTRiZjQtOTZiZi1hNTY5OWEyNDZlMGQvYzJwYS5zaWduYXR1cmVqaW5zdGFuY2VJRHgseG1wOmlpZDphODZkMDgzYy0zYmMzLTQ4YTktODEyZS0xNzVlODA2NzE1N2RyY3JlYXRlZF9hc3NlcnRpb25zg6JjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgghr4TBzRW4NXJsfxMjoEqQdsko9buChQa4+JvZd1+zHKiY3VybHgqc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5hY3Rpb25zLnYyZGhhc2hYIBrNBEpAQyrQsUV/d9Q5XuByjOIoXiqj/eNR4hwt+lCiomN1cmx4KXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaGFzaC5kYXRhZGhhc2hYIEi8Dsgf0zE1WzNhjQek8Y7zQhDakDZkqOyfWch1dD0UdGNsYWltX2dlbmVyYXRvcl9pbmZvo2RuYW1lb0FudGhyb3BpYyBGaWxlc2d2ZXJzaW9uZTEuMC4wa3NwZWNWZXJzaW9uZTIuNC4wAAAQOGp1bWIAAAAoanVtZGMyY3MAEQAQgAAAqgA4m3EDYzJwYS5zaWduYXR1cmUAAAAQCGNib3LShFkCEqIBJhghWQIKMIICBjCCAY2gAwIBAgIUQOWgCu7COdC+uIP6BkIFPWdVEwAwCgYIKoZIzj0EAwMwSTEXMBUGA1UEChMOQW50aHJvcGljLCBQQkMxLjAsBgNVBAMTJUFudGhyb3BpYyBDb250ZW50IENyZWRlbnRpYWxzIFJvb3QgQ0EwHhcNMjYwODA3MTg0MzU2WhcNMjgwODA2MTk0MzU2WjBEMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEpMCcGA1UEAxMgQW50aHJvcGljIENsYXVkZSBDb250ZW50IFNpZ25pbmcwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAASYegpry1AYBRTVNL1CpTlbROnY3dey+UrsF9C3phYrATN3ZHf93Mo8RQN0KOUuOn19P4oWNFWe5n2/She9N7eTo1gwVjAOBgNVHQ8BAf8EBAMCB4AwFQYDVR0lBA4wDAYKKwYBBAGD6F4CATAMBgNVHRMBAf8EAjAAMB8GA1UdIwQYMBaAFM5R4gSBTmRbI/jjxM+aPpzB11zCMAoGCCqGSM49BAMDA2cAMGQCMDFzHRSeAXrSy1WOzkbhPZ6Km2wGTmZ/2gK18k8BQGXyqz88Rdrz6CTX9flAnYNVxgIwcF9c3fVhqmJKpi+UhasNUMko69cyX6STPfta3Q8EjyzDjzoyrol46FP6VFHhvUcJoWNwYWRZDZ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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",
    oppo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAABhCAYAAACZHtWGAAAWfmNhQlgAABZ+anVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAAFlhqdW1iAAAAR2p1bWRjMm1hABEAEIAAAKoAOJtxA3VybjpjMnBhOjFmODU4OTZhLTgwZGEtNDRkYy04MGJiLTc1YTdmMWU3M2NiYgAAAAOTanVtYgAAAClqdW1kYzJhcwARABCAAACqADibcQNjMnBhLmFzc2VydGlvbnMAAAAAuGp1bWIAAABEanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5pbmdyZWRpZW50LnYzAAAAABhjMnNosk6mR8dttRul4C7Rlu+0HAAAAGxjYm9yo2lkYzpmb3JtYXRpaW1hZ2UvcG5namluc3RhbmNlSUR4LHhtcDppaWQ6MTMzMWExMzktNzY5Zi00NmJmLWFjNjctMTI5MDA5NzU1NTMxbHJlbGF0aW9uc2hpcGhwYXJlbnRPZgAAAeJqdW1iAAAAQWp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuYWN0aW9ucy52MgAAAAAYYzJzaAIqnkdH0eDhvaFjd3dhlecAAAGZY2JvcqJnYWN0aW9uc4KiZmFjdGlvbmtjMnBhLm9wZW5lZGpwYXJhbWV0ZXJzoWtpbmdyZWRpZW50c4GiY3VybHgtc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5pbmdyZWRpZW50LnYzZGhhc2hYIFE+04SXQLdpHKJYOX/9Xuk6KoLZfM5FmenkipOjoodfpGZhY3Rpb254HWNvbS5hbnRocm9waWMuY2xhdWRlLnByb3ZpZGVkanBhcmFtZXRlcnOheB9jb20uYW50aHJvcGljLm9yaWdpbi1jb25maWRlbmNlZ3Vua25vd25rZGVzY3JpcHRpb254ZkNsYXVkZSBwcm92aWRlZCB0aGlzIGZpbGUgYXQgdGhlIHJlcXVlc3Qgb2YgYSB1c2VyIGFuZCBtYXkgaGF2ZSBjcmVhdGVkIG9yIG1vZGlmaWVkIHRoZSBmaWxlIGNvbnRlbnRzLm1zb2Z0d2FyZUFnZW50oWRuYW1lZkNsYXVkZXJhbGxBY3Rpb25zSW5jbHVkZWT1AAAAyGp1bWIAAABAanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5oYXNoLmRhdGEAAAAAGGMyc2glljC0cROEZbTNvZVEsegIAAAAgGNib3KlY2FsZ2ZzaGEyNTZjcGFkTQAAAAAAAAAAAAAAAABkaGFzaFgg20twxrWykOavsayNmAVp/3R1LUn1nOSet7dOqrLVlSVkbmFtZW5qdW1iZiBtYW5pZmVzdGpleGNsdXNpb25zgaJlc3RhcnQYIWZsZW5ndGgZFooAAAI+anVtYgAAACdqdW1kYzJjbAARABCAAACqADibcQNjMnBhLmNsYWltLnYyAAAAAg9jYm9ypWNhbGdmc2hhMjU2aXNpZ25hdHVyZXhNc2VsZiNqdW1iZj0vYzJwYS91cm46YzJwYToxZjg1ODk2YS04MGRhLTQ0ZGMtODBiYi03NWE3ZjFlNzNjYmIvYzJwYS5zaWduYXR1cmVqaW5zdGFuY2VJRHgseG1wOmlpZDowM2E1YWU0ZC1kODg4LTQzMTgtYTMwYS1kODQ4ZDhjNjFkZTdyY3JlYXRlZF9hc3NlcnRpb25zg6JjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFggUT7ThJdAt2kcolg5f/1e6Toqgtl8zkWZ6eSKk6Oih1+iY3VybHgqc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5hY3Rpb25zLnYyZGhhc2hYIBKsILf5aGh0fi2WeKbNdRiXSO7XNj/QYGxkwNWVyuTxomN1cmx4KXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaGFzaC5kYXRhZGhhc2hYIOaygc77HA0+McxfconemXoBrvBZ44y5VRmP6ay6/VcKdGNsYWltX2dlbmVyYXRvcl9pbmZvo2RuYW1lb0FudGhyb3BpYyBGaWxlc2d2ZXJzaW9uZTEuMC4wa3NwZWNWZXJzaW9uZTIuNC4wAAAQOGp1bWIAAAAoanVtZGMyY3MAEQAQgAAAqgA4m3EDYzJwYS5zaWduYXR1cmUAAAAQCGNib3LShFkCEqIBJhghWQIKMIICBjCCAY2gAwIBAgIUQOWgCu7COdC+uIP6BkIFPWdVEwAwCgYIKoZIzj0EAwMwSTEXMBUGA1UEChMOQW50aHJvcGljLCBQQkMxLjAsBgNVBAMTJUFudGhyb3BpYyBDb250ZW50IENyZWRlbnRpYWxzIFJvb3QgQ0EwHhcNMjYwODA3MTg0MzU2WhcNMjgwODA2MTk0MzU2WjBEMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEpMCcGA1UEAxMgQW50aHJvcGljIENsYXVkZSBDb250ZW50IFNpZ25pbmcwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAASYegpry1AYBRTVNL1CpTlbROnY3dey+UrsF9C3phYrATN3ZHf93Mo8RQN0KOUuOn19P4oWNFWe5n2/She9N7eTo1gwVjAOBgNVHQ8BAf8EBAMCB4AwFQYDVR0lBA4wDAYKKwYBBAGD6F4CATAMBgNVHRMBAf8EAjAAMB8GA1UdIwQYMBaAFM5R4gSBTmRbI/jjxM+aPpzB11zCMAoGCCqGSM49BAMDA2cAMGQCMDFzHRSeAXrSy1WOzkbhPZ6Km2wGTmZ/2gK18k8BQGXyqz88Rdrz6CTX9flAnYNVxgIwcF9c3fVhqmJKpi+UhasNUMko69cyX6STPfta3Q8EjyzDjzoyrol46FP6VFHhvUcJoWNwYWRZDZ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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"
};


// Coloca cada logo nas imagens marcadas com data-logo="..."

function aplicarLogos() {

    document.querySelectorAll("img[data-logo]").forEach(imagem => {

        const logo = LOGOS[imagem.dataset.logo];

        if (logo) {
            imagem.src = logo;
        }
    });

    const icone = document.getElementById("favicon");

    if (icone) {
        icone.href = LOGOS.arenacell;
    }
}