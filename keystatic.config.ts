import { config, fields, collection, singleton } from '@keystatic/core';

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
    blog: collection({
  label: 'Blog',
  slugField: 'title',
  path: '/src/content/blog/*',
  format: { contentField: 'content' },
  schema: {
    title: fields.slug({ name: { label: 'Title' } }),
    content: fields.markdoc({
      label: 'Content',
      options: {
        image: {
          directory: 'public/images/blog',
          publicPath: '/images/blog',
        },
      },
    }),
    featuredImage: fields.image({
      label: 'Featured Image',
      directory: 'public/images/blog',
      publicPath: '/images/blog',
    }),
    published: fields.date({
      label: 'Published Date',
      validation: { isRequired: true },
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
        website: fields.url({ label: 'Website' }),
      },
    }),

        lineCard: collection({
      label: 'Line Card',
      slugField: 'brand',
      path: '/src/content/line-card/*',
      format: { contentField: 'notes' },
      schema: {
        brand: fields.slug({ name: { label: 'Brand Name' } }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Networking', value: 'networking' },
            { label: 'Security', value: 'security' },
            { label: 'Audio/Video', value: 'av' },
            { label: 'Smart Home', value: 'smart-home' },
            { label: 'Cabling & Hardware', value: 'cabling' },
            { label: 'Other', value: 'other' },
          ],
          defaultValue: 'networking',
        }),
        logo: fields.image({
          label: 'Brand Logo',
          directory: 'public/images/line-card',
          publicPath: '/images/line-card',
        }),
        website: fields.url({ label: 'Brand Website' }),
        notes: fields.markdoc({
          label: 'Notes',
          options: {
            image: {
              directory: 'public/images/line-card',
              publicPath: '/images/line-card',
            },
          },
        }),
      },
    }),

  },
  singletons: {
    about: singleton({
      label: 'About',
      path: '/src/content/about/',
      schema: {
        title: fields.text({ label: 'Title' }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'public/images/about',
              publicPath: '/images/about',
            },
          },
        }),
      },
    }),
  },
});