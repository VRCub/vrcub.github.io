import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// 这段代码运行在 Node.js 环境 - 不要在这里使用客户端代码（浏览器 API、JSX 等）

const config: Config = {
  title: 'VRCub Docs',
  tagline: 'VRCub服务器官方文档库',
  favicon: 'vrcub-logo/VRCub-black@svg.svg',
  onBrokenLinks: 'ignore', // 忽略无效链接检查（仅建议临时使用）
  // 在这里设置你网站的生产环境 URL
  url: 'https://vrcub.github.io',
  // 设置你网站提供服务的 /<baseUrl>/ 路径名
  // 对于 GitHub Pages 部署，通常是 '/<projectName>/'
  baseUrl: '/',

  // GitHub Pages 部署配置。
  // 如果你不使用 GitHub Pages，则不需要这些。
  organizationName: 'VRCub', // 通常是你的 GitHub 组织/用户名。
  projectName: 'vrcub.github.io', // 通常是你的仓库名称。

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // 即使你不使用国际化，也可以使用此字段设置
  // 有用的元数据，例如 html lang。例如，如果你的网站是中文的，你
  // 可能需要将 "en" 替换为 "zh-Hans"。
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  plugins: [
    [ require.resolve('docusaurus-lunr-search'), {
      languages: ['zh'] // language codes
    }],
    require.resolve('./src/plugins/docusaurus-plugin-no-doc'),
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // 请将其更改为你的仓库。
          // 删除此项以删除“编辑此页”链接。
          editUrl:
            'https://github.com/VRCub/vrcub.github.io/blob/main',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // 用于强制执行博客最佳实践的有用选项
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    announcementBar: {
      id: 'docs-edite-1',
      content:
        '本文档已经停止更新，如需获得更好的帮助，请前往 VRCub语雀 文档！',
      backgroundColor: '#0065d9',
      textColor: '#ffffff',
      isCloseable: false,
    },
    // 替换为你的项目的社交卡片
    image: 'vrcub-logo/VRCub-white@svg.svg',
    navbar: {
      //title: 'VRCub Docs',
      //logo: {
      //  alt: 'My Site Logo',
      //  src: 'vrcub-logo/VRCub-black@svg.svg',
      //},
      title: 'VRCub Docs',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'userSidebar',
          position: 'left',
          label: '📕玩家指南',
        },
        {
          type: 'docSidebar',
          sidebarId: 'adminSidebar',
          position: 'left',
          label: '💫管理/协议',
        },
        {to: '/server-status', label: '🛜服务状态', position: 'left'},
        {href: 'https://account.vrcub.net', label: 'Ⓜ️在线地图', position: 'left'},
        {href: 'https://flarum.vrcub.net', label: '🔥论坛', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'aboutSidebar',
          position: 'right',
          label: '🚸关于',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'VRCub.Docs Source Logo',
        src: '/img/vrcub.svg',
        href: 'https://vrcub.net',
      },
      links: [
        {
          title: '快速链接',
          items: [
            {
              label: '官网',
              href: 'https://vrcub.net',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '更新博客',
              to: '/blog',
            },
            {
              label: '基础教程',
              to: '/docs/category/安装游戏与vr设置',
            },
          ],
        },
        {
          title: '社交媒体',
          items: [
            {
              label: 'BiliBili [快去点关注！！]',
              href: 'https://space.bilibili.com/3546816610044329',
            },
            {
              label: 'QQ群',
              to: '/docs/About/QQ',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} VRCub. | 使用 Docusaurus 强力驱动.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
