#!/usr/bin/env node
import { launchGame, questionGame, correctAnswerGame, descriptionGame } from '../src/games/calculator.js';

launchGame(questionGame, correctAnswerGame, descriptionGame);
