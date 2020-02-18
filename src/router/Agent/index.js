export default {
	path: "/agent",
	name: "agent",
	//redirect: '/agent/fastdo',
	component: () => import('@/views/Agent'),
	children: [{
		path: 'fastdo',
		name: 'fastdo',
		component: () => import('@/views/Agent/Fastdo')
	}, {
		path: 'dorder',
		name: 'dorder',
		component: () => import('@/views/Agent/Dorder')
	}, {
		path: 'border',
		name: 'border',
		component: () => import('@/views/Agent/Border')
	}
	]
}