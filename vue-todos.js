HTML 部分

<body>
  <div class="app">
    <input type="text" placeholder="輸入資料"
           @keyup.enter="addTodo(newTodo)" v-model="newTodo">
    <h2>事項列表</h2>
    <ul>
      <li v-for="todo in todos ">
        {{todo.content}}
      </li>
      
    </ul>
    
    
    
  </div>
  
  
  JS部分  //可以做到一個代辦事項的列表
  
  var app = new Vue({
  el:'.app',
  data:{
    todos:[],
    newTodo:''
  },
  
  methods:{
    addTodo: function(todo){
      this.todos.push({content:todo})  //這裡有點不清楚
    },
  }
  
})

