*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:    Homebrew: Cleric Domain: Dragon
	Effect:     This file adds the Dragon Domain as a cleric subclass
	Author:     
	Code by:	IZUNACCHI
	Date:		2021/11/17 (sheet v13)
*/

var iFileName = "Dragon Domain";

RequiredSheetVersion(13);

SourceList["GMBDB"] = {
	name : "Dragon Domain",
	abbreviation : "GMBDB",
	group : "Homebrew",
	url : "https://www.gmbinder.com/share/-LsM0grGoORrW24QMMOe",
	date : "2021/12/30"
};

AddSubClass("cleric", "dragon domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(dragon|divine|elements)\b).*$/i,
	subname : "Dragon Domain",
	source : ["GMBDB"],
	spellcastingExtra : ["absorb elements", "inflict wounds", "dragon's breath", "see invisibility", "fireball", "fly", "elemental bane", "stoneskin", "cone of cold", "dominate person"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiencies",
			source : ["HB:DD", 0],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with martial weapons and heavy armor.",
			armorProfs : [false, false, true, false],
            weaponProfs : [false, true]
		},
		"subclassfeature1.1" : {
			name : "Draconic Blessing",
			source : ["GMBDB"],
			minlevel : 1,
			description : "\n   " + "Choose a Dragon Blessing using the \"Choose Feature\" button above" + "\n   " + "When I deal damage of the type associated with my Draconic Blessing to other creatures, I can choose a number of them equal to my proficiency bonus. The chosen creatures automatically succeed on their saving throws against it (if any), and suffer no damage from it." + "\n   " + "When I deal damage with a domain spell, I can change the damage type to the one associated with my Draconic Blessing" + "\n   " + "When interacting with dragons, if I can add my proficiency bonus, I can double it" + "\n   " + "I can read, write, speak Draconic.",
		choices : ["Amethyst Dragon blessing", "Black Dragon blessing", "Blue Dragon blessing", "Brass Dragon blessing", "Bronze Dragon blessing", "Copper Dragon blessing", "Crystal Dragon blessing", "Emerald Dragon blessing", "Gold Dragon blessing", "Green Dragon blessing", "Red Dragon blessing", "Sapphire Dragon blessing", "Silver Dragon blessing", "White Dragon blessing"],
				"amethyst dragon blessing" : {
					name : "Dragon Blessing",
					description : "\n " + "I have an blessing to Amethyst dragons, which are affiliated with force damage." + "\n " + "When I deal force damage to other creatures, I can choose a number of them equal to my proficiency bonus. The chosen creatures automatically succeed on their saving throws against it (if any), and suffer no damage from it." + "\n " + "When I deal damage with a paladin spell, I can change the damage type to force." + "\n " + "When interacting with dragons, if I can add my proficiency bonus, I can double it." + "\n " + "I can read, write, speak Draconic.",
					dependentChoices : "amethyst dragon blessing"
				},
				"black dragon blessing" : {
					name : "Dragon Blessing",
					description : "\n   " + "I have an blessing to black dragons, which are affiliated with acid damage." + "\n   " + "When I deal acid damage to other creatures, I can choose a number of them equal to my proficiency bonus. The chosen creatures automatically succeed on their saving throws against it (if any), and suffer no damage from it." + "\n   " + "When I deal damage with a paladin spell, I can change the damage type to acid." + "\n   " + "When interacting with dragons, if I can add my proficiency bonus, I can double it." + "\n   " + "I can read, write, speak Draconic.",
					dependentChoices : "black dragon blessing"
				},
				"blue dragon blessing" : {
					name : "Draconic Blessing",
					description : "\n   " + "I have an blessing to blue dragons, which are affiliated with lightning damage." + "\n   " + "When I deal lightning damage to other creatures, I can choose a number of them equal to my proficiency bonus. The chosen creatures automatically succeed on their saving throws against it (if any), and suffer no damage from it." + "\n   " + "When I deal damage with a paladin spell, I can change the damage type to lightning." + "\n   " + "When interacting with dragons, if I can add my proficiency bonus, I can double it." + "\n   " + "I can read, write, speak Draconic.",
					dependentChoices : "blue dragon blessing"
				},
				"brass dragon blessing" : {
					name : "Dragon Blessing",
					description : "\n   " + "I have an blessing to brass dragons, which are affiliated with fire damage." + "\n   " + "When I deal fire damage to other creatures, I can choose a number of them equal to my proficiency bonus. The chosen creatures automatically succeed on their saving throws against it (if any), and suffer no damage from it." + "\n   " + "When I deal damage with a paladin spell, I can change the damage type to fire." + "\n   " + "When interacting with dragons, if I can add my proficiency bonus, I can double it." + "\n   " + "I can read, write, speak Draconic.",
					dependentChoices : "brass dragon blessing"
				},
				"bronze dragon blessing" : {
					name : "Dragon Blessing",
					description : "\n   " + "I have an blessing to bronze dragons, which are affiliated with lightning dmg." + "\n   " + "When I deal lightning damage to other creatures, I can choose a number of them equal to my proficiency bonus. The chosen creatures automatically succeed on their saving throws against it (if any), and suffer no damage from it." + "\n   " + "When I deal damage with a paladin spell, I can change the damage type to lightning." + "\n   " + "When interacting with dragons, if I can add my proficiency bonus, I can double it." + "\n   " + "I can read, write, speak Draconic.",
					dependentChoices : "bronze dragon blessing"
				},
				"copper dragon blessing" : {
					name : "Dragon Blessing",
					description : "\n   " + "I have an blessing to copper dragons, which are affiliated with acid damage." + "\n   " + "When I deal acid damage to other creatures, I can choose a number of them equal to my proficiency bonus. The chosen creatures automatically succeed on their saving throws against it (if any), and suffer no damage from it." + "\n   " + "When I deal damage with a paladin spell, I can change the damage type to acid." + "\n   " + "When interacting with dragons, if I can add my proficiency bonus, I can double it." + "\n   " + "I can read, write, speak Draconic.",
					dependentChoices : "copper dragon blessing"
				},
				"crystal dragon blessing" : {
					name : "Draconic Blessing",
					description : "\n " + "I have an blessing to crystal dragons, which are affiliated with radiant damage." + "\n " + "When I deal radiant damage to other creatures, I can choose a number of them equal to my proficiency bonus. The chosen creatures automatically succeed on their saving throws against it (if any), and suffer no damage from it." + "\n " + "When I deal damage with a paladin spell, I can change the damage type to radiant." + "\n " + "When interacting with dragons, if I can add my proficiency bonus, I can double it." + "\n " + "I can read, write, speak Draconic.",
					dependentChoices : "crystal dragon blessing"
				},
				"emerald dragon blessing" : {
					name : "Dragon Blessing",
					description : "\n " + "I have an blessing to emerald dragons, which are affiliated with psychic damage." + "\n " + "When I deal psychic damage to other creatures, I can choose a number of them equal to my proficiency bonus. The chosen creatures automatically succeed on their saving throws against it (if any), and suffer no damage from it." + "\n " + "When I deal damage with a paladin spell, I can change the damage type to psychic." + "\n " + "When interacting with dragons, if I can add my proficiency bonus, I can double it." + "\n " + "I can read, write, speak Draconic.",
					dependentChoices : "emerald dragon blessing"
				},
				"gold dragon blessing" : {
					name : "Dragon Blessing",
					description : "\n   " + "I have an blessing to gold dragons, which are affiliated with fire damage." + "\n   " + "When I deal fire to other creatures, I can choose a number of them equal to my proficiency bonus. The chosen creatures automatically succeed on their saving throws against it (if any), and suffer no damage from it." + "\n   " + "When I deal damage with a paladin spell, I can change the damage type to fire." + "\n   " + "When interacting with dragons, if I can add my proficiency bonus, I can double it." + "\n   " + "I can read, write, speak Draconic.",
					dependentChoices : "gold dragon blessing"
				},
				"green dragon blessing" : {
					name : "Dragon Blessing",
					description : "\n   " + "I have an blessing to green dragons, which are affiliated with poison damage." + "\n   " + "When I deal poison damage to other creatures, I can choose a number of them equal to my proficiency bonus. The chosen creatures automatically succeed on their saving throws against it (if any), and suffer no damage from it." + "\n   " + "When I deal damage with a paladin spell, I can change the damage type to poison." + "\n   " + "When interacting with dragons, if I can add my proficiency bonus, I can double it." + "\n   " + "I can read, write, speak Draconic.",
					dependentChoices : "green dragon blessing"
				},
				"red dragon blessing" : {
					name : "Dragon Blessing",
					description : "\n   " + "I have an blessing to red dragons, which are affiliated with fire damage." + "\n   " + "When I deal fire damage to other creatures, I can choose a number of them equal to my proficiency bonus. The chosen creatures automatically succeed on their saving throws against it (if any), and suffer no damage from it." + "\n   " + "When I deal damage with a paladin spell, I can change the damage type to fire." + "\n   " + "When interacting with dragons, if I can add my proficiency bonus, I can double it." + "\n   " + "I can read, write, speak Draconic.",
					dependentChoices : "red dragon blessing"
				},
				"sapphire dragon blessing" : {
					name : "Dragon Blessing",
					description : "\n " + "I have an blessing to sapphire dragons, which are affiliated with thunder dmg." + "\n " + "When I deal thunder damage to other creatures, I can choose a number of them equal to my proficiency bonus. The chosen creatures automatically succeed on their saving throws against it (if any), and suffer no damage from it." + "\n " + "When I deal damage with a paladin spell, I can change the damage type to thunder." + "\n " + "When interacting with dragons, if I can add my proficiency bonus, I can double it." + "\n " + "I can read, write, speak Draconic.",
					dependentChoices : "sapphire dragon blessing"
				},
				"silver dragon blessing" : {
					name : "Dragon Blessing",
					description : "\n   " + "I have an blessing to silver dragons, which are affiliated with cold damage." + "\n   " + "When I deal cold damage to other creatures, I can choose a number of them equal to my proficiency bonus. The chosen creatures automatically succeed on their saving throws against it (if any), and suffer no damage from it." + "\n   " + "When I deal damage with a paladin spell, I can change the damage type to cold." + "\n   " + "When interacting with dragons, if I can add my proficiency bonus, I can double it." + "\n   " + "I can read, write, speak Draconic.",
					dependentChoices : "silver dragon blessing"
				},
				"topaz dragon blessing" : {
					name : "Dragon Blessing",
					description : "\n " + "I have an blessing to topaz dragons, which are affiliated with necrotic damage." + "\n " + "When I deal necrotic damage to other creatures, I can choose a number of them equal to my proficiency bonus. The chosen creatures automatically succeed on their saving throws against it (if any), and suffer no damage from it." + "\n " + "When I deal damage with a paladin spell, I can change the damage type to necrotic." + "\n " + "When interacting with dragons, if I can add my proficiency bonus, I can double it." + "\n " + "I can read, write, speak Draconic.",
					dependentChoices : "topaz dragon blessing"
				},
				"white dragon blessing" : {
					name : "Dragon Blessing",
					description : "\n   " + "I have an blessing to white dragons, which are affiliated with cold damage." + "\n   " + "When I deal cold damage to other creatures, I can choose a number of them equal to my proficiency bonus. The chosen creatures automatically succeed on their saving throws against it (if any), and suffer no damage from it." + "\n   " + "When I deal damage with a paladin spell, I can change the damage type to cold." + "\n   " + "When interacting with dragons, if I can add my proficiency bonus, I can double it." + "\n   " + "I can read, write, speak Draconic.",
					dependentChoices : "white dragon blessing"
				},
				languageProfs : ["Draconic"],
				choiceDependencies : [{
					feature : "subclassfeature2"},{
						feature : "subclassfeature6"
				},{
					feature : "subclassfeature8.1"
			}]
			},
		"subclassfeature2" : {
			name : "Channel Divinity: Dragon's Wrath",
			source : [""GMBDB"],
			minlevel : 2,
			description : "\n   " + "Choose a Dragon Blessing using the \"Choose Feature\" button above" + "\n   " + "As an action, I unleash a devastating Exhalation of energy. My Draconic Blessing determines the size, shape, and damage type of this breath weapon." + "\n   " + "When I use this breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by my Draconic Blessing. A creature takes 3d8 + your cleric level damage on a failed save, and half as much damage on a successful one.",
            choices : ["Amethyst Dragon blessing", "Black Dragon blessing", "Blue Dragon blessing", "Brass Dragon blessing", "Bronze Dragon blessing", "Copper Dragon blessing", "Crystal Dragon blessing", "Emerald Dragon blessing", "Gold Dragon blessing", "Green Dragon blessing", "Red Dragon blessing", "Sapphire Dragon blessing", "Silver Dragon blessing", "White Dragon blessing"],
			choicesNotInMenu : true,
		    "amethyst Dragon blessing" : {
					name : "Channel Divinity: Dragon's Wrath",
					description : "\n   " + "As an action, I unleash a devastating Exhalation of energy. " + "\n   " + "When I use this breath weapon, each creature in a 10 by 60 ft. line must make a dexterity saving throw. A creature takes 3d8 + my paladin level force damage on a failed save, and half as much damage on a successful one.",
				},
				"black Dragon blessing" : {
					name : "Channel Divinity: Dragon's Wrath",
					description : "\n   " + "As an action, I unleash a devastating Exhalation of energy. " + "\n   " + "When I use this breath weapon, each creature in a 10 by 60 ft. line must make a dexterity saving throw. A creature takes 3d8 + my paladin level acid damage on a failed save, and half as much damage on a successful one.",
				},
				"blue Dragon blessing" : {
					name : "Channel Divinity: Dragon's Wrath",
					description : "\n   " + "As an action, I unleash a devastating Exhalation of energy. " + "\n   " + "When I use this breath weapon, each creature in a 10 by 60 ft. line must make a dexterity saving throw. A creature takes 3d8 + my paladin level lightning damage on a failed save, and half as much damage on a successful one.",
				},
				"brass Dragon blessing" : {
					name : "Channel Divinity: Dragon's Wrath",
					description : "\n   " + "As an action, I unleash a devastating Exhalation of energy. " + "\n   " + "When I use this breath weapon, each creature in a 10 by 60 ft. line must make a dexterity saving throw. A creature takes 3d8 + my paladin level fire damage on a failed save, and half as much damage on a successful one.",
				},
				"bronze Dragon blessing" : {
					name : "Channel Divinity: Dragon's Wrath",
					description : "\n   " + "As an action, I unleash a devastating Exhalation of energy. " + "\n   " + "When I use this breath weapon, each creature in a 10 by 60 ft. line must make a dexterity saving throw. A creature takes 3d8 + my paladin level lightning damage on a failed save, and half as much damage on a successful one.",
				},
				"copper Dragon blessing" : {
					name : "Channel Divinity: Dragon's Wrath",
					description : "\n   " + "As an action, I unleash a devastating Exhalation of energy. " + "\n   " + "When I use this breath weapon, each creature in a 10 by 60 ft. line must make a dexterity saving throw. A creature takes 3d8 + my paladin level acid damage on a failed save, and half as much damage on a successful one.",
				},
				"crystal Dragon blessing" : {
					name : "Channel Divinity: Dragon's Wrath",
					description : "\n   " + "As an action, I unleash a devastating Exhalation of energy. " + "\n   " + "When I use this breath weapon, each creature in a 10 by 60 ft. line must make a dexterity saving throw. A creature takes 3d8 + my paladin level radiant damage on a failed save, and half as much damage on a successful one.",
				},
				"emerald Dragon blessing" : {
					name : "Channel Divinity: Dragon's Wrath",
					description : "\n   " + "As an action, I unleash a devastating Exhalation of energy. " + "\n   " + "When I use this breath weapon, each creature in a 10 by 60 ft. line must make a dexterity saving throw. A creature takes 3d8 + my paladin level psychic damage on a failed save, and half as much damage on a successful one.",
				},
				"gold Dragon blessing" : {
					name : "Channel Divinity: Dragon's Wrath",
					description : "\n   " + "As an action, I unleash a devastating Exhalation of energy. " + "\n   " + "When I use this breath weapon, each creature in a 30 ft. cone must make a dexterity saving throw. A creature takes 3d8 + my paladin level fire damage on a failed save, and half as much damage on a successful one.",
				},
				"green Dragon blessing" : {
					name : "Channel Divinity: Dragon's Wrath",
					description : "\n   " + "As an action, I unleash a devastating Exhalation of energy. " + "\n   " + "When I use this breath weapon, each creature in a 30 ft. cone must make a constitution saving throw. A creature takes 3d8 + my paladin level posion damage on a failed save, and half as much damage on a successful one.",
				},
				"red Dragon blessing" : {
					name : "Channel Divinity: Dragon's Wrath",
					description : "\n   " + "As an action, I unleash a devastating Exhalation of energy. " + "\n   " + "When I use this breath weapon, each creature in a 30 ft. cone must make a dexterity saving throw. A creature takes 3d8 + my paladin level fire damage on a failed save, and half as much damage on a successful one.",
				},
				"sapphire Dragon blessing" : {
					name : "Channel Divinity: Dragon's Wrath",
					description : "\n   " + "As an action, I unleash a devastating Exhalation of energy. " + "\n   " + "When I use this breath weapon, each creature in a 10 by 60 ft. line must make a dexterity saving throw. A creature takes 3d8 + my paladin level thunder damage on a failed save, and half as much damage on a successful one.",
				},
				"silver Dragon blessing" : {
					name : "Channel Divinity: Dragon's Wrath",
					description : "\n   " + "As an action, I unleash a devastating Exhalation of energy. " + "\n   " + "When I use this breath weapon, each creature in a 30 ft. cone must make a constitution saving throw. A creature takes 3d8 + my paladin level cold damage on a failed save, and half as much damage on a successful one.",
					
				},
				"topaz Dragon blessing" : {
					name : "Channel Divinity: Dragon's Wrath",
					description : "\n   " + "As an action, I unleash a devastating Exhalation of energy. " + "\n   " + "When I use this breath weapon, each creature in a 10 by 60 ft. line must make a dexterity saving throw. A creature takes 3d8 + my paladin level necrotic damage on a failed save, and half as much damage on a successful one.",
				},
				"white Dragon blessing" : {
					name : "Channel Divinity: Dragon's Wrath",
					description : "\n   " + "As an action, I unleash a devastating Exhalation of energy. " + "\n   " + "When I use this breath weapon, each creature in a 30 ft. cone must make a constitution saving throw. A creature takes 3d8 + my paladin level cold damage on a failed save, and half as much damage on a successful one.",
		    },
  },
		"subclassfeature6" : {
			name : "Legendary Protection",
			source : ["GMBDB"],
			minlevel : 6,
			description : "\n   " + "I have resistance to the damage type of my Draconic Blessing. If I already have the resistance to that type from another source, the I can instead reduce damage of that type by an amount equal to my  Wisdom modifier (minimum of 1) after halving the dmg",
            choices : ["Amethyst Dragon blessing", "Black Dragon blessing", "Blue Dragon blessing", "Brass Dragon blessing", "Bronze Dragon blessing", "Copper Dragon blessing", "Crystal Dragon blessing", "Emerald Dragon blessing", "Gold Dragon blessing", "Green Dragon blessing", "Red Dragon blessing", "Sapphire Dragon blessing", "Silver Dragon blessing", "White Dragon blessing"],
			choicesNotInMenu : true,
            			"amethyst Dragon blessing" : {
					name : "Legendary Protection",
					description : "\n   " + "I have resistance to force damage. If I already have force damage resistance from another source, the I can instead reduce force damage I take by an amount equal to my  Wisdom modifier (minimum of 1) after halving the dmg.",
					dmgres: ["Force"]
				},
				"black Dragon blessing" : {
					name : "Legendary Protection",
					description : "\n   " + "I have resistance to acid damage. If I already have acid damage resistance from another source, the I can instead reduce acid damage I take by an amount equal to my  Wisdom modifier (minimum of 1) after halving the dmg.",
					dmgres: ["Acid"]
				},
				"blue Dragon blessing" : {
					name : "Legendary Protection",
					description : "\n   " + "I have resistance to lightning damage. If I already have lightning damage resistance from another source, the I can instead reduce lightning damage I take by an amount equal to my  Wisdom modifier (minimum of 1) after halving the dmg.",
					mgres: ["Lightning"]
				},
				"brass Dragon blessing" : {
					name : "Legendary Protection",
					description : "\n   " + "I have resistance to fire damage. If I already have fire damage resistance from another source, the I can instead reduce fire damage I take by an amount equal to my  Wisdom modifier (minimum of 1) after halving the dmg.",
					mgres: ["Fire"]
				},
				"bronze Dragon blessing" : {
					name : "Legendary Protection",
					description : "\n   " + "I have resistance to lightning damage. If I already have lightning damage resistance from another source, the I can instead reduce lightning damage I take by an amount equal to my  Wisdom modifier (minimum of 1) after halving the dmg.",
					mgres: ["Lightning"]
				},
				"copper Dragon blessing" : {
					name : "Legendary Protection",
					description : "\n   " + "I have resistance to acid damage. If I already have acid damage resistance from another source, the I can instead reduce acid damage I take by an amount equal to my  Wisdom modifier (minimum of 1) after halving the dmg.",
					mgres: ["Acid"]
				},
				"crystal Dragon blessing" : {
					name : "Legendary Protection",
					description : "\n   " + "I have resistance to radiant damage. If I already have radiant damage resistance from another source, the I can instead reduce radiant damage I take by an amount equal to my  Wisdom modifier (minimum of 1) after halving the dmg.",
					mgres: ["Radiant"]
				},
				"emerald Dragon blessing" : {
					name : "Legendary Protection",
					description : "\n   " + "I have resistance to psychic damage. If I already have psychic damage resistance from another source, the I can instead reduce pyschic damage I take by an amount equal to my  Wisdom modifier (minimum of 1) after halving the dmg.",
					mgres: ["Psychic"]
				},
				"gold Dragon blessing" : {
					name : "Legendary Protection",
					description : "\n   " + "I have resistance to fire damage. If I already have fire damage resistance from another source, the I can instead reduce fire damage I take by an amount equal to my  Wisdom modifier (minimum of 1) after halving the dmg.",
					mgres: ["Fire"]
				},
				"green Dragon blessing" : {
					name : "Legendary Protection",
					description : "\n   " + "I have resistance to poison damage. If I already have poison damage resistance from another source, the I can instead reduce poison damage I take by an amount equal to my  Wisdom modifier (minimum of 1) after halving the dmg.",
					mgres: ["Poison"]
				},
				"red Dragon blessing" : {
					name : "Legendary Protection",
					description : "\n   " + "I have resistance to fire damage. If I already have fire damage resistance from another source, the I can instead reduce fire damage I take by an amount equal to my  Wisdom modifier (minimum of 1) after halving the dmg.",
					mgres: ["Fire"]
				},
				"sapphire Dragon blessing" : {
					name : "Legendary Protection",
					description : "\n   " + "I have resistance to thunder damage. If I already have thunder damage resistance from another source, the I can instead reduce thunder damage I take by an amount equal to my  Wisdom modifier (minimum of 1) after halving the dmg.",
					mgres: ["Thunder"]
				},
				"silver Dragon blessing" : {
					name : "Legendary Protection",
					description : "\n   " + "I have resistance to cold damage. If I already have cold damage resistance from another source, the I can instead reduce cold damage I take by an amount equal to my  Wisdom modifier (minimum of 1) after halving the dmg.",
					mgres: ["Cold"]
				},
				"topaz Dragon blessing" : {
					name : "Legendary Protection",
					description : "\n   " + "I have resistance to necrotic damage. If I already have necrotic damage resistance from another source, the I can instead reduce necrotic damage I take by an amount equal to my  Wisdom modifier (minimum of 1) after halving the dmg.",
					mgres: ["Necrotic"]
				},
				"white Dragon blessing" : {
					name : "Legendary Protection",
					description : "\n   " + "I have resistance to cold damage. If I already have cold damage resistance from another source, the I can instead reduce cold damage I take by an amount equal to my  Wisdom modifier (minimum of 1) after halving the dmg.",
					mgres: ["Cold"]
				},
        },
        },
		"subclassfeature8.1" : {
			name : "Divine Strike",
			source : ["GMBDB"],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage of the type associated with my Dragon Blessing",
			choices : ["Amethyst Dragon blessing", "Black Dragon blessing", "Blue Dragon blessing", "Brass Dragon blessing", "Bronze Dragon blessing", "Copper Dragon blessing", "Crystal Dragon blessing", "Emerald Dragon blessing", "Gold Dragon blessing", "Green Dragon blessing", "Red Dragon blessing", "Sapphire Dragon blessing", "Silver Dragon blessing", "White Dragon blessing"],
			choicesNotInMenu : true,
				"amethyst Dragon blessing" : {
					name : "Draconic Might",
					description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra force damage.",
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
				"black Dragon blessing" : {
					name : "Draconic Might",
					description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra acid damage.",
					additional : levels.map(function (n) {
						if (n < 8) return "";
						return "+" + (n < 14 ? 1 : 2) + "d8 acid damage";
					}),
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
									fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 acid damage';
								}
							},
						"Once per turn, I can have one of my weapon attacks that hit do extra acid damage."
						]
					}
				},
				"blue Dragon blessing" : {
					name : "Draconic Might",
					description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra lightning damage.",			
					additional : levels.map(function (n) {
						if (n < 8) return "";
						return "+" + (n < 14 ? 1 : 2) + "d8 lightning damage";
					}),
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
									fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 lightning damage';
								}
							},
						"Once per turn, I can have one of my weapon attacks that hit do extra lightning damage."
						]
					}
				},
				"brass Dragon blessing" : {
					name : "Draconic Might",
					description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra fire damage.",
					additional : levels.map(function (n) {
						if (n < 8) return "";
						return "+" + (n < 14 ? 1 : 2) + "d8 fire damage";
					}),
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
									fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 fire damage';
								}
							},
						"Once per turn, I can have one of my weapon attacks that hit do extra fire damage."
						]
					}
				},
				"bronze Dragon blessing" : {
					name : "Draconic Might",
					description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra lightning damage.",
					additional : levels.map(function (n) {
						if (n < 8) return "";
						return "+" + (n < 14 ? 1 : 2) + "d8 lightning damage";
					}),
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
									fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 lightning damage';
								}
							},
						"Once per turn, I can have one of my weapon attacks that hit do extra lightning damage."
						]
					}
				},
				"copper Dragon blessing" : {
					name : "Draconic Might",
					description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra acid damage.",
					additional : levels.map(function (n) {
						if (n < 8) return "";
						return "+" + (n < 14 ? 1 : 2) + "d8 acid damage";
					}),
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
									fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 acid damage';
								}
							},
						"Once per turn, I can have one of my weapon attacks that hit do extra acid damage."
						]
					}
				},
				"crystal Dragon blessing" : {
					name : "Draconic Might",
					description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra radiant damage.",			
					additional : levels.map(function (n) {
						if (n < 8) return "";
						return "+" + (n < 14 ? 1 : 2) + "d8 radiant damage";
					}),
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
									fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 radiant damage';
								}
							},
						"Once per turn, I can have one of my weapon attacks that hit do extra radiant damage."
						]
					}
				},
				"emerald Dragon blessing" : {
					name : "Draconic Might",
					description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra psychic damage.",
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
				"gold Dragon blessing" : {
					name : "Draconic Might",
					description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra fire damage.",
					additional : levels.map(function (n) {
						if (n < 8) return "";
						return "+" + (n < 14 ? 1 : 2) + "d8 fire damage";
					}),
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
									fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 fire damage';
								}
							},
						"Once per turn, I can have one of my weapon attacks that hit do extra fire damage."
						]
					}
				},
				"green Dragon blessing" : {
					name : "Draconic Might",
					description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra poison damage.",
					additional : levels.map(function (n) {
						if (n < 8) return "";
						return "+" + (n < 14 ? 1 : 2) + "d8 poison damage";
					}),
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
									fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 poison damage';
								}
							},
						"Once per turn, I can have one of my weapon attacks that hit do extra poison damage."
						]
					}
				},
				"red Dragon blessing" : {
					name : "Draconic Might",
					description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra fire damage.",
					additional : levels.map(function (n) {
						if (n < 8) return "";
						return "+" + (n < 14 ? 1 : 2) + "d8 fire damage";
					}),
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
									fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 fire damage';
								}
							},
						"Once per turn, I can have one of my weapon attacks that hit do extra fire damage."
						]
					}
				},
				"sapphire Dragon blessing" : {
					name : "Draconic Might",
					description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra thunder damage.",
					additional : levels.map(function (n) {
						if (n < 8) return "";
						return "+" + (n < 14 ? 1 : 2) + "d8 thunder damage";
					}),
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
									fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 thunder damage';
								}
							},
						"Once per turn, I can have one of my weapon attacks that hit do extra thunder damage."
						]
					}
				},
				"silver Dragon blessing" : {
					name : "Divine Strike",
					description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra cold damage.",
					additional : levels.map(function (n) {
						if (n < 8) return "";
						return "+" + (n < 14 ? 1 : 2) + "d8 cold damage";
					}),
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
									fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 cold damage';
								}
							},
						"Once per turn, I can have one of my weapon attacks that hit do extra cold damage."
						]
					}
				},
				"topaz Dragon blessing" : {
					name : "Draconic Might",
					description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra necrotic damage.",
					additional : levels.map(function (n) {
						if (n < 8) return "";
						return "+" + (n < 14 ? 1 : 2) + "d8 necrotic damage";
					}),
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
									fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 necrotic damage';
								}
							},
						"Once per turn, I can have one of my weapon attacks that hit do extra necrotic damage."
						]
					}
				},
				"white Dragon blessing" : {
					name : "Draconic Might",
					description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra cold damage.",
					additional : levels.map(function (n) {
						if (n < 8) return "";
						return "+" + (n < 14 ? 1 : 2) + "d8 cold damage";
					}),
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
									fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 cold damage';
								}
							},
						"Once per turn, I can have one of my weapon attacks that hit do extra cold damage."
						]
					}
				},
		},
		"subclassfeature17" : {
			name : "Shock and Awe",
			source : ["GMBDB"],
			minlevel : 17,
			description : "\n   " + "I can unleash a true dragon's roar that terrifies my enemies and inspires my allies." + "\n   " + "As an action, choose any creatures that I can see within 30 feet of me. If the creature can see and hear you, it must succeed on a Wisdom saving throw against my spell save DC." + "\n   " + "On a failed save, the creature becomes frightened of me for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, then the creature becomes immune to my Shock and Awe for the next 24 hours." + "\n   " + "Additionally, all friendly creatures within 30 feet of me can make their next attack with advantage or make a saving throw against one effect on themselves, provided they can hear me.",
		}
	});
