// rpg.test.js
const { createCharacter, attack, levelUp, addItem, removeItem } = require('./rpg');

test('Character creation', () => {
    const warrior = createCharacter('Aragorn', 'Warrior', { strength: 10, intelligence: 2, defense: 8, health: 20 });
    expect(warrior.name).toBe('Aragorn');
    expect(warrior.type).toBe('Warrior');
    expect(warrior.attributes.strength).toBe(10);
});

test('Attack function', () => {
    const warrior = createCharacter('Aragorn', 'Warrior', { strength: 10, intelligence: 2, defense: 8, health: 20 });
    const wizard = createCharacter('Gandalf', 'Wizard', { strength: 2, intelligence: 10, defense: 3, health: 20 });
    const updatedWizard = attack(warrior, wizard);
    expect(updatedWizard.attributes.health).toBeLessThan(20);
});

test('Level up function', () => {
    const warrior = createCharacter('Aragorn', 'Warrior', { strength: 10, intelligence: 2, defense: 8, health: 20 });
    const leveledUpWarrior = levelUp(warrior);
    expect(leveledUpWarrior.level).toBe(2);
    expect(leveledUpWarrior.attributes.strength).toBe(12);
});

test('Add item to inventory', () => {
    const warrior = createCharacter('Aragorn', 'Warrior', { strength: 10, intelligence: 2, defense: 8, health: 20 });
    const sword = { name: 'Sword', boost: { strength: 5 } };
    const warriorWithSword = addItem(warrior, sword);
    expect(warriorWithSword.inventory).toContainEqual(sword);
});

test('Remove item from inventory', () => {
    const warrior = createCharacter('Aragorn', 'Warrior', { strength: 10, intelligence: 2, defense: 8, health: 20 });
    const sword = { name: 'Sword', boost: { strength: 5 } };
    const warriorWithSword = addItem(warrior, sword);
    const warriorWithoutSword = removeItem(warriorWithSword, 'Sword');
    expect(warriorWithoutSword.inventory).not.toContainEqual(sword);
});
