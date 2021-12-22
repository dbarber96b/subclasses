/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclasses for the Romythra Campaign Setting
				
	Code by:	dbarber96b
	Date:		2021-07-26 (sheet v13.0.0beta16)
*/

var iFileName = "Romythra.js";
RequiredSheetVersion(13);

SourceList["GMBDB"] = {
	name : "GMBinderDBarber96b",
	abbreviation : ["GMBDB"],
	group : "Dbarber96b",
	url : "https://www.gmbinder.com/share/-MezALlhpv89Ezt1QQlz",
	date : "2021/07/21"
};
AddSubClass("warlock", "the lady of the lake", {
	regExpSearch : /^(?=.*warlock)(?=.*lady)(?=.*(lake)).*$/i,
	subname : "the Lady of the Lake",
	source : ["GMBDB"],
	spellcastingExtra : ["shield", "bane", "calm emotions", "find steed", "crusader's mantle", "elemental weapon", "aura of purity", "control water", "dispel evil and good", "holy weapon"],
	features : {
		"subclassfeature1" : {
			name : "Warrior's Challenge",
			source : ["GMBDB"],
			minlevel : 1,
			description : desc([
				"As a bonus action, I can challenge a creature I can see within 30 ft of me for 1 minute",
				"\u2022 I add my proficiency bonus to damage rolls against the challenged target",
				"\u2022 My attack rolls against the challenged target score a critical hit on a roll of 19 and 20",
				"\u2022 If the target attacks a creature other than me, it must make a Wisdom saving throw or else make the attack at disadvantage",
				"The challenge ends after 1 minute, when the target dies, I die, or I'm incapacitated"
			]),
			recovery : "short rest",
			usages : 1,
			action : ["bonus action", ""],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (!v.isDC && (/challenge/i).test(v.WeaponText) && !v.CritChance) {
							v.CritChance = 19;
							fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20';
						}
					},
					"If I include the word 'Challenge' in the name of a weapon, the automation will treat the attack as being against a target of the Warrior's Challenge: adding my proficiency bonus to the damage and adding the increased chance of a critical hit to the description."
				],
				atkCalc : [
					function (fields, v, output) {
						if ((/challenge/i).test(v.WeaponText)) output.extraDmg += output.prof;
					}, ""]
			}
		},
		"subclassfeature1.1" : {
			name : "Sentinel",
			source : ["GMBDB"],
			minlevel : 1,
			description : desc([
				"I gain proficiency with medium armor, shields, and martial weapons",
				"When I finish a long rest, I can imbue one weapon I touch with my will",
				"Until my next long rest, I can use it with Charisma instead of Strength or Dexterity",
				"I have to be proficient with the weapon and it can't have the two-handed property",
				"This benefit also works with every weapon from Pact of the Blade, with no restriction",
                "For my eldritch blast, I can change the damage type to radiant"
			]),
			armorProfs : [false, true, false, true],
			weaponProfs : [false, true],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						var hasPactWeapon = GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the blade';
						if (What('Cha Mod') > What(AbilityScores.abbreviations[fields.Mod - 1] + ' Mod') && (v.pactWeapon || v.theWea.pactWeapon || (hasPactWeapon && (/\bpact\b/i).test(v.WeaponText)) || (/^(?=.*hexblade)(?!.*((^|[^+-]\b)2|\btwo).?hand(ed)?s?\b).*$/i).test(v.WeaponText))) {
							fields.Mod = 6;
						};
					},
					"If I include the word 'Sentinel' in the name of a weapon that is not two-handed, it gets treated as the weapon I imbued to use Charisma instead of Strength or Dexterity, if my Charisma modifier is higher than the ability it would otherwise use. Alternatively, if I have the Pact of the Blade feature, this will also work if I include 'Pact' in the name of a weapon, regardless if it has the two-handed property."
				]
			}
		},
		"subclassfeature6" : {
			name : "Enchanted Blade",
			source : ["GMBDB"],
			minlevel : 6,
			description : desc([
				"I can choose a spell of 5th level or lower that I can cast, which targets one or more creatures, and which requires them to make a saving throw",
				"If channeling my will through a melee weapon using the Sentinel feature, I can enchant the blade with the spell instead of casting it, using the same components",
				"The enchantment has a number of charges equal to the number of targets allowed by the spell, and its duration, equal to that of the spell, begins when placed on the weapon",
				"When I hit a creature with a weapon attack using this weapon, I can expend a charge of the spell, the target makes the saving throw at disadvantage.",
				]),
			usages : "Charisma modifier per ",
      usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest",
		},
    "subclassfeature10" : {
			name : "Armor of the Chalice",
			source : ["GMBDB"],
			minlevel : 10,
			description : desc([
				"As a reaction when a Warrior's Challenge recipient hits me with an attack, I can roll a d6",
				"On a result of 4 or higher, the attacks misses me instead, regardless of its d20 roll"
			])
		},
		"subclassfeature14" : {
			name : "Champion of the Grail",
			source : ["GMBDB"],
			minlevel : 14,
			description : desc([
				"When the target of my Warrior's Challenge dies, I can challenge another I can see within 30 ft",
				"I can't do this while incapacitated and I don't regain HP from the death of the previous"
			])
		}
	}
});

AddSubClass("cleric", "avalon domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(avalon|knight|lake)).*$/i,
	subname : "Avalon Domain",
	source : ["GMBDB"],
	spellcastingExtra : ["divine favor", "sanctuary", "gentle repose", "spiritual weapon", "beacon of hope", "blinding smite", "control water", "guardian of faith", "mass cure wounds", "banishing smite"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : ["GMBDB"],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with martial weapons and heavy armor",
			armorProfs : [false, false, true, false],
			weaponProfs : [false, true]
      },
		"subclassfeature1.1" : {
			name : "Divine Knight",
			source : ["GMBDB"],
			minlevel : 1,
			description : "\n   " + "When I use the Attack action, I can make a weapon attack as a bonus action",
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : ["bonus action", " (with Attack action)"]
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Waters of the Grail",
			source : ["GMBDB"],
			minlevel : 2,
			description : "\n   " + "I can bless pure fresh water for healing purposes" + "\n   " + "The water must be stored in a water skin or other appropriate vessel" + "\n   " + "The water instantly restores 10 hp when consumed" + "\n   " + "The water loses the magical benefits after 48 hours, and cannot be re-blessed",
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
		},
		"subclassfeature6" : {
			name : "Channel Divinity: Blessing of the Mists",
			source : ["GMBDB"],
			minlevel : 6,
			description : "\n   " + "As a reaction, when I or an ally I see with 30 ft fails a saving throw, I can cause myself or my ally to reroll the saving throw " + "\n   " + "A creature that succeeds a saving throw using this ability regains hit points equal to my cleric level",
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
            action : ["reaction", ""]
		},
		"subclassfeature8" : {
			name : "Divine Justice",
			source : ["GMBDB"],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 radiant damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 radiant damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra radiant damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Prayer for the Fallen Warrior",
			source : ["GMBDB"],
			minlevel : 17,
			description : "\n   " + "As a reaction once per day, when an ally with 30 ft. is reduced to 0 or fewer hp, I can renew their spirit to fight on" + "\n   " + "The target regains half their hit points, and can stand as a free action" + "\n   " + "On my ally's next action, they have advantage on attack rolls",
        usages : 1,
        action : ["reaction", ""]
		}
	}
});

AddSubClass("paladin", "oath of the lake", {
	regExpSearch : /^((?=.*(knight|lake))|((?=.*(nimue|arthurian))(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))))).*$/i,
	subname : "Oath of the Lake",
	source : ["GMBDB"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Sacrifice for the Lady",
			source : ["GMBDB"],
			minlevel : 3,
			description : "\n   " + "I can use my channel divinity to grant myself advantage on melee attacks on my next turn" + "\n   " + "The target also gets advantage on attacks against me on its turn",
			spellcastingExtra : ["heroism", "compelled duel", "misty step", "enhance ability", "bestow curse", "crusader's mantle", "spirit guardians", "aura of purity", "guardian of faith", "circle of power", "dispel good and evil"]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Anvil and Hammer",
			source : ["UA:PSO", 1],
			minlevel : 3,
			description : "\n   " + "As a reaction, I can use my channel divinity to intercept an attack on a friendly creature" + "\n   " + "The creature must be within a radius of my movement" + "\n   " + "The attacker must now target me instead of my ally" + "\n   " + "I can make a melee attack if the attacker is in range, even if the triggering attack would drop me",
      action : ["reaction", ""]
      },
		"subclassfeature7" : {
			name : "Mighty Deed",
			source : ["GMBDB"],
			minlevel : 7,
			description : desc([
				"When I score a critical hit or reduce a target to 0 HP, I can bolster morale or demoralize",
				"Up to my Cha mod (min 1) of creatures I can see in 30 ft suffer the same chosen effect:",
				" \u2022 All creatures gain temp HP equal to 1d6 + my Charisma modifier (min 1 temp HP)",
				" \u2022 All creatures must make a Wis save or be frightened of me until my next turn starts"
			]),
			recovery : "Round",
			usages : 1
		},
		"subclassfeature15" : {
			name : "Sword of the Lady",
			source : ["GMBDB"],
			minlevel : 15,
			description : "\n   " + "I am compelled to travel to the nearest body of pure water" + "\n   " + "After 24 hours of prayer and fasting, the Lady of the Lake appears and gifts a sacred sword" + "\n   " + "The Sword requires attunement and being given a name to unlock all its benfits" + "\n   " + "My DM will decide the sword's attributes."
		},
		"subclassfeature20" : {
			name : "Champion of the Court",
			source : ["UA:PSO", 2],
			minlevel : 20,
			description : "\n   " + "As an action, I can gain the following benefits for 1 hour:" + "\n    - " + "I have resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons" + "\n    - " + "My allies have advantage on Death Saving throws while within 30 feet of me" + "\n    - " + "I gain the benefits of the Enlarge Spell" + "\n    - " + "Attacks on me, and friendly creatures within a 30-foot radius, are made with disadvantage",
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
AddSubClass("fighter", "green-knight", {
	regExpSearch : /^(?=.*arcane)(?=.*archer).*$/i,
	subname : "Green Knight",
	source : ["GMBDB"],
	fullname : "Green Knight",
	abilitySave : 4,
	features : {
		"subclassfeature3" : {
			name : "Aspects of the Vale",
			source : ["X", 28],
			minlevel : 3,
			description : desc([
				"I gain proficiency with the Persuasion and Perception skills",
				"I also learn the Druidcraft cantrip"
			]),
			skillstxt : "Persuasion and Perception",
			spellcastingBonus : {
				name : "Aspects of the Vale",
				spells : ["druidcraft"]
			},
		},
    "subclassfeature7" : {
			name : "Rooted in Mortality",
			source : ["GMBDB"],
			minlevel : 7,
			description : "\n   " + "I become proficient in Death saving throws" + "If the result of the saving throw is 20 or higher, I regain 1 hit point"
		},
    "subclassfeature10" : {
			name : "Companion of Vines",
			source : ["GMBDB"],
			minlevel : 10,
			description : desc([
				"As a bonus action I can summon an illusion wrapped in vines and dense leaves",
				"The illusion appears in a space adjeacent to a target of my attack, and makes an attack with a mundane copy of my weapon",
        "This illusion can make opportunity attacks as if you were in the place of the copy",
        "The illusion cannont move from the location it appeared in, and lasts for 1 minute"
			]),
			usages : "Charisma modifier per ",
      usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest",
			action : ["bonus action", ""]
		},
    "subclassfeature15" : {
			name : "Against the Odds",
			source : ["GMBDB"],
			minlevel : 15,
			description : "\n   " + "When I use Action Surge on my turn, I gain a number of temporary hit points equalt to my Constitution modifier for each hostile creature within 10 feet of me"
		},
		"subclassfeature18" : {
			name : "Undaunted Form",
			source : ["GMBDB"],
			minlevel : 18,
      recovery : "long rest",
			description : desc([
				"I will a physical copy of myself into existence in a space within 5 feet of me",
				"When it appears, it makes a melee weapon attack against a hostile creature within range",
				"The copy has a number of hit points equal to half of my total hit points",
        "It lasts for eight hours, until it is reduced to 0 hit points, or until it is dismissed as an action",
        "The copy shares my initiative, has mundane copies of the weapons I have, which it can make an attack with as an action",
        "The copy's attacks count as magical for overcoming resistances and immunities, and has an attack bonus equal to my Charisma + my proficiency bonus. On a hit it deals 2d8 + my Charisma modifier force damage",
        "The copy follows my commands, which I communicate telepathically",
			])
		}
	}
});
AddSubClass("sorcerer", "myrddins legacy", {
	regExpSearch : /^(?=.*myrddin)(?=.*legacy)(?=.*(fey)).*$/i,
	subname : "Myrddin's Legacy",
	source : ["GMBDB"],
	spellcastingExtra : ["charm person", "faerie fire", "misty step", "animal messenger", "summon fey", "hypnotic pattern", "charm monster", "greater invisiblity", "dream", "seeming"],
	features : {
		"subclassfeature1" : {
			name : "Nature's Initiate",
			source : ["GMBDB"],
			minlevel : 1,
			description : desc([
				"I also learn the Druidcraft cantrip"
			]),
				spellcastingBonus : {
				name : "Nature's Initiate",
				spells : ["druidcraft"]
			},
		},
		"subclassfeature1.2" : {
			name : "Mask of the Courts",
			source : ["GMBDB"],
			minlevel : 1,
			description : desc([
				"I can cast disguise self at will without using a spell slot",
				"This spell counts as a sorcerer spell for me, but doesn't count against my number of spells known"
			]),
			spellcastingBonus : {
				name : "Mask of the Courts",
				spells : ["disguise self"],
				selection : ["disguise self"]
			}
		},
		"subclassfeature1.3" : {
			name : "Myrddin's Empathy",
			source : ["GMBDB"],
			minlevel : 3,
			description : desc([
				"I gain proficiency with the Insight skill",
				"I also have advantage on Wisdom (Insight) checks when determining a creature's emotional state",
                "I can't be put to sleep by magic, and I have advantage on saves against the effect of the calm emotions spell",
                "I can speak, read, and write Sylvan, and I can use a druidic focus as my spell casting focus"
			]),
			skillstxt : "Insight",
      languageProfs : ["Sylvan"],
      savetxt : { immune : ["calm emotions"] },
		adv_vs : ["charmed"]
    },
		"subclassfeature6" : {
			name : "A Wink and a Nod",
			source : ["GMBDB"],
			minlevel : 6,
            action : ["bonus action", ""],
			description : " [2 sorcery points]" + desc([
				"By spending 2 sorcery points, I can turn invisible and magically teleport up to 30 feet to an unoccupied space that I can see",
				"I remain invisible until the start of my next turn, or until I attack or cast a spell"
			])
      
		},
		"subclassfeature14" : {
			name : "Travel the Realms",
			source : ["GMBDB"],
			minlevel : 14,
			description : desc([
				"I can learn the teleport spell if I don't already know it",
				"This spell doesn't count against my number of spells known",
        
			]),
			spellcastingBonus : {
				name : "Travel the Realms",
				spells : ["teleport"],
				selection : ["teleport"]
			}
		},
		"subclassfeature18" : {
			name : "Myrddin's Inheritance",
			source : ["GMBDB"],
			minlevel : 18,
      usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest",
			description : "\n   " + "I become immune to all effects that charm, frighten, or put me to sleep" + "\n   " + "I can extend an 30 foot aura. All creatures of the humanoid or beast type must succeed a Charisma saving throw when they start their turn in the aura or be charmed" + "\n   " + "I can spend 5 sorcery points to give all creatures disadvantage on this save",
			action : ["bonus action"],
			savetxt : { immune : ["charmed", "sleep", "frightened"] }
		}
	}
});

BackgroundList["blade's guild marshal"] = {
	regExpSearch : /marshal/i,
	name : "Blade's Guild Marshal",
	source : ["GMBDB"],
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
BackgroundList["ashlander"] = {
	regExpSearch : /ashlander/i,
	name : "Ashlander",
	source : ["GMBDB"],
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
BackgroundList["hag raised"] = {
	regExpSearch : /hag/i,
	name : "Hag Raised",
	source : ["GMBDB"],
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
	source : ["GMBDB"],
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
	source : ["GMBDB"],
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
BackgroundList["mystic"] = {
	regExpSearch : /mystic/i,
	name : "Mystic",
	source : ["GMBDB"],
	skills : ["Insight", "Medicine"],
	gold : 5,
	equipleft : [
		["Winter blanket", "", 3],
		["Herbalism kit", "", 3]
	],
	equipright : [
		["Common clothes", "", 3],
		["Scroll case with notes", "", 1]
	],
	feature : "Revelation",
	trait : [
		"I've been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.",
		"I am utterly serene, even in the face of disaster.",
		"The leader of my community had something wise to say on every topic, and I am eager to share that wisdom.",
		"I feel tremendous empathy for all who suffer.",
		"I'm oblivious to etiquette and social expectations.",
		"I connect everything that happens to me to a grand, cosmic plan.",
		"I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.",
		"I am working on a grand philosophical theory and love sharing my ideas."
	],
	ideal : [
		["Greater Good",
			"Greater Good: My gifts are meant to be shared with all, not used for my own benefit. (Good)"
		],
		["Logic",
			"Logic: Emotions must not cloud our sense of what is right and true, or our logical thinking. (Lawful)"
		],
		["Free Thinking",
			"Free Thinking: Inquiry and curiosity are the pillars of progress. (Chaotic)"
		],
		["Power",
			"Power: Solitude and contemplation are paths toward mystical or magical power. (Evil)"
		],
		["Live and Let Live",
			"Live and Let Live: Meddling in the affairs of others only causes trouble. (Neutral)"
		],
		["Self-Knowledge",
			"Self-Knowledge: If you know yourself, there's nothing left to know. (Any)"
		]
	],
	bond : [
		"Nothing is more important than the other members of my hermitage, order, or association.",
		"I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.",
		"I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.",
		"I entered seclusion because I loved someone I could not have.",
		"Should my discovery come to light, it could bring ruin to the world.",
		"My isolation gave me great insight into a great evil that only I can destroy."
	],
	flaw : [
		"I hold others to a high standard, and myself even higher.",
		"I place too much faith in those most powerful within my temple's hierarchy.",
		"My religiosity can lead me to naively trust those that claim faith in my deity.",
		"I am very stubborn in my thinking.",
		"I am pessimistic and distrustful of strangers.",
		"Once I choose an objective, I become so single minded that the rest of my life fades into the background."
	],
	extra : [
		"Select a Life of Seclusion",
		"Searching for spiritual enlightenment",
		"Living in accordance with a religious order",
		"Exiled for a crime I didn't commit",
		"Retreated from society after a life-altering event",
		"Worked on my art, literature, music, or manifesto",
		"Commune with nature, far from civilization",
		"Caretaker of an ancient ruin or relic",
		"Pilgrim in search of a thing of spiritual significance"
	],
	toolProfs : ["Herbalism kit"],
	languageProfs : [2],
	lifestyle : "poor"
};
BackgroundFeatureList["armory access"] = {
	description : "I have access to the stores of any Blade's Guild armory. Should I require any mundane simple or martial weapon, I can obtain one or two for each memeber of my party. I can also acquire studded leather armor, chain shirts, and chain mail if the armory is well stocked. Should I require any other mundane weapons or armor, I can purchase them for 50% less than their listed price.",
	source : ["GMBDB"]
};
BackgroundFeatureList["ashland lingo"] = {
	description : "When I speak to another Ashlander, they will recognize my accent and language use as being from the Ashlands, even if they are not from there themselves. The will immediately be more receptive to my requests and ideas, as they understanc that you must have been raised around their kin. Conversely, anyone who holds prejudice against Ashlanders will immediately be suspicious of me.",
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
BackgroundFeatureList["revelation"] = {
	description : "The quiet meditation gave you access to a unique and powerful revelation. The exact nature of this discovery depends on the nature of your spiritual journey. It might be a great truth about the cosmos, the deities, the powerful beings of the outer planes, or the forces of nature. It could be a site that no one else has ever seen. You might have uncovered a fact that has long forgotten, or unearthed some relic of the past that could rewrite history. Work with your DM to determine the details of your revelation and its impact on the campaign..",
	source : ["GMBDB"]
};