

const app = Vue.createApp({
  data(){
    return {
      newTodo: "",
      todos: [],
    }
  },

  methods:{

    addTodo(){
      if(this.newTodo != ""){
        this.todos.unshift({
          title: this.newTodo,
          done: false,
          text_decoration: null,
          background: "#2C28AE"
        })
      }
      this.newTodo="";
      console.log(this.todos);
    },
    removeTodo(todo){
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    todoDone(todo){
      if(!todo.done){
        todo.done = true;
        todo.text_decoration = "line-through";
        todo.background = "#5F5AF5";
      }
      else{
        todo.done = false;
        todo.text_decoration = null;
        todo.background = "#2C28AE";
      }
    }

  }

}).mount("#app");
