export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60f95440b6e953c14ac1a3d6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-e7md3jde',
                  apiId: '014aaa51-0229-4b77-9ae8-3dbef3491096'
                },
                {
                  buildHookId: '60f95440e315c8ce9d47c2a0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-in4t5jhs',
                  apiId: 'd25f1e5f-e538-4598-8cf6-d4c4d7dd31b6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/etewiah/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-in4t5jhs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
