<template>
  <q-item
    clickable
    :to="link"
  >
    <q-item-section avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>
        {{ title }}
      </q-item-label>

      <q-item-label
        caption
        lines="1"
      >
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',

  props: {
    title: {
      type: String,
      default: ''
    },
    caption: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: '/'
    }
  }
})
</script>
