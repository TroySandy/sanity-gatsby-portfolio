export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '60b1a92b9956e29854857fd5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-96gt4tkg',
                  apiId: 'd85de646-969d-4ffc-befa-4f066feb83b4'
                },
                {
                  buildHookId: '60b1a92ba84d5e9e8d27d1f1',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-dzwtcxq2',
                  apiId: 'e4ecf481-99d6-4853-97fb-b8b0676d0b70'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TroySandy/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-dzwtcxq2.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
