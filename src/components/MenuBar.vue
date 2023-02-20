<template>
    <v-card class="overflow-auto mx-auto" min-width="1520" width="448">

        <v-toolbar color="primary">&nbsp;&nbsp;&nbsp;
            <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" delay="1000"
                colors="primary:#e83a30,secondary:#e8e230" style="width:32px;height:32px">
            </lord-icon>
            <v-toolbar-title>L-T-Management</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
    </v-card>
</template>
<script lang="ts">
export default {
    data: () => ({
        sticky: false,
    }),
}
</script>