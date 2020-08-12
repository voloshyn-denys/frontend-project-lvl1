#!/usr/bin/env node
import startGame from '../src/index.js';
import generateCalcPair from '../src/games/brain-calc.js';

startGame('What is the result of the expression?', generateCalcPair);
