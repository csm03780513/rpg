// rpg.js

// Character factory function
const createCharacter = (name, type, attributes) => ({
    name,
    type,
    attributes,
    level: 1,
    inventory: []
});

// Function to simulate an attack
const attack = (attacker, defender) => {
    const damage = Math.max(attacker.attributes.strength - defender.attributes.defense, 0);
    return {
        ...defender,
        attributes: {
            ...defender.attributes,
            health: Math.max(defender.attributes.health - damage, 0)
        }
    };
};

// Function to level up a character
const levelUp = (character) => ({
    ...character,
    level: character.level + 1,
    attributes: {
        ...character.attributes,
        strength: character.attributes.strength + 2,
        intelligence: character.attributes.intelligence + 2
    }
});

// Function to add an item to a character's inventory
const addItem = (character, item) => ({
    ...character,
    inventory: [...character.inventory, item]
});

// Function to remove an item from a character's inventory
const removeItem = (character, itemName) => ({
    ...character,
    inventory: character.inventory.filter(item => item.name !== itemName)
});

module.exports = { createCharacter, attack, levelUp, addItem, removeItem };
