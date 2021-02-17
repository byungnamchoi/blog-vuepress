<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <customCursor />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import Cursor from '@theme/components/Cursor.vue'
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

export default {
  components: {
    'customCursor': Cursor,
    PageEdit,
    PageNav
  },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

</style>
