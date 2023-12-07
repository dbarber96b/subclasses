AddSubClass("monk", "way of the specter", {
	regExpSearch : /^((?=.*specter)(?=.*master))|((?=.*specter)((?=.*(monk|monastic))|((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname : "Way of the Specter",
	source : ["GMBDB"],
	fullname : "Drunken Master",
	features : {
		"subclassfeature3" : {
			name : "Weakening Blows",
			source : ["GMBDB"],
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
			source : ["GMBDB"],
			minlevel : 6,
			description : "\n   " + "Whenever I hit an enemy with at least one point of exhaustion with an unarmed strike, I inflict one additional damage die for each point of exhaustion that creature is under."
		},
		"subclassfeature11" : {
			name : "Siphoned Life",
			source : ["GMBDB"],
			minlevel : 11,
			description : "\n   " + "Whenever I use Weakening Blows to give a creature a point of exhaustion, I am healed for an amount equal to the damage roll of that attack" + "\n   " + "I can use this ability a number of times equal to my Wisdom modifier" + "\n   " + "I regain all uses of this ability after a long rest.",
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
		},
		"subclassfeature17" : {
			name : "Siphoned Life",
			source : ["GMBDB"],
			minlevel : 11,
			description : "\n   " + "Select an ability score you want to damage other than Constitution." + "\n   " + "When you make an unarmed strike, you can use 5 ki points to force your target to make a saving throw." + "\n   " + "If your target fails the saving throw, roll your martial arts damage die. The ability score you chose is lowered for your target by half of the martial arts roll." + "\n   " + "If the creature’s ability score reaches 0, they automatically fail any ability check or saving throw using that ability score." + "\n   " + "I regain all uses of this ability after a long rest.",
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
	},
    }
});
AddSubClass("cleric", "nightmare domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(night|nightmare|dreamer)).*$/i,
	subname : "Nightmare Domain",
	source : ["GMBDB"],
	spellcastingExtra : ["tasha's hideos laughter", "illusory script", "phantasmal force", "silence", "major image", "slow", "hallucinatory terrain", "phantasmal killer", "dream", "geas"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Cantrip",
			source : ["GMBDB"],
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
			source : ["GMBDB"],
			minlevel : 1,
			description : "\n   " + "As a reaction, when a creature I can see within 30 ft hits me, I can rebuke with their worst fears" + "\n   " + "It takes 2d8 psychic damage that a Wis save can halve",
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : ["reaction", ""]
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Free Falling",
			source : ["GMBDB"],
			minlevel : 2,
			description : desc([
				"I can cause all creatures I see within 10 ft to see the terrain fall away from under their feet.",
				"The creatures must make a Wisdom saving throw, falling prone and taking 3d6 psychic damage on a fail",
				"On a save, they take half damage, and are not knocked prone."
			])
		},
		"subclassfeature6" : {
			name : "Channel Divinity: Loathsome Knell",
			source : ["GMBDB"],
			minlevel : 6,
			description : desc([
				"When I deal psychic damage, I can also project a phantasmal bell into the target’s mind and ring it",
				"This ringing inflicts short term madness lasting 1d10 minutes (see Madness rules)."
			])
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["GMBDB"],
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
			source : ["GMBDB"],
			minlevel : 17,
			description : desc([
				"My Loathsome Knell instead inflicts long-term madness lasting 1d10x10 hours and an indefinite madness flaw (see Madness rules in DM rulebook).",
				"This flaw can only be removed by greater restoration or 30 days of rest."
			])
		}
	}
});
AddSubClass("paladin", "oath of the radiant dawn", {
regExpSearch : /^(?=.*(radiant|dawn|light))((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
subname : "Oath of the Radiant Dawn",
source : ["LoI"],
spellcastingExtra : ["faerie fire", "guiding bolt", "scorching ray", "warding bond", "beacon of hope", "spirit guardians", "guardian of faith", "wall of fire", "commune", "flamestrike"],
features : {
		
"subclassfeature3.1" : {
name : "Channel Divinity: Cleansing Light",
minlevel : 3,
action : ["bunus action", ""],
description : desc([
	"As a bonus action I emit bright light in a 30 foot radius centered on myself. Each creature of my choice must make a Constitution saving throw, taking radiant damage equal to my paladin level and be blinded until the end of my next turn, or half as much on a successful save. Undead creatures have disadvantage on this saving throw."]),
	},

"subclassfeature3.2" : {
name : "Channel Divinity: Divine Armament",
minlevel : 3,
action : ["action"],
description : desc([
	"As an action, I can bolster my allies with the power of the light. I choose a number of creatures within 30 feet of me euqal to my Charisma modifier, and for the next minute their weapon attacks and unarmed strikes deal an additional 1d4 radiant damage, at 11th level this damage increase to 2d4."]),
	},
	
"subclassfeature7" : {
name : "Aura of Protection",
minlevel : 7,
description : "\n   " + "While I'm conscious, allies within range gain temporary hitpoints equal to 1d4 plus my Charisma modifier at the start of each of their turns",
additional : ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"]
	},

"subclassfeature15" : {
name : "Wings of Light",
minlevel : 15,
description : desc([
	"I can't gain levels of Shadow Corruption. I am resistant to necrotic damage, and my Ability Scores and hit-point maximum can't be reduced"]),
dmgres : ["Necrotic"],
savetxt : { immune : ["hit point maximum reduction"] }
    	},	

"subclassfeature20" : {
name : "Radiant Champion",
minlevel : 20,
recovery : "long rest",
usages : 1,
action : ["action"],
description : "\n   " + "At 20th level I gain the Radiant Champion feature (see Notes page below)",
	toNotesPage : [{
	name : "Radiant Champion",
	note : [
		"As an action, I can gain the following benefits for 1 minute:",
		"• At the start of each of my turns, I regain 10 hit points.",
		"• When an undead, creature native to the Shadow Realm, or creature with levels of Shadow Corrutption touches me or hits me with a melee attack within 5 feet, they take 2d8 radiant damage.", 
		"• Once per turn when I hit one of these creatures they must make a Wisdom save or be incapacitated until the end of their next turn."],	
	page3notes : true,
	}],
	
		},
	},
});
AddSubClass("ranger", "treasurehunter", {
	regExpSearch : /^(?=.*treasurehunter).*$/i,
	subname : "Treasure Hunter",
	source : ["GMBDB"],
	fullname : Treasure Hunter",
	features : {
		"subclassfeature3" : {
			name : "Delver of Secrets",
			source : ["GMBDB"],
			minlevel : 3,
			descriptionFull : "I gain proficiency in two of the following: Athletics, Acrobatics, or Stealth, as well as Thieves' tools.",
			description : "I gain proficiency with any combination of two skills, Thieves' tools.",
			skillstxt : "Athletics, Acrobatics, or Stealth",
			toolProfs : ["Thieves' tools"]
		},
		"subclassfeature3.1" : {
			name : "Treasure Hunter Magic",
			source : ["GMBDB"],
			minlevel : 3,
			description : desc([
				"I add a spell to my known spells at level 3, 5, 9, 13, and 17",
				"These count as ranger spells, but do not count against the number of spells I can know"
			]),
			spellcastingExtra : ["identify", "locate object", "Leomund's tiny hut", "freedom of movement", "legend lore"],
			spellcastingExtraApplyNonconform : true
		},
		"subclassfeature7" : {
			name : "Lucky Charm",
			source : ["GMBDB"],
			minlevel : 7,
			description : desc([
				"I can mark a gold piece as a lucky charm, and give that charm to myself or an ally.",
				"Whenever the holder of the charm makes an attack roll, an ability check, or a saving throw, they can flip the coin to roll an additional d20, expending its charm.",
				"The holder can choose to spend the charm after they roll the die, but before the outcome is determined.",
				"The holder can choose which of the d20s is used for the attack roll, ability check, or saving throw.",
				"The holder can also spend the charm when an attack roll is made against them. They roll a d20, and then choose whether the attack uses the attacker's roll or the new roll.",
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
