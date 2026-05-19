import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-antd/dist/defineThemeConfig';

export default defineConfig({
  outputPath: 'docs-dist',
  apiParser: {},
  resolve: {
    atomDirs: [{ type: 'component', dir: 'src/components' }],
    entryFile: './src/index.ts',
  },
  themeConfig: defineThemeConfig({
    title: 'AIX Library',
    name: 'AIX Library',
    logo: 'favicon.svg',
    description: 'AIXTrail UI组件库',
    footer: 'AIXTrail | Copyright © 2025-present',
    github: 'https://github.com/Ryna755467/AIXTrail',
    nav: [
      { title: '设计', link: '/design' },
      { title: '组件', link: '/components' },
    ],
    loading: {
      skeleton: ['/components'],
    },
    prefersColor: {
      default: 'auto',
      switch: true,
    },
    docVersions: {
      '1.0.0': '',
    },
    sidebarGroupModePath: true,
    actions: [
      { type: 'primary', text: '开始使用', link: '/components' },
      { type: 'default', text: '设计规范', link: '/design' },
    ],
  }),
});
