AddSubClass("monk", "way of the mirror", {
	regExpSearch : /^(?=.*mirror)((?=.*(monk|monastic|dancer))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname : "Way of the Mirror",
	source : ["NHB", 1],
	features : {
		"subclassfeature3" : {
			name : "Cast Reflection",
			source : [["NHB", 1]],
			minlevel : 3,
			description : ' [see 3rd page]',
			action: [["bonus action", "Reflection (summon/dismiss)"], ["bonus action", "Reflection (swap location)"]],
			creaturesAdd : [["Reflection (Monk)"]],
			creatureOptions : [{
				name : "Reflection (Monk)",
				source : [["NHB", 1]],
				size : 3,
				type : "Object",
				alignment : "",
				ac : "14+oProf",
				hp : 1,
				hd : [],
				speed : "fly 30 ft (hover)",
				scores : ["", "", "", "", "", ""],
				savesLinked : true,
				condition_immunities : "all conditions",
				damage_immunities : "poison, psychic",
				passivePerception : 0,
				languages : "",
				challengeRating : "0",
				proficiencyBonus : 0,
				attacksAction : 0,
				attacks : [],
				features : [{
					name : "Reflection",
					description : "The reflection is a magical, translucent, silver image of its creator that doesn't act and has no turn in combat. It lasts until destroyed, dismissed, another is manifested, or its creator is incapacitated. The reflection is also destroyed if it is ever more than 30 ft away from its creator at the end of its creator's turn."
				}],
				traits : [{
					name : "Swap Place",
					description : "The reflection's creator can, as a bonus action, teleport, magically swapping places with the reflection at a cost of 15 feet of the creator's movement, regardless of the distance between the two."
				}, {
					name : "Attack Origin",
					description : "When the reflection's creator takes the Attack action on their turn or makes an unarmed strike as part of a bonus action, any attack they make can originate from the reflection's space. This choice is made for each attack separately.\n   In addition, when a creature that the reflection's creator can see within 5 ft of the reflection moves at least 5 ft away from it, its creator can use their reaction to make an opportunity attack with an unarmed strike or a monk weapon against that creature as if its creator was in the reflection's space."
				}],
				header : "Reflection",
				eval : function(prefix, lvl) {
					// Same size as character
					PickDropdown(prefix + "Comp.Desc.Size", tDoc.getField("Size Category").currentValueIndices);
					Value(prefix + "Comp.Desc.Age", What("Age"));
					Value(prefix + "Comp.Desc.Sex", What("Sex"));
					Value(prefix + "Comp.Desc.Height", What("Height"));
					Value(prefix + "Comp.Desc.Alignment", What("Alignment"));
				}
			}],
			"cast reflection" : {
			name : "Cast Reflection",
			extraname : "Way of the Mirror 3",
			source : [["NHB", 1]],
			description : desc([
				"As a bonus action, I can magically manifest a translucent silver image of myself within 15 ft",
				"It counts as an object, has 1 HP, AC 14 + Prof. Bonus, immunity to poison/psychic damage",
				"and all conditions. It uses my save bonuses, and lasts until destroyed, I dismiss it, manifest",
				"another, or I'm incapacitated. If it is ever more than 30 ft away from me at the end of my turn,",
				"it is destroyed. On my turn, I can move it (no action required) up to 30 ft in any direction",
				"As a bonus action, I can teleport to swap places with it, at a cost of 15 ft movement",
				"When I use the Attack action or make an unarmed strike as part of a bonus action, attacks",
				"can originate from my reflection. I can also make opportunity attacks as if I were in its space",
			]),
			},
			autoSelectExtrachoices : [{
				extrachoice : "cast reflection",
			}],
		"subclassfeature3.1" : {
			name : "Mirror Incantations",
			source : ["NHB", 1],
			minlevel : 3,
			description : "\n   " + "I know the Minor Illusion cantrip and can cast certain spells by using ki (see page 3)",
			spellcastingBonus : {
				name : "Mirror Incantations",
				spells : ["minor illusion"],
				selection : ["minor illusion"],
				firstCol : "atwill",
			},
			spellFirstColTitle : "Ki",
			"mirror spells" : {
				name : "Mirror Spells",
				extraname : "Mirror Incantations",
				source : ["NHB", 1],
				description : " [2 ki points, no material components]" + "\n   " + "As an action, I can cast Alter Self, Blur, Disguise Self, or Mirror Image",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Mirror Incantations",
					spells : ["alter self", "blur", "disguise self", "mirror image"],
					selection : ["alter self", "blur", "disguise self", "mirror image"],
					firstCol : 2,
					times : 4
				}
			},
			autoSelectExtrachoices : [{ extrachoice : "mirror spells" }],
		},
		},
		"subclassfeature6" : {
			name : "Glass Looking",
			source : [["NHB", 1]],
			minlevel : 6,
			description : desc([
				"As an action, I can temporarily transfer my consciousness to my reflection for up to 10 min",
				"During this time, I see and hear through its eyes and ears, but not my own eyes and ears",
				"While I use my reflection this way, it can be up to 1000 ft away from me without issue",
				"I can end this at any time, requiring no action",
			]),
			action : [["action", ""]],
			usages : "Prof. Bonus per ",
			recovery : "long rest",
			usagescalc : "event.value = How('Proficiency Bonus');",
			altResource : "1 ki",
		},
		"subclassfeature11" : {
			name : "Interpose Reflection",
			source : [["NHB", 1]],
			minlevel : 11,
			description : desc([
				"As a reaction when a creature I can see is attacked, I can make my reflection the target",
				"Before the attack roll, the reflection teleports to an empty space within 5 ft of the creature",
				"The attack roll of the triggering attack is then made against the reflection instead",
			]),
			action : [["reaction", ""]],
			usages : 1,
			recovery : "long rest",
			altResource : "2 ki",
		},
		"subclassfeature17" : {
			name : "Mirror Dance",
			source : ["NHB", 1],
			minlevel : 17,
			description : desc([
				"As a reaction, if a creature within 5 ft of me or my reflection is hit by another, I can make a", 
				"melee attack with an unarmed strike or a monk weapon against that creature from my or",
				"the reflection's space. In addition, when my reflection is destroyed by taking damage, I gain",
				"five times my Prof. Bonus in temp HP if I don't already have temporary hit points",
			]),
			action : [["reaction", " (when other attacks)"], ["reaction", " (when Reflection destroyed)"]],
			usages : 1,
			recovery : "long rest",
			altResource : "3 ki",
			additional : "gain temp HP"
		}
	}
});
BackgroundList["monastic traveller"] = { // monastic traveller
	regExpSearch : /^(?=.*monastic)(?=.*traveller).*$/i,
	name : "Monastic Traveller",
	source : ["NHB"],
    skills : ["History", "Perception"],
		gold : 10,
	equipleft : [
		["Choose one set of Artisan's Tools from this list: Calligrapher's Supplies, Cook's Utensils, Painter's Supplies, Herbalism Kit", "1", ""]
	],
	equipright : [
		["Clothes, Traveler's", "1", 4],
		["Trinket from your Monastery", "1", ""],
		["Belt pouch (with coins)", "1", 1],
	],
	feature : "Monastic Influence",
	trait : [
		"The roads are open to me, I follow my feet and enjoy the journey that they take, like water filling a cup.",
		"Like the gale winds I am direct and fierce, always respectful of those who respect others, but as the winds change I also provoke through sarcasm and jokes.",
		"I am a peaceful forest lake. I am serene with my thoughts and my tranquility overflows unto those around me.",
		"I strive for a better me tomorrow, always improving both physically and spiritually through hard work.",
		"I am one with myself. I strive for balance in all things. I work hard but play just as hard.",
		"I am shattered. Something has happened that has shaken my beliefs and I will not find peace until I can face what has happened.",
		"I have never found a problem that a good boot to the head could not cure.",
		"I am only an extension of my monastery, and only seek the adventures travelling on its behalf brings because the spiritual guidance elude me still..."
    ],
    ideal : [
		["Brotherhood",
			"Brotherhood: I never feel alone as long as I know my brothers (and/or sisters) are out there. (Any)"
		],
		["Pacifist",
			"Pacifist: My skills are only to be used for defense. I will not kill my opponent unless it is unavoidable. (Good)"
		],
		["Respect",
			"Respect: I will advocate against any sighted injustice, especially those that disrespect the core beliefs of my Monastery (Lawful/Good)"
		],
		["Power",
			"Power: All this training and meditation is just a means to an end. (Evil)"
		],
		["Unchained",
			"Unchained: I am a free spirit, roaming the land and bringing change. (Chaotic)"
		],
		["Meditation",
			"Meditation: In order to understand the world, I must first understand myself. (Any)"
		],
    ],
    bond : [
		"I have a duty to my order and will stand with them in all things.",
		"I have received enlightenment but the world is still in darkness. I must bring enlightenment to others.",
		"My mentor was a fallen monk, who's ideals have twisted my outlook on the temple.",
		"My mentor was struck down protecting me from a powerful foe, I seek to defeat this foe with my own two hands.",
		"I strive to bring balance to the land.",
		"I love my fellow brothers (and/or sisters) at the temple but I can not help but wonder who my parents were or why they brought me to the monastery."
    ],
    flaw : [
		"I am still unable to instill my masters teachings, and I am unable to hold still in the presence of injustice, provocation or disrespect towards me or others.",
		"I am extremely uncomfortable around (opposite sex, specific race, nobility, etc.) and I find myself stammering, blushing, and loose all my composure.",
		"I panic in large cities and usually try to avoid them.",
		"I have no respect for those who do not respect themselves.",
		"I left my monastery after a bad argument with my master. I am NEVER going back.",
		"My way of peace and meditation is the only way. Those who travel with me must meditate with me at least once a day or I will refuse to help."
    ],
	toolProfs : ["Calligrapher's supplies, Cook's utensils, Painter's supplies, Herbalism kit", 1],
	languageProfs : ["Celestial, Draconic, Dwarvish, Elvish, Gnomish, or Halfling", 1],
};
BackgroundFeatureList["monastic influence"] = {
    description : "While within the lands where the local monastery has influence, people will tend to be helpful and friendly to the monk and his party. Additionally merchants and locals tend to be more likely to share information.  Gain advantage on persuasion or investigation checks to gather local information as long you maintain good standing with the local monastery.",
    source : ["NHB"],
};
MagicItemsList["silver band of projection"] = {
	name : "Silver Band of Projection",
	source : ["NHB"],
	type : "ring",
	rarity : "common",
	description : "While wearing this ring, I can use an action to cause my voice to carry clearly for up to 300 feet until the end of my next turn.",
	descriptionFull : "While wearing this ring, you can use an action to cause your voice to carry clearly for up to 300 feet until the end of your next turn.",
}
MagicItemsList["silver sentinel ring"] = {
	name : "Silver Sentinel Ring",
	source : ["NHB"],
	type : "ring",
	rarity : "common",
	description : "This ring glows faintly when undead are within 120 feet of it.",
};
MagicItemsList["wayfarer's iron ring"] = {
	name : "Wayfarer's Iron Ring",
	source : [["NHB"]],
	type : "ring",
	rarity : "uncommon",
	description : "While I wear this ring, moving through nonmagical difficult terrain doesn't cost me extra movement.",
	descriptionFull : "While you wear this ring, moving through nonmagical difficult terrain doesn't cost you extra movement.",
	attunement : false,
};
MagicItemsList["belt of many pouches"] = {	
	name : "Belt of Many Pouches",
	nameAlt : "Belt of Pouches",
	source : [["NHB"]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "C",
	description : "This belt weighs 10 lbs, regardless of its contents. It has sixty-four pouches that hold 10 lb (1 cu ft) each. Retrieving an item from it requires an action. If it's overloaded, pierced, or torn, it and its content are destroyed. If turned inside out, all its contents spill forth.",
	descriptionLong : "This belt weighs 10 lbs, regardless of its contents. It has sixty-four pouches that hold 10 lb (1 cu ft) each. Retrieving an item from it requires an action. If it's overloaded, pierced, or torn, it and its content are destroyed. If turned inside out, all its contents spill forth. A creature placed inside a pouch can survive for 10 minutes before starting to suffocate. Placing the belt in another extradimensional space instantly destroys both and opens a gate to the Astral Plane.",
	descriptionFull : "This broad waist-belt appears to have eight pouches built into it, but in fact, there are seven more magically compressed behind each (for a total of 64 pouches). Each of these pouches can contain up to one cubic foot of material weighing up to 10 lbs; however, no matter how much you put into the belt's pouches, it always weighs 10 lbs.\n   Placing an object in a pouch follows the normal rules for interacting with Objects. Retrieving an item from a pouch requires you to use an action. The belt magically assists you in finding what you need within its contents, so you always know which pouch a given item is in. When you reach into a pouch for a specific item, the item is always magically on top.\n   The belt has a few limitations. If it is overloaded, or if a sharp object pierces it or tears it, the belt ruptures and is destroyed. If the belt is destroyed, its contents are lost forever, although an artifact always turns up again somewhere. If a pouch is turned inside out, its contents spill forth, unharmed, and the pouch must be put right before it can be used again. If a breathing creature is placed within a pouch, the creature can survive for up to 10 minutes, after which time it begins to suffocate.\n   Placing the belt inside an extradimensional space created by a Bag of Holding, Portable Hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it and deposited in a random Location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened.",
	weight : 10,
	action : [["action", " (retrieve item)"]]
};
MagicItemsList["snapback strap"] = {	
	name : "Snapback Strap",
	nameAlt : "Snapback Strap",
	source : [["NHB"]],
	type : "wondrous item",
	rarity : "rare",
	description : "The belt can hold up to four weapons with the Light property. After such a weapon is used to make a ranged attack, the weapon magically teleports back to the belt.",
	descriptionFull : "The belt is made out of rugged leather. It contains multiple loops and sheathes, and can hold up to four weapons with the Light property. After such a weapon is is used to make a ranged attack, the weapon magically teleports back to the belt.",
};
MagicItemsList["cloudsinger scimitar"] = {
	name : "Cloudsinger Scimitar",
	source : ["NHB"],
	type : "weapon (scimitar)",
	rarity : "very rare",
	description : "I gain a +2 bonus to attack and damage rolls made with this magic weapon. It allows me to speak Auran, and softly sings warnings to me, granting me a +2 bonus to initiative while I am not incapacitated.",
	descriptionFull : "This djinn-crafted scimitar is perfectly balanced and lighter than air. You gain a +2 bonus to attack and damage rolls made with this magic weapon. It allows its wielder to speak Auran, and softly sings warnings to its bearer, granting a +2 bonus to initiative if the bearer isn't incapacitated.",
	attunement : false,
	weight : 1,
	languageProfs : ["Auran"],
	addMod : [{ type : "skill", field : "Init", mod : 2, text : "While I carry the Cloudsinger Scimitar, it gently sings warnings to me, granting me a +2 bonus to initiative rolls." }],
	weaponsAdd : ["Cloudsinger Scimitar"],
	weaponOptions : {
		baseWeapon : "scimitar",
		regExpSearch : /^(?=.*cloudsinger)(?=.*scimitar).*$/i,
		name : "Cloudsinger Scimitar",
		source : ["NHB"],
		description : "Finesse, light; +2 initiative when not incapacitated",
		modifiers : [2, 2],
	}
};
MagicItemsList["moonlit bow"] = {
	name : "Moonlit Bow",
	source : ["NHB"],
	type : "weapon (shortbow)",
	rarity : "rare",
	description : "Simply drawing your fingers in the air near this finely crafted bow causes it to be strung with an arrow of lunar energy that deals 1d8 radiant damage. When drawn using both hands, the bow sheds moonlight, creating bright light in a 15-foot radius and dim light for an additional 15 feet.",
	attunement : true,
	weight : 2,
	weaponsAdd : ["Moonlit Bow"],
	weaponOptions : {
		baseWeapon : "shortbow",
		regExpSearch : /^(?=.*moonlit)(?=.*bow).*$/i,
		name : "Moonlit Bow",
		source : ["NHB"],
		damage : [1, 8, "radiant"],
		description : "Two-handed; creates magical ammunition"
	}
};
MagicItemsList["red tiger scimitar"] = {
	name : "Red Tiger Scimitar",
	nameAlt : "Red Tiger",
	source : ["NHB"],
	type : "weapon (scimitar)",
	rarity : "rare",
	description : "I gain a +1 bonus to attack and damage rolls made with this magic weapon. In addition, this magic weapon deals +1d6 thunder damage to any target it hits.",
	descriptionFull : "This sword has a keen blade with a copper-red hue to it. The guard is formed like a claw which clutches at the blade. Its grip is wrapped with red and black leather in a striped pattern. I gain a +1 bonus to attack and damage rolls made with this magic weapon. In addition, this magic weapon deals +1d6 thunder damage to any target it hits.",
	attunement : true,
	weight : 3,
	weaponsAdd : ["Red Tiger Scimitar"],
	weaponOptions : {
		baseWeapon : "scimitar",
		regExpSearch : /^(?=.*scimitar)(?=.*tiger).*$/i,
		name : "Red Tiger Scimitar",
		source : ["NHB"],
		description : "Finesse, light; +1d6 Thunder Damage",
		modifiers : [1, 1]
	}
};
MagicItemsList["striking gloves"] = {
	name : "Striking Gloves",
	source : [["NHB", 169]],
	type : "wondrous item",
	rarity : "rare",	
	notLegalAL : true,
	attunement : true,
	description : "While wearing these gloves, my Con increases by 2 (to max 20). After hitting with an unarmed strike while wearing these gloves, i can deal an extra 1d6 force damage to target and regain an equal amount of HP.",
	descriptionFull : "While wearing these gloves, you gain the following benefits:\n \u2022 Your Constitution score increases by 2, to a maximum of 20.\n \u2022 After making a successful unarmed strike while wearing these gloves, you can use the gloves to deal an extra 1d6 force damage to the target, and you regain a number of hit points equal to the force damage dealt.",
	scores : [0, 0, 2, 0, 0, 0],
	weaponsAdd : ["Striking Gloves"],
	weaponOptions : [{
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*gloves)(?=.*striking).*$/i,
		name : "Striking Gloves",
		source : [["NHB", 169]],
		description : "+1d6 force damage"
	}]
};
MagicItemsList["tigersong blade"] = {
	name : "Tigersong Blade",
	nameAlt : "Tigersong",
	source : ["NHB"],
	type : "weapon (any sword)",
	rarity : "very rare",
	attunement : true,
	description : "As a bonus action, I can speak the command word of this magic sword, causing it to hum. The hum lasts until I speak the command word again as a bonus action or sheathe it. This hum deals +2d6 thunder damage to any target it hits. Additionally, immediately after I use the Attack action with the sword, I can use my reaction to enable one ally within 30 feet that can hear me to use its reaction to make one weapon attack.",
	action : [["bonus action", " (activate/end)"], ["reaction", " (ally weapon attack)"]],
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "sword"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier|catana/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier|catana/i).test(v.baseWeaponName) && (/^(?=.*tiger)(?=.*song).*$/i).test(v.WeaponText)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'While active, +2d6 thunder damage, Use reaction for ally within 30 ft use reaction to make weapon attack';
				}},
			'If I include the word "Tigersong" in a the name of a sword, it will be treated as the magic weapon Tigersong Blade. When the command word is spoken, the blade hums, adding +2d6 thunder damage on a hit and allows ally attacks.'
		]}
};
MagicItemsList["treasure sense dagger"] = {
	name : "Treasure Sense Dagger",
	source : ["NHB", 86],
	type : "weapon (dagger)",
	rarity : "rare",
	attunement : true,
	description : "This magical dagger is made from a Xorn's claw. I gain a +2 bonus to attack and damage rolls made with the dagger. While I'm attuned to it,  I can mentally command it to detect the type and quantity of precious metals and stones, such as coins and gems, within 60 ft of the dagger.",
	descriptionFull : "This rare magic item made from a Xorn's claw requires attunement. You gain a +2 bonus to attack and damage rolls made with the dagger.\n Treasure Sense. While you are attuned to this dagger you can use an action to mentally command it to detect precious metals and stones, such as coins and gems. You learn the kind and number of such objects within 60 feet of the dagger.",
	weight : 1,
	action : [["action", " (treasure sense)"]],
	weaponsAdd : ["Treasure Sense Dagger"],
	weaponOptions : {
		baseWeapon : "dagger",
		regExpSearch : /^(?=.*treasure)(?=.*sense).*$/i,
		name : "Treasure Sense Dagger",
		source : [["NHB", 86]],
		modifiers : [2, 2]
	},
};
MagicItemsList["weapon of echoes"] = {
	name : "Weapon of Echoes",
	nameTest : "of Echoes",
	source : ["NHB"],
	type : "weapon (any)",
	rarity : "rare",
	magicItemTable : "G",
	attunement : true,
	description : "HP lost to this weapon can be regained only by resting. Once per turn, I can echo-wound a target hit with this weapon. At the start of its turn, it takes 1d4 necrotic damage per such echo-wound, and then makes a DC 15 Con save to stop all echo-wounds on itself. " + (typePF ? "It or another can stop them as an action (DC 15 Medicine)." : "Alternatively, the target or another can stop them with an action (DC 15 Medicine check)."),
	descriptionLong : "Hit points lost to this magic weapon can be regained only through a short or long rest, not by regeneration, magic, or other means. Once per turn, when I hit a creature with this weapon, I can echo-wound the target. At the start of each of the echoed creature's turns, it takes 1d4 necrotic damage for each time I've echoed it, and it can then make a DC 15 Constitution save to end the effect of all such echo-wounds on itself. Alternatively, the echoed creature, or another within 5 feet of it, can use an action to make a DC 15 Wisdom (Medicine) check to end the effect of all such echo-wounds on it.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "prefix",
		descriptionChange : ["replace", "weapon"],
		},
		calcChanges : {
		atkAdd : [
			function (fields, v) {
			if (!v.theWea.isMagicWeapon && (/echoes/i).test(v.WeaponText)) {
				v.theWea.isMagicWeapon = true;
				fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				fields.Description += (fields.Description ? '; ' : '') + 'Damage can only be healed by resting; Once per turn, echo-wound target';
			}},
			'If I include the words "of Echoes" in a the name of a weapon, it will be treated as the magic weapon Weapon of Echoes. Damage by the weapon can only be regained with a short or long rest. Once per turn when I hit with the weapon, I can inflict a lingering echo-wound on a target, causing it pain every turn thereafter.'
		]}
};
MagicItemsList["whip of red shadows"] = {
	name : "Whip of Red Shadows",
	source : ["NHB"],
	type : "weapon (whip)",
	rarity : "legendary",
	description : "This whip has a +2 bonus on to hit and damage and deals +1d6 lightning damage. A critical hit rips the creature's shadow, preventing it from regaining hit points until the shadow is restored. I have advantage on attack rolls against shadowripped targets. A torn shadow can be healed with a remove curse, greater restoration, or wish spell; otherwise it must be allowed to heal naturally by completing a long rest.",
	descriptionFull : "This is a finely crafted leather whip handle with what appears to be a lash of softly glowing light attached to it. You have a +2 bonus to attack and damage rolls made with this magic weapon. When you hit with it, the target takes an extra 1d6 lightning damage. On a successful critical hit, it tears away the victim's shadow, leaving behind a weeping scarlet silhouette in its wake as the victim's actual shadow merges with the whip. Until the shadow is healed, you have advantage on attack rolls against the victim and the victim can not regain hit points. A torn shadow can be healed with a remove curse, greater restoration, or wish spell; otherwise it must be allowed to heal naturally by completing a long rest.",
	attunement : true,
	weaponsAdd : ["Whip of Red Shadows"],
	weaponOptions : {
		baseWeapon : "whip",
		regExpSearch : /^(?=.*whip)(?=.*red)(?=.*shadows).*$/i,
		name : "Whip of Red Shadows",
		source : ["NHB"],
		description : "Finesse, reach; +1d6 lightning damage; crit does shadowrip = Adv. attacks, can't regain hp",
		modifiers : [2,2],
	},
};
