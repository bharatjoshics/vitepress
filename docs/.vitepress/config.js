export default {
  title: 'VUE JS NOTES',
  description: 'Custom VUE JS Documentation',
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
        },
        {
          text: 'Conditional Content and Lists',
          items: [
            {text: 'Conditional Rendering', link: '/conditional-rendering'},
            {text: 'v-if', link: '/v-if-directive'},
            {text: 'v-else-if', link: '/v-else-if-directive'},
            {text: 'v-else', link: '/v-else-directive'},
            {text: 'Return Value from a Function', link: '/value-from-function'},
            {text: 'v-show', link: '/v-show-directive'},
            {text: 'List Rendering', link: '/list-rendering'},
            {text: 'v-for Directive', link: '/v-for-directive'},
            {text: 'Advance v-for Directive', link: '/advance-v-for-directive'},
            {text: 'Remove List Item', link: '/remove-list-item'},
            {text: 'Key Attribute', link: '/key-attribute'},
            {text: 'Project-1 (Goal Manager)', link: '/project1'}
          ]
        },
        {
          text: 'Refs and Bascis of Components',
          items: [
            {text: 'Refs', link: '/refs'},
            {text: 'Components', link: '/components'}
          ]
        },
        {
          text: 'Component Communication',
          items: [
            {text: 'Props (Parent to Child Communication)', link: '/props'},
            {text: 'Dynamic Props Value', link: '/dynamic-props'},
            {text: '$Emit (Child to Parent Communication', link: '/emit-method'},
            {text: 'Project-2 (Contact Directory)',link: '/project2'},
            {text: 'Provide and Inject', link: '/provide-inject'},
            {text: 'Global vs Local Component', link: '/global-local-component'},
            {text: 'Slots', link: '/slots'},
            {text: 'v-slot', link: '/v-slot'},
            {text: 'Dynamic Components', link: '/dynamic-components'},
            {text: 'Teleport', link: '/teleport'},
            {text: 'Routing', link: '/routing'},
            {text: 'HTTP Requests', link: '/http-requests'}
          ]
        },
        {
          text: 'State Management with VUEX',
          items: [
            {text: 'Intro', link: '/vuex-intro'},
            {text: 'Creating and Using Store', link: '/vuex-store'},
            {text: 'Example Project of VUEX', link: '/vuex-project'},
            {text: 'Project Explaination', link: '/project-explaination'},
            {text: 'Download Project', link: '/download-vuex-project'}
          ]
        }
      ]
    }
  }
