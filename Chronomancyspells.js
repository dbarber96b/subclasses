SpellsList["fast-forward/reverse"] = {
	name : "Fast-Forward/Reverse",
	classes : ["wizard"],
	source : ["LoI"],
	level : 0,
	school : "Ench",
	time : "1 a",
	range : "10 ft",
	components : "V,S",
	duration : "Conc, 1 h",
	description : "Any number of non-magical objects sized small or smaller. Choose to fast-forward or reverese time in spell range.",
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
	description : "1 crea save or repeat same action it took on previous turn. If target cannot repeat action, it takes no action.",
	descriptionFull : "You briefly rewind the thoughts a creature of your choice that you can see within range. The target must succeed on a Wisdom saving throw or, on their next turn, be forced to use its action to take the same action it took on its previous turn. If the target is unable to take that action again, it instead takes no action. For example, if a creature under the effects of this spell made a weapon attack with a maul on their last turn, they must do so again this turn, though they may choose a different target. If the creature used their action to cast a spell, they must cast the same spell."
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
SpellsList["time capsule"] = {
	name : "Time Capsule",
	classes : ["wizard"],
	source : ["LoI"],
	level : 1,
	school : "Conj",
	time : "1 a",
	range : "self",
	components : "S",
	duration : "Instantaneous",
	description : "1 object only I am holding of 5 lbs or less is sent 10 minutes into the future. Reappears in exact location",
	descriptionFull : "You collapse your hands around an object, causing it to vanish from your present time. The object, which only you can be holding and which can weigh no more than 5pounds, is magically transported some amount of time into the future that you choose, up to 10 minutes. When the time expires, the object reappears in the exact location it was when you cast the spell. If the space is occupied by a creature or object, the target object instead appears in the closest unoccupied space." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, you choose a time up to 7 days into the future, or up to 100 years in the future using a spell slot of 7th level or higher."
};
SpellsList["grist"] = {
	name : "Grist",
	classes : ["wizard"],
	source : ["LoI"],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Instantaneous",
	description : "1 object is reverted into the raw materiels of that object",
	descriptionFull : "You touch a non-magical object, which must be contained entirely within a 5-foot cube, and revert it into its raw materials. For example, an iron sword with a wooden handle targeted by this spell may transform into chunks of iron ore and chips of wood. The exact composition of the converted material is determined by the DM."
};
SpellsList["time's arrow"] = {
	name : "Time's Arrow",
	classes : ["Wizard"],
	source : ["LoI"],
	level : 3,
	school : "Abjur",
	time : "1 rea",
	range : "120 ft",
	components : "S",
	duration : "Instantaneous",
	description : "Stop a ranged attack withing range, resposition projectile to new target or fall harmlessly",
	descriptionFull : "You freeze a projectile that you can see within range mid-flight in attempt to alter its trajectory. If the projectile would otherwise hit, it instead becomes suspended in midair 5 feet from its original target. If it would otherwise miss, the DM determines the location of the now frozen projectile. Within the same reaction, you can reposition the frozen projectile to hit a target of your choice, provided they are within the weapon or spell’s range from the projectile’s new location. Alternatively, you can cause the projectile to drop to the ground harmlessly, fizzling, if it’s a magical effect."
};
SpellsList["ephemeral ward"] = {
	name : "Ephemeral Ward",
	classes : ["Wizard"],
	source : ["LoI"],
	level : 5,
	school : "Abjur",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 10 min",
	description : "Create temporal shield for 1 crea within range. All damage delayed until spell ends.",
	descriptionFull : "You create a temporal shield around a creature other than you within range, keeping incoming wounds at bay by slowing them down. For the duration, each time the creature would take damage, the damage is instead shunted into the future. When the spell ends, the target takes all shunted damage at once. No part of this damage can be reduced by anything other than the resistances and immunities it had at the time that damage was shunted. The spell also ends early if the target is ever outside the spell’s range or if it has total cover from you."
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
SpellsList["rewind"] = {
	name : "Rewind",
	classes : ["wizard"],
	source : ["LoI"],
	level : 7,
	school : "Trans",
	time : "1 a",
	range : "500 feet",
	components : "S",
	duration : "Instantaneous",
	description : "1 crea or obj in range returns to state they were before my last turn, spell slots and features are excluded.",
	descriptionFull : "You fill a creature or object in range with arcane temporal energy that reverses their physical state while keeping them fixed in the present. The target returns to the exact state that it was in at the beginning of your last turn. If the target is a creature, they retain their memories. The target's hit points revert to the amount it had at the beginning of your last turn. Additionally, any status conditions or magical effects placed on it since that time are nullified, but any which were lifted since that time return. Spell slots and feature uses remain expended. For example, if a Paladin uses their Channel Divinity to use Abjure Enemy on a creature, and that creature is then immediately targeted by this spell, Abjure Enemy would no longer affect the creature, but the Paladin’s use of Channel Divinity would still be expended. The target also returns to the location that it was in at that time, if physically possible. Other nearby objects that interacted with the target maybe slightly moved or modified to account for this change. For example, if a creature is impaled by a spear and then targeted by this spell, the spear would be removed from their body as the wound is undone, settling on the ground next to them."
};
SpellsList["temporal bubble"] = {
	name : "Temporal Bubble",
	classes : ["Wizard"],
	source : ["LoI"],
	level : 8,
	school : "Conj",
	time : "1 hr",
	range : "120 ft",
	components : "V,S,M\u2020",
	compMaterial : "An hourglass filled with pearl dust worth at least 2,500 gp, which the spell consumes",
	duration : "8 h",
	description : "Create 50-ft radius demiplane, inside 24 hours pass for 1 hour outside.",
	descriptionFull : "You create a temporal shield around a creature other than you within range, keeping incoming wounds at bay by slowing them down. For the duration, each time the creature would take damage, the damage is instead shunted into the future. When the spell ends, the target takes all shunted damage at once. No part of this damage can be reduced by anything other than the resistances and immunities it had at the time that damage was shunted. The spell also ends early if the target is ever outside the spell’s range or if it has total cover from you."
};
