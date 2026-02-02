var num = prompt("Enter number ");
var data = [];
for(var i=1;i<=10;i++){
    data.push(num+" x "+i+" = "+(num*i));
}
var d = data.map((line)=>{
    return <div>{line}</div>
});
const res = <p>{d}</p>
export default res; 