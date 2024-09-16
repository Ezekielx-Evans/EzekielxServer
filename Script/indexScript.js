//根据设备宽度设置HTML标签的初始值
function resetHTMLFontSize() {
    document.documentElement.style.fontSize = screen.width / 10 + "px";
}
resetHTMLFontSize();
window.onresize = resetHTMLFontSize;

//点击侧边按钮时跳转网页
let buttons = document.getElementsByClassName("sidebarButton");
console.log(buttons);
buttons[0].addEventListener("click",function(){
    window.location.href="./index.html";
});
buttons[1].addEventListener("click",function(){
    window.open("https://blog.kielx.site/");
});
buttons[2].addEventListener("click", function(){
    window.open("https://code.kielx.site/");
});
buttons[3].addEventListener("click", function(){
    window.location.href="./study.html";
});
buttons[4].addEventListener("click",function(){
    window.location.href="./operation.html";
})

