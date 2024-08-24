import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    project: collection({
      label: 'Project',
      slugField: 'title',
      path: 'src/content/project/*',
      format: { contentField: 'description' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.markdoc({ label: 'Description',
          options: {
            image: {
              directory: 'public/images/projects', // Directory to store images
              publicPath: '/images/projects', // Public path to access images
            },
          },
        }),
        image: fields.image({ label: 'Image', directory: 'public/images/projects', publicPath: '/images/projects' }),
        published: fields.date({
          label: 'Published Date', validation: {
            isRequired: true
          }
        }),
      },
    }),
  },
});