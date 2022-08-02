RaceList["fey'ri"] = {
		regExpSearch : /^((?=.*fey'ri)|(?=.*planetouched)(?=.*(hell|abyss|fiend|devil|asmodeus))).*$/i,
		name : "Fey'Ri",
		source : ["GMBDB"],
		plural : "Fey'Ri",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Elvish", "Infernal"],
		vision : [["Darkvision", 60]],
    savetxt : {
			text : ["Magic can't put me to sleep"],
			adv_vs : ["charmed"],
		dmgres : ["Fire"],
		age : " reach adulthood by 100 years and live around 1000 years",
		height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
		weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
		heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
		weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
		scores : [0, 1, 0, 0, 0, 2],
		trait : "Fey'Ri (+1 Dexterity, +2 Charisma)\n\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.\nDaemonfey Legacy:\n   I know the Thaumaturgy cantrip.\n   At 3rd level, I can cast Faerie Fire once per long rest.\n   At 5th level, I can also cast Crown of Madness once per long rest.\n   Charisma is my spellcasting ability for these spells.",
		spellcastingAbility : 6,
		spellcastingBonus : {
			name : "Daemonfey Legacy (level 1)",
			spells : ["thaumaturgy"],
			selection : ["thaumaturgy"],
			firstCol : 'atwill'
		},
		features : {
			"hellish rebuke" : {
				name : "Daemonfey Legacy (level 3)",
				limfeaname : "Hellish Rebuke (3d10)",
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Daemonfey Legacy (level 3)",
					spells : ["faerie fire"],
					selection : ["faerie fire"],
					firstCol : "oncelr"
				},
				spellChanges : {
					"faerie fire" : {
						description : "Any creature in a 20-foot cube must make a Dexterity save or be outlined in green light. Attack rolls made against an affected creature has advantage.",
						changes : "Using Daemonfey Legacy, I cast Faerie Fire once per long rest with out using a spell slot."
					}
				}
			},
			"crown of madness" : {
			name : "Daemonfey Legacy (level 5)",
			limfeaname : "Crown of Madness",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Daemonfey Legacy (5)",
				spells : ["crown of madness"],
				selection : ["crown of madness"],
				firstCol : 'oncelr'
				}
			}
		}
	}
};
