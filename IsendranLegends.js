/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds Isendran Campaign material
	Code by:	DBarber96b
	Date:		2021-07-23 (sheet v13)
*/

var iFileName = "Legends of Isendran";
RequiredSheetVersion(13);

SourceList["LoI"] = {
	name : "Legends of Isendran",
	abbreviation : ["LoI"],
	group : "Primary Sources",
	url : "https://www.gmbinder.com/share/-Mf4WqjU3tb8hObvek2u",
	date : "2022/07/21"
};
BackgroundList["ashlander"] = {
	regExpSearch : /ashlander/i,
	name : "Ashlander",
	source : ["LoI"],
	skills : ["Perception", "Stealth"],
	gold : 10,
	equipright : [
		["Traveler's Clothers", "", 3],
		["Gaming Set", "", 1],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Ashland Lingo",
	trait : [
		"I do my best to interact outside of my kin, but I often come off as awkward.",
		"I try not to act the way people expect me to.",
		"I constantly ask questions of my friends in a better attempt to understand the world.",
		"I feel the weight of an entire people on my shoulders, and I feel responsible for their perception in the wider world.",
		"I am over defensive about my heritage.",
		"I tell the stories of my people around the fire to anyone who will listen, in an attempt to feel at home.",
		"When I meet others of my heritage, I get overly excited.",
		"In confrontational situations I use humor to try and relieve the tension."
	],
	ideal : [
		["Unity",
			"Unity: I am determinded to help everyone overcome the prejudices which have plagued my kin. (Good)"
		],
		["Stand Tall",
			"Stand Tall: The best way to be accepted is to stand where we can be seen and heard, even when they don't want us to. (Chaotic)"
		],
		["Naivety",
			"Naivety: I am blind to the definition between races by choice and treat everyone as my equal. (Any)"
		],
		["Patience",
			"Patience: The Ashlands may not be popular but we have our place, and will do our part when the time comes. (Lawful)"
		],
		["Bigot",
			"Bigot: I have no problem using outsiders' perception of me as leverage to get what I want. (Evil)"
		],
		["Advocate",
			"Advocate: I have no patience for those who disrespect me or my heritage. (Any)"
		]
	],
	bond : [
		"I will make my prejudiced parents (or mentor) see reason, and show them the good of the world.",
		"I must find an ancient artifact that my kin considers sacred.",
		"I have sworn to find my people a place to exist in the world, alongside those who once thought us lesser.",
		"I will bring down the people responsible for actively speaking out against my people.",
		"My lover from a 'normal' society was stolen from me by their family. I hope to find them again one day.",
		"I must find a way to have the story of my people told, so that if we die, we will not be forgotten."
	],
	flaw : [
		"I struggle to drop the prejudices I have against non-ashlanders.",
		"I am clueless as to social customs in the world outside my own.",
		"Many of my idioms make no sense to non-ashlanders, and as such, I am often misunderstood or cause offense.",
		"I pretend not to understand the local language in order to avoid interactions I would rather not have.",
		"I publicly shame those who slight me, no matter their status.",
		"I have a weakness for the new intoxicants and other pleasures of this land."
	],
	extra : [
		"Select why you left the Ashlands",
		"Emissary",
		"Exile",
		"Fugitive",
		"Pilgrim",
		"Scout",
		"Wanderer"
	],
	toolProfs : ["Gaming Set", 1],
 	 languageProfs : [1],
	lifestyle : "poor"
};
BackgroundList["blade's guild marshal"] = {
	regExpSearch : /marshal/i,
	name : "Blade's Guild Marshal",
	source : ["LoI"],
	skills : ["Intimidation", "Insight"],
	gold : 20,
	equipleft : [
		["Blade's Guild Rank Insignia", "", ""]
	],
	equipright : [
		["Travler's clothes", "", 3],
    ["Any simple or martial weapon of your choice", "", 3],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Armory Access",
	trait : [
		"I broke a contract long ago which I hope doesnt come back to haunt me.",
		"My combat prowess is only outshined by my dashin good looks.",
		"My word is my bond.",
		"Planning the day is the most efficient way to live, I don't like it when there's no structure.",
		"I like to prepare for any eventuality",
		"I'm very aware of the cost of things and always look for the best value.",
		"There isn't a tale of the old heroes that I don't know",
		"Regardless of my appearance I adore children and always try to entertain them in cities."
	],
	ideal : [
		["Contracted",
			"Contracted: If you're going to do something, then do it exactly the way you said you would. (Lawful)"
		],
		["Honorable",
			"Honorable: Winning is worth nothing if it is not just and fair. (Good)"
		],
		["Iconoclast",
			"Iconoclast: The gods have no place interfering with the wold of mortal men, I forge my own path. (Chaotic)"
		],
		["Dependable",
			"Dependable: All things that are started must be finished. (Neutral)"
		],
		["Fineprint",
			"Fineprint: Not every agreement is what you assume it to be at first glance. (Any)"
		],
		["Loopholes",
			"Loopholes: There are always ways to cut corners when fulfilling an agreement. (Any)"
		]
	],
	bond : [
		"I took a job many years ago that was never completed, before I die I will see it done.",
		"I must make enough money to provide for my estranged family, despite their indifference to me.",
		"My parents were killed by a mercenary whom I only know the alias of, and I am secretly working to track them down.",
		"A contract I signed caused me to do terrible things to see it resolved, I must make amends.",
		"I wish to open my own branch of the Guild one day, and settle down.",
		"My lover signed a contract that took them far away from me. I long to find them and help them complete it."
	],
	flaw : [
		"I grow combative and unpredictable when I drink.",
		"My intensity can drive others away.",
		"I hold grudges and have difficulty forgiving others.",
		"I enjoy doing things others believe to be impossible.",
		"I am judgmental, especially of those I deem lazy.",
		"I work hard, but I play harder."
	],
	toolProfs : ["Smith's Tools"],
	lifestyle : "modest"
};
BackgroundList["hag raised"] = {
	regExpSearch : /hag/i,
	name : "Hag Raised",	source : ["LoI"],
	skills : ["History", "Nature"],
	gold : 5,
	equipright : [
		["Comoner's clothes", "", 4],
		["Gnarled Wand", "", ""],
		["Belt pouch (with coins)", "", 1],
		],
	feature : "Granny Always Said",
	trait : [
		"I distrust anyone who offers me anything free of charge.",
		"I am always kind to strangers I meet on the road or in the wild.",
		"I use attraction and false promises to get what I want.",
		"Sometimes I forget that not everything is a magical version of the item in question, and struggle to use simple objects because of this.",
		"I often speak aloud to myself, a throwback to the long stretches I was alone in my youth.",
		"Sometimes the hag that raised me visits my dreams or whisperes half heard secrets in my ear.",
		"I rarely speak at all, the hag that raised me was telepathic and so I think things at people and wonder why they ignore me.",
		"I am full of mis-remembered sayings, and delight in saying them in a grave tone as if I am wise."
	],
	ideal : [
		["Fairy Chaser",
			"Fairy Chaser: Freedom is anywhere you want to find it, you just have to follow the fairies. (Any)"
		],
		["Tough But Fair",
			"Tough But Fair: A harsh punishment is often needed to ensure people stay on the correct path. (Lawful)"
		],
		["Nothing for Free",
			"Nothing for Free: Everything has a price, even if it is the promise of a favor. (Lawful)"
		],
		["In Sheep's Clothing",
			"In Sheep's Clothing: A pretty face can hid a multitude of sins. [Evil]"
		],
		["Taskmaster",
			"Taskmaster: The best substitute for hard work is getting someone else to do it. (Neutral)"
		],
		["Indiscriminate",
			"Indiscriminate: It doesn't matter how you do it, as long as it gets done. (Chaotic)"
		]
	],
	bond : [
		"The hag that raised me had a sister she sent me to find, and I promised I would.",
		"I long to discover who my real parents were, the hag wouldn't say or didn't know.",
		"The day I left, the hag told me I would kill the one I love the most... I must never succumb to love.",
		"A magical mishap teleported me away from my home and I long to get back.",
		"I long to attain the power that the had that raised me possessed, at any price.",
		"One day I hope to meet the mother of all hags."
	],
	flaw : [
		"Whenever I disappoint someone, I reactively flinch or cower, expecting discipline.",
		"Old women scare me, and I avoid talking to them if possible.",
		"I have a warped view of good and evil which sometimes lands me in trouble.",
		"I criticize any and all food I eat, always stating that it isn't as good as Granny's.",
		"When something is said to me in a commanding tone, I will often start doing it before realizing I can say no.",
		"I believe that if I was ever in life threatening danger, the hag would step in and save me. This can make me reckless."
	],
	toolProfs : ["Herbalism kit"],
  	languageProfs : ["Sylvan"],
	lifestyle : "poor"
};
BackgroundList["wall walker"] = {
	regExpSearch : /^(?=.*wall)(?=.*walker).*$/i,
	name : "Wall Walker",
	source : ["LoI"],
	skills : ["Stealth", "Athletics"],
	gold : 15,
		equipright : [
		["Common clothes", "", 3],
    ["Found Trinket", ""]
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Hard To Reach",
	trait : [
		"I plan every detail before an important undertaking.",
		"I love getting to hard to reach places whether that be the top of a wall or behind a locked door.",
		"I tend to be a show-off around new people.",
		"Despite my feelings towards them, I admire the craftsmanship of any wall or structure that has stood the test of time.",
		"I prefer to think my way around problems than to face them with brute force.",
		"The idea of a life beyond the wall fascinated me, and still does every day.",
		"I boast about being the hide-and-seek champion in my town 5 years in a row.",
		"I talk about walls so often that I have to be reminded not to do so."
	],
	ideal : [
		["Aim Higher",
			"Aim Higher: There is no place too unreachable, no goal too far, if you're willing to fail a few times along the way. (Good)"
		],
		["Self-Actualisation",
			"Self-Actualisation: The strongest walls are the ones we build within, we must overcome ourselves before we can overcome any real obstacle. (Any)"
		],
		["Boundaries",
			"Boundaries: Walls are made for a reason, and it is our duty to respect those reasons. (Lawful)"
		],
		["Challenge Accepted",
			"Challenge Accepted: A wall is like any other obstacle, there is always a way to subvert them. (Neutral)"
		],
		["Control",
			"Control: Walls and laws are necessary to control cattle and people. (Evil)"
		],
		["Freedom",
			"Freedom: Walls don't just keep monsters out, the keep people in. I refuse to be confined like that. (Chaotic)"
		]
	],
	bond : [
		"I will find out what happened to my long-lost relative who went beyond the wall and never returned.",
		"I will bring back stories of my adventures to the family I left behind.",
		"I must rebuild part of the wall that collapsed, and I will find the funds to do so by adventuring.",
		"The trinket I found must have some purpose, I must find someone who knows more about it.",
		"I am determined to explore the largest building in existance someday.",
		"Whatever the cost, I must not allow the wall I was raised on to fall, and I am duty bound to answer any call to defend it."
	],
	flaw : [
		"I hate being confined, and become irritable if I'm not allowed to explore.",
		"I compare every wall I see to the one I grew up on.",
		"An accident I had once as a child keft me with a severe phobia.",
		"I'm curious to know what lies behind every locked door.",
		"Illusionary walls anger me, for a reason unknown to even me.",
		"I refer to walls by unique names I give them."
	],
  extra : [
		"Select a Connection to the Wall",
		"Orphan used by the Thieves' Guild",
		"Child of a City Guard",
		"Saw a challenge",
		"Born in the shadow of the Wall"
	],
	toolProfs : ["Climber's Kit"],
	lifestyle : "poor"
};
BackgroundList["wyvern hunter"] = {
	regExpSearch : /^(?=.*wyvern)(?=.*hunter).*$/i,
	name : "Wyvern Hunter",
	source : ["LoI"],
	skills : ["Athletics", "Survival"],
	gold : 15,
	equipleft : [
		["Leather Worker's tools", "", ""],
		["Draconic Anatomy book", "", ""]
	],
	equipright : [
		["Traveler's clothes", "", 4],
    ["Barbed Harpoon", "", 4],
    ["Hunting trap", "", 25],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Dragon Bane",
	trait : [
		"I have a disdain for drakes, they are nothing but flying vermin",
		"I always talk about my clan, for I fear if I do not, they will be forgotten.",
		"I envy dragons more than anything else, flight is a gift they squander.",
		"I boast that I've killed an ancient dragon, the truth is I have never even seen one.",
		"My first memory is the corpse of a dragon, and it has haunted me ever since.",
		"Whilst I know that metallic dragons are a force for good, I have no issues killing one. A dragon is a dragon.",
		"I tasted the meat of a dragon long ago, and it has become my preferred meal.",
		"I have trouble relating to people who have no interest in my profession."
	],
	ideal : [
		["Respect",
			"Respect: My quarries are part of nature, and do not deserve to be tormented. (Lawful)"
		],
		["Opportunist",
			"Opportunist: The easiest prey to kill is the one that never sees you coming. (Any)"
		],
		["Passive",
			"Passive: A sleeping dragon can be left, there is no good in making more trouble for the world. (Neutral)"
		],
		["Might",
			"Might: I am an apex predator, and no quarry is too great for me. (Any)"
		],
		["Patience",
			"Patience: No great feat was ever accomplished without a solid plan. (Neutral)"
		],
		["Brutality",
			"Brutality: The more horrifying a dragon's death, the better. (Evil)"
		]
	],
	bond : [
		"I will prove that I am worthy of my title.",
		"Someday I will find the ancient dragon that destroyed my clan, and it will face retribution.",
		"I have been sent by my clan to find the first Wyvern Hunter's Harpoon, once weilded by my ancestor.",
		"I will be the greatest dragon hunter that ever lived.",
		"My birth caused my clan to lose the trail of a dragon they were hunting. I am honor bound to find it once more.",
		"There must be more to me than dragons, I must discover my greater purpose."
	],
	flaw : [
		"I harbor resentment towards dragonborn, and immediately assume the worst of them",
		"I get restless when I know there is a chromatic dragon nearby, and will do everything I can to convince people to kill it.",
		"I cannot stay in the same place longer than a few days before I feel like I need to move on.",
		"I assume that everyone sees me as a force to be reckoned with.",
		"I am always trying to prove to my peers that I am the strongest in some way.",
		"I speak in draconic, and expect people to understand what I say because it is the language my clan always used."
	],
	toolProfs : ["Leather Worker's tools"],
	languageProfs : ["Draconic"],
	lifestyle : "comfortable"
};
BackgroundFeatureList["armory access"] = {
	description : "I have access to the stores of any Blade's Guild armory. Should I require any mundane simple or martial weapon, I can obtain one or two for each memeber of my party. I can also acquire studded leather armor, chain shirts, and chain mail if the armory is well stocked. Should I require any other mundane weapons or armor, I can purchase them for 50% less than their listed price.",
	source : ["GMBDB"]
};
BackgroundFeatureList["granny always said"] = {
	description : "The hag that raised me was full of useful knowledge and had an anecdote for every situation, usually based on the whimsical fey creatures she kept the company of. You absorbed much of this information and because of this you usually know what to say to fey creatures to garner their approval, or rile them up.",
	source : ["GMBDB"]
};
BackgroundFeatureList["hard to reach"] = {
	description : "Years of climb the wall and getting to places have made me a prodigious climber. As such I have a +2 to all athletics checks to climb. Additionally, if the surface is not smooth, or is man-made, I don't fall any further than 5 feet before I regain my hold.",
	source : ["GMBDB"]
};
BackgroundFeatureList["dragon bane"] = {
	description : "When I succeed on a saving throw imposed by a dragon's breath weapon, I take no damgage instead of half damage. Additionally, I have advantage on saving throws ro resist the frightened condition against dragons.",
	source : ["GMBDB"]
};
RaceList["half-kender"] = {
	regExpSearch : /^(?=.*half)(?=.*kender).*$/i,
	name : "Half-kender",
	source : ["LoI"],
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
	regExpSearch : /^(?=.*half)(?=.*dwarf).*$/i,
	name : "Half-dwarf",
	source : ["LoI"],
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
	regExpSearch : /^(?=.*half)(?=.*gnome).*$/i,
	name : "Half-gnome",
	source : ["LoI"],
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
RaceList["vaum-edaris"] = {
		regExpSearch : /vaum-edaris/i,
		name : "Vaum-Edaris",
		source : ["LoI"],
		plural : "Vaum-Edaris",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Dwarvish", "Infernal"],
		vision : [["Darkvision", 60]],
		dmgres : ["Fire"],
		age : " reach adulthood in their mid 50s and live around 225 years",
    		weaponProfs : [false, false, ["battleaxe", "handaxe", "warhammer", "light hammer"]],
		toolProfs : ["Smith's Tools"],
		height : " stand between 4 and 5 feet tall (3'8\" + 2d4\")",
		weight : " weigh around 150 lb (115 + 2d4 \xD7 2d6 lb)",
		heightMetric : " stand between 1,2 and 1,5 metres tall (110 + 5d4 cm)",
		weightMetric : " weigh around 70 kg (55 + 5d4 \xD7 4d6 / 10 kg)",
		scores : [1, 0, 1, 0, 0, 1],
		trait : "Vaum-Edaris (+1 Strength, +1 Constitution, +1 Charisma)\n\nInfernal Legacy:\n   I know the fire bolt cantrip.\n   At 3rd level, I can cast Hellish Rebuke once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast Scorching Ray once per long rest.\n   Charisma is my spellcasting ability for these spells.",
		spellcastingAbility : 6,
		spellcastingBonus : {
			name : "Infernal Legacy (level 1)",
			spells : ["fire bolt"],
			selection : ["firebolt"],
			firstCol : 'atwill'
		},
		features : {
			"hellish rebuke" : {
				name : "Infernal Legacy (level 3)",
				limfeaname : "Hellish Rebuke (3d10)",
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Infernal Legacy (level 3)",
					spells : ["hellish rebuke"],
					selection : ["hellish rebuke"],
					firstCol : "oncelr"
				},
				spellChanges : {
					"hellish rebuke" : {
						description : "Cast when taking damage, creature that dealt damage takes 3d10 Fire damage; save halves",
						changes : "Using Infernal Legacy, I cast Hellish Rebuke as if I'm using a 2nd-level spell slot, doing 3d10 damage."
					}
				}
			},
			"darkness" : {
				name : "Infernal Legacy (level 5)",
				limfeaname : "Scorching Ray",
				minlevel : 5,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Infernal Legacy (level 5)",
					spells : ["scorching ray"],
					selection : ["scorching ray"],
					firstCol : "oncelr"
				}
			}
		}
	};
RaceList["ulsanya"] = {
		regExpSearch : /^(?=.*ulsanya).*$/i,
		name : "Ulsanya",
		source : ["LoI"],
		plural : "Ulsanya",
		size : 3,
		speed : {
			walk : { spd : 35, enc : 25 }
		},
		languageProfs : ["Common", "Elvish", "Orc"],
		vision : [["Darkvision", 60]],
		savetxt : {
			text : ["Magic can't put me to sleep"],
			adv_vs : ["charmed"]
		},
		skillstxt : "Choose either Athletics or Acrobatics",
    weaponProfs : [false, false, ["handaxe", "light hammer", "longsword", "longbow"]],
		age : " reach adulthood around age 15 and often live around 100 years",
		height : " range from 5 to 6 feet tall (4'9\" + 2d8\")",
		weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
		heightMetric : " range from 1,5 to 1,8 metres tall (145 + 5d8 cm)",
		weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
		scores : [1, 1, 0, 0, 0, 0],
		trait : "Ulsanya (+1 Strength, +1 Dexterity, and +1 to another ability of score of my choice)" + (typePF ?
		"\n- Timberwalk: Checks to track me have disadv. I need not expend extra movement to move over difficult terrain of nonmagical plants." :
		"\nChild of the Wood: I know the Druidcraft cantrip. "+
		"|Timberwalk: Disadv. on checks to track me. I require no extra movement for difficult terrain of nonmagical plants."),
	spellcastingAbility : 5,
	spellcastingBonus : {
		name : "Child of the Wood (level 1)",
		spells : ["druidcraft"],
		selection : ["druidcraft"],
		firstCol : 'atwill'
    }
	};
RaceList["fey'ri"] = {
		regExpSearch : /^((?=.*fey'ri)|(?=.*planetouched)(?=.*(hell|abyss|fiend|devil|asmodeus))).*$/i,
		name : "Fey'Ri",
		source : ["LoI"],
		plural : "Fey'Ri",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Elvish", "Infernal"],
		vision : [["Darkvision", 60]],
    savetxt : {
			text : ["Magic can't put me to sleep"],
			adv_vs : ["charmed"],
		dmgres : ["Fire"],
		age : " reach adulthood by 100 years and live around 1000 years",
		height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
		weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
		heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
		weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
		scores : [0, 1, 0, 0, 0, 2],
		trait : "Fey'Ri (+1 Dexterity, +2 Charisma)\n\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.\nDaemonfey Legacy:\n   I know the Thaumaturgy cantrip.\n   At 3rd level, I can cast Faerie Fire once per long rest.\n   At 5th level, I can also cast Crown of Madness once per long rest.\n   Charisma is my spellcasting ability for these spells.",
		spellcastingAbility : 6,
		spellcastingBonus : {
			name : "Daemonfey Legacy (level 1)",
			spells : ["thaumaturgy"],
			selection : ["thaumaturgy"],
			firstCol : 'atwill'
		},
		features : {
			"hellish rebuke" : {
				name : "Daemonfey Legacy (level 3)",
				limfeaname : "Hellish Rebuke (3d10)",
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Daemonfey Legacy (level 3)",
					spells : ["faerie fire"],
					selection : ["faerie fire"],
					firstCol : "oncelr"
				},
				spellChanges : {
					"faerie fire" : {
						description : "Any creature in a 20-foot cube must make a Dexterity save or be outlined in green light. Attack rolls made against an affected creature has advantage.",
						changes : "Using Daemonfey Legacy, I cast Faerie Fire once per long rest with out using a spell slot."
					}
				}
			},
			"crown of madness" : {
			name : "Daemonfey Legacy (level 5)",
			limfeaname : "Crown of Madness",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Daemonfey Legacy (5)",
				spells : ["crown of madness"],
				selection : ["crown of madness"],
				firstCol : 'oncelr'
				}
			}
		}
	}
};
 AddSubClass("cleric", "wanderlust domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(wander|wanderlust|wanderer)).*$/i,
	subname : "Wanderlust Domain",
	source : ["LoI"],
	spellcastingExtra : ["feather fall", "jump", "knock", "spider climb", "counterspell", "haste", "dimension door", "wall of fire", "animate objects", "creation"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : ["LoI"],
			minlevel : 1,
			descriptionFull : "You gain proficiency in two of the following: Athletics, Acrobatics, or Stealth, as well as Thieves' tools.",
			description : "I gain proficiency with any combination of three skills or tools of my choice.",
			skillstxt : "Athletics, Acrobatics, or Stealth",
			toolProfs : ["Thieves' tools"]
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Traversal",
			source : ["LoI"],
			minlevel : 2,
			description : desc([
				"I can take the Dash action asa bonus action",
				"Climbing doesn't cost me any extra movement",
				"I add my Wisdom modifier to Strength (Athletics), Dexterity (Acrobatics, Stealth), and the distances you can cover making a long or high jump (minimum +1)"
			])
		},
		"subclassfeature6" : {
			name : "Channel Divinity: Spellsteal",
			source : ["LoI"],
			minlevel : 6,
			description : desc([
				"When I cast Counterspell, I can can expend a use of my Channel Divinity to gain a bonus to the required spellcasting ability check equal to half my cleric level",
				"If is at least 1st level, and of a level I can cast, I steal knowledge of that spell.",
				"I can cast this spell a number of times equal to my Wisdom modifier until a long rest."
			])
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["LoI"],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 force damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 force damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra force damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Transcendence",
			source : ["LoI"],
			minlevel : 17,
			description : desc([
				"The Gate and Astral Projection spells are cleric spells for me, and are always prepared, and do not count against the muber of spells I can prepare.",
				"Freedom of Movement and Dimension Door can now have a casting time of a bonus action instead of and action"
			]),
			spellcastingBonus : {
			name : "Transcendence",
			spells : ["gate", "astral projection"],
			selection : ["gate", "astral projection"],
			firstCol : "1" } }
	}
});
 AddSubClass("cleric", "nightmare domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(night|nightmare|dreamer)).*$/i,
	subname : "Nightmare Domain",
	source : ["LoI"],
	spellcastingExtra : ["tasha's hideous laughter", "illusory script", "phantasmal force", "silence", "major image", "slow", "hallucinatory terrain", "phantasmal killer", "dream", "geas"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Cantrip",
			source : ["LoI"],
			minlevel : 1,
			description : "\n   " + "I learn the Vicious Mockery cantrip if I didn't already know it",
			spellcastingBonus : {
				name : "Bonus Cantrip (Vicious Mockery)",
				spells : ["vicious mockery"],
				selection : ["vicious mockery"]
			}
		},
		"subclassfeature1.1" : {
			name : "Cry In the Night",
			source : ["LoI"],
			minlevel : 1,
			description : "\n   " + "As a reaction, when a creature I can see within 30 ft hits me, I can rebuke with their worst fears" + "\n   " + "It takes 2d8 psychic damage that a Wis save can halve",
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : ["reaction", ""]
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Free Falling",
			source : ["LoI"],
			minlevel : 2,
			description : desc([
				"I can cause all creatures I see within 10 ft to see the terrain fall away from under their feet.",
				"The creatures must make a Wisdom saving throw, falling prone and taking 3d6 psychic damage on a fail",
				"On a save, they take half damage, and are not knocked prone."
			])
		},
		"subclassfeature6" : {
			name : "Channel Divinity: Loathsome Knell",
			source : ["LoI"],
			minlevel : 6,
			description : desc([
				"When I deal psychic damage, I can also project a phantasmal bell into the target’s mind and ring it",
				"This ringing inflicts short term madness lasting 1d10 minutes (see Madness rules)."
			])
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["LoI"],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 psychic damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 psychic damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra psychic damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "The Mind of Madness",
			source : ["LoI"],
			minlevel : 17,
			description : desc([
				"My Loathsome Knell instead inflicts long-term madness lasting 1d10x10 hours and an indefinite madness flaw (see Madness rules in DM rulebook).",
				"This flaw can only be removed by greater restoration or 30 days of rest."
			])
		}
	}
});
AddSubClass("fighter", "duelist", {
	regExpSearch : /^(?=.*duelist)(?=.*swordsman).*$/i,
	subname : "Duelist",
	source : ["LoI"],
	fullname : "Duelist",
	abilitySave : 2,
	ablitySaveAlt : 5,
	features : {
		"subclassfeature3" : {
			name : "Blinkstep",
			source : ["LoI"],
			minlevel : 3,
			usages : [0, 0, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, "Unlimited", "Unlimited"],
			description : "\n    " + "As an action, I can move in a line up to my movement speed." +
			"\n    " + "However, I can only do this if I have a one handed sword weapon." +
			"\n    " + "I make an attack action on all enemy creatures in that line." + 
			"\n    " + "The number of attack increases with each extra attack feature in the fight class.",
			action : [["action", ""]],
			recovery : "short rest"
		},
		"subclassfeature3.1" : {
			name : "Weapon Connection",
			source : ["LoI"],
			minlevel : 3,
			description : "\n    " + "As an bonus action, I can summon my swordsman weapon"
			+ "\n    " + "back to me as long as it is on the same plane of existence as me.",
			action : [["bonus action", ""]]
		},
		"subclassfeature7" : {
			name : "Stances",
			source : ["LoI"],
			minlevel : 7,
			description : "\n    " + "I can now activate stances, each having an indepedent action type.",
			"The Acrobat" : {
				name : "The Acrobat",
				source : ["LoI"],
				minlevel : 7,
				description : "\n   " + "Stay light on your free as you face down your enemy." +
				"\n    " + "As a bonus action, you have advantage on all Dexterity ability rolls and saving throws" +
				"\n    " + "but disadvantage on all Strength ability rolls and saving throws while this is active.",
				action : [["bonus action", ""]]
			},
			"The Berserker" : {
				name : "The Berserker",
				source : ["LoI"],
				minlevel : 7,
				description : "\n    " + "All that matters is the blood being spilt." +
				"\n    " + "It doesn't matter if its you or your opponent, someone must die!" +
				"\n    " + "When this is activated as a bonus action, you have advantage on your attack rolls" +
				"\n    " + "However, all attack rolls on you have advantage as well.",
				action : [["bonus action", ""]]
			},
			"The Brute" : {
				name : "The Brute",
				source : ["LoI"],
				minlevel : 7,
				description : "\n    " + "Use your strength to your advantage." +
				"\n    " + "As a bonus action, you have advantage on any strength based ability roll or saving throw" +
				"\n    " + "but have disadvantage on any dexterity based ability roll or saving throw.",
				action : [["bonus action", ""]]
			},
			"The Dancer" : {
				name : "The Dancer",
				source : ["LoI"],
				minlevel : 7,
				description : "\n    " + "As a reaction, you can roll acrobatics to dodge an opponent's attack," +
				"\n    " + "moving 5 feet to their left or right should you match or beat their attack roll.",
				action : [["reaction action", ""]]
			},
			"The Defender" : {
				name : "The Defender",
				source : ["LoI"],
				minlevel : 7,
				description : "\n    " + "As a reaction, you can ready your weapon to defend yourself," +
				"\n    " + "adding your proficiency bonus to your AC when an enemy targets you with a weapon attack.",
				action : [["reaction", ""]]
			},
			"The Shield" : {
				name : "The Shield",
				source : ["LoI"],
				minlevel : 7,
				description : "\n    " + "As a reaction, you can impose disadvantage on a " +
				"\n    " + "creature that makes a melee attack on an ally within 5 feet of you." +
				"\n    " + "However, all ranged attacks have advantage on you since you focused on melee defense.",
				action : [["reaction", ""]]
			},
			toNotesPage : [{
				name : "Stances",
				note : "\n" + "\u2022 The Acrobat" + 
				"\n    " + "Stay light on your free as you face down your enemy." +
				"\n    " + "As a bonus action, you have advantage on all Dexterity ability rolls and saving throws" +
				"\n    " + "but disadvantage on all Strength ability rolls and saving throws while this is active." +
				"\n" + "\u2022 The Berserker" + 
				"\n    " + "All that matters is the blood being spilt." +
				"\n    " + "It doesn't matter if its you or your opponent, someone must die!" +
				"\n    " + "When this is activated as a bonus action, you have advantage on your attack rolls" +
				"\n    " + "However, all attack rolls on you have advantage as well." +
				"\n" + "\u2022 The Brute" +
				"\n    " + "Use your strength to your advantage." +
				"\n    " + "As a bonus action, you have advantage on any strength based ability roll or saving throw" +
				"\n    " + "but have disadvantage on any dexterity based ability roll or saving throw." +
				"\n" + "\u2022 The Dancer" +
				"\n    " + "As a reaction, you can roll acrobatics to dodge an opponent's attack," +
				"\n    " + "moving 5 feet to their left or right should you match or beat their attack roll." +
				"\n" + "\u2022 The Defender" +
				"\n    " + "As a reaction, you can ready your weapon to defend yourself," +
				"\n    " + "adding your proficiency bonus to your AC when an enemy targets you with a weapon attack." +
				"\n" + "\u2022 The Shield" +
				"\n    " + "As a reaction, you can impose disadvantage on a " +
				"\n    " + "creature that makes a melee attack on an ally within 5 feet of you." +
				"\n    " + "However, all ranged attacks have advantage on you since you focused on melee defense.",
				page3notes : true,
				popupName : "Swordsman Stances",
				source : ["S:TSMA", 0]
			}]
		},
		"subclassfeature10" : {
			name : "Weakpoints",
			source : ["LoI"],
			minlevel : 10,
			description : "\n    " + "Before making an attack roll, you can take a -5 penalty to hit." +
			"\n    " + "If you land an attack, that attack deals extra damage.",
			additional : levels.map(function (n) {
				return n < 10 ? "" : "+" + (n < 15 ? 2 : 3) + "d8";
			})
		},
		"subclassfeature15" : {
			name : "Flashstep",
			source : ["LoI"],
			minlevel : 15,
			description : "\n    " + "Your movement speed for Blinkstep is equal to taking" +
			"\n    " + "the dash action. In addition, you can move in any direction with" +
			"\n    " + "Blinkstep, even if it isn't a straight line."
		},
		"subclassfeature18" : {
			name : "Final Step",
			source : ["LoI"],
			minlevel : 18,
			description : "\n    " + "As an action, initiate a Blinkstep against a creature." +
			"\n    " + "Should you hit, you deal a massive amount of damage against the creature." +
			"\n    " + "This can only be done once per short or long rest.",
			additional : "10d8",
			usages : 1,
			action : [["action", ""]],
			recovery : "long rest"
		}
	}
});
AddSubClass("fighter", "monster hunter-ua", {
	regExpSearch : /^(?=.*monster)(?=.*hunter).*$/i,
	subname : "Monster Hunter",
	source : ["LoI"],
	fullname : "Monster Hunter",
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : ["LoI"],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with two skills or one skill and any one tool" + "\n   " + "For skills I can choose Arcana, History, Insight, Investigation, Nature, or Perception",
			choices : ["1 Skill and 1 Tool proficiencies", "2 Skill proficiencies"],
			"1 skill and 1 tool proficiencies" : {
				name : "Bonus Proficiencies",
				description : "\n   " + "I gain proficiency with one skill and any one tool of my choice" + "\n   " + "For the skill, I can choose Arcana, History, Insight, Investigation, Nature, or Perception",
				skillstxt : "Choose one from: Arcana, History, Insight, Investigation, Nature, or Perception",
				toolProfs : [["Any tool", 1]]
			},
			"2 skill proficiencies" : {
				name : "Bonus Proficiencies",
				description : "\n   " + "I gain 2 skill proficiencies: Arcana, History, Insight, Investigation, Nature, or Perception",
				skillstxt : "Choose two from: Arcana, History, Insight, Investigation, Nature, and Perception"
			}
		},
		"subclassfeature3.1" : {
			name : "Combat Superiority",
			source : ["LoI"],
			minlevel : 3,
			description : "\n   " + "I gain a number of superiority dice that I can use to fuel special maneuvers (see below)" + "\n   " + "I can use only one maneuver per attack; I regain all superiority dice after a short rest" + "\n    - " + "Use after rolling to hit; I add the superiority die to my attack roll" + "\n    - " + "Use after damaging a creature; I add the superiority die to the damage roll" + "\n       " + "Also, the attack imposes disadvantage on any concentration save resulting from it" + "\n    - " + "Use after Int/Wis/Cha save, before knowing success/fail; add the die to the save total" + "\n    - " + "Use with Wis (Perception) to detect hidden or Wis (Insight) to see if lying to me" + "\n       " + "After rolling but before knowing if success/fail; I add the superiority die to the check",
			additional : ["", "", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d12", "d12", "d12"],
			usages : [0, 0, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6],
			recovery : "short rest"
		},
		"subclassfeature3.2" : {
			name : "Hunter's Mysticism",
			source : ["LoI"],
			minlevel : 3,
			usages : 1,
			recovery : "long rest",			
			description : "\n   " + "I can cast Detect Magic as a ritual and Protection from Evil & Good once per long rest" + "\n   " + "I gain the ability to speak one of the following languages: Abyssal, Celestial, or Infernal",
			action : ["action", " (Prot vs. Evil/Good)"],
			languageProfs : [["Abyssal, Celestial, or Infernal", 1]],
			spellcastingBonus : [{
				name : "Spirit Seeker",
				spells : ["detect magic"],
				selection : ["detect magic"],
				firstCol : "(R)",
				spellcastingAbility : 5
			}, {
				name : "Spirit Seeker",
				spells : ["protection from evil and good"],
				selection : ["protection from evil and good"],
				firstCol : "oncelr"
			}],
			spellChanges : {
				"detect magic" : {
					time : "10 min",
					changes : "I can cast this spell only as a ritual, thus its casting time is 10 minutes longer."
				}
			}
		},
		"subclassfeature7" : {
			name : "Monster Slayer",
			source : ["LoI"],
			minlevel : 7,
			usages : 1,
			recovery : "long rest",
			description : "\n   " + "Whenever I use a superiority die, I can choose to expend two, adding both to the roll" + "\n   " + "If the target is an aberration, fey, fiend, or undead, both dice deal maximum damage",
			action : ["action", ""]
		},
		"subclassfeature10" : {
			name : "Improved Combat Superiority",
			source : [["UA:GH", 2]],
			minlevel : 10,
			description : "\n   " + "My superiority dice turn into d10s at 10th level and into d12s at 18th level"
		},
		"subclassfeature15" : {
			name : "Relentless",
			source : ["LoI"],
			minlevel : 15,
			description : "\n   " + "I regain one superiority die if I have no more remaining when I roll initiative"
		}
	}
});
AddSubClass("fighter", "pact warrior", {
	regExpSearch : /^(?=.*pact)(?=.*warrior).*$/i,
	subname : "Pact Warrior",
	source : ["LoI"],
	fullname : "Pact Warrior",
	abilitySave : 3,
	spellcastingFactor : "warlock3",
	spellcastingKnown : {
		cantrips : [0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4],
		spells : [0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4],
	},
	spellcastingList : {
		class : "warlock",
		level : [0, 4],
	},
	features : {
		"subclassfeature3" : {
			name : "Pact of the Blade",
			source : ["HB", 0],
			minlevel : 3,
			description : "\n   " + "As a bonus action, I can create a pact weapon in my empty hand; I'm proficient in its use" + "\n   " + "I can choose the type of melee weapon every time I create it, and it has those statistics" + "\n   " + "The weapon disappears if it is more than 5 ft away from me for 1 minute" + "\n   " + "The weapon counts as magical; I can transform a magic weapon Chao my pact weapon" + "\n   " + "This occurs over an hour-long ritual that I can perform during a short rest" + "\n   " + "I can use an action to re-summon it in any form and can dismiss it as no action",
			action : ["bonus action", ""],
			calcChanges : {
				atkAdd : ["if (isMeleeWeapon && (/\\bpact\\b/i).test(inputText)) {fields.Proficiency = true; fields.Description += thisWeapon[1] ? '' : (fields.Description ? '; ' : '') + 'Counts as magical'; }; ", "If I include the word 'Pact' in a melee weapon's name, it gets treated as my Pact Weapon."]
			}
		},
		"subclassfeature3.1" : {
			name : "Hexbladeic Invocations",
			source : ["HB", 0],
			minlevel : 3,
			description : "\n   " + "Use the \"Choose Features\" button above to add Hexbladeic Invocations to the third page",
			additional : ["", "", "2 invocations known", "2 invocations known", "2 invocations known", "3 invocations known", "3 invocations known", "3 invocations known", "3 invocations known", "4 invocations known", "4 invocations known", "4 invocations known", "4 invocations known", "4 invocations known", "5 invocations known", "5 invocations known", "5 invocations known", "5 invocations known", "5 invocations known", "5 invocations known"],
			extraname : "Hexbladeic Invocation",
			extrachoices : ["Agonizing Blast (prereq: Eldritch Blast cantrip)", "Armor of Shadows", "Ascendant Step (prereq: level 9 pact knight)", "Beast Speech", "Beguiling Influence", "Devil's Sight", "Eldritch Sight", "Eldritch Spear (prereq: Eldritch Blast cantrip)", "Eyes of the Rune Keeper", "Fiendish Vigor", "Gaze of Two Minds", "Lifedrinker (prereq: level 12 pact knight)", "Mask of Many Faces", "Master of Myriad Forms (prereq: level 15 pact knight)", "Misty Visions", "One with Shadows (prereq: level 5 pact knight)", "Otherworldly Leap (prereq: level 9 pact knight)", "Repelling Blast (prereq: Eldritch Blast cantrip)", "Visions of Distant Realms (prereq: level 15 pact knight)", "Whispers of the Grave (prereq: level 9 pact knight)", "Witch Sight (prereq: level 15 pact knight)"],
			"agonizing blast (prereq: eldritch blast cantrip)" : {
				name : "Agonizing Blast",
				description : "\n   " + "I can add my Charisma modifier to the damage of my Eldritch Blast cantrip",
				source : ["P", 110],
				eval : "var ES = (What(\"Extra.Notes\").search(/eldritch spear/i) !== -1); RemoveWeapon(\"eldritch blast\"); RemoveWeapon(\"eldritch spear\"); RemoveWeapon(\"agonizing blast\"); if (ES) {AddWeapon(\"Agonizing Spear\")} else {AddWeapon(\"Agonizing Blast\")}",
				removeeval : "RemoveWeapon(\"agonizing blast\"); RemoveWeapon(\"agonizing spear\"); var ES = (What(\"Extra.Notes\").search(/eldritch spear/i) !== -1); if (ES) {AddWeapon(\"Eldritch Spear\")} else {AddWeapon(\"Eldritch Blast\")}",
			},
			"armor of shadows" : {
				name : "Armor of Shadows",
				description : "\n   " + "I can cast Mage Armor on myself at will, without spell slots or material comp. (PHB 256)",
				source : ["P", 110],
				spellcastingBonus : {
					name : "Armor of Shadows",
					spells : ["mage armor"],
					selection : ["mage armor"],
					atwill : true
				}
			},
			"ascendant step (prereq: level 9 pact knight)" : {
				name : "Ascendant Step",
				description : "\n   " + "I can cast Levitate on myself at will, without spell slots or material comp. (PHB 255)",
				source : ["P", 110],
				spellcastingBonus : {
					name : "Ascendant Step",
					spells : ["levitate"],
					selection : ["levitate"],
					atwill : true
				}
			},
			"beast speech" : {
				name : "Beast Speech",
				description : "\n   " + "I can cast Speak with Animals at will, without using spell slots (PHB 277)",
				source : ["P", 110],
				spellcastingBonus : {
					name : "Beast Speech",
					spells : ["speak with animals"],
					selection : ["speak with animals"],
					atwill : true
				}
			},
			"beguiling influence" : {
				name : "Beguiling Influence",
				description : "\n   " + "I gain proficiencies with the Deception and Persuasion skills",
				source : ["P", 110],
				skills : ["Deception", "Persuasion"],
				skillstxt : "\n\n" + toUni("Pact Knight (Beguiling Influence)") + ": Deception and Persuasion."
			},
			"devil's sight" : {
				name : "Devil's Sight",
				description : "\n   " + "I can see in magical and nonmagical darkness out to 120 ft",
				source : ["P", 110],
				vision : [["Devil's sight", 120]]
			},
			"eldritch sight" : {
				name : "Eldritch Sight",
				description : "\n   " + "I can cast Detect Magic at will, without using spell slots (PHB 231)",
				source : ["P", 110],
				spellcastingBonus : {
					name : "Eldritch Sight",
					spells : ["detect magic"],
					selection : ["detect magic"],
					atwill : true
				}
			},
			"eldritch spear (prereq: eldritch blast cantrip)" : {
				name : "Eldritch Spear",
				description : "\n   " + "My Eldritch Blast cantrip has a range of 300 ft",
				source : ["P", 111],
				eval : "var AB = (What(\"Extra.Notes\").search(/agonizing blast/i) !== -1); RemoveWeapon(\"eldritch blast\"); RemoveWeapon(\"eldritch spear\"); RemoveWeapon(\"agonizing blast\"); if (AB) {AddWeapon(\"Agonizing Spear\")} else {AddWeapon(\"Eldritch Spear\")}",
				removeeval : "RemoveWeapon(\"eldritch spear\"); RemoveWeapon(\"agonizing spear\"); var AB = (What(\"Extra.Notes\").search(/agonizing blast/i) !== -1); if (AB) {AddWeapon(\"Agonizing Blast\")} else {AddWeapon(\"Eldritch Blast\")}"
			},
			"eyes of the rune keeper" : {
				name : "Eyes of the Rune Keeper",
				description : "\n   " + "I can read all writing",
				source : ["P", 111]
			},
			"fiendish vigor" : {
				name : "Fiendish Vigor",
				description : "\n   " + "I can cast False Life on myself at will, without spell slots or material comp. (PHB 239)",
				source : ["P", 111],
				spellcastingBonus : {
					name : "Fiendish Vigor",
					spells : ["false life"],
					selection : ["false life"],
					atwill : true
				}
			},
			"gaze of two minds" : {
				name : "Gaze of Two Minds",
				description : "\n   " + "As an action, I can touch a willing creature and perceive through its senses (not my own)" + "\n   " + "This lasts until the end of my next turn, but I can use an action to extend the duration",
				source : ["P", 111]
			},
			"lifedrinker (prereq: level 12 pact knight)" : {
				name : "Lifedrinker",
				description : "\n   " + "My pact weapon does extra necrotic damage equal to my Charisma modifier",
				source : ["P", 111],
				calcChanges : {
					atkCalc : ["if (isMeleeWeapon && (/\\bpact\\b/i).test(WeaponText)) { output.extraDmg += What('Cha Mod'); }; ", "If I include the word 'Pact' in a melee weapon's name or description, the calculation will add my Charisma modifier to its damage. However, it won't say that this added damage is of the necrotic type, as it can only display a single damage type."]
				}
			},
			"mask of many faces" : {
				name : "Mask of Many Faces",
				description : "\n   " + "I can cast Disguise Self on myself at will, without using spell slots (PHB 233)",
				source : ["P", 111],
				spellcastingBonus : {
					name : "Mask of Many Faces",
					spells : ["disguise self"],
					selection : ["disguise self"],
					atwill : true,
				},
			},
			"master of myriad forms (prereq: level 15 pact knight)" : {
				name : "Master of Myriad Forms",
				description : "\n   " + "I can cast Alter Self on myself at will, without using spell slots (PHB 211)",
				source : ["P", 111],
				spellcastingBonus : {
					name : "Mask of Myriad Forms",
					spells : ["alter self"],
					selection : ["alter self"],
					atwill : true,
				},
			},
			"misty visions" : {
				name : "Misty Visions",
				description : "\n   " + "I can cast Silent Image at will, without using spell slots or material comp. (PHB 276)",
				source : ["P", 111],
				spellcastingBonus : {
					name : "Misty Visions",
					spells : ["silent image"],
					selection : ["silent image"],
					atwill : true,
				},
			},
			"one with shadows (prereq: level 5 pact knight)" : {
				name : "One with Shadows",
				description : "\n   " + "As an action, when I'm in an area of dim light or darkness, I can become invisible" + "\n   " + "I become visible again when I move or take an action or reaction",
				source : ["P", 111],
				action : ["action", ""]
			},
			"otherworldly leap (prereq: level 9 pact knight)" : {
				name : "Otherworldly Leap",
				description : "\n   " + "I can cast Jump on myself at will, without using spell slots or material comp. (PHB 254)",
				source : ["P", 111],
				spellcastingBonus : {
					name : "Otherworldly Leap",
					spells : ["jump"],
					selection : ["jump"],
					atwill : true
				}
			},
			"repelling blast (prereq: eldritch blast cantrip)" : {
				name : "Repelling Blast",
				description : "\n   " + "I can have creatures hit by my Eldritch Blast cantrip be pushed 10 ft away from me",
				source : ["P", 111],
				calcChanges : {
					atkAdd : ["if (theWea && (/eldritch blast/i).test(theWea.name)) {fields.Description += '; Target pushed back 10 ft'; }; ", "When I hit a creature with my Eldritch Blast cantrip, it is pushed 10 ft away from me."]
				}
			},
			"visions of distant realms (prereq: level 15 pact knight)" : {
				name : "Visions of Distant Realms",
				description : "\n   " + "I can cast Arcane Eye at will, without using spell slots (PHB 214)",
				source : ["P", 111],
				spellcastingBonus : {
					name : "Visions of Distant Realms",
					spells : ["arcane eye"],
					selection : ["arcane eye"],
					atwill : true
				}
			},
			"whispers of the grave (prereq: level 9 pact knight)" : {
				name : "Whispers of the Grave",
				description : "\n   " + "I can cast Speak with Dead at will, without using spell slots (PHB 277)",
				source : ["P", 111],
				spellcastingBonus : {
					name : "Whispers of the Grave",
					spells : ["speak with dead"],
					selection : ["speak with dead"],
					atwill : true
				}
			},
			"witch sight (prereq: level 15 pact knight)" : {
				name : "Witch Sight",
				description : "\n   " + "I can see the true form of creatures (shapechangers/illusions/transmutations) within 30 ft",
				source : ["P", 111],
				vision : [["Witch sight", 30]]
			},
		},
		"subclassfeature3.2" : {
			name : "Pact Magic",
			source : ["HB", 0],
			minlevel : 3,
			description : "\n   " + "I can cast warlock cantrips/spells that I know, using Charisma as my spellcasting ability" + "\n   " + "I can use an arcane focus as a spellcasting focus; I know the Hex spell in addition" + "\n   " + "I regain these spell slots on a short rest",
			additional : levels.map(function (n) {
				if (n < 3) return "";
				var spca = n < 7 ? 1 : n < 15 ? 2 : n < 19 ? 3 : 4;
				return spca + " cantrip" + (spca > 1 ? "s" : "") + " \u0026 " + spca + " spell" + (spca > 1 ? "s" : "") + " known";
			}),
			spellcastingBonus : {
				name : "Hex",
				spells : ["hex"],
				selection : ["hex"]
			}
		},
		"subclassfeature7" : {
			name : "Deny the Grave",
			source : ["HB", 0],
			minlevel : 7,
			description : "\n   " + "I regain 1d10 + my Constitution modifier in HP when I succeed on a Death saving throw" + "\n   " + "I also regain this amount whenever I drop a hexed foe to 0 hp",
			recovery : "long rest",
			usages : 1
		},
		"subclassfeature15" : {
			name : "Make My Own Luck",
			source : ["HB", 0],
			minlevel : 15,
			description : "\n   " + "Against a hexed foe, I gain advantage on my attacks",
		},
		"subclassfeature18" : {
			name : "Vicious Strikes",
			source : ["HB", 0],
			minlevel : 18,
			description : "\n   " + "Attacks with my pact weapon score a critical hit on a roll of both 19 and 20",
			calcChanges : {
				atkAdd : ["if (isMeleeWeapon && (/\\bpact\\b/i).test(inputText) && classes.known.fighter && classes.known.fighter.level > 17) {fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20'; }; ", "My pact weapon attacks score a critical on a to hit roll of both 19 and 20."]
			}
		},
		"subclassfeature18.1" : {
			name : "Crimson Blade",
			source : ["HB", 0],
			minlevel : 18,
			description : "\n   " + "I drain some of the vitality of my foes when I score a crit with my pact weapon" + "\n   " + "I gain temporary hit points equal to half of the damage from the attack"
		}
	}
AddSubClass("monk", "way of gravitation", {
	regExpSearch : /^((?=.*gravity)(?=.*master))|((?=.*gravitation)((?=.*(monk|monastic))|((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname : "Way of Gravitation",
	source : ["LoI"],
	fullname : "Gravity Master",
	features : {
		"subclassfeature3" : {
			name : "Gravitational Punches",
			source : ["GMBDB"],
			minlevel : 3,
			description : desc([
				"When I successfully hit a two seperate creatures with unarmed strikes granted by my Flurry of blows, I create a gravitational pull between the two creatures.",
				"Until the end of my next turn, those creatures cannot willingly move more than 20 feet from each other.",
				"Whenever I hit a single creature with both unarmed strikes from Flurry of Blows, I create a vortex of high gravity within it.",
				"That creature's speed is halved until the end of my next turn."
			]),
		},
"subclassfeature3.1" : {
			name : "Light as a Feather",
			source : ["LoI"],
			minlevel : 3,
			description : "\n   " + "I gain the ability to reduce my own graivty." + "\n   " + "When I am prone, I can stand up by spending 5 feet of movement, instead of half my movement.",
		},
		"subclassfeature6" : {
			name : "Fluctuate",
			source : ["LoI"],
			minlevel : 6,
			description : desc([
				"I gain the ability to alter my gravity even further.",
				"Catch. I can spend 1 ki point to cast Feather Fall without providing material components.",
				"Heavy Stance. As a reaction to being forcibly moved, I can spend 1 ki point to increase my gravity, and not be moved instead."
			]),
		},
		"subclassfeature11" : {
			name : "Low Gravity",
			source : ["LoI"],
			minlevel : 11,
			description : desc([
				"Whenever I use my Step of the Wind feature, I gain a flying speed equal to my walking speed until the end of my turn.",
				"Additionally, when I affect a creature with my Gravitational Punches feature, it takes addtional force damage equal to my Martial Arts die."
			]),
		},
		"subclassfeature17" : {
			name : "Plummet",
			source : ["LoI"],
			minlevel : 17,
			description : desc([
				"When I hit a creature with an unarmed strike, I can spend 3 Ki points to attempt to change the creature's gravitational pull.",
				"If the creature is somehow anchored to the ground or other surface, this ability has no effect on it.",
				"The creature must make a Strength saving throw against my Ki save DC.",
        "On a failed save, it falls 60 feet in a direction I choose. On a successful save, it falls up to 30 feet in that direction.",
        "In either case, if a solid object is encountered in this fall, it strikes just as it would during a normal downward fall.",
        "The creature's gravity returns to normal after the fall, or after it collides with anything."
			]),
	},
    }
});
AddSubClass("monk", "way of the specter", {
	regExpSearch : /^((?=.*specter)(?=.*master))|((?=.*specter)((?=.*(monk|monastic))|((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname : "Way of the Specter",
	source : ["LoI"],
	fullname : "Way of the Specter",
	features : {
		"subclassfeature3" : {
			name : "Weakening Blows",
			source : ["LoI"],
			minlevel : 3,
			description : desc([
				"When I successfully hit a creature with an attack, I can spend 1 ki point to force the creature to make a Constitution saving throw.",
				"The creature takes one point of exhaustion.",
				"I can spend 1 ki point per attack to repeat this effect, but I cannot inflict more than three levels of exhaustion to one creature.",
				"At the end of each of the affected creature’s turns, they lose one level of exhaustion."
			]),
		},
		"subclassfeature6" : {
			name : "Death Spiral",
			source : ["LoI"],
			minlevel : 6,
			description : "\n   " + "Whenever I hit an enemy with at least one point of exhaustion with an unarmed strike, I inflict one additional damage die for each point of exhaustion that creature is under."
		},
		"subclassfeature11" : {
			name : "Siphoned Life",
			source : ["LoI"],
			minlevel : 11,
			description : "\n   " + "Whenever I use Weakening Blows to give a creature a point of exhaustion, I am healed for an amount equal to the damage roll of that attack" + "\n   " + "I can use this ability a number of times equal to my Wisdom modifier" + "\n   " + "I regain all uses of this ability after a long rest.",
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
		},
		"subclassfeature17" : {
			name : "Siphoned Life",
			source : ["LoI"],
			minlevel : 17,
			description : "\n   " + "Select an ability score you want to damage other than Constitution." + "\n   " + "When you make an unarmed strike, you can use 5 ki points to force your target to make a saving throw." + "\n   " + "If your target fails the saving throw, roll your martial arts damage die. The ability score you chose is lowered for your target by half of the martial arts roll." + "\n   " + "If the creature’s ability score reaches 0, they automatically fail any ability check or saving throw using that ability score." + "\n   " + "I regain all uses of this ability after a long rest.",
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
	},
    }
});
AddSubClass("paladin", "oath of the spellbreaker", {
	regExpSearch : /^(?=.*spellbreaker)((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	subname : "Oath of the Spellbreaker",
	source : ["LoI"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Disrupt Magic",
			source : ["LoI"],
			minlevel : 3,
			description : desc([
				"As an action, I choose one creature within 60 feet that I can see",
				"The target must make a saving throw of a type determined by its spellcasting ability.",
				"If the target has multiple spellcasting abilities, it makes a separate saving throw for each.",
				"If the target fails any one of these saving throws, its magical abilities that derive from that ability score become disrupted for up to 1 minute.",
				"It has disadvantage on Constitution saving throws to maintain concentration on a spell. It can’t use reactions to cast spells using that ability.",
				"If it attempts to cast a spell with a casting time of 1 action using that ability score, you roll a d20. On an 11 or higher, the spell doesn't take effect."
			]),
			action : [["action", ""]],
			spellcastingExtra : ["shield", "zephyr strike", "branding smite", "see invisibility", "counterspell", "dispel magic", "freedom of movement", "locate creature", "banishing smite", "synaptic static"]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Annihilation",
			source : ["LoI"],
			minlevel : 3,
			description : desc([
				"As an action, I can use my Channel Divinity to sacrifice my own well of magical energy to destroy my opponent’s.",
				"When I use my Divine Smite to damage a creature, I can expend a use of Channel Divinity to destroy one of the target’s spell slots.",
				"The spell slot destroyed is equivalent to the level of the spell slot used to perform Divine Smite.",
				"If the target has no remaining spell slots of that level, an equivalent number of spell slots lower than the designated level are destroyed until the target has none.",
				"If the target has an innate spellcasting trait, they lose spells, beginning with those of a level equal to the spell slot expended."
			]),
			action : [["action", ""]]
		},
		"subclassfeature7" : {
			name : "Aura of Dampening",
			source : ["LoI"],
			minlevel : 7,
			description : "\n   " + "Allies within range and I have resistance to damage from spells",
			additional : ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"],
			dmgres : ["Spells"]
		},
		"subclassfeature15" : {
			name : "Magical Detective",
			source : ["LoI"],
			minlevel : 15,
			description : desc([
				"I am always under the effects of the Detect Magic spell."
			]),
		},
		"subclassfeature20" : {
			name : "Unweaving Presence",
			source : ["LoI"],
			minlevel : 20,
			description : desc([
				"As an action, I gain the following benefits for 1 hour",
				"I gain the effects of the antimagic field spell.",
				"When I use my Channel Divinity to Disrupt Magic , I can target a number of additional creatures within 60 feet of me that I can see equal to half my Charisma modifier."
			]),
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
AddSubClass("paladin", "oath of the tempest", {
	regExpSearch : /^(?=.*tempest)((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	subname : "Oath of the Tempest",
	source : ["LoI"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Divine Gale",
			source : ["LoI"],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can present my holy symbol, creating a small tornadoe around me.",
				"This tornado lets me fly 30 ft. and land safely.",
				"Enemy creatures near where I land are thrown off balance, and my allies have advantage on attacks against them until the start of my next turn."
			]),
			action : [["bonus action", ""]],
			spellcastingExtra : ["feather fall", "thunderwave", "shatter", "warding wind", "lightning bolt", "thunder step", "greater invisibility", "storm sphere", "conjure elemental", "control winds"]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Steel Tempest",
			source : ["LoI"],
			minlevel : 3,
			description : desc([
				"As an action, I can embue my weapons with the power and speed of elemental wind.",
				"For 1 minute, I add my Charisma modifier (minimum of +1) to damage attacks using two-handed, versatile, or ranged weapons."
			]),
			action : [["action", ""]]
		},
		"subclassfeature7" : {
			name : "Aura of Elemental Air",
			source : ["LoI"],
			minlevel : 7,
			description : "\n   " + "Allies within range and I have resistance to damage from thunder, lightning, or cold",
			additional : ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"],
			dmgres : ["Thunder", "Lightning", "Cold"]
		},
		"subclassfeature15" : {
			name : "Flow of Battle",
			source : ["LoI"],
			minlevel : 15,
			description : desc([
				"Whenever another creature hits me with an attack, I can use my reaction to add my proficiency bonus to my AC for that attack, potentially causing it to miss.",
        "If the attack misses, you may move half your speed without provoking opportunity attacks."
			]),
		},
		"subclassfeature20" : {
			name : "Avatar of the Storm",
			source : ["LoI"],
			minlevel : 20,
			description : desc([
				"As an action, I create a powerful storm around me, and gain the following benefits for 10 minutes:",
				"I gain a fly speed of 60 feet.",
				"A 20-foot sphere centered on me obscures vision for all creatures except me.",
        "Creatures other than myself that start their turn in the area must succeed a Constitution saving throw, or be deafened for 1 minute.",
        "Creatures other than myself that start their turn in the area take 5 lightning damage."
			]),
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
AddSubClass("paladin", "paladin-weave", {
	regExpSearch : /^(?=.*weave)(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))).*$/i,
	subname : "Oath of the Weave",
	source : ["LoI"],
	spellcastingExtra : ["detect magic", "shield", "misty step", "warding bond", "counterspell", "dispel magic", "death ward", "ice storm", "flame strike", "teleportation circle"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Spellfire Blade",
			source : ["LoI"],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can infuse my weapon with arcane energy for 1 minute",
				"My first hit with it as part of an action to cast a cantrip, it deals extra radiant damage",
				"Also, the next time the target tries to cast a spell, it must succeed a concentration save"
			]),
			action : ["bonus action", ""],
			additional : levels.map(function (n) {
				if (n < 3) return "";
				return "2d8+" + n + " damage";
			})
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Spellfire Shield",
			source : ["LoI"],
			minlevel : 3,
			description : desc([
				"As a reaction when a spell missed me or I save against it, I can redirect the spell cast",
				"I can have it target another within 30 ft, causing a new attack/save roll"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature3.2" : {
			name : "Spellshatter",
			source : ["LoI"],
			minlevel : 3,
			description : desc([
				"As a bonus action when I use Divine Smite, I can dispel spells affecting the target",
				"All spells of a level equal to or lower than the spell slot used for the smite are ended",
				"If the attack triggers a concentration save, the DC is that of my paladin spell DC"
			]),
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, tDoc.getField('Cha Mod').value);",
			recovery : "long rest",
			action : ["bonus action", ""]
		},
		"subclassfeature3.3" : {
			name : "Arcane Cantrips",
			source : ["LoI"],
			minlevel : 3,
			description : "\n   " + "I learn two cantrips, with Charisma as my spellcasting ability",
			spellcastingBonus : {
				name : "Arcane Cantrips",
				spells : ["booming blade", "green-flame blade", "challenger's mark", "echoing blow", "frostwind blade", "looming shadow", "punishing strike"],
				times : 2
			}
		},
		"subclassfeature7" : {
			name : "Arcane Cantrips: Quick Casting",
			source : ["LoI"],
			minlevel : 7,
			description : desc([
				"I can reduce the casting time of one of my arcane cantrip to a bonus action",
				"Doing this expends 10 points from my Lay on Hands feature"
			])
		},
		"subclassfeature7.1" : {
			name : "Aegis of Blue Flame",
			source : ["LoI"],
			minlevel : 7,
			description : desc([
				"Opportunity attacks against friendly creatures within my aura have disadvantage",
				"As a reaction when an ally within 10 ft is hit with an attack, I can protect it",
				"The ally takes my Cha mod (min 1) less in bludgeoning, piercing, or slashing damage",
				"Also,, I can make one weapon attack or cast a cantrip at the attacker"
			]),
			additional : levels.map(function (n) {
				if (n < 7) return "";
				return (n < 18 ? "10" : "30") + "-foot aura";
			}),
			action : ["reaction", ""]
		},
		"subclassfeature15" : {
			name : "Mystic Champion",
			source : ["LoI"],
			minlevel : 15,
			description : desc([
				"I add a 4th-level or lower wizard spell to my oath spells and learn two wizard cantrips",
				"When I use my action to cast a cantrip, I can make a weapon attack as a bonus action"
			]),
			action : ["bonus action", ""],
			spellcastingBonus : [{
				name : "Mystic Champion",
				class : "wizard",
				level : [0, 0],
				times : 2
			}, {
				name : "Mystic Champion (spell)",
				class : "wizard",
				level : [1, 4],
				prepared : true
			}]
		},
		"subclassfeature20" : {
			name : "Living Spellfire",
			source : ["LoI"],
			minlevel : 20,
			description : desc([
				"As an action, I wreathe myself in spellfire for 1 minute and gain the following benefits:",
				" - I can teleport my walking speed as a bonus action",
				" - Hostiles within 30 ft have disadv. on saves vs. my spells and -5 on concentration saves",
				" - When I use my action to cast a spell, I can make a weapon attack as a bonus action",
				" - I can reroll a number of damage dice for a spell equal to my Cha mod (min 1)"
			]),
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
AddSubClass("ranger", "witchwarden", {
	regExpSearch : /^(?=.*witchwarden).*$/i,
	subname : "Witchwarden",
	source : ["LoI"],
	fullname : "Witchwarden",
	features : {
		"subclassfeature3" : {
			name : "Arcane Momentum",
			source : ["LoI"],
			minlevel : 3,
			description : desc([
				"When I damage a creature with a ranger spell other than hunter’s mark , I have advantage on the first attack roll I make against that target until the end of my next turn.",
				"The first time you hit a creature with a weapon attack, it deals an additional 1d8 damage. This damage must be of a type of the spell dealt."
			]),
		},
		"subclassfeature3.1" : {
			name : "Witchwarden Magic",
			source : ["LoI"],
			minlevel : 3,
			description : desc([
				"I add a spell to my known spells at level 3, 5, 9, 13, and 17",
				"These count as ranger spells, but do not count against the number of spells I can know"
			]),
			spellcastingExtra : ["sanctuary", "warding bond", "Leomund's tiny hut", "death ward", "wall of force"],
			spellcastingExtraApplyNonconform : true
		},
		"subclassfeature7" : {
			name : "Witchwarden's Gaze",
			source : ["LoI"],
			minlevel : 7,
			description : desc([
				"When I or an ally within 60 feet of me that I can see fails a saving throw or fails to escape a grapple, I can use my reaction to add 1d6 to the roll.",
				"I can use this feature a number of times equal to my Wisdom modifier, and regain all expended uses when I finish a long rest."
			]),
      action : ["reaction", ""],
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest"
		},
		"subclassfeature11" : {
			name : "Warden's Defense",
			source : ["LoI"],
			minlevel : 11,
			description : desc([
				"As a reaction when I or a creature within 5 ft is hit, I can try to fend off the strike",
				"I add 1d8 to the target's AC; If the attack still hits, the target has resistance against it",
				"I can only do this while wielding a melee weapon or a shield"
			]),
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : ["reaction", ""],
		},
		"subclassfeature15" : {
			name : "Spell-Share",
			source : ["LoI"],
			minlevel : 15,
			description : desc([
				"When I cast a ranger spell targeting myself, you can also affect one ally I can see within 30 feet with the spell.",
				"You can use this feature twice, and you regain all expended uses when you finish a short rest."
			]),
			recovery : "long rest",
			usages : 2
		}
	}
});
AddSubClass("rogue", "gatecrasher", {
	regExpSearch : /^(?=.*(rogue|miscreant))(?=.*gatecrasher).*$/i,
	subname : "Gatecrasher",
	source : ["HB:GCR", 1],
	features : {
		"subclassfeature3" : {
			name : "Extraplanar Detection",
			source : ["HB:GCR", 1],
			minlevel : 3,
			description : desc([
				"I can cast the detect evil and good spell; it also detects planar portals",
			]),
			usages : 2,
			recovery : "short rest",
			spellFirstColTitle: "Us",
			spellcastingBonus : {
				name : "Extraplanar Detection",
				spells : ["detect evil and good"],
				selection : ["detect evil and good"],
				firstCol : 2
			},
			spellChanges : {
				"detect evil and good" : {
					description : "Know if abber./celest./elem./fey/fiend/undead/planar portal and des-/consecrated area within 30 ft",
					changes : "Using Extraplanar Detection I can cast detect evil and good, which can also detect extraplanar portals."
				}
			}
		},
		"subclassfeature3.1" : {
			name : "Striker's Gate",
			source : ["HB:GCR", 1],
			minlevel : 3,
			description : desc([
				"If I haven't moved, I can use a bonus action to mark a creature within 30 ft",
				"If I do, I teleport to an unoccupied space within 5 ft of the target",
				"Until the end of my turn I can sneak attack without adv. as long as I don't have disadv.",
				"After I teleport, my speed becomes 0 until the end of the turn"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature9" : {
			name : "Trickster's Gate",
			source : ["HB:GCR", 1],
			minlevel : 9,
			description : desc([
				"As an action, I can create two linked dimensional gates in unoccupied spaces I see",
				"The first appears in a space within 10ft; second appears in a space within 60 ft",
				"Each gate is 10 ft tall and 5 ft wide; gates are visible from one side of my choice",
				"The chosen sides are the sides that function as a portal; last until end of my next turn",
				"A creature/object entering a gate exits the other like the two were adjacent spaces",
				"On subsequent turns I can use my action to maintain the portals"
			]),
			usages : 1,
			recovery : "long rest",
			action : ["action", " (start/maintain)"],
		},
		"subclassfeature13" : {
			name : "Escapist's Gate",
			source : ["HB:GCR", 1],
			minlevel : 13,
			description : desc([
				"I can cast the word of recall spell",
				"When I cast it to designate a sanctuary, the casting time is 1 " + (typePF ? "hour" : "hr") + "; can choose any location",
			]),
			usages : 1,
			recovery : "long rest",
			spellFirstColTitle: "Us",
			spellcastingBonus : {
				name : "Escapist's Gate",
				spells : ["word of recall"],
				selection : ["word of recall"],
				firstCol : 1
			},
			spellChanges : {
				"word of recall" : {
					description : "Me + 5 willing crea teleport to a sanctuary, designated as such by casting this spell there",
					changes : "Using Escapist's Gate I can cast word of recall, allowing me and five other willing creatures to teleport to a previously designated sanctuary."
				}
			}
		},
		"subclassfeature17" : {
			name : "Boltportal Strike",
			source : ["HB:GCR", 1],
			minlevel : 17,
			description : desc([
				"After I use Striker's Gate, I can make a weapon attack against the marked creature",
				"If the attack hits, it deals an additional 3d6 force damage"
			]),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if ((v.isMeleeWeapon || v.isRangedWeapon) && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + '3d6 force damage';
						}
					},
					"If I include the word 'Boltportal' in the name of a weapon, the automation will treat the attack as being against a target of Striker's Gate: adding 3d6 force damage to the attack."
				]
			}
		}
	}
});
AddSubClass("warlock", "the drifter", {
	regExpSearch : /^(?=.*drifter)(?=.*warlock).*$/i,
	subname : "the Drifter",
	source : ["LoI"],
	spellcastingExtra : ["bane", "bless", "enhance ability", "pass without trace", "blink", "nondetection", "death ward", "freedom of movement", "circle of power", "passwall"],
	features : {
		    "subclassfeature1" : {
			name : "Highwayman",
			source : ["LoI"],
			minlevel : 1,
			description : desc([
				"I gain proficiency with medium armor and longswords, rapiers, and scimitars",
				"When I finish a long rest, I can imbue one weapon I touch with my will",
				"Until my next long rest, I can use it with Charisma instead of Strength or Dexterity",
				"I have to be proficient with the weapon and it can't have the two-handed property",
				"This benefit also works with every weapon from Pact of the Blade, with no restriction"
			]),
			armorProfs : [false, true, false, false],
			weaponProfs : [false, false, ["longsword, rapier, scimitar"]],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (What('Cha Mod') > What(AbilityScores.abbreviations[fields.Mod - 1] + ' Mod') && (v.pactWeapon || v.theWea.pactWeapon || /^(?=.*drifter)(?!.*((^|[^+-]\b)2|\btwo).?hand(ed)?s?\b).*$/i.test(v.WeaponText))) {
							fields.Mod = 6;
						};
					},
					"If I include the word 'Drifter' in the name of a weapon that is not two-handed, it gets treated as the weapon I imbued to use Charisma instead of Strength or Dexterity, if my Charisma modifier is higher than the ability it would otherwise use. Alternatively, if I have the Pact of the Blade feature, this will also work for any weapons set to be my Pact Weapon."
				]
			}
		},
		"subclassfeature1.1" : {
				name : "One Step Ahead",
				source : ["LoI"],
				minlevel : 1,
				description : desc([
					"I add my Charisma modifier to initiative rolls"
				]),
				addMod : { type : "skill", field : "Init", mod : "max(Cha|0)", text : "I can add my Charisma modifier to initiative rolls." }
			},
		"subclassfeature6" : {
			name : "Everything's Looking Up",
			source : ["LoI"],
			minlevel : 6,
			description : "\n   " + "I have advantage on all Charisma (Persuasion), Charisma (Deception), and Charisma (Performance) checks against any creature of my choice that isn’t hostile toward you " + "\n   " + "I have advantage on Dexterity saving throws against effects such as traps and spells. To gain this benefit, I can't be incapacitated",
		},
		"subclassfeature10" : {
			name : "Drifter's Gift",
			source : ["LoI"],
			minlevel : 10,
			description : "\n   " + "I gain +10 ft to my walking speed (and swimming/climbing speed, if applicable)",
			speed : {
				walk : { spd : "+10", enc : "+10" },
				climb : { spd : "_10", enc : "_10" },
				swim : { spd : "_10", enc : "_10" }
			}
		},
		"subclassfeature14" : {
			name : "Closing the Distance",
			source : ["LoI"],
			minlevel : 14,
			description : "\n   " + "As an action, I can perform a 1 minute ritual, and cast the teleport spell, expending a spell slot" + "\n   " + "The connection with my patron gives me increased accuracy with the spell" + "\n   " + "I must finish a long rest before using this ability again",
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
AddSubClass("warlock", "the gamemaster", {
	regExpSearch : /^(?=.*gamemaster)(?=.*warlock).*$/i,
	subname : "the Gamemaster",
	source : ["LoI"],
	spellcastingExtra : ["bane", "dissonant whispers", "detect thoughts", "enhance ability", "clairvoyance", "tiny servant", "confusion", "phantasmal killer", "animate objects", "bigby's hand"],
	features : {
		"subclassfeature1" : {
			name : "Gambler's Tools",
			source : ["LoI"],
			minlevel : 1,
			description : "\n   " + "I gain expertise with two gaming sets of my choice, and I can use them as my arcane focus"+ " \n   " + "I also gain proficiency with rapiers",
			toolProfs : [["Gaming sets", 2]],
			weaponProfs : [false, false, ["rapier"]]
		},
   		"subclassfeature1.1" : {
			name : "Siphon Luck",
			source : ["LoI"],
			minlevel : 1,
			description : desc([
				"As a bonus action, I choose one creature I can see within 60 feet of me and choose one ability score.",
				"Whenever that creature makes an ability check with the chosen ability score, it must roll a d4 and subtract the number rolled from the ability check.",
				"An affected creature remains unlucky until you finish a short or long rest, until you are knocked unconscious, or until you use this feature again.",
				"The d4 becomes a d6 at 6th level, a d8 at 10th level, and a d10 at 14th level."
			]),
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest",
			action : ["bonus action", ""]
		},
		"subclassfeature6" : {
			name : "House Advantage",
			source : ["LoI"],
			minlevel : 1,
			description : desc([
				"As a reaction, If I roll a natural 1, I may reroll the die and take the higher number.",
				"If I roll another 1, it is considered a natural 20."
			]),
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest",
			action : ["reaction", ""]
		},
		"subclassfeature10" : {
			name : "Honed Composure",
			source : ["LoI"],
			minlevel : 10,
			description : "\n   " + "Any creature under the effect of my Siphon Luck feature has disadvantage on attack rolls against me." + "\n   " + "If an unlucky creature misses me with an attack, I can use my reaction to attempt to frighten that creature." + "\n   " + "That creature must succeed on a Wisdom saving throw against my spell save DC or be frightened until the end of its next turn." + "\n   " + "I now have advantage on saving throws against being frightened or charmed",
			action : ["reaction", " (when attacked)"],
			savetxt : { adv_vs : ["frightened", "charmed"] },
		},
		"subclassfeature14" : {
			name : "Deadly Ultimatum",
			source : ["LoI"],
			minlevel : 14,
			description : "\n   " + "As an action, I forbid a creature within 60 ft from a certain action" + "\n   " + "If the creature performs the forbidden action, it must make a Wisdom saving throw against my spell save DC, taking 8d6 psychic damage on a failure." + "\n   " + "If it succeeds, this ends the ultimatum.",
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
AddFeatureChoice(ClassList.warlock.features["pact boon"], false, "Pact of the Deck", {
	name : "Pact of the Deck",
	source : ["LoI"],
	description : desc([
		"I use a deck of playing cards as my spellcasting focus",
		"The deck can be used in place of material components for spells if there is no cost and the materials are not consumed",
   		"Every time you cast a warlock spell of 1st level or higher draw and discard a number of cards from your pact deck equal to the spell level",
		"If at least two of the cards are aces, you cast the spell without expending a spell slot. If at least one of the cards is a joker, you cast the spell and roll for an effect on the Wild Magic Surge table.",
    		"I can use my deck as throwing cards (darts) and I am proficient with them",
		"They are one-handed, thrown finesse weapons with a range of 30/60 feet",
    		"As a bonus action, I can draw and discard a card from my deck, and make a ranged attack against a target. Its suit and face value determine its effect",
		"If I lose my deck, I can preform an 1 hour ceremony to gain a replacement",
		"This ceremony destroys the previous deck and can be done during a short or long rest"
	]),
  toNotesPage : [{
				name : "Pact Deck Damage Table",
				source : ["LoI"],
				popupName : "Pact Deck Damage Table, part 1",
				additional : "Suits",
				note : [
        "Suit  Damage",
					"Clubs Force.",
					"Diamonds Cold.",
					"Hearts Fire.",
					"Spades Necrotic.",
          ]
			}, {
				name : "Pact Deck Damage Table",
				source : ["LoI"],
				popupName : "Pact Deck Damage Table, part 2",
				additional : "Values",
				note : [
					"Value  Damage",
					"Ace The target is vulnerable to damage type of your choice until the end of your next turn.",
					"2-10 Damage",
					"Jacks The target’s movement is halved until the end of its next turn as small spikes appear at its feet.",
					"Queens Draw and throw another card, choosing any damage type for the attack.",
					"Kings The target must succeed on a Strength saving throw or be knocked prone.",
                    "Jokers Roll on the Wild Magic Surge Table."
          ]
			}]
		});
AddWarlockInvocation("Blind's Up (prereq: level 5 warlock, Pact of the Deck)", {
	name : "Blind's Up",
	description : desc([
		"I can send cards from your pact deck to spin around the head of a creature within 60 feet, like a zoetrope.",
		"The target must make a Wisdom saving throw",
		"On a failed save, they do not notice the movement of any creature they can see, instead perceiving it as the creature moving on the spot",
		"A creature reveals its new position if it attacks the target",
		"The target cannot make an opportunity attack against a creature that moves out of its melee range while the effect is active",
		"The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success"
	]),
	source : ["LoI"],
	prereqeval : function(v) { return classes.known.warlock.level >= 5 && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the deck'; },
	recovery : "short rest",
	usages : 1,
	action : ["action", ""]
});
AddWarlockInvocation("Bluff (prereq: Pact of the Deck)", {
	name : "Bluff",
	description : desc([
		"I can attempt to conceal my spellcasting by performing card flourishes",
		"I can make a Charisma (Performance) check to disguise any verbal or somatic components as I cast the spell",
		"This is against the Passive Perception of each of those who I are attempting to deceive",
		"On a success they are unaware that you have cast a spell.",
		"The +5 bonus to card-related checks does not apply to this feature"
	]),
	source : ["LoI"],
	prereqeval : function(v) { return GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the deck'; }
});
AddWarlockInvocation("Damage Dealer (prereq: level 7 warlock, Pact of the Deck)", {
	name : "Damage Dealer",
	description : desc([
		"When I draw a throwing card of face value three or lower, I may draw another and throw the new card instead.",
		"I then discard both cards"
	]),
	source : ["LoI"],
	prereqeval : function(v) { return classes.known.warlock.level >= 7 && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the deck'; }
});
AddWarlockInvocation("Diviner (prereq: level 5 warlock, Pact of the Deck)", {
	name : "Diviner",
	description : desc([
		"I am able to read my pact deck to predict the actions of your opponents",
		"On your turn in combat, you can slow your movement to 0 feet to take a reading",
		"Draw five cards, and return them in any order to the top of my deck",
		"All opponents have disadvantage on their attacks against me until my next turn."
	]),
	source : ["LoI"],
	prereqeval : function(v) { return classes.known.warlock.level >= 5 && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the deck'; },
	recovery : "long rest",
	usages : 1,
	action : ["action", ""]
});
AddWarlockInvocation("Fresh Hand (prereq: level 7 warlock, Pact of the Deck)", {
	name : "Fresh Hand",
	description : desc([
		"As a bonus action, I can draw a card from my pact deck.",
		"I can regain a spell slot by discarding every card of this suit left in my deck.",
		"If I draw a joker, I do not regain a spell slot, and must shuffle any discarded jokers back into my deck.",
		"I regain the use of this feature after a short rest"
	]),
	source : ["LoI"],
	prereqeval : function(v) { return classes.known.warlock.level >= 7 && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the deck'; },
	recovery : "short rest",
	usages : 1,
	action : ["bonus action", ""]
});
AddWarlockInvocation("Suit of Armor (prereq: level 5 warlock, Pact of the Deck)", {
	name : "Suit of Armor",
	description : desc([
		"I am able to surround myself with a protective layer of cards",
		"I can draw and discard a card from my pact deck",
		"For one hour, I gain temporary hit points equal to the face value of the card (1-13) and resistance to the damage type represented by its suit",
		"If I draw a joker, discard it and draw another card - the effect targets the nearest creature to me."
	]),
	source : ["LoI"],
	prereqeval : function(v) { return classes.known.warlock.level >= 5 && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the deck'; },
	recovery : "short rest",
	usages : 1,
	action : ["bonus action", ""]
});
AddWarlockInvocation("Swindle (prereq: Pact of the Deck)", {
	name : "Swindle",
	description : desc([
		"I can attempt to sneak a card from your discard pile back into your pact deck",
		"As a bonus action, I make a Sleight of Hand check against DC 10. Every time I attempt this, the DC increases by 5, and resets to 10 after a long rest",
		"On a success, my patron doesn’t notice my con, and I can move a card of your choice from the discard pile to anywhere in your pact deck.",
		"On a failure, you are caught, stunned until the end of your next turn, and your patron compels you to shuffle any jokers in your discard pile back into your pact deck."
	]),
	source : ["LoI"],
	prereqeval : function(v) { return GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the deck'; }
});
AddWarlockInvocation("Warped Limits (prereq: level 9 warlock, Pact of the Deck)", {
	name : "Warped Limits",
	description : desc([
		"Your spells with a base range of ‘Touch’ can be cast with a range of 60 feet.",
	    "If I draw a joker, discard it and draw another card - the effect targets the nearest creature to me"
	]),
	source : ["LoI"],
	prereqeval : function(v) { return classes.known.warlock.level >= 5 && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the deck'; }
});
MagicItemsList["storm blade"] = {
	name : "Storm Blade",
	source : ["LoI"],
	type : "weapon (any sword)",
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description : "As a bonus action, I can speak the command word of this magic sword, causing lightning to erupt from it. This lightning adds +1d8 lightning damage. The lightning lasts until I speak the command word again as a bonus action or sheathe it.",
		descriptionFull : "You can use a bonus action to speak this magic sword's command word, causing lightning to erupt from the blade. While the sword is active, it deals an extra 1d8 lightning damage to any target it hits. The lightning last until you use a bonus action to speak the command word again or until you drop or sheathe the sword.",
		action : [["bonus action", " (activate/end)"]],
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
			descriptionChange : ["replace", "sword"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /sword|scimitar|rapier/i;
				return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
			}
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/^(?=.*storm)(?=.*blade).*$/i).test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + 'While active, +1d8 lightning damage';
					}
				},
				'If I include the words "Storm Blade" in a the name of a sword, it will be treated as the magic weapon Storm Blade. When the command word is spoken, the blade erupts with ligtning, adding +1d8 lightning damage on a hit.'
			]
		}
	},
MagicItemsList["storm bringer"] = {
  name: "Storm Bringer",
  source: ["LoI"],
  type: "weapon (longsword)",
  rarity: "legendary",
  attunement: true,
  description: "",
  descriptionFull:
    "The thick, grooved blade of this shining silver longsword is lined with Lichtenberg patterns that crackle blue in the light. Storm Bringer—known also as Aimsir— is the weapon of the latest champions of Velios, the god of storms.." +
    "\n" +
    toUni("Dormant") +
    "\n" +
    "While Storm Bringer is in a dormant state, you can hold this magic longsword and use a bonus action to speak the command word Tintreach, causing the sword to emit a pale blue glow that sheds bright light in a 20-foot radius and dim light for an additional 20 feet. This glow lasts until you use a bonus action to speak the command word again, or until you drop or sheathe the sword." +
    "\n" +
    "\u2022 While this longsword is glowing, you gain a +1 bonus to attack and damage rolls made with the weapon, and you have resistance to lightning damage." +
    "\n" +
    "\u2022 You can cast the thunderwave spell from the weapon as an action, requiring no components (save DC 13). Once a spell has been cast using Storm Bringer, that spell can't be cast from the sword until the next dawn." +
    "\n" +
    toUni("Awakened") +
    "\n" +
    "When Storm Bringer reaches an awakened state, you gain the following benefits:" +
    "\n" +
    "\u2022 The weapon's bonus to attack and damage rolls increases to +2." +
    "\n" +
    "\u2022 When a creature within 5 feet of you hits you with a melee attack, you can use your reaction to create a burst of thunder from the sword, dealing 1d8 thunder damage to the attacker." +
    "\n" +
    "\u2022 You can cast the warding wind spell from the sword as an action, and the save DC for spells cast using the sword increases to 15." +
    "\n" +
    toUni("Exalted") +
    "\n" +
    "\u2022 When Storm Bringer reaches an exalted state, you gain the following benefits:" +
    "\n" +
    "\u2022 The weapon's bonus to attack and damage rolls increases to +3." +
    "\n" +
    "\u2022 The burst of thunder you can create as a reaction when hit with a melee attack deals 1d12 thunder damage, and you can immediately teleport to an unoccupied space you can see within 15 feet of you as part of the same reaction." +
    "\n" +
    "\u2022 You can cast the fly spell from the sword as an action, and the save DC for spells cast using the sword increases to 17.",
  allowDuplicates: false,
  choices: ["Dormant", "Awakened", "Exalted"],
  dormant: {
    name: "Dormant Storm Bringer",
    description:
      "While holding this sword, I can speak its command word to cause it to glow bright light in 20 ft, dim light in 20 ft. While glowing, it adds +1 to hit and damage and grants resistance to lightning damage. Once per dawn, I can cast thunderwave (DC 13).",
    weaponsAdd: ["Dormant Storm Bringer"],
    weaponOptions: {
      baseWeapon: "longsword",
      regExpSearch: /^(?=.*dormant)(?=.*storm bringer).*$/i,
      name: "Dormant Storm Bringerr",
      source: ["GMBDB"],
    },
    action: [
      ["bonus action", " (start/stop glow)"],
      ["action", " (thunderwave)"],
    ],
    calcChanges: {
      atkCalc: [
        function (fields, v, output) {
          if (
            /\bstorm bringer\b/i.test(v.WeaponTextName) &&
            /\bglowing\b/i.test(v.WeaponTextName)
          ) {
            output.magic += 1;
          }
        },
        "If I include the word 'Glowing' in Storm Bringer's name, the calculation will add +1 to hit and damage.",
      ],
    },
    spellFirstColTitle: "Us",
    fixedDC: 13,
    spellcastingBonus: [
      {
        name: "Once per dawn",
        spells: ["thunderwave"],
        selection: ["thunderwave"],
        firstCol: "checkbox",
      },
    ],
    extraLimitedFeatures: [
      {
        name: "Thunderwave (Storm Bringer)",
        usages: 1,
        recovery: "dawn",
      },
    ],
  },
  awakened: {
    name: "Awakened Storm Bringer",
    description:
      "While holding this sword, I can speak its command word to cause it to glow bright light in 20 ft, dim light in 20 ft. While glowing, it adds +2 to hit and damage and grants resistance to lightning damage. Once per dawn per spell, I can cast (DC 15) thunderwave and warding wind. See third page.",
    weaponsAdd: ["Awakened Storm Bringer"],
    weaponOptions: {
      baseWeapon: "longsword",
      regExpSearch: /^(?=.*awakened)(?=.*storm bringer).*$/i,
      name: "Awakened Storm Bringer",
      source: ["GMBDB"],
    },
    action: [
      ["bonus action", " (start/stop glow)"],
      ["reaction", " (when hit in melee)"],
    ],
    calcChanges: {
      atkCalc: [
        function (fields, v, output) {
          if (
            /\bstar razor\b/i.test(v.WeaponTextName) &&
            /\bglowing\b/i.test(v.WeaponTextName)
          ) {
            output.magic += 2;
          }
        },
        "If I include the word 'Glowing' in Storm Bringer's name, the calculation will add +2 to hit and damage.",
      ],
    },
    spellFirstColTitle: "Us",
    fixedDC: 15,
    spellcastingBonus: [
      {
        name: "Once per dawn",
        spells: ["thunderwave"],
        selection: ["thunderwave"],
        firstCol: "checkbox",
      },
      {
        name: "Once per dawn",
        spells: ["warding wind"],
        selection: ["warding wind"],
        firstCol: "checkbox",
      },
    ],
    extraLimitedFeatures: [
      {
        name: "Thunderwave (Storm Bringer)",
        usages: 1,
        recovery: "dawn",
      },
      {
        name: "Warding Wind (Storm Bringer)",
        usages: 1,
        recovery: "dawn",
      },
    ],
    toNotesPage: [
      {
        name: "Features",
        page3notes: true,
        note: [
          "When hit in melee, I can use my reaction to deal 1d8 thunder damage to the attacker",
        ],
      },
    ],
  },
  exalted: {
    name: "Exalted Storm Bringer",
    description:
      "While holding this sword, I can speak its command word to cause it to glow bright light in 20 ft, dim light in 20 ft. While glowing, it adds +3 to hit and damage and grants resistance to lightning damage. Once per dawn per spell, I can cast (DC 15) thunderwave, warding wind, and fly. See third page.",
    weaponsAdd: ["Exalted Storm Bringer"],
    weaponOptions: {
      baseWeapon: "longsword",
      regExpSearch: /^(?=.*exalted)(?=.*storm bringer).*$/i,
      name: "Exalted Storm Bringer",
      source: ["GMBDB"],
    },
    action: [
      ["bonus action", " (start/stop glow)"],
      ["reaction", " (when hit in melee)"],
    ],
    calcChanges: {
      atkCalc: [
        function (fields, v, output) {
          if (
            /\bstar razor\b/i.test(v.WeaponTextName) &&
            /\bglowing\b/i.test(v.WeaponTextName)
          ) {
            output.magic += 3;
          }
        },
        "If I include the word 'Glowing' in Storm Bringer's name, the calculation will add +3 to hit and damage.",
      ],
    },
    spellFirstColTitle: "Us",
    fixedDC: 17,
    spellcastingBonus: [
      {
        name: "Once per dawn",
        spells: ["thunderwave"],
        selection: ["thunderwave"],
        firstCol: "checkbox",
      },
      {
        name: "Once per dawn",
        spells: ["warding wind"],
        selection: ["warding wind"],
        firstCol: "checkbox",
      },
      {
        name: "Once per dawn",
        spells: ["fly"],
        selection: ["fly"],
        firstCol: "checkbox",
      },
    ],
    extraLimitedFeatures: [
      {
        name: "Thunderwave (Storm Bringer)",
        usages: 1,
        recovery: "dawn",
      },
      {
        name: "Warding Wind (Storm Bringer)",
        usages: 1,
        recovery: "dawn",
      },
      {
        name: "Fly (Storm Bringer)",
        usages: 1,
        recovery: "dawn",
      },
    ],
    toNotesPage: [
      {
        name: "Features",
        page3notes: true,
        note: [
          "When hit in melee, I can use my reaction to deal 1d12 thunder damage to the attacker",
          "I can then teleport to a seen, unoccupied space within 15 ft",
        ],
      },
    ],
  },
};
MagicItemsList["fire brand warhammer"] = {	
	name : "Fire Brand Warhammer",
	source : ["LoI"],
	type : "weapon (warhammer)",
	attunement : true,
	description : "As a bonus action, I can speak the command word to cause flames that add +1d6 fire damage and shine bright light for 30 ft \u0026 dim light for 30 ft. The flames last until I speak the word again or drop it.",
	descriptionFull : "You can use a bonus action to speak this magic warhammer's command word, causing flames to erupt from the head. These flames shed bright light in a 30-foot radius and dim light for an additional 30 feet. While the warhammer is ablaze, it deals an extra 1d6 fire damage to any target it hits. The flames last until you use a bonus action to speak the command word again or until you drop or sheathe the sword.",
	action : [
		["bonus action", "Fire Brand (activate/end)"]
	],
	weaponsAdd : ["Fire Brand Warhammer"],
	weaponOptions : {
		baseWeapon : "warhammer",
		regExpSearch : /^(?=.*fire brand)(?=.*war)(?=.*hammer).*$/i,
		name : "Fire Brand Warhammer",
		source : ["LoI"],
		description : "Versatile; While active, +1d6 fire damage",
	}
};
  MagicItemsList["gauntlets of storming fury"] = {
	name : "Gauntlets of Storming Fury",
	source : ["LoI"],
	type : "wondrous item",
	rarity : "rare",
	description : "While wearing both these steel gauntlets, any weapons I grasp with them count as magical. As a bonus action once per dawn, I can use them to envelop one or two melee weapons in my grasp with magical lightning, causing them to deal an extra 1d8 lightning damage on a hit. This last until I sheath or let go of a weapon.",
	descriptionFull : "While you wear both of these steel gauntlets, any non- magical weapon you grasp with either gauntlet is treated as a magic weapon. As a bonus action, you can use the gauntlets to cause magical lightning to envelop one or two melee weapons in your grasp. Each empowered weapon deals an extra 1d8 lightning damage on a hit. The lightning last until you sheath or let go of either weapon. Once used, this property can't be used again until the next dawn.",
	attunement : true,
	action : [["bonus action", ""]],
	usages : 1,
	recovery : "dawn",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.isSpell && !v.isNaturalWeapon && !v.thisWeapon[1] && !v.theWea.isMagicWeapon && !(/dancing|counts as( a)? magical/i).test(fields.Description)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical';
				};
			},
			"Any nonmagical weapons that I grasp with my Gauntlets of Storming Fury count as magical for overcoming resistances and immunities."
		]
	}
};
