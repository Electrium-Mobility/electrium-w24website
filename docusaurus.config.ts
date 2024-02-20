import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import tailwindPlugin from "./plugins/tailwind-config.cjs"; // add this

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  //url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  //baseUrl: '/',
  
  // ...
  url: 'https://electriummobility.github.io', // Your website URL
  baseUrl: '/electrium-w24website',
  projectName: 'electrium-w24website',
  organizationName: 'electrium-mobility',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  // ...

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //organizationName: 'facebook', // Usually your GitHub org/user name.
  //projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [tailwindPlugin], // update this

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,

        // UNCOMMENT BELOW IF WE EVER WANT TO START A BLOG
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: './src/css/custom.css',
          // customCss: [require.resolve("./src/css/custom.css"), require.resolve("./src/css/tailwind.css")],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      // Customize the colors for light and dark modes
      respectPrefersColorScheme: false,
    },

    // Replace with your project's social card
    //image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo-light-mode.png', // Light mode logo source
        srcDark: 'img/logo-dark-mode.png',
      },
      items: [
        {to: '/about', label: 'About', position: 'left'},
        {to: '/team', label: 'Team', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'projectSidebar',
          position: 'left',
          label: 'Projects',
        },
        {to: '/contact', label: 'Contact', position: 'left'},
        // UNCOMMENT TO SHOW BLOG
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/W2024-projects/project1_2023',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/about',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
