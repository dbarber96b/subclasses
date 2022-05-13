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
 AddSubClass("ranger", "witchwarden", {
	regExpSearch : /^(?=.*witchwarden).*$/i,
	subname : "Witchwarden",
	source : ["GMBDB"],
	fullname : "Witchwarden",
	features : {
		"subclassfeature3" : {
			name : "Arcane Momentum",
			source : ["GMBDB"],
			minlevel : 3,
			description : desc([
				"When I damage a creature with a ranger spell other than hunter’s mark , I have advantage on the first attack roll I make against that target until the end of my next turn.",
				"The first time you hit a creature with a weapon attack, it deals an additional 1d8 damage. This damage must be of a type of the spell dealt."
			]),
		},
		"subclassfeature3.1" : {
			name : "Witchwarden Magic",
			source : ["GMBDB"],
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
			source : ["GMBDB"],
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
			source : ["GMBDB"],
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
			source : ["GMBDB"],
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
