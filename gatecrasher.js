AddSubClass("rogue", "arcane trickster", {
	regExpSearch : /^(?=.*(trickster|rogue|miscreant))(?=.*\b(eldritch|arcane|magic|mage|witch)\b).*$/i,
	subname : "Arcane Trickster",
	fullname : "Arcane Trickster",
	source : [["P", 98]],
	abilitySave : 4,
	spellcastingFactor : 3,
	spellcastingList : {
		"class" : "wizard",
		school : ["Ench", "Illus"],
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
			description : "\n   " + "I can cast known wizard cantrips/spells, using Intelligence as my spellcasting ability",
			additional : ["", "", "3 cantrips \u0026 3 spells known", "3 cantrips \u0026 4 spells known", "3 cantrips \u0026 4 spells known", "3 cantrips \u0026 4 spells known", "3 cantrips \u0026 5 spells known", "3 cantrips \u0026 6 spells known", "3 cantrips \u0026 6 spells known", "4 cantrips \u0026 7 spells known", "4 cantrips \u0026 8 spells known", "4 cantrips \u0026 8 spells known", "4 cantrips \u0026 9 spells known", "4 cantrips \u0026 10 spells known", "4 cantrips \u0026 10 spells known", "4 cantrips \u0026 11 spells known", "4 cantrips \u0026 11 spells known", "4 cantrips \u0026 11 spells known", "4 cantrips \u0026 12 spells known", "4 cantrips \u0026 13 spells known"],
			spellcastingBonus : [{
				name : "Mage Hand cantrip", // the Mage Hand cantrip gained at level 1
				spells : ["mage hand"],
				selection : ["mage hand"]
			}, {
				name : "From any school", // the spells gained at level 3, 8, 14, 20
				"class" : "wizard",
				times : [0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4],
				level : [1, 4]
			}]
		},
		"subclassfeature3.1" : {
			name : "Mage Hand Legerdemain",
			source : [["P", 98]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can direct my Mage Hand",
				"With a Dex (Sleight of Hand) vs. Wis (Perception) checks, I can do so discreetly",
				"I can make it invisible and perform the following tasks:",
				" \u2022 Stow/retrieve an object the hand is holding in a container worn/carried by another",
				" \u2022 Use thieves' tools to pick locks and disarm traps at range"
			]),
			action : ["bonus action", ""],
			spellChanges : {
				"mage hand" : {
					description : "Invisible hand, carries 10 lb; 1 bns to control, use thieves' tools, or stow/retrieve obj; only 1 instance",
					changes : "My Mage Hand Legerdemain class feature expands my use of the Mage Hand cantrip and makes the spectral hand invisible."
				}
			}
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
