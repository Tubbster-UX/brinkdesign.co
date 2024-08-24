import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'Tubbster-UX',
      name: 'brinkdesign.co',
    },
  },
  collections: {
    project: collection({
      label: 'Project',
      slugField: 'title',
      path: '/src/content/project/*',
      format: { contentField: 'description' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.markdoc({
          label: 'Description',
          options: {
            image: {
              directory: 'public/images/projects',
              publicPath: '/images/projects',
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
    testimonials: collection({
      label: 'Testimonials',
      slugField: 'author',
      path: '/src/content/testimonials/*',
      format: { contentField: 'content' },
      schema: {
        author: fields.slug({ name: { label: 'Author' } }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'public/images/testimonials',
              publicPath: '/images/testimonials',
            },
          },
        }),
        authorImage: fields.image({ label: 'Author Image', directory: 'public/images/testimonials', publicPath: '/images/testimonials' }),
        published: fields.date({
          label: 'Published Date',
          validation: {
            isRequired: true
          },
          defaultValue: new Date().toISOString().split('T')[0] // Set default to current date in YYYY-MM-DD format
        }),
        rating: fields.number({
          label: 'Rating',
          validation: {
            isRequired: true,
            min: 1,
            max: 5
          }
        }),
      },
    }),
  },
});