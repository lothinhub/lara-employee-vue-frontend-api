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
                    <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" router-link to="/DashboardView" value="dashboard">
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-nature-people" title="Employee" router-link to="/EmployeeView" value="employee">
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-book-clock" title="Schedule" router-link to="/ScheduleView" value="schedule">
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-exit-run" title="Staff Leave" router-link to="/StaffLeaveView" value="staff-leave">
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-account-details" title="Account" router-link to="/AccountView" value="account">
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-swap-vertical-bold" title="Import-Export" router-link to="/ImportExportView" value="import-export">
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-calendar-text" title="Event" router-link to="/EventView" value="event">
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-account-group" title="Meeting" router-link to="/MeetingView" value="meeting">
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-account-lock" title="Management" router-link to="/ManagementView" value="management">
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-alpha-r-circle" title="Role" router-link to="/RoleView" value="role">
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-account" title="Users" router-link to="/UsersView" value="users">
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-database-cog" title="Database" router-link to="/DatabaseView" value="database">
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-key-chain" title="Setting" router-link to="/SettingView" value="setting">
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-export" title="Log Out" router-link to="/LogOutView" value="logout">
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-main style="height: 696px">
                <router-view></router-view>
            </v-main>
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