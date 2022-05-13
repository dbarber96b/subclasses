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
				"If it attempts to cast a spell with a casting time of 1 action using that ability score, you roll a d20. On an 11 or higher, the spell doesn't take effect."
			]),
			action : [["action", ""]],
			spellcastingExtra : ["shield", "zephyr strike", "branding smite", "see invisibility", "counterspell", "dispel magic", "freedom of movement", "locate creature", "banishing smite", "synaptic static"]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Annihilation",
			source : ["GMBDB"],
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
			source : ["GMBDB"],
			minlevel : 7,
			description : "\n   " + "Allies within range and I have resistance to damage from spells",
			additional : ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"],
			dmgres : ["Spells"]
		},
		"subclassfeature15" : {
			name : "Magical Detective",
			source : ["GMBDB"],
			minlevel : 15,
			description : desc([
				"I am always under the effects of the Detect Magic spell."
			]),
		},
		"subclassfeature20" : {
			name : "Unweaving Presence",
			source : ["GMBDB"],
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
