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
        "iPhone X",
        "iPhone XR",
        "iPhone XS",
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
        "Galaxy A01",
        "Galaxy A01 Core",
        "Galaxy A02",
        "Galaxy A02s",
        "Galaxy A03",
        "Galaxy A03s",
        "Galaxy A03 Core",
        "Galaxy A04",
        "Galaxy A04s",
        "Galaxy A05",
        "Galaxy A05s",
        "Galaxy A06",
        "Galaxy A10",
        "Galaxy A10s",
        "Galaxy A11",
        "Galaxy A12",
        "Galaxy A13",
        "Galaxy A14",
        "Galaxy A15",
        "Galaxy A16",
        "Galaxy A20",
        "Galaxy A20e",
        "Galaxy A20s",
        "Galaxy A21",
        "Galaxy A21s",
        "Galaxy A22",
        "Galaxy A23",
        "Galaxy A24",
        "Galaxy A25",
        "Galaxy A30",
        "Galaxy A30s",
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
        "Galaxy A52",
        "Galaxy A52s",
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
        "Galaxy S20 Ultra",
        "Galaxy S20 FE",
        "Galaxy S21",
        "Galaxy S21+",
        "Galaxy S21 Ultra",
        "Galaxy S21 FE",
        "Galaxy S22",
        "Galaxy S22+",
        "Galaxy S22 Ultra",
        "Galaxy S23",
        "Galaxy S23+",
        "Galaxy S23 Ultra",
        "Galaxy S23 FE",
        "Galaxy S24",
        "Galaxy S24 FE",
        "Galaxy S24+",
        "Galaxy S24 Ultra",
        "Galaxy S25+",
        "Galaxy S25",
        "Galaxy S25 FE",
        "Galaxy S25 Ultra",
        "Galaxy S25 Edge",
        "Galaxy S26",
        "Galaxy S26+",
        "Galaxy S26 Ultra"
    ],

    motorola: [
        "Moto G4",
        "Moto G4 Plus",
        "Moto G5",
        "Moto G5 Plus",
        "Moto G5S",
        "Moto G5S Plus",
        "Moto G6",
        "Moto G6 Plus",
        "Moto G6 Play",
        "Moto G7",
        "Moto G7 Play",
        "Moto G7 Power",
        "Moto G7 Plus",
        "Moto G8",
        "Moto G8 Play",
        "Moto G8 Power",
        "Moto G8 Plus",
        "Moto G9",
        "Moto G9 Play",
        "Moto G9 Power",
        "Moto G9 Plus",
        "Moto G10",
        "Moto G10 Power",
        "Moto G13",
        "Moto G14",
        "Moto G15",
        "Moto G20",
        "Moto G22",
        "Moto G23",
        "Moto G24",
        "Moto G24 Power",
        "Moto G30",
        "Moto G31",
        "Moto G32",
        "Moto G34",
        "Moto G35",
        "Moto G40",
        "Moto G40 Fusion",
        "Moto G41",
        "Moto G45",
        "Moto G50",
        "Moto G51",
        "Moto G52",
        "Moto G53",
        "Moto G54",
        "Moto G55",
        "Moto G56",
        "Moto G60",
        "Moto G60s",
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
        "Moto E7",
        "Moto E7 Plus",
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
        "Moto Edge",
        "Moto Edge+",
        "Moto Edge 20",
        "Moto Edge 20 Lite",
        "Moto Edge 20 Pro",
        "Moto Edge 30",
        "Moto Edge 30 Neo",
        "Moto Edge 30 Pro",
        "Moto Edge 30 Fusion",
        "Moto Edge 40",
        "Moto Edge 40 Neo",
        "Moto Edge 40 Pro",
        "Moto Edge 50",
        "Moto Edge 50 Fusion",
        "Moto Edge 50 Pro",
        "Moto Edge 50 Ultra",
        "Moto Edge 60 Neo",
        "Moto Edge 60 Pro",
        "Moto Edge 60"
    ],

    xiaomi: [
        "Mi 8",
        "Mi 8 Lite",
        "Mi 9",
        "Mi 9 SE",
        "Mi 9T",
        "Mi 9T Pro",
        "Mi 10",
        "Mi 10 Lite",
        "Mi 10 Pro",
        "Mi 10T",
        "Mi 10T Pro",
        "Mi 11",
        "Mi 11 Lite",
        "Mi 11i",
        "Mi 11 Ultra",
        "Xiaomi 12",
        "Xiaomi 12 Lite",
        "Xiaomi 12X",
        "Xiaomi 12 Pro",
        "Xiaomi 12T",
        "Xiaomi 12T Pro",
        "Xiaomi 13",
        "Xiaomi 13T",
        "Xiaomi 13T Pro",
        "Xiaomi 13 Lite",
        "Xiaomi 13 Pro",
        "Xiaomi 13 Ultra",
        "Xiaomi 14",
        "Xiaomi 14 Pro",
        "Xiaomi 14 Ultra",
        "Xiaomi 14T",
        "Xiaomi 14T Pro",
        "Xiaomi 15",
        "Xiaomi 15 Pro",
        "Xiaomi 15 Ultra",
        "Redmi Note 7",
        "Redmi Note 8",
        "Redmi Note 8 Pro",
        "Redmi Note 9",
        "Redmi Note 9S",
        "Redmi Note 9 Pro",
        "Redmi Note 10",
        "Redmi Note 10 Pro",
        "Redmi Note 10S",
        "Redmi Note 11",
        "Redmi Note 11 Pro",
        "Redmi Note 11S",
        "Redmi Note 12",
        "Redmi Note 12 Pro",
        "Redmi Note 12S",
        "Redmi Note 13",
        "Redmi Note 13 Pro",
        "Redmi Note 13 Pro+",
        "Redmi Note 14",
        "Redmi Note 14 Pro",
        "Redmi Note 14 Pro+",
        "Redmi Note 14S",
        "Redmi Note 15",
        "Redmi Note 15 Pro",
        "Redmi Note 15 Pro+",
        "Redmi 9",
        "Redmi 9A",
        "Redmi 9C",
        "Redmi 10",
        "Redmi 10C",
        "Redmi 12",
        "Redmi 12C",
        "Redmi 13",
        "Redmi 13C",
        "Redmi 14C",
        "Redmi 15",
        "Redmi 15C",
        "POCO F1",
        "POCO F2 Pro",
        "POCO F3",
        "POCO F4",
        "POCO F4 GT",
        "POCO F5",
        "POCO F5 Pro",
        "POCO F6",
        "POCO F6 Pro",
        "POCO F7",
        "POCO X2",
        "POCO X3",
        "POCO X3 NFC",
        "POCO X3 Pro",
        "POCO X4 Pro",
        "POCO X4 GT",
        "POCO X5",
        "POCO X5 Pro",
        "POCO X6",
        "POCO X6 Pro",
        "POCO X7",
        "POCO X7 Pro",
        "POCO M2",
        "POCO M3",
        "POCO M4",
        "POCO M4 Pro",
        "POCO M5",
        "POCO M5s",
        "POCO M6",
        "POCO M6 Pro",
        "POCO M7",
        "POCO M7 Pro",
    ],

    realme: [
        "Realme 5",
        "Realme 5 Pro",
        "Realme 6",
        "Realme 6 Pro",
        "Realme 7",
        "Realme 7 Pro",
        "Realme 8", 
        "Realme 8i", 
        "Realme 8 Pro",
        "Realme 9",
        "Realme 9 Pro",
        "Realme 9 Pro+",
        "Realme 9i",
        "Realme 10",
        "Realme 10 Pro",
        "Realme 10 Pro+",
        "Realme 11",
        "Realme 11x",
        "Realme 11 Pro",
        "Realme 11 Pro+",
        "Realme 12",
        "Realme 12+",
        "Realme 12 Pro",
        "Realme 12 Pro+",
        "Realme 13",
        "Realme 13 Pro",
        "Realme 13 Pro+",
        "Realme 13+",
        "Realme 14",
        "Realme 14 Pro",
        "Realme 14 Pro+",
        "Realme GT",
        "Realme GT Neo",
        "Realme GT Neo 2",
        "Realme GT 2",
        "Realme GT 2 Pro",
        "Realme GT 3",
        "Realme GT 5",
        "Realme GT 6",
        "Realme GT 6T",
        "Realme GT 7",
        "Realme GT 7T",
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

    lg: [
        "LG G4",
        "LG G5",
        "LG G6",
        "LG G7 ThinQ",
        "LG G8 ThinQ",
        "LG G8X ThinQ",
        "LG V20",
        "LG V30",
        "LG V35 ThinQ",
        "LG V40 ThinQ",
        "LG V50 ThinQ",
        "LG V60 ThinQ",
        "LG K10",
        "LG K11",
        "LG K12",
        "LG K20",
        "LG K20 Plus",
        "LG K22",
        "LG K30",
        "LG K31",
        "LG K40",
        "LG K41S",
        "LG K42",
        "LG K43",
        "LG K44",
        "LG K50",
        "LG K51",
        "LG K51S",
        "LG K52",
        "LG K54",
        "LG K60",
        "LG K61",
        "LG K62",
        "LG K70",
        "LG K71",
        "LG K92",
        "LG Q6",
        "LG Q7",
        "LG Q8",
        "LG Q9",
        "LG Velvet",
        "LG Wing",
        "LG Stylo 6"
    ],

    oppo: [
        "Oppo Reno 2",
        "Oppo Reno 2Z",
        "Oppo Reno 3",
        "Oppo Reno 3A",
        "Oppo Reno 3 Pro",
        "Oppo Reno 4",
        "Oppo Reno 4Z",
        "Oppo Reno 4 Pro",
        "Oppo Reno 5",
        "Oppo Reno 5Z",
        "Oppo Reno 5 Pro",
        "Oppo Reno 6",
        "Oppo Reno 6Z",
        "Oppo Reno 6 Pro",
        "Oppo Reno 7",
        "Oppo Reno 7Z",
        "Oppo Reno 7 Pro",
        "Oppo Reno 8",
        "Oppo Reno 8T",
        "Oppo Reno 8 Pro",
        "Oppo Reno 9",
        "Oppo Reno 9A",
        "Oppo Reno 9 Pro",
        "Oppo Reno 10",
        "Oppo Reno 10 Pro",
        "Oppo Reno 10 Pro+",
        "Oppo Reno 11",
        "Oppo Reno 11 Pro",
        "Oppo Reno 12",
        "Oppo Reno 12 Pro",
        "Oppo Reno 13",
        "Oppo Reno 13 Pro",
        "Oppo Reno 14",
        "Oppo Reno 14 Pro",
        "Oppo Find X",
        "Oppo Find X2",
        "Oppo Find X2 Pro",
        "Oppo Find X3",
        "Oppo Find X3 Pro",
        "Oppo Find X5",
        "Oppo Find X5 Pro",
        "Oppo Find X6",
        "Oppo Find X6 Pro",
        "Oppo Find X7",
        "Oppo Find X7 Ultra",
        "Oppo Find X8",
        "Oppo Find X8 Pro",
    ]
};


// ============================================================
// LOCALSTORAGE
// ============================================================

function criarChaveLocal(
    marca,
    modelo,
    peca
) {

    return (
        `arenacell_${marca}_${modelo}_${peca}`
    );
}


// ============================================================
// SALVAR NO LOCALSTORAGE
// ============================================================

function salvarPrecoLocal(
    marca,
    modelo,
    peca,
    valor
) {

    const chave =
        criarChaveLocal(
            marca,
            modelo,
            peca
        );


    localStorage.setItem(
        chave,
        valor
    );
}


// ============================================================
// BUSCAR DO LOCALSTORAGE
// ============================================================

function buscarPrecoLocal(
    marca,
    modelo,
    peca
) {

    const chave =
        criarChaveLocal(
            marca,
            modelo,
            peca
        );


    return (
        localStorage.getItem(
            chave
        ) || ""
    );
}


// ============================================================
// FIREBASE - SALVAR PREÇO
// ============================================================

async function salvarPrecoFirebase(
    marca,
    modelo,
    peca,
    valor
) {

    if (
        !FIREBASE_ATIVO ||
        !db ||
        !firebaseRef ||
        !firebaseSet
    ) {

        return false;
    }


    try {

        const caminho =
            `precos/${marca}/${modelo}/${peca}`;


        await firebaseSet(

            firebaseRef(
                db,
                caminho
            ),

            valor
        );


        console.log(
            "Preço salvo no Firebase:",
            marca,
            modelo,
            peca,
            valor
        );


        return true;


    } catch (erro) {

        console.error(
            "Erro ao salvar preço no Firebase:",
            erro
        );


        return false;
    }
}


// ============================================================
// FIREBASE - BUSCAR TODOS OS PREÇOS DA MARCA
// ============================================================
//
// Em vez de fazer uma consulta para cada modelo,
// fazemos apenas uma consulta:
//
// precos/iphone
//
// precos/samsung
//
// precos/motorola
//
// etc.
//
// ============================================================

async function buscarPrecosFirebase(
    marca
) {

    if (
        !FIREBASE_ATIVO ||
        !db ||
        !firebaseRef ||
        !firebaseGet
    ) {

        return {};
    }


    try {

        const caminho =
            `precos/${marca}`;


        const snapshot =
            await firebaseGet(

                firebaseRef(
                    db,
                    caminho
                )
            );


        if (
            snapshot.exists()
        ) {

            return snapshot.val();
        }


        return {};


    } catch (erro) {

        console.error(
            "Erro ao buscar preços do Firebase:",
            erro
        );


        return {};
    }
}


// ============================================================
// SALVAR PREÇO
// ============================================================

async function salvarPreco(
    marca,
    modelo,
    peca,
    valor
) {

    // --------------------------------------------------------
    // 1. Salva imediatamente no navegador
    // --------------------------------------------------------

    salvarPrecoLocal(
        marca,
        modelo,
        peca,
        valor
    );


    // --------------------------------------------------------
    // 2. Salva no Firebase
    // --------------------------------------------------------

    if (
        FIREBASE_ATIVO &&
        db
    ) {

        const salvo =
            await salvarPrecoFirebase(

                marca,
                modelo,
                peca,
                valor
            );


        if (!salvo) {

            console.warn(
                "O preço foi salvo localmente, mas não foi possível salvar no Firebase."
            );
        }
    }
}


// ============================================================
// ESCAPAR HTML
// ============================================================
//
// Evita problemas caso um modelo contenha caracteres especiais.
//
// ============================================================

function escaparHTML(
    valor
) {

    return String(valor)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


// ============================================================
// ESCAPAR ATRIBUTO HTML
// ============================================================

function escaparAtributo(
    valor
) {

    return escaparHTML(
        valor
    );
}


// ============================================================
// ABRIR MARCA
// ============================================================

async function abrirMarca(
    marca
) {

    const titulo =
        document.getElementById(
            "tituloMarca"
        );


    const conteudo =
        document.getElementById(
            "conteudo"
        );


    // --------------------------------------------------------
    // Verifica elementos HTML
    // --------------------------------------------------------

    if (
        !titulo ||
        !conteudo
    ) {

        console.error(
            "Não foi possível encontrar tituloMarca ou conteudo."
        );

        return;
    }


    // --------------------------------------------------------
    // Verifica se a marca existe
    // --------------------------------------------------------

    if (
        typeof celulares === "undefined" ||
        !celulares[marca]
    ) {

        console.error(
            "Marca não encontrada:",
            marca
        );

        return;
    }


    // --------------------------------------------------------
    // Atualiza título
    // --------------------------------------------------------

    titulo.textContent =
        marca.toUpperCase();


    // --------------------------------------------------------
    // Mostra carregamento
    // --------------------------------------------------------

    conteudo.innerHTML = `

        <div class="carregando">

            Carregando modelos...

        </div>

    `;


    // --------------------------------------------------------
    // Busca todos os preços da marca
    // --------------------------------------------------------

    let precosFirebase = {};


    if (
        FIREBASE_ATIVO &&
        db
    ) {

        precosFirebase =
            await buscarPrecosFirebase(
                marca
            );
    }


    // --------------------------------------------------------
    // Cria tabela
    // --------------------------------------------------------

    let html = `

        <table id="tabelaModelos">

            <thead>

                <tr>

                    <th>Modelo</th>

                    <th>Frontal</th>

                    <th>Placa de Carga</th>

                    <th>Bateria</th>

                    <th>FPC</th>

                </tr>

            </thead>

            <tbody>

    `;


    // --------------------------------------------------------
    // Cria linhas dos modelos
    // --------------------------------------------------------

    celulares[marca].forEach(

        modelo => {

            const dadosFirebase =
                precosFirebase[modelo] || {};


            const frontal =
                dadosFirebase.frontal !== undefined
                    ? dadosFirebase.frontal
                    : buscarPrecoLocal(
                        marca,
                        modelo,
                        "frontal"
                    );


            const placa =
                dadosFirebase.placa !== undefined
                    ? dadosFirebase.placa
                    : buscarPrecoLocal(
                        marca,
                        modelo,
                        "placa"
                    );


            const bateria =
                dadosFirebase.bateria !== undefined
                    ? dadosFirebase.bateria
                    : buscarPrecoLocal(
                        marca,
                        modelo,
                        "bateria"
                    );


            const fpc =
                dadosFirebase.fpc !== undefined
                    ? dadosFirebase.fpc
                    : buscarPrecoLocal(
                        marca,
                        modelo,
                        "fpc"
                    );


            html += `

                <tr>

                    <td class="modelo">

                        ${escaparHTML(modelo)}

                    </td>


                    <td>

                        <input
                            type="text"
                            class="preco"
                            placeholder="R$"
                            value="${escaparAtributo(frontal)}"
                            data-marca="${escaparAtributo(marca)}"
                            data-modelo="${escaparAtributo(modelo)}"
                            data-peca="frontal"
                        >

                    </td>


                    <td>

                        <input
                            type="text"
                            class="preco"
                            placeholder="R$"
                            value="${escaparAtributo(placa)}"
                            data-marca="${escaparAtributo(marca)}"
                            data-modelo="${escaparAtributo(modelo)}"
                            data-peca="placa"
                        >

                    </td>


                    <td>

                        <input
                            type="text"
                            class="preco"
                            placeholder="R$"
                            value="${escaparAtributo(bateria)}"
                            data-marca="${escaparAtributo(marca)}"
                            data-modelo="${escaparAtributo(modelo)}"
                            data-peca="bateria"
                        >

                    </td>


                    <td>

                        <input
                            type="text"
                            class="preco"
                            placeholder="R$"
                            value="${escaparAtributo(fpc)}"
                            data-marca="${escaparAtributo(marca)}"
                            data-modelo="${escaparAtributo(modelo)}"
                            data-peca="fpc"
                        >

                    </td>

                </tr>

            `;
        }
    );


    html += `

            </tbody>

        </table>

    `;


    // --------------------------------------------------------
    // Mostra tabela
    // --------------------------------------------------------

    conteudo.innerHTML =
        html;


    // --------------------------------------------------------
    // Adiciona eventos
    // --------------------------------------------------------

    adicionarEventosPrecos();


    // --------------------------------------------------------
    // Limpa pesquisa
    // --------------------------------------------------------

    const pesquisa =
        document.getElementById(
            "pesquisa"
        );


    if (pesquisa) {

        pesquisa.value =
            "";
    }
}


// ============================================================
// SALVAMENTO AUTOMÁTICO COM ATRASO
// ============================================================

const temporizadoresSalvar =
    new Map();


function programarSalvamento(
    input
) {

    const marca =
        input.dataset.marca;


    const modelo =
        input.dataset.modelo;


    const peca =
        input.dataset.peca;


    const valor =
        input.value.trim();


    const chave =
        `${marca}|${modelo}|${peca}`;


    // Salva imediatamente no LocalStorage

    salvarPrecoLocal(
        marca,
        modelo,
        peca,
        valor
    );


    // Cancela timer anterior

    if (
        temporizadoresSalvar.has(
            chave
        )
    ) {

        clearTimeout(
            temporizadoresSalvar.get(
                chave
            )
        );
    }


    // Salva no Firebase após 500ms
    // sem novas alterações

    const timer =
        setTimeout(

            async () => {

                await salvarPreco(

                    marca,

                    modelo,

                    peca,

                    valor
                );


                temporizadoresSalvar.delete(
                    chave
                );

            },

            500

        );


    temporizadoresSalvar.set(
        chave,
        timer
    );
}


// ============================================================
// EVENTOS DOS CAMPOS DE PREÇO
// ============================================================

function adicionarEventosPrecos() {

    const inputs =
        document.querySelectorAll(
            ".preco"
        );


    inputs.forEach(

        input => {

            // ------------------------------------------------
            // Salva enquanto digita
            // ------------------------------------------------

            input.addEventListener(

                "input",

                function() {

                    programarSalvamento(
                        this
                    );

                }

            );


            // ------------------------------------------------
            // Salva ao sair do campo
            // ------------------------------------------------

            input.addEventListener(

                "change",

                async function() {

                    const marca =
                        this.dataset.marca;


                    const modelo =
                        this.dataset.modelo;


                    const peca =
                        this.dataset.peca;


                    const valor =
                        this.value.trim();


                    await salvarPreco(

                        marca,

                        modelo,

                        peca,

                        valor
                    );

                }

            );


            // ------------------------------------------------
            // Salva ao pressionar Enter
            // ------------------------------------------------

            input.addEventListener(

                "keydown",

                function(event) {

                    if (
                        event.key === "Enter"
                    ) {

                        event.preventDefault();

                        this.blur();

                    }

                }

            );

        }

    );
}


// ============================================================
// PESQUISAR MODELO
// ============================================================

function pesquisarModelo() {

    const pesquisa =
        document.getElementById(
            "pesquisa"
        );


    if (!pesquisa) {

        return;
    }


    const filtro =
        pesquisa.value
            .toLowerCase()
            .trim();


    const linhas =
        document.querySelectorAll(
            "#tabelaModelos tbody tr"
        );


    linhas.forEach(

        linha => {

            const modeloElemento =
                linha.querySelector(
                    ".modelo"
                );


            if (!modeloElemento) {

                return;
            }


            const modelo =
                modeloElemento.textContent
                    .toLowerCase()
                    .trim();


            linha.style.display =
                modelo.includes(
                    filtro
                )
                    ? ""
                    : "none";

        }

    );
}


// ============================================================
// CONFIGURAR BOTÕES DAS MARCAS
// ============================================================
//
// Funciona com:
//
// onclick="abrirMarca('iphone')"
//
// e também com:
//
// data-marca="iphone"
//
// ============================================================

function configurarBotoesMarcas() {

    const botoes = document.querySelectorAll(".marca");

    console.log("Botões encontrados:", botoes.length);

    botoes.forEach((botao) => {

        botao.addEventListener("click", () => {

            const marca = botao.getAttribute("data-marca");

            console.log("Botão clicado:", marca);

            if (!marca) {
                console.error("Este botão não possui data-marca.");
                return;
            }

            abrirMarca(marca);

        });

    });

}


// ============================================================
// SALVAR DADOS ANTES DE FECHAR
// ============================================================
//
// O LocalStorage é salvo imediatamente durante a digitação.
// Isso garante que os dados locais permaneçam mesmo se a página
// for fechada.
//
// O Firebase é sincronizado pelo salvamento automático.
//
// ============================================================

window.addEventListener(

    "beforeunload",

    function() {

        const inputs =
            document.querySelectorAll(
                ".preco"
            );


        inputs.forEach(

            input => {

                const marca =
                    input.dataset.marca;


                const modelo =
                    input.dataset.modelo;


                const peca =
                    input.dataset.peca;


                const valor =
                    input.value.trim();


                if (
                    marca &&
                    modelo &&
                    peca
                ) {

                    salvarPrecoLocal(

                        marca,

                        modelo,

                        peca,

                        valor

                    );

                }

            }

        );

    }

);


// ============================================================
// INICIALIZAÇÃO
// ============================================================

document.addEventListener("DOMContentLoaded", async () => {

    console.log("Página carregada.");

    configurarBotoesMarcas();

    const pesquisa = document.getElementById("pesquisa");

    if (pesquisa) {
        pesquisa.addEventListener(
            "input",
            pesquisarModelo
        );
    }

    await iniciarFirebase();

    console.log("ArenaCell iniciado com sucesso!");

});


// ============================================================
// DISPONIBILIZA ABRIR MARCA GLOBALMENTE
// ============================================================
//
// Permite que o seu HTML atual continue funcionando:
//
// onclick="abrirMarca('iphone')"
//
// ============================================================

window.abrirMarca =
    abrirMarca;