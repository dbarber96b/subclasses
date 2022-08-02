MagicItemsList["stormbringer"] = {
	name : "Stormbringer",
	source : ["GMBDB"],
	type : "weapon (longsword)",
	rarity : "rare",
	attunement : false,
	description : "This magic sword is the blade of the chosen of the God of Storms. Its blade has delicate Lichtenberg patterns along the blade. The weapon deals an extra 1d8 lightning damage to any target it hits.",
	descriptionFull : "This magic sword is the blade of the chosen of the God of Storms. Its blade has delicate Lichtenberg patterns along the blade. The weapon deals an extra 1d8 lightning damage to any target it hits.",
	weight : 2,
	weaponsAdd : ["Stormbringer"],
	weaponOptions : [{
		baseWeapon : "longsword",
		regExpSearch : /^(?=.*storm)(?=.*bringer).*$/i,
		name : "Stormbringer",
		source : ["GMBDB"],
		description : "Versatile (d10); +1d8 lightning damage",
	}]
};
MagicItemsList["star razor"] = {
  name: "Star Razor",
  source: [["TDCSR", 210]],
  type: "weapon (longsword)",
  rarity: "legendary",
  attunement: true,
  description: "",
  descriptionFull:
    "The thick, grooved blade of this shining silver longsword is lined with etched runes that sparkle blue in the light. Star Razor—known also as Dwueth'var— was thought to have been destroyed or lost after the Calamity, but new rumors suggest that it might be wielded by a half-orc somewhere in Wildemount." +
    "\n" +
    toUni("Dormant") +
    "\n" +
    "While Star Razor is in a dormant state, you can hold this magic longsword and use a bonus action to speak the command word Galas-var, causing the sword to emit a pale blue glow that sheds bright light in a 20-foot radius and dim light for an additional 20 feet. This glow lasts until you use a bonus action to speak the command word again, or until you drop or sheathe the sword." +
    "\n" +
    "\u2022 While this longsword is glowing, you gain a +1 bonus to attack and damage rolls made with the weapon, and you have resistance to radiant damage." +
    "\n" +
    "\u2022 You can cast the faerie fire spell from the weapon as an action, requiring no components (save DC 13). Once a spell has been cast using Star Razor, that spell can't be cast from the sword until the next dawn." +
    "\n" +
    toUni("Awakened") +
    "\n" +
    "When Star Razor reaches an awakened state, you gain the following benefits:" +
    "\n" +
    "\u2022 The weapon's bonus to attack and damage rolls increases to +2." +
    "\n" +
    "\u2022 When a creature within 5 feet of you hits you with a melee attack, you can use your reaction to create a burst of radiance from the sword, dealing 1d8 radiant damage to the attacker." +
    "\n" +
    "\u2022 You can cast the see invisibility spell from the sword as an action, and the save DC for spells cast using the sword increases to 15." +
    "\n" +
    toUni("Exalted") +
    "\n" +
    "\u2022 When Star Razor reaches an exalted state, you gain the following benefits:" +
    "\n" +
    "\u2022 The weapon's bonus to attack and damage rolls increases to +3." +
    "\n" +
    "\u2022 The burst of radiance you can create as a reaction when hit with a melee attack deals 1d12 radiant damage, and you can immediately teleport to an unoccupied space you can see within 15 feet of you as part of the same reaction." +
    "\n" +
    "\u2022 You can cast the fly spell from the sword as an action, and the save DC for spells cast using the sword increases to 17.",
  allowDuplicates: false,
  choices: ["Dormant", "Awakened", "Exalted"],
  dormant: {
    name: "Dormant Star Razor",
    description:
      "While holding this sword, I can speak its command word to cause it to glow bright light in 20 ft, dim light in 20 ft. While glowing, it adds +1 to hit and damage and grants resistance to radiant damage. Once per dawn, I can cast faerie fire (DC 13).",
    weaponsAdd: ["Dormant Star Razor"],
    weaponOptions: {
      baseWeapon: "longsword",
      regExpSearch: /^(?=.*dormant)(?=.*star razor).*$/i,
      name: "Dormant Star Razor",
      source: [["TDCSR", 210]],
    },
    action: [
      ["bonus action", " (start/stop glow)"],
      ["action", " (faerie fire)"],
    ],
    calcChanges: {
      atkCalc: [
        function (fields, v, output) {
          if (
            /\bstar razor\b/i.test(v.WeaponTextName) &&
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
        spells: ["faerie fire"],
        selection: ["faerie fire"],
        firstCol: "checkbox",
      },
    ],
    extraLimitedFeatures: [
      {
        name: "Faerie Fire (Star Razor)",
        usages: 1,
        recovery: "dawn",
      },
    ],
  },
  awakened: {
    name: "Awakened Star Razor",
    description:
      "While holding this sword, I can speak its command word to cause it to glow bright light in 20 ft, dim light in 20 ft. While glowing, it adds +2 to hit and damage and grants resistance to radiant damage. Once per dawn per spell, I can cast (DC 15) faerie fire and see invisibility. See third page.",
    weaponsAdd: ["Awakened Star Razor"],
    weaponOptions: {
      baseWeapon: "longsword",
      regExpSearch: /^(?=.*awakened)(?=.*star razor).*$/i,
      name: "Awakened Star Razor",
      source: [["TDCSR", 210]],
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
        spells: ["faerie fire"],
        selection: ["faerie fire"],
        firstCol: "checkbox",
      },
      {
        name: "Once per dawn",
        spells: ["see invisibility"],
        selection: ["see invisibility"],
        firstCol: "checkbox",
      },
    ],
    extraLimitedFeatures: [
      {
        name: "Faerie Fire (Star Razor)",
        usages: 1,
        recovery: "dawn",
      },
      {
        name: "See Invisibility (Star Razor)",
        usages: 1,
        recovery: "dawn",
      },
    ],
    toNotesPage: [
      {
        name: "Features",
        page3notes: true,
        note: [
          "When hit in melee, I can use my reaction to deal 1d8 damage to the attacker",
        ],
      },
    ],
  },
  exalted: {
    name: "Exalted Star Razor",
    description:
      "While holding this sword, I can speak its command word to cause it to glow bright light in 20 ft, dim light in 20 ft. While glowing, it adds +3 to hit and damage and grants resistance to radiant damage. Once per dawn per spell, I can cast (DC 15) faerie fire, see invisibility, and fly. See third page.",
    weaponsAdd: ["Exalted Star Razor"],
    weaponOptions: {
      baseWeapon: "longsword",
      regExpSearch: /^(?=.*exalted)(?=.*star razor).*$/i,
      name: "Exalted Star Razor",
      source: [["TDCSR", 210]],
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
        spells: ["faerie fire"],
        selection: ["faerie fire"],
        firstCol: "checkbox",
      },
      {
        name: "Once per dawn",
        spells: ["see invisibility"],
        selection: ["see invisibility"],
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
        name: "Faerie Fire (Star Razor)",
        usages: 1,
        recovery: "dawn",
      },
      {
        name: "See Invisibility (Star Razor)",
        usages: 1,
        recovery: "dawn",
      },
      {
        name: "Fly (Star Razor)",
        usages: 1,
        recovery: "dawn",
      },
    ],
    toNotesPage: [
      {
        name: "Features",
        page3notes: true,
        note: [
          "When hit in melee, I can use my reaction to deal 1d12 damage to the attacker",
          "I can then teleport to a seen, unoccupied space within 15 ft",
        ],
      },
    ],
  },
};
