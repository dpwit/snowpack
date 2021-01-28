//snowpack-install/js/index.js
import { beachMountain } from './beach-mountain.js';

beachMountain();

import confetti from '../_snowpack/pkg/canvas-confetti.js';
confetti.create(document.getElementById('canvas'), {
  resize: true,
  useWorker: true,
 })({ particleCount: 200, spread: 200 });