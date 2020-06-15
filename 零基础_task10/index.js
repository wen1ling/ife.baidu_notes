//判断是否为正整数
function isInt(a) {
    if (!isNaN(a) && a >= 0 && a % 1 == 0) {
        return true;
    } else {
        return false;
    }
}
//获取时间
let date = new Date();
console.log(date.getHours);
if (date.getHours() <= 4) {
    document.getElementById("hello").innerHTML += "&nbsp;&nbsp;Don't sleep too late!!!";
} else if (date.getHours() <= 12) {
    document.getElementById("hello").innerHTML += "&nbsp;&nbsp;Good moring!";
} else if (date.getHours() <= 18) {
    document.getElementById("hello").innerHTML += "&nbsp;&nbsp;Good afternon!";
} else if (date.getHours() <= 23){
    document.getElementById("hello").innerHTML += "&nbsp;&nbsp;Good Evening!";
}
//关于3的小游戏
document.getElementById('first_game').onclick = function() {
    total = document.getElementById("total").value;
    pa = document.getElementById("pa").value;
    if (isInt(total) && isInt(pa) || total >= pa) {
        let result1="";
        for (i=1;i <= total;i++) {
            if (i % pa == 0) {
                result1 += "PA" + "  ";
            } else {
                result1 += Number(i) + "  ";
            }
        }
        console.log(result1);
        if (total <= 100) {
            document.getElementById("result1").innerHTML += "&nbsp;&nbsp;" + result1;
        } else {
            document.getElementById("result1").innerHTML +="&nbsp;&nbsp;&nbsp;&nbsp;"+ "数据过大，请在console控制台查看！！！"
        }
    }
}

//乘法表
//循环生成table下的tr和1td

function createTr(a) {
        for (i=1;i <= a; i++) {
            let newTr = document.createElement('tr');
            let newId = document.createTextNode("");
            newTr.appendChild(newId);
            newTr.className = "newTr";
            oldDiv = document.getElementById("tables");
            oldDiv.appendChild(newTr);
        }
}

//createTr(3);

//循环生成tr下的td并赋值
function createTd(c,d) {
    oldTr = document.getElementsByTagName("tr");
    for (i=1;i <= c; i++) {
        for (k=1;k <= d;k++) {
            let newTd = document.createElement('td');
            let n=0;
            n = d*i + k;
            let newId = document.createTextNode(i + "×" + Number(k) + "=" +  Number(i * k));
            newTd.appendChild(newId);
            newTd.className = "newTd";
            //oldDiv = document.getElementById("newTr");
            //console.log(oldTr[i]);
            oldTr[i-1].appendChild(newTd);
        }
    }
}
//createTd(2,3);

document.getElementById("second_game").onclick = function() {
    let n = document.getElementById("n_number").value;
    m = document.getElementById("m_number").value;
    if (isInt(n) && isInt(m)) {
        createTr(n);
        createTd(n,m);
    }
}
