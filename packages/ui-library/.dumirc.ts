import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  apiParser: {},
  resolve: {
    atomDirs: [{ type: 'component', dir: 'src/components' }],
    entryFile: './src/index.ts',
  },
  themeConfig: {
    name: 'AIX-Library',
    logo: 'favicon.svg',
    footer: 'AIXTrail | Copyright © 2025-present',
    nav: [{ title: '组件', link: '/components' }],
    prefersColor: {
      default: 'auto',
      switch: true,
    },
  },
});
