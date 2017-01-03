var shuju = {
    message:'超出20判断',
    age:"16",
    people: [{ name:'小明',school:'厦门理工'},{ name:'小东',school:'集美大学'}],
    pageCount:10,
    activeNumber:1,
    sex:'male',
	  val:0,
}



new Vue({
  el: '#app',
  data: shuju,
  methods:{
    change:function(n){
      this.activeNumber = n;
    },
    add:function(){
      this.val++;
    },
    reduce:function(){
      this.val--;
    }
  }
  
})

function sortMax(a,b)
{
  return b.age - a.age
}
function sortMin(a,b)
{
  return a.age - b.age
}

new Vue({
  el: '#message',
  data: {
    newPerson:{
      name:'',
      school:'',
      age:'',
    },
    people:[{ name:'小明',school:'厦门理工',age:'20'},{ name:'小东',school:'集美大学',age:'24'}]
  },
  methods:{
    add:function(){
      this.people.push(this.newPerson);
      this.newPerson = { name:'',school:'',age:'' };
    },
    del:function(index){
      this.people.splice(index,1);
    },
    sort_max:function(){
      this.people.sort(sortMax);
    },
    sort_min:function(){
      this.people.sort(sortMin);
    }
  }
})