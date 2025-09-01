# p5.js Raycasting

![License](https://img.shields.io/badge/License-MIT-green.svg)
![Made with p5.js](https://img.shields.io/badge/Made%20with-p5.js-blue.svg)
[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://aaronwittchen.github.io/Raycasting/)

https://github.com/user-attachments/assets/2e298ba3-cf97-4d44-aecd-ab22dd22225c

## Description

A 2D raycasting and visibility demo built with p5.js. Move your mouse to control a "particle" that emits rays in all directions, simulating how light interacts with obstacles (walls). Press 'B' to toggle a rainbow visualization mode.

## Features

- Real-time 2D raycasting visualization
- Randomly generated walls and boundary walls
- Mouse-controlled particle (light source)
- Rainbow mode for rays (toggle with 'B')
- Clean, minimal UI
- Auto-reloads the page when the window is resized for a consistent experience

## Architecture

- **index.html**: Loads p5.js and all scripts.
- **sketch.js**: Main setup and draw loop, manages walls and particle.
- **boundary.js**: Defines wall segments.
- **ray.js**: Handles ray casting and intersection logic.
- **particle.js**: Manages the particle, its rays, and rendering.

## Quick Start

1. Clone or download this repository.
2. Open `index.html` in your browser.
3. Move your mouse to see the raycasting effect.
4. Press 'B' to toggle rainbow mode.
5. The page will automatically reload if you resize the window.

---

### Controls

- **Mouse**: Move the particle (light source)
- **B**: Toggle rainbow mode
