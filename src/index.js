#! /usr/bin/env node
import { rmSync, mkdirSync, writeFileSync, cpSync } from 'node:fs';
import CleanCSS from 'clean-css';

/* ************************************************************************************************
 *                                            HELPERS                                             *
 ************************************************************************************************ */

/**
 * Removes the distribution directory and creates it again in order to guarantee a clean build.
 */
const __cleanDist = () => {
  rmSync('dist', { recursive: true, force: true });
  mkdirSync('dist');
};

/**
 * Minifies and saves the font declaration stylesheet.
 */
const __minifyFontDeclaration = () => {
  const file = new CleanCSS().minify(['src/index.css']);
  writeFileSync('dist/index.css', file.styles, { encoding: 'utf-8' });
};

/**
 * Copies the raw font assets from the source into the distribution directory.
 */
const __copyFontAssets = () => cpSync('src/woff2', 'dist/woff2', { recursive: true });

/* ************************************************************************************************
 *                                           EXECUTION                                            *
 ************************************************************************************************ */

(() => {
  // clean the distribution directory
  __cleanDist();

  // minify the font declaration
  __minifyFontDeclaration();

  // finally, copy the font assets
  __copyFontAssets();
})();
