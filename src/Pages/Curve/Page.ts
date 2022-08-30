import { Page } from "@/Pages/Page";

import CurveGauges from "@/Pages/Curve/Gauges/Gauges.vue";
import CurvePrices from "@/Pages/Curve/Prices/Prices.vue";
import CurveReserves from "@/Pages/Curve/Reserves/Reserves.vue";
import CurveUtilization from "@/Pages/Curve/Utilization/Utilization.vue";
import CurveVeFunder from "@/Pages/Curve/VeFunder/VeFunder.vue";

export const pageCurve: Page = {
  title: "Curve",
  titleRoute: "/curve",
  planeX: 105,
  routes: [
    { path: "/curve", redirect: { name: "curvegauges" } },
    {
      path: "/curve/gauges/:gauge?",
      name: "curvegauges",
      component: CurveGauges,
    },
    {
      path: "/curve/prices/:pool?",
      name: "curvecandles",
      component: CurvePrices,
    },
    {
      path: "/curve/reserves/:pool?",
      name: "curvereserves",
      component: CurveReserves,
    },
    { path: "/curve/utilization/", component: CurveUtilization },
    { path: "/curve/vefunder/", component: CurveVeFunder },
  ],
  menuHeader: "headers/curve.png",
  menuItems: [
    {
      to: "/curve/gauges",
      icon: "fas fa-chart-pie",
      label: "Gauges",
    },
    {
      to: "/curve/prices",
      icon: "fas fa-chart-line",
      label: "Prices",
    },
    {
      to: "/curve/reserves",
      icon: "fas fa-balance-scale",
      label: "Reserves",
    },
    {
      to: "/curve/utilization",
      icon: "fas fa-burn",
      label: "Utilization",
    },
    {
      to: "/curve/vefunder",
      icon: "fas fa-funnel-dollar",
      label: "veFunder",
    },
  ],
};
