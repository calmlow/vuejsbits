var mainComponent = {
	//props: ['message', 'orders'],
	mounted: function() {
		var self = this;

	},
	data: function() {
        return {
          total: 99999,
          todos: [],
        };
    },
    methods: {
    	addTodo: function(){
    		console.debug("addTodo");
    	}
    },
    template: `
<div>
	<p>
		main.component.js
	</p>

	<br>
	<a href="#/todos">Todos</a>
	
</div>
`
};