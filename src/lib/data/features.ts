import type { Feature } from "$lib/utils/types";

export default [
  {
    name: 'Project #1',
    description:
      'This is where a description of the project will go. Eventually I need to add a way to link to the project page as well as the github repo, if open source.',
    image: 'images/features/markdown.jpg',
    tags: [{ label: 'Add Tags' }],
    githubLink: 'https://github.com/ben-ruhlig',
    projectLink: './project-1'
  },
  {
    name: 'Project #2',
    description:
      'You can easily theme the entire website by changing just a few colors in the _themes.scss file.',
    image: 'images/features/themeable.jpg',
    tags: [{ label: 'Primary Color' }, { label: 'Secondary Color', color: 'secondary' }]
  },
  {
    name: 'Project #3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque vitae tempus quam pellentesque nec nam aliquam sem et.',
    image: 'images/features/extensible.jpg',
  },
  {
    name: 'Project #4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus metus aliquam eleifend mi.',
    image: 'images/features/optimized.jpg',
    tags: [{ label: 'Powered by Image Transmutation' }]
  },
  {
    name: 'Project #5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'images/features/light-dark.jpg',
  },
  {
    name: 'Project #6',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'images/features/open-source.jpg'
  },
] as Feature[];