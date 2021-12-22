/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:    Homebrew: Oath of the Dragon Knight
	Effect:     This file adds the Oath of the Dragon Knight as a paladin subclass
	Author:     
	Code by:	IZUNACCHI/DBARBER96b
	Date:		2021/11/17 (sheet v13)
*/

var iFileName = "Dragon Oath";

RequiredSheetVersion(13);

SourceList["GMBDB"] = {
	name : "Oath of the Dragon Knight",
	abbreviation : "GMBDB",
	group : "Homebrew",
	url : "https://www.gmbinder.com/share/-LsM0grGoORrW24QMMOe",
	date : "2021/11/17"
};

AddSubClass("paladin", "dragon-paladin", {
	regExpSearch : /^(?=.*dragon)(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))).*$/i,
	subname : "Oath of the Dragon Knight",
	source : ["GMBDB"],
	spellcastingExtra : ["absorb elements", "inflict wounds", "dragon's breath", "see invisibility", "fireball", "fly", "elemental bane", "stoneskin", "cone of cold", "dominate person"],
	features : {
			"subclassfeature3" : {
			name : "Dragon Oath",
			source : ["GMBDB"],
			minlevel : 3,
			description : "\n   " + "Choose a Dragon Oath using the \"Choose Feature\" button above" + "\n   " + "When I deal damage of the type associated with my Dragon Oath to other creatures, I can choose a number of them equal to my proficiency bonus. The chosen creatures automatically succeed on their saving throws against it (if any), and suffer no damage from it." + "\n   " + "When I deal damage with a paladin spell, I can change the damage type to the one associated with my Dragon Oath" + "\n   " + "When interacting with dragons, if I can add my proficiency bonus, I can double it" + "\n   " + "I can read, write, speak Draconic.",
			choices : ["Black Dragon oath", "Blue Dragon oath", "Brass Dragon oath", "Bronze Dragon oath", "Copper Dragon oath", "Gold Dragon oath", "Green Dragon oath", "Red Dragon oath", "Silver Dragon oath", "White Dragon oath"],
				"black dragon oath" : {
					name : "Dragon Oath",
					description : "\n   " + "I have an oath to black dragons, which are affiliated with acid damage." + "\n   " + "When I deal acid damage to other creatures, I can choose a number of them equal to my proficiency bonus. The chosen creatures automatically succeed on their saving throws against it (if any), and suffer no damage from it." + "\n   " + "When I deal damage with a paladin spell, I can change the damage type to acid." + "\n   " + "When interacting with dragons, if I can add my proficiency bonus, I can double it." + "\n   " + "I can read, write, speak Draconic.",
					dependentChoices : "black dragon oath"
				},
				"blue dragon oath" : {
					name : "Draconic Blessing",
					description : "\n   " + "I have an oath to blue dragons, which are affiliated with lightning damage." + "\n   " + "When I deal lightning damage to other creatures, I can choose a number of them equal to my proficiency bonus. The chosen creatures automatically succeed on their saving throws against it (if any), and suffer no damage from it." + "\n   " + "When I deal damage with a paladin spell, I can change the damage type to lightning." + "\n   " + "When interacting with dragons, if I can add my proficiency bonus, I can double it." + "\n   " + "I can read, write, speak Draconic.",
					dependentChoices : "blue dragon oath"
				},
				"brass dragon oath" : {
					name : "Dragon Oath",
					description : "\n   " + "I have an oath to brass dragons, which are affiliated with fire damage." + "\n   " + "When I deal fire damage to other creatures, I can choose a number of them equal to my proficiency bonus. The chosen creatures automatically succeed on their saving throws against it (if any), and suffer no damage from it." + "\n   " + "When I deal damage with a paladin spell, I can change the damage type to fire." + "\n   " + "When interacting with dragons, if I can add my proficiency bonus, I can double it." + "\n   " + "I can read, write, speak Draconic.",
					dependentChoices : "brass dragon oath"
				},
				"bronze dragon oath" : {
					name : "Dragon Oath",
					description : "\n   " + "I have an oath to bronze dragons, which are affiliated with lightning dmg." + "\n   " + "When I deal lightning damage to other creatures, I can choose a number of them equal to my proficiency bonus. The chosen creatures automatically succeed on their saving throws against it (if any), and suffer no damage from it." + "\n   " + "When I deal damage with a paladin spell, I can change the damage type to lightning." + "\n   " + "When interacting with dragons, if I can add my proficiency bonus, I can double it." + "\n   " + "I can read, write, speak Draconic.",
					dependentChoices : "bronze dragon oath"
				},
				"copper dragon oath" : {
					name : "Dragon Oath",
					description : "\n   " + "I have an oath to copper dragons, which are affiliated with acid damage." + "\n   " + "When I deal acid damage to other creatures, I can choose a number of them equal to my proficiency bonus. The chosen creatures automatically succeed on their saving throws against it (if any), and suffer no damage from it." + "\n   " + "When I deal damage with a paladin spell, I can change the damage type to acid." + "\n   " + "When interacting with dragons, if I can add my proficiency bonus, I can double it." + "\n   " + "I can read, write, speak Draconic.",
					dependentChoices : "copper dragon oath"
				},
				"gold dragon oath" : {
					name : "Dragon Oath",
					description : "\n   " + "I have an oath to gold dragons, which are affiliated with fire damage." + "\n   " + "When I deal fire to other creatures, I can choose a number of them equal to my proficiency bonus. The chosen creatures automatically succeed on their saving throws against it (if any), and suffer no damage from it." + "\n   " + "When I deal damage with a paladin spell, I can change the damage type to fire." + "\n   " + "When interacting with dragons, if I can add my proficiency bonus, I can double it." + "\n   " + "I can read, write, speak Draconic.",
					dependentChoices : "gold dragon oath"
				},
				"green dragon oath" : {
					name : "Dragon Oath",
					description : "\n   " + "I have an oath to green dragons, which are affiliated with poison damage." + "\n   " + "When I deal poison damage to other creatures, I can choose a number of them equal to my proficiency bonus. The chosen creatures automatically succeed on their saving throws against it (if any), and suffer no damage from it." + "\n   " + "When I deal damage with a paladin spell, I can change the damage type to poison." + "\n   " + "When interacting with dragons, if I can add my proficiency bonus, I can double it." + "\n   " + "I can read, write, speak Draconic.",
					dependentChoices : "green dragon oath"
				},
				"red dragon oath" : {
					name : "Dragon Oath",
					description : "\n   " + "I have an oath to red dragons, which are affiliated with fire damage." + "\n   " + "When I deal fire damage to other creatures, I can choose a number of them equal to my proficiency bonus. The chosen creatures automatically succeed on their saving throws against it (if any), and suffer no damage from it." + "\n   " + "When I deal damage with a paladin spell, I can change the damage type to fire." + "\n   " + "When interacting with dragons, if I can add my proficiency bonus, I can double it." + "\n   " + "I can read, write, speak Draconic.",
					dependentChoices : "red dragon oath"
				},
				"silver dragon oath" : {
					name : "Dragon Oath",
					description : "\n   " + "I have an oath to silver dragons, which are affiliated with cold damage." + "\n   " + "When I deal cold damage to other creatures, I can choose a number of them equal to my proficiency bonus. The chosen creatures automatically succeed on their saving throws against it (if any), and suffer no damage from it." + "\n   " + "When I deal damage with a paladin spell, I can change the damage type to cold." + "\n   " + "When interacting with dragons, if I can add my proficiency bonus, I can double it." + "\n   " + "I can read, write, speak Draconic.",
					dependentChoices : "silver dragon oath"
				},
				"white dragon oath" : {
					name : "Dragon Oath",
					description : "\n   " + "I have an oath to white dragons, which are affiliated with cold damage." + "\n   " + "When I deal cold damage to other creatures, I can choose a number of them equal to my proficiency bonus. The chosen creatures automatically succeed on their saving throws against it (if any), and suffer no damage from it." + "\n   " + "When I deal damage with a paladin spell, I can change the damage type to cold." + "\n   " + "When interacting with dragons, if I can add my proficiency bonus, I can double it." + "\n   " + "I can read, write, speak Draconic.",
					dependentChoices : "white dragon oath"
				},
				languageProfs : ["Draconic"],
				choiceDependencies : [{
					feature : "subclassfeature2"},{
						feature : "subclassfeature6"
				},{
					feature : "subclassfeature8.1"
			}]
			},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Dragon's Wrath",
			source : ["GMBDB"],
			minlevel : 3,
			description : "\n   " + "Choose a Dragon oath using the \"Choose Feature\" button above" + "\n   " + "As an action, I unleash a devastating Exhalation of energy. My Draconic Blessing determines the size, shape, and damage type of this breath weapon." + "\n   " + "When I use this breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by my Draconic Blessing. A creature takes 3d8 + your paladin level damage on a failed save, and half as much damage on a successful one.",
            choices : ["black Dragon oath", "blue Dragon oath", "brass Dragon oath", "bronze Dragon oath", "copper Dragon oath", "gold Dragon oath", "green Dragon oath", "red Dragon oath", "silver Dragon oath", "white Dragon oath"],
			choicesNotInMenu : true,
            "black Dragon oath" : {
					name : "Channel Divinity: Dragon's Wrath",
					description : "\n   " + "As an action, I unleash a devastating Exhalation of energy. " + "\n   " + "When I use this breath weapon, each creature in a 10 by 60 ft. line must make a dexterity saving throw. A creature takes 3d8 + my paladin level acid damage on a failed save, and half as much damage on a successful one.",
				},
				"blue Dragon oath" : {
					name : "Channel Divinity: Dragon's Wrath",
					description : "\n   " + "As an action, I unleash a devastating Exhalation of energy. " + "\n   " + "When I use this breath weapon, each creature in a 10 by 60 ft. line must make a dexterity saving throw. A creature takes 3d8 + my paladin level lightning damage on a failed save, and half as much damage on a successful one.",
					
				},
				"brass Dragon oath" : {
					name : "Channel Divinity: Dragon's Wrath",
					description : "\n   " + "As an action, I unleash a devastating Exhalation of energy. " + "\n   " + "When I use this breath weapon, each creature in a 10 by 60 ft. line must make a dexterity saving throw. A creature takes 3d8 + my paladin level fire damage on a failed save, and half as much damage on a successful one.",
					
				},
				"bronze Dragon oath" : {
					name : "Channel Divinity: Dragon's Wrath",
					description : "\n   " + "As an action, I unleash a devastating Exhalation of energy. " + "\n   " + "When I use this breath weapon, each creature in a 10 by 60 ft. line must make a dexterity saving throw. A creature takes 3d8 + my paladin level lightning damage on a failed save, and half as much damage on a successful one.",
					
				},
				"copper Dragon oath" : {
					name : "Channel Divinity: Dragon's Wrath",
					description : "\n   " + "As an action, I unleash a devastating Exhalation of energy. " + "\n   " + "When I use this breath weapon, each creature in a 10 by 60 ft. line must make a dexterity saving throw. A creature takes 3d8 + my paladin level acid damage on a failed save, and half as much damage on a successful one.",
					
				},
				"gold Dragon oath" : {
					name : "Channel Divinity: Dragon's Wrath",
					description : "\n   " + "As an action, I unleash a devastating Exhalation of energy. " + "\n   " + "When I use this breath weapon, each creature in a 30 ft. cone must make a dexterity saving throw. A creature takes 3d8 + my paladin level fire damage on a failed save, and half as much damage on a successful one.",
					
				},
				"green Dragon oath" : {
					name : "Channel Divinity: Dragon's Wrath",
					description : "\n   " + "As an action, I unleash a devastating Exhalation of energy. " + "\n   " + "When I use this breath weapon, each creature in a 30 ft. cone must make a constitution saving throw. A creature takes 3d8 + my paladin level posion damage on a failed save, and half as much damage on a successful one.",
					
				},
				"red Dragon oath" : {
					name : "Channel Divinity: Dragon's Wrath",
					description : "\n   " + "As an action, I unleash a devastating Exhalation of energy. " + "\n   " + "When I use this breath weapon, each creature in a 30 ft. cone must make a dexterity saving throw. A creature takes 3d8 + my paladin level fire damage on a failed save, and half as much damage on a successful one.",
					
				},
				"silver Dragon oath" : {
					name : "Channel Divinity: Dragon's Wrath",
					description : "\n   " + "As an action, I unleash a devastating Exhalation of energy. " + "\n   " + "When I use this breath weapon, each creature in a 30 ft. cone must make a constitution saving throw. A creature takes 3d8 + my paladin level cold damage on a failed save, and half as much damage on a successful one.",
					
				},
				"white Dragon oath" : {
					name : "Channel Divinity: Dragon's Wrath",
					description : "\n   " + "As an action, I unleash a devastating Exhalation of energy. " + "\n   " + "When I use this breath weapon, each creature in a 30 ft. cone must make a constitution saving throw. A creature takes 3d8 + my paladin level cold damage on a failed save, and half as much damage on a successful one.",
			
				},
        },
		"subclassfeature7" : {
			name : "Legendary Protection",
			source : ["GMBDB"],
			minlevel : 7,
			description : "\n   " + "I have resistance to the damage type of my Dragon Oath. If I already have the resistance to that type from another source, the I can instead reduce damage of that type by an amount equal to my  Wisdom modifier (minimum of 1) after halving the dmg",
            choices : ["black Dragon oath", "blue Dragon oath", "brass Dragon oath", "bronze Dragon oath", "copper Dragon oath", "gold Dragon oath", "green Dragon oath", "red Dragon oath", "silver Dragon oath", "white Dragon oath"],
			choicesNotInMenu : true,
            "black Dragon oath" : {
					name : "Legendary Protection",
					description : "\n   " + "I have resistance to acid damage. If I already have acid damage resistance from another source, the I can instead reduce acid damage I take by an amount equal to my  Wisdom modifier (minimum of 1) after halving the dmg.",
					dmgres: ["Acid"]
				},
				"blue Dragon oath" : {
					name : "Legendary Protection",
					description : "\n   " + "I have resistance to lightning damage. If I already have lightning damage resistance from another source, the I can instead reduce lightning damage I take by an amount equal to my  Wisdom modifier (minimum of 1) after halving the dmg.",
					mgres: ["Lightning"]
				},
				"brass Dragon oath" : {
					name : "Legendary Protection",
					description : "\n   " + "I have resistance to fire damage. If I already have fire damage resistance from another source, the I can instead reduce fire damage I take by an amount equal to my  Wisdom modifier (minimum of 1) after halving the dmg.",
					mgres: ["Fire"]
				},
				"bronze Dragon oath" : {
					name : "Legendary Protection",
					description : "\n   " + "I have resistance to lightning damage. If I already have lightning damage resistance from another source, the I can instead reduce lightning damage I take by an amount equal to my  Wisdom modifier (minimum of 1) after halving the dmg.",
					mgres: ["Lightning"]
				},
				"copper Dragon oath" : {
					name : "Legendary Protection",
					description : "\n   " + "I have resistance to acid damage. If I already have acid damage resistance from another source, the I can instead reduce acid damage I take by an amount equal to my  Wisdom modifier (minimum of 1) after halving the dmg.",
					mgres: ["Acid"]
				},
				"gold Dragon oath" : {
					name : "Legendary Protection",
					description : "\n   " + "I have resistance to fire damage. If I already have fire damage resistance from another source, the I can instead reduce fire damage I take by an amount equal to my  Wisdom modifier (minimum of 1) after halving the dmg.",
					mgres: ["Fire"]
				},
				"green Dragon oath" : {
					name : "Legendary Protection",
					description : "\n   " + "I have resistance to poison damage. If I already have poison damage resistance from another source, the I can instead reduce poison damage I take by an amount equal to my  Wisdom modifier (minimum of 1) after halving the dmg.",
					mgres: ["Poison"]
				},
				"red Dragon oath" : {
					name : "Legendary Protection",
					description : "\n   " + "I have resistance to fire damage. If I already have fire damage resistance from another source, the I can instead reduce fire damage I take by an amount equal to my  Wisdom modifier (minimum of 1) after halving the dmg.",
					mgres: ["Fire"]
				},
				"silver Dragon oath" : {
					name : "Legendary Protection",
					description : "\n   " + "I have resistance to cold damage. If I already have cold damage resistance from another source, the I can instead reduce cold damage I take by an amount equal to my  Wisdom modifier (minimum of 1) after halving the dmg.",
					mgres: ["Cold"]
				},
				"white Dragon oath" : {
					name : "Legendary Protection",
					description : "\n   " + "I have resistance to cold damage. If I already have cold damage resistance from another source, the I can instead reduce cold damage I take by an amount equal to my  Wisdom modifier (minimum of 1) after halving the dmg.",
					mgres: ["Cold"]
					
				},
        },
		"subclassfeature7.1" : {
			name : "Draconic Might",
			source : ["GMBDB"],
			minlevel : 7,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage of the type associated with my Dragon oath",
			choices : ["Black Dragon oath", "Blue Dragon oath", "Brass Dragon oath", "Bronze Dragon oath", "Copper Dragon oath", "Gold Dragon oath", "Green Dragon oath", "Red Dragon oath", "Silver Dragon oath", "White Dragon oath"],
			choicesNotInMenu : true,
				"black Dragon oath" : {
					name : "Draconic Might",
					description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra acid damage.",
					additional : levels.map(function (n) {
						if (n < 8) return "";
						return "+" + (n < 14 ? 1 : 2) + "d8 acid damage";
					}),
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (classes.known.paladin && classes.known.paladin.level > 7 && !v.isSpell) {
									fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.paladin.level < 14 ? 1 : 2) + 'd8 acid damage';
								}
							},
						"Once per turn, I can have one of my weapon attacks that hit do extra acid damage."
						]
					}
				},
				"blue Dragon oath" : {
					name : "Draconic Might",
					description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra lightning damage.",			
					additional : levels.map(function (n) {
						if (n < 8) return "";
						return "+" + (n < 14 ? 1 : 2) + "d8 lightning damage";
					}),
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (classes.known.paladin && classes.known.paladin.level > 7 && !v.isSpell) {
									fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.paladin.level < 14 ? 1 : 2) + 'd8 lightning damage';
								}
							},
						"Once per turn, I can have one of my weapon attacks that hit do extra lightning damage."
						]
					}
				},
				"brass Dragon oath" : {
					name : "Draconic Might",
					description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra fire damage.",
					additional : levels.map(function (n) {
						if (n < 8) return "";
						return "+" + (n < 14 ? 1 : 2) + "d8 fire damage";
					}),
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (classes.known.paladin && classes.known.paladin.level > 7 && !v.isSpell) {
									fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.paladin.level < 14 ? 1 : 2) + 'd8 fire damage';
								}
							},
						"Once per turn, I can have one of my weapon attacks that hit do extra fire damage."
						]
					}
				},
				"bronze Dragon oath" : {
					name : "Draconic Might",
					description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra lightning damage.",
					additional : levels.map(function (n) {
						if (n < 8) return "";
						return "+" + (n < 14 ? 1 : 2) + "d8 lightning damage";
					}),
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (classes.known.paladin && classes.known.paladin.level > 7 && !v.isSpell) {
									fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.paladin.level < 14 ? 1 : 2) + 'd8 lightning damage';
								}
							},
						"Once per turn, I can have one of my weapon attacks that hit do extra lightning damage."
						]
					}
				},
				"copper Dragon oath" : {
					name : "Draconic Might",
					description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra acid damage.",
					additional : levels.map(function (n) {
						if (n < 8) return "";
						return "+" + (n < 14 ? 1 : 2) + "d8 acid damage";
					}),
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (classes.known.paladin && classes.known.paladin.level > 7 && !v.isSpell) {
									fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.paladin.level < 14 ? 1 : 2) + 'd8 acid damage';
								}
							},
						"Once per turn, I can have one of my weapon attacks that hit do extra acid damage."
						]
					}
				},
				"gold Dragon oath" : {
					name : "Draconic Might",
					description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra fire damage.",
					additional : levels.map(function (n) {
						if (n < 8) return "";
						return "+" + (n < 14 ? 1 : 2) + "d8 fire damage";
					}),
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (classes.known.paladin && classes.known.paladin.level > 7 && !v.isSpell) {
									fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.paladin.level < 14 ? 1 : 2) + 'd8 fire damage';
								}
							},
						"Once per turn, I can have one of my weapon attacks that hit do extra fire damage."
						]
					}
				},
				"green Dragon oath" : {
					name : "Draconic Might",
					description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra poison damage.",
					additional : levels.map(function (n) {
						if (n < 8) return "";
						return "+" + (n < 14 ? 1 : 2) + "d8 poison damage";
					}),
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (classes.known.paladin && classes.known.paladin.level > 7 && !v.isSpell) {
									fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.paladin.level < 14 ? 1 : 2) + 'd8 poison damage';
								}
							},
						"Once per turn, I can have one of my weapon attacks that hit do extra poison damage."
						]
					}
				},
				"red Dragon oath" : {
					name : "Draconic Might",
					description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra fire damage.",
					additional : levels.map(function (n) {
						if (n < 8) return "";
						return "+" + (n < 14 ? 1 : 2) + "d8 fire damage";
					}),
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (classes.known.paladin && classes.known.paladin.level > 7 && !v.isSpell) {
									fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.paladin.level < 14 ? 1 : 2) + 'd8 fire damage';
								}
							},
						"Once per turn, I can have one of my weapon attacks that hit do extra fire damage."
						]
					}
				},
				"silver Dragon oath" : {
					name : "Divine Strike",
					description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra cold damage.",
					additional : levels.map(function (n) {
						if (n < 8) return "";
						return "+" + (n < 14 ? 1 : 2) + "d8 cold damage";
					}),
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (classes.known.paladin && classes.known.paladin.level > 7 && !v.isSpell) {
									fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.paladin.level < 14 ? 1 : 2) + 'd8 cold damage';
								}
							},
						"Once per turn, I can have one of my weapon attacks that hit do extra cold damage."
						]
					}
				},
				"white Dragon oath" : {
					name : "Draconic Might",
					description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra cold damage.",
					additional : levels.map(function (n) {
						if (n < 8) return "";
						return "+" + (n < 14 ? 1 : 2) + "d8 cold damage";
					}),
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (classes.known.paladin && classes.known.paladin.level > 7 && !v.isSpell) {
									fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.paladin.level < 14 ? 1 : 2) + 'd8 cold damage';
								}
							},
						"Once per turn, I can have one of my weapon attacks that hit do extra cold damage."
						]
					}
				},
				
		},
		"subclassfeature15" : {
			name : "Shock and Awe",
			source : ["GMBDB"],
			minlevel : 15,
			description : "\n   " + "I can unleash a true dragon's roar that terrifies my enemies and inspires my allies." + "\n   " + "As an action, choose any creatures that I can see within 30 feet of me. If the creature can see and hear you, it must succeed on a Wisdom saving throw against my spell save DC." + "\n   " + "On a failed save, the creature becomes frightened of me for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, then the creature becomes immune to my Shock and Awe for the next 24 hours." + "\n   " + "Additionally, all friendly creatures within 30 feet of me can make their next attack with advantage or make a saving throw against one effect on themselves, provided they can hear me.",
		}
	},
		"subclassfeature20" : {
			name : "Dragonsoul",
			source : ["GMBDB"],
			minlevel : 20,
			description : desc([
				"As an action, I wreathe myself in draconic magic for 1 minute and gain the following benefits:",
				" - I can teleport my walking speed as a bonus action",
				" - Hostiles within 30 ft have disadv. on saves vs. my spells and -5 on concentration saves",
				" - When I use my action to cast a spell, I can make a weapon attack as a bonus action",
				" - I can reroll a number of damage dice for a spell equal to my Cha mod (min 1)"
			]),
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
);
