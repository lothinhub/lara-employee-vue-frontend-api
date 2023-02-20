<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer color="primary" v-model="drawer" :rail="rail" permanent @click="rail = false">
                <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider" nav>
                    <template v-slot:append>
                        <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
                    </template>
                </v-list-item>
                <v-divider></v-divider>
                <v-list density="compact" nav>
                    <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard">
                        <router-link to="/"></router-link>
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-nature-people" title="Employee" value="employee">
                        <router-link to="/EmployeeView"></router-link>
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-book-clock" title="Schedule" value="schedule">
                        <router-link to="/"></router-link>
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-exit-run" title="Staff Leave" value="staff-leave">
                        <router-link to="/"></router-link>
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-account-details" title="Account" value="account">
                        <router-link to="/"></router-link>
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-swap-vertical-bold" title="Import-Export" value="import-export">
                        <router-link to="/"></router-link>
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-calendar-text" title="Event" value="event">
                        <router-link to="/"></router-link>
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-account-group" title="Meeting" value="meeting">
                        <router-link to="/"></router-link>
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-account-lock" title="Management" value="management">
                        <router-link to="/"></router-link>
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-alpha-r-circle" title="Role" value="role">
                        <router-link to="/"></router-link>
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-account" title="Users" value="users">
                        <router-link to="/"></router-link>
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-database-cog" title="Database" value="database">
                        <router-link to="/"></router-link>
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-key-chain" title="Setting" value="setting">
                        <router-link to="/"></router-link>
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-export" title="Log Out" value="logout">
                        <router-link to="/"></router-link>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-main style="height: 690px"></v-main>
        </v-layout>
    </v-card>
</template>
<script lang="js">
export default {
    data() {
        return {
            drawer: true,
            items: [
                { title: 'Dashboard', icon: 'mdi-home-city' },
                { title: 'Employee', icon: 'mdi-account' },
                { title: 'Schedule', icon: 'mdi-account-group-outline' },
                { title: 'Staff Leave', icon: 'mdi-home-city' },
                { title: 'Account', icon: 'mdi-account' },
                { title: 'Import-Export', icon: 'mdi-account-group-outline' },
                { title: 'Event', icon: 'mdi-home-city' },
                { title: 'Meeting', icon: 'mdi-account' },
                { title: 'Management', icon: 'mdi-account-group-outline' },
                { title: 'Role', icon: 'mdi-home-city' },
                { title: 'Users', icon: 'mdi-account' },
                { title: 'Database', icon: 'mdi-account-group-outline' },
                { title: 'Setting', icon: 'mdi-home-city' },
                { title: 'Log Out', icon: 'mdi-account' },
            ],
            rail: true,
        }
    },
}
</script>