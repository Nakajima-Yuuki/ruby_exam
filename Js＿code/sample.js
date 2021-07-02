let barrier;
{
 let data = {name: "shibata",password: "hogehoge"};
 barrier = function(){
   return data;
 };
}
console.log(barrier());
let invasion = barrier();
invasion.password = "fugafuga";
console.log(barrier());
