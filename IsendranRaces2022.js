var iFileName = "Isendran Races 2022";
RequiredSheetVersion(13);
// This file adds all material from the GMBDB to MPMB's Character Record Sheet

// Define the source
SourceList["GMBDB"] = {
	name : "GMBinderDBarber96b",
	abbreviation : ["GMBDB"],
	group : "Dbarber96b",
	url : "https://www.gmbinder.com/share/-Mf4WqjU3tb8hObvek2u",
	date : "2021/07/29"
};
RaceList["kender"] = {
	regExpSearch : /^(?=.*kender).*$/i,
	name : "Kender",
    source : [["UA:RHoK", 1]],
    plural : "Kender",
    size : 4,
    speed : {
        walk : { spd : 30, enc : 20}
    },
    languageProfs : ["Common", 1],
    savetxt : { immune : ["frightened"]},
    skillstxt : "Choose one from Insight, Investigation, Sleight of Hand, Stealth, and Survival",
    scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
    features : {
        "taunt" : {
            name : "Taunt",
            minlevel : 1,
            usages : "Proficiency bonus per ",
            usagescalc : "event.value = How('Proficiency Bonus');",
            recovery : "long rest",
            action : [["bonus action", ""]],
            eval: function () {
                var Options = ["Intelligence", "Wisdom", "Charisma"];
                var choice = AskUserOptions('Taunt', 'The Kender race feature "Taunt" offers a choice of what ability modifier should be used to calculate the saving throw DC. Make the selection to update the sheet accordingly. You can only change this selection by removing the Kender race.', Options, 'radio', true);
                var revisedTaunt = "Taunt: As a bonus action I can taunt a creature within 60 ft that can hear and understand me. They must make a Wisdom save of DC 8 + " + choice + " modifier + Proficiency bonus. If failed, they have disadvantage on attack rolls not made against me until the start of my next turn. I can do this a number of times per long rest equal to my Proficiency Bonus.";
                Value("Racial Traits", What("Racial Traits").replace(/Taunt:.*/, '') + revisedTaunt);
            }

        }
    },
    trait : "Kender" + 
    "\n \u2022 Fearless: I am immune to the frightened condition." +
    "\n \u2022 Taunt: As a bonus action I can taunt a creature within 60 ft that can hear and understand me. They must make a Wisdom save of DC 8 + (Intelligence, Wisdom, or Charisma) modifier + Proficiency bonus. If failed, they have disadvantage on attack rolls not made against me until the start of my next turn. I can do this a number of times per long rest equal to my Proficiency Bonus."
};
RaceList["half-kender"] = {
	regExpSearch : /^(?=.*half)(?=.*kender).*$/i,
	name : "Half-kender",
	source : ["GMBDB"],
	plural : "Half Kender",
	size : 3,
	speed : {walk : { spd : 30, enc : 20 }},
	weaponProfs : [false, false, ["quarterstaff", "shortsword", "shortbow"]],
	languageProfs : ["Kenderspeak", 1],
	skills : ["Perception", "Sleight of Hand"],
	toolProfs : ["Thieves' tools"],
	dmgres : ["Poison"],
	savetxt : { adv_vs : ["frightened"]},
	age : " reach adulthood at age 20 and live around 100 years.",
	hheight : " range from under 5 to 5 1/2 feet tall (4'5\" + 2d6\")",
	weight : " weigh around 100 lb (75 + 2d6 / 1d6 lb)",
	heightMetric : " range from under 1,5 to 1,7 metres tall (135 + 5d6 cm)",
	weightMetric : " weigh around 45 kg (35 + 5d6 / 10 kg)",
	scores : [0, 2, 1, 0, 0, 1],
	trait : "Kender (+2 Dexterity, +1 Constitution, +1 Charisma)\n\nFearlessess: I have advantage on saving throws against being frightened .\n\nTaunt: I have advantage on Charisma (Performance) checks to taunt a creature and make it lose its temper. A creature might turn hostile against me."
};
RaceList["half-dwarf"] = {
	regExpSearch : /^(?=.*half)(?=.*dwarf).*$/i,
	name : "Half-dwarf",
	source : ["GMBDB"],
	plural : "Half Dwarves",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Dwarvish"],
	skills : [ "Survival"],
	vision : [["Darkvision", 60]],
	savetxt : { adv_vs : ["poison"] },
	dmgres : ["Poison"],
	weaponProfs : [false, false, ["battleaxe", "handaxe", "warhammer", "war pick"]],
	armorProfs : [true, true, false, false],
	toolProfs : [["Smith, brewer, or mason tools", 1]],
	age : " are considered young until they are 30 and live about 200 years",
	height : " stand between 4 1/2 and 5 1/2 feet tall (4' + 2d4\")",
	weight : " weigh around 150 lb (130 + 2d4 / 2d6 lb)",
	heightMetric : " stand between 1,3 and 1,6 metres tall (120 + 5d4 cm)",
	weightMetric : " weigh around 75 kg (60 + 5d4 / 10 kg)",
	scores : [0, 0, 2, 0, 0, 0],
	trait : "Half Dwarf (+2 Constitution, +1 two other ability scores)\n\nDwarven Resilience: You have advantage on saving throws against poisoned and you have resistance against poison damage."
};
RaceList["half-gnome"] = {
	regExpSearch : /^(?=.*half)(?=.*gnome).*$/i,
	name : "Half-gnome",
	source : ["GMBDB"],
	plural : "Half Gnomes",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Gnomish", 1],
	weaponProfs : [false, false, ["hand crossbow", "shortsword"]],
	skills : [ "Investigation"],
	toolProfs : ["Tinker's tools"],
	vision : [["Darkvision", 60]],
	savetxt : { text : ["Adv. on Int/Wis/Cha saves vs. magic"] },
	age : " are considered young until they are 35 and live about 325 years",
	height : " stand between 3 1/2 and 4 1/2 feet tall (4' + 2d4\")",
	weight : " weigh around 100 lb (75 + 2d4 / 1d6 lb)",
	heightMetric : " stand between 1 and 1,2 metres tall (100 + 5d4 cm)",
	weightMetric : " weigh around 45 kg (35 + 5d4 / 10 kg)",
	scores : [0, 0, 2, 0, 0, 0],
	trait : "Half Gnome (+2 Intelligence, +1 two other ability scores)\n\nArtificer's Lore: Add twice my proficiency bonus to Intelligence (History) checks with magic, alchemical, and technological items."
};
