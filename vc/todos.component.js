const todosComponent = {
	props: ['message'],
	mounted: function() {
		var self = this;
		/*var resource = "/todos/" + this.$route.params.todoId;*/
	    
	    var resource = "./mockjson/todos.json";
	    fetch(resource).then(function(response) {
            return response.json();
	    }).then(function(result) {
	        self.todos = result;
	    });
	},
	data: function() {
        return {
          //toodId: this.$route.params.todoId,
          total: 99999,
          todos: [],
          newTodo: {}
        };
    },
    methods: {
    	addTodo: function(){
    		var newTodo = {name: "sdfs", total:999, inactive:false};
    		console.debug("addTodo");
    		
    		fetch('/todos', {
			    headers: {'Content-Type': 'application/json'},
		        method: 'POST',
		        body: JSON.stringify(newTodo)
			}).then(
				(res) => res.json()
			).then(function(data){
				newTodo = data;

			}).catch((err) => console.error(err))

    	},
    	getAsMap: function(){
			var mTodos = {};
			this.todos.forEach(function(todo, indx){
				mTodos[todo.id] = todo;
			});
			return mTodos;
		}
    },
    template: `
<div>
	<p>
		todos.component.js
	</p>

	<p v-on:show="true">
		<b-form inline @submit="addTodo">
      	<label class="sr-only" for="inlineFormInputGroupUsername2">Todo</label>
      	<b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
        	<b-select v-model="newTodo.name" v-on:change="console.log('..')">
	    	  <option disabled value="">Select one...</option>
			  <option v-for="todo in todos" v-bind:value="todo.id">
			    {{ todo.name }}
			  </option>
			</b-select>
      	</b-input-group>
      	<b-button type="button" variant="danger" v-on:click="">Test</b-button>
      	<b-button type="submit" variant="primary">Save</b-button>
     </p>
	
	<table class="table table-striped table-sm table-hover table-bordered">
	    <thead>
	        <tr>
	            <th>Name</th>
	            <th class="text-right">Total</strong></th>
	        </tr>
	    </thead>
	    <tbody>
	        <tr v-for="todo in todos" v-bind:class="{ 'table-danger': todo.inactive }">
	            <td>{{ todo.name }}</td>
	            <td>{{ todo.total | mynum }}</td>
	        </tr>
	    </tbody>
	</table>
</div>
`
};