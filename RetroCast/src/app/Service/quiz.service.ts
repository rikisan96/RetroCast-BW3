import { Injectable } from "@angular/core";

export interface Question {
  text: string;
  options: string[];
  correctAnswer: string;
}
export interface Quiz {
  title: string;
  image: string;
  questions: Question[];
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private quizzes: Quiz[] = [
    {
      title: 'Quiz su Super Mario (anni 90)',
      image: 'https://i.redd.it/96e9f3itf0i51.jpg',
      questions: [
        {
          text: 'Quale nemico ricorrente è il principale antagonista di Mario?',
          options: ['Bowser', 'Donkey Kong', 'Wario', 'Luigi'],
          correctAnswer: 'Bowser'
        },
        {
          text: 'In quale gioco Mario ha avuto la sua prima apparizione?',
          options: ['Super Mario Bros.', 'Donkey Kong', 'Super Mario World', 'Mario Kart'],
          correctAnswer: 'Donkey Kong'
        },
        {
          text: 'Qual è il nome del fratello di Mario?',
          options: ['Wario', 'Toad', 'Luigi', 'Yoshi'],
          correctAnswer: 'Luigi'
        },
        {
          text: 'Quale potenziamento permette a Mario di volare?',
          options: ['Super Mushroom', 'Fire Flower', 'Cape Feather', 'Star'],
          correctAnswer: 'Cape Feather'
        },
        {
          text: 'Quale gioco di Mario è uscito nel 1990 per SNES?',
          options: ['Super Mario 64', 'Super Mario Sunshine', 'Super Mario Galaxy', 'Super Mario World'],
          correctAnswer: 'Super Mario World'
        }
      ]
    },
    {
      title: 'Quiz su The Witcher 2: Assassins of Kings',
      image: 'https://www.gamerclick.it/immagini/videogame/The_Witcher_2_Assassins_of_Kings/cover/The_Witcher_2_Assassins_of_Kings-cover.jpg',
      questions: [
        {
          text: 'Chi è il protagonista di The Witcher 2?',
          options: ['Geralt of Rivia', 'Ciri', 'Yennefer', 'Triss'],
          correctAnswer: 'Geralt of Rivia'
        },
        {
          text: 'In quale regno si svolge principalmente The Witcher 2?',
          options: ['Nilfgaard', 'Temeria', 'Skellige', 'Redania'],
          correctAnswer: 'Temeria'
        },
        {
          text: 'Qual è il nome della spada d\'argento di Geralt?',
          options: ['Aerondight', 'Gwynbleidd', 'Zireael', 'Excalibur'],
          correctAnswer: 'Aerondight'
        },
        {
          text: 'Chi è il re di Temeria all\'inizio di The Witcher 2?',
          options: ['Foltest', 'Henselt', 'Radovid', 'Emhyr'],
          correctAnswer: 'Foltest'
        },
        {
          text: 'Quale creatura è Geralt incaricato di uccidere all\'inizio del gioco?',
          options: ['Drago', 'Griffin', 'Kayran', 'Wyvern'],
          correctAnswer: 'Kayran'
        }
      ]
    },
    {
      title: 'Quiz su Minecraft',
      image: 'https://i.pinimg.com/736x/cb/62/90/cb6290ec436941da956f4a6080a29d22.jpg',
      questions: [
        {
          text: 'Chi è il creatore di Minecraft?',
          options: ['Markus Persson', 'Jens Bergensten', 'Shigeru Miyamoto', 'Hideo Kojima'],
          correctAnswer: 'Markus Persson'
        },
        {
          text: 'Qual è il nome del mondo parallelo accessibile tramite portali in Minecraft?',
          options: ['The End', 'The Nether', 'The Abyss', 'The Shadowlands'],
          correctAnswer: 'The Nether'
        },
        {
          text: 'Quale oggetto si usa per creare un portale per The End?',
          options: ['Ender Pearls', 'Eyes of Ender', 'Blaze Rods', 'Nether Stars'],
          correctAnswer: 'Eyes of Ender'
        },
        {
          text: 'Qual è il nome del boss finale in Minecraft?',
          options: ['Wither', 'Ender Dragon', 'Elder Guardian', 'Illager Beast'],
          correctAnswer: 'Ender Dragon'
        },
        {
          text: 'Quale materiale è necessario per creare un piccone in Minecraft?',
          options: ['Legno', 'Pietra', 'Ferro', 'Diamante'],
          correctAnswer: 'Diamante'
        }
      ]
    },
    {
      title: 'Quiz su Batman: Arkham City',
      image: 'https://static.posters.cz/image/1300/poster/batman-arkham-city-cover-i11510.jpg',
      questions: [
        {
          text: 'Chi è il principale antagonista di Batman in Arkham City?',
          options: ['The Joker', 'Two-Face', 'Penguin', 'Ra\'s al Ghul'],
          correctAnswer: 'The Joker'
        },
        {
          text: 'Quale personaggio giocabile ha una propria serie di missioni in Arkham City?',
          options: ['Catwoman', 'Robin', 'Nightwing', 'Batgirl'],
          correctAnswer: 'Catwoman'
        },
        {
          text: 'Chi è il direttore di Arkham City?',
          options: ['Hugo Strange', 'Oswald Cobblepot', 'Edward Nigma', 'Victor Fries'],
          correctAnswer: 'Hugo Strange'
        },
        {
          text: 'Quale nemico usa il gas della paura in Arkham City?',
          options: ['Bane', 'Scarecrow', 'Clayface', 'Killer Croc'],
          correctAnswer: 'Scarecrow'
        },
        {
          text: 'Chi aiuta Batman con la tecnologia e le informazioni in Arkham City?',
          options: ['Alfred', 'Lucius Fox', 'Oracle', 'Commissioner Gordon'],
          correctAnswer: 'Oracle'
        }
      ]
    },
    {
      title: 'Quiz su The Sims 2',
      image: 'https://cdn.mobygames.com/5d04952e-ac0d-11ed-ad33-02420a00012d.webp',
      questions: [
        {
          text: 'In quale anno è stato rilasciato The Sims 2?',
          options: ['2002', '2004', '2006', '2008'],
          correctAnswer: '2004'
        },
        {
          text: 'Quale barra di bisogni non è presente in The Sims 2?',
          options: ['Divertimento', 'Energia', 'Amicizia', 'Igenico'],
          correctAnswer: 'Amicizia'
        },
        {
          text: 'Quale espansione introduce i vampiri in The Sims 2?',
          options: ['Vita da Universitario', 'Nightlife', 'Business', 'Pets'],
          correctAnswer: 'Nightlife'
        },
        {
          text: 'Qual è il nome della città predefinita in The Sims 2?',
          options: ['SimCity', 'Willow Creek', 'Pleasantview', 'Sunset Valley'],
          correctAnswer: 'Pleasantview'
        },
        {
          text: 'Quale sim è noto per essere un alieno in The Sims 2?',
          options: ['Bella Goth', 'Don Lothario', 'Dina Caliente', 'Pollination Technician #9'],
          correctAnswer: 'Pollination Technician #9'
        }
      ]
    },
    {
      title: 'Quiz su Red Dead Redemption',
      image: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Red_Dead_Redemption.jpg',
      questions: [
        {
          text: 'Chi è il protagonista di Red Dead Redemption?',
          options: ['Arthur Morgan', 'John Marston', 'Dutch van der Linde', 'Bill Williamson'],
          correctAnswer: 'John Marston'
        },
        {
          text: 'In quale anno è ambientato Red Dead Redemption?',
          options: ['1899', '1906', '1911', '1920'],
          correctAnswer: '1911'
        },
        {
          text: 'Quale animale leggendario è possibile cacciare in Red Dead Redemption?',
          options: ['Lupo', 'Orso Grizzly', 'Leone di Montagna', 'Coyote'],
          correctAnswer: 'Orso Grizzly'
        },
        {
          text: 'Quale membro della famiglia di John viene rapito nel gioco?',
          options: ['Sua moglie', 'Suo figlio', 'Suo padre', 'Sua sorella'],
          correctAnswer: 'Suo figlio'
        },
        {
          text: 'Qual è il nome della città che serve come base per John in Red Dead Redemption?',
          options: ['Valentine', 'Armadillo', 'Blackwater', 'Tumbleweed'],
          correctAnswer: 'Armadillo'
        }
      ]
    },
    {
      title: 'Quiz su Grand Theft Auto IV',
      image: 'https://upload.wikimedia.org/wikipedia/en/b/b7/Grand_Theft_Auto_IV_cover.jpg',
      questions: [
        {
          text: 'Chi è il protagonista di Grand Theft Auto IV?',
          options: ['Tommy Vercetti', 'Carl Johnson', 'Niko Bellic', 'Trevor Philips'],
          correctAnswer: 'Niko Bellic'
        },
        {
          text: 'Quale città è l\'ambientazione principale di Grand Theft Auto IV?',
          options: ['Los Santos', 'Vice City', 'Liberty City', 'San Fierro'],
          correctAnswer: 'Liberty City'
        },
        {
          text: 'Chi è il cugino di Niko in Grand Theft Auto IV?',
          options: ['Roman Bellic', 'Vlad Glebov', 'Dimitri Rascalov', 'Patrick McReary'],
          correctAnswer: 'Roman Bellic'
        },
        {
          text: 'Qual è il nome della stazione radio che trasmette musica punk rock in GTA IV?',
          options: ['Radio Broker', 'LCHC', 'Vladivostok FM', 'Electro-Choc'],
          correctAnswer: 'Radio Broker'
        },
        {
          text: 'Chi è il creatore della serie Grand Theft Auto?',
          options: ['Shigeru Miyamoto', 'Hideo Kojima', 'Sid Meier', 'David Jones'],
          correctAnswer: 'David Jones'
        }
      ]
    },
    {
      title: 'Quiz su Tomb Raider',
      image: 'https://www.tombraiderchronicles.com/images/tomb-raider-covers-redux/tomb-raider-1-us.png',
      questions: [
        {
          text: 'Qual è il nome completo della protagonista di Tomb Raider?',
          options: ['Lara Croft', 'Elena Fisher', 'Chloe Frazer', 'Jill Valentine'],
          correctAnswer: 'Lara Croft'
        },
        {
          text: 'In quale anno è stato rilasciato il primo gioco di Tomb Raider?',
          options: ['1993', '1996', '1999', '2001'],
          correctAnswer: '1996'
        },
        {
          text: 'Quale arma è il marchio distintivo di Lara Croft?',
          options: ['Machete', 'Arco', 'Pistola doppia', 'Fucile a pompa'],
          correctAnswer: 'Pistola doppia'
        },
        {
          text: 'Quale civilizzazione antica Lara esplora nel gioco del 2013?',
          options: ['Maya', 'Egiziana', 'Giapponese', 'Greca'],
          correctAnswer: 'Giapponese'
        },
        {
          text: 'Chi è il principale antagonista in Tomb Raider (2013)?',
          options: ['Mathias', 'Dr. Dominguez', 'Amanda Evert', 'Natla'],
          correctAnswer: 'Mathias'
        }
      ]
    },
    {
      title: 'Quiz su Final Fantasy VII',
      image: 'https://cdn11.bigcommerce.com/s-kqbs9oimhc/images/stencil/1280x1280/products/889/2014/df5313d5528cafec58d0163d3c4036e7__93205.1670600291.jpg?c=1',
      questions: [
        {
          text: 'Chi è il protagonista di Final Fantasy VII?',
          options: ['Cloud Strife', 'Squall Leonhart', 'Tidus', 'Zidane Tribal'],
          correctAnswer: 'Cloud Strife'
        },
        {
          text: 'Qual è il nome della città natale di Cloud Strife?',
          options: ['Midgar', 'Nibelheim', 'Junon', 'Costa del Sol'],
          correctAnswer: 'Nibelheim'
        },
        {
          text: 'Quale personaggio di Final Fantasy VII è noto per la sua enorme spada chiamata Buster Sword?',
          options: ['Barret', 'Sephiroth', 'Tifa', 'Cloud'],
          correctAnswer: 'Cloud'
        },
        {
          text: 'Qual è il nome della compagnia malvagia in Final Fantasy VII?',
          options: ['Shinra', 'Avalanche', 'SeeD', 'Wutai'],
          correctAnswer: 'Shinra'
        },
        {
          text: 'Quale creatura invoca Aerith con la Materia Bianca?',
          options: ['Knights of the Round', 'Bahamut', 'Holy', 'Meteor'],
          correctAnswer: 'Holy'
        }
      ]
    },
    {
      title: 'Quiz su The Legend of Zelda: Ocarina of Time',
      image: 'https://i1.sndcdn.com/artworks-000464588955-2ftldl-t500x500.jpg',
      questions: [
        {
          text: 'Chi è il principale antagonista in The Legend of Zelda: Ocarina of Time?',
          options: ['Ganondorf', 'Vaati', 'Majora', 'Zant'],
          correctAnswer: 'Ganondorf'
        },
        {
          text: 'Qual è il nome del cavallo di Link in Ocarina of Time?',
          options: ['Epona', 'Shadowfax', 'Roach', 'Argo'],
          correctAnswer: 'Epona'
        },
        {
          text: 'Quale strumento magico utilizza Link per viaggiare nel tempo?',
          options: ['Bacchetta Magica', 'Ocarina del Tempo', 'Arpa delle Dee', 'Flauto del Destino'],
          correctAnswer: 'Ocarina del Tempo'
        },
        {
          text: 'Chi è la principessa di Hyrule in Ocarina of Time?',
          options: ['Zelda', 'Midna', 'Ruto', 'Impa'],
          correctAnswer: 'Zelda'
        },
        {
          text: 'Quale tempio non è presente in Ocarina of Time?',
          options: ['Tempio della Foresta', 'Tempio del Fuoco', 'Tempio dell\'Acqua', 'Tempio del Vento'],
          correctAnswer: 'Tempio del Vento'
        }
      ]},
        {
          title: 'Quiz su The Elder Scrolls V: Skyrim',
          image: 'https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_TheElderScrollsVSkyrim_image1600w.jpg',
          questions: [
            {
              text: 'Chi è il protagonista principale in Skyrim?',
              options: ['Dovahkiin', 'Alduin', 'Ulfric Stormcloak', 'General Tullius'],
              correctAnswer: 'Dovahkiin'
            },
            {
              text: 'Quale razza di creature è predominante in Skyrim?',
              options: ['Draghi', 'Elfi', 'Orchi', 'Vampiri'],
              correctAnswer: 'Draghi'
            },
            {
              text: 'Qual è la capitale di Skyrim?',
              options: ['Solitude', 'Whiterun', 'Windhelm', 'Riften'],
              correctAnswer: 'Solitude'
            },
            {
              text: 'Quale gruppo è noto per essere cacciatore di draghi?',
              options: ['The Blades', 'The Companions', 'The Thieves Guild', 'The Dark Brotherhood'],
              correctAnswer: 'The Blades'
            },
            {
              text: 'Qual è il grido più famoso usato dal Dovahkiin?',
              options: ['Fus Ro Dah', 'Yol Toor Shul', 'Od Ah Viing', 'Krii Lun Aus'],
              correctAnswer: 'Fus Ro Dah'
            }
          ]
        },
        {
          title: 'Quiz su Portal 2',
          image: 'https://cdn.akamai.steamstatic.com/steam/apps/620/header.jpg',
          questions: [
            {
              text: 'Qual è il nome dell\'IA antagonista in Portal 2?',
              options: ['GLaDOS', 'Wheatley', 'Cave Johnson', 'Atlas'],
              correctAnswer: 'GLaDOS'
            },
            {
              text: 'Chi è il protagonista di Portal 2?',
              options: ['Chell', 'Gordon Freeman', 'Wheatley', 'Cave Johnson'],
              correctAnswer: 'Chell'
            },
            {
              text: 'Quale oggetto permette di creare portali in Portal 2?',
              options: ['Portal Gun', 'Gravity Gun', 'Aperture Device', 'Teleporter'],
              correctAnswer: 'Portal Gun'
            },
            {
              text: 'Qual è il nome dell\'azienda che ha creato le strutture di test in Portal 2?',
              options: ['Aperture Science', 'Black Mesa', 'Vault-Tec', 'Umbrella Corporation'],
              correctAnswer: 'Aperture Science'
            },
            {
              text: 'Qual è il nome dell\'IA che aiuta il protagonista all\'inizio di Portal 2?',
              options: ['Wheatley', 'GLaDOS', 'Atlas', 'P-body'],
              correctAnswer: 'Wheatley'
            }
          ]
        },
        {
          title: 'Quiz su Dark Souls',
          image: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Dark_Souls_Cover_Art.jpg',
          questions: [
            {
              text: 'Chi è il principale antagonista in Dark Souls?',
              options: ['Gwyn', 'Solaire', 'Artorias', 'Seath'],
              correctAnswer: 'Gwyn'
            },
            {
              text: 'Quale luogo è conosciuto come il punto di partenza per i non morti?',
              options: ['Undead Asylum', 'Firelink Shrine', 'Blighttown', 'Anor Londo'],
              correctAnswer: 'Undead Asylum'
            },
            {
              text: 'Qual è il nome del cavaliere amico del protagonista che offre aiuto durante il gioco?',
              options: ['Solaire', 'Siegmeyer', 'Artorias', 'Oscar'],
              correctAnswer: 'Solaire'
            },
            {
              text: 'Quale oggetto è necessario per curare la malattia della Maledizione in Dark Souls?',
              options: ['Purging Stone', 'Estus Flask', 'Humanity', 'Divine Blessing'],
              correctAnswer: 'Purging Stone'
            },
            {
              text: 'Quale boss si trova nella città di Anor Londo?',
              options: ['Ornstein e Smough', 'Four Kings', 'Bed of Chaos', 'Gravelord Nito'],
              correctAnswer: 'Ornstein e Smough'
            }
          ]
        },
        {
          title: 'Quiz su BioShock',
          image: 'https://upload.wikimedia.org/wikipedia/en/6/6d/BioShock_cover.jpg',
          questions: [
            {
              text: 'In quale città sottomarina si svolge BioShock?',
              options: ['Rapture', 'Atlantis', 'Neptune\'s Bounty', 'Underworld'],
              correctAnswer: 'Rapture'
            },
            {
              text: 'Quale sostanza genetica è essenziale per ottenere plasmidi in BioShock?',
              options: ['ADAM', 'EVE', 'Vita-Chamber', 'Nano Serum'],
              correctAnswer: 'ADAM'
            },
            {
              text: 'Chi è il creatore di Rapture in BioShock?',
              options: ['Andrew Ryan', 'Frank Fontaine', 'Sander Cohen', 'Atlas'],
              correctAnswer: 'Andrew Ryan'
            },
            {
              text: 'Qual è il nome dei protettori delle Sorelline in BioShock?',
              options: ['Big Daddies', 'Little Sisters', 'Splicers', 'Handymen'],
              correctAnswer: 'Big Daddies'
            },
            {
              text: 'Quale frase iconica viene ripetuta da Atlas in BioShock?',
              options: ['Would you kindly', 'A man chooses', 'Welcome to Rapture', 'No gods or kings'],
              correctAnswer: 'Would you kindly'
            }
          ]
        },
        {
          title: 'Quiz su Mass Effect 2',
          image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2362420/capsule_616x353.jpg?t=1708017054',
          questions: [
            {
              text: 'Chi è il comandante protagonista in Mass Effect 2?',
              options: ['Shepard', 'Anderson', 'Garrus', 'Wrex'],
              correctAnswer: 'Shepard'
            },
            {
              text: 'Qual è il nome dell\'astronave di Shepard in Mass Effect 2?',
              options: ['Normandy', 'Reaper', 'Citadel', 'Crusader'],
              correctAnswer: 'Normandy'
            },
            {
              text: 'Quale organizzazione segreta aiuta Shepard a combattere i Razziatori in Mass Effect 2?',
              options: ['Cerberus', 'Alliance', 'Spectres', 'Geth'],
              correctAnswer: 'Cerberus'
            },
            {
              text: 'Chi è il leader di Cerberus in Mass Effect 2?',
              options: ['Illusive Man', 'Saren', 'Udina', 'Hackett'],
              correctAnswer: 'Illusive Man'
            },
            {
              text: 'Qual è il nome del medico di bordo della Normandy in Mass Effect 2?',
              options: ['Dr. Chakwas', 'Dr. Mordin', 'Dr. Liara', 'Dr. Anderson'],
              correctAnswer: 'Dr. Chakwas'
            }
          ]
        },
        {
          title: 'Quiz su Fallout 3',
          image: 'https://cdn1.epicgames.com/offer/fa702d34a37248ba98fb17f680c085e3/EGS_Fallout3GameoftheYearEdition_BethesdaGameStudios_S1_2560x1440-073f5b4cf358f437a052a3c29806efa0',
          questions: [
            {
              text: 'Qual è il nome del rifugio da cui il protagonista esce all\'inizio di Fallout 3?',
              options: ['Vault 101', 'Vault 111', 'Vault 13', 'Vault 81'],
              correctAnswer: 'Vault 101'
            },
            {
              text: 'Quale città devastata esplora il protagonista in Fallout 3?',
              options: ['Washington D.C.', 'New York', 'Los Angeles', 'Chicago'],
              correctAnswer: 'Washington D.C.'
            },
            {
              text: 'Qual è il nome del padre del protagonista in Fallout 3?',
              options: ['James', 'John', 'Jacob', 'Jack'],
              correctAnswer: 'James'
            },
            {
              text: 'Qual è il nome dell\'organizzazione militare in Fallout 3?',
              options: ['Brotherhood of Steel', 'Enclave', 'NCR', 'Railroad'],
              correctAnswer: 'Brotherhood of Steel'
            },
            {
              text: 'Quale dispositivo portatile utilizza il protagonista per gestire inventario e statistiche in Fallout 3?',
              options: ['Pip-Boy', 'RobCo', 'Vault-Tec', 'Power Armor'],
              correctAnswer: 'Pip-Boy'
            }
          ]
        },
        {
          title: 'Quiz su Left 4 Dead',
          image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Left4Dead_Windows_cover.jpg/220px-Left4Dead_Windows_cover.jpg',
          questions: [
            {
              text: 'Quanti sopravvissuti sono giocabili in Left 4 Dead?',
              options: ['4', '3', '5', '6'],
              correctAnswer: '4'
            },
            {
              text: 'Quale nemico speciale può immobilizzare un sopravvissuto da lontano?',
              options: ['Smoker', 'Hunter', 'Boomer', 'Tank'],
              correctAnswer: 'Smoker'
            },
            {
              text: 'Qual è il nome del gigantesco nemico potente in Left 4 Dead?',
              options: ['Tank', 'Charger', 'Witch', 'Spitter'],
              correctAnswer: 'Tank'
            },
            {
              text: 'Quale arma non è disponibile in Left 4 Dead?',
              options: ['Balestra', 'Mitragliatrice', 'Fucile a pompa', 'Pistola'],
              correctAnswer: 'Balestra'
            },
            {
              text: 'Quale modalità di gioco è esclusiva di Left 4 Dead?',
              options: ['Versus', 'Team Deathmatch', 'Capture the Flag', 'Battle Royale'],
              correctAnswer: 'Versus'
            }
          ]
        },
        {
          title: 'Quiz su Call of Duty 4: Modern Warfare',
          image: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Call_of_Duty_4_Modern_Warfare.jpg',
          questions: [
            {
              text: 'Chi è il protagonista principale in Call of Duty 4: Modern Warfare?',
              options: ['Soap MacTavish', 'Alex Mason', 'Frank Woods', 'Ghost'],
              correctAnswer: 'Soap MacTavish'
            },
            {
              text: 'Quale organizzazione terrorista è l\'antagonista principale in Call of Duty 4: Modern Warfare?',
              options: ['Al-Asad\'s Group', 'Ultranationalists', 'OpFor', 'Shadow Company'],
              correctAnswer: 'Al-Asad\'s Group'
            },
            {
              text: 'Qual è il nome del capitano che guida la squadra del protagonista in Call of Duty 4?',
              options: ['Captain Price', 'Captain Shepherd', 'Captain Foley', 'Captain MacMillan'],
              correctAnswer: 'Captain Price'
            },
            {
              text: 'Quale evento tragico accade nella missione "Shock and Awe"?',
              options: ['Detonazione di una bomba nucleare', 'Cattura di un generale', 'Risalita di un sottomarino', 'Invasione di una città'],
              correctAnswer: 'Detonazione di una bomba nucleare'
            },
            {
              text: 'Quale modalità di gioco è famosa per la sua intensità e azione rapida?',
              options: ['Hardpoint', 'Search and Destroy', 'Team Deathmatch', 'Free for All'],
              correctAnswer: 'Search and Destroy'
            }
          ]
        },
        {
          title: 'Quiz su BioShock Infinite',
          image: 'https://image.api.playstation.com/vulcan/img/cfn/11307sTZ0IfHm2mu2m-Bv67cCZdanpm3BrdhlSEdrfCM_Lk4_LU8iLKiFXzeca0FX_xWI8YQTxGjcbyQjPENYMTj7gE6a0kt.png',
          questions: [
            {
              text: 'Chi è il protagonista di BioShock Infinite?',
              options: ['Booker DeWitt', 'Jack Ryan', 'Andrew Ryan', 'Sander Cohen'],
              correctAnswer: 'Booker DeWitt'
            },
            {
              text: 'Qual è il nome della città fluttuante in cui si svolge BioShock Infinite?',
              options: ['Columbia', 'Rapture', 'Neptune\'s Bounty', 'Arcadia'],
              correctAnswer: 'Columbia'
            },
            {
              text: 'Qual è il nome della donna che Booker deve salvare in BioShock Infinite?',
              options: ['Elizabeth', 'Anna', 'Daisy', 'Rosalind'],
              correctAnswer: 'Elizabeth'
            },
            {
              text: 'Quale gruppo rivoluzionario si oppone al governo di Columbia in BioShock Infinite?',
              options: ['Vox Populi', 'Founders', 'Splicers', 'Little Sisters'],
              correctAnswer: 'Vox Populi'
            },
            {
              text: 'Qual è il potere speciale che Elizabeth può usare per aiutare Booker?',
              options: ['Aprire Tear', 'Lanciare Fulmini', 'Teletrasportarsi', 'Curare Ferite'],
              correctAnswer: 'Aprire Tear'
            }
          ]
        },
        {
          title: 'Quiz su Dead Space',
          image: 'https://cdn1.epicgames.com/offer/4ec958d5e4b6429aadbc116cee0b6ea0/EGS_DeadSpace_MotiveStudio_S2_1200x1600-551c16d068cab45b02149e15a43c2413',
          questions: [
            {
              text: 'Chi è il protagonista di Dead Space?',
              options: ['Isaac Clarke', 'John Carver', 'Ethan Thomas', 'Alex Mercer'],
              correctAnswer: 'Isaac Clarke'
            },
            {
              text: 'Quale tipo di creatura è il principale nemico in Dead Space?',
              options: ['Necromorfi', 'Xenomorfi', 'Mutanti', 'Zombi'],
              correctAnswer: 'Necromorfi'
            },
            {
              text: 'Qual è il nome della nave spaziale in cui si svolge Dead Space?',
              options: ['USG Ishimura', 'Nostromo', 'Endeavour', 'Sulaco'],
              correctAnswer: 'USG Ishimura'
            },
            {
              text: 'Quale dispositivo utilizza Isaac per curare le sue ferite?',
              options: ['Med Pack', 'Stimpak', 'Nano Gel', 'Health Serum'],
              correctAnswer: 'Med Pack'
            },
            {
              text: 'Quale equipaggiamento è iconico di Isaac Clarke in Dead Space?',
              options: ['Tuta da Ingegnere', 'Armatura Potenziata', 'Casco Antiradiazioni', 'Scudo Energetico'],
              correctAnswer: 'Tuta da Ingegnere'
            }
          ]
        },
        {
          title: 'Quiz su Half-Life 2',
          image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Half-Life_2_cover.jpg/220px-Half-Life_2_cover.jpg',
          questions: [
            {
              text: 'Chi è il protagonista di Half-Life 2?',
              options: ['Gordon Freeman', 'Barney Calhoun', 'Adrian Shephard', 'Eli Vance'],
              correctAnswer: 'Gordon Freeman'
            },
            {
              text: 'Qual è il nome dell\'organizzazione aliena antagonista in Half-Life 2?',
              options: ['Combine', 'Xen', 'Black Mesa', 'Aperture Science'],
              correctAnswer: 'Combine'
            },
            {
              text: 'Quale arma iconica utilizza Gordon Freeman in Half-Life 2?',
              options: ['Gravity Gun', 'Portal Gun', 'Pulse Rifle', 'Crowbar'],
              correctAnswer: 'Gravity Gun'
            },
            {
              text: 'Qual è il nome della città principale in cui si svolge Half-Life 2?',
              options: ['City 17', 'City 51', 'Ravenholm', 'Black Mesa East'],
              correctAnswer: 'City 17'
            },
            {
              text: 'Chi è l\'alleato e interesse amoroso di Gordon in Half-Life 2?',
              options: ['Alyx Vance', 'Judith Mossman', 'Gina Cross', 'Eli Vance'],
              correctAnswer: 'Alyx Vance'
            }
          ]
        },
        {
          title: 'Quiz su StarCraft II: Wings of Liberty',
          image: 'https://m.media-amazon.com/images/I/71hhTDHzQqL._AC_UF1000,1000_QL80_.jpg',
          questions: [
            {
              text: 'Chi è il protagonista principale di StarCraft II: Wings of Liberty?',
              options: ['Jim Raynor', 'Sarah Kerrigan', 'Arcturus Mengsk', 'Zeratul'],
              correctAnswer: 'Jim Raynor'
            },
            {
              text: 'Qual è la razza aliena con cui combattono gli umani in StarCraft II?',
              options: ['Zerg', 'Protoss', 'Terran', 'Khalai'],
              correctAnswer: 'Zerg'
            },
            {
              text: 'Qual è il nome della nave di Raynor in StarCraft II?',
              options: ['Hyperion', 'Norad II', 'Gantrithor', 'Leviathan'],
              correctAnswer: 'Hyperion'
            },
            {
              text: 'Quale unità Terran può volare e attaccare sia aerei che unità di terra?',
              options: ['Banshee', 'Viking', 'Battlecruiser', 'Wraith'],
              correctAnswer: 'Viking'
            },
            {
              text: 'Qual è l\'obiettivo principale di Raynor in Wings of Liberty?',
              options: ['Rovesciare Arcturus Mengsk', 'Salvare Kerrigan', 'Distruggere i Protoss', 'Trovare artefatti Xel\'Naga'],
              correctAnswer: 'Rovesciare Arcturus Mengsk'
            }
          ]
        },
        {
          title: 'Quiz su Age of Empires III',
          image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2477660/capsule_616x353.jpg?t=1691100434',
          questions: [
            {
              text: 'In quale epoca storica è ambientato Age of Empires III?',
              options: ['Era coloniale', 'Medioevo', 'Antica Roma', 'Rinascimento'],
              correctAnswer: 'Era coloniale'
            },
            {
              text: 'Qual è l\'obiettivo principale in Age of Empires III?',
              options: ['Costruire un impero', 'Conquistare città-stato', 'Commerciare con altre civiltà', 'Esplorare nuove terre'],
              correctAnswer: 'Costruire un impero'
            },
            {
              text: 'Quale civiltà non è giocabile in Age of Empires III?',
              options: ['Romani', 'Spagnoli', 'Francesi', 'Olandesi'],
              correctAnswer: 'Romani'
            },
            {
              text: 'Quale risorsa non è presente in Age of Empires III?',
              options: ['Oro', 'Legno', 'Cibo', 'Pietra'],
              correctAnswer: 'Pietra'
            },
            {
              text: 'Quale unità è esclusiva delle civiltà europee in Age of Empires III?',
              options: ['Moschettiere', 'Samurai', 'Arciere', 'Elefante da guerra'],
              correctAnswer: 'Moschettiere'
            }
          ]
        },
        {
          title: 'Quiz su Diablo II',
          image: 'https://image.api.playstation.com/vulcan/ap/rnd/202106/0202/TaSFMTZoICnUWcXVmmBsBKlj.jpg',
          questions: [
            {
              text: 'Chi è il principale antagonista in Diablo II?',
              options: ['Diablo', 'Mephisto', 'Baal', 'Duriel'],
              correctAnswer: 'Diablo'
            },
            {
              text: 'Quale classe non è disponibile in Diablo II?',
              options: ['Druido', 'Paladino', 'Assassino', 'Barbaro'],
              correctAnswer: 'Assassino'
            },
            {
              text: 'Quale atto di Diablo II si svolge a Lut Gholein?',
              options: ['Atto II', 'Atto I', 'Atto III', 'Atto IV'],
              correctAnswer: 'Atto II'
            },
            {
              text: 'Qual è il nome dell\'espansione di Diablo II?',
              options: ['Lord of Destruction', 'Reaper of Souls', 'Hellfire', 'Rise of the Necromancer'],
              correctAnswer: 'Lord of Destruction'
            },
            {
              text: 'Quale oggetto permette di creare combinazioni magiche in Diablo II?',
              options: ['Horadric Cube', 'Stone of Jordan', 'Runestone', 'Soul Shard'],
              correctAnswer: 'Horadric Cube'
            }
          ]
        },
        {
          title: 'Quiz su Star Wars: Knights of the Old Republic',
          image: 'https://lumiere-a.akamaihd.net/v1/images/game_poster_knightsoftheoldrepub_1_d341747d.jpeg?region=0,0,500,750',
          questions: [
            {
              text: 'Chi è il protagonista di Star Wars: Knights of the Old Republic?',
              options: ['Revan', 'Bastila', 'Carth', 'Malak'],
              correctAnswer: 'Revan'
            },
            {
              text: 'Qual è il nome dell\'astronave del protagonista in Knights of the Old Republic?',
              options: ['Ebon Hawk', 'Millennium Falcon', 'Razor Crest', 'Slave I'],
              correctAnswer: 'Ebon Hawk'
            },
            {
              text: 'Quale pianeta non è visitabile in Knights of the Old Republic?',
              options: ['Naboo', 'Tatooine', 'Kashyyyk', 'Manaan'],
              correctAnswer: 'Naboo'
            },
            {
              text: 'Quale classe non è selezionabile all\'inizio del gioco?',
              options: ['Sith Warrior', 'Scout', 'Soldier', 'Scoundrel'],
              correctAnswer: 'Sith Warrior'
            },
            {
              text: 'Quale personaggio può essere un compagno del protagonista in Knights of the Old Republic?',
              options: ['HK-47', 'Boba Fett', 'Chewbacca', 'Lando Calrissian'],
              correctAnswer: 'HK-47'
            }
          ]
        },
        {
          title: 'Quiz su Half-Life',
          image: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/70/capsule_616x353.jpg?t=1700269108',
          questions: [
            {
              text: 'Qual è il nome del protagonista di Half-Life?',
              options: ['Gordon Freeman', 'Barney Calhoun', 'Adrian Shephard', 'Eli Vance'],
              correctAnswer: 'Gordon Freeman'
            },
            {
              text: 'Quale arma è iconica del protagonista di Half-Life?',
              options: ['Crowbar', 'Gravity Gun', 'Portal Gun', 'Pulse Rifle'],
              correctAnswer: 'Crowbar'
            },
            {
              text: 'Qual è il nome del complesso scientifico dove si svolge Half-Life?',
              options: ['Black Mesa', 'Aperture Science', 'Combine Citadel', 'White Forest'],
              correctAnswer: 'Black Mesa'
            },
            {
              text: 'Quale evento catastrofico dà inizio alla trama di Half-Life?',
              options: ['Resonance Cascade', 'Nuclear Explosion', 'Alien Invasion', 'Robot Uprising'],
              correctAnswer: 'Resonance Cascade'
            },
            {
              text: 'Chi è il misterioso personaggio che osserva il protagonista in Half-Life?',
              options: ['G-Man', 'Dr. Breen', 'The Administrator', 'Vortigaunt'],
              correctAnswer: 'G-Man'
            }
      ]
    }
  ];

  getQuizzes(): Quiz[] {
    return this.quizzes;
  }

  getQuiz(index: number): Quiz {
    return this.quizzes[index];
  }
}
