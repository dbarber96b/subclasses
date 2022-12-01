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
