/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a new subclass
				
	Code by:	dbarber96b
	Date:		2021-08-9 (sheet v13.0.0beta16)
*/

var iFileName = "DrifterPatron.js";
RequiredSheetVersion(13);

SourceList["GMBDB"] = {
	name : "GMBinderDBarber96b",
	abbreviation : ["GMBDB"],
	group : "Dbarber96b",
	date : "2021/12/03"
};
AddSubClass("warlock", "the great wyrn", {
	regExpSearch : /^(?=.*great)(?=.*wyrm)(?=.*warlock).*$/i,
	subname : "The Great Wyrm",
	source : ["GMBDB"],
	spellcastingExtra : ["chromatic orb", "absorb elements", "dragons breath", "alter self", "fly", "fireball", "polymorph", "stoneskin", "geas", "legend lore"],
	features : {
		"subclassfeature1" : {
			name : "Patrons Ancestry",
			source : ["GMBDB"],
			minlevel : 1,
			description : "\n   " + "At 1st level my patron's ancestry determines the powers it can impart to me" + "\n   " + "I choose from one of the Draconic Ancestry types",
		},
    "subclassfeature1.1" : {
			name : "Dragons Breath",
			source : ["GMBDB"],
			minlevel : 1,
			description : desc([
				var EGtW_breathWeaponDesc = function (dmgType, shape) {
		var shapeStr = shape === "line" ? "5-ft by 30-ft line" : "15-ft cone";
		var capitailzedDmgType = dmgType.charAt(0).toUpperCase() + dmgType.slice(1);
		var saveStat = ["cold", "poison"].indexOf(dmgType) >= 0 ? "Con" : "Dex";
		return capitailzedDmgType + " Breath Weapon: As an action once per short rest, I can deal 2d6 " + dmgType + " damage to all in a " + shapeStr + ", " + saveStat + " save halves (DC 8 + Con mod + prof bonus).\nThis damage increases to 3d6 at level 6, 4d6 at level 11, and 5d6 at level 16.";
	};
	var EGtW_draconicAncestryFeature = {
		name : "Draconic Ancestry",
		limfeaname : "Breath Weapon",
		minlevel : 1,
		usages : 1,
		additional : levels.map(function (n) {
			return (n < 6 ? 2 : n < 11 ? 3 : n < 16 ? 4 : 5) + 'd6';
		}),
		recovery : "short rest",
		action : [['action', ""]],
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (v.theWea.dbBreathWeapon && (/dragonborn/i).test(CurrentRace.known)) {
						fields.Damage_Die = (CurrentRace.level < 6 ? 2 : CurrentRace.level < 11 ? 3 : CurrentRace.level < 16 ? 4 : 5) + 'd6';
						if (CurrentRace.variant) {
							fields.Damage_Type = CurrentRace.breathDmgType;
							fields.Description = fields.Description.replace(/(dex|con) save/i, ((/cold|poison/i).test(CurrentRace.breathDmgType) ? 'Con' : 'Dex') + ' save');
							fields.Range = (/black|blue|brass|bronze|copper/i).test(CurrentRace.variant) ? '5-ft \xD7 30-ft line' : '15-ft cone';
						}
					}
				},
				'',
				1
			]
		}
	};
	var EGtW_breathWeaponObj = {
		regExpSearch : /^(?=.*breath)(?=.*weapon).*$/i,
		name : "Breath weapon",
		source : [["W", 168]],
		ability : 3,
		type : 'Natural',
		damage : [2, 6, 'fire'],
		range : "15-ft cone",
		description : "Hits all in area; Dex save, success - half damage; Usable only once per short rest",
		abilitytodamage : false,
		dc : true,
		dbBreathWeapon : true
	};
	var EGtW_acidBreath = EGtW_breathWeaponDesc("acid", "line");
	var EGtW_fireBreathCone = EGtW_breathWeaponDesc("fire", "cone");
	var EGtW_fireBreathLine = EGtW_breathWeaponDesc("fire", "cone");
	var EGtW_coldBreath = EGtW_breathWeaponDesc("cold", "cone");
	var EGtW_lightningBreath = EGtW_breathWeaponDesc("lightning", "line");
	var EGtW_poisonBreath = EGtW_breathWeaponDesc("poison", "cone")
     },
    "subclassfeature1.2" : {
			name : "Wyrms Claws",
			source : ["GMBDB"],
			minlevel : 1,
			description : desc([
				"I gain proficiency with medium armor and shields, as well as longswords, rapiers, and scimitars.",
			]),
			armorProfs : [false, true, false, true],
			weaponProfs : [false, false, ["longsword", "rapier", "scimitar"]],
		},
		"subclassfeature6" : {
			name : "Draconic Affinity",
			source : ["GMBDB"],
			minlevel : 6,
			description : "\n   " + "When I cast a spell that deals damage the same as my Patron's Ancestry, I add my proficiency bonus to the damage.",
		},
		"subclassfeature10" : {
			name : "Draconic Resilience",
			source : ["GMBDB"],
			minlevel : 10,
			description : "\n   " + "I gain resistance to my patron's element.",+ "\n   " + "When I succeed on a saving throw, instead of half damage, I take none.",
		},
		"subclassfeature14" : {
			name : "Frightening Presence",
			source : ["GMBDB"],
			minlevel : 14,
			description : "\n   " + "As an action, I can choose a number of creatures equal to 1+ My Charisma Modifier that I can see within 30 feet." + "\n   " + "Targets must make a Charisma saving throw against my Spell Save DC." + "\n   " + "A creature that fails is frightened of me and my allies for 1 minute.",
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
