/**
 * screenshift: SCSS utility for responsive containers and debugging.
 *
 * This package primarily provides SCSS files for styling.
 * This JS/TS entry point is included for standard package structure and
 * potential future JS exports or type definitions.
 *
 * Import SCSS via: @import 'screenshift/scss';
 */

// You can optionally export constants if useful for JS users:

// Example: Exporting default breakpoints as a JS object
// import defaultBreakpointsMap from '../src/scss/_screenshift-responsive.scss'; // <-- This won't work directly with SCSS!
// Need to either duplicate definition or read from JSON/generate JS.

// Simplest approach for now: Export nothing or basic info.
export const screenshiftVersion = "[VI]{version}[/VI]"; // Placeholder for version injection if using build tool

// Export an empty object or type if absolutely needed by some toolchain
// export type ScreenshiftConfig = { /* future config options */ };
// export default {}; // Or export default {} if required

console.log("screenshift SCSS library loaded (JS entry point)"); // Optional runtime check
