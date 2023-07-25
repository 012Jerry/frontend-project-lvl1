#!/usr/bin/env node

import { launchGame, getQuestionGame, getCorrectAnswerGame, getDescriptionGame } from '../src/games/gcd.js';

launchGame(getQuestionGame, getCorrectAnswerGame, getDescriptionGame);
