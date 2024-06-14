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
