AddSubClass("paladin", "oath of the tempest", {
	regExpSearch : /^(?=.*tempest)((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	subname : "Oath of the Tempest",
	source : ["GMBDB"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Divine Gale",
			source : ["GMBDB"],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can present my holy symbol, creating a small tornadoe around me.",
				"This tornado lets me fly 30 ft. and land safely.",
				"Enemy creatures near where I land are thrown off balance, and my allies have advantage on attacks against them until the start of my next turn."
			]),
			action : [["bonus action", ""]],
			spellcastingExtra : ["feather fall", "thunderwave", "shatter", "warding wind", "lightning bolt", "thunder step", "greater invisibility", "storm sphere", "conjure elemental", "control winds"]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Steel Tempest",
			source : ["GMBDB"],
			minlevel : 3,
			description : desc([
				"As an action, I can embue my weapons with the power and speed of elemental wind.",
				"For 1 minute, I add my Charisma modifier (minimum of +1) to damage attacks using two-handed, versatile, or ranged weapons."
			]),
			action : [["action", ""]]
		},
		"subclassfeature7" : {
			name : "Aura of Elemental Air",
			source : ["GMBDB"],
			minlevel : 7,
			description : "\n   " + "Allies within range and I have resistance to damage from thunder, lightning, or cold",
			additional : ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"],
			dmgres : ["Thunder", "Lightning", "Cold"]
		},
		"subclassfeature15" : {
			name : "Flow of Battle",
			source : ["GMBDB"],
			minlevel : 15,
			description : desc([
				"Whenever another creature hits me with an attack, I can use my reaction to add my proficiency bonus to my AC for that attack, potentially causing it to miss.",
        "If the attack misses, you may move half your speed without provoking opportunity attacks."
			]),
		},
		"subclassfeature20" : {
			name : "Avatar of the Storm",
			source : ["GMBDB"],
			minlevel : 20,
			description : desc([
				"As an action, I create a powerful storm around me, and gain the following benefits for 10 minutes:",
				"I gain a fly speed of 60 feet.",
				"A 20-foot sphere centered on me obscures vision for all creatures except me.",
        "Creatures other than myself that start their turn in the area must succeed a Constitution saving throw, or be deafened for 1 minute.",
        "Creatures other than myself that start their turn in the area take 5 lightning damage."
			]),
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
