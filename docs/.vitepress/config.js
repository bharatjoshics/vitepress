export default {
  base: '/vitepress/',
    themeConfig: {
      sidebar: [
        {
          text: 'Introduction',
          items: [
            { text: 'Vue JS', link: '/' },
            { text: 'Why Vue', link: '/why-vue' },
            { text: 'Utilizing / Using Vue', link: '/different-ways'}
          ]
        },
        {
          text: 'Getting Started',
          items: [
            {text: 'HTML Template', link: '/html-template'},
            {text: 'Install and Import Vue', link: '/install-import-vue'},
            {text: 'First Vue Page', link: '/first-vue-page'}
          ]
        },
        {
          text: 'Basics Of Vue JS',
          items: [
            {text: 'Interpolation', link: '/interpolation'},
            {text: 'Data Binding', link: '/data-binding'},
            {text: 'One-way Binding', link: '/one-way-binding'},
            {text: 'Methods', link: '/methods'},
            {text: 'Data Inside Vue App', link: '/data-inside-vue-app'},
            {text: 'Outputting Raw HTML Content with v-html', link: '/outputting-raw-html-content'},
            {text: 'Event Binding', link: '/event-binding'},
            {text: 'Event Arguments', link: '/event-arguments'},
            {text: 'Event Modifiers', link: '/event-modifiers'},
            {text: 'Locking Content with v-once', link: '/locking-content'},
            {text: 'Two-Way Binding', link: '/two-way-binding'},
            {text: 'Computed Properties', link: '/computed-properties'},
            {text: 'Watchers', link: '/watchers'},
            {text: 'Methods vs Computed vs Watch', link: '/methods-vs-computed-vs-watch'}
          ]
        }
      ]
    }
  }