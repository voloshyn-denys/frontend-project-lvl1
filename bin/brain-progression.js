#!/usr/bin/env node
import startGame from '../src/index.js';
import generateProgressionPair from '../src/games/brain-progression.js';

startGame('What number is missing in the progression?', generateProgressionPair);
