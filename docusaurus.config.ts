import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import tailwindPlugin from "./plugins/tailwind-config.cjs"; // add this

const config: Config = {
  title: 'Electrium Mobility',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  //url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  //baseUrl: '/',
  
  // ...
  url: 'https://electriummobility.com', // Your website URL
  baseUrl: '/',
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
            'https://github.com/Electrium-Mobility/electrium-w24website/tree/main/',
        },
        blog: false,

        // UNCOMMENT BELOW IF WE EVER WANT TO START A BLOG
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/Electrium-Mobility/electrium-w24website/tree/main/',
        // },
        theme: {
          customCss: './src/css/custom.css',
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
        alt: 'Electrium Mobility Logo',
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
        {to: '/sponsors', label: 'Sponsors', position: 'left'},
        {to: '/contact', label: 'Contact', position: 'left'},
        // UNCOMMENT TO SHOW BLOG
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://imodules.uwaterloo.ca/s/1802/21/form.aspx?sid=1802&gid=2&pgid=1266&cid=3030&bledit=1&dids=296',
          label: 'Donate',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Pages',
          items: [
            {
              label: 'About',
              to: '/about',
            },
            {
              label: 'Team',
              to: '/team',
            },
            {
              label: ' Contact',
              to: '/contact',
            }
          ],
        },
        {
          title: 'Recent Projects',
          items: [
            {
              label: 'Electric Bike',
              to: '/docs/W2024-projects/project1_2023',
            },
            {
              label: 'Electric Skateboard',
              to: '/docs/W2024-projects/project2_2023',
            },
            {
              label: 'OneWheel',
              to: '/docs/W2024-projects/project3_2023',
            },
          ],
        },
        {
          title: 'Get Involved',
          items: [
            {
              label: 'Join Our Team',
              to: '/join-our-team',
            },
            {
              label: 'Become A Sponsor',
              to: '/sponsors',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Support Us',
              to: 'https://imodules.uwaterloo.ca/s/1802/21/form.aspx?sid=1802&gid=2&pgid=1266&cid=3030&bledit=1&dids=296',
            },
            {
              label: 'YouTube',
              to: 'https://www.youtube.com/@electriummobility',
            },
            {
              label: 'Instagram',
              to: 'https://www.instagram.com/electriummobility/',
            },
            {
              label: 'Discord',
              to: 'https://discord.com/invite/jggFVza4XR',
            },
            {
              label: 'Linkedin',
              to: 'https://www.linkedin.com/company/electrium-mobility/',
            },
            {
              label: 'Email',
              to: 'mailto:electriummobility@gmail.com',
            },
          ],
        },
      ],
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo-dark-mode.png',
        href: '/',
        height: 50,
      },
      copyright: `Copyright © ${new Date().getFullYear()} Electrium Mobility. All Rights Reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
