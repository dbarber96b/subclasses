AddSubClass("cleric", "wanderlust domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(wander|wanderlust|wanderer)).*$/i,
	subname : "Wanderlust Domain",
	source : ["GMBDB"],
	spellcastingExtra : ["feather fall", "jump", "knock", "spider climb", "counterspell", "haste", "dimension door", "wall of fire", "animate objects", "creation"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : ["GMBDB"],
			minlevel : 1,
			descriptionFull : "You gain proficiency in two of the following: Athletics, Acrobatics, or Stealth, as well as Thieves' tools.",
			description : "I gain proficiency with any combination of three skills or tools of my choice.",
			skillstxt : "Athletics, Acrobatics, or Stealth",
			toolProfs : ["Thieves' tools"]
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Traversal",
			source : ["GMBDB"],
			minlevel : 2,
			description : desc([
				"I can take the Dash action asa bonus action",
				"Climbing doesn't cost me any extra movement",
				"I add my Wisdom modifier to Strength (Athletics), Dexterity (Acrobatics, Stealth), and the distances you can cover making a long or high jump (minimum +1)"
			])
		},
		"subclassfeature6" : {
			name : "Channel Divinity: Spellsteal",
			source : ["GMBDB"],
			minlevel : 6,
			description : desc([
				"When I cast Counterspell, I can can expend a use of my Channel Divinity to gain a bonus to the required spellcasting ability check equal to half my cleric level",
				"If is at least 1st level, and of a level I can cast, I steal knowledge of that spell.",
				"I can cast this spell a number of times equal to my Wisdom modifier until a long rest."
			])
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["X", 19],
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
			source : ["GMBDB"],
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
AddSubClass("paladin", "oath of the spellbreaker", {
	regExpSearch : /^(?=.*spellbreaker)((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	subname : "Oath of the Spellbreaker",
	source : ["GMBDB"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Disrupt Magic",
			source : ["GMBDB"],
			minlevel : 3,
			description : desc([
				"As an action, I choose one creature within 60 feet that I can see",
				"The target must make a saving throw of a type determined by its spellcasting ability.",
				"If the target has multiple spellcasting abilities, it makes a separate saving throw for each.",
				"If the target fails any one of these saving throws, its magical abilities that derive from that ability score become disrupted for up to 1 minute.",
				"It has disadvantage on Constitution saving throws to maintain concentration on a spell. It can’t use reactions to cast spells using that ability.",
				"if it attempts to cast a spell with a casting time of 1 action using that ability score, you roll a d20. On an 11 or higher, the spell doesn't take effect."
			action : [["action", ""]],
			spellcastingExtra : ["shield", "zephyr strike", "branding", "see invisibility", "counterspell", "nondetection", "aura of purity", "banishment", "hold monster", "scrying"]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Annihilation",
			source : ["GMBDB"],
			minlevel : 3,
			description : desc([
				"As an action, I choose one creature within 60 feet that I can see",
				"The target must make a saving throw of a type determined by its spellcasting ability.",
				"If the target has multiple spellcasting abilities, it makes a separate saving throw for each.",
				"If the target fails any one of these saving throws, its magical abilities that derive from that ability score become disrupted for up to 1 minute.",
				"It has disadvantage on Constitution saving throws to maintain concentration on a spell. It can’t use reactions to cast spells using that ability.",
				"if it attempts to cast a spell with a casting time of 1 action using that ability score, you roll a d20. On an 11 or higher, the spell doesn't take effect."
			]),
			action : [["action", ""]]
		},
		"subclassfeature7" : {
			name : "Aura of the Sentinel",
			source : [["T", 55]],
			minlevel : 7,
			description : "\n   If I'm not incapacitated, chosen creatures in range and I add my Prof. Bonus to Initiative",
			additional : levels.map(function (n) { return n < 7 ? "" : (n < 18 ? 10 : 30) + "-foot aura"; }),
			addMod : [{ type : "skill", field : "Init", mod : "prof", text : "I can add my Proficiency Bonus to initiative rolls." }]
		},
		"subclassfeature15" : {
			name : "Vigilant Rebuke",
			source : [["T", 55]],
			minlevel : 15,
			description : desc([
				"As a reaction when I or another I can see succeeds a Int, Wis, or Cha save, I can rebuke",
				"The creature that forced the saving throw takes 2d8 + my Charisma mod force damage"
			]),
			action : [["reaction", ""]]
		},
		"subclassfeature20" : {
			name : "Mortal Bulwark",
			source : [["T", 55]],
			minlevel : 20,
			description : desc([
				"As a bonus action, I can gain the following benefits for 1 minute:",
				" \u2022 Truesight 120 ft; Adv. on attacks vs. aberrations, celestials, elementals, fey, and fiends",
				" \u2022 When I hit and damage a creature with an attack, I can banish it if it fails a Cha save",
				"   It's banished to its native plane if not there now; It's immune for 24 hours on a success",
				"I can do this once per long rest, or by expending a 5th-level or higher spell slot (SS 5+)"
			]),
			recovery : "long rest",
			usages : 1,
			altResource : "SS 5+",
			action : [["bonus action", ""]]
		}
	}
});
