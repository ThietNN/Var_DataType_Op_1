inputp = prompt("Nhập điểm vật lý");
inputc = prompt("Nhập điểm hóa học");
inputb = prompt("Nhập điểm sinh học");

let p=parseInt(inputp);
let c=parseInt(inputc);
let b=parseInt(inputb);


s=p+c+b;
a=(p+c+b)/3;

document.write('Điểm tổng 3 môn là:' + s);
document.write("<br/>");
document.write('Điểm trung bình là:'+ a);