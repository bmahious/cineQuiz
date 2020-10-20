const QuizQuestions = [
    {
        fournisseur: "Donkey Geek (https://www.youtube.com/c/DonkeyGeek)",
        sujet: "Application Marvel Quiz pour apprentissage React JS",
        quizz: {
            debutant: [
                {
                    id: 0,
                    question: "Qui a incarné le rôle principal du film 'Le Radin' ?",
                    options: [
                        "Jean Dujardin",
                        "Dany Boon",
                        "Christophe Lambert",
                        "Gérard Dépardieu"
                    ],
                    answer: "Dany Boon",
                    heroId: 1009362
                },
                {
                    id: 1,
                    question: "Laquelle de ces séries est française ?",
                    options: [
                        "Family Business",
                        "Lost in Space",
                        "La Liste Noire",
                        "The Family"
                    ],
                    answer: "Family Business",
                    heroId: 1009718
                },
                {
                    id: 2,
                    question: "Quelle est l’actrice qui a incarnée le rôle principal avec Dany Boon dans le film ‘Le plan parfait’ ?",
                    options: [
                        "Laurence Arné",
                        "Virginie Efira",
                        "Marion Cottillard",
                        "Diane Kruger"
                    ],
                    answer: "Diane Kruger",
                    heroId: 1009610
                },
                {
                    id: 3,
                    question: "Dans quel film peut-on voir la chanteuse ‘Louane’ incarner le rôle principal ?",
                    options: [
                        "La vie d’Adèle",
                        "La famille Bélier",
                        "La belle époque",
                        "Le fabuleux destin d’Amélie"
                    ],
                    answer: "La famille Bélier",
                    heroId: 1009718
                },
                {
                    id: 4,
                    question: "Comment s’appelle le réalisateur de la série ‘Dix pour cents’ ?",
                    options: [
                        "Cédric Klapisch",
                        "Bertrand Tavernier",
                        "Jean-Pierre Jeunet",
                        "Luc Besson"
                    ],
                    answer: "Cédric Klapisch",
                    heroId: 1009664
                },
                {
                    id: 5,
                    question: "Dans quel de ces films Catherine Deneuve ne joue-t-elle pas ?",
                    options: [
                        "Huit femme",
                        "Place Vandôme",
                        "Les amants du pont neuf",
                        "Belle maman"
                    ],
                    answer: "Les amants du pont neuf",
                    heroId: 1009351
                },
                {
                    id: 6,
                    question: "Quelle est l’actrice qui a jouée un rôle à la fois dans la série ‘Family Business’ et ‘Dix pour cents’ ?",
                    options: [
                        "Julia Piaton",
                        "Camille Cottin",
                        "Julia Piaton",
                        "Liliane Rovère"
                    ],
                    answer: "Liliane Rovère",
                    heroId: 1009662
                },
                {
                    id: 7,
                    question: "Comment s'appelle le personnage interprété par Jonathan Cohen dans la série des 'Family Business' ?",
                    options: [
                        "Gérard",
                        "Charles",
                        "Joseph",
                        "Olivier"
                    ],
                    answer: "Joseph ",
                    heroId: 1009368
                },
                {
                    id: 8,
                    question: "Quel acteur emblématique a joué dans les films 'Le Grand blond', 'Dupont Lajoie' ou encore ‘Les Fugitifs’ ?",
                    options: [
                        "Pierre Richard ",
                        "Jean Carmet",
                        "François Cluzet",
                        "Luc Besson"
                    ],
                    answer: "Jean Carmet",
                    heroId: 1009220
                },
                {
                    id: 9,
                    question: "Qui est l’acteur qui a réalisé le film ‘les petits mouchoirs’ ?",
                    options: [
                        "Dany Boon",
                        "Guillaume Canet",
                        "François Cluzet",
                        "Gérard Depardieu"
                    ],
                    answer: "Guillaume Canet",
                    heroId: 1009662
                }
            ],
            "confirme": [
                {
                    id: 0,
                    question: "Qui est Logan dans la bande dessinée de Marvel Comics 'X-Men' ?",
                    options: [
                        "Cyclope",
                        "Colossus",
                        "Wolverine",
                        "Caliban"
                    ],
                    answer: "Wolverine",
                    heroId: 1009718
                },
                {
                    id: 1,
                    question: "Quel super héros est intéressé par Sue Storm?",
                    options: [
                        "X-Men",
                        "Illuminati",
                        "Spider-Man",
                        "Namor"
                    ],
                    answer: "Namor",
                    heroId: 1009466
                },
                {
                    id: 2,
                    question: "Quel humain devient surpuissant grâce à une armure de haute technologie ?",
                    options: [
                        "Cyclope",
                        "Iron Man",
                        "Wolverine",
                        "Thor"
                    ],
                    answer: "Iron Man",
                    heroId: 1009368
                },
                {
                    id: 3,
                    question: "Laquelle de ces propositions désigne un ennemi emblématique de Spider-Man ?",
                    options: [
                        "Lizard",
                        "Thanos",
                        "Void",
                        "Green Goblin"
                    ],
                    answer: "Green Goblin",
                    heroId: 1014985
                },
                {
                    id: 4,
                    question: "GHOST RIDER est connu comme étant",
                    options: [
                        "Le diable motard",
                        "L'esprit de la haine",
                        "L'esprit de vengeance",
                        "Le crâne rouge"
                    ],
                    answer: "L'esprit de vengeance",
                    heroId: 1009318
                },
                {
                    id: 5,
                    question: "Avant de devenir Radioactive Man, Chen Lu était ..",
                    options: [
                        "Un espion",
                        "Un physicien nucléaire",
                        "Un soldat",
                        "Un pilote"
                    ],
                    answer: "Un physicien nucléaire",
                    heroId: 1009526
                },
                {
                    id: 6,
                    question: "Quel super-héros ayant perdu la vue possède des organes sensoriels développés ?",
                    options: [
                        "Daredevil",
                        "Flash",
                        "Superman",
                        "Captain America"
                    ],
                    answer: "Daredevil",
                    heroId: 1009262
                },
                {
                    id: 7,
                    question: "Avant de se tourner vers une vie de crime, Mysterio était...",
                    options: [
                        "Cascadeur",
                        "Artiste d'effets spéciaux",
                        "Magicien",
                        "Sapeur pompier"
                    ],
                    answer: "Artiste d'effets spéciaux",
                    heroId: 1010952
                },
                {
                    id: 8,
                    question: "Fin Fang Foom est un alien de ..",
                    options: [
                        "Krypton",
                        "Maklu IV",
                        "Mars",
                        "Vulcan"
                    ],
                    answer: "Maklu IV",
                    heroId: 1009303
                },
                {
                    id: 9,
                    question: "DOCTOR DOOM a fréquenté le même collège que...",
                    options: [
                        "Tony Stark",
                        "Peter Parker",
                        "Reed Richards",
                        "Bruce Banner"
                    ],
                    answer: "Reed Richards",
                    heroId: 1009281
                }
            ],
            "expert": [
                {
                    id: 0,
                    question: "Quand elle a travaillé pour Hydra, la première mission de Spider-Woman était de...",
                    options: [
                        "Séduire Iron-Man",
                        "Séduire Spider-Man",
                        "Tuer The Black Widow",
                        "Tuer Nick Fury"
                    ],
                    answer: "Tuer Nick Fury",
                    heroId: 1009608
                },
                {
                    id: 1,
                    question: "Quel super-héros créé par Marvel Comics est aveugle de naissance ?",
                    options: [
                        "Flash",
                        "Thor",
                        "Cyclope",
                        "Stick"
                    ],
                    answer: "Stick",
                    heroId: 1009626
                },
                {
                    id: 2,
                    question: "Spider-Man a été sollicité pour créer la Spider-Mobile par la société de publicité de ...",
                    options: [
                        "Carter Lombardo",
                        "Max Shrek",
                        "Reed Richards",
                        "Spider Company"
                    ],
                    answer: "Carter Lombardo",
                    heroId: 1009610
                },
                {
                    id: 3,
                    question: "Quelle héroïne de Daredevil est une tueuse professionnelle ?",
                    options: [
                        "Ultron",
                        "Catwoman",
                        "Elektra",
                        "Wonder Woman"
                    ],
                    answer: "Elektra",
                    heroId: 1009288
                },
                {
                    id: 4,
                    question: "Où réside Mandarin devenu récemment le patron du Sin-Cong Wong Chu?",
                    options: [
                        "The Valley of Spirits",
                        "The Mountains of Asgard",
                        "The Canyons of Atlantis",
                        "The Cave of Souls"
                    ],
                    answer: "The Valley of Spirits",
                    heroId: 1009421
                },
                {
                    id: 5,
                    question: "Quel super-héros possède les mêmes pouvoirs que Spider-Man ?",
                    options: [
                        "Venom",
                        "Green Arrow",
                        "Blade",
                        "Bizarro"
                    ],
                    answer: "Venom",
                    heroId: 1010788
                },
                {
                    id: 6,
                    question: "Nick Fury a un frère devenu méchant. Quel est son nom?",
                    options: [
                        "Venom",
                        "Viper",
                        "The Red Skull",
                        "Scorpio"
                    ],
                    answer: "Scorpio",
                    heroId: 1011007
                },
                {
                    id: 7,
                    question: "Miss Marvel n'a jamais été connue sous le nom de:",
                    options: [
                        "Captain Marvel",
                        "Rogue",
                        "Warbird",
                        "Binary"
                    ],
                    answer: "Rogue",
                    heroId: 1010338
                },
                {
                    id: 8,
                    question: "Quelle est l'héroïne proche du Docteur Strange créée en 1964 ?",
                    options: [
                        "Felina",
                        "Clea",
                        "Monica",
                        "Elsa"
                    ],
                    answer: "Clea",
                    heroId: 1009239
                },
                {
                    id: 9,
                    question: "Étant enfant, Storm a tenté de ...",
                    options: [
                        "Incendier un village avec un coup de foudre",
                        "Devenir le chef d'un gang",
                        "Voler la voiture du professeur Xavier",
                        "Faire les poches du professeur Xavier"
                    ],
                    answer: "Faire les poches du professeur Xavier",
                    heroId: 1009629
                }
            ]
        }
    }
];

export default QuizQuestions;