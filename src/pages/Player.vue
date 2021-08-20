<template>
    <q-page class="full-width q-pa-md">
        <q-form>
            <q-input
                label="Name"
                v-model="player.name"
                filled
                stack-label />
            <div class="q-mt-md">
                <span class="text-accent">Positions</span>
                <div style="width:500px; margin: auto;">
                    <div class="col">
                        <q-badge class="q-mt-md" color="primary">Forward</q-badge>
                        <div class="row justify-evenly">
                            <span />
                            <q-checkbox label="Center" v-model="player.positions.forward" />
                            <span />
                        </div>
                    </div>
                    <div class="col">
                        <q-badge class="q-mt-md" color="primary">Middle</q-badge>
                        <div class="row justify-evenly">
                            <q-checkbox label="Left" v-model="player.positions.middleLeft" />
                            <q-checkbox label="Center" v-model="player.positions.middleCenter" />
                            <q-checkbox label="Right" v-model="player.positions.middleRight" />
                        </div>
                    </div>
                    <div class="col">
                        <q-badge class="q-mt-md" color="primary">Defense</q-badge>
                        <div class="row justify-evenly">
                            <q-checkbox label="Left" v-model="player.positions.defenseLeft" />
                            <q-checkbox label="Right" v-model="player.positions.defenseRight" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-end">
                <q-btn color="primary" label="Cancel" icon="arrow_back_ios" @click="onCancel" />
                <q-btn color="primary" label="Save" icon="save" @click="onSave" class="q-ml-md" />
            </div>
        </q-form>
    </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import PlayersManager from 'src/managers/PlayersManager'
import { useRouter } from 'vue-router'
import Consts from 'src/util/constants'

export default defineComponent({
    name: 'player',
    props: ['id'],
    setup (props) {
        const router = useRouter()
        const player = ref(null)

        if (props.id !== 'new') {
            player.value = PlayersManager.getPlayerById(props.id)
        }

        if (!player.value) {
            player.value = PlayersManager.createPlayer()
        }

        return {
            player,
            onSave: () => {
                if (props.id === 'new') {
                    PlayersManager.addPlayer(player.value)
                } else {
                    PlayersManager.updatePlayer(player.value)
                }
                router.push({ name: Consts.routes.players })
            },
            onCancel: () => router.push({ name: Consts.routes.players })
        }
    }
})
</script>
