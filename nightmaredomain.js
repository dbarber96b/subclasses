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
