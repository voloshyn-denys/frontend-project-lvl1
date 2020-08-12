#!/usr/bin/env node
import startGame from '../src/index.js';
import generateGcdPair from '../src/games/brain-gcd.js';

startGame('Find the greatest common divisor of given numbers.', generateGcdPair);
