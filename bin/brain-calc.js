#!/usr/bin/env node

import { launchGame, getQuestionGame, getCorrectAnswerGame, getDescriptionGame } from '../src/games/calculator.js';

launchGame(getQuestionGame, getCorrectAnswerGame, getDescriptionGame);
