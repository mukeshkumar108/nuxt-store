// tailwind.config.ts
import type { Config } from 'tailwindcss';
import { tailwindConfig } from '@storefront-ui/vue/tailwind-config';
import vars from './src/vars';

export default <Config>{
  presets: [tailwindConfig],
  content: ['./**/*.vue', './node_modules/@storefront-ui/vue/**/*.{js,mjs}'],
  theme: {
    extend: {
      colors: vars.colors,
      fontFamily: vars.fontFamily,
      spacing: vars.spacing
    }
  }
};