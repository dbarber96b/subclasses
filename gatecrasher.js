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
			minlevel : 3,
			description : "\n   " + "I know the Detect Evil and good spell" + "\n   " + "It is a gatecrasher spell for you, and doesn’t count against your number of spells known." + "\n   " + "When you cast it, you can sense the presence of extraplanar portals within range."
			spellcastingBonus : [{
				name : "Portal Sense",
				spells : ["mage hand"],
				selection : ["mage hand"]
			}],
		},
		"subclassfeature9" : {
			name : "Magical Ambush",
			source : [["P", 98]],
			minlevel : 9,
			description : "\n   " + "When I cast a spell while hidden, the target(s) have disadvantage against that spell"
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
