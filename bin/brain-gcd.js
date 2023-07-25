#!/usr/bin/env node

import { launchGame, questionGame, correctAnswerGame, descriptionGame } from '../src/games/gcd.js';

launchGame(questionGame, correctAnswerGame, descriptionGame);
