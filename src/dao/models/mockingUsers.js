// mockingUsers.js
import bcrypt from 'bcrypt';

const roles = ['user', 'admin'];

function getRandomRole() {
  return roles[Math.floor(Math.random() * roles.length)];
}

function getRandomName() {
  const names = ['John', 'Jane', 'Alice', 'Bob', 'Charlie', 'David'];
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomEmail() {
  const domains = ['example.com', 'test.com', 'mock.com'];
  return `${getRandomName().toLowerCase()}@${domains[Math.floor(Math.random() * domains.length)]}`;
}

export function generateMockingUsers(count) {
  const users = [];
  for (let i = 0; i < count; i++) {
    const user = {
      first_name: getRandomName(),
      last_name: getRandomName(),
      email: getRandomEmail(),
      password: bcrypt.hashSync('coder123', 10),
      role: getRandomRole(),
      pets: []
    };
    users.push(user);
  }
  return users;
}
