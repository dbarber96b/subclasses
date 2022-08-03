MagicItemsList["storm blade"] = {
	name : "Storm Blade",
	source : ["GMBDB"],
	type : "weapon (longsword)",
	rarity : "rare",
	attunement : false,
	description : "This magic sword is embued with energy from the God of Storms. Its blade has delicate Lichtenberg patterns along the blade. The weapon deals an extra 1d8 lightning damage to any target it hits.",
	descriptionFull : "This magic sword is embued with energy from of the God of Storms. Its blade has delicate Lichtenberg patterns along the blade. The weapon deals an extra 1d8 lightning damage to any target it hits.",
	weight : 2,
	weaponsAdd : ["Storm Blade"],
	weaponOptions : [{
		baseWeapon : "longsword",
		regExpSearch : /^(?=.*storm)(?=.*blade).*$/i,
		name : "Storm Blade",
		source : ["GMBDB"],
		description : "Versatile (d10); +1d8 lightning damage",
	}]
};
MagicItemsList["storm bringer"] = {
  name: "Storm Bringer",
  source: ["GMBDB"],
  type: "weapon (longsword)",
  rarity: "legendary",
  attunement: true,
  description: "",
  descriptionFull:
    "The thick, grooved blade of this shining silver longsword is lined with Lichtenberg patterns that crackle blue in the light. Storm Bringer—known also as Aimsir— is the weapon of the latest champions of Velios, the god of storms.." +
    "\n" +
    toUni("Dormant") +
    "\n" +
    "While Storm Bringer is in a dormant state, you can hold this magic longsword and use a bonus action to speak the command word Tintreach, causing the sword to emit a pale blue glow that sheds bright light in a 20-foot radius and dim light for an additional 20 feet. This glow lasts until you use a bonus action to speak the command word again, or until you drop or sheathe the sword." +
    "\n" +
    "\u2022 While this longsword is glowing, you gain a +1 bonus to attack and damage rolls made with the weapon, and you have resistance to lightning damage." +
    "\n" +
    "\u2022 You can cast the thunderwave spell from the weapon as an action, requiring no components (save DC 13). Once a spell has been cast using Storm Bringer, that spell can't be cast from the sword until the next dawn." +
    "\n" +
    toUni("Awakened") +
    "\n" +
    "When Storm Bringer reaches an awakened state, you gain the following benefits:" +
    "\n" +
    "\u2022 The weapon's bonus to attack and damage rolls increases to +2." +
    "\n" +
    "\u2022 When a creature within 5 feet of you hits you with a melee attack, you can use your reaction to create a burst of thunder from the sword, dealing 1d8 thunder damage to the attacker." +
    "\n" +
    "\u2022 You can cast the warding wind spell from the sword as an action, and the save DC for spells cast using the sword increases to 15." +
    "\n" +
    toUni("Exalted") +
    "\n" +
    "\u2022 When Storm Bringer reaches an exalted state, you gain the following benefits:" +
    "\n" +
    "\u2022 The weapon's bonus to attack and damage rolls increases to +3." +
    "\n" +
    "\u2022 The burst of thunder you can create as a reaction when hit with a melee attack deals 1d12 thunder damage, and you can immediately teleport to an unoccupied space you can see within 15 feet of you as part of the same reaction." +
    "\n" +
    "\u2022 You can cast the fly spell from the sword as an action, and the save DC for spells cast using the sword increases to 17.",
  allowDuplicates: false,
  choices: ["Dormant", "Awakened", "Exalted"],
  dormant: {
    name: "Dormant Storm Bringer",
    description:
      "While holding this sword, I can speak its command word to cause it to glow bright light in 20 ft, dim light in 20 ft. While glowing, it adds +1 to hit and damage and grants resistance to lightning damage. Once per dawn, I can cast thunderwave (DC 13).",
    weaponsAdd: ["Dormant Star Razor"],
    weaponOptions: {
      baseWeapon: "longsword",
      regExpSearch: /^(?=.*dormant)(?=.*storm bringer).*$/i,
      name: "Dormant Storm Bringerr",
      source: ["GMBDB"],
    },
    action: [
      ["bonus action", " (start/stop glow)"],
      ["action", " (thunderwave)"],
    ],
    calcChanges: {
      atkCalc: [
        function (fields, v, output) {
          if (
            /\bstorm bringer\b/i.test(v.WeaponTextName) &&
            /\bglowing\b/i.test(v.WeaponTextName)
          ) {
            output.magic += 1;
          }
        },
        "If I include the word 'Glowing' in Star Razor's name, the calculation will add +1 to hit and damage.",
      ],
    },
    spellFirstColTitle: "Us",
    fixedDC: 13,
    spellcastingBonus: [
      {
        name: "Once per dawn",
        spells: ["thunderwave"],
        selection: ["thunderwave"],
        firstCol: "checkbox",
      },
    ],
    extraLimitedFeatures: [
      {
        name: "Thunderwave (Storm Bringer)",
        usages: 1,
        recovery: "dawn",
      },
    ],
  },
  awakened: {
    name: "Awakened Storm Bringer",
    description:
      "While holding this sword, I can speak its command word to cause it to glow bright light in 20 ft, dim light in 20 ft. While glowing, it adds +2 to hit and damage and grants resistance to lightning damage. Once per dawn per spell, I can cast (DC 15) thunderwave and warding wind. See third page.",
    weaponsAdd: ["Awakened Storm Bringer"],
    weaponOptions: {
      baseWeapon: "longsword",
      regExpSearch: /^(?=.*awakened)(?=.*storm bringer).*$/i,
      name: "Awakened Storm Bringer",
      source: ["GMBDB"],
    },
    action: [
      ["bonus action", " (start/stop glow)"],
      ["reaction", " (when hit in melee)"],
    ],
    calcChanges: {
      atkCalc: [
        function (fields, v, output) {
          if (
            /\bstar razor\b/i.test(v.WeaponTextName) &&
            /\bglowing\b/i.test(v.WeaponTextName)
          ) {
            output.magic += 2;
          }
        },
        "If I include the word 'Glowing' in Star Razor's name, the calculation will add +2 to hit and damage.",
      ],
    },
    spellFirstColTitle: "Us",
    fixedDC: 15,
    spellcastingBonus: [
      {
        name: "Once per dawn",
        spells: ["thunderwave"],
        selection: ["thunderwave"],
        firstCol: "checkbox",
      },
      {
        name: "Once per dawn",
        spells: ["warding wind"],
        selection: ["warding wind"],
        firstCol: "checkbox",
      },
    ],
    extraLimitedFeatures: [
      {
        name: "Thunderwave (Storm Bringer)",
        usages: 1,
        recovery: "dawn",
      },
      {
        name: "Warding Wind (Storm Bringer)",
        usages: 1,
        recovery: "dawn",
      },
    ],
    toNotesPage: [
      {
        name: "Features",
        page3notes: true,
        note: [
          "When hit in melee, I can use my reaction to deal 1d8 thunder damage to the attacker",
        ],
      },
    ],
  },
  exalted: {
    name: "Exalted Star Razor",
    description:
      "While holding this sword, I can speak its command word to cause it to glow bright light in 20 ft, dim light in 20 ft. While glowing, it adds +3 to hit and damage and grants resistance to lightning damage. Once per dawn per spell, I can cast (DC 15) thunderwave, warding wind, and fly. See third page.",
    weaponsAdd: ["Exalted Star Razor"],
    weaponOptions: {
      baseWeapon: "longsword",
      regExpSearch: /^(?=.*exalted)(?=.*storm bringer).*$/i,
      name: "Exalted Storm Bringer",
      source: ["GMBDB"],
    },
    action: [
      ["bonus action", " (start/stop glow)"],
      ["reaction", " (when hit in melee)"],
    ],
    calcChanges: {
      atkCalc: [
        function (fields, v, output) {
          if (
            /\bstar razor\b/i.test(v.WeaponTextName) &&
            /\bglowing\b/i.test(v.WeaponTextName)
          ) {
            output.magic += 3;
          }
        },
        "If I include the word 'Glowing' in Star Razor's name, the calculation will add +3 to hit and damage.",
      ],
    },
    spellFirstColTitle: "Us",
    fixedDC: 17,
    spellcastingBonus: [
      {
        name: "Once per dawn",
        spells: ["thunderwave"],
        selection: ["thunderwave"],
        firstCol: "checkbox",
      },
      {
        name: "Once per dawn",
        spells: ["warding wind"],
        selection: ["warding wind"],
        firstCol: "checkbox",
      },
      {
        name: "Once per dawn",
        spells: ["fly"],
        selection: ["fly"],
        firstCol: "checkbox",
      },
    ],
    extraLimitedFeatures: [
      {
        name: "Thunderwave (Storm Bringer)",
        usages: 1,
        recovery: "dawn",
      },
      {
        name: "Warding Wind (Storm Bringer)",
        usages: 1,
        recovery: "dawn",
      },
      {
        name: "Fly (Storm Bringer)",
        usages: 1,
        recovery: "dawn",
      },
    ],
    toNotesPage: [
      {
        name: "Features",
        page3notes: true,
        note: [
          "When hit in melee, I can use my reaction to deal 1d12 thunder damage to the attacker",
          "I can then teleport to a seen, unoccupied space within 15 ft",
        ],
      },
    ],
  },
};
