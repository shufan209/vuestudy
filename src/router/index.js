import Vue from "vue";
import VueRouter from "vue-router";
import home from "@/views/home/home.vue";
import about from "@/views/about/about.vue";
import agent from "@/views/agent/agent.vue";

Vue.use(VueRouter);

const routes = [{
	path: "/",
	name: "home",
	component: home
}, {
	path: "/about",
	name: "about",
	component: about

}, {
	path: "/agent",
	name: "agent",
	redirect: '/agent/fastdo',
	component: agent,
	children: [{
		path: 'fastdo',
		name: 'fastdo',
		component: () => import('@/views/agent/fastdo.vue')
	},
	{
		path: 'doorder',
		name: 'doorder',
		component: () => import('@/views/agent/doorder.vue')
	},
	{
		path: 'bindorder',
		name: 'bindorder',
		component: () => import('@/views/agent/bindorder.vue')
	}
	]
}
];

const router = new VueRouter({
	mode: 'hash',
	routes
});

export default router;
