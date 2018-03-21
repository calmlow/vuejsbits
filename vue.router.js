
const router = new VueRouter({
    //mode: 'history',
    mode: 'hash',
    //history: false,
    routes: [
    	{name:'start', path: "/", component: mainComponent },
        
        /* sub routing */
        /*{
            path: "/todos/:todoId", 
            component: todos1,
            children: [{
                path: 'testing',
                component: todos2
            }, {
                path: 'testing2',
                components: {
                    default: todos3,
                }
            }]
        },*/
        
        {name:'ToDos', path: "/todos", component: todosComponent },
        {name:'View ToDo', path: "/todos/:todoId", component: todosComponent },
    	{name:'okok home', path: "/home", template: '<p>simple template</p>'}
    ]
});
