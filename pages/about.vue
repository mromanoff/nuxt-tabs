<template>
  <section class="container-about">
    <div>
      <h1 class="title">
        about
      </h1>
      <nuxt-link to="/">Home page</nuxt-link>

      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <button type="button" @click="setTab('tab1')">Set First tab</button>
      <button type="button" @click="setTab('tab2')">Set Second tab</button>
      <button type="button" @click="setTab('tab3')">Set Third tab</button>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      setCurrentTab: 'ui/setCurrentTab'
    }),

    setTab(value) {
      this.setCurrentTab(value)
    }
  }
}
</script>

<style scoped>
.container-about {
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 32px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
