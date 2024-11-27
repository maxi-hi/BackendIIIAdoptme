// mockingPets.js
function getRandomSpecie() {
  const species = ['dog', 'cat', 'bird'];
  return species[Math.floor(Math.random() * species.length)];
}

function getRandomName() {
  const names = ['Buddy', 'Max', 'Bella', 'Charlie', 'Lucy', 'Daisy'];
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomDate() {
  const start = new Date(2000, 0, 1);
  const end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export function generateMockingPets(count) {
  const pets = [];
  for (let i = 0; i < count; i++) {
    const pet = {
      name: getRandomName(),
      specie: getRandomSpecie(),
      birthDate: getRandomDate(),
      adopted: Math.random() < 0.5,
      owner: null, // Inicialmente sin dueño
      image: 'https://via.placeholder.com/150'
    };
    pets.push(pet);
  }
  return pets;
}
