#!/usr/bin/env node
import startGame from '../src/index.js';
import generatePrimePair from '../src/games/brain-prime.js';

startGame('Answer "yes" if given number is prime. Otherwise answer "no".', generatePrimePair);
