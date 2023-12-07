AddSubClass("paladin", "oath of the radiant dawn", {
regExpSearch : /^(?=.*(radiant|dawn|light))((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
subname : "Oath of the Radiant Dawn",
source : ["LoI"],
spellcastingExtra : ["faerie fire", "guiding bolt", "scorching ray", "warding bond", "beacon of hope", "spirit guardians", "guardian of faith", "wall of fire", "commune", "flamestrike"],
features : {
		
"subclassfeature3.1" : {
name : "Channel Divinity: Cleansing Light",
minlevel : 3,
action : ["bunus action", ""],
description : desc([
	"As a bonus action I emit bright light in a 30 foot radius centered on myself. Each creature of my choice must make a Constitution saving throw, taking radiant damage equal to my paladin level and be blinded until the end of my next turn, or half as much on a successful save. Undead creatures have disadvantage on this saving throw."]),
	},

"subclassfeature3.2" : {
name : "Channel Divinity: Divine Armament",
minlevel : 3,
action : ["action"],
description : desc([
	"As an action, I can bolster my allies with the power of the light. I choose a number of creatures within 30 feet of me euqal to my Charisma modifier, and for the next minute their weapon attacks and unarmed strikes deal an additional 1d4 radiant damage, at 11th level this damage increase to 2d4."]),
	},
	
"subclassfeature7" : {
name : "Aura of Protection",
minlevel : 7,
description : "\n   " + "While I'm conscious, allies within range gain temporary hitpoints equal to 1d4 plus my Charisma modifier at the start of each of their turns",
additional : ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"]
	},

"subclassfeature15" : {
name : "Wings of Light",
minlevel : 15,
description : desc([
	"I can't gain levels of Shadow Corruption. I am resistant to necrotic damage, and my Ability Scores and hit-point maximum can't be reduced"]),
dmgres : ["Necrotic"],
savetxt : { immune : ["hit point maximum reduction"] }
    	},	

"subclassfeature20" : {
name : "Radiant Champion",
minlevel : 20,
recovery : "long rest",
usages : 1,
action : ["action"],
description : "\n   " + "At 20th level I gain the Radiant Champion feature (see Notes page below)",
	toNotesPage : [{
	name : "Radiant Champion",
	note : [
		"As an action, I can gain the following benefits for 1 minute:",
		"• At the start of each of my turns, I regain 10 hit points.",
		"• When an undead, creature native to the Shadow Realm, or creature with levels of Shadow Corrutption touches me or hits me with a melee attack within 5 feet, they take 2d8 radiant damage.", 
		"• Once per turn when I hit one of these creatures they must make a Wisdom save or be incapacitated until the end of their next turn."],	
	page3notes : true,
	}],
	
		},
	},
});
AddSubClass("ranger", "treasurehunter", {
	regExpSearch : /^(?=.*treasurehunter).*$/i,
	subname : "Treasure Hunter",
	source : ["GMBDB"],
	fullname : Treasure Hunter",
	features : {
		"subclassfeature3" : {
			name : "Delver of Secrets",
			source : ["GMBDB"],
			minlevel : 3,
			descriptionFull : "I gain proficiency in two of the following: Athletics, Acrobatics, or Stealth, as well as Thieves' tools.",
			description : "I gain proficiency with any combination of two skills, Thieves' tools.",
			skillstxt : "Athletics, Acrobatics, or Stealth",
			toolProfs : ["Thieves' tools"]
		},
		"subclassfeature3.1" : {
			name : "Treasure Hunter Magic",
			source : ["GMBDB"],
			minlevel : 3,
			description : desc([
				"I add a spell to my known spells at level 3, 5, 9, 13, and 17",
				"These count as ranger spells, but do not count against the number of spells I can know"
			]),
			spellcastingExtra : ["identify", "locate object", "Leomund's tiny hut", "freedom of movement", "legend lore"],
			spellcastingExtraApplyNonconform : true
		},
		"subclassfeature3.2" : {
			name : "Radiant Champion",
			minlevel : 3,
			description : "\n   " + "At 20th level I gain the Radiant Champion feature (see Notes page below)",
			toNotesPage : [{
			name : "Radiant Champion",
			note : [
				"As an action, I can gain the following benefits for 1 minute:",
				"• At the start of each of my turns, I regain 10 hit points.",
				"• When an undead, creature native to the Shadow Realm, or creature with levels of Shadow Corrutption touches me or hits me with a melee attack within 5 feet, they take 2d8 radiant damage.", 
				"• Once per turn when I hit one of these creatures they must make a Wisdom save or be incapacitated until the end of their next turn."],	
			page3notes : true,
	}],
		},
		"subclassfeature7" : {
			name : "Lucky Charm",
			source : ["GMBDB"],
			minlevel : 7,
			description : desc([
				"I can mark a gold piece as a lucky charm, and give that charm to myself or an ally.",
				"Whenever the holder of the charm makes an attack roll, an ability check, or a saving throw, they can flip the coin to roll an additional d20, expending its charm.",
				"The holder can choose to spend the charm after they roll the die, but before the outcome is determined.",
				"The holder can choose which of the d20s is used for the attack roll, ability check, or saving throw.",
				"The holder can also spend the charm when an attack roll is made against them. They roll a d20, and then choose whether the attack uses the attacker's roll or the new roll.",
				"I can use this feature a number of times equal to my Wisdom modifier, and regain all expended uses when I finish a long rest."
			]),
      action : ["reaction", ""],
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest"
		},
		"subclassfeature11" : {
			name : "Warden's Defense",
			source : ["GMBDB"],
			minlevel : 11,
			description : desc([
				"As a reaction when I or a creature within 5 ft is hit, I can try to fend off the strike",
				"I add 1d8 to the target's AC; If the attack still hits, the target has resistance against it",
				"I can only do this while wielding a melee weapon or a shield"
			]),
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : ["reaction", ""],
		},
		"subclassfeature15" : {
			name : "Spell-Share",
			source : ["GMBDB"],
			minlevel : 15,
			description : desc([
				"When I cast a ranger spell targeting myself, you can also affect one ally I can see within 30 feet with the spell.",
				"You can use this feature twice, and you regain all expended uses when you finish a short rest."
			]),
			recovery : "long rest",
			usages : 2
		}
	}
});
