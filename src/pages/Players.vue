<template>
    <q-page class="full-width q-pa-md">
        <q-banner inline-actions>
            <div class="text-h6 text-accent">Players</div>
            <template v-slot:action>
                <q-btn color="primary" icon="add" label="Add" :to="{ name: $Consts.routes.player, params: { id: 'new' } }" />
            </template>
        </q-banner>
        <q-list bordered>
            <q-item v-for="player in players" :key="player.id" clickable v-ripple :to="{ name: $Consts.routes.player, params: { id: player.id } }">
                <q-item-section>{{ player.name }}</q-item-section>
            </q-item>
        </q-list>
    </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import PlayersManager from 'src/managers/PlayersManager'

export default defineComponent({
    name: 'players',
    setup () {
        const players = ref(PlayersManager.getPlayers())

        return {
            players
        }
    }
})
</script>
