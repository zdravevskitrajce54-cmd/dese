// data/destinations.js
const destinations = {
  Azija: [],

  Evropa: [
    {
      name: "Spanija",
      img: "https://fastly.picsum.photos/id/835/1920/410.jpg?hmac=eVALUq6OCLB6VZMP-eyUXjlIiXQp8hS57wIXH-xrwPU",
      bigImg:
        "https://fastly.picsum.photos/id/835/1920/410.jpg?hmac=eVALUq6OCLB6VZMP-eyUXjlIiXQp8hS57wIXH-xrwPU",
      about: "Spanija is known for barcelona",
      planProgram: [
        {
          day: 1,
          title: "Arrival in N'Djamena",
          details: "Transfer to hotel, orientation, dinner.",
        },
        {
          day: 2,
          title: "Lake Chad Tour",
          details: "Boat excursion and visit local villages.",
        },
        // ... add more days
      ],
      departures: [
        { date: "2025-03-10", price: "1550€" },
        { date: "2025-05-22", price: "2350€" },
      ],
      included: [
        "Poseta na camp nou",
        "4-star hotel accommodation",
        "Breakfast and dinner",
        "Local guided tours",
      ],
      media: {
        images: [
          "/assets/img/destination/africa/chad-1.jpg",
          "/assets/img/destination/africa/chad-2.jpg",
        ],
        videos: [
          "https://www.youtube.com/watch?v=xxxx",
          "https://vimeo.com/xxxx",
        ],
      },
    },
  ],

  Afrika: [
    {
      name: "Mauricijus",
      img: "/assets/Images/Mauritius/main.jpg",
      bigImg: "/assets/Images/Mauritius/bigImg.jpg",
      slogan: "Dolazi u Mauricijus",
      about: `Ovaj opis vam nudi savršenu priliku za upoznavanje Mauricijusa, jednog od najlepših tropskih ostrva na svetu. Obilazićete glavni grad Port Luj sa njegovim znamenitostima, a posebno ćete se upoznati sa Boom plodom dugo zaštićene UNESCO-vom svetskom baštinom – kompleksom Le Caudan Waterfront koji pokazuje spoj tradicije i modernog.  

Posetićete lokalni bazar gde možete otkriti šarene suvenire i osjećaje pravi balans između života lokalnog stanovništva i turističke ponude. Upoznajte čuvenu crkvu Cap Malheureux i uživajte u panoramskom pogledu sa Citadele.  

Za opuštanje i relaksaciju, bićete na prelepim plažama poput Mont Choisy, Flic en Flac i Le Morne, gde ćete moći da se sunčate, plivate i istražujete kristalno čista tirkizna mora koje Mauricijus čini jednim od najlepših mesta na planeti.  

Ova destincaija je idealna za one koji traže rajske plaže, opuštanje i nezaboravne doživljaje, a sada je dostupna po nikad nižoj ceni – ne propustite priliku da otkrijete ovo ostrvo iz snova!`,
      planProgram: [
        {
          day: 1,
          title: "Okupljanje grupe i polazak",
          details: `Okupljanje grupe je zakazano dva i po sata pre polaska na aerodrom „Nikola Tesla“ u Beogradu. Polazak je u 11:05h ili 11:10h sa letom OS 722 prema Beču, gde ćete stići u 12:20h po lokalnom vremenu. Nakon presedanja, nastavak putovanja prema Mauricijusu sa letom OS 061, koji polazi u 19:20h ili 19:25h.  

Uključena je avio karta sa svim taksama na relaciji Beograd – Mauricijus, u ekonomskoj klasi, sa dozvoljenih 23 kg čekiranog i 8 kg ručnog prtljaga.  

Pripremite se za nezaboravno putovanje na ostrvo mira i prirodnih lepota!`,
        },
        {
          day: 2,
          title: "Dolazak na Mauricijus",
          details: `Po dolasku na Mauricijus u 08:40h po lokalnom vremenu, sledi transfer do smeštaja u Trou au Bichesu. Nakon smeštaja, iskoristite vreme za opuštanje na plaži i uživanje u predivnom zalasku sunca nad tirkiznim okeanom. Kompletnim danom ćete se prepustiti mirnom odmoru i prirodnim lepotama ovog rajskog ostrva. Noćenje u smještaju.`,
        },
        {
          day: 3,
          title: "Obilazak severne obale ostrova",
          details: `Naš dan započinje obilaskom severne obale Mauricijusa. Posetite glavni grad Port Louis, nekadašnji kulturni centar koji je vekovima bio inspiracija umetnicima, piscima i pesnicima. Sa citadele će se pružiti predivan pogled na ceo grad, a na tržištu možete kupiti suvenire i osvežiti se svežim voćem na lokalnom bazaru, osećajući atmosferu starog i novog dela grada.  

Nakon toga, posetićemo Cap Malheureux, severni rt poznat po prelepom pogledu na ostrvo Coin de Mire. Uživajte u panoramama i mirnom okruženju. Za kraj dana predviđamo odmor na prelepim plažama Pereybere i Mont Choisy, gde ćete se opustiti uz kupanje, pesak i tirkiznu vodu, idealno za uživanje i relaksaciju.  

Vraćate se u smeštaj puni utisaka i lepih osećaja, spremni za nastavak čarobnog odmora na Mauricijusu.`,
        },
        {
          day: 4,
          title:
            "Fakultativni izlet – odlazak na ostrvo Il-o-Serf (Île aux Cerfs)",
          details: `Ovaj dan je posvećen nezaboravnom upoznavanju ostrva Île aux Cerfs, jednog od najlepših i najegzotičnijih destinacija Mauricijusa. Plovićete kroz najdužu lagunu ostrva, koja se proteže duž istočne obale, ostajući unutar veličanstvenog koralnog grebena.  

Prvo će vas dočekati poseta vodopadu, gde možete uživati u prirodnim lepotama i osvećenju. Nakon toga, sledeće je opuštanje na ostrvu, gde ćete celim putem uživati u tropskom suncu, okruženi belim peskom i tirkiznim morem. Na susednom ostrvu napravite pauzu za ručak i uživajte u svežoj ribi i tradicionalnom rumu, upijajući atmosferu i okruženje.  

Vraćate se u smeštaj puni lepih utisaka i novih doživljaja, sa najslađim uspomenama sa svog dana na rajskom ostrvu Mauricijusa.`,
        },
        {
          day: 5,
          title: "Obilazak plaža na zapadnoj i južnoj obali ostrova",
          details: `Dan je namenjen opuštanju i uživanju na najlepšim plažama Mauricijusa. Posle doručka, obići ćete Flic En Flac plažu, poznatu po belom pesku, toplom moru i živopisnoj atmosferi, idealnu za kupanje i sunčanje.  

Nakon toga, usmerićete se prema Le Morne, poznatom i zaštićenom monolitu Novog sveta, koji se uzdiže iz mora i predstavlja simbol otpora i snage. Uživajte u pogledu na ovaj impozantni greben i fotografišite spektakularne prizore.  

Otuda možete posmatrati i aktivne kitesurfer, koji se igraju vetrom i talasima, dok vas okružuju prelepi koralni grebeni i mirno more. Potpuno opuštanje, kupanje, šetnje i uživanje u prirodi učiniće ovaj dan posebnim. Nakon što se odmorite, vraćate se u smeštaj i večer provedite u spokojnoj atmosferi, punoj lepote i dobrog raspoloženja.`,
        },
        {
          day: 6,
          title: "Fakultativni izlet - Park prirode Casela",
          details: `Nakon doručka, krećete na izlet u prelepi park prirode Casela, jedno od najpopularnijh i najlepših zaštićenih područja Mauricijusa. Ovde ćete imati priliku da vidite raznovrsne divlje životinje — lavove, geparde, razne egzotične ptice, antilope, nojeve i žirafe — u njihovom prirodnom okruženju.  

U okviru posete, uključen je safari vožnja od 45 minuta, tokom koje ćete blisko upoznati životinjski svet parka, kao i uzbudljiva Tulawaka Gold coaster vožnja, koja će podići adrenalin i učiniti današnji dan još uzbudljivijim.  

U parku se nalaze i dva restorana sa prelepim pogledom na jugozapadnu obalu Mauricijusa, gde možete uživati u regionalnim specijalitetima uz predivan pogled i opuštajuću atmosferu.  

Po završetku aktivnosti, vraćate se u smeštaj i odmarate, puni utisaka i lepote ovog prirodnog rajskog područja.`,
        },
        {
          day: 7,
          title:
            "Fakultativni izlet - Park prirode La Vallee i hinduistički hram",
          details: `Vaš dan počinje posetom hinduističkim hramovima na obali Ganga Talao, impresivnom kraterskom jezeru okruženom svetilištima i prostorima za meditaciju. Ova duhovna lokacija pruža miran uvid u verske običaje i åšamu tradicionalnu atmosferu.  

Nakon toga, krećete u park prirode La Vallee, gde ćete biti u prilici da upoznate autentičnu faunu i floru, uključujući i fenomen poznat kao „23 boje tla“. Prizor je zaista jedinstven – brežuljkaste naslage u raznim bojama, stvarajući prava umetnička dela prirode.  

Za one željne izazova, park nudi i razne avanturističke aktivnosti: vožnju kvadovima, zipline, ili šetnju preko 350 metara dugog visećeg mosta, uz spektakularne poglede i uzbuđenje.  

Nakon napornog i inspirativnog dana, vraćate se u smeštaj, zatrpani doživljajima i lepotama prirode Mauricijusa.`,
        },
        {
          day: 8,
          title: "Fakultativni izlet - Obilazak seernih ostrova",
          details: `Naše krstarenje ili vožnja brzim brodom vodi vas do veličanstvenih severnih ostrva Mauricijusa, koji su zaštićeni prirodni rezervati bogatog biljnog i životinjskog sveta. Tokom plovidbe, uživaćete u prelepim pejzažima i mogućnosti da vidite raznovrsne vrste ptica, a ukoliko budete imali sreće, i delfine, kornjače i mantare kako igraju u prirodnom okruženju.  

Ovaj izlet pruža pravo uživanje u lepotama Mauricijusa i njegovoj netaknutoj prirodi, a nakon vožnje vraćate se u smeštaj i noćenje, puni lepih utisaka i osećaja mira i harmonije.`,
        },
        {
          day: 9,
          title: "Fakultativni izlet - Odlazak na istočne plaže Mauricijusa",
          details: `Ovaj dan je rezervisan za opuštanje i uživanje na najlepšim plažama Mauricijusa. Posle doručka, krećete na izlet do plaže Belle Mare, poznate po belom pesku i tirkiznom moru, idealnoj za kupanje i sunčanje. Na pouzdanoj Poste La Fayette plaži, predivne fotografije i opuštanje na ležaljkama će vam ostati u sećanju.  

Uživajte u mirnom okruženju, osveženjima i zvucima mora, dok se potpunosti relaksirate i punite energijom. Na kraju dana se vraćate u smeštaj i uživate u noćenju, sa blagim osećajem mira i upoznavanja nepoznatih lepota Mauricijusa.`,
        },
        {
          day: 10,
          title: "Slobodan dan",
          details: `Slobodan dan za odmaranje i uživanje u prirodnim lepotama Mauricijusa. Noćenje.`,
        },
        {
          day: 11,
          title: "Transfer do aerodrome i povratak u Beograd",
          details: `Nakon nezaboravnog boravka na Mauricijusu, vreme je za povratak kući. Ujutru će vam biti organizovan transfer od smeštaja do aerodroma. Polazak je u 10:20h, a vaš let OS 062 sa presedanjem u Beču polazi u isto vreme.  

Dolazak u Beč je predviđen u 18:10h, gde će uslediti konekcija na let za Beograd. Let za Beograd polazi u 22:25h (OS 725), a očekivani dolazak u Beograd je u 23:30h.  

Uključena je avio karta sa svim taksama i presedanjem, u ekonomskoj klasi, sa 23 kg čekiranog i 8 kg ručnog prtljaga. Želimo vam siguran i ugodan povratak uz prelepe uspomene s Mauricijusa!`,
        },
      ],
      departures: [
        {
          polazak: "08.01.2026",
          povratak: "18.01.2026",
          dana: "11",
          price: "1799€",
          link: "#",
        },
        {
          polazak: "03.02.2026",
          povratak: "13.02.2026",
          dana: "11",
          price: "1799€",
          link: "#",
        },
        {
          polazak: "10.02.2026",
          povratak: "20.02.2026",
          dana: "11",
          price: "1799€",
          link: "#",
        },
        {
          polazak: "26.02.2026",
          povratak: "08.03.2026",
          dana: "11",
          price: "1799€",
          link: "#",
        },
      ],
      included: [
        { icon: "#", title: "asd", info: "asd" },
        { icon: "#", title: "asd", info: "asd" },
      ],
      notIncluded: ["nike ukluceno"],
      media: {
        images: [
          "/assets/Images/Mauritius/1.JPG",
          "/assets/Images/Mauritius/2.JPG",
          "/assets/Images/Mauritius/3.JPG",
          "/assets/Images/Mauritius/4.jpg",
          "/assets/Images/Mauritius/5.jpg",
          "/assets/Images/Mauritius/6.JPG",
          "/assets/Images/Mauritius/7.jpg",
          "/assets/Images/Mauritius/8.jpg",
        ],
        videos: ["#"],
      },
      usefulInfo: "",
      similarTrips: ["Thailand", "Maldives", "Sri Lanka"],
    },

    {
      name: "Sejšeli",
      img: "/assets/Images/Seychelles/img.jpg",
      bigImg: "/assets/Images/Seychelles/bigImg.jpg",
      slogan: "Sejšeli",
      about: `Doživite najlepše čari granitnog ostrva na svetu – Sejšeli!
  
  Otkrijte deset dana tropskog raja, gde će se beli pesak rajskih plaža, tirkizne vode Indijskog okeana i neponovljive prirodne lepote spojiti u savršeni odmor za dušu i telo. Uživajte u spektakularnim pejzažima, nezaboravnim obrocima i autentičnim doživljajima na jednom od najlepših mesta na planeti.
  
  Naši uključeni obilasci i aktivnosti obuhvataju:
  
  ◾Razgledavanje glavnog grada Viktorije – šetnja kroz živopisni centar i poseta lokalnim radnjama,
  ◾Degustacija domaćeg ruma u Takamaka destileriji,
  ◾Uživanje na najpoznatijim plažama poput Anse Lazio, Anse Source d'Argent i Port Launay, koje važe za najfotogeničnije i najlepše u svetu,
  ◾Izlet na Eden vidikovac i šetnja kroz Nacionalni park Morne, gde ćete upoznati endemsku floru i faunu,
  ◾Krstarenje portovima i lagunama, uz ronjenje ili snorkling za uživanje u tropskom podvodnom svetu,
  ◾Uživanje u lokalnim specijalitetima, od tradicionalnog kari hobotnice do svežih plodova mora,
  ◾Kupovina unikatnog nakita, ručno pravljenih umetnina i lokalnih suvenira.
  
  Smeštaj je organizovan na najlepšem ostrvu Mahe, na odličnoj lokaciji, sa opcijama od udobnog hostela do luksuznih hotela na plaži, poput Coral Strand ili sličnih smeštaja za svaki džep. Tokom putovanja, posetićemo i čarobna ostrva Praslin i La Digue, gde ćemo uroniti u netaknutu prirodu, džungle, stene i zaštićene rezervate, upoznajući bogat svet biljaka i životinja.
  
  Sejšeli su destinacija koja će vas osvojiti ponudom raznolikih aktivnosti: od vožnje kajakom i jedrenja, preko planinarenja i vožnje bicikla, do avantura u okruženju prirode, i to sve u tropskom raju. Svaki dan pruža novu priliku za istraživanje i relaksaciju.
  
  Zakoračite u svet tropskog raja i stvorite uspomene koje će trajati večno! Naše pakete možete prilagoditi vašim željama i interesovanjima, a iskustvo ostaje za ceo život.  
  
  Rezervišite svoje mesto već danas i dozvolite sebi da budete deo ove nevjerovatne priče!`,

      planProgram: [
        {
          day: 1,
          title: "Polazak",
          details: `Pripremite se za nezaboravno putovanje! Polazak sa aerodroma „Nikola Tesla“ u Beogradu dva i po sata pre leta. Uputimo se prema istoku u pravcu Indijskog okeana. Let iz Beograda u 11:55/12:40 (QR 232) sa presedanjem u Dohi. Dolazak u Dohu u 18:50/18:40 po lokalnom vremenu.
  
  U ponudi:
  
  Aviokarta sa svim taksama na relaciji Beograd – Mahe, u ekonomskoj klasi, sa presedanjem
  7 kg ručnog prtljaga i 2 x 23 kg registrovanog prtljaga
  Polazak iz: Beograd
  Dolazak u: Dohu`,
        },
        {
          day: 2,
          title: "Dolazak na Sejšeli",
          details: `Konekcija na let – let za Sejšele! Polazak iz Beograda u 02:50h (QR 678). Dolazak na Mahe u 08:30h. Dobrodošli u tropki raj! Transfer od aerodroma do smeštaja na Maheu. Slobodno vreme za uživanje na plaži.
  
  Sejšeli se nalaze u Indijskom okeanu, otprilike 1600 kilometara od istočne obale Afrike. Najpoznatija ostrva su Mahe, Praslin i La Digue, sa brojnim manjim ostrvskim grupama. Zahvaljujući položaju između 4. i 10. stepena južne geografskog širine, ostrva imaju tropsku klimu tokom cele godine. Prelepe plaže, nestvarne boje, tropska vegetacija i srdačni ljudi – idealna destinacija za odmor i opuštanje.
  
  U ponudi:
  
  Transfer od aerodroma do smeštaja
  Smeštaj na Ostrvu Mahe u hotelu Divers Lodge ili Coral Strand Smart Choice Hotel na 1 noć
  Lokacija: Ostrvo Mahe`,
        },
        {
          day: 3,
          title:
            "Obilazak glavnog grada Mahea, Eden vidikovac, Takamaka destilarija i plaza Anse Royale",
          details: `Obilazak Mahe ostrva, Takamaka destilerije, Eden vidikovca i plaže Anse Royale – otkriće bogate istorije, predivne prirode i ukusnih lokalnih delicija. Posetićemo glavni grad Viktoriju, sa njegovim šarenolikim ulicama i karakterističnim građevinama iz ranog 20. veka. Uživaćemo u slikovitom pogledu na fasade kamene i drvene arhitekture, kapke i balustrade koji stvaraju autentičnu atmosferu.
  
  Viktorija je podijeljena na dva centralna područja: jedno oko sat-kule – simbol Sejšela i replike londonskog Vauxhall tornja, smešteno u severnom kružnom toku; i drugi deo oko Priče o Sir Selvinu Selvinu Clarkeu, pijaci osnovanoj 1840. godine, gde će se od raznovrsnog lokalnog asortimana naći riblja specialiteti, začini i egzotično voće. Subotom ujutru, pijaca postaje prava košnica aktivnosti i boja, idealno mesto za fotografisanje i uživanje u autentičnoj atmosferi.
  
  Poseksićemo i šareni hinduski hram za boga Vinaiagara, građen 1992. godine, jedan od najfotografisanijih simbola na Sejšelima, koji pruža uvid u bogatu versku tradiciju. Ukoliko želite, biće vam omogućeno da posetite i mali hram izvan ceremonija, uz razuman doplata.
  
  Zatim nas čeka Eden vidikovac, odakle se pruža spektakularan pogled na Viktoriju i okolinu, a zatim odlazimo na Takamaka destileriju, gde ćemo se upoznati sa procesom pravljenja najpoznatijeg sejšelskog ruma. Mogućnost degustacije šest različitih vrsta ruma uz doplatu od oko 10 evra po osobi.
  
  Ostatak dana provedite na jednoj od najpoznatijih plaža Sejšela – Anse Royale, gde će fotografije i opuštanje biti garantovani. Povratak u smeštaj i završetak nezaboravnog dana.`,
        },

        {
          day: 4,
          title: "Fakultativni izlet - plaza Anse Major",
          details: `Slobodan dan ili fakultativni izlet na Anse Major plažu – jednu od najlepših i najskrovitijih plaža na Maheu. Organizovanim prevozom stižemo do početka staze, odakle vas čeka oko sat vremena lagane šetnje (približno 2 km) do ove očaravajuće skrivene okeanske oaze. Predlažemo da ponesete udobne patike za lakše uživanje u hodanju.
  
  Na plaži će biti obezbeđen ukusni ručak sa lokalnim specijalitetima kao što su sveže riba sa roštilja, pirinač i kari. Ukoliko želite, možete se osvežiti egzotičnim voćem ili lokalnim pićima u baru, a za one željne relaksacije, dostupne su i stolice za odmor.
  
  Posle uživanja na plaži, povratak je organizovan istim putem do smeštaja. Ovaj izlet predstavlja savršenu priliku za opuštanje i razgledanje netaknute prirode Sejšela.`,
        },

        {
          day: 5,
          title:
            "Nacionalni park Morne, Port Glaud Lagoon i plaza Port Launay ",
          details: `Obilazak najvećeg nacionalnog parka na Sejšelima – Morne – uživaćemo u razgledanju bogate flore i faune, kao i u spektakularnim vidikovcima koji pružaju pogled na ostrvo. Putem zahtevnije pešačke rute, stići ćemo na vrh Morne, najviši punkt na Sejšelima, gde nas očekuju nezaboravni pogledi i osvežavajuća atmosfera prirode.
  
  Nakon pešačenja, uslediće odmor i relaksacija na jednoj od najlepših plaža na Maheu – Port Glaud Lagoon i Port Launay. Ove predivne celine sa kristalno čistom vodom i predivnim pejzažima idealne su za opuštanje, fotografisanje i uživanje u prirodi.
  
  Na kraju, povratak u smeštaj i nastavak odmora. Ovaj izlet pruža spoj avanture, prirode i mira, savršen za one koji žele da upoznaju prirodne lepote Sejšela.`,
        },

        {
          day: 6,
          title: "Fakultativni izlet - Praslin i La Digue ostrova",
          details: `Slobodan dan ili celodnevni fakultativni izlet – Praslin i La Digue ostrva – dan za istraživanje i opuštanje na dve prelepe destinacije. Jutro započinjemo krstarenjem do drugog po veličini ostrva na Sejšelima, Praslina. Posetićemo svetu poznatu Anse Lazio plažu, koja je smatrana jednom od najlepših na svetu. Okružena granitnim stenama, visokim palmama, drvećem takamake i tirkiznim okeanom, ova plaža je pravi raj za fotografisanje i opuštanje.
  
  Nakon razgledanja i uživanja na Praslini, brod nas vodi do ostrva La Digue. Po dolasku, odradićemo ukusni kreolski ručak u jednom od autentičnih restorana. Ostrvo je sačuvalo svoj tradicionalni način života, a najbolje ga je istražiti biciklom, pešačenjem ili otvorenim vozilima.
  
  Posećujemo jednu od najpoznatijih plaža – Anse Source d’Argent, poznatu po spektakularnim granitnim stenama i netaknutoj prirodi. Uživajte u lepoti i mirnoj atmosferi ovog paradizeta.
  
  Na kraju, povratak u smeštaj i završetak nezaboravnog dana.`,
        },
        {
          day: 7,
          title:
            "Obilazak najlepŠ plažа na ostrvu: Petite Anse, Anse Soleil, Anse Intendance",
          details: `Dan rezervisan za kupanje i sunčanje na najlepšim plažama Sejšela! Čeka nas stručni izlet na neke od najpoznatijih i najlepših plaža ostrva. Prvo ćemo posetiti plažu Petite Anse, do koje stižemo kroz luksuzni resort Four Seasons. Uživanje na ovoj predivnoj plaži biće još lepše uz osveženje i opuštanje uz mirne talase.
  
  Povratak sa plaže zahteva malo više napora, jer je potrebno proći kroz lagani uspon, zato preporučujemo da ponesete udobne patike. Nakon toga, krećemo ka plažama Anse Soleil i Anse Intendance. Sunčanje, kupanje, uživanje u lokalnim delicijama i osvežavajućim koktelima u beach barovima biće savršeni za kraj dana.
  
  Naš dan završavamo povratkom u smeštaj, sa mnoštvom lepih uspomena i fotografija.`,
        },

        {
          day: 8,
          title:
            "Slobodan dan ili fakultativni izlet u St. Anne Marine nacionalni park",
          details: `Slobodan dan ili fakultativni izlet u St. Anne Marine nacionalni park – prelepi arhipelag koji se sastoji od više ostrva, od kojih su neka povezana peščanim sprudovima, što omogućava pešačenje sa jednog na drugo ostrvo. Plaže su divlje, sa neverovatnim bojama i autentičnom atmosferom, idealne za opuštanje, fotografisanje i uživanje u prirodi.
  
  Nakon razgledanja i uživanja u ovom prirodnom čudu, vraćamo se u smeštaj, puni utisaka i lepih slika.`,
        },

        {
          day: 9,
          title: "Napuštanje smeštaja i slobodno vreme do polaska",
          details: `Napuštanje soba u prepodnevnim satima i slobodno vreme za poslednje trenutke opuštanja ili šetnje do polaska. Nakon toga, organizovan transfer do aerodroma. 
  
  Let za Dohu je zakazan u 19:30h (QR 679), a dolazak u Dohu očekuje se u 23:15h po lokalnom vremenu.
  
  Transfer od smeštaja do aerodroma
  Aviokarta sa svim taksama na relaciji Mahe – Beograd u ekonomskoj klasi, sa presedanjem, uključujući 7 kg ručnog i 2 x 23 kg čekiranog prtljaga`,
        },
        {
          day: 10,
          title: "Povratak i kraj putovanja",
          details: `Konekcija na let. Let za Beograd u 07.25h (QR 231). Dolazak u Beograd u 11.40h. Kraj putovanja.`,
        },
      ],
      departures: [
        {
          polazak: "07.12.2025",
          povratak: "16.12.2025",
          dana: "10",
          price: "1549€",
          link: "#",
        },
        {
          polazak: "05.01.2026",
          povratak: "14.01.2026",
          dana: "10",
          price: "1499€",
          link: "#",
        },
        {
          polazak: "09.01.2026",
          povratak: "18.01.2026",
          dana: "10",
          price: "1449€",
          link: "#",
        },
        {
          polazak: "13.01.2026",
          povratak: "22.01.2026",
          dana: "10",
          price: "1449€",
          link: "#",
        },
        {
          polazak: "19.01.2026",
          povratak: "28.01.2026",
          dana: "10",
          price: "1349€",
          link: "#",
        },
        {
          polazak: "03.02.2026",
          povratak: "12.02.2026",
          dana: "10",
          price: "1399€",
          link: "#",
        },
        {
          polazak: "06.02.2026",
          povratak: "15.02.2026",
          dana: "10",
          price: "1399€",
          link: "#",
        },
        {
          polazak: "11.02.2026",
          povratak: "20.02.2026",
          dana: "10",
          price: "1449€",
          link: "#",
        },
        {
          polazak: "14.02.2026",
          povratak: "23.02.2026",
          dana: "10",
          price: "1449€",
          link: "#",
        },
        {
          polazak: "20.02.2026",
          povratak: "01.03.2026",
          dana: "10",
          price: "1399€",
          link: "#",
        },
        {
          polazak: "23.02.2026",
          povratak: "04.03.2026",
          dana: "10",
          price: "1399€",
          link: "#",
        },
        {
          polazak: "27.02.2026",
          povratak: "08.03.2026",
          dana: "10",
          price: "1399€",
          link: "#",
        },
        {
          polazak: "02.03.2026",
          povratak: "11.03.2026",
          dana: "10",
          price: "1399€",
          link: "#",
        },
        {
          polazak: "06.03.2026",
          povratak: "15.03.2026",
          dana: "10",
          price: "1399€",
          link: "#",
        },
        {
          polazak: "11.03.2026",
          povratak: "20.03.2026",
          dana: "10",
          price: "1399€",
          link: "#",
        },
        {
          polazak: "14.03.2026",
          povratak: "23.03.2026",
          dana: "10",
          price: "1399€",
          link: "#",
        },
        {
          polazak: "18.03.2026",
          povratak: "27.03.2026",
          dana: "10",
          price: "1399€",
          link: "#",
        },
        {
          polazak: "22.03.2026",
          povratak: "31.03.2026",
          dana: "10",
          price: "1399€",
          link: "#",
        },
        {
          polazak: "26.03.2026",
          povratak: "04.04.2026",
          dana: "10",
          price: "1399€",
          link: "#",
        },
        {
          polazak: "04.04.2026",
          povratak: "13.04.2026",
          dana: "10",
          price: "1449€",
          link: "#",
        },
        {
          polazak: "11.04.2026",
          povratak: "20.04.2026",
          dana: "10",
          price: "1449€",
          link: "#",
        },
        {
          polazak: "19.04.2026",
          povratak: "28.04.2026",
          dana: "10",
          price: "1449€",
          link: "#",
        },
        {
          polazak: "26.04.2026",
          povratak: "05.05.2026",
          dana: "10",
          price: "1449€",
          link: "#",
        },
        {
          polazak: "03.05.2026",
          povratak: "12.05.2026",
          dana: "10",
          price: "1399€",
          link: "#",
        },
      ],
      included: [
        {
          icon: "#",
          title: "Smestaj",
          info: "Divers Lodge Primer ili Coral Strand Smart Choice Hotel Primer  7 noći",
        },
        {
          icon: "#",
          title: "Prevoz",
          info: `Avio-karta sa svim taksama na relaciji Beograd - Mahe, u ekonomskoj klasi, sa presedanjem, sa 7 kg ručnog i 2 x 23 kg čekiranog prtljaga
  Transfer od aerodroma do smeštaja
  Transfer od smeštaja do aerodroma
  Avio-karta sa svim taksama na relaciji Mahe - Beograd u ekonomskoj klasi, sa presedanjem, sa 7 kg ručnog i 2 x 23 čekiranog prtljaga`,
        },
      ],
      notIncluded: [
        `Međunarodno zdravstveno osiguranje (može se uzeti u agenciji)
  Individualne troškove nastale za vreme trajanja aranžmana
  Fakultativne izlete i ulaznice za kulturno istorijske spomenike
  Doplata za poskupljenje takse za gorivo
  Doplatu za jednokrevetnu sobu (na upit)
  Obaveznu doplatu za ekološku taksu u iznosu od 7 EUR po osobi po noći koja se plaća na licu mesta na recepciji hotela`,
      ],
      media: {
        images: [
          "/assets/Images/Seychelles/1.jpg",
          "/assets/Images/Seychelles/2.jpg",
          "/assets/Images/Seychelles/3.jpg",
          "/assets/Images/Seychelles/4.jpg",
          "/assets/Images/Seychelles/5.jpg",
          "/assets/Images/Seychelles/6.jpg",
          "/assets/Images/Seychelles/7.jpg",
          "/assets/Images/Seychelles/8.jpg",
        ],
        videos: ["https://www.youtube.com/watch?v=xxxx"],
      },
      usefulInfo:
        "Idealno vreme: april–oktobar. Viza na dolasku za EU državljane.",
      similarTrips: ["Thailand", "Maldives", "Sri Lanka"],
    },
  ],
};

export default destinations;
