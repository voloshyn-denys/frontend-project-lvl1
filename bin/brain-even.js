#!/usr/bin/env node
import startGame from '../src/index.js';
import generateEvenPair from '../src/games/brain-even.js';

startGame('Answer "yes" if the number is even, otherwise answer "no".', generateEvenPair);
