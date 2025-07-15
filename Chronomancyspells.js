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
	description : "Any number of non-magical objects sized small or smaller. Choose to fast-forward or reverese time in spall range.",
	descriptionFull : "I manipulate the flow of time in a small area, rapidly altering the age of objects in the area as I choose. Select any number of non-magical objects of size Small or smaller in a 5 foot cube within range. Choose fast-forward/reverse as the area’s effect.." +
		"\n   Fast-Forward: Ink dries; water boils, and candles burndown to stubs. You speed up time for the objects, causing them to experience 10 minutes for every minute spent casting the spell." +
		"\n   Reverse: Rotting apples freshen, torn documents are mended, and shattered vases become whole. You reverse the aging process for the objects, causing them to appear as they did 10 minutes ago for every minute spent casting the spell."
	};
SpellsList["undo harm"] = {
	name : "Undo Harm",
	classes : ["wizard"],
	source : ["LoI"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "Touch",
	components : "V, S, M",
	duration : "Instantaneous",
	description : "1 crea regainss 1d4 hit points but no higher than damage since last turn; +1d4 at CL 5, 11, and 17",
	descriptionCantripDie : "1 crea heals `CD`d4 hit points but no more than damage since last turn",
	descriptionFull : "You reverse time around a fresh wound, healing some of the damage. A creature you touch regains up to 1d4 hit points, but no higher than the amount of damage that they took since their last turn." 
	"\n   This spell's healing increases by 1d4 when you reach certain levels: 5th level (2d4), 11th level (3d4), and 17th level (4d4."
};
SpellsList["halt"] = {
	name : "Halt",
	classes : ["wizard"],
	source : ["LoI"],
	level : 1,
	school : "Ench",
	time : "1 a",
	range : "30 ft",
	components : "V",
	duration : "Instantaneous",
	save : "Wis",
	description : "1 creature save or have its speed becomes zero until the end of turn.",
	descriptionFull : "A moderate magical force slows time around a Medium or smaller creature that you can see within range. The target must succeed on a Wisdom saving throw or have its speed reduced to 0 until the end of the turn." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, you can affect creatures of one size larger than Medium for each slot level above 1st."
};
SpellsList["déjà vu"] = {
	name : "Déjà Vu",
	classes : ["wizard"],
	source : ["LoI"],
	level : 1,
	school : "Ench",
	time : "1 rea",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A small silver mirror",
	duration : "Instantaneous",
	save : "Wis",
	description : "1 obj save or repeat same action it took on previous turn. If target cannot repeat action, it takes no action.",
	descriptionFull : "You briefly rewind the thoughts a creature of your choice that you can see within range. The target must succeed on a Wisdom saving throw or, on their next turn, be forced to use its action to take the same action it took on its previous turn. If the target is unable to take that action again, it instead takes no action. For example, if a creature under the effects of this spell made a weapon attack with a maul on their last turn, they must do so again this turn, though they may choose a different target. If the creature used their action to cast a spell, they must cast the same spell."
};
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
