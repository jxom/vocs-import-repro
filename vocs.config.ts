import { defineConfig } from 'vocs'

import { foo } from './mod.ts'

foo()

export default defineConfig({
  title: 'Docs',
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Example',
      link: '/example',
    },
  ],
})
