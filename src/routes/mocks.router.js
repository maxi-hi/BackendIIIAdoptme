import express from 'express';
import { generateMockingPets } from '../mockingPets.js';
import { generateMockingUsers } from '../mockingUsers.js';
import UserModel from '../models/User.js';
import PetModel from '../models/Pet.js';

const router = express.Router();

// Mover el endpoint /mockingpets al nuevo router
router.get('/mockingpets', (req, res) => {
  const pets = generateMockingPets(50); // Generar 50 mascotas de prueba
  res.json(pets);
});

// Endpoint GET /mockingusers
router.get('/mockingusers', (req, res) => {
  const users = generateMockingUsers(50);
  res.json(users);
});

// Endpoint POST /generateData
router.post('/generateData', async (req, res) => {
  const { users, pets } = req.body;
  const generatedUsers = generateMockingUsers(users);
  const generatedPets = generateMockingPets(pets);

  // Insertar los datos en la base de datos
  const insertedUsers = await UserModel.insertMany(generatedUsers);
  const userIds = insertedUsers.map(user => user._id);

  // Asignar dueños aleatorios a las mascotas
  generatedPets.forEach(pet => {
    pet.owner = userIds[Math.floor(Math.random() * userIds.length)];
  });

  const insertedPets = await PetModel.insertMany(generatedPets);

  res.json({ users: insertedUsers, pets: insertedPets });
});

// Endpoint GET para consultar usuarios
router.get('/users', async (req, res) => {
  const users = await UserModel.find().populate('pets._id');
  res.json(users);
});

// Endpoint GET para consultar mascotas
router.get('/pets', async (req, res) => {
  const pets = await PetModel.find().populate('owner');
  res.json(pets);
});

export default router;
