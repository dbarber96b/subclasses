BackgroundList["firefly guard"] = {
	regExpSearch : /^(?=.*firefly)(?=.*guard).*$/i,
	name : "Firefly Guard",
	source : [["LoI"0]],
	skills : ["Athletics", "Intimidation"],
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["fire bolt", "sacred flame", "guiding bolt", "heroism", "aid", "scorching ray", "beacon of hope", "blinding smite", "death ward", "wall of fire", "flame strike"]);
			},
			"My background adds extra spells to the spell list(s) of my spellcasting class(es): Fire Bolt, Sacred Flame, Guiding Bolt, Heroism, Aid, Scorching Ray, Beacon of Hope, Blinding Smite, Death Ward, Wall of Fire, and Flame Strike."
		]
	},
	gold : 5,
	equipleft : [
		["Feywild Trinket", "", ""],
		["Moonflower Blossom", "", ""],
		["Gaming Set", "", ""]
	],
	equipright : [
		["Common clothes", "", 3],
		["Firefly Guard insignia", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	languageProfs : [["Celestial, Elvish, Goblin, or Giant", 1]],
	toolProfs : [["Gaming set", 1]],
	feature : "Firefly Barracks",
	trait : [
		"I approach every task with the same high degree of precision.",
		"I am always the first into the fray.",
		"I bear any injury or indignity with stoic discipline.",
		"My righteous wrath is easily inflamed by the slightest iniquity.",
		"My fellow guardsmen are more important to me than my life.",
		"Dangerous work is best accomplished by a team that knows and trusts each other.",
		"I treat my weapons, uniform, and insignia with reverence, for they are gifts of the Archfey.",
		"I pace when standing and fidget incessantly when forced to sit."
	],
	ideal : [
		["Honor", "Honor: A deal is a deal, and I would never break one. (Lawful)"],
		["Justice", "Justice: Achieving justice requires establishing fair, equitable, and compassionate relationships within a community. (Good)"],
		["Protection", "Protection: It isn't right for innocents to suffer because of the arrogance of the powerful. (Good)"],
		["Solidarity", "Solidarity: It is most crucial to act with a single will, marching side by side in perfect accord. (Lawful)"],
		["Order", "Order: Society functions only if people do their duty and respect the chain of command. (Lawful)"],
		["Conviction", "Conviction: Anything worth doing is worth doing with your whole heart. (Lawful)"]
	],
	bond : [
		"I would lay down my life for the Archfey.",
		"I owe my life to the Guard captain who took me in when I was living on the streets.",
		"My fellow guardsmen are my family.",
		"I fight for those who cannot fight for themselves.",
		"I ran with a bandit gang in my youth, and I'm striving to atone for my past misdeeds.",
		"I do what I can to help out the family of a comrade who died in battle."
	],
	flaw : [
		"I act bravely when I'm in a group, but I'm a coward when I'm alone.",
		"I see everything in clear-cut black and white.",
		"I'm just a little fascinated by the ways of the Material Plane.",
		"I'd rather eat my weapon than admit when I'm wrong.",
		"I'm slow to trust members of other courts.",
		"I've been known to turn a blind eye to an old friend, with the help of a modest bribe."
	],
	lifestyle : "modest"
};
BackgroundFeatureList["Firefly Barracks"] = {
	description : "I am established in the hierarchy of the Firefly Guard. I can requisition simple equipment for temporary use. I have access to many guard barracks in the Feywild, where I can rest in safety and have access to medics.",
	source : [["LoI"]]
};
