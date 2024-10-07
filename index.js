const {autos, animales} = require('./datos');
const LD = require('lodash');

// Usar uniq() para obtener elementos únicos
const autosUnicos = LD.uniq(autos.map(auto => auto.marca));

// Usar find() para obtener animales de tipo salvaje
const animalesSalvajes = LD.filter(animales, { tipo: 'salvaje' });

// Mostrar los resultados por consola
console.log('Autos únicos:', autosUnicos);
console.log('Animales salvajes:', animalesSalvajes);