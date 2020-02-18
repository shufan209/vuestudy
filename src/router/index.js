import Vue from "vue";
import VueRouter from "vue-router";
import homeRouter from "./Home";
import agentRouter from "./Agent";
import videoRouter from "./Video";
Vue.use(VueRouter);
const routes = [homeRouter, agentRouter, videoRouter];
const router = new VueRouter({
		mode: 'hash',
		routes
	});
export default router;
