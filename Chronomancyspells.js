SpellsList["alavar's spacetime anomaly"] = {
	name : "Alavar's Spacetime Anomaly",
	classes : ["wizard"],
	source : ["LoI"],
	level : 6,
	school : "Conj",
	time : "1 a",
	range : "Self (30-ft radius)",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "I can designate any number of creatures I can see within 30-ft radius, they can use a bonus action to teleport to a space within the spell range.",
	descriptionFull : "You create a disturbance in spacetime, causing the fabric of reality to collapse around you. You create a 30-foot radius area of warped space centered on you that remains stationary for the duration. When you cast this spell, you can designate any number of creatures you can see to be affected by it. For the duration, any affected creature within the spell's area can use a bonus action on each of their turns to slip through a dimensional pocket and teleport up to 30 feet to an unoccupied space that they can see that is also within the spell's area."
};
SpellsList["deja vu"] = {
	name : "Deja Vu",
	classes : ["wizard"],
	source : ["LoI"],
	level : 1,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A small silver mirror",
	duration : "Instantaneous",
	save : "Wis",
	description : "1 obj save or repeat same action it took on previous turn. If target cannot repeat action, it takes no action.",
	descriptionFull : You briefly rewind the thoughts a creature of your choice that you can see within range. The target must succeed on a Wisdom saving throw or, on their next turn, be forced to use its action to take the same action it took on its previous turn. If the target is unable to take that action again, it instead takes no action. For example, if a creature under the effects of this spell made a weapon attack with a maul on their last turn, they must do so again this turn, though they may choose a different target. If the creature used their action to cast a spell, they must cast the same spell."
};
SpellsList["fast-forward/reverse"] = {
	name : "Fast-Forward/Reverse",
	classes : ["wizard"],
	source : ["LoI"],
	level : 0,
	school : "Ench",
	time : "1 a",
	range : "10 ft",
	components : "V,S",
	duration : ""Conc, 1 h",
	description : "1 crea save or repeat same action it took on previous turn. If target cannot repeat action, it takes no action.",
	descriptionFull : "You create a blade-shaped planar rift about 3 feet long in an unoccupied space you can see within range. The blade lasts for the duration. When you cast this spell, you can make up to two melee spell attacks with the blade, each one against a creature, loose object, or structure within 5 feet of the blade. On a hit, the target takes 4d12 force damage. This attack scores a critical hit if the number on the d20 is 18 or higher. On a critical hit, the blade deals an extra 8d12 force damage (for a total of 12d12 force damage)." +
		"\n   As a bonus action on your turn, you can move the blade up to 30 feet to an unoccupied space you can see and then make up to two melee spell attacks with it again." +
		"\n   The blade can harmlessly pass through any barrier, including a wall of force."
	};
