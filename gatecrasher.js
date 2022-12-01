AddSubClass("rogue", "gatecrasher", {
	regExpSearch : /^(?=.*(gate|rogue|miscreant))(?=.*\b(eldritch|arcane|magic|mage|witch)\b).*$/i,
	subname : "Gatecrasher",
	fullname : "Gatecrasher",
	source : ["GMBDB"],
	abilitySave : 4,
	spellcastingFactor : 3,
	spellcastingList : {
		"class" : "sorcerer",
		school : ["Conj", "Div", "Trans"],
		level : [0, 4]
	},
	spellcastingKnown : {
		cantrips : [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		spells : [0, 0, 2, 3, 3, 3, 4, 4, 4, 5, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9]
	},
	features : {
		"subclassfeature3" : {
			name : "Spellcasting",
			source : [["P", 98]],
			minlevel : 3,
			description : "\n   " + "I can cast known sorcerer cantrips/spells, using Intelligence as my spellcasting ability",
			additional : ["", "", "3 cantrips \u0026 3 spells known", "3 cantrips \u0026 4 spells known", "3 cantrips \u0026 4 spells known", "3 cantrips \u0026 4 spells known", "3 cantrips \u0026 5 spells known", "3 cantrips \u0026 6 spells known", "3 cantrips \u0026 6 spells known", "4 cantrips \u0026 7 spells known", "4 cantrips \u0026 8 spells known", "4 cantrips \u0026 8 spells known", "4 cantrips \u0026 9 spells known", "4 cantrips \u0026 10 spells known", "4 cantrips \u0026 10 spells known", "4 cantrips \u0026 11 spells known", "4 cantrips \u0026 11 spells known", "4 cantrips \u0026 11 spells known", "4 cantrips \u0026 12 spells known", "4 cantrips \u0026 13 spells known"],
			spellcastingBonus : [{
				name : "Mage Hand cantrip", // the Mage Hand cantrip gained at level 1
				spells : ["mage hand"],
				selection : ["mage hand"]
			}, {
				name : "From any school", // the spells gained at level 3, 8, 14, 20
				"class" : "sorcerer",
				times : [0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4],
				level : [1, 4]
			}]
		},
		"subclassfeature3.1" : {
			name : "Portal Sense",
			source : [["P", 98]],
			description : desc([
				"I know the Detect Evil and Good spell",
				"It is a gatecrasher spell for you, and doesn’t count against your number of spells known.",
				"When you cast it, you can sense the presence of extraplanar portals within range."
			]),
			action : [["action", ""]],
			spellcastingExtra : ["detect evil and good"]
		},
		"subclassfeature3.2" : {
			name : "Quicktunnel",
			source : ["GMBDB"],
			minlevel : 3,
			description : desc([
				"I can quicktunnel, magically creating a brief, personal portal.",
				"I can quicktunnel immediately after taking the Disengage action.",
				"I can also use your reaction to quicktunnel in response to falling or taking damage.",
				"When I quicktunnel, I teleport up to 30 feet away to an unoccupied space I can see.",
				"You gain additional uses of this feature, and increase the distance you can travel with it as your level increases: 3 times at 5th level (35 feet), 4 times at 11th level (40 feet), and 5 times at 17th level (45 feet)."
			]),
			usages : 2,
			action : ["bonus action", " (Disengage Action)"],
			recovery : "long rest",
		},
		"subclassfeature9" : {
			name : "Inter",
			source : [["P", 98]],
			minlevel : 9,
			description : desc([
				"I can see through opaque portals as if they were transparent.",
				"I can quicktunnel immediately after taking the Disengage action.",
				"I can also use your reaction to quicktunnel in response to falling or taking damage.",
				"When I quicktunnel, I teleport up to 30 feet away to an unoccupied space I can see.",
				"You gain additional uses of this feature, and increase the distance you can travel with it as your level increases: 3 times at 5th level (35 feet), 4 times at 11th level (40 feet), and 5 times at 17th level (45 feet)."
			]),
		},
		"subclassfeature13" : {
			name : "Versatile Trickster",
			source : [["P", 98]],
			minlevel : 13,
			description : "\n   " + "As a bonus action, gain adv. on attacks this turn on creature within 5 ft of Mage Hand",
			action : ["bonus action", ""]
		},
		"subclassfeature17" : {
			name : "Spell Thief",
			source : [["P", 98]],
			minlevel : 17,
			description : "\n   " + "As a reaction, after a spell is cast at me, I can try to negate and steal it" + "\n   " + "The caster makes a save against my spell DC with his/her spellcasting ability" + "\n   " + "On failure, the caster forgets how to cast that spell for eight hours" + "\n   " + "If I have a spell slot of a high enough level for it, I learn how to cast it during this time",
			action : ["reaction", ""],
			recovery : "long rest",
			usages : 1
		}
	}
});
