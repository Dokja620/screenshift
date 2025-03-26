# Screenshift 📱 💻 🖥️

<!-- [![npm version](https://img.shields.io/npm/v/screenshift.svg)](https://www.npmjs.com/package/screenshift) -->

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight, framework-agnostic SCSS utility that provides responsive breakpoints and a pure CSS debug overlay to visualize the current breakpoint.

## Problem Solved

`screenshift` makes it easier to manage responsive styles by:

1.  Providing configurable SCSS variables/maps for common breakpoints.
2.  Offering a simple, pure CSS debug tool (activated via an HTML attribute) that displays the current breakpoint name, dimensions, and label without requiring JavaScript.

## Installation

Using Bun:

```bash
bun add screenshift
```

Using npm:

```bash
npm install screenshift

```

Using pnpm:

```bash
pnpm add screenshift
```

## Usage

```scss
// In your main style file (e.g., main.scss, styles.scss, app.scss)

// Option 1: Import the combined core file
@import "screenshift/scss";

// or specify the node_modules path if necessary
// @import 'node_modules/screenshift/src/scss/screenshift-core';

// Option 2: Import parts separately (if needed)
// Imports variables and media query overrides
@import "screenshift/scss/responsive";
// Imports debug tool styling using variables
@import "screenshift/scss/core";
```
