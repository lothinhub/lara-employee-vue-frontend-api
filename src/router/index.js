import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'
import DashboardView from "../views/DashboardView.vue";
import AccountView from "../views/AccountView.vue";
import DatabaseView from "../views/DatabaseView.vue";
import EmployeeView from "../views/EmployeeView.vue";
import EventView from "../views/EventView.vue";
import ImportExportView from "../views/ImportExportView.vue";
import LogOutView from "../views/LogOutView.vue";
import ManagementView from "../views/ManagementView.vue";
import MeetingView from "../views/MeetingView";
import RoleView from "../views/RoleView.vue";
import ScheduleView from "../views/ScheduleView.vue";
import SettingView from "../views/SettingView.vue";
import StaffLeaveView from "../views/StaffLeaveView.vue";

const routes = [
  {
    path: "/",
    name: "dashboardView",
    component: DashboardView,
  },
  {
    path: "/AccountView",
    name: "AccountView",
    component: AccountView,
  },
  {
    path: "/DatabaseView",
    name: "DatabaseView",
    component: DatabaseView,
  },
  {
    path: "/EmployeeView",
    name: "EmployeeView",
    component: EmployeeView,
  },
  {
    path: "/EventView",
    name: "EventView",
    component: EventView,
  },
  {
    path: "/ImportExportView",
    name: "ImportExportView",
    component: ImportExportView,
  },
  {
    path: "/LogOutView",
    name: "LogOutView",
    component: LogOutView,
  },
  {
    path: "/ManagementView",
    name: "ManagementView",
    component: ManagementView,
  },
  {
    path: "/MeetingView",
    name: "MeetingView",
    component: MeetingView,
  },
  {
    path: "/RoleView",
    name: "RoleView",
    component: RoleView,
  },
  {
    path: "/ScheduleView",
    name: "ScheduleView",
    component: ScheduleView,
  },
  {
    path: "/SettingView",
    name: "SettingView",
    component: SettingView,
  },
  {
    path: "/StaffLeaveView",
    name: "StaffLeaveView",
    component: StaffLeaveView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
