document.addEventListener("DOMContentLoaded", () => {
    const characters = [
        { 
            name: "Monkey D. Luffy", 
            description: "Captain of the Straw Hat Pirates and aspiring Pirate King.",
            bounty: "3,000,000,000 Berries",
            fightingStyle: "Gum-Gum Fruit abilities",
            image: "images/Luffy.jpg",
            quote: "\"I'm gonna be the King of the Pirates!\"",
            achievements: [
                "Defeated Don Krieg, Arlong, Crocodile, and more",
                "Declared war on the World Government at Enies Lobby",
                "Escaped Impel Down and participated in the Summit War"
            ]
        },
        { 
            name: "Roronoa Zoro", 
            description: "Swordsman of the Straw Hat Pirates, aiming to be the world's greatest swordsman.",
            bounty: "1,111,000,000 Berries",
            fightingStyle: "Three-Sword Style",
            image: "images/Zoro.jpg",
            quote: "\"Nothing happened.\"",
            achievements: [
                "Defeated Daz Bones, Kaku, Pica, and more",
                "Survived the pain of Luffy at Thriller Bark",
                "Trained with Dracule Mihawk, the World's Strongest Swordsman"
            ]
        },
        { 
            name: "Nami", 
            description: "Navigator of the Straw Hat Pirates and a talented cartographer.",
            bounty: "366,000,000 Berries",
            fightingStyle: "Clima-Tact and Weather Manipulation",
            image: "images/Nami.jpg",
            quote: "\"I love money and tangerines!\"",
            achievements: [
                "Helped save Alabasta from Crocodile",
                "Defeated Kalifa at Enies Lobby",
                "Developed advanced weather-based attacks"
            ]
        },
        { 
            name: "Usopp", 
            description: "Sniper of the Straw Hat Pirates, known for his lies and cunning.",
            bounty: "500,000,000 Berries",
            fightingStyle: "Sniping and Inventive Weaponry",
            image: "images/Usopp.jpg",
            quote: "\"I am the great Captain Usopp!\"",
            achievements: [
                "Defeated Perona at Thriller Bark",
                "Sniped Sugar at Dressrosa, saving Luffy and Law",
                "Invented numerous gadgets and weapons"
            ]
        },
        { 
            name: "Sanji", 
            description: "Cook of the Straw Hat Pirates, known for his martial arts and cooking skills.",
            bounty: "1,032,000,000 Berries",
            fightingStyle: "Black Leg Style",
            image: "images/Sanji.jpg",
            quote: "\"I won't let anyone starve!\"",
            achievements: [
                "Fought against Jabra at Enies Lobby",
                "Joined the raid on Big Mom's territory",
                "Rescued Nami and Robin from multiple threats"
            ]
        },
        { 
            name: "Tony Tony Chopper", 
            description: "Doctor of the Straw Hat Pirates, a reindeer with a human-human fruit.",
            bounty: "1,000 Berries",
            fightingStyle: "Medical Expertise and Devil Fruit Transformations",
            image: "images/Chopper.jpg",
            quote: "\"I'm not a reindeer!\"",
            achievements: [
                "Developed the Rumble Ball for enhanced transformations",
                "Saved countless lives with his medical skills",
                "Fought against Kumadori at Enies Lobby"
            ]
        },
        { 
            name: "Nico Robin", 
            description: "Archaeologist of the Straw Hat Pirates, able to read Poneglyphs.",
            bounty: "930,000,000 Berries",
            fightingStyle: "Flower-Flower Fruit abilities",
            image: "images/Robin.jpg",
            quote: "\"I want to live!\"",
            achievements: [
                "Helped the crew decipher ancient texts and maps",
                "Fought against Spandam and his forces at Enies Lobby",
                "Survived the Buster Call at Ohara"
            ]
        },
        { 
            name: "Franky", 
            description: "Shipwright of the Straw Hat Pirates, a cyborg with powerful abilities.",
            bounty: "394,000,000 Berries",
            fightingStyle: "Cyborg Modifications and Engineering Skills",
            image: "images/Franky.jpg",
            quote: "\"SUPER!\"",
            achievements: [
                "Built the Thousand Sunny ship",
                "Fought against Senor Pink at Dressrosa",
                "Upgraded himself with various weapons and gadgets"
            ]
        },
        { 
            name: "Brook", 
            description: "Musician of the Straw Hat Pirates, a skeleton with the power of the revive-revive fruit.",
            bounty: "383,000,000 Berries",
            fightingStyle: "Swordsmanship and Music-Based Attacks",
            image: "images/Brook.jpg",
            quote: "\"Yohohoho! Skull joke!\"",
            achievements: [
                "Defeated Ryuma at Thriller Bark",
                "Rescued Robin from Black Maria at Wano",
                "Guarded the Thousand Sunny at Whole Cake Island"
            ]
        },
        { 
            name: "Jinbe", 
            description: "Helmsman of the Straw Hat Pirates, a fish-man and former Warlord of the Sea.",
            bounty: "1,100,000,000 Berries",
            fightingStyle: "Fish-Man Karate and Fish-Man Jujutsu",
            image: "images/Jimbei.jpg",
            quote: "\"Let us put an end to the hatred.\"",
            achievements: [
                "Fought against Big Mom's forces at Whole Cake Island",
                "Played a key role in the Marineford War",
                "Helped liberate Fish-Man Island"

            ]
        }
    ];

    const episodes = [
        { 
            title: "East Blue Saga", 
            description: "The journey begins as Luffy sets out from Foosha Village.", 
            image: "images/east-blue.avif" 
        },
        { 
            title: "Alabasta Saga", 
            description: "The Straw Hats fight to save Alabasta from a civil war orchestrated by Crocodile.", 
            image: "images/alabasta.avif" 
        },
        { 
            title: "Skypiea Saga", 
            description: "A legendary island in the sky and the fight against the false god Enel.", 
            image: "images/skypiea.avif" 
        },
        { 
            title: "Water 7 Saga", 
            description: "The crew fights against CP9 to save Robin in the city of Water 7.", 
            image: "images/water-7.avif" 
        },
        { 
            title: "Enies Lobby Saga", 
            description: "The crew declares war against the world government to save Robin.", 
            image: "images/enies-lobby.avif" 
        },
        { 
            title: "Thriller Bark Saga", 
            description: "A haunted ship full of zombies and the fight against Gecko Moria.", 
            image: "images/thriller-bark.avif"
        },
        { 
            title: "Sabaody Saga", 
            description: "The crew gets separated by a revolutionary Kuma.", 
            image: "images/sabaody.avif" 
        },
        { 
            title: "Summit War Saga", 
            description: "The battle at Marineford to save Ace from execution.", 
            image: "images/summit-war.avif" 
        },
        { 
            title: "Fish-Man Island Saga", 
            description: "The Straw Hats' journey to Fish-Man Island and the fight against Hody Jones.", 
            image: "images/fish-man-island.avif" 
        },
        { 
            title: "Dressrosa Saga", 
            description: "The fight against Doflamingo to free Dressrosa from tyranny.", 
            image: "images/dressrosa.avif" 
        },
        { 
            title: "Whole Cake Island Saga", 
            description: "The mission to retrieve Sanji from Big Mom's territory.", 
            image: "images/whole-cake-island.avif" 
        },
        { 
            title: "Wano Country Saga", 
            description: "The fight against Kaido and the liberation of Wano Country.", 
            image: "images/wano.avif" 
        }
    ];

    const characterList = document.getElementById("characterList");
    if (characterList) {
        characters.forEach(character => {
            const characterDiv = document.createElement("div");
            characterDiv.className = "character";
            characterDiv.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
                <h3>${character.name}</h3>
                <p>${character.description}</p>
                <p><strong>Bounty:</strong> ${character.bounty}</p>
                <p><strong>Fighting Style:</strong> ${character.fightingStyle}</p>
                <p><strong>Quote:</strong> "${character.quote}"</p>
                <ul>
                    <strong>Achievements:</strong>
                    ${character.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            `;
            characterList.appendChild(characterDiv);
        });
    }

    const episodeList = document.getElementById("episodeList");
    if (episodeList) {
        episodes.forEach(episode => {
            const episodeDiv = document.createElement("div");
            episodeDiv.className = "episode";
            episodeDiv.innerHTML = `
                <img src="${episode.image}" alt="${episode.title}">
                <h3>${episode.title}</h3>
                <p>${episode.description}</p>
            `;
            episodeList.appendChild(episodeDiv);
        });
    }
});
