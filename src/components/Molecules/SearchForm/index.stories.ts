/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import VueInfoAddon, { withInfo } from 'storybook-addon-vue-info'
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs/vue'
import { withNotes } from '@storybook/addon-notes'

// component
import SearchForm from '@/components/Molecules/SearchForm'

// stories - Usage
storiesOf('Molecules/SearchForm', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add(
    'Usage',
    withNotes(
      `
      これはボタンのコンポーネントです。
      クリック時に何らかの処理を開始する機能をユーザーに提供する最小コンポーネントです。
    `
    )(() => {
      const name = text('name', 'keyword')
      const value = text('value', '')
      const placeholder = text('placeholder', 'キーワードから探す')
      return {
        components: { SearchForm },
        methods: { 
          changeAction: action('input-change'),
          submitAction: action('input-submit')
        },
        template: `<SearchForm value="${value}" name="${name}" placeholder="${placeholder}" :onChange="changeAction" :onSubmit="submitAction" />`,
        propsDescription: {
          value: 'v-model属性',
          name: 'name属性',
          placeholder: 'placeholder属性',
          onChange: 'value値が変わった時に発生するイベント',
          onSubmit: 'フォームフォーカス中にEnterをクリックした時発生するイベント',
        }
      }
    })
  )
