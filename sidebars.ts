import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  projectSidebar: [
    'W2024-projects/project1_2023',
    'W2024-projects/project2_2023',
    'W2024-projects/project3_2023',
    {
      type: 'category',
      label: '2023 Projects',
      collapsed: true,
      items: [
        'projects/project1_2023',
        'projects/project2_2023',
        'projects/project3_2023'
      ],
    },
    //UNCOMMENT TO SEE TUTORIALS + TIPS
    // {
    //   type: 'category',
    //   label: 'Tutorial Basics',
    //   items: [
    //     'tutorial-basics/congratulations',
    //     'tutorial-basics/create-a-blog-post',
    //     'tutorial-basics/create-a-document',
    //     'tutorial-basics/create-a-page',
    //     'tutorial-basics/deploy-your-site',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: 'Tutorial Extras',
    //   items: [
    //     'tutorial-extras/manage-docs-versions',
    //     'tutorial-extras/translate-your-site',
    //     'tutorial-extras/intro',
    //   ],
    // },
  ],
   
};

export default sidebars;
