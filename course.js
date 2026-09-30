// Sintesi ed esercizi originali in italiano, rielaborati sulle sezioni indicate. Nessun testo estratto distribuito.
export const courseRevision="lehninger-8-v1";
export const books=[
  {
    "id": "lehninger",
    "title": "Lehninger · Principles of Biochemistry · 8th edition",
    "description": "Manuale principale. Percorso e quiz in italiano; pagine PDF riferite alla copia fornita."
  },
  {
    "id": "cozzani",
    "title": "Biochimica degli alimenti e della nutrizione",
    "description": "Manuale integrativo per gli aspetti alimentari e nutrizionali."
  }
];
export const course=[
  {
    "id": "fondamenti",
    "title": "Le basi: cellule, biomolecole ed energia",
    "chapter": 1,
    "sections": [
      "1.1",
      "1.2",
      "1.3"
    ],
    "pages": [
      104,
      188
    ],
    "pdfPage": 104,
    "sourceBook": "lehninger",
    "minutes": 15,
    "concept": "La biochimica collega le proprietà delle molecole alle funzioni delle cellule. Gruppi funzionali e forma tridimensionale determinano come le biomolecole interagiscono. Una cellula mantiene uno stato stazionario dinamico: scambia materia ed energia e consuma risorse per conservare la propria organizzazione. Catabolismo e anabolismo sono collegati, ma non sono la stessa sequenza di reazioni in direzioni opposte.",
    "points": [
      "Riconosci gruppi ossidrilici, carbossilici, amminici e fosfato: modificano carica e reattività.",
      "Distingui configurazione, che richiede rottura di legami per cambiare, e conformazione.",
      "Il catabolismo rende disponibili energia e precursori; l’anabolismo li usa per costruire molecole."
    ],
    "oral": "Perché una cellula viva non è in equilibrio con l’ambiente?",
    "hint": "Pensa a scambi e consumo di energia, non solo a concentrazioni costanti.",
    "outline": "Una cellula mantiene flussi di materia e reazioni. Concentrazioni relativamente stabili possono coesistere con flussi non nulli: questo è uno stato stazionario. L’equilibrio non richiede il lavoro continuo necessario alla vita.",
    "questions": [
      {
        "id": "l8-fondamenti-1",
        "text": "Una concentrazione cellulare stabile dimostra che una via è all’equilibrio?",
        "answer": "No: produzione e consumo possono compensarsi",
        "options": [
          "No: produzione e consumo possono compensarsi",
          "Sì: nessuna molecola viene trasformata",
          "Sì: ogni enzima è inattivo",
          "No: tutte le concentrazioni devono oscillare"
        ],
        "explanation": "Uno stato stazionario può mantenere una concentrazione mentre produzione e consumo continuano."
      },
      {
        "id": "l8-fondamenti-2",
        "text": "Quale trasformazione descrive meglio un processo anabolico?",
        "answer": "Sintesi di una macromolecola usando precursori ed energia",
        "options": [
          "Sintesi di una macromolecola usando precursori ed energia",
          "Ossidazione di un combustibile a prodotti più semplici",
          "Degradazione di glicogeno a unità di glucosio",
          "Idrolisi di una proteina in peptidi"
        ],
        "explanation": "L’anabolismo costruisce strutture molecolari e richiede normalmente energia e potere riducente."
      },
      {
        "id": "l8-fondamenti-3",
        "text": "Due conformazioni della stessa molecola differiscono principalmente per:",
        "answer": "Disposizione spaziale ottenibile senza rompere legami covalenti",
        "options": [
          "Disposizione spaziale ottenibile senza rompere legami covalenti",
          "Numero totale di atomi di carbonio",
          "Identità dei gruppi funzionali",
          "Sequenza dei residui della molecola"
        ],
        "explanation": "Una rotazione intorno a legami appropriati può cambiare la conformazione senza cambiare la connettività."
      },
      {
        "text": "Due enantiomeri hanno:",
        "answer": "Configurazioni speculari non sovrapponibili",
        "options": [
          "Configurazioni speculari non sovrapponibili",
          "Solo diverse rotazioni intorno a legami singoli",
          "Sempre una composizione elementare diversa",
          "Sempre la stessa attività biologica"
        ],
        "explanation": "La chiralità genera forme speculari che le proteine possono riconoscere in modo diverso.",
        "id": "l8-fondamenti-4"
      },
      {
        "text": "Quale caratteristica distingue una cellula eucariotica da una procariotica?",
        "answer": "Presenza di un nucleo delimitato da membrana",
        "options": [
          "Presenza di un nucleo delimitato da membrana",
          "Presenza di DNA solo nei procarioti",
          "Assenza di ribosomi negli eucarioti",
          "Assenza di membrane nei procarioti"
        ],
        "explanation": "Il nucleo compartimentalizza il DNA; entrambi i tipi cellulari hanno membrane, DNA e ribosomi.",
        "id": "l8-fondamenti-5"
      },
      {
        "text": "Perché un gruppo carbossilico influenza le interazioni di una biomolecola?",
        "answer": "Può ionizzarsi e cambiare la carica della molecola",
        "options": [
          "Può ionizzarsi e cambiare la carica della molecola",
          "Impedisce qualsiasi interazione con acqua",
          "Rende ogni molecola apolare",
          "Elimina la dipendenza dal pH"
        ],
        "explanation": "La protonazione dei gruppi ionizzabili dipende dal pH e modifica le interazioni elettrostatiche.",
        "id": "l8-fondamenti-6"
      }
    ]
  },
  {
    "id": "acqua",
    "title": "Acqua e interazioni deboli",
    "chapter": 2,
    "sections": [
      "2.1"
    ],
    "pages": [
      251,
      288
    ],
    "pdfPage": 251,
    "sourceBook": "lehninger",
    "minutes": 12,
    "concept": "La polarità dell’acqua favorisce le interazioni con gruppi carichi e polari. Le regioni apolari tendono ad associarsi in ambiente acquoso: è l’effetto idrofobico.",
    "points": [
      "Distingui un legame covalente da un’interazione non covalente.",
      "Collega polarità, solubilità e struttura delle biomolecole.",
      "Le interazioni deboli, considerate insieme, stabilizzano strutture biologiche."
    ],
    "oral": "Perché l’acqua influenza il ripiegamento delle proteine?",
    "hint": "Parti dalla differenza tra gruppi polari e apolari.",
    "outline": "Descrivi la polarità dell’acqua; spiega le interazioni con gruppi idrofili; collega l’effetto idrofobico all’associazione di regioni apolari.",
    "questions": [
      {
        "id": "l8-acqua-1",
        "text": "Perché l’acqua può solvatare gli ioni?",
        "answer": "Le sue cariche parziali interagiscono con gli ioni",
        "options": [
          "Le sue cariche parziali interagiscono con gli ioni",
          "Forma legami covalenti permanenti con ogni ione",
          "Ha una superficie interamente apolare",
          "Elimina la carica degli ioni per ossidazione"
        ],
        "explanation": "Le molecole d’acqua si orientano intorno agli ioni e schermano le interazioni elettrostatiche."
      },
      {
        "id": "l8-acqua-2",
        "text": "L’associazione di gruppi apolari in acqua è favorita soprattutto da:",
        "answer": "Riduzione della superficie apolare esposta al solvente",
        "options": [
          "Riduzione della superficie apolare esposta al solvente",
          "Formazione di nuovi legami covalenti fra le code",
          "Aumento della carica netta dei gruppi apolari",
          "Idrolisi obbligatoria dei gruppi apolari"
        ],
        "explanation": "L’effetto idrofobico riguarda l’organizzazione del sistema soluto-solvente, non un nuovo legame covalente."
      },
      {
        "id": "l8-acqua-3",
        "text": "Quale interazione è covalente e va distinta dalle interazioni deboli?",
        "answer": "Un ponte disolfuro",
        "options": [
          "Un ponte disolfuro",
          "Un legame a idrogeno",
          "Un’interazione di van der Waals",
          "Un’interazione elettrostatica fra gruppi carichi"
        ],
        "explanation": "Il ponte disolfuro unisce covalentemente due zolfi. Le altre opzioni sono interazioni non covalenti."
      },
      {
        "text": "Quale interazione tiene insieme acqua e gruppi polari?",
        "answer": "Legami a idrogeno",
        "options": [
          "Legami a idrogeno",
          "Legami peptidici",
          "Ponti disolfuro",
          "Legami glicosidici"
        ],
        "explanation": "L’acqua può donare e accettare legami a idrogeno con gruppi polari.",
        "id": "l8-acqua-4"
      },
      {
        "text": "La dissociazione di un sale in acqua è favorita dalla capacità dell’acqua di:",
        "answer": "Stabilizzare i suoi ioni con gusci di idratazione",
        "options": [
          "Stabilizzare i suoi ioni con gusci di idratazione",
          "Formare legami peptidici con il sale",
          "Trasformare tutti gli ioni in molecole apolari",
          "Eliminare ogni carica senza interazioni"
        ],
        "explanation": "I dipoli dell’acqua si orientano attorno alle cariche e stabilizzano gli ioni in soluzione.",
        "id": "l8-acqua-5"
      },
      {
        "text": "In quale direzione tende a muoversi l’acqua attraverso una membrana permeabile solo all’acqua?",
        "answer": "Verso il compartimento con più soluti non permeanti",
        "options": [
          "Verso il compartimento con più soluti non permeanti",
          "Verso il compartimento privo di soluti",
          "Sempre verso il compartimento più piccolo",
          "Sempre contro il gradiente osmotico"
        ],
        "explanation": "L’osmosi tende a ridurre la differenza di potenziale chimico dell’acqua fra i compartimenti.",
        "id": "l8-acqua-6"
      }
    ],
    "supplement": {
      "book": "cozzani",
      "chapter": 1,
      "pages": [
        3,
        5
      ],
      "pdfPage": 16
    }
  },
  {
    "id": "tamponi",
    "title": "pH, pKa e tamponi biologici",
    "chapter": 2,
    "sections": [
      "2.2",
      "2.3"
    ],
    "pages": [
      289,
      333
    ],
    "pdfPage": 289,
    "sourceBook": "lehninger",
    "minutes": 15,
    "concept": "Il pH è una misura logaritmica della concentrazione di protoni. Il pKa descrive la dissociazione di un gruppo acido: quando pH e pKa coincidono, acido debole e base coniugata sono presenti in quantità uguali. Un tampone limita le variazioni di pH, ma ha una capacità finita. Il pH modifica la protonazione delle biomolecole e quindi le loro interazioni e l’attività degli enzimi.",
    "points": [
      "Usa pH = pKa + log([base]/[acido]) per una coppia acido-base adatta.",
      "Vicino al pKa il tampone è efficace; una diluizione riduce la capacità tampone.",
      "Passare da pH 7 a pH 6 aumenta di dieci volte la concentrazione di H⁺."
    ],
    "oral": "Come cambia la protonazione di un gruppo quando aumenta il pH?",
    "hint": "Confronta il pH con il pKa del gruppo.",
    "outline": "Al di sotto del pKa prevale la forma protonata; al di sopra prevale la forma deprotonata. Questo modifica la carica e può alterare riconoscimento del substrato e catalisi. Il tampone attenua le variazioni, non le annulla.",
    "questions": [
      {
        "id": "l8-tamponi-1",
        "text": "Per una coppia HA/A⁻, a pH = pKa vale:",
        "answer": "[A⁻] = [HA]",
        "options": [
          "[A⁻] = [HA]",
          "[A⁻] = 10 × [HA]",
          "[HA] = 10 × [A⁻]",
          "L’acido è completamente dissociato"
        ],
        "explanation": "Nell’equazione di Henderson–Hasselbalch il logaritmo del rapporto è zero quando il rapporto è uno."
      },
      {
        "id": "l8-tamponi-2",
        "text": "Da pH 7 a pH 6, la concentrazione di H⁺:",
        "answer": "Aumenta di dieci volte",
        "options": [
          "Aumenta di dieci volte",
          "Diminuisce di dieci volte",
          "Aumenta del 10%",
          "Resta invariata se la temperatura non cambia"
        ],
        "explanation": "La scala è logaritmica: una unità di pH corrisponde a un fattore dieci."
      },
      {
        "id": "l8-tamponi-3",
        "text": "Quale coppia costituisce un tampone?",
        "answer": "Un acido debole e la sua base coniugata",
        "options": [
          "Un acido debole e la sua base coniugata",
          "Un acido forte senza base coniugata",
          "Due sali privi di gruppi ionizzabili",
          "Acqua e glucosio in qualunque proporzione"
        ],
        "explanation": "La coppia può accettare o cedere protoni e attenuare aggiunte moderate di acido o base."
      },
      {
        "text": "Se pH = pKa + 1, il rapporto base coniugata/acido è circa:",
        "answer": "10",
        "options": [
          "10",
          "1",
          "0,1",
          "100"
        ],
        "explanation": "L’equazione di Henderson–Hasselbalch dà pH − pKa = log del rapporto base/acido.",
        "id": "l8-tamponi-4"
      },
      {
        "text": "Un tampone è generalmente più efficace vicino a:",
        "answer": "Il pKa della coppia acido-base",
        "options": [
          "Il pKa della coppia acido-base",
          "Un pH sempre uguale a 7",
          "Un pH pari a zero",
          "Un pH indipendente dalla composizione"
        ],
        "explanation": "Vicino al pKa sono presenti quantità comparabili di acido e base coniugata.",
        "id": "l8-tamponi-5"
      },
      {
        "text": "Diluisci un tampone senza cambiare il rapporto base/acido. Che cosa si riduce soprattutto?",
        "answer": "La capacità di neutralizzare acido o base aggiunti",
        "options": [
          "La capacità di neutralizzare acido o base aggiunti",
          "Il pKa dell’acido di dieci unità",
          "Il rapporto base/acido",
          "La possibilità stessa di ionizzazione"
        ],
        "explanation": "Il pH può cambiare poco, ma meno molecole disponibili significano minore capacità tamponante.",
        "id": "l8-tamponi-6"
      }
    ]
  },
  {
    "id": "amminoacidi",
    "title": "Amminoacidi, peptidi e carica",
    "chapter": 3,
    "sections": [
      "3.1",
      "3.2",
      "3.4"
    ],
    "pages": [
      358,
      450
    ],
    "pdfPage": 358,
    "sourceBook": "lehninger",
    "minutes": 15,
    "concept": "Gli amminoacidi condividono uno scheletro di base ma differiscono per la catena laterale R. Le proprietà di R influenzano carica, solubilità e interazioni. Il legame peptidico unisce i residui in una sequenza orientata dall’estremità amminica a quella carbossilica. Il punto isoelettrico è il pH al quale la carica netta media è nulla: non significa assenza di gruppi carichi.",
    "points": [
      "Classifica le catene laterali in apolari, polari e cariche al pH considerato.",
      "La sequenza costituisce la struttura primaria e pone vincoli al ripiegamento.",
      "Valuta tutti i gruppi ionizzabili per prevedere la carica di un peptide."
    ],
    "oral": "Un amminoacido al punto isoelettrico è privo di cariche?",
    "hint": "Distingui carica netta e cariche presenti nei gruppi.",
    "outline": "Può avere contemporaneamente gruppi positivi e negativi che si compensano. La carica netta nulla è una somma, non l’assenza di ionizzazione. Le catene laterali ionizzabili modificano il calcolo.",
    "questions": [
      {
        "id": "l8-amminoacidi-1",
        "text": "La proprietà che distingue principalmente i diversi amminoacidi è:",
        "answer": "La struttura della catena laterale R",
        "options": [
          "La struttura della catena laterale R",
          "La presenza del legame peptidico in ogni amminoacido libero",
          "Il numero di gruppi carbossilici sempre uguale a due",
          "L’assenza del carbonio α negli amminoacidi apolari"
        ],
        "explanation": "Il gruppo R determina molte differenze di reattività e interazione fra i residui."
      },
      {
        "id": "l8-amminoacidi-2",
        "text": "Al punto isoelettrico, un amminoacido presenta:",
        "answer": "Carica netta media nulla",
        "options": [
          "Carica netta media nulla",
          "Nessun gruppo ionizzato",
          "Solo gruppi positivi",
          "Sempre maggiore solubilità possibile"
        ],
        "explanation": "Gruppi con carica opposta possono compensarsi, formando uno zwitterione."
      },
      {
        "id": "l8-amminoacidi-3",
        "text": "Il legame peptidico collega:",
        "answer": "Gruppo carbossilico di un residuo e gruppo amminico del successivo",
        "options": [
          "Gruppo carbossilico di un residuo e gruppo amminico del successivo",
          "Due gruppi fosfato",
          "Due catene laterali apolari in ogni caso",
          "Due zuccheri attraverso il carbonio anomerico"
        ],
        "explanation": "È un legame ammidico che dà direzione alla catena polipeptidica."
      },
      {
        "text": "A pH inferiore al suo punto isoelettrico, un amminoacido tende ad avere:",
        "answer": "Carica netta positiva",
        "options": [
          "Carica netta positiva",
          "Carica netta negativa",
          "Sempre carica netta zero",
          "Nessun gruppo ionizzabile"
        ],
        "explanation": "A pH più basso aumenta la protonazione dei gruppi ionizzabili.",
        "id": "l8-amminoacidi-4"
      },
      {
        "text": "Quale catena laterale può formare un ponte disolfuro?",
        "answer": "Cisteina",
        "options": [
          "Cisteina",
          "Alanina",
          "Lisina",
          "Fenilalanina"
        ],
        "explanation": "L’ossidazione di due gruppi tiolici della cisteina forma un legame disolfuro.",
        "id": "l8-amminoacidi-5"
      },
      {
        "text": "Che cosa distingue l’estremità N-terminale di un peptide?",
        "answer": "Il gruppo amminico libero della prima unità",
        "options": [
          "Il gruppo amminico libero della prima unità",
          "Il gruppo carbossilico libero dell’ultima unità",
          "L’ultimo gruppo fosfato",
          "Una catena laterale necessariamente basica"
        ],
        "explanation": "La sequenza si scrive convenzionalmente dall’estremità N-terminale a quella C-terminale.",
        "id": "l8-amminoacidi-6"
      }
    ],
    "supplement": {
      "book": "cozzani",
      "chapter": 1,
      "pages": [
        5,
        10
      ],
      "pdfPage": 18
    }
  },
  {
    "id": "proteine",
    "title": "Ripiegamento e struttura tridimensionale",
    "chapter": 4,
    "sections": [
      "4.1",
      "4.2",
      "4.3",
      "4.4"
    ],
    "pages": [
      475,
      580
    ],
    "pdfPage": 475,
    "sourceBook": "lehninger",
    "minutes": 15,
    "concept": "Il ripiegamento dipende dalla sequenza e dal contesto. Interazioni non covalenti e, in alcuni casi, ponti disolfuro stabilizzano la conformazione. L’effetto idrofobico favorisce il seppellimento di residui apolari nelle proteine globulari solubili. La denaturazione altera la struttura nativa senza implicare necessariamente idrolisi della catena. Le chaperon aiutano il ripiegamento e limitano l’aggregazione.",
    "points": [
      "Secondaria: α-eliche e foglietti β, stabilizzati da legami a idrogeno del backbone.",
      "Terziaria: organizzazione di una catena; quaternaria: disposizione di più subunità.",
      "Non tutte le regioni proteiche sono rigidamente ordinate: alcune sono intrinsecamente disordinate."
    ],
    "oral": "Confronta i quattro livelli di struttura di una proteina.",
    "hint": "Distingui una catena singola da più subunità.",
    "outline": "Procedi dalla sequenza al ripiegamento locale, poi alla struttura della singola catena e infine all’associazione di subunità.",
    "questions": [
      {
        "id": "l8-proteine-1",
        "text": "Nell’α-elica, i legami a idrogeno coinvolgono principalmente:",
        "answer": "Gruppi del backbone peptidico",
        "options": [
          "Gruppi del backbone peptidico",
          "Solo le catene laterali cariche",
          "Solo ponti disolfuro",
          "Gruppi fosfato dei nucleotidi"
        ],
        "explanation": "Gruppi C=O e N–H dello scheletro peptidico stabilizzano l’α-elica."
      },
      {
        "id": "l8-proteine-2",
        "text": "La denaturazione di una proteina implica necessariamente:",
        "answer": "Perdita della conformazione nativa",
        "options": [
          "Perdita della conformazione nativa",
          "Idrolisi di tutti i legami peptidici",
          "Conversione di ogni residuo L in D",
          "Rimozione della sequenza primaria"
        ],
        "explanation": "La denaturazione altera il ripiegamento; non richiede la rottura di tutti i legami peptidici."
      },
      {
        "id": "l8-proteine-3",
        "text": "La struttura quaternaria riguarda:",
        "answer": "L’organizzazione di più subunità polipeptidiche",
        "options": [
          "L’organizzazione di più subunità polipeptidiche",
          "La sequenza di una singola catena",
          "La rotazione di una singola catena laterale",
          "Solo la formazione di un foglietto β"
        ],
        "explanation": "La struttura terziaria descrive una catena; la quaternaria l’associazione tra catene."
      },
      {
        "text": "Perché il legame peptidico limita le conformazioni possibili?",
        "answer": "Ha carattere parziale di doppio legame e geometria planare",
        "options": [
          "Ha carattere parziale di doppio legame e geometria planare",
          "Ruota liberamente come ogni legame singolo",
          "È sempre un ponte disolfuro",
          "Non coinvolge atomi di azoto"
        ],
        "explanation": "La risonanza rende il gruppo peptidico relativamente rigido; le rotazioni principali riguardano i legami adiacenti al carbonio alfa.",
        "id": "l8-proteine-4"
      },
      {
        "text": "In un foglietto beta, i legami a idrogeno uniscono soprattutto:",
        "answer": "Gruppi dello scheletro di tratti peptidici affiancati",
        "options": [
          "Gruppi dello scheletro di tratti peptidici affiancati",
          "Solo catene laterali di cisteina",
          "Solo gruppi terminali dell’intera proteina",
          "Tutti i carboni alfa con legami covalenti"
        ],
        "explanation": "Tratti estesi possono affiancarsi in orientamento parallelo o antiparallelo.",
        "id": "l8-proteine-5"
      },
      {
        "text": "Le chaperon molecolari aiutano le proteine soprattutto a:",
        "answer": "Ripiegarsi evitando aggregazioni inappropriate",
        "options": [
          "Ripiegarsi evitando aggregazioni inappropriate",
          "Cambiare sistematicamente la sequenza primaria",
          "Rompere tutti i legami peptidici",
          "Sostituire gli amminoacidi con nucleotidi"
        ],
        "explanation": "Le chaperon facilitano il raggiungimento di conformazioni funzionali senza codificare una nuova sequenza.",
        "id": "l8-proteine-6"
      }
    ],
    "supplement": {
      "book": "cozzani",
      "chapter": 1,
      "pages": [
        5,
        10
      ],
      "pdfPage": 18
    }
  },
  {
    "id": "funzione",
    "title": "Legame ai ligandi e cooperatività",
    "chapter": 5,
    "sections": [
      "5.1"
    ],
    "pages": [
      615,
      680
    ],
    "pdfPage": 615,
    "sourceBook": "lehninger",
    "minutes": 15,
    "concept": "Una proteina riconosce un ligando attraverso interazioni reversibili e specifiche. La costante di dissociazione Kd descrive l’equilibrio di legame: un Kd più basso indica maggiore affinità nel modello semplice. Mioglobina ed emoglobina legano ossigeno, ma hanno funzioni e curve diverse. Nell’emoglobina, il legame a una subunità favorisce il legame alle altre: è cooperatività positiva.",
    "points": [
      "Mioglobina: un sito di legame e curva iperbolica; emoglobina: più subunità e curva sigmoide.",
      "L’allosteria collega un evento di legame a cambiamenti conformazionali.",
      "L’effetto Bohr favorisce il rilascio di O₂ quando aumentano H⁺ e CO₂."
    ],
    "oral": "Perché una curva sigmoide è utile al trasporto di ossigeno?",
    "hint": "Collega cooperatività e differenza tra carico e rilascio.",
    "outline": "La cooperatività rende la saturazione sensibile alla pressione di ossigeno in un intervallo utile. L’emoglobina può caricarsi nei polmoni e rilasciare ossigeno nei tessuti. La mioglobina, con maggiore affinità e un sito, ha un ruolo diverso.",
    "questions": [
      {
        "id": "l8-funzione-1",
        "text": "Per il legame semplice proteina-ligando, un Kd più basso indica:",
        "answer": "Maggiore affinità",
        "options": [
          "Maggiore affinità",
          "Minore affinità",
          "Più siti di legame necessariamente",
          "Maggiore velocità catalitica necessariamente"
        ],
        "explanation": "Kd riguarda l’equilibrio di dissociazione e non coincide con un parametro di catalisi."
      },
      {
        "id": "l8-funzione-2",
        "text": "Il legame cooperativo dell’O₂ all’emoglobina significa che:",
        "answer": "Il legame a una subunità facilita quello alle altre",
        "options": [
          "Il legame a una subunità facilita quello alle altre",
          "Ogni sito è completamente indipendente",
          "L’ossigeno forma un legame irreversibile",
          "La proteina ha un solo sito"
        ],
        "explanation": "Il cambiamento conformazionale modifica l’affinità delle altre subunità."
      },
      {
        "id": "l8-funzione-3",
        "text": "Nei tessuti, una diminuzione del pH favorisce nell’emoglobina:",
        "answer": "Il rilascio di ossigeno",
        "options": [
          "Il rilascio di ossigeno",
          "Il legame irreversibile di ossigeno",
          "La sintesi di nuove subunità",
          "L’aumento obbligatorio dell’affinità per O₂"
        ],
        "explanation": "L’effetto Bohr collega protonazione e minore affinità per l’ossigeno."
      },
      {
        "text": "Per un legame semplice, con [ligando] = Kd, quale frazione dei siti è occupata?",
        "answer": "Circa metà",
        "options": [
          "Circa metà",
          "Nessuna",
          "Tutti",
          "Circa un decimo"
        ],
        "explanation": "La frazione occupata è [L]/(Kd+[L]); a [L]=Kd vale 1/2.",
        "id": "l8-funzione-4"
      },
      {
        "text": "Che cosa favorisce il 2,3-bisfosfoglicerato nell’emoglobina?",
        "answer": "Il rilascio di ossigeno stabilizzando lo stato T",
        "options": [
          "Il rilascio di ossigeno stabilizzando lo stato T",
          "Il legame irreversibile dell’ossigeno",
          "La conversione dell’emoglobina in mioglobina",
          "La demolizione del gruppo eme"
        ],
        "explanation": "Il 2,3-BPG riduce l’affinità dell’emoglobina per l’ossigeno favorendo lo stato T.",
        "id": "l8-funzione-5"
      },
      {
        "text": "Rispetto all’emoglobina, la mioglobina mostra tipicamente:",
        "answer": "Una curva di legame dell’ossigeno iperbolica",
        "options": [
          "Una curva di legame dell’ossigeno iperbolica",
          "Una curva cooperativa con quattro subunità",
          "Nessun gruppo eme",
          "Un legame esclusivo con CO₂"
        ],
        "explanation": "La mioglobina monomerica non presenta la cooperatività fra subunità dell’emoglobina.",
        "id": "l8-funzione-6"
      }
    ]
  },
  {
    "id": "enzimi",
    "title": "Catalisi, Km, Vmax e inibizione",
    "chapter": 6,
    "sections": [
      "6.1",
      "6.2",
      "6.3"
    ],
    "pages": [
      727,
      822
    ],
    "pdfPage": 727,
    "sourceBook": "lehninger",
    "minutes": 18,
    "concept": "Gli enzimi accelerano le reazioni abbassando la barriera di attivazione. Non modificano l’equilibrio della reazione. Nel modello di Michaelis–Menten, Km corrisponde alla concentrazione di substrato a metà della velocità massima.",
    "points": [
      "Separa velocità di reazione ed equilibrio.",
      "Interpreta una curva velocità-concentrazione di substrato.",
      "L’inibizione competitiva classica aumenta il Km apparente e lascia invariata Vmax."
    ],
    "oral": "Un enzima può rendere spontanea una reazione che non lo è?",
    "hint": "Distingui energia di attivazione e variazione di energia libera.",
    "outline": "Spiega la riduzione della barriera di attivazione e chiarisci che la posizione dell’equilibrio non cambia.",
    "questions": [
      {
        "id": "l8-enzimi-1",
        "text": "Un enzima modifica principalmente:",
        "answer": "La barriera di attivazione della reazione",
        "options": [
          "La barriera di attivazione della reazione",
          "La costante di equilibrio della reazione",
          "Il ΔG complessivo dei reagenti e prodotti",
          "La conservazione dell’energia"
        ],
        "explanation": "La catalisi accelera il raggiungimento dell’equilibrio senza spostarlo."
      },
      {
        "id": "l8-enzimi-2",
        "text": "Per un enzima michaeliano, a [S] = Km si osserva:",
        "answer": "v₀ = Vmax/2",
        "options": [
          "v₀ = Vmax/2",
          "v₀ = Vmax",
          "v₀ = 2Vmax",
          "v₀ = 0"
        ],
        "explanation": "v₀ = Vmax[S]/(Km+[S]); sostituendo Km a [S] si ottiene metà di Vmax."
      },
      {
        "id": "l8-enzimi-3",
        "text": "Un inibitore competitivo reversibile classico produce:",
        "answer": "Km apparente maggiore e Vmax invariata",
        "options": [
          "Km apparente maggiore e Vmax invariata",
          "Km invariato e Vmax minore",
          "Km e Vmax entrambi nulli",
          "Km minore e Vmax maggiore"
        ],
        "explanation": "Una maggiore concentrazione di substrato può contrastare la competizione per il sito attivo."
      },
      {
        "text": "Il numero di turnover kcat esprime:",
        "answer": "Quante molecole di substrato sono trasformate per sito attivo e per unità di tempo a saturazione",
        "options": [
          "Quante molecole di substrato sono trasformate per sito attivo e per unità di tempo a saturazione",
          "La concentrazione di substrato a metà velocità massima",
          "La costante di equilibrio della reazione",
          "Il numero totale di amminoacidi dell’enzima"
        ],
        "explanation": "kcat si ricava da Vmax e concentrazione dei siti attivi.",
        "id": "l8-enzimi-4"
      },
      {
        "text": "Per un enzima michaeliano, aumentando molto [S] oltre Km, la velocità:",
        "answer": "Si avvicina a Vmax",
        "options": [
          "Si avvicina a Vmax",
          "Cresce senza limite proporzionalmente a [S]",
          "Diventa sempre zero",
          "Supera obbligatoriamente il doppio di Vmax"
        ],
        "explanation": "La saturazione dei siti attivi limita la velocità massima.",
        "id": "l8-enzimi-5"
      },
      {
        "text": "Raddoppiando la concentrazione di enzima attivo, a condizioni comparabili, che cosa aumenta?",
        "answer": "Vmax",
        "options": [
          "Vmax",
          "Il ΔG standard",
          "La costante di equilibrio",
          "Il numero di tipi di substrato"
        ],
        "explanation": "Vmax dipende dalla quantità di enzima cataliticamente attivo.",
        "id": "l8-enzimi-6"
      }
    ],
    "supplement": {
      "book": "cozzani",
      "chapter": 2,
      "pages": [
        13,
        24
      ],
      "pdfPage": 26
    }
  },
  {
    "id": "regolazione",
    "title": "Allosteria, fosforilazione e zimogeni",
    "chapter": 6,
    "sections": [
      "6.5"
    ],
    "pages": [
      853,
      883
    ],
    "pdfPage": 853,
    "sourceBook": "lehninger",
    "minutes": 15,
    "concept": "L’attività enzimatica può adattarsi alla disponibilità dei substrati e ai segnali cellulari. Modulatori allosterici cambiano l’attività attraverso un legame reversibile; la fosforilazione modifica covalentemente la proteina e può attivarla o inibirla. Alcuni enzimi sono prodotti come precursori inattivi, gli zimogeni, e attivati da un taglio proteolitico. Non tutti gli enzimi regolatori seguono una cinetica di Michaelis–Menten.",
    "points": [
      "Distingui regolazione reversibile e attivazione proteolitica.",
      "La fosforilazione non equivale sempre ad attivazione: dipende dall’enzima.",
      "Il feedback collega un prodotto della via al controllo di un enzima a monte."
    ],
    "oral": "Confronta allosteria, modificazione covalente e attivazione di uno zimogeno.",
    "hint": "Per ogni meccanismo chiediti che cosa cambia nella proteina e se il cambiamento è reversibile.",
    "outline": "Un modulatore si lega senza cambiare la sequenza; una chinasi trasferisce un fosforile e una fosfatasi può rimuoverlo; il taglio di uno zimogeno modifica la catena. Questi controlli hanno tempi e reversibilità diversi.",
    "questions": [
      {
        "id": "l8-regolazione-1",
        "text": "Quale affermazione sulla fosforilazione regolatoria è corretta?",
        "answer": "Può attivare o inibire secondo l’enzima",
        "options": [
          "Può attivare o inibire secondo l’enzima",
          "Attiva sempre ogni enzima",
          "È un legame non covalente del modulatore",
          "Cambia necessariamente la sequenza del DNA"
        ],
        "explanation": "L’effetto dipende dalla struttura e dal ruolo della proteina fosforilata."
      },
      {
        "id": "l8-regolazione-2",
        "text": "Uno zimogeno viene tipicamente attivato mediante:",
        "answer": "Taglio proteolitico specifico",
        "options": [
          "Taglio proteolitico specifico",
          "Semplice aumento di tutti i substrati",
          "Rimozione di ogni gruppo fosfato",
          "Unicamente riduzione del NAD⁺"
        ],
        "explanation": "Il precursore inattivo acquista attività dopo una proteolisi controllata."
      },
      {
        "id": "l8-regolazione-3",
        "text": "L’inibizione a feedback permette a un prodotto finale di:",
        "answer": "Ridurre l’attività di un enzima a monte",
        "options": [
          "Ridurre l’attività di un enzima a monte",
          "Aumentare necessariamente tutte le vie cellulari",
          "Eliminare la necessità di enzimi",
          "Cambiare la costante di equilibrio di ogni reazione"
        ],
        "explanation": "Il feedback può limitare la produzione quando il prodotto è già disponibile."
      },
      {
        "text": "Quale classe di enzimi rimuove gruppi fosfato da proteine regolate?",
        "answer": "Fosfatasi",
        "options": [
          "Fosfatasi",
          "Protein chinasi",
          "Proteasi come unica classe",
          "Aminotransferasi"
        ],
        "explanation": "Chinasi e fosfatasi permettono modificazioni covalenti reversibili delle proteine; l’effetto sull’attività dipende dal bersaglio.",
        "id": "l8-regolazione-4"
      },
      {
        "text": "Un effettore allosterico si lega generalmente:",
        "answer": "A un sito regolatore distinto dal sito attivo",
        "options": [
          "A un sito regolatore distinto dal sito attivo",
          "Sempre al substrato in soluzione",
          "Solo all’ATP libero",
          "Soltanto al legame peptidico terminale"
        ],
        "explanation": "Il legame allosterico modifica la conformazione e quindi l’attività della proteina.",
        "id": "l8-regolazione-5"
      },
      {
        "text": "Una curva sigmoide della velocità in funzione del substrato può indicare:",
        "answer": "Interazioni cooperative fra siti",
        "options": [
          "Interazioni cooperative fra siti",
          "Obbligatoriamente cinetica michaeliana semplice",
          "Assenza di regolazione",
          "Che la reazione è priva di enzima"
        ],
        "explanation": "La cooperatività può far variare l’affinità apparente con l’occupazione dei siti.",
        "id": "l8-regolazione-6"
      }
    ],
    "supplement": {
      "book": "cozzani",
      "chapter": 2,
      "pages": [
        13,
        24
      ],
      "pdfPage": 26
    }
  },
  {
    "id": "carboidrati",
    "title": "Carboidrati: struttura e legami glicosidici",
    "chapter": 7,
    "sections": [
      "7.1",
      "7.2"
    ],
    "pages": [
      909,
      975
    ],
    "pdfPage": 909,
    "sourceBook": "lehninger",
    "minutes": 15,
    "concept": "I carboidrati differiscono per gruppi funzionali, stereochimica e legami tra monomeri. Un legame glicosidico coinvolge il carbonio anomerico; la configurazione α o β e la ramificazione influenzano struttura e riconoscimento enzimatico. Amido e glicogeno sono riserve di glucosio, mentre la cellulosa ha funzione strutturale. La stessa unità di base non implica uguale digeribilità.",
    "points": [
      "Distingui monosaccaride, disaccaride e polisaccaride.",
      "Amido e glicogeno contengono legami α; la cellulosa contiene legami β(1→4).",
      "Uno zucchero riducente ha un carbonio anomerico disponibile a interconvertire con la forma aperta."
    ],
    "oral": "Perché amido e cellulosa, entrambi polimeri del glucosio, si comportano diversamente?",
    "hint": "Guarda la configurazione del legame, non solo il monomero.",
    "outline": "I legami α e β producono geometrie diverse, riconosciute da enzimi diversi. Gli enzimi digestivi umani idrolizzano l’amido ma non i legami β(1→4) della cellulosa.",
    "questions": [
      {
        "id": "l8-carboidrati-1",
        "text": "Amido e cellulosa differiscono soprattutto per:",
        "answer": "Configurazione dei legami tra le unità di glucosio",
        "options": [
          "Configurazione dei legami tra le unità di glucosio",
          "Presenza di amminoacidi al posto di glucosio",
          "Assenza di legami covalenti nella cellulosa",
          "Identità di ogni elemento chimico"
        ],
        "explanation": "La stereochimica dei legami modifica struttura e riconoscimento enzimatico."
      },
      {
        "id": "l8-carboidrati-2",
        "text": "Quale polisaccaride è una riserva ramificata degli animali?",
        "answer": "Glicogeno",
        "options": [
          "Glicogeno",
          "Cellulosa",
          "Chitina",
          "Peptidoglicano"
        ],
        "explanation": "La ramificazione offre numerose estremità non riducenti per la mobilizzazione."
      },
      {
        "id": "l8-carboidrati-3",
        "text": "Perché una molecola può essere uno zucchero riducente?",
        "answer": "Ha un carbonio anomerico disponibile a dare la forma aperta",
        "options": [
          "Ha un carbonio anomerico disponibile a dare la forma aperta",
          "Contiene necessariamente un gruppo fosfato",
          "È necessariamente un polisaccaride",
          "Ha soltanto legami β"
        ],
        "explanation": "Un carbonio anomerico libero permette l’equilibrio con una forma aperta ossidabile."
      },
      {
        "text": "Gli anomeri alfa e beta differiscono per:",
        "answer": "Configurazione del carbonio anomerico",
        "options": [
          "Configurazione del carbonio anomerico",
          "Numero totale di atomi di carbonio",
          "Presenza esclusiva di legami peptidici",
          "Numero di unità monosaccaridiche"
        ],
        "explanation": "La ciclizzazione genera un nuovo centro stereogenico, il carbonio anomerico.",
        "id": "l8-carboidrati-4"
      },
      {
        "text": "Perché il saccarosio è un disaccaride non riducente?",
        "answer": "Entrambi i carboni anomerici partecipano al legame",
        "options": [
          "Entrambi i carboni anomerici partecipano al legame",
          "Non contiene ossigeno",
          "Contiene solo glucosio",
          "È privo di legami glicosidici"
        ],
        "explanation": "Non rimane un carbonio anomerico libero disponibile per la forma aperta riducente.",
        "id": "l8-carboidrati-5"
      },
      {
        "text": "Le ramificazioni dell’amilopectina sono formate da legami:",
        "answer": "Alfa(1→6)",
        "options": [
          "Alfa(1→6)",
          "Beta(1→4)",
          "Peptidici",
          "Fosfodiestere"
        ],
        "explanation": "La catena contiene legami alfa(1→4), mentre i punti di ramificazione sono alfa(1→6).",
        "id": "l8-carboidrati-6"
      }
    ],
    "supplement": {
      "book": "cozzani",
      "chapter": 11,
      "pages": [
        209,
        214
      ],
      "pdfPage": 222
    }
  },
  {
    "id": "nucleotidi",
    "title": "Nucleotidi: informazione, energia e cofattori",
    "chapter": 8,
    "sections": [
      "8.1",
      "8.2",
      "8.3",
      "8.4"
    ],
    "pages": [
      1025,
      1136
    ],
    "pdfPage": 1025,
    "sourceBook": "lehninger",
    "minutes": 15,
    "concept": "Un nucleotide comprende base azotata, pentoso e uno o più fosfati; un nucleoside non comprende il fosfato. I nucleotidi formano DNA e RNA tramite legami fosfodiestere e hanno anche ruoli energetici e regolatori. ATP, coenzimi nucleotidici e cAMP mostrano perché questa classe di molecole non va studiata soltanto come componente degli acidi nucleici.",
    "points": [
      "Il DNA contiene deossiribosio; l’RNA contiene ribosio.",
      "Le catene hanno direzione 5′→3′ e nel DNA le due catene sono antiparallele.",
      "Distingui ATP, usato in trasferimenti di gruppi, e cAMP, messaggero di segnale."
    ],
    "oral": "Quali funzioni dei nucleotidi vanno oltre l’informazione genetica?",
    "hint": "Considera ATP, coenzimi e messaggeri.",
    "outline": "I nucleotidi partecipano al trasferimento di gruppi, entrano nella struttura di coenzimi e possono trasmettere segnali. Queste funzioni collegano struttura chimica, metabolismo e regolazione.",
    "questions": [
      {
        "id": "l8-nucleotidi-1",
        "text": "Un nucleoside contiene:",
        "answer": "Base azotata e zucchero",
        "options": [
          "Base azotata e zucchero",
          "Base azotata, zucchero e fosfato",
          "Solo base e fosfato",
          "Una catena di amminoacidi"
        ],
        "explanation": "Il fosfato distingue un nucleotide dal corrispondente nucleoside."
      },
      {
        "id": "l8-nucleotidi-2",
        "text": "I nucleotidi di una catena di DNA sono uniti da:",
        "answer": "Legami fosfodiestere",
        "options": [
          "Legami fosfodiestere",
          "Legami peptidici",
          "Soli legami a idrogeno",
          "Ponti disolfuro"
        ],
        "explanation": "Il backbone è covalente; i legami a idrogeno contribuiscono invece all’appaiamento delle basi."
      },
      {
        "id": "l8-nucleotidi-3",
        "text": "Quale nucleotide ha un ruolo tipico di secondo messaggero?",
        "answer": "cAMP",
        "options": [
          "cAMP",
          "DNA polimerico",
          "Glicogeno",
          "Acetil-CoA"
        ],
        "explanation": "Il cAMP trasmette segnali intracellulari; non è una riserva energetica polimerica."
      },
      {
        "text": "Quale coppia comprende due basi puriniche?",
        "answer": "Adenina e guanina",
        "options": [
          "Adenina e guanina",
          "Citosina e timina",
          "Uracile e citosina",
          "Timina e uracile"
        ],
        "explanation": "Le purine hanno due anelli; citosina, timina e uracile sono pirimidine.",
        "id": "l8-nucleotidi-4"
      },
      {
        "text": "Quale gruppo distingue il ribosio dal desossiribosio del DNA?",
        "answer": "Un ossidrile sul carbonio 2′",
        "options": [
          "Un ossidrile sul carbonio 2′",
          "Un gruppo amminico sul carbonio 5′",
          "Un gruppo eme sul carbonio 1′",
          "Un fosfato obbligatorio sul carbonio 2′"
        ],
        "explanation": "Il DNA manca dell’ossidrile in posizione 2′ presente nell’RNA.",
        "id": "l8-nucleotidi-5"
      },
      {
        "text": "La denaturazione termica del DNA separa soprattutto:",
        "answer": "I filamenti interrompendo interazioni non covalenti",
        "options": [
          "I filamenti interrompendo interazioni non covalenti",
          "Tutti i legami fosfodiestere dello scheletro",
          "Ogni base dal suo zucchero",
          "Tutti gli atomi di fosforo"
        ],
        "explanation": "Il riscaldamento può separare i filamenti senza idrolizzare sistematicamente lo scheletro covalente.",
        "id": "l8-nucleotidi-6"
      }
    ]
  },
  {
    "id": "tecnologie-dna",
    "title": "Studiare geni e proteine: PCR, sequenziamento e omiche",
    "chapter": 9,
    "pages": [
      1150,
      1257
    ],
    "pdfPage": 1150,
    "sections": [
      "9.1",
      "9.2",
      "9.3"
    ],
    "sourceBook": "lehninger",
    "minutes": 15,
    "concept": "Le tecnologie del DNA permettono di amplificare, sequenziare e confrontare materiale genetico. La sequenza di un gene non basta a dimostrare la funzione del suo prodotto: servono misure di espressione, localizzazione e perturbazione. Genoma, trascrittoma e proteoma descrivono livelli diversi dell’organizzazione cellulare.",
    "points": [
      "Distingui quantità di DNA, quantità di RNA e quantità di proteina.",
      "La PCR usa primer e una DNA polimerasi per amplificare una regione.",
      "Un knockout permette di studiare conseguenze della perdita di un gene."
    ],
    "oral": "Come studieresti la funzione di un gene associato a un enzima metabolico?",
    "hint": "Distingui quantità di DNA, quantità di RNA e quantità di proteina.",
    "outline": "Confronta sequenza, espressione e attività. Una perturbazione può mostrare un contributo funzionale, ma va confrontata con controlli e possibili compensazioni.",
    "questions": [
      {
        "text": "Qual è lo scopo principale di una PCR?",
        "answer": "Amplificare una regione di DNA",
        "options": [
          "Amplificare una regione di DNA",
          "Misurare direttamente l’attività di ogni proteina",
          "Sintetizzare un lipide",
          "Tradurre RNA in proteina"
        ],
        "explanation": "Primer specifici delimitano la regione che viene copiata in cicli successivi.",
        "id": "l8-tecnologie-dna-1"
      },
      {
        "text": "I primer della PCR servono a:",
        "answer": "Fornire estremità da cui iniziare la sintesi",
        "options": [
          "Fornire estremità da cui iniziare la sintesi",
          "Tagliare le proteine",
          "Eliminare tutti i nucleotidi",
          "Colorare i lipidi"
        ],
        "explanation": "La DNA polimerasi estende un’estremità 3′ disponibile su un primer appaiato allo stampo.",
        "id": "l8-tecnologie-dna-2"
      },
      {
        "text": "Che cosa descrive un trascrittoma?",
        "answer": "Gli RNA presenti in un sistema in un dato momento",
        "options": [
          "Gli RNA presenti in un sistema in un dato momento",
          "Solo la sequenza del DNA genomico",
          "Tutti i lipidi di membrana",
          "Solo le proteine mitocondriali"
        ],
        "explanation": "Il trascrittoma dipende dall’espressione e dalle condizioni cellulari.",
        "id": "l8-tecnologie-dna-3"
      },
      {
        "text": "Che cosa descrive un proteoma?",
        "answer": "L’insieme delle proteine presenti in un sistema",
        "options": [
          "L’insieme delle proteine presenti in un sistema",
          "Tutti i geni indipendentemente dalla loro espressione",
          "Solo gli RNA ribosomiali",
          "L’insieme dei glucidi alimentari"
        ],
        "explanation": "Il proteoma varia con stato, tipo cellulare e condizioni.",
        "id": "l8-tecnologie-dna-4"
      },
      {
        "text": "Un knockout di un gene permette di studiare:",
        "answer": "Le conseguenze della perdita della sua funzione",
        "options": [
          "Le conseguenze della perdita della sua funzione",
          "Solo la composizione in basi del gene",
          "Solo il numero di cromosomi",
          "La quantità di acqua negli alimenti"
        ],
        "explanation": "Il confronto con controlli permette di associare la perdita del gene a cambiamenti di fenotipo.",
        "id": "l8-tecnologie-dna-5"
      },
      {
        "text": "Un’associazione fra variante genetica e fenotipo dimostra da sola causalità?",
        "answer": "No, richiede ulteriori verifiche",
        "options": [
          "No, richiede ulteriori verifiche",
          "Sì, in ogni condizione",
          "Sì, se il gene è lungo",
          "Solo se la variante è in un introne"
        ],
        "explanation": "Associazione, possibili fattori confondenti e meccanismo causale devono essere distinti.",
        "id": "l8-tecnologie-dna-6"
      }
    ]
  },
  {
    "id": "lipidi-struttura",
    "title": "Lipidi: deposito, membrane e segnali",
    "chapter": 10,
    "sections": [
      "10.1",
      "10.2",
      "10.3"
    ],
    "pages": [
      1284,
      1342
    ],
    "pdfPage": 1284,
    "sourceBook": "lehninger",
    "minutes": 15,
    "concept": "I lipidi sono una classe eterogenea di molecole con scarsa solubilità in acqua. I triacilgliceroli conservano energia, i lipidi anfipatici organizzano membrane e altri lipidi agiscono da segnali o precursori. Il colesterolo contribuisce alle membrane e non è semplicemente un prodotto di scarto. Insaturazioni e lunghezza delle catene aciliche influenzano le proprietà fisiche.",
    "points": [
      "Distingui triacilgliceroli, glicerofosfolipidi e steroli.",
      "Un doppio legame cis introduce una piega e riduce l’impacchettamento delle catene.",
      "Una molecola anfipatica possiede regioni con affinità diversa per l’acqua."
    ],
    "oral": "Perché un triacilglicerolo è adatto al deposito, ma non al doppio strato?",
    "hint": "Confronta la presenza di una testa polare.",
    "outline": "Il triacilglicerolo è prevalentemente idrofobo; un fosfolipide ha una testa polare e code apolari. Questa differenza rende favorevole l’organizzazione dei fosfolipidi in un doppio strato in acqua.",
    "questions": [
      {
        "id": "l8-lipidi-struttura-1",
        "text": "Quale lipide è la principale forma di riserva energetica?",
        "answer": "Triacilglicerolo",
        "options": [
          "Triacilglicerolo",
          "Fosfatidilcolina",
          "Colesterolo come unica riserva",
          "Sfingomielina"
        ],
        "explanation": "I triacilgliceroli sono idrofobi e altamente ridotti, adatti alla conservazione di energia."
      },
      {
        "id": "l8-lipidi-struttura-2",
        "text": "A parità di lunghezza, un’insaturazione cis tende a:",
        "answer": "Ridurre l’impacchettamento delle catene",
        "options": [
          "Ridurre l’impacchettamento delle catene",
          "Rendere la catena perfettamente lineare",
          "Aggiungere una carica positiva permanente",
          "Trasformare il lipide in un peptide"
        ],
        "explanation": "La piega introdotta dal doppio legame cis ostacola l’impacchettamento regolare."
      },
      {
        "id": "l8-lipidi-struttura-3",
        "text": "Il colesterolo è:",
        "answer": "Uno sterolo con ruoli strutturali e di precursore",
        "options": [
          "Uno sterolo con ruoli strutturali e di precursore",
          "Un polisaccaride di deposito",
          "Unicamente una sostanza da eliminare",
          "Un amminoacido essenziale"
        ],
        "explanation": "È componente delle membrane e precursore di diverse molecole biologiche."
      },
      {
        "text": "A parità di saturazione, acidi grassi con catene più lunghe tendono ad avere:",
        "answer": "Temperature di fusione più alte",
        "options": [
          "Temperature di fusione più alte",
          "Temperature di fusione sempre più basse",
          "Sempre maggiore carica elettrica",
          "Sempre più doppi legami"
        ],
        "explanation": "Catene più lunghe offrono più contatti intermolecolari favorevoli all’impacchettamento.",
        "id": "l8-lipidi-struttura-4"
      },
      {
        "text": "Le cere sono generalmente esteri fra:",
        "answer": "Acidi grassi e alcoli a catena lunga",
        "options": [
          "Acidi grassi e alcoli a catena lunga",
          "Amminoacidi e ribosio",
          "Glucosio e fosfato",
          "Tre acidi grassi e glicerolo in ogni molecola"
        ],
        "explanation": "Le cere sono lipidi idrofobici con funzioni spesso protettive.",
        "id": "l8-lipidi-struttura-5"
      },
      {
        "text": "Un fosfolipide è anfipatico perché possiede:",
        "answer": "Una regione polare e regioni idrofobiche",
        "options": [
          "Una regione polare e regioni idrofobiche",
          "Solo gruppi carichi",
          "Solo catene apolari",
          "Due filamenti di DNA"
        ],
        "explanation": "Questa duplice natura favorisce l’assemblaggio in doppi strati in acqua.",
        "id": "l8-lipidi-struttura-6"
      }
    ]
  },
  {
    "id": "membrane",
    "title": "Membrane e trasporto selettivo",
    "chapter": 11,
    "sections": [
      "11.1",
      "11.2",
      "11.3"
    ],
    "pages": [
      1367,
      1503
    ],
    "pdfPage": 1367,
    "sourceBook": "lehninger",
    "minutes": 18,
    "concept": "Le membrane organizzano compartimenti e controllano gli scambi. Il trasporto passivo segue un gradiente; il trasporto attivo richiede una fonte energetica per muovere soluti contro gradiente.",
    "points": [
      "I fosfolipidi hanno regioni idrofile e idrofobe.",
      "La diffusione facilitata usa proteine ma resta passiva.",
      "L’accoppiamento energetico collega una reazione favorevole a una sfavorevole."
    ],
    "oral": "Come distingui diffusione semplice, facilitata e trasporto attivo?",
    "hint": "Chiediti se serve una proteina e se il movimento è contro gradiente.",
    "outline": "Confronta direzione del gradiente, uso di proteine e fonte di energia. Nel trasporto attivo secondario l’energia deriva dal gradiente di un altro soluto.",
    "questions": [
      {
        "id": "l8-membrane-1",
        "text": "La diffusione facilitata sposta un soluto:",
        "answer": "Secondo gradiente mediante una proteina",
        "options": [
          "Secondo gradiente mediante una proteina",
          "Sempre contro gradiente usando ATP",
          "Senza interazione con proteine",
          "Solo attraverso rottura del doppio strato"
        ],
        "explanation": "Canali e trasportatori possono mediare un trasporto passivo."
      },
      {
        "id": "l8-membrane-2",
        "text": "Nel trasporto attivo secondario, la fonte energetica diretta è:",
        "answer": "Il gradiente di un altro soluto",
        "options": [
          "Il gradiente di un altro soluto",
          "La luce per ogni trasportatore",
          "L’idrolisi diretta di ATP da parte di ogni cotrasportatore",
          "La formazione di un legame peptidico"
        ],
        "explanation": "L’energia conservata in un gradiente sostiene il movimento accoppiato contro gradiente."
      },
      {
        "id": "l8-membrane-3",
        "text": "Il doppio strato si forma in acqua grazie soprattutto a:",
        "answer": "Organizzazione dei lipidi anfipatici",
        "options": [
          "Organizzazione dei lipidi anfipatici",
          "Idrolisi completa dei lipidi",
          "Legami covalenti fra tutte le teste",
          "Assenza di interazioni con il solvente"
        ],
        "explanation": "Le regioni polari restano compatibili con l’acqua e le code apolari vengono schermate."
      },
      {
        "text": "Quale soluto attraversa più facilmente il doppio strato lipidico senza trasportatori?",
        "answer": "Una piccola molecola apolare",
        "options": [
          "Una piccola molecola apolare",
          "Uno ione sodio idratato",
          "Una proteina globulare",
          "Un oligosaccaride grande"
        ],
        "explanation": "Il nucleo idrofobico ostacola ioni e molte molecole polari.",
        "id": "l8-membrane-4"
      },
      {
        "text": "La pompa Na⁺/K⁺ usa ATP per trasportare, per ciclo:",
        "answer": "Tre Na⁺ fuori e due K⁺ dentro",
        "options": [
          "Tre Na⁺ fuori e due K⁺ dentro",
          "Due Na⁺ fuori e tre K⁺ dentro",
          "Tre Na⁺ dentro e due K⁺ fuori",
          "Solo sodio senza potassio"
        ],
        "explanation": "Il trasporto mantiene gradienti ionici ed è elettrogenico.",
        "id": "l8-membrane-5"
      },
      {
        "text": "Un canale ionico aperto permette generalmente:",
        "answer": "Flusso passivo lungo il gradiente elettrochimico",
        "options": [
          "Flusso passivo lungo il gradiente elettrochimico",
          "Sintesi di ioni a partire da ATP",
          "Trasporto obbligatorio contro gradiente",
          "Ingresso indipendente dalla selettività"
        ],
        "explanation": "I canali accelerano il flusso selettivo ma non forniscono di per sé energia per pompare ioni.",
        "id": "l8-membrane-6"
      }
    ],
    "supplement": {
      "book": "cozzani",
      "chapter": 5,
      "pages": [
        69,
        80
      ],
      "pdfPage": 82
    }
  },
  {
    "id": "segnali",
    "title": "Recettori, secondi messaggeri e insulina",
    "chapter": 12,
    "sections": [
      "12.1",
      "12.2",
      "12.4"
    ],
    "pages": [
      1515,
      1610
    ],
    "pdfPage": 1515,
    "sourceBook": "lehninger",
    "minutes": 15,
    "concept": "Un segnale extracellulare viene riconosciuto da un recettore e convertito in una risposta intracellulare. Recettori accoppiati a proteine G e recettori tirosina-chinasici seguono meccanismi diversi. Il cAMP può attivare PKA; il recettore dell’insulina possiede attività tirosina-chinasica. Amplificazione, spegnimento e integrazione dei segnali impediscono di descrivere la risposta come un semplice interruttore sempre acceso.",
    "points": [
      "La proteina G alterna stati legati a GDP e GTP.",
      "Adenilato ciclasi produce cAMP; fosfodiesterasi contribuisce a degradarlo.",
      "Il recettore dell’insulina non è un recettore accoppiato a proteina G."
    ],
    "oral": "Confronta un recettore che segnala tramite cAMP con il recettore dell’insulina.",
    "hint": "Distingui il tipo di recettore e le proteine a valle.",
    "outline": "Nel primo caso una proteina G può regolare adenilato ciclasi, cAMP e PKA. L’insulina attiva un recettore tirosina-chinasico e una rete di fosforilazioni. Entrambi richiedono meccanismi per limitare la durata del segnale.",
    "questions": [
      {
        "id": "l8-segnali-1",
        "text": "Il recettore dell’insulina appartiene tipicamente ai:",
        "answer": "Recettori tirosina-chinasici",
        "options": [
          "Recettori tirosina-chinasici",
          "Recettori accoppiati a proteina G",
          "Canali per l’ossigeno",
          "Recettori nucleari degli steroidi"
        ],
        "explanation": "La sua attività chinasica avvia una cascata di segnalazione."
      },
      {
        "id": "l8-segnali-2",
        "text": "Il cAMP attiva classicamente:",
        "answer": "Proteina chinasi A",
        "options": [
          "Proteina chinasi A",
          "Direttamente la DNA ligasi",
          "La pepsina extracellulare",
          "Ogni fosfatasi indistintamente"
        ],
        "explanation": "PKA è uno dei principali effettori del cAMP."
      },
      {
        "id": "l8-segnali-3",
        "text": "L’idrolisi del GTP su una proteina G favorisce:",
        "answer": "Il ritorno allo stato legato a GDP",
        "options": [
          "Il ritorno allo stato legato a GDP",
          "L’attivazione permanente della proteina",
          "La sintesi diretta di cAMP",
          "La degradazione del recettore in ogni caso"
        ],
        "explanation": "L’idrolisi contribuisce a limitare il segnale della proteina G."
      },
      {
        "text": "Un secondo messaggero serve soprattutto a:",
        "answer": "Trasmettere un segnale all’interno della cellula",
        "options": [
          "Trasmettere un segnale all’interno della cellula",
          "Trasportare ossigeno nel sangue",
          "Sostituire la sequenza del recettore",
          "Digerire il ligando extracellulare"
        ],
        "explanation": "Molecole come cAMP collegano l’attivazione del recettore alle risposte intracellulari.",
        "id": "l8-segnali-4"
      },
      {
        "text": "L’attivazione di una proteina G eterotrimerica coinvolge:",
        "answer": "Scambio di GDP con GTP sulla subunità alfa",
        "options": [
          "Scambio di GDP con GTP sulla subunità alfa",
          "Conversione di GTP in DNA",
          "Scambio di ATP con NADH",
          "Rottura del recettore in amminoacidi"
        ],
        "explanation": "Il GTP lega lo stato attivo; la sua idrolisi favorisce lo spegnimento del segnale.",
        "id": "l8-segnali-5"
      },
      {
        "text": "Come una cascata di chinasi può amplificare un segnale?",
        "answer": "Ogni enzima attivo può attivare molte molecole a valle",
        "options": [
          "Ogni enzima attivo può attivare molte molecole a valle",
          "Ogni passaggio elimina tutti i bersagli",
          "Il segnale attraversa solo una molecola totale",
          "Tutte le chinasi diventano trasportatori"
        ],
        "explanation": "La moltiplicazione delle molecole attivate a ogni livello consente amplificazione.",
        "id": "l8-segnali-6"
      }
    ]
  },
  {
    "id": "bioenergetica",
    "title": "Energia libera, ATP e accoppiamento",
    "chapter": 13,
    "sections": [
      "13.1",
      "13.3"
    ],
    "pages": [
      1700,
      1789
    ],
    "pdfPage": 1700,
    "sourceBook": "lehninger",
    "minutes": 15,
    "concept": "Il ΔG indica la direzione termodinamicamente favorita nelle condizioni effettive; il ΔG°′ si riferisce a condizioni standard biochimiche. Le concentrazioni contano: non basta guardare il valore standard. L’ATP sostiene processi sfavorevoli attraverso reazioni accoppiate, spesso tramite trasferimento di gruppi. Non si libera energia semplicemente spezzando un legame: conta il bilancio complessivo di reagenti e prodotti.",
    "points": [
      "ΔG negativo: processo favorito nella direzione scritta; non significa automaticamente veloce.",
      "I ΔG delle reazioni accoppiate si sommano quando esiste un meccanismo di accoppiamento.",
      "Distingui fosforilazione a livello del substrato e produzione di ATP collegata a un gradiente."
    ],
    "oral": "Una reazione con ΔG°′ positivo può procedere in una cellula?",
    "hint": "Considera concentrazioni e accoppiamento.",
    "outline": "Sì, se il ΔG effettivo diventa negativo per le concentrazioni presenti, oppure se un meccanismo la accoppia a una trasformazione sufficientemente favorevole. Un enzima non cambia da solo il bilancio termodinamico.",
    "questions": [
      {
        "id": "l8-bioenergetica-1",
        "text": "Il ΔG effettivo di una reazione dipende:",
        "answer": "Anche dalle concentrazioni di reagenti e prodotti",
        "options": [
          "Anche dalle concentrazioni di reagenti e prodotti",
          "Solo dall’identità dell’enzima",
          "Solo dal valore standard",
          "Solo dal numero di legami peptidici"
        ],
        "explanation": "Il termine di concentrazione modifica il ΔG rispetto al valore standard."
      },
      {
        "id": "l8-bioenergetica-2",
        "text": "Una reazione con ΔG negativo è necessariamente rapida?",
        "answer": "No: può avere una barriera di attivazione elevata",
        "options": [
          "No: può avere una barriera di attivazione elevata",
          "Sì: la termodinamica determina tutta la cinetica",
          "Sì: non richiede mai catalisi",
          "No: significa che è all’equilibrio"
        ],
        "explanation": "Termodinamica e velocità descrivono aspetti diversi della reazione."
      },
      {
        "id": "l8-bioenergetica-3",
        "text": "L’accoppiamento con ATP è efficace quando:",
        "answer": "Un meccanismo collega le reazioni e il ΔG totale è favorevole",
        "options": [
          "Un meccanismo collega le reazioni e il ΔG totale è favorevole",
          "Le reazioni avvengono soltanto nello stesso contenitore",
          "L’enzima rende positivo il ΔG totale",
          "Si rompe un legame senza formare prodotti"
        ],
        "explanation": "La somma energetica deve corrispondere a un percorso chimicamente accoppiato."
      },
      {
        "text": "All’equilibrio, il ΔG reale di una reazione è:",
        "answer": "Zero",
        "options": [
          "Zero",
          "Sempre molto negativo",
          "Sempre uguale al ΔG standard",
          "Sempre positivo"
        ],
        "explanation": "All’equilibrio non c’è una direzione netta termodinamicamente favorita.",
        "id": "l8-bioenergetica-4"
      },
      {
        "text": "Due reazioni accoppiate hanno ΔG +4 e −10 kJ/mol. Il ΔG complessivo è:",
        "answer": "−6 kJ/mol",
        "options": [
          "−6 kJ/mol",
          "+14 kJ/mol",
          "+6 kJ/mol",
          "−14 kJ/mol"
        ],
        "explanation": "Per processi accoppiati con intermedi condivisi i contributi di energia libera si sommano.",
        "id": "l8-bioenergetica-5"
      },
      {
        "text": "Qual è una caratteristica dell’ATP nelle reazioni accoppiate?",
        "answer": "Può trasferire gruppi fosforici a intermedi",
        "options": [
          "Può trasferire gruppi fosforici a intermedi",
          "Fornisce elettroni come NADH",
          "È il principale componente dei trigliceridi",
          "Non può reagire con enzimi"
        ],
        "explanation": "Il trasferimento di gruppi permette intermedi condivisi e un accoppiamento chimico effettivo.",
        "id": "l8-bioenergetica-6"
      }
    ]
  },
  {
    "id": "coenzimi",
    "title": "NADH, NADPH, FAD e vitamine",
    "chapter": 13,
    "sections": [
      "13.4"
    ],
    "pages": [
      1788,
      1819
    ],
    "pdfPage": 1788,
    "sourceBook": "lehninger",
    "minutes": 12,
    "concept": "NAD⁺ e NADP⁺ possono accettare equivalenti riducenti formando NADH e NADPH. Il diverso impiego cellulare dei due sistemi è centrale: NADH partecipa spesso al catabolismo energetico, NADPH sostiene biosintesi riduttive e difesa antiossidante. Le flavine, derivate dalla riboflavina, sono spesso associate strettamente agli enzimi. I coenzimi devono essere rigenerati, non soltanto prodotti una volta.",
    "points": [
      "Distingui apoenzima, cofattore ed enzima completo.",
      "Un gruppo prostetico è stabilmente associato alla proteina.",
      "La rigenerazione dei coenzimi permette di sostenere il flusso metabolico."
    ],
    "oral": "Perché la rigenerazione del NAD⁺ è importante per il metabolismo?",
    "hint": "Pensa all’alternanza tra forma ossidata e forma ridotta.",
    "outline": "Spiega l’accettazione di elettroni, la formazione di NADH e la necessità di riossidarlo perché possa partecipare a nuovi cicli.",
    "questions": [
      {
        "id": "l8-coenzimi-1",
        "text": "In una reazione redox, l’ossidazione comporta:",
        "answer": "Perdita di elettroni",
        "options": [
          "Perdita di elettroni",
          "Acquisto di elettroni",
          "Necessariamente produzione diretta di ATP",
          "Necessariamente idrolisi di una proteina"
        ],
        "explanation": "Gli elettroni ceduti da una specie vengono accettati da un’altra, che si riduce."
      },
      {
        "id": "l8-coenzimi-2",
        "text": "Quale associazione funzionale è più appropriata?",
        "answer": "NADPH e biosintesi riduttive/difesa antiossidante",
        "options": [
          "NADPH e biosintesi riduttive/difesa antiossidante",
          "NADPH e trasporto di ossigeno tramite eme",
          "NADH e sintesi di DNA come monomero",
          "FAD e deposito di glucosio"
        ],
        "explanation": "NADPH fornisce potere riducente in molti processi anabolici e antiossidanti; NADH è spesso associato al catabolismo."
      },
      {
        "id": "l8-coenzimi-3",
        "text": "La riboflavina contribuisce alla struttura di:",
        "answer": "FMN e FAD",
        "options": [
          "FMN e FAD",
          "ATP e GTP come basi azotate",
          "NAD e NADP come unica vitamina precursore",
          "Coenzima A come gruppo tiolico"
        ],
        "explanation": "La vitamina B2 è precursore dei coenzimi flavinici; la niacina è collegata a NAD e NADP."
      },
      {
        "text": "Quale coenzima trasporta un gruppo acile?",
        "answer": "Coenzima A",
        "options": [
          "Coenzima A",
          "NAD⁺",
          "FAD",
          "ATP come unico trasportatore acilico"
        ],
        "explanation": "Il gruppo tiolico del coenzima A forma tioesteri con gruppi acilici.",
        "id": "l8-coenzimi-4"
      },
      {
        "text": "NADH rispetto a NAD⁺ è:",
        "answer": "La forma ridotta",
        "options": [
          "La forma ridotta",
          "La forma ossidata",
          "Privo di elettroni trasferibili",
          "Una proteina distinta"
        ],
        "explanation": "NAD⁺ accetta un idruro e diventa NADH in reazioni di ossidoriduzione.",
        "id": "l8-coenzimi-5"
      },
      {
        "text": "Perché una stessa vitamina può influenzare più vie metaboliche?",
        "answer": "Il suo derivato coenzimatico può servire a diversi enzimi",
        "options": [
          "Il suo derivato coenzimatico può servire a diversi enzimi",
          "Ogni vitamina agisce in un’unica cellula",
          "Le vitamine sostituiscono tutti i substrati",
          "Ogni vitamina è un enzima completo"
        ],
        "explanation": "Un coenzima comune collega una vitamina a molte reazioni.",
        "id": "l8-coenzimi-6"
      }
    ],
    "supplement": {
      "book": "cozzani",
      "chapter": 2,
      "pages": [
        31,
        40
      ],
      "pdfPage": 44
    }
  },
  {
    "id": "glucidi",
    "title": "Glicolisi e gluconeogenesi",
    "chapter": 14,
    "sections": [
      "14.1",
      "14.3",
      "14.4",
      "14.5"
    ],
    "pages": [
      1866,
      1987
    ],
    "pdfPage": 1866,
    "sourceBook": "lehninger",
    "minutes": 20,
    "concept": "La glicolisi converte il glucosio in piruvato e produce ATP e NADH. Il glicogeno è una riserva; la gluconeogenesi consente di formare glucosio da precursori non glucidici.",
    "points": [
      "La glicolisi avviene nel citosol: per glucosio produce direttamente 2 ATP netti e 2 NADH.",
      "La formazione di lattato rigenera NAD⁺ e consente di continuare la glicolisi.",
      "La gluconeogenesi richiede energia e aggira tre tappe fortemente irreversibili della glicolisi."
    ],
    "oral": "Perché la gluconeogenesi non è semplicemente la glicolisi percorsa al contrario?",
    "hint": "Individua le tappe irreversibili.",
    "outline": "Spiega il problema termodinamico, le reazioni di aggiramento e la regolazione coordinata che limita i cicli futili.",
    "questions": [
      {
        "id": "l8-glucidi-1",
        "text": "Da un glucosio, il bilancio diretto netto della glicolisi è:",
        "answer": "2 ATP e 2 NADH",
        "options": [
          "2 ATP e 2 NADH",
          "4 ATP netti e 2 NADH",
          "2 ATP e 2 NADPH",
          "30 ATP prodotti direttamente"
        ],
        "explanation": "La fase preparatoria consuma 2 ATP e quella di rendimento ne produce 4: il netto è 2."
      },
      {
        "id": "l8-glucidi-2",
        "text": "La conversione di piruvato in lattato consente alla glicolisi di continuare perché:",
        "answer": "Rigenera NAD⁺ da NADH",
        "options": [
          "Rigenera NAD⁺ da NADH",
          "Produce direttamente ossigeno",
          "Genera altri 4 ATP per glucosio",
          "Converte NADH in NADPH"
        ],
        "explanation": "La lattato deidrogenasi riossida NADH e rende disponibile NAD⁺ per la glicolisi."
      },
      {
        "id": "l8-glucidi-3",
        "text": "La gluconeogenesi non è la semplice inversione della glicolisi perché:",
        "answer": "Deve aggirare tappe fortemente irreversibili",
        "options": [
          "Deve aggirare tappe fortemente irreversibili",
          "Avviene senza enzimi",
          "Utilizza solo acidi grassi a catena pari come precursori netti",
          "Non richiede energia"
        ],
        "explanation": "Usa reazioni di aggiramento e consuma energia per formare glucosio."
      },
      {
        "text": "Quali passaggi glicolitici producono ATP direttamente?",
        "answer": "Fosfoglicerato chinasi e piruvato chinasi",
        "options": [
          "Fosfoglicerato chinasi e piruvato chinasi",
          "Esochinasi e PFK-1",
          "Aldolasi e trioso fosfato isomerasi",
          "Lattato deidrogenasi e citrato sintasi"
        ],
        "explanation": "Queste due reazioni trasferiscono fosfato a ADP: fosforilazione a livello del substrato.",
        "id": "l8-glucidi-4"
      },
      {
        "text": "Nella gluconeogenesi, la piruvato carbossilasi forma:",
        "answer": "Ossalacetato",
        "options": [
          "Ossalacetato",
          "Acetil-CoA",
          "Lattato",
          "Fruttosio-6-fosfato"
        ],
        "explanation": "La carbossilazione ATP-dipendente del piruvato precede la formazione di fosfoenolpiruvato.",
        "id": "l8-glucidi-5"
      },
      {
        "text": "Per liberare glucosio dal glucosio-6-fosfato serve:",
        "answer": "Glucosio-6-fosfatasi",
        "options": [
          "Glucosio-6-fosfatasi",
          "Esochinasi",
          "PFK-1",
          "Fosfoglicerato mutasi"
        ],
        "explanation": "L’idrolisi finale del fosfato consente il rilascio di glucosio da tessuti gluconeogenici.",
        "id": "l8-glucidi-6"
      }
    ],
    "supplement": {
      "book": "cozzani",
      "chapter": 6,
      "pages": [
        81,
        91
      ],
      "pdfPage": 94
    }
  },
  {
    "id": "pentosi",
    "title": "Via dei pentoso fosfati e potere riducente",
    "chapter": 14,
    "sections": [
      "14.6"
    ],
    "pages": [
      1988,
      2005
    ],
    "pdfPage": 1988,
    "sourceBook": "lehninger",
    "minutes": 15,
    "concept": "Il glucosio 6-fosfato può entrare nella via dei pentoso fosfati invece che nella glicolisi. La fase ossidativa produce NADPH; il ribosio 5-fosfato serve per la sintesi di nucleotidi. Le reazioni non ossidative interconvertono zuccheri e collegano la via alla glicolisi. Il flusso dipende dal bisogno di potere riducente e di pentosi, non soltanto dalla richiesta di ATP.",
    "points": [
      "Non confondere NADPH della via con NADH della glicolisi.",
      "Il ribosio 5-fosfato collega metabolismo glucidico e sintesi dei nucleotidi.",
      "NADPH sostiene anche la rigenerazione di sistemi antiossidanti."
    ],
    "oral": "Perché una cellula può deviare glucosio 6-fosfato dalla glicolisi?",
    "hint": "Pensa ai prodotti richiesti oltre all’ATP.",
    "outline": "La cellula può avere bisogno di NADPH per biosintesi e protezione antiossidante o di ribosio per nucleotidi. La via dei pentoso fosfati e le interconversioni non ossidative permettono di adattarsi a queste richieste.",
    "questions": [
      {
        "id": "l8-pentosi-1",
        "text": "La fase ossidativa della via produce principalmente:",
        "answer": "NADPH",
        "options": [
          "NADPH",
          "NADH al posto di NADPH",
          "ATP mediante ATP sintasi",
          "Acetil-CoA come unico prodotto"
        ],
        "explanation": "Il coenzima accettore è NADP⁺, che viene ridotto a NADPH."
      },
      {
        "id": "l8-pentosi-2",
        "text": "Il ribosio 5-fosfato è un precursore per:",
        "answer": "Nucleotidi",
        "options": [
          "Nucleotidi",
          "Triacilgliceroli come scheletro principale",
          "Corpi chetonici",
          "Urea"
        ],
        "explanation": "Fornisce il pentoso necessario alla costruzione dei nucleotidi."
      },
      {
        "id": "l8-pentosi-3",
        "text": "La via dei pentoso fosfati si svolge principalmente:",
        "answer": "Nel citosol",
        "options": [
          "Nel citosol",
          "Nella matrice mitocondriale",
          "Nel lume lisosomiale",
          "Nel plasma sanguigno"
        ],
        "explanation": "È una via citosolica collegata ad altri percorsi del metabolismo degli zuccheri."
      },
      {
        "text": "Una cellula che richiede ribosio ma poco NADPH può usare:",
        "answer": "La fase non ossidativa a partire da intermedi glicolitici",
        "options": [
          "La fase non ossidativa a partire da intermedi glicolitici",
          "Solo la beta-ossidazione",
          "Solo il ciclo dell’urea",
          "Solo la chetogenesi"
        ],
        "explanation": "Le reazioni reversibili della fase non ossidativa permettono di adattare produzione di pentosi e fabbisogno riducente.",
        "id": "l8-pentosi-4"
      },
      {
        "text": "La fase non ossidativa collega i pentosi a:",
        "answer": "Intermedi della glicolisi",
        "options": [
          "Intermedi della glicolisi",
          "Soli corpi chetonici",
          "Soli acidi grassi",
          "Soli amminoacidi aromatici"
        ],
        "explanation": "Transchetolasi e transaldolasi ridistribuiscono gli scheletri carboniosi.",
        "id": "l8-pentosi-5"
      },
      {
        "text": "Perché il NADPH è utile al sistema del glutatione?",
        "answer": "Fornisce potere riducente per rigenerare glutatione ridotto",
        "options": [
          "Fornisce potere riducente per rigenerare glutatione ridotto",
          "È un enzima che distrugge direttamente ogni perossido",
          "Trasporta ossigeno come l’emoglobina",
          "Fosforila direttamente il glucosio"
        ],
        "explanation": "La glutatione reduttasi usa NADPH per mantenere il pool ridotto.",
        "id": "l8-pentosi-6"
      }
    ]
  },
  {
    "id": "glicogeno",
    "title": "Glicogeno: riserva e regolazione",
    "chapter": 15,
    "sections": [
      "15.1",
      "15.2",
      "15.3"
    ],
    "pages": [
      2027,
      2077
    ],
    "pdfPage": 2027,
    "sourceBook": "lehninger",
    "minutes": 15,
    "concept": "Il glicogeno permette una mobilizzazione rapida del glucosio immagazzinato. La fosforilasi libera soprattutto glucosio 1-fosfato dalle estremità non riducenti; gli enzimi deramificanti completano il lavoro ai punti di ramificazione. La sintesi usa UDP-glucosio e non è la semplice inversione della degradazione. Fegato e muscolo usano il glicogeno per compiti diversi.",
    "points": [
      "La fosforolisi del glicogeno cellulare è diversa dall’idrolisi digestiva.",
      "Il fegato sostiene la glicemia; il muscolo usa la riserva soprattutto per sé.",
      "La regolazione reciproca limita sintesi e degradazione simultanee."
    ],
    "oral": "Perché il glicogeno muscolare non sostituisce quello epatico nel mantenimento della glicemia?",
    "hint": "Considera il rilascio di glucosio libero.",
    "outline": "Il fegato possiede il sistema glucosio 6-fosfatasi e può contribuire al rilascio di glucosio nel sangue. Il muscolo utilizza il proprio glucosio fosforilato nella glicolisi per sostenere il lavoro.",
    "questions": [
      {
        "id": "l8-glicogeno-1",
        "text": "La glicogeno fosforilasi libera principalmente:",
        "answer": "Glucosio 1-fosfato",
        "options": [
          "Glucosio 1-fosfato",
          "Glucosio 6-fosfato direttamente a ogni passaggio",
          "Solo glucosio libero",
          "UDP-glucosio"
        ],
        "explanation": "La fosforolisi usa fosfato inorganico e produce glucosio 1-fosfato."
      },
      {
        "id": "l8-glicogeno-2",
        "text": "Il donatore di glucosio per la glicogeno sintasi è:",
        "answer": "UDP-glucosio",
        "options": [
          "UDP-glucosio",
          "Glucosio libero non attivato",
          "Lattato",
          "Ribosio 5-fosfato"
        ],
        "explanation": "L’attivazione come UDP-glucosio permette il trasferimento alla catena."
      },
      {
        "id": "l8-glicogeno-3",
        "text": "Il glicogeno del muscolo scheletrico serve soprattutto a:",
        "answer": "Sostenere il metabolismo del muscolo stesso",
        "options": [
          "Sostenere il metabolismo del muscolo stesso",
          "Rilasciare direttamente glucosio nel sangue come il fegato",
          "Produrre urea",
          "Sintetizzare corpi chetonici"
        ],
        "explanation": "Il muscolo non possiede il sistema epatico per liberare glucosio dal glucosio 6-fosfato."
      },
      {
        "text": "L’enzima deramificante è necessario perché la fosforilasi:",
        "answer": "Non supera da sola i punti di ramificazione alfa(1→6)",
        "options": [
          "Non supera da sola i punti di ramificazione alfa(1→6)",
          "Taglia solo legami peptidici",
          "Sintetizza tutte le ramificazioni",
          "Trasporta glucosio nel sangue"
        ],
        "explanation": "Attività di trasferimento e idrolisi delle ramificazioni permettono di proseguire la degradazione.",
        "id": "l8-glicogeno-4"
      },
      {
        "text": "Perché il glicogeno muscolare non sostiene direttamente la glicemia come quello epatico?",
        "answer": "Il muscolo non dispone della glucosio-6-fosfatasi epatica",
        "options": [
          "Il muscolo non dispone della glucosio-6-fosfatasi epatica",
          "Il muscolo non degrada glicogeno",
          "Il glicogeno muscolare non contiene glucosio",
          "Il fegato non usa fosforilasi"
        ],
        "explanation": "Il fegato può liberare glucosio nel sangue; il muscolo utilizza il proprio glucosio-6-fosfato.",
        "id": "l8-glicogeno-5"
      },
      {
        "text": "Le ramificazioni del glicogeno favoriscono:",
        "answer": "Mobilizzazione rapida da numerose estremità non riducenti",
        "options": [
          "Mobilizzazione rapida da numerose estremità non riducenti",
          "Un’unica estremità utilizzabile",
          "Insolubilità assoluta in acqua",
          "Legami beta come nella cellulosa"
        ],
        "explanation": "La struttura ramificata offre molti punti di attacco agli enzimi.",
        "id": "l8-glicogeno-6"
      }
    ]
  },
  {
    "id": "krebs",
    "title": "Acetil-CoA e ciclo dell’acido citrico",
    "chapter": 16,
    "sections": [
      "16.1",
      "16.2",
      "16.3",
      "16.4"
    ],
    "pages": [
      2085,
      2158
    ],
    "pdfPage": 2085,
    "sourceBook": "lehninger",
    "minutes": 20,
    "concept": "Il complesso piruvato deidrogenasi collega glicolisi e metabolismo mitocondriale formando acetil-CoA. Nel ciclo dell’acido citrico il gruppo acetile viene ossidato e l’ossalacetato rigenerato. Per giro si formano 3 NADH, 1 equivalente riducente raccolto tramite FAD e 1 GTP/ATP. Il ciclo fornisce anche precursori: la sottrazione di intermedi richiede reazioni di rifornimento, dette anaplerotiche.",
    "points": [
      "Segui i carboni e i coenzimi separatamente.",
      "Il ciclo non produce direttamente tutto l’ATP dell’ossidazione del glucosio.",
      "La piruvato carbossilasi può rifornire ossalacetato usando biotina e ATP."
    ],
    "oral": "Perché il ciclo è detto anfibolico e richiede anaplerosi?",
    "hint": "Distingui funzione ossidativa e impiego degli intermedi.",
    "outline": "Il ciclo partecipa sia al catabolismo sia alla fornitura di precursori biosintetici. Quando un intermedio viene sottratto, il suo rifornimento mantiene la possibilità di ossidare nuovi gruppi acetile.",
    "questions": [
      {
        "id": "l8-krebs-1",
        "text": "Al termine di un giro viene rigenerato:",
        "answer": "Ossalacetato",
        "options": [
          "Ossalacetato",
          "Piruvato come prodotto obbligatorio",
          "Glucosio",
          "Acetil-CoA intatto"
        ],
        "explanation": "L’ossalacetato può reagire con un nuovo acetil-CoA."
      },
      {
        "id": "l8-krebs-2",
        "text": "Per acetil-CoA, il ciclo produce:",
        "answer": "3 NADH, 1 FADH₂ equivalente e 1 GTP/ATP",
        "options": [
          "3 NADH, 1 FADH₂ equivalente e 1 GTP/ATP",
          "2 NADPH e 4 ATP diretti",
          "Solo 2 ATP e nessun coenzima ridotto",
          "6 NADH e 2 FADH₂"
        ],
        "explanation": "Il rendimento diretto va distinto dall’ATP ottenuto successivamente tramite fosforilazione ossidativa."
      },
      {
        "id": "l8-krebs-3",
        "text": "Una reazione anaplerotica serve a:",
        "answer": "Rifornire intermedi sottratti al ciclo",
        "options": [
          "Rifornire intermedi sottratti al ciclo",
          "Bloccare ogni via biosintetica",
          "Degradare tutte le proteine mitocondriali",
          "Convertire NADPH in ossigeno"
        ],
        "explanation": "Mantiene disponibili gli intermedi necessari alla continuità del ciclo."
      },
      {
        "text": "Perché il ciclo di Krebs è anfibolico?",
        "answer": "Fornisce energia e precursori biosintetici",
        "options": [
          "Fornisce energia e precursori biosintetici",
          "Funziona solo nella digestione",
          "Produce solo proteine",
          "Non partecipa al catabolismo"
        ],
        "explanation": "Gli intermedi possono essere ossidati o prelevati per biosintesi.",
        "id": "l8-krebs-4"
      },
      {
        "text": "Quale reazione del ciclo coinvolge direttamente la succinato deidrogenasi?",
        "answer": "Succinato → fumarato",
        "options": [
          "Succinato → fumarato",
          "Citrato → isocitrato",
          "Malato → ossalacetato",
          "Acetil-CoA → piruvato"
        ],
        "explanation": "Questo enzima è anche il complesso II della catena respiratoria e usa un cofattore flavinico.",
        "id": "l8-krebs-5"
      },
      {
        "text": "Nel complesso piruvato deidrogenasi, il piruvato dà origine a:",
        "answer": "Acetil-CoA, CO₂ e NADH",
        "options": [
          "Acetil-CoA, CO₂ e NADH",
          "Lattato e NAD⁺",
          "Glucosio e ATP",
          "Urea e ossigeno"
        ],
        "explanation": "La decarbossilazione ossidativa collega glicolisi e ossidazione mitocondriale.",
        "id": "l8-krebs-6"
      }
    ],
    "supplement": {
      "book": "cozzani",
      "chapter": 6,
      "pages": [
        94,
        100
      ],
      "pdfPage": 107
    }
  },
  {
    "id": "lipidi",
    "title": "β-ossidazione e corpi chetonici",
    "chapter": 17,
    "sections": [
      "17.1",
      "17.2",
      "17.3"
    ],
    "pages": [
      2179,
      2249
    ],
    "pdfPage": 2179,
    "sourceBook": "lehninger",
    "minutes": 18,
    "concept": "La β-ossidazione accorcia gli acili liberando acetil-CoA e generando coenzimi ridotti. Per gli acidi grassi a lunga catena l’attivazione e il trasferimento mediante carnitina precedono l’ossidazione mitocondriale. Nel fegato, una parte dell’acetil-CoA può essere indirizzata alla produzione di corpi chetonici, esportati come combustibile. Lipolisi, β-ossidazione e chetogenesi sono processi distinti.",
    "points": [
      "Distingui lipolisi, attivazione, trasporto con carnitina e β-ossidazione.",
      "Un acido grasso saturo a 16 carboni compie 7 cicli e forma 8 acetil-CoA.",
      "Il fegato produce corpi chetonici per tessuti extraepatici; non è il loro principale utilizzatore."
    ],
    "oral": "Come arriva l’energia di un trigliceride alla produzione di ATP?",
    "hint": "Separa mobilizzazione, trasporto e ossidazione.",
    "outline": "Descrivi lipolisi, attivazione degli acidi grassi, ingresso mitocondriale, β-ossidazione e uso di acetil-CoA e coenzimi ridotti.",
    "questions": [
      {
        "id": "l8-lipidi-1",
        "text": "Un acido grasso saturo a 16 carboni richiede per la β-ossidazione completa:",
        "answer": "7 cicli e forma 8 acetil-CoA",
        "options": [
          "7 cicli e forma 8 acetil-CoA",
          "8 cicli e forma 7 acetil-CoA",
          "16 cicli e forma 16 acetil-CoA",
          "4 cicli e forma 4 acetil-CoA"
        ],
        "explanation": "L’ultimo ciclo divide un frammento a quattro carboni in due acetil-CoA."
      },
      {
        "id": "l8-lipidi-2",
        "text": "Per gli acili a lunga catena, il sistema della carnitina permette:",
        "answer": "Il trasferimento verso la matrice mitocondriale",
        "options": [
          "Il trasferimento verso la matrice mitocondriale",
          "La digestione dei lipidi nel lume",
          "La produzione di glucosio netto dall’acetil-CoA",
          "Il trasporto di NADPH al nucleo"
        ],
        "explanation": "Il trasporto permette l’accesso degli acili alla via mitocondriale."
      },
      {
        "id": "l8-lipidi-3",
        "text": "I corpi chetonici sono prodotti principalmente:",
        "answer": "Nel fegato e usati da tessuti extraepatici",
        "options": [
          "Nel fegato e usati da tessuti extraepatici",
          "Nel muscolo e usati esclusivamente nel fegato",
          "Nei globuli rossi tramite mitocondri",
          "Nel lume intestinale per digestione"
        ],
        "explanation": "Il fegato esporta combustibili derivati dall’acetil-CoA; la loro utilizzazione avviene in altri tessuti."
      },
      {
        "text": "La beta-ossidazione di un acido grasso a catena dispari termina anche con:",
        "answer": "Propionil-CoA",
        "options": [
          "Propionil-CoA",
          "Solo glucosio libero",
          "Solo ossalacetato",
          "Solo lattato"
        ],
        "explanation": "Il frammento a tre carboni può essere convertito in succinil-CoA.",
        "id": "l8-lipidi-4"
      },
      {
        "text": "Ogni ciclo di beta-ossidazione di un acile saturo a catena pari rimuove:",
        "answer": "Un’unità di due carboni come acetil-CoA",
        "options": [
          "Un’unità di due carboni come acetil-CoA",
          "Un solo carbonio come CO₂",
          "Tre carboni come piruvato",
          "Sei carboni come glucosio"
        ],
        "explanation": "La spirale alterna ossidazione, idratazione, ossidazione e tiolisi.",
        "id": "l8-lipidi-5"
      },
      {
        "text": "Perché il fegato esporta corpi chetonici senza usarli come altri tessuti?",
        "answer": "Manca dell’enzima che trasferisce CoA dal succinil-CoA all’acetoacetato",
        "options": [
          "Manca dell’enzima che trasferisce CoA dal succinil-CoA all’acetoacetato",
          "Non possiede mitocondri",
          "Non sintetizza acetil-CoA",
          "Non ossida mai acidi grassi"
        ],
        "explanation": "L’assenza della succinil-CoA:acetoacetato CoA transferasi impedisce la normale utilizzazione epatica dei chetoni.",
        "id": "l8-lipidi-6"
      }
    ],
    "supplement": {
      "book": "cozzani",
      "chapter": 6,
      "pages": [
        101,
        108
      ],
      "pdfPage": 114
    }
  },
  {
    "id": "azoto",
    "title": "Catabolismo degli amminoacidi e ciclo dell’urea",
    "chapter": 18,
    "sections": [
      "18.1",
      "18.2",
      "18.3"
    ],
    "pages": [
      2261,
      2343
    ],
    "pdfPage": 2261,
    "sourceBook": "lehninger",
    "minutes": 17,
    "concept": "Il catabolismo degli amminoacidi richiede la gestione del gruppo amminico e dello scheletro carbonioso. Il ciclo dell’urea permette di eliminare azoto in una forma adatta all’escrezione.",
    "points": [
      "Molte transaminazioni richiedono piridossal fosfato, derivato della vitamina B6.",
      "Il ciclo dell’urea è epatico e comprende tappe mitocondriali e citosoliche.",
      "L’urea riceve un azoto dall’ammonio e uno dall’aspartato; il carbonio proviene da bicarbonato."
    ],
    "oral": "Perché degradare un amminoacido richiede due percorsi distinti?",
    "hint": "Considera separatamente azoto e carbonio.",
    "outline": "Descrivi il trasferimento dei gruppi amminici e l’eliminazione dell’azoto, poi il destino energetico o biosintetico dello scheletro carbonioso.",
    "questions": [
      {
        "id": "l8-azoto-1",
        "text": "Molte aminotransferasi usano come coenzima:",
        "answer": "Piridossal fosfato, derivato dalla vitamina B6",
        "options": [
          "Piridossal fosfato, derivato dalla vitamina B6",
          "Biotina come unico coenzima redox",
          "FAD come donatore di gruppi amminici",
          "Vitamina C come scheletro carbonioso"
        ],
        "explanation": "Il PLP facilita il trasferimento di gruppi amminici tra amminoacidi e α-chetoacidi."
      },
      {
        "id": "l8-azoto-2",
        "text": "Il ciclo dell’urea avviene soprattutto:",
        "answer": "Nel fegato, tra mitocondrio e citosol",
        "options": [
          "Nel fegato, tra mitocondrio e citosol",
          "Nei globuli rossi, nella matrice mitocondriale",
          "Solo nel nucleo del muscolo",
          "Nel lume dell’intestino"
        ],
        "explanation": "Le reazioni sono compartimentate negli epatociti e permettono l’escrezione dell’azoto."
      },
      {
        "id": "l8-azoto-3",
        "text": "I due atomi di azoto dell’urea provengono da:",
        "answer": "Ammonio e aspartato",
        "options": [
          "Ammonio e aspartato",
          "Due molecole di acetil-CoA",
          "Due gruppi fosfato",
          "Glucosio e colesterolo"
        ],
        "explanation": "Uno entra tramite carbamil fosfato; l’altro viene fornito dall’aspartato."
      },
      {
        "text": "Una transaminazione trasferisce:",
        "answer": "Un gruppo amminico a un alfa-chetoacido",
        "options": [
          "Un gruppo amminico a un alfa-chetoacido",
          "Un gruppo fosfato all’ATP",
          "Un gruppo acile alla carnitina",
          "Un gruppo metile al DNA come unica funzione"
        ],
        "explanation": "Le aminotransferasi collegano amminoacidi e corrispondenti alfa-chetoacidi, spesso usando PLP.",
        "id": "l8-azoto-4"
      },
      {
        "text": "Qual è il ruolo principale del ciclo dell’urea?",
        "answer": "Consentire l’eliminazione dell’azoto in una forma relativamente poco tossica",
        "options": [
          "Consentire l’eliminazione dell’azoto in una forma relativamente poco tossica",
          "Produrre glucosio da acidi grassi",
          "Fissare CO₂ nel cloroplasto",
          "Sintetizzare tutte le proteine"
        ],
        "explanation": "Il fegato converte azoto ammoniacale e azoto dell’aspartato in urea.",
        "id": "l8-azoto-5"
      },
      {
        "text": "Che cosa significa che un amminoacido è glucogenico?",
        "answer": "Il suo scheletro carbonioso può contribuire alla gluconeogenesi",
        "options": [
          "Il suo scheletro carbonioso può contribuire alla gluconeogenesi",
          "Viene assorbito solo insieme a glucosio",
          "Non contiene azoto",
          "È sempre convertito esclusivamente in corpi chetonici"
        ],
        "explanation": "Gli scheletri glucogenici producono piruvato o intermedi che possono alimentare la sintesi di glucosio.",
        "id": "l8-azoto-6"
      }
    ],
    "supplement": {
      "book": "cozzani",
      "chapter": 6,
      "pages": [
        108,
        114
      ],
      "pdfPage": 121
    }
  },
  {
    "id": "mitocondri",
    "title": "Catena respiratoria e fosforilazione ossidativa",
    "chapter": 19,
    "sections": [
      "19.1",
      "19.2",
      "19.3"
    ],
    "pages": [
      2363,
      2457
    ],
    "pdfPage": 2363,
    "sourceBook": "lehninger",
    "minutes": 20,
    "concept": "Gli elettroni provenienti dai coenzimi ridotti attraversano la catena respiratoria fino all’ossigeno. I complessi I, III e IV contribuiscono a generare un gradiente elettrochimico di protoni; il complesso II non pompa protoni. L’ATP sintasi usa il ritorno dei protoni verso la matrice per sintetizzare ATP. Inibizione della catena e disaccoppiamento non sono equivalenti: agiscono su componenti diversi.",
    "points": [
      "I complessi I, III e IV contribuiscono al pompaggio protonico; il II trasferisce elettroni senza pompare protoni.",
      "La forza proton-motrice comprende una componente elettrica e una differenza di pH.",
      "Un disaccoppiante dissipa il gradiente: il flusso elettronico e la sintesi di ATP non restano necessariamente associati."
    ],
    "oral": "Collega ciclo di Krebs, catena respiratoria e ATP sintasi.",
    "hint": "Segui prima gli elettroni, poi i protoni.",
    "outline": "Parti dai coenzimi ridotti, passa al trasferimento degli elettroni e alla generazione del gradiente, poi descrivi il ritorno dei protoni attraverso l’ATP sintasi.",
    "questions": [
      {
        "id": "l8-mitocondri-1",
        "text": "Nella catena respiratoria mitocondriale, l’accettore finale degli elettroni è:",
        "answer": "Ossigeno",
        "options": [
          "Ossigeno",
          "ATP",
          "NADPH",
          "Piruvato"
        ],
        "explanation": "L’ossigeno accetta elettroni e viene ridotto ad acqua."
      },
      {
        "id": "l8-mitocondri-2",
        "text": "Quale complesso trasferisce elettroni ma non pompa protoni?",
        "answer": "Complesso II",
        "options": [
          "Complesso II",
          "Complesso I",
          "Complesso III",
          "Complesso IV"
        ],
        "explanation": "Il complesso II collega succinato e ubiquinone senza traslocare protoni."
      },
      {
        "id": "l8-mitocondri-3",
        "text": "Un disaccoppiante che dissipa il gradiente protonico tende a:",
        "answer": "Ridurre la sintesi di ATP separandola dal flusso elettronico",
        "options": [
          "Ridurre la sintesi di ATP separandola dal flusso elettronico",
          "Bloccare necessariamente ogni trasferimento di elettroni",
          "Aumentare il rendimento in ATP per elettrone",
          "Trasformare ATP sintasi in glicogeno sintasi"
        ],
        "explanation": "La perdita della forza proton-motrice compromette l’accoppiamento; l’energia può dissiparsi come calore."
      },
      {
        "text": "Durante la sintesi di ATP nei mitocondri, i protoni attraversano l’ATP sintasi:",
        "answer": "Dallo spazio intermembrana verso la matrice",
        "options": [
          "Dallo spazio intermembrana verso la matrice",
          "Dalla matrice verso lo spazio intermembrana",
          "Dal citosol al nucleo",
          "Dal nucleo al citosol"
        ],
        "explanation": "Il ritorno lungo il gradiente sostiene la sintesi di ATP.",
        "id": "l8-mitocondri-4"
      },
      {
        "text": "Il blocco del complesso IV impedisce direttamente:",
        "answer": "Il trasferimento finale degli elettroni all’ossigeno",
        "options": [
          "Il trasferimento finale degli elettroni all’ossigeno",
          "La digestione dell’amido",
          "La sintesi di glucosio nel lume intestinale",
          "Il legame dell’insulina al recettore"
        ],
        "explanation": "L’interruzione a valle ostacola il flusso elettronico e la respirazione.",
        "id": "l8-mitocondri-5"
      },
      {
        "text": "Perché NADH e FADH₂ non danno necessariamente la stessa resa di ATP?",
        "answer": "Gli elettroni entrano nella catena a livelli diversi",
        "options": [
          "Gli elettroni entrano nella catena a livelli diversi",
          "FADH₂ contiene sempre più energia utilizzabile di NADH",
          "Solo FADH₂ può trasferire elettroni",
          "NADH non entra mai nella respirazione"
        ],
        "explanation": "L’ingresso a valle del complesso I comporta un minore pompaggio protonico associato.",
        "id": "l8-mitocondri-6"
      }
    ],
    "supplement": {
      "book": "cozzani",
      "chapter": 6,
      "pages": [
        94,
        100
      ],
      "pdfPage": 107
    }
  },
  {
    "id": "fotosintesi",
    "title": "Fotosintesi e sintesi dei carboidrati nelle piante",
    "chapter": 20,
    "pages": [
      2494,
      2622
    ],
    "pdfPage": 2494,
    "sections": [
      "20.1",
      "20.2",
      "20.3",
      "20.4",
      "20.5",
      "20.6"
    ],
    "sourceBook": "lehninger",
    "minutes": 15,
    "concept": "La fotosintesi converte energia luminosa in energia chimica. Le reazioni fotochimiche alimentano un gradiente protonico e la produzione di potere riducente. Il ciclo di Calvin usa ATP e NADPH per assimilare CO₂. Questo collega la biochimica vegetale all’origine dei carboidrati della dieta.",
    "points": [
      "Distingui reazioni fotochimiche e assimilazione del carbonio.",
      "L’ATP sintasi usa un gradiente protonico anche nei cloroplasti.",
      "La rubisco può reagire con CO₂ oppure O₂."
    ],
    "oral": "Collega energia luminosa e produzione di carboidrati.",
    "hint": "Distingui reazioni fotochimiche e assimilazione del carbonio.",
    "outline": "Distingui cattura della luce, trasferimento di elettroni, sintesi di ATP e fissazione della CO₂. ATP e NADPH sostengono la riduzione del carbonio nel ciclo di Calvin.",
    "questions": [
      {
        "text": "Nel flusso elettronico fotosintetico ossigenico, l’ossigeno rilasciato deriva da:",
        "answer": "Acqua",
        "options": [
          "Acqua",
          "CO₂",
          "Glucosio",
          "NADPH"
        ],
        "explanation": "L’ossidazione dell’acqua al fotosistema II libera ossigeno molecolare.",
        "id": "l8-fotosintesi-1"
      },
      {
        "text": "Il ciclo di Calvin utilizza principalmente:",
        "answer": "ATP e NADPH",
        "options": [
          "ATP e NADPH",
          "Solo NADH e urea",
          "Solo ossigeno e FAD",
          "Solo glicogeno e lattato"
        ],
        "explanation": "Energia e potere riducente permettono l’assimilazione della CO₂.",
        "id": "l8-fotosintesi-2"
      },
      {
        "text": "La rubisco carbossila:",
        "answer": "Ribulosio-1,5-bisfosfato",
        "options": [
          "Ribulosio-1,5-bisfosfato",
          "Glucosio libero",
          "Piruvato",
          "Acetil-CoA"
        ],
        "explanation": "La carbossilazione del RuBP avvia l’incorporazione del carbonio in composti organici.",
        "id": "l8-fotosintesi-3"
      },
      {
        "text": "La fotofosforilazione sintetizza ATP usando:",
        "answer": "Un gradiente protonico attraverso la membrana tilacoidale",
        "options": [
          "Un gradiente protonico attraverso la membrana tilacoidale",
          "Solo idrolisi di proteine",
          "La degradazione diretta della cellulosa",
          "Un gradiente di glucosio nel nucleo"
        ],
        "explanation": "La chemiosmosi collega trasporto elettronico e ATP sintasi.",
        "id": "l8-fotosintesi-4"
      },
      {
        "text": "La fotorespirazione inizia quando la rubisco:",
        "answer": "Ossigena il RuBP",
        "options": [
          "Ossigena il RuBP",
          "Riduce il NADP⁺",
          "Idrolizza ATP",
          "Sintetizza amido"
        ],
        "explanation": "L’attività ossigenasica compete con quella carbossilasica e richiede recupero del carbonio.",
        "id": "l8-fotosintesi-5"
      },
      {
        "text": "Le vie C4 favoriscono la fotosintesi soprattutto perché:",
        "answer": "Concentrano CO₂ in prossimità della rubisco",
        "options": [
          "Concentrano CO₂ in prossimità della rubisco",
          "Eliminano la necessità di ATP",
          "Eliminano tutti i cloroplasti",
          "Usano urea come unico donatore elettronico"
        ],
        "explanation": "La concentrazione di CO₂ riduce la competizione dell’ossigeno, con un costo energetico aggiuntivo.",
        "id": "l8-fotosintesi-6"
      }
    ]
  },
  {
    "id": "sintesi-lipidi",
    "title": "Sintesi degli acidi grassi e regolazione reciproca",
    "chapter": 21,
    "sections": [
      "21.1",
      "21.2"
    ],
    "pages": [
      2646,
      2713
    ],
    "pdfPage": 2646,
    "sourceBook": "lehninger",
    "minutes": 20,
    "concept": "La sintesi degli acidi grassi segue una via diversa dalla β-ossidazione. Negli animali si svolge soprattutto nel citosol, usa malonil-CoA come donatore di unità carboniose e NADPH come fonte di potere riducente. L’acetil-CoA carbossilasi produce malonil-CoA. La regolazione coordina disponibilità energetica, sintesi e ingresso degli acili nei mitocondri.",
    "points": [
      "Non invertire meccanicamente gli enzimi della β-ossidazione.",
      "Il NADPH necessario si collega anche alla via dei pentoso fosfati.",
      "Malonil-CoA limita CPT I e quindi l’ingresso degli acili a lunga catena nella via ossidativa."
    ],
    "oral": "Come viene limitata la sintesi simultanea con l’ossidazione degli acidi grassi?",
    "hint": "Cerca un intermedio che collega i due processi.",
    "outline": "Il malonil-CoA è intermedio della sintesi e inibisce CPT I, riducendo l’accesso degli acili a lunga catena alla matrice. Compartimentazione e segnali regolatori contribuiscono al controllo reciproco.",
    "questions": [
      {
        "id": "l8-sintesi-lipidi-1",
        "text": "Il donatore di potere riducente della sintesi degli acidi grassi è:",
        "answer": "NADPH",
        "options": [
          "NADPH",
          "NAD⁺ ossidato",
          "FAD ossidato",
          "Ossigeno molecolare"
        ],
        "explanation": "Le reazioni riduttive della sintasi utilizzano NADPH."
      },
      {
        "id": "l8-sintesi-lipidi-2",
        "text": "L’acetil-CoA carbossilasi forma:",
        "answer": "Malonil-CoA",
        "options": [
          "Malonil-CoA",
          "Acetoacetato direttamente",
          "Glucosio 6-fosfato",
          "Ossalacetato da piruvato"
        ],
        "explanation": "È una reazione che richiede ATP e biotina e introduce il precursore della sintesi."
      },
      {
        "id": "l8-sintesi-lipidi-3",
        "text": "Malonil-CoA contribuisce a ridurre la β-ossidazione perché:",
        "answer": "Inibisce CPT I",
        "options": [
          "Inibisce CPT I",
          "Inibisce direttamente ogni complesso respiratorio",
          "Consuma tutti i coenzimi NADH",
          "Distrugge la membrana interna"
        ],
        "explanation": "L’inibizione del sistema di ingresso limita l’ossidazione degli acili a lunga catena."
      },
      {
        "text": "Nella sintesi degli acidi grassi, l’ACP trasporta:",
        "answer": "Intermedi acilici tramite un braccio fosfopanteteinico",
        "options": [
          "Intermedi acilici tramite un braccio fosfopanteteinico",
          "Ossigeno tramite un gruppo eme",
          "Glucosio tramite una membrana",
          "DNA tramite un nucleo"
        ],
        "explanation": "Il braccio mobile porta gli intermedi tra i siti catalitici del sistema sintetico.",
        "id": "l8-sintesi-lipidi-4"
      },
      {
        "text": "Come vengono trasferite unità acetiliche dal mitocondrio al citosol per la lipogenesi?",
        "answer": "Esportando citrato e scindendolo nel citosol",
        "options": [
          "Esportando citrato e scindendolo nel citosol",
          "Facendo diffondere liberamente acetil-CoA nella membrana interna",
          "Esportando direttamente glicogeno",
          "Convertendole sempre in urea"
        ],
        "explanation": "La navetta del citrato rende disponibile acetil-CoA citosolico.",
        "id": "l8-sintesi-lipidi-5"
      },
      {
        "text": "Il prodotto tipico dell’acido grasso sintasi dei mammiferi è:",
        "answer": "Palmitato a 16 carboni",
        "options": [
          "Palmitato a 16 carboni",
          "Propionato a 3 carboni",
          "Colesterolo",
          "Glucosio"
        ],
        "explanation": "La sintasi produce prevalentemente palmitato, modificabile successivamente da altri sistemi.",
        "id": "l8-sintesi-lipidi-6"
      }
    ]
  },
  {
    "id": "lipoproteine",
    "title": "Colesterolo, biosintesi e lipoproteine",
    "chapter": 21,
    "sections": [
      "21.4"
    ],
    "pages": [
      2734,
      2775
    ],
    "pdfPage": 2734,
    "sourceBook": "lehninger",
    "minutes": 14,
    "concept": "Il colesterolo ha ruoli nelle membrane ed è precursore di altre molecole, tra cui ormoni steroidei e acidi biliari. La sua biosintesi comprende una tappa regolata catalizzata dall’HMG-CoA reduttasi. Nel plasma, le lipoproteine presentano una superficie compatibile con l’acqua intorno a un carico idrofobo. Intestino e fegato assemblano particelle diverse per distribuire lipidi di origine e destinazione differenti.",
    "points": [
      "La via del mevalonato collega HMG-CoA reduttasi e biosintesi del colesterolo.",
      "I chilomicroni sono assemblati nell’intestino; le VLDL esportano soprattutto triacilgliceroli epatici.",
      "Distingui funzione del colesterolo, biosintesi e trasporto: sono processi collegati ma diversi."
    ],
    "oral": "Perché il plasma richiede lipoproteine per trasportare molti lipidi?",
    "hint": "Confronta nucleo idrofobo e superficie compatibile con l’acqua.",
    "outline": "Spiega l’organizzazione delle particelle, il ruolo delle apolipoproteine e le differenze funzionali tra le principali classi.",
    "questions": [
      {
        "id": "l8-lipoproteine-1",
        "text": "L’HMG-CoA reduttasi partecipa alla:",
        "answer": "Biosintesi del colesterolo",
        "options": [
          "Biosintesi del colesterolo",
          "Glicogenolisi",
          "Sintesi dell’urea",
          "Idrolisi dei legami peptidici"
        ],
        "explanation": "Catalizza una tappa regolata della via del mevalonato."
      },
      {
        "id": "l8-lipoproteine-2",
        "text": "Quale associazione tra particella e origine del carico è corretta?",
        "answer": "Chilomicroni e lipidi alimentari",
        "options": [
          "Chilomicroni e lipidi alimentari",
          "VLDL e solo lipidi assorbiti nell’enterocita",
          "LDL e trasporto dell’ossigeno",
          "HDL e deposito del glicogeno"
        ],
        "explanation": "L’intestino assembla chilomicroni; il fegato esporta triacilgliceroli soprattutto con VLDL."
      },
      {
        "id": "l8-lipoproteine-3",
        "text": "Perché i lipidi vengono trasportati in lipoproteine nel plasma?",
        "answer": "La particella presenta una superficie compatibile con l’acqua",
        "options": [
          "La particella presenta una superficie compatibile con l’acqua",
          "Tutti i lipidi sono molto solubili in acqua",
          "Le lipoproteine eliminano ogni componente proteico",
          "I lipidi diventano legami peptidici"
        ],
        "explanation": "Una superficie con lipidi anfipatici e apolipoproteine permette il trasporto del nucleo idrofobo."
      },
      {
        "text": "La lipoproteina lipasi agisce principalmente su:",
        "answer": "Trigliceridi di chilomicroni e VLDL",
        "options": [
          "Trigliceridi di chilomicroni e VLDL",
          "DNA delle cellule epatiche",
          "Glicogeno muscolare",
          "Solo colesterolo libero nell’intestino"
        ],
        "explanation": "L’idrolisi dei trigliceridi circolanti rende disponibili acidi grassi ai tessuti.",
        "id": "l8-lipoproteine-4"
      },
      {
        "text": "Quale apolipoproteina caratterizza le LDL ed è ligando del loro recettore?",
        "answer": "ApoB-100",
        "options": [
          "ApoB-100",
          "ApoB-48",
          "ApoA-I come unico componente",
          "ApoC-II come unico componente"
        ],
        "explanation": "Il riconoscimento di ApoB-100 permette la captazione mediata dal recettore LDL.",
        "id": "l8-lipoproteine-5"
      },
      {
        "text": "LCAT favorisce nel plasma:",
        "answer": "Esterificazione del colesterolo associato alle HDL",
        "options": [
          "Esterificazione del colesterolo associato alle HDL",
          "Idrolisi del glicogeno epatico",
          "Sintesi di DNA nei chilomicroni",
          "Degradazione dei corpi chetonici"
        ],
        "explanation": "L’esterificazione favorisce la raccolta del colesterolo nel nucleo delle particelle HDL.",
        "id": "l8-lipoproteine-6"
      }
    ],
    "supplement": {
      "book": "cozzani",
      "chapter": 10,
      "pages": [
        198,
        202
      ],
      "pdfPage": 211
    }
  },
  {
    "id": "biosintesi-azoto",
    "title": "Amminoacidi essenziali e biosintesi dei nucleotidi",
    "chapter": 22,
    "sections": [
      "22.2",
      "22.4"
    ],
    "pages": [
      2829,
      2926
    ],
    "pdfPage": 2829,
    "sourceBook": "lehninger",
    "minutes": 20,
    "concept": "Gli scheletri carboniosi di molti amminoacidi derivano da intermedi del metabolismo centrale. L’azoto viene incorporato attraverso donatori come glutammato e glutammina. L’essere umano non possiede tutte le vie necessarie: gli amminoacidi essenziali devono arrivare dalla dieta. I nucleotidi possono essere prodotti de novo o recuperando basi già disponibili attraverso vie di salvataggio.",
    "points": [
      "Essenziale significa che la sintesi endogena non soddisfa il fabbisogno, non che gli altri amminoacidi siano inutili.",
      "Collega carbonio da glicolisi/Krebs/pentosi e donatori di azoto.",
      "Il recupero di basi e nucleosidi può ridurre il costo della sintesi de novo."
    ],
    "oral": "Come si collega il metabolismo dei macronutrienti alla sintesi di amminoacidi e nucleotidi?",
    "hint": "Segui separatamente precursori carboniosi, azoto ed energia.",
    "outline": "Il metabolismo centrale fornisce intermedi carboniosi e ribosio, mentre glutammato e glutammina trasferiscono azoto. Le sintesi richiedono energia e sono regolate; la dieta deve fornire ciò che l’organismo non sintetizza in quantità adeguata.",
    "questions": [
      {
        "id": "l8-biosintesi-azoto-1",
        "text": "Un amminoacido essenziale deve essere fornito dalla dieta perché:",
        "answer": "La sintesi endogena non soddisfa il fabbisogno",
        "options": [
          "La sintesi endogena non soddisfa il fabbisogno",
          "Non contiene un gruppo amminico",
          "È usato solo nel digiuno",
          "Non viene incorporato nelle proteine"
        ],
        "explanation": "La classificazione dipende dalla capacità biosintetica dell’organismo."
      },
      {
        "id": "l8-biosintesi-azoto-2",
        "text": "Molti scheletri carboniosi degli amminoacidi derivano da:",
        "answer": "Intermedi di glicolisi, Krebs e via dei pentosi",
        "options": [
          "Intermedi di glicolisi, Krebs e via dei pentosi",
          "Solo ormoni steroidei",
          "Solo urea già formata",
          "Esclusivamente ossigeno molecolare"
        ],
        "explanation": "Le vie biosintetiche si collegano al metabolismo centrale."
      },
      {
        "id": "l8-biosintesi-azoto-3",
        "text": "Una via di salvataggio dei nucleotidi utilizza:",
        "answer": "Basi o nucleosidi preesistenti",
        "options": [
          "Basi o nucleosidi preesistenti",
          "Solo acidi grassi a lunga catena",
          "Proteine intatte come DNA",
          "Solo carbonio della CO₂ atmosferica"
        ],
        "explanation": "Il recupero evita di ricostruire interamente la base attraverso la via de novo."
      },
      {
        "text": "Le purine e le pirimidine differiscono nella sintesi de novo perché:",
        "answer": "L’anello purinico si costruisce sul ribosio, quello pirimidinico viene costruito prima",
        "options": [
          "L’anello purinico si costruisce sul ribosio, quello pirimidinico viene costruito prima",
          "Entrambi gli anelli derivano direttamente da glucosio libero",
          "Le purine non contengono azoto",
          "Le pirimidine si formano solo degradando DNA"
        ],
        "explanation": "L’ordine di costruzione dell’anello e del legame al ribosio distingue le due vie.",
        "id": "l8-biosintesi-azoto-4"
      },
      {
        "text": "La glutammina nella sintesi dei nucleotidi funge spesso da:",
        "answer": "Donatore di azoto ammidico",
        "options": [
          "Donatore di azoto ammidico",
          "Donatore esclusivo di gruppi fosfato",
          "Unico zucchero di tutti i nucleotidi",
          "Enzima che copia il DNA"
        ],
        "explanation": "Le amidotransferasi trasferiscono azoto dalla glutammina a intermedi biosintetici.",
        "id": "l8-biosintesi-azoto-5"
      },
      {
        "text": "La ribonucleotide reduttasi permette di:",
        "answer": "Formare deossiribonucleotidi da ribonucleotidi",
        "options": [
          "Formare deossiribonucleotidi da ribonucleotidi",
          "Tradurre mRNA in proteina",
          "Trasferire acidi grassi alla carnitina",
          "Produrre urea dal glutammato"
        ],
        "explanation": "La riduzione dello zucchero fornisce precursori per la sintesi del DNA.",
        "id": "l8-biosintesi-azoto-6"
      }
    ]
  },
  {
    "id": "ormoni",
    "title": "Metabolismo integrato: pasto e digiuno",
    "chapter": 23,
    "sections": [
      "23.1",
      "23.2",
      "23.3"
    ],
    "pages": [
      2941,
      3029
    ],
    "pdfPage": 2941,
    "sourceBook": "lehninger",
    "minutes": 20,
    "concept": "Lo stato alimentato e il digiuno richiedono distribuzioni diverse dei combustibili. Il fegato elabora e distribuisce nutrienti; muscolo, tessuto adiposo e altri organi hanno funzioni specifiche. Insulina, glucagone e altri segnali coordinano i flussi senza rendere identici tutti i tessuti. La glicemia è sostenuta prima anche dalle riserve epatiche e poi dalla gluconeogenesi; la mobilizzazione dei lipidi e la chetogenesi contribuiscono all’adattamento.",
    "points": [
      "Il fegato svolge un ruolo centrale nell’omeostasi dei substrati.",
      "L’insulina favorisce processi di utilizzo e deposito dei nutrienti.",
      "Nel digiuno il mantenimento della glicemia coinvolge glicogenolisi e gluconeogenesi epatiche."
    ],
    "oral": "Confronta il metabolismo dopo un pasto e durante il digiuno.",
    "hint": "Organizza la risposta per fegato, muscolo e tessuto adiposo.",
    "outline": "Descrivi segnali ormonali e flussi di substrati, distinguendo i compiti dei tessuti e collegandoli al mantenimento della glicemia.",
    "questions": [
      {
        "id": "l8-ormoni-1",
        "text": "Dopo un pasto, l’insulina favorisce tipicamente:",
        "answer": "Utilizzo e deposito dei nutrienti",
        "options": [
          "Utilizzo e deposito dei nutrienti",
          "Attivazione indiscriminata della lipolisi adiposa",
          "Produzione obbligatoria di glucosio nel fegato",
          "Assenza di scambi fra tessuti"
        ],
        "explanation": "L’insulina coordina processi di utilizzazione e accumulo in relazione allo stato alimentato."
      },
      {
        "id": "l8-ormoni-2",
        "text": "Il glucagone sostiene la glicemia principalmente attraverso:",
        "answer": "Azioni sul metabolismo epatico",
        "options": [
          "Azioni sul metabolismo epatico",
          "Attivazione diretta del glicogeno in ogni muscolo scheletrico",
          "Produzione di insulina nei globuli rossi",
          "Trasporto di glucosio da parte dell’emoglobina"
        ],
        "explanation": "Il fegato risponde favorendo disponibilità di glucosio; i tessuti non rispondono tutti allo stesso modo."
      },
      {
        "id": "l8-ormoni-3",
        "text": "Quale collegamento descrive il ciclo di Cori?",
        "answer": "Lattato dai tessuti al fegato, glucosio dal fegato ai tessuti",
        "options": [
          "Lattato dai tessuti al fegato, glucosio dal fegato ai tessuti",
          "Acetil-CoA dal muscolo al DNA",
          "Urea dal fegato al glicogeno",
          "NADPH dall’intestino all’emoglobina"
        ],
        "explanation": "Il fegato può utilizzare lattato come precursore gluconeogenetico, sostenendo il riciclo del carbonio."
      },
      {
        "text": "In muscolo e tessuto adiposo, l’insulina può aumentare la captazione di glucosio tramite:",
        "answer": "Traslocazione di GLUT4 alla membrana",
        "options": [
          "Traslocazione di GLUT4 alla membrana",
          "Eliminazione di tutti i trasportatori",
          "Conversione di GLUT4 in un canale per ossigeno",
          "Sostituzione del glucosio con urea"
        ],
        "explanation": "Il reclutamento di GLUT4 aumenta la capacità di trasporto di glucosio.",
        "id": "l8-ormoni-4"
      },
      {
        "text": "Nel digiuno, la mobilizzazione dei trigliceridi adiposi rende disponibili soprattutto:",
        "answer": "Acidi grassi e glicerolo",
        "options": [
          "Acidi grassi e glicerolo",
          "Solo glucosio libero",
          "Solo amminoacidi",
          "Solo ribosio-5-fosfato"
        ],
        "explanation": "Gli acidi grassi sostengono l’ossidazione nei tessuti e il glicerolo può contribuire alla gluconeogenesi.",
        "id": "l8-ormoni-5"
      },
      {
        "text": "Perché l’eritrocita maturo dipende dalla glicolisi?",
        "answer": "Non possiede mitocondri",
        "options": [
          "Non possiede mitocondri",
          "Possiede solo cloroplasti",
          "Non contiene enzimi",
          "Usa esclusivamente corpi chetonici"
        ],
        "explanation": "Senza mitocondri non può ossidare combustibili mediante ciclo di Krebs e fosforilazione ossidativa.",
        "id": "l8-ormoni-6"
      }
    ],
    "supplement": {
      "book": "cozzani",
      "chapter": 9,
      "pages": [
        163,
        174
      ],
      "pdfPage": 176
    }
  },
  {
    "id": "cromatina",
    "title": "Geni, cromosomi e organizzazione della cromatina",
    "chapter": 24,
    "pages": [
      3094,
      3178
    ],
    "pdfPage": 3094,
    "sections": [
      "24.1",
      "24.2",
      "24.3"
    ],
    "sourceBook": "lehninger",
    "minutes": 15,
    "concept": "Il DNA cromosomico deve essere compattato e restare accessibile. Nei nucleosomi il DNA è avvolto attorno a proteine istoniche. Il superavvolgimento e la sua regolazione influenzano accessibilità, replicazione e trascrizione. I cromosomi comprendono sequenze strutturali e regolatrici oltre ai geni codificanti.",
    "points": [
      "Distingui sequenza del DNA e sua organizzazione tridimensionale.",
      "Le topoisomerasi modificano la topologia del DNA.",
      "Compattazione e accessibilità devono essere coordinate."
    ],
    "oral": "Perché compattare il DNA non significa renderlo permanentemente inattivo?",
    "hint": "Distingui sequenza del DNA e sua organizzazione tridimensionale.",
    "outline": "Spiega nucleosomi, rimodellamento e topologia. L’organizzazione protegge e compatta il DNA ma deve consentire accesso regolato ai processi cellulari.",
    "questions": [
      {
        "text": "Un nucleosoma comprende principalmente:",
        "answer": "DNA avvolto attorno a un ottamero di istoni",
        "options": [
          "DNA avvolto attorno a un ottamero di istoni",
          "RNA legato a una lipasi",
          "Solo un cromosoma privo di proteine",
          "ATP e glicogeno"
        ],
        "explanation": "Il nucleosoma è un’unità fondamentale della cromatina eucariotica.",
        "id": "l8-cromatina-1"
      },
      {
        "text": "Le topoisomerasi modificano:",
        "answer": "La topologia del DNA mediante rotture e richiusure controllate",
        "options": [
          "La topologia del DNA mediante rotture e richiusure controllate",
          "La sequenza di ogni gene in modo obbligatorio",
          "Tutti i codoni in amminoacidi",
          "Il DNA in trigliceridi"
        ],
        "explanation": "L’azione controllata sui filamenti risolve tensione torsionale e intrecci.",
        "id": "l8-cromatina-2"
      },
      {
        "text": "Che cosa indica il superavvolgimento?",
        "answer": "L’avvolgimento dell’asse della doppia elica su se stesso",
        "options": [
          "L’avvolgimento dell’asse della doppia elica su se stesso",
          "La traduzione simultanea di RNA",
          "L’unione di amminoacidi",
          "L’assenza di struttura secondaria"
        ],
        "explanation": "La topologia è una proprietà aggiuntiva rispetto alla normale doppia elica.",
        "id": "l8-cromatina-3"
      },
      {
        "text": "Il centromero è importante per:",
        "answer": "La corretta segregazione dei cromosomi",
        "options": [
          "La corretta segregazione dei cromosomi",
          "La digestione dei lipidi",
          "La sintesi di ribosio",
          "La degradazione di ATP extracellulare"
        ],
        "explanation": "L’organizzazione centromerica permette l’interazione con il sistema di segregazione.",
        "id": "l8-cromatina-4"
      },
      {
        "text": "I telomeri si trovano:",
        "answer": "Alle estremità dei cromosomi lineari",
        "options": [
          "Alle estremità dei cromosomi lineari",
          "Solo nei ribosomi",
          "Al centro di ogni plasmide circolare",
          "Nelle catene degli acidi grassi"
        ],
        "explanation": "Le sequenze e proteine telomeriche proteggono le estremità cromosomiche.",
        "id": "l8-cromatina-5"
      },
      {
        "text": "Un cambiamento nella cromatina può influenzare:",
        "answer": "L’accessibilità del DNA alla trascrizione",
        "options": [
          "L’accessibilità del DNA alla trascrizione",
          "Solo la massa del glucosio",
          "Solo il numero di atomi delle basi",
          "Sempre la sequenza di tutti i geni"
        ],
        "explanation": "Regolazione dell’accesso e modificazione della sequenza sono processi distinti.",
        "id": "l8-cromatina-6"
      }
    ]
  },
  {
    "id": "replicazione",
    "title": "Replicazione, riparazione e ricombinazione del DNA",
    "chapter": 25,
    "pages": [
      3196,
      3325
    ],
    "pdfPage": 3196,
    "sections": [
      "25.1",
      "25.2",
      "25.3"
    ],
    "sourceBook": "lehninger",
    "minutes": 15,
    "concept": "La replicazione copia il DNA conservando un filamento parentale in ogni doppia elica figlia. La DNA polimerasi sintetizza in direzione 5′→3′ e richiede un primer. Riparazione e ricombinazione contribuiscono all’integrità e al riassetto dell’informazione genetica, con meccanismi differenti.",
    "points": [
      "La replicazione è semiconservativa.",
      "Filamento guida e filamento ritardato dipendono dall’antiparallelismo.",
      "Proofreading e riparazione dei mismatch sono livelli diversi di controllo."
    ],
    "oral": "Perché un filamento viene copiato in frammenti?",
    "hint": "La replicazione è semiconservativa.",
    "outline": "Collega direzione della sintesi, antiparallelismo e movimento della forcella. I frammenti di Okazaki vengono maturati e uniti dopo la rimozione dei primer.",
    "questions": [
      {
        "text": "La replicazione semiconservativa produce doppie eliche contenenti:",
        "answer": "Un filamento parentale e uno nuovo",
        "options": [
          "Un filamento parentale e uno nuovo",
          "Due filamenti entrambi parentali in ogni molecola",
          "Solo frammenti di RNA",
          "Sempre due filamenti nuovi in ogni molecola"
        ],
        "explanation": "Ogni filamento parentale serve da stampo per un nuovo filamento.",
        "id": "l8-replicazione-1"
      },
      {
        "text": "La DNA polimerasi allunga un filamento in direzione:",
        "answer": "5′→3′",
        "options": [
          "5′→3′",
          "3′→5′",
          "N-terminale→C-terminale",
          "C-terminale→N-terminale"
        ],
        "explanation": "I nucleotidi vengono aggiunti al gruppo 3′-OH della catena crescente.",
        "id": "l8-replicazione-2"
      },
      {
        "text": "I frammenti di Okazaki appartengono a:",
        "answer": "Il filamento ritardato",
        "options": [
          "Il filamento ritardato",
          "La catena polipeptidica",
          "Il ribosoma",
          "La membrana nucleare"
        ],
        "explanation": "La sintesi discontinua permette di copiare il filamento orientato oppostamente al movimento della forcella.",
        "id": "l8-replicazione-3"
      },
      {
        "text": "La DNA ligasi serve a:",
        "answer": "Sigillare interruzioni nello scheletro fosfodiestere",
        "options": [
          "Sigillare interruzioni nello scheletro fosfodiestere",
          "Separare sempre tutte le basi",
          "Tradurre codoni",
          "Eliminare ogni proteina istonica"
        ],
        "explanation": "La ligasi unisce tratti di DNA adiacenti mediante legami fosfodiestere.",
        "id": "l8-replicazione-4"
      },
      {
        "text": "Il proofreading della DNA polimerasi consiste in:",
        "answer": "Rimozione di nucleotidi incorporati erroneamente",
        "options": [
          "Rimozione di nucleotidi incorporati erroneamente",
          "Duplicazione dei ribosomi",
          "Sintesi di lipidi",
          "Aggiunta obbligatoria di mutazioni"
        ],
        "explanation": "L’attività esonucleasica di correzione aumenta la fedeltà della replicazione.",
        "id": "l8-replicazione-5"
      },
      {
        "text": "La ricombinazione omologa utilizza:",
        "answer": "Sequenze omologhe per scambio o riparazione",
        "options": [
          "Sequenze omologhe per scambio o riparazione",
          "Solo proteine senza DNA",
          "Solo molecole di glucosio",
          "Basi prive di zucchero come unico stampo"
        ],
        "explanation": "L’omologia guida l’allineamento necessario alla ricombinazione.",
        "id": "l8-replicazione-6"
      }
    ]
  },
  {
    "id": "rna",
    "title": "Trascrizione e maturazione dell’RNA",
    "chapter": 26,
    "pages": [
      3342,
      3467
    ],
    "pdfPage": 3342,
    "sections": [
      "26.1",
      "26.2",
      "26.3",
      "26.4"
    ],
    "sourceBook": "lehninger",
    "minutes": 15,
    "concept": "La trascrizione produce RNA a partire da uno stampo di DNA. Negli eucarioti il trascritto primario può essere modificato con cap, splicing e poliadenilazione prima di essere utilizzato. Non tutti gli RNA codificano proteine: alcuni hanno ruoli strutturali, regolatori o catalitici.",
    "points": [
      "Distingui trascrizione e replicazione.",
      "Lo splicing rimuove introni e unisce esoni.",
      "Un ribozima è un RNA con attività catalitica."
    ],
    "oral": "Perché un mRNA maturo può differire dal trascritto primario?",
    "hint": "Distingui trascrizione e replicazione.",
    "outline": "Descrivi maturazione, splicing e modificazioni terminali. Lo splicing alternativo può generare prodotti diversi da uno stesso gene.",
    "questions": [
      {
        "text": "La RNA polimerasi durante la trascrizione usa come stampo:",
        "answer": "Un filamento di DNA",
        "options": [
          "Un filamento di DNA",
          "Una proteina già ripiegata",
          "Un fosfolipide",
          "Un amminoacido attivato"
        ],
        "explanation": "La sequenza dello stampo determina la sequenza complementare dell’RNA.",
        "id": "l8-rna-1"
      },
      {
        "text": "Lo splicing di un pre-mRNA rimuove:",
        "answer": "Introni",
        "options": [
          "Introni",
          "Tutti gli esoni",
          "Tutti i ribonucleotidi",
          "Tutti i gruppi fosfato"
        ],
        "explanation": "Gli esoni vengono uniti formando una sequenza continua nel prodotto maturo.",
        "id": "l8-rna-2"
      },
      {
        "text": "Lo splicing alternativo può produrre:",
        "answer": "Trascritti diversi a partire da un gene",
        "options": [
          "Trascritti diversi a partire da un gene",
          "Sempre lo stesso trascritto senza variazioni",
          "Solo copie identiche del DNA",
          "Acidi grassi con più carboni"
        ],
        "explanation": "La scelta di siti di splicing permette combinazioni diverse di sequenze esoniche.",
        "id": "l8-rna-3"
      },
      {
        "text": "Il cap dell’mRNA eucariotico si trova:",
        "answer": "All’estremità 5′",
        "options": [
          "All’estremità 5′",
          "Solo nel centro di un introne",
          "Sul gruppo carbossilico terminale",
          "All’estremità di un fosfolipide"
        ],
        "explanation": "Il cap contribuisce a protezione, processamento e riconoscimento nella traduzione.",
        "id": "l8-rna-4"
      },
      {
        "text": "Un ribozima è:",
        "answer": "Un RNA con attività catalitica",
        "options": [
          "Un RNA con attività catalitica",
          "Una proteina che trasporta ossigeno",
          "Un lipide di riserva",
          "Un enzima costituito solo da glucosio"
        ],
        "explanation": "La catalisi non è una proprietà esclusiva delle proteine.",
        "id": "l8-rna-5"
      },
      {
        "text": "La trascrittasi inversa sintetizza:",
        "answer": "DNA usando RNA come stampo",
        "options": [
          "DNA usando RNA come stampo",
          "RNA usando proteine come stampo",
          "Proteine usando DNA direttamente",
          "Glucosio usando DNA"
        ],
        "explanation": "La trascrizione inversa trasferisce informazione da RNA a DNA.",
        "id": "l8-rna-6"
      }
    ]
  },
  {
    "id": "traduzione",
    "title": "Codice genetico, traduzione e destino delle proteine",
    "chapter": 27,
    "pages": [
      3484,
      3622
    ],
    "pdfPage": 3484,
    "sections": [
      "27.1",
      "27.2",
      "27.3"
    ],
    "sourceBook": "lehninger",
    "minutes": 15,
    "concept": "La traduzione decodifica l’mRNA in una catena polipeptidica. I tRNA collegano codoni e amminoacidi, mentre le amminoacil-tRNA sintetasi garantiscono il corretto caricamento. Le proteine appena sintetizzate possono essere modificate, indirizzate a compartimenti e degradate quando necessario.",
    "points": [
      "Distingui codone sull’mRNA e anticodone sul tRNA.",
      "Il caricamento dei tRNA richiede specificità ed energia.",
      "Segnali di indirizzamento guidano molte proteine alla loro destinazione."
    ],
    "oral": "Come si assicura la corrispondenza fra codone e amminoacido?",
    "hint": "Distingui codone sull’mRNA e anticodone sul tRNA.",
    "outline": "Collega appaiamento codone-anticodone e riconoscimento da parte delle amminoacil-tRNA sintetasi. Il ribosoma catalizza la formazione del legame peptidico.",
    "questions": [
      {
        "text": "Un codone è formato da:",
        "answer": "Tre nucleotidi dell’mRNA",
        "options": [
          "Tre nucleotidi dell’mRNA",
          "Tre amminoacidi",
          "Due fosfolipidi",
          "Un singolo gruppo fosfato"
        ],
        "explanation": "Il codice genetico associa triplette a specifici amminoacidi o a segnali di arresto.",
        "id": "l8-traduzione-1"
      },
      {
        "text": "Che cosa carica un amminoacido sul corretto tRNA?",
        "answer": "Un’amminoacil-tRNA sintetasi",
        "options": [
          "Un’amminoacil-tRNA sintetasi",
          "La DNA ligasi",
          "La glicogeno sintasi",
          "Una lipasi pancreatica"
        ],
        "explanation": "La sintetasi riconosce amminoacido e tRNA e usa ATP per il caricamento.",
        "id": "l8-traduzione-2"
      },
      {
        "text": "La catena polipeptidica cresce generalmente:",
        "answer": "Da N-terminale a C-terminale",
        "options": [
          "Da N-terminale a C-terminale",
          "Da C-terminale a N-terminale",
          "Da 3′ a 5′ come una catena di DNA",
          "Da entrambi i terminali senza ordine"
        ],
        "explanation": "Il nuovo residuo si aggiunge all’estremità carbossilica della catena.",
        "id": "l8-traduzione-3"
      },
      {
        "text": "Che cosa riconosce un codone di stop nel ribosoma?",
        "answer": "Un fattore di rilascio",
        "options": [
          "Un fattore di rilascio",
          "Un tRNA carico di glicogeno",
          "Una DNA polimerasi",
          "Il coenzima A"
        ],
        "explanation": "I fattori di rilascio promuovono la liberazione della catena completata.",
        "id": "l8-traduzione-4"
      },
      {
        "text": "Un peptide segnale può servire a:",
        "answer": "Indirizzare una proteina a una destinazione cellulare",
        "options": [
          "Indirizzare una proteina a una destinazione cellulare",
          "Convertire ogni proteina in glucosio",
          "Eliminare tutti i codoni",
          "Replicare un cromosoma"
        ],
        "explanation": "Informazioni nella sequenza guidano il trasporto verso specifici compartimenti.",
        "id": "l8-traduzione-5"
      },
      {
        "text": "Il sistema ubiquitina-proteasoma contribuisce a:",
        "answer": "Degradazione selettiva di proteine",
        "options": [
          "Degradazione selettiva di proteine",
          "Sintesi diretta di DNA",
          "Digestione dell’amido nel lume",
          "Fissazione fotosintetica della CO₂"
        ],
        "explanation": "La marcatura con ubiquitina può indirizzare proteine alla degradazione proteasomiale.",
        "id": "l8-traduzione-6"
      }
    ]
  },
  {
    "id": "espressione",
    "title": "Regolazione dell’espressione genica",
    "chapter": 28,
    "pages": [
      3637,
      3759
    ],
    "pdfPage": 3637,
    "sections": [
      "28.1",
      "28.2",
      "28.3"
    ],
    "sourceBook": "lehninger",
    "minutes": 15,
    "concept": "Le cellule regolano quali geni esprimere, quando e in quale quantità. Attivatori, repressori, organizzazione della cromatina e RNA regolatori agiscono a livelli diversi. La regolazione permette di adattare il metabolismo alle condizioni e contribuisce alle differenze fra tipi cellulari.",
    "points": [
      "Distingui regolazione trascrizionale e post-trascrizionale.",
      "Un operone coordina l’espressione di più geni batterici.",
      "La quantità di mRNA non determina da sola l’attività finale di un enzima."
    ],
    "oral": "Perché due tipi cellulari con lo stesso genoma possono svolgere funzioni diverse?",
    "hint": "Distingui regolazione trascrizionale e post-trascrizionale.",
    "outline": "Considera accessibilità della cromatina, fattori di trascrizione, maturazione e stabilità degli RNA, traduzione e modificazioni delle proteine.",
    "questions": [
      {
        "text": "Un repressore trascrizionale può:",
        "answer": "Ridurre la trascrizione legandosi a una sequenza regolatrice",
        "options": [
          "Ridurre la trascrizione legandosi a una sequenza regolatrice",
          "Tradurre direttamente ogni mRNA",
          "Duplicare la membrana",
          "Sostituire tutti i nucleotidi"
        ],
        "explanation": "Il legame di un repressore può ostacolare l’inizio della trascrizione.",
        "id": "l8-espressione-1"
      },
      {
        "text": "Un operone batterico permette spesso:",
        "answer": "Controllo coordinato di più geni",
        "options": [
          "Controllo coordinato di più geni",
          "Sintesi di un unico amminoacido senza RNA",
          "Separazione obbligatoria di tutti i promotori",
          "Eliminazione della regolazione"
        ],
        "explanation": "Geni funzionalmente collegati possono essere trascritti sotto un controllo comune.",
        "id": "l8-espressione-2"
      },
      {
        "text": "Nell’operone lac, l’allolattosio agisce come:",
        "answer": "Induttore che riduce il legame del repressore all’operatore",
        "options": [
          "Induttore che riduce il legame del repressore all’operatore",
          "Donatore di elettroni alla catena respiratoria",
          "Enzima che copia DNA",
          "Componente del ribosoma"
        ],
        "explanation": "La presenza di derivati del lattosio segnala disponibilità del substrato per la via.",
        "id": "l8-espressione-3"
      },
      {
        "text": "Quale processo è post-trascrizionale?",
        "answer": "Controllo della stabilità di un mRNA",
        "options": [
          "Controllo della stabilità di un mRNA",
          "Avvio della sintesi di RNA al promotore",
          "Legame iniziale della RNA polimerasi al DNA",
          "Duplicazione del cromosoma"
        ],
        "explanation": "Dopo la sintesi, durata e processamento dell’RNA influenzano quanto prodotto sarà disponibile.",
        "id": "l8-espressione-4"
      },
      {
        "text": "I microRNA possono regolare l’espressione mediante:",
        "answer": "Interazione con RNA bersaglio e riduzione della loro espressione",
        "options": [
          "Interazione con RNA bersaglio e riduzione della loro espressione",
          "Sintesi di tutti i cromosomi",
          "Idrolisi dei triacilgliceroli",
          "Fissazione diretta dell’azoto"
        ],
        "explanation": "L’interazione può favorire repressione della traduzione e degradazione degli RNA bersaglio.",
        "id": "l8-espressione-5"
      },
      {
        "text": "Più mRNA significa necessariamente più attività enzimatica?",
        "answer": "No, contano anche traduzione, degradazione e regolazione della proteina",
        "options": [
          "No, contano anche traduzione, degradazione e regolazione della proteina",
          "Sì, senza alcuna eccezione",
          "Sì, indipendentemente dai substrati",
          "Solo se l’mRNA contiene uracile"
        ],
        "explanation": "Espressione, quantità di enzima e sua attività sono livelli collegati ma distinti.",
        "id": "l8-espressione-6"
      }
    ]
  },
  {
    "id": "digestione",
    "title": "Enzimi della digestione",
    "chapter": 3,
    "pages": [
      43,
      50
    ],
    "pdfPage": 56,
    "minutes": 15,
    "concept": "La digestione enzimatica scinde i macronutrienti in componenti più piccoli. Enzimi diversi riconoscono legami e substrati diversi: amilasi per l’amido, proteasi per le proteine e lipasi per i lipidi.",
    "points": [
      "La specificità dell’enzima determina quali legami può idrolizzare.",
      "Endopeptidasi ed esopeptidasi agiscono in posizioni diverse della catena.",
      "Digestione e assorbimento sono processi distinti."
    ],
    "oral": "Confronta la digestione di amido, proteine e trigliceridi.",
    "hint": "Associa a ogni classe di nutrienti il tipo di legame da rompere.",
    "outline": "Descrivi enzimi e prodotti principali, evitando di confondere la degradazione nel lume con il passaggio attraverso l’epitelio intestinale.",
    "questions": [
      {
        "id": "digestione-1",
        "text": "Quale enzima agisce sui legami interni delle proteine?",
        "answer": "Un’endopeptidasi",
        "options": [
          "Un’endopeptidasi",
          "Un’esopeptidasi",
          "Un’alfa-amilasi",
          "Una lipasi"
        ],
        "explanation": "Le endopeptidasi idrolizzano legami peptidici interni alla catena."
      },
      {
        "id": "digestione-2",
        "text": "Quale classe di enzimi idrolizza i trigliceridi?",
        "answer": "Le lipasi",
        "options": [
          "Le lipasi",
          "Le proteasi",
          "Le amilasi",
          "Le disaccaridasi"
        ],
        "explanation": "Le lipasi idrolizzano legami estere dei lipidi."
      },
      {
        "id": "digestione-3",
        "text": "L’assorbimento indica:",
        "answer": "Il passaggio di sostanze attraverso l’epitelio intestinale",
        "options": [
          "Il passaggio di sostanze attraverso l’epitelio intestinale",
          "La sola idrolisi dei legami dell’amido",
          "L’emulsione dei grassi nel lume",
          "La sola attivazione degli zimogeni"
        ],
        "explanation": "La digestione prepara componenti assorbibili; l’assorbimento ne permette il passaggio attraverso la barriera intestinale."
      },
      {
        "text": "L’alfa-amilasi idrolizza soprattutto:",
        "answer": "Legami alfa(1→4) interni nell’amido",
        "options": [
          "Legami alfa(1→4) interni nell’amido",
          "Legami beta(1→4) della cellulosa",
          "Solo legami peptidici",
          "Solo legami alfa(1→6) delle ramificazioni"
        ],
        "explanation": "La digestione delle ramificazioni richiede anche attività dell’orletto a spazzola.",
        "id": "cd-digestione-4"
      },
      {
        "text": "La lattasi idrolizza lattosio in:",
        "answer": "Glucosio e galattosio",
        "options": [
          "Glucosio e galattosio",
          "Glucosio e fruttosio",
          "Due molecole di glucosio",
          "Due molecole di fruttosio"
        ],
        "explanation": "Lattosio e saccarosio differiscono per i monosaccaridi costituenti.",
        "id": "cd-digestione-5"
      },
      {
        "text": "Gli zimogeni digestivi sono:",
        "answer": "Precursori enzimatici inattivi attivati in condizioni appropriate",
        "options": [
          "Precursori enzimatici inattivi attivati in condizioni appropriate",
          "Enzimi privi di qualsiasi funzione",
          "Prodotti finali della digestione dell’amido",
          "Trasportatori di colesterolo"
        ],
        "explanation": "L’attivazione controllata limita l’azione proteolitica nei tessuti che producono gli enzimi.",
        "id": "cd-digestione-6"
      }
    ],
    "sourceBook": "cozzani",
    "sections": []
  },
  {
    "id": "assorbimento",
    "title": "Assorbimento e trasporto dei nutrienti",
    "chapter": 8,
    "pages": [
      137,
      155
    ],
    "pdfPage": 150,
    "minutes": 18,
    "concept": "Gli enterociti assorbono i prodotti della digestione attraverso sistemi specifici. I diversi nutrienti seguono percorsi diversi: i lipidi alimentari possono essere assemblati in chilomicroni prima di raggiungere il circolo.",
    "points": [
      "Distingui membrana apicale e basolaterale dell’enterocita.",
      "La bile favorisce emulsione e solubilizzazione dei lipidi.",
      "I chilomicroni trasportano lipidi di origine alimentare."
    ],
    "oral": "Perché i lipidi richiedono un percorso diverso da molti zuccheri?",
    "hint": "Pensa alla loro solubilità in acqua.",
    "outline": "Collega idrofobicità, azione dei sali biliari, assorbimento, riassemblaggio e trasporto tramite chilomicroni.",
    "questions": [
      {
        "id": "assorbimento-1",
        "text": "Quale cellula è centrale nell’assorbimento intestinale?",
        "answer": "L’enterocita",
        "options": [
          "L’enterocita",
          "La cellula parietale gastrica",
          "La cellula acinare pancreatica",
          "L’epatocita"
        ],
        "explanation": "Gli enterociti costituiscono l’epitelio assorbente dell’intestino tenue."
      },
      {
        "id": "assorbimento-2",
        "text": "Qual è un ruolo dei sali biliari?",
        "answer": "Favorire la solubilizzazione dei prodotti lipidici",
        "options": [
          "Favorire la solubilizzazione dei prodotti lipidici",
          "Idrolizzare direttamente tutti i trigliceridi",
          "Trasportare glucosio attraverso SGLT1",
          "Scindere i legami peptidici delle proteine"
        ],
        "explanation": "I sali biliari partecipano alla formazione di strutture che facilitano la digestione e l’assorbimento lipidico."
      },
      {
        "id": "assorbimento-3",
        "text": "I chilomicroni sono associati principalmente a:",
        "answer": "Trasporto dei lipidi alimentari",
        "options": [
          "Trasporto dei lipidi alimentari",
          "Trasporto soprattutto di lipidi sintetizzati dal fegato",
          "Rimozione del colesterolo tramite HDL",
          "Trasporto esclusivo di acidi grassi liberi su albumina"
        ],
        "explanation": "Gli enterociti assemblano i chilomicroni per trasportare lipidi assorbiti dall’alimentazione."
      },
      {
        "text": "Il cotrasporto apicale di glucosio con sodio dipende da:",
        "answer": "Il gradiente del sodio mantenuto dalla pompa basolaterale",
        "options": [
          "Il gradiente del sodio mantenuto dalla pompa basolaterale",
          "La sola diffusione libera del glucosio nel doppio strato",
          "Il gradiente del lattato nel nucleo",
          "La completa assenza di ATP nell’enterocita"
        ],
        "explanation": "Il trasporto secondario usa un gradiente sostenuto da trasporto attivo primario.",
        "id": "cd-assorbimento-4"
      },
      {
        "text": "La bile è prodotta da:",
        "answer": "Fegato",
        "options": [
          "Fegato",
          "Pancreas",
          "Villi intestinali",
          "Ghiandole salivari"
        ],
        "explanation": "La cistifellea raccoglie la bile; non è l’organo che la sintetizza.",
        "id": "cd-assorbimento-5"
      },
      {
        "text": "Dopo l’assemblaggio intestinale, i chilomicroni raggiungono inizialmente:",
        "answer": "Il sistema linfatico",
        "options": [
          "Il sistema linfatico",
          "Direttamente l’interno degli eritrociti",
          "Il lume gastrico",
          "Il nucleo degli enterociti"
        ],
        "explanation": "I chilomicroni entrano nei vasi linfatici prima di raggiungere la circolazione sanguigna.",
        "id": "cd-assorbimento-6"
      }
    ],
    "sourceBook": "cozzani",
    "sections": []
  },
  {
    "id": "fibra",
    "title": "Fibra e amido resistente",
    "chapter": 11,
    "pages": [
      209,
      214
    ],
    "pdfPage": 222,
    "minutes": 12,
    "concept": "Una parte dei carboidrati alimentari non viene digerita dagli enzimi umani nell’intestino tenue. Alcuni componenti possono essere fermentati dal microbiota nel colon.",
    "points": [
      "L’amido resistente sfugge alla digestione nel tenue.",
      "La lavorazione e la struttura fisica possono modificare la digeribilità.",
      "La fermentazione microbica è distinta dalla digestione enzimatica umana."
    ],
    "oral": "Distingui digestione dell’amido e fermentazione della fibra.",
    "hint": "Chiediti chi produce gli enzimi e dove avviene il processo.",
    "outline": "Confronta i processi nel tenue con il metabolismo microbico del colon e il destino dei prodotti di fermentazione.",
    "questions": [
      {
        "id": "fibra-1",
        "text": "L’amido resistente è definito dalla capacità di:",
        "answer": "Sfuggire alla digestione nell’intestino tenue",
        "options": [
          "Sfuggire alla digestione nell’intestino tenue",
          "Essere assorbito intatto dagli enterociti",
          "Essere digerito più rapidamente di ogni amido",
          "Essere costituito necessariamente da legami beta"
        ],
        "explanation": "La resistenza riguarda la digestione nel tenue; una parte può essere metabolizzata dal microbiota nel colon."
      },
      {
        "id": "fibra-2",
        "text": "La fermentazione di componenti della fibra è svolta principalmente da:",
        "answer": "Microrganismi intestinali",
        "options": [
          "Microrganismi intestinali",
          "Amilasi salivare nel colon",
          "Proteasi pancreatiche",
          "Sali biliari"
        ],
        "explanation": "Il microbiota può metabolizzare componenti che sfuggono alla digestione umana."
      },
      {
        "id": "fibra-3",
        "text": "Che cosa può influenzare la digeribilità dell’amido?",
        "answer": "La struttura fisica e il trattamento dell’alimento",
        "options": [
          "La struttura fisica e il trattamento dell’alimento",
          "Solo il numero totale di calorie",
          "Solo la concentrazione di sodio",
          "Solo il contenuto di colesterolo"
        ],
        "explanation": "Cottura, raffreddamento e organizzazione dei granuli possono modificare l’accessibilità agli enzimi."
      },
      {
        "text": "La gelatinizzazione dell’amido durante la cottura può:",
        "answer": "Aumentare l’accessibilità alle amilasi",
        "options": [
          "Aumentare l’accessibilità alle amilasi",
          "Convertire tutti i legami alfa in beta",
          "Eliminare tutti i residui di glucosio",
          "Rendere ogni amido sempre indigeribile"
        ],
        "explanation": "Idratazione e disorganizzazione dei granuli facilitano generalmente l’attacco enzimatico.",
        "id": "cd-fibra-4"
      },
      {
        "text": "Il raffreddamento dell’amido cotto può favorire:",
        "answer": "Riorganizzazione delle catene e formazione di amido retrogradato",
        "options": [
          "Riorganizzazione delle catene e formazione di amido retrogradato",
          "Sintesi di proteine dall’amido",
          "Eliminazione di ogni carboidrato",
          "Trasformazione diretta in glicogeno umano"
        ],
        "explanation": "La riorganizzazione fisica può ridurre l’accessibilità enzimatica di una quota dell’amido.",
        "id": "cd-fibra-5"
      },
      {
        "text": "L’indice glicemico confronta alimenti considerando:",
        "answer": "La risposta glicemica a quantità comparabili di carboidrati disponibili",
        "options": [
          "La risposta glicemica a quantità comparabili di carboidrati disponibili",
          "Solo il peso totale dell’alimento",
          "Solo il suo contenuto di proteine",
          "Solo il numero di vitamine"
        ],
        "explanation": "La risposta viene confrontata con uno standard; l’indice non coincide con la quantità consumata nella porzione.",
        "id": "cd-fibra-6"
      }
    ],
    "sourceBook": "cozzani",
    "sections": []
  },
  {
    "id": "vitamine",
    "title": "Vitamine e funzione coenzimatica",
    "chapter": 13,
    "pages": [
      235,
      246
    ],
    "pdfPage": 248,
    "minutes": 15,
    "concept": "Molte vitamine partecipano al metabolismo attraverso forme coenzimatiche. La riboflavina è precursore di FMN e FAD; la niacina contribuisce alle forme di NAD e NADP.",
    "points": [
      "Collega la vitamina alla sua forma coenzimatica.",
      "Distingui micronutriente e combustibile energetico.",
      "Una vitamina può partecipare al metabolismo senza fornire direttamente energia come un macronutriente."
    ],
    "oral": "Come colleghi una vitamina a una reazione metabolica?",
    "hint": "Usa l’esempio della riboflavina e dei coenzimi flavinici.",
    "outline": "Procedi da vitamina a coenzima, identifica il tipo di trasferimento e collega il coenzima alle reazioni in cui partecipa.",
    "questions": [
      {
        "id": "vitamine-1",
        "text": "La riboflavina è precursore di:",
        "answer": "FMN e FAD",
        "options": [
          "FMN e FAD",
          "NAD e NADP",
          "Coenzima A",
          "Piridossal fosfato"
        ],
        "explanation": "La vitamina B2 entra nella struttura dei coenzimi flavinici FMN e FAD."
      },
      {
        "id": "vitamine-2",
        "text": "La niacina è collegata a:",
        "answer": "NAD e NADP",
        "options": [
          "NAD e NADP",
          "FMN e FAD",
          "Coenzima A",
          "Tiamina pirofosfato"
        ],
        "explanation": "La niacina contribuisce alle forme coenzimatiche dei nucleotidi piridinici."
      },
      {
        "id": "vitamine-3",
        "text": "Quale affermazione sulle vitamine è corretta?",
        "answer": "Possono sostenere il metabolismo senza essere combustibili energetici",
        "options": [
          "Possono sostenere il metabolismo senza essere combustibili energetici",
          "Sono tutte coenzimi attivi senza modificazioni",
          "Sono tutte liposolubili",
          "Sono tutte sintetizzate in quantità sufficienti dall’uomo"
        ],
        "explanation": "Le vitamine svolgono funzioni essenziali, incluse quelle coenzimatiche, senza essere macronutrienti energetici."
      },
      {
        "text": "La forma coenzimatica della vitamina B6 è soprattutto:",
        "answer": "Piridossal fosfato",
        "options": [
          "Piridossal fosfato",
          "NADPH",
          "Coenzima A",
          "Biotina"
        ],
        "explanation": "Il PLP partecipa a molte reazioni del metabolismo degli amminoacidi.",
        "id": "cd-vitamine-4"
      },
      {
        "text": "La biotina è particolarmente associata a:",
        "answer": "Reazioni di carbossilazione",
        "options": [
          "Reazioni di carbossilazione",
          "Trasporto di ossigeno nell’emoglobina",
          "Idrolisi dei legami peptidici come proteasi",
          "Copia del DNA come polimerasi"
        ],
        "explanation": "La biotina trasporta CO₂ attivata in enzimi carbossilasici.",
        "id": "cd-vitamine-5"
      },
      {
        "text": "Quale gruppo comprende vitamine liposolubili?",
        "answer": "A, D, E e K",
        "options": [
          "A, D, E e K",
          "B1, B2, B6 e C",
          "Solo tutte le vitamine B",
          "C e B12"
        ],
        "explanation": "La solubilità influenza assorbimento e distribuzione; non tutte le vitamine hanno lo stesso ruolo.",
        "id": "cd-vitamine-6"
      }
    ],
    "sourceBook": "cozzani",
    "sections": []
  }
];
export const coverage={
  "molecolari": {
    "label": "Basi molecolari dell’alimentazione e della nutrizione",
    "note": "Lehninger è il riferimento principale per basi molecolari, metabolismo e integrazione tra tessuti. Le unità sono una selezione guidata, non il programma completo: fabbisogni, valutazione nutrizionale, miochine/adipochine, nutrigenomica, sostenibilità ed evoluzione richiedono ulteriori contenuti e materiali del corso."
  },
  "alimenti": {
    "label": "Biochimica e biotecnologie degli alimenti",
    "note": "Lehninger fornisce le basi molecolari. Cozzani–Dainese integra gli aspetti nutrizionali. Trasformazioni alimentari, applicazioni industriali degli enzimi e tecniche analitiche richiedono ancora unità specifiche."
  }
};
