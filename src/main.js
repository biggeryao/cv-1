let demo = document.querySelector('.demo');
let style = document.querySelector('.style')
let n = 0;
let string2 = "";
let string = `/*大家好，可以叫大姚
接下来我会展示一下我的前端功底
首先我要准备一个div*/
.div1{
    border: 1px solid red;
    height:200px;
    width:200px;   
}
/*接下来我把div变成一个八卦图
*注意看好了
*首先，把div变成一个圆
*/
.div1{
    border-radius :50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳形成的
*一白一黑
*/
.div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个神秘的小球*/

.div1::before {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #fff;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    
}

.div1::after {  
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #000;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(27,27,27,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}

`;




let step = () => {
    setTimeout(() => {
        //处理String中的回车
        if (string[n] === '\n') {
            string2 += "</br>";//如果是回车，就替换成</br>
        } else if (string[n] === " ") {
            string2 += "&nbsp";
        }
        else {
            string2 += string[n];//如果不是回车，就照搬
        }//简化
        //string2 += string[0]==='\n' ? "</br>" : string[n];

        demo.innerHTML = string2
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        demo.scrollTo(0, 99999)


        if (n < string.length - 1) {
            //如果n不是最后一个，就继续
            n = n + 1;
            step()
        }
    }, 5);

}
step();