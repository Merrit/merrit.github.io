import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Merritt Codes',
  // tagline: '',
  favicon: 'icons/favicon.ico',

  // Set the production url of your site here
  url: 'https://merritt.codes/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'merrit', // Usually your GitHub org/user name.
  projectName: 'merrit.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages', // The branch your GitHub pages site is deployed to.
  trailingSlash: false, // Set to true if you are using GitHub pages.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
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
    colorMode: {
      respectPrefersColorScheme: true,
    },
    // Replace with your project's social card
    // image: '',
    navbar: {
      title: 'Merritt Codes',
      // logo: {
      //   alt: 'Merritt Codes',
      //   src: 'img/logo.svg',
      // },
      items: [
        {to: '/portfolio', label: 'Portfolio', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/contact', label: 'Contact', position: 'left'},
				{
					'aria-label': 'Mastodon',
					'className': 'navbar--mastodon-link',
					'href': 'https://mastodon.social/@merritt',
					'position': 'right',
				},
				{
					'aria-label': 'KDE',
					'className': 'navbar--kde-link',
					'href': 'https://invent.kde.org/merritt',
					'position': 'right',
				},
				{
					'aria-label': 'GitHub',
					'className': 'navbar--github-link',
					'href': 'https://github.com/Merrit',
					'position': 'right',
				},
			]
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              label: 'Mastodon',
              href: 'https://mastodon.social/@merritt'
            },
            {
              label: 'KDE',
              href: 'https://invent.kde.org/merritt'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Merrit'
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ['dart'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
