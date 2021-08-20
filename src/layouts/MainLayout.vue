<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Galaxy Games
        </q-toolbar-title>

        <div>Galaxy</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1"
    >
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
    {
        title: 'Players',
        icon: 'directions_run',
        link: '/players'
    },
    {
        title: 'Games',
        icon: 'sports_soccer',
        link: '/matches'
    }
]

export default {
    name: 'MainLayout',
    components: { EssentialLink },
    data () {
        return {
            leftDrawerOpen: false,
            essentialLinks: linksData
        }
    }
}
</script>
