import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import vButton from './Button.vue';

storiesOf('GoodsCategory', module)
  .add('default', () => ({
    components: { vButton },
    template: '<v-button>default</v-button>',
  }))
  .add('primary', () => ({
    components: { vButton },
    template: '<v-button type="primary">primary</v-button>',
  }))
  .add('danger', () => ({
    components: { vButton },
    template: '<v-button type="danger">danger</v-button>',
  }));