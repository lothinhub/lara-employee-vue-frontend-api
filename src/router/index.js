import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from '../views/pages/HomeView.vue'
import DashboardView from "../views/pages/DashboardView.vue";
import AccountView from "../views/pages/AccountView.vue";
import DatabaseView from "../views/pages/DatabaseView.vue";
import EmployeeView from "../views/pages/EmployeeView.vue";
import EventView from "../views/pages/EventView.vue";
import ImportExportView from "../views/pages/ImportExportView.vue";
import LogOutView from "../views/pages/LogOutView.vue";
import ManagementView from "../views/pages/ManagementView.vue";
import MeetingView from "../views/pages/MeetingView";
import RoleView from "../views/pages/RoleView.vue";
import ScheduleView from "../views/pages/ScheduleView.vue";
import SettingView from "../views/pages/SettingView.vue";
import StaffLeaveView from "../views/pages/StaffLeaveView.vue";

const routes = [
  {
    path: "/",
    name: "DashboardView",
    component: DashboardView,
    children: [
      {
        path: "/DashboardView",
        name: "DashboardView",
        component: DashboardView,
      }
    ]
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
    component: () => import("../views/pages/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
