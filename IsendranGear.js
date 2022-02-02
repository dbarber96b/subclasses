var iFileName = "Isendran Specialized Gear List";
RequiredSheetVersion(12.999);

SourceList["GMBDB"] = {
	name : "Isendran Specialized Gear List",
	abbreviation : "ISGL",
	date : "2017/08/02"
};

WeaponsList["punch dagger"] = {
	regExpSearch : /^(?=.*punch)(?=.*dagger).*$/i,
	name : "Punch dagger",
	source : ["JM:EAG", 4],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 4, "piercing"],
	range : "Melee",
	weight : 1,
	description : "Finesse, light, adv. on Sleight of Hand checks with this weapon",
	abilitytodamage : true,
	monkweapon : true
};
WeaponsList["scythe"] = {
	regExpSearch : /scythe/i,
	name : "Scythe",
	source : ["JM:EAG", 4],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 10, "slash./pierc."],
	range : "Melee",
	weight : 10,
	description : "Heavy, two-handed",
	abilitytodamage : true
};
WeaponsList["bastard sword"] = {
	regExpSearch : /^(?=.*bastard)(?=.*sword).*$/i,
	name : "Bastard sword",
	source : ["JM:EAG", 4],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 10, "slash./pierc."],
	range : "Melee",
	weight : 6,
	description : "Heavy, versatile (1d10), disadv. if using 1-handed with Str less than 18",
	abilitytodamage : true
};
WeaponsList["claw bracer"] = {
	regExpSearch : /^(?=.*claw)(?=.*bracer).*$/i,
	name : "Claw bracer",
	source : ["JM:EAG", 4],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 6, "slash./pierc."],
	range : "Melee",
	weight : 2,
	description : "Finesse, light, can't be disarmed of this weapon",
	abilitytodamage : true
};
WeaponsList["falchion"] = {
	regExpSearch : /falchion/i,
	name : "Falchion",
	source : ["JM:EAG", 4],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [2, 4, "slashing"],
	range : "Melee",
	weight : 8,
	description : "Heavy, two-handed, critical on 19 or 20",
	abilitytodamage : true
};
WeaponsList["full blade"] = {
	regExpSearch : /^(?=.*full)(?=.*blade).*$/i,
	name : "Full blade",
	source : ["JM:EAG", 4],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [2, 8, "slashing"],
	range : "Melee",
	weight : 20,
	description : "Heavy, two-handed, disadv. on attack rolls if Str less than 18",
	abilitytodamage : true
};
WeaponsList["heavy flail"] = {
	regExpSearch : /^(?=.*(great|heavy))(?=.*flail).*$/i,
	name : "Heavy flail",
	source : ["JM:EAG", 4],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [2, 6, "bludgeoning"],
	range : "Melee",
	weight : 10,
	description : "Heavy, two-handed",
	abilitytodamage : true
};
WeaponsList["jitte"] = {
	regExpSearch : /jitte/i,
	name : "Jitte",
	source : ["JM:EAG", 4],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 4, "bludgeoning"],
	range : "Melee",
	weight : 2,
	description : "Finesse, light; Target has disadv. on save vs. being disarmed",
	abilitytodamage : true,
	monkweapon : true
};
WeaponsList["kama"] = {
	regExpSearch : /kama/i,
	name : "Kama",
	source : ["JM:EAG", 4],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 4, "slashing"],
	range : "Melee",
	weight : 2,
	description : "Finesse, light",
	abilitytodamage : true,
	monkweapon : true
};
WeaponsList["sickle"].regExpSearch = /sickle/i;
WeaponsList["katana"] = {
	regExpSearch : /\bkatana\b/i,
	name : "Katana",
	source : ["JM:EAG", 4],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 8, "slashing"],
	range : "Melee",
	weight : 3,
	description : "Finesse, versatile (1d10)",
	abilitytodamage : true
};
WeaponsList["longsword"].regExpSearch = /^(?=.*long)(?=.*sword).*$/i;
WeaponsList["katar"] = {
	regExpSearch : /katar/i,
	name : "Katar",
	source : ["JM:EAG", 4],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 6, "piercing"],
	range : "Melee",
	weight : 2,
	description : "Finesse, light, adv. to resist being disarmed of this weapon",
	abilitytodamage : true
};
WeaponsList["kusari-gama"] = {
	regExpSearch : /^(?=.*kusari)(?=.*gama).*$/i,
	name : "Kusari-gama",
	source : ["JM:EAG", 4],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 4, "slash./bludg."],
	range : "Melee",
	weight : 3,
	description : "Finesse, light, reach, two-handed; Target disadv. on save vs. knocked prone/disarmed; Can count as dual-wielding",
	abilitytodamage : true,
	monkweapon : true
};
WeaponsList["nekode"] = {
	regExpSearch : /nekode/i,
	name : "Nekode",
	source : ["JM:EAG", 4],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 4, "piercing"],
	range : "Melee",
	weight : 2,
	description : "Light, can't be disarmed of this weapon, gives adv. on Athletics (Climb) check",
	abilitytodamage : true
};
WeaponsList["ninja-to"] = {
	regExpSearch : /^(?=.*ninja)(?=.*to).*$/i,
	name : "Ninja-to",
	source : ["JM:EAG", 4],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 6, "slashing"],
	range : "Melee",
	weight : 3,
	description : "Finesse, light",
	abilitytodamage : true
};
WeaponsList["nunchaku"] = {
	regExpSearch : /Nunchaku/i,
	name : "Nunchaku",
	source : ["JM:EAG", 4],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 4, "bludgeoning"],
	range : "Melee",
	weight : 2,
	description : "Finesse, light; Target has disadv. on save vs. being disarmed",
	abilitytodamage : true,
	monkweapon : true
};
WeaponsList["flail"].regExpSearch = /flail/i;
WeaponsList["nodachi"] = {
	regExpSearch : /nodachi/i,
	name : "Nodachi",
	source : ["JM:EAG", 4],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [2, 8, "slashing"],
	range : "Melee",
	weight : 15,
	description : "Heavy, reach, two-handed, disadv. on attack rolls if Str less than 18 or attacking within 5 ft",
	abilitytodamage : true
};
WeaponsList["o-katana"] = {
	regExpSearch : /\bo-katana\b/i,
	name : "O-Katana",
	source : ["JM:EAG", 4],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 10, "slashing"],
	range : "Melee",
	weight : 6,
	description : "Heavy, versatile (1d12), disadv. if using 1-handed with Str less than 18",
	abilitytodamage : true
};
WeaponsList["sai"] = {
	regExpSearch : /\bsai\b/i,
	name : "Sai",
	source : ["JM:EAG", 4],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 4, "piercing"],
	range : "Melee",
	weight : 2,
	description : "Finesse, light; Target has disadv. on save vs. being disarmed",
	abilitytodamage : true,
	monkweapon : true
};
WeaponsList["three-sectioned staff"] = {
	regExpSearch : /^(?=.*(three|3))(?=.*sectioned)(?=.*staff).*$/i,
	name : "Three-sectioned staff",
	source : ["JM:EAG", 4],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 8, "bludgeoning"],
	range : "Melee",
	weight : 8,
	description : "Finesse, two-handed; Target has disadv. on save vs. being disarmed",
	abilitytodamage : true,
	monkweapon : true
};
WeaponsList["tonfa"] = {
	regExpSearch : /tonfa/i,
	name : "Tonfa",
	source : ["JM:EAG", 4],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 4, "bludgeoning"],
	range : "Melee",
	weight : 2,
	description : "Finesse, light; Target has disadv. on save vs. being disarmed",
	abilitytodamage : true,
	monkweapon : true
};
WeaponsList["club"].regExpSearch = /^(?!.*(great|heavy|big))(?=.*\b(club|bian)\b).*$/i;
WeaponsList["wakizashi"] = {
	regExpSearch : /wakizashi/i,
	name : "Wakizashi",
	source : ["JM:EAG", 4],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 6, "slashing"],
	range : "Melee",
	weight : 2,
	description : "Finesse, light",
	abilitytodamage : true
};
WeaponsList["scimitar"].regExpSearch = /scimitar|liuyedao/i;
WeaponsList["war fan"] = {
	regExpSearch : /^(?=.*war)(?=.*fan).*$/i,
	name : "War fan",
	source : ["JM:EAG", 4],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 6, "slashing"],
	range : "Melee",
	weight : 3,
	description : "Finesse, light, adv. on Sleight of Hand checks with this weapon",
	abilitytodamage : true,
	monkweapon : true
};
WeaponsList["war scythe"] = {
	regExpSearch : /^(?=.*war)(?=.*scythe).*$/i,
	name : "War scythe",
	source : ["JM:EAG", 4],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 12, "slashing"],
	range : "Melee",
	weight : 12,
	description : "Heavy, reach, two-handed, disadvantage to attack within 5 ft",
	abilitytodamage : true
};
WeaponsList["whip-dagger"] = {
	regExpSearch : /^(?=.*whip)(?=.*dagger).*$/i,
	name : "Whip-dagger",
	source : ["JM:EAG", 4],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 6, "slashing"],
	range : "Melee",
	weight : 3,
	description : "Finesse, reach",
	abilitytodamage : true
};
WeaponsList["chain-whip"] = {
		regExpSearch : /^(?!.*chain)(?=.*whip).*$/i,
		name : "Chain Whip",
		source : ["GMBDB"],
		list : "melee",
		ability : 2,
		type : "Martial",
		damage : [2, 4, "bludgeoning"],
		range : "Melee",
		weight : 4,
		description : "Finesse, reach",
		abilitytodamage : true
};
WeaponsList["bolas"] = {
	regExpSearch : /bolas/i,
	name : "Bolas",
	source : ["JM:EAG", 4],
	list : "ranged",
	ability : 2,
	type : "Martial",
	damage : [1, 4, "bludgeoning"],
	range : "10/30 ft",
	weight : 2,
	description : "Finesse, light, thrown; Target has disadv. on save vs. being knocked prone",
	abilitytodamage : true
};
WeaponsList["boomerang"] = {
	regExpSearch : /boomerang/i,
	name : "Boomerang",
	source : ["JM:EAG", 4],
	list : "ranged",
	ability : 2,
	type : "Martial",
	damage : [1, 4, "bludgeoning"],
	range : "20/60 ft",
	weight : 2,
	description : "Finesse, light, thrown; Returns if fails to hit, catch as a reaction with DC 10 Dex check",
	abilitytodamage : true
};
WeaponsList["chakram"] = {
	regExpSearch : /chakram/i,
	name : "Chakram",
	source : ["JM:EAG", 4],
	list : "ranged",
	ability : 2,
	type : "Martial",
	damage : [1, 4, "slashing"],
	range : "20/60 ft",
	weight : 2,
	description : "Finesse, light, thrown",
	abilitytodamage : true
};
WeaponsList["shuriken"] = {
	regExpSearch : /shuriken/i,
	name : "Shuriken",
	source : ["JM:EAG", 4],
	list : "ranged",
	ability : 2,
	type : "Martial",
	damage : [1, 4, "piercing"],
	range : "10/30 ft",
	weight : 0.5,
	description : "Ammunition, finesse, light, thrown, adv. on Sleight of Hand checks with this weapon",
	abilitytodamage : true,
	monkweapon : true
};
WeaponsList["dart"].regExpSearch = /dart/i;
WeaponsList["wrist crossbow"] = {
	regExpSearch : /^(?=.*wrist)(?=.*crossbow).*$/i,
	name : "Wrist crossbow",
	source : ["JM:EAG", 4],
	list : "ranged",
	ability : 2,
	type : "Martial",
	damage : [1, 6, "piercing"],
	range : "10/30 ft",
	weight : 2,
	description : "Ammunition, light, loading, can't be disarmed of this weapon",
	abilitytodamage : true
};

PacksList["bounty hunter"] = {
	name : "Bounty Hunter's Pack (40 gp)",
	source : ["JM:EAG", 3],
	items : [
		["Chest, with:", "", 25],
		["Case, map or scroll", 2, 1],
		["Portable ram", "", 35],
		["Hammer", "", 3],
		["Chain, feet of", 10, 1],
		["Hempen rope, feet of", 50, 0.2],
		["Bullseye lantern", "", 2],
		["Lock", "", 1],
		["Manacles", "", 6],
		["Oil, flasks of", 5, 1],
		["Pitons", 10, .25],
		["Iron spike", 10, .5],
		["Parchment, sheets of", 10, ""],
		["Ink, 1 ounce bottle of", "", ""],
		["Ink pen", 5, ""],
		["Rations, days of", 5, 2],
		["Waterskin", "", 5]
	]
};
PacksList["detective"] = {
	name : "Detective's Pack (140 gp)",
	source : ["JM:EAG", 3],
	items : [
		["Chest, with:", "", 25],
		["Fine clothes", "", 6],
		["Abacus", "", 2],
		["Candles", 5, ""],
		["Case, map or scroll", 2, 1],
		["Crowbar", "", 5],
		["Paper, sheets of", 10, ""],
		["Chalk, pieces of", 10, ""],
		["Ink, 1 ounce bottle of", "", ""],
		["Ink pen", 5, ""],
		["Magnifying glass", "", ""],
		["Steel mirror", "", 0.5],
		["Sealing wax", "", ""],
		["Signal whistle", "", ""]
	]
};
PacksList["ninja"] = {
	name : "Ninja's Pack (40 gp)",
	source : ["JM:EAG", 3],
	items : [
		["Backpack, with:", "", 5],
		["Bag of 1000 ball bearings", 1, 2],
		["Caltrops (in bag)", 20, 0.1],
		["Flexible metal wire, feet of", 10, 0.1],
		["Costume", "", 4],
		["Grappling hook", "", 4],
		["Case, scroll", "", 1],
		["Ink, 1 ounce bottle of", "", ""],
		["Ink pen", "", ""],
		["Paper, sheets of", 10, ""],
		["Candles", 5, ""],
		["Pitons", 5, .25],
		["Rations, days of", 5, 2],
		["Tinderbox", "", 1],
		["Waterskin", "", 5]
	]
};
PacksList["outdoorsman"] = {
	name : "Outdoorsman's Pack (17 gp)",
	source : ["JM:EAG", 3],
	items : [
		["Backpack, with:", "", 5],
		["Bedroll", "", 7],
		["Common clothes", 2, 3],
		["Block and tackle", "", 5],
		["Bucket", "", 2],
		["Hempen rope, feet of", 50, 0.2],
		["Candles", 5, ""],
		["Fishing tackle", "", 4],
		["Hunting trap", 2, 25],
		["Jug", "", 4],
		["Lamp", "", 1],
		["Oil, flasks of", 5, 1],
		["Mess kit", "", 1],
		["Pitons", 10, .25],
		["Iron pot", "", 10],
		["Shovel", "", 5],
		["Two-person tent", "", 20],
		["Tinderbox", "", 1],
		["Whetstone", "", 1],
		["Small knife", "", 0.25],
		["Rations, days of", 5, 2],
		["Waterskin", "", 5]
	]
};
