var fun = document.getElementsByClassName("fun")[0];
fun.onfocus = function () {
    fun.value = " ";
};

var fx = document.getElementsByClassName("Dra")[0];
fx.onfocus = function () {
    fx.value = " ";
    fx.style.textAlign = "left";
};

//计算器功能

var outPut = document.getElementById("outPut");
// console.log((typeof outPut.value));
var str_Array = new Array();    //存储输入的数字及运算符
function str_click(e) {
    str_Array[str_Array.length] = e.value;
    outPut.value += e.value;
}
//计算结果
function ev() {
    if (outPut.value == ""){
        outPut.value = "";
    }else {
        outPut.value = eval(outPut.value);
    }
}
//退格
function backSpace() {
    outPut.value = outPut.value.substring(0,outPut.value.length-1);
    str_Array.length--;
}
//清屏
function out_clear() {
    document.getElementById("outPut").value = "";
}
//取余
function mod_Cal() {
    outPut.value += "%";
}
//取整
function int_Trans() {
    if(typeof outPut.value != "number"){
        ev();
    }
    outPut.value = Math.floor(outPut.value);
}
//Pi
function PI_input() {
    outPut.value += Math.PI;
}
//e
function e_input() {
    outPut.value += Math.E;
}
//ln
function ln_Cal() {
    outPut.value = Math.log(outPut.value);
}
//sin
function sin_Cal() {
    outPut.value = Math.sin(outPut.value);
}
//cos
function cos_Cal() {
    outPut.value = Math.cos(outPut.value);
}
//tan
function tan_Cal() {
    outPut.value = Math.tan(outPut.value);
}
//x^3
function x_3_Cal() {
    outPut.value = Math.pow(outPut.value,3);
}
//x^2
function x_2_Cal() {
    outPut.value = Math.pow(outPut.value,2)
}
// 1/x
function countdown() {
    outPut.value = 1/outPut.value;
}
//阶乘
function factorial_Cal() {
    var num =1;
    for(var i =1; i<=outPut.value;  i++){
        num *= i;
    }
    outPut.value = num;
}
//顺序栈
// function stack_Arr() {
//     var array_arr = new Array();
//     var Top;
//     var push = function () {
//
//     };
//     var pop = function () {
//
//     };
// }
//绘制函数图像
function draw() {
    var canvas = document.getElementById('map');
    //替换内容是用于在不支持 <canvas> 标签的浏览器中展示的。
    // 这里的if-else语句，通过简单的测试getContext()方法的存在，脚本可以检查编程支持性。
    if (canvas.getContext()){
        var ctx = canvas.getContext('2d');
        // drawing code here
        ctx.strokeStyle = 'rgb(0,0,0)';
        for(var i = 0; i<100;i++){
            ctx.beginPath();
            ctx.lineTo(i,2*i);
        }
    }
}
