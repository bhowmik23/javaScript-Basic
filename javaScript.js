// to print html page
document.write("Hello world!<br>");

// variable example
var name = "Biddut";
var age = 20;
document.getElementById("p_name").innerHTML = "Hello"+name+"<br>Age:"+age;

// prompt

/*var x = prompt("Enetr a number");
document.write("2*",x,"=",2*x+"<br>");*/

// string to number conversion
document.write("2 + number('3.4')=",2+Number('3.4'),"<br>");
document.write("2 + number('3.4')=",2+parseInt('5.5'),"<br>");

// Math
document.write("pi =", Math.PI,"<br>");
document.write("e =", Math.E,"<br>");
document.write("random number =", Math.ceil(Math.random()*20),"<br>"); //print random number

// string
document.write("biDdut".toUpperCase(),"<br>");
document.write("BIDDut".toLowerCase(),"<br>");

// arrar
arr = [15, 20, 30, 40, "Biddut"];
for(a in arr){
    document.write(arr[a]," ");
}
document.write("<br>");
document.write(arr.pop(), "<br>");
document.write("Length of array: ", arr.length, "<br>");
document.write(arr.push(70),"<br>");
document.write("Length of array: ", arr.length, "<br>");
for(a in arr){
    document.write(arr[a]," ");
}
document.write("<br>");

// if_else
age = 10;
if(age>3 && age<6){
    document.write("Age :"+age+"go to kindergarden");
}
if(age>=6 && age<18){
    document.write("Age :"+age+"go to school");
}
else{
    document.write("Age :"+age+"go to college");
}
document.write("<br>");

// switch-case
var grade= 'A';
document.write("Grade " +grade+" : ");
switch(grade){
    case 'A':
        document.write("very good grade");
        break;
    case 'B':
        document,write("Good grade");
        break;
    default: 
    document.write("enetr correct grade");
}
document.write("<br>");

// for-loop
for(i=5; i>=0; i--){
    document.write(i+" ");
}
document.write("<br>");

// while-loop
var x=0;
while(x<5){
    document.write(x+" ");
    x++;
}
document.write("<br>");

// do-while
var x=0;
do{
    document.write(x+" ");
    x++;
}while(x<3);
document.write("<br>");

// for-in loop
arr = [10, 7, 30, 5];
for (a in arr){
    document.write(arr[a]+" ");
}
document.write("<br>");

// continue
for(i=5; i>=0; i--){
    if(i==3){
        continue;
    }
    document.write(i+" ");
}
document.write("<br>");

// break
for(i=5; i>=0; i--){
    if(i==3){
        break;
    }
    document.write(i+" ");
}
document.write("<br>");

// function
function addNumber(num1, num2){
    return num1+num2;
}
sum = addNumber(2,3);
document.write(sum,"<br>");

// event handaling
alert("hello");


// Sgpa Calculation

var Persantage = 0;
var Amount = 0;

function enablePay(){
    if(document.getElementById('pay').checked && document.getElementById('amount').disabled){
        document.getElementById('amount').disabled = false;
    }else{
        document.getElementById('amount').disabled = true;
    }
}

function enablePersentage(){
    if(document.getElementById('per').checked && document.getElementById('persentage').disabled){
        document.getElementById('persentage').disabled = false;
    }else{
        document.getElementById('persentage').disabled = true;
    }
}

function scholarshipCalculation(){
    var e = document.getElementById('select');
    var campus = e.options[e.selectedIndex].value;
    // console.log(campus);
    var sgpa = Number(document.getElementById('SGPA').value);
    // console.log(sgpa);
    var persentage = document.getElementById('persentage').value;
    // console.log(persentage);

    if(campus=="Permanent Campus"){
        if(sgpa==4.00){
            Persantage = 50+5;
            if(Persantage>persentage){
                Persantage = Persantage;
            }else{
                Persantage = persentage;
            }      
        }else if(sgpa>=3.90 && sgpa<=3.99){
            Persantage = 30+5;
            if(Persantage>persentage){
                Persantage = Persantage;
            }else{
                Persantage = persentage;
            } 
        }else if(sgpa<=3.89 && sgpa>=3.85){
            Persantage = 20+5;
            if(Persantage>persentage){
                Persantage = Persantage;
            }else{
                Persantage = persentage;
            } 
        }else if(sgpa<=3.84 && sgpa>=3.80){
            Persantage = 10+5;
            if(Persantage>persentage){
                Persantage = Persantage;
            }else{
                Persantage = persentage;
            } 
        }else{
            Persantage = 0+5;
            if(Persantage>persentage){
                Persantage = Persantage;
            }else{
                Persantage = persentage;
            }
        }
    }else{
        if(sgpa==4){
            Persantage = 50;
            if(Persantage>persentage){
                Persantage = Persantage;
            }else{
                Persantage = persentage;
            } 
        }else if(sgpa<=3.99 && sgpa>=3.90){
            Persantage = 30;
            if(Persantage>persentage){
                Persantage = Persantage;
            }else{
                Persantage = persentage;
            } 
        }else if(sgpa<=3.89 && sgpa>=3.85){
            Persantage = 20;
            if(Persantage>persentage){
                Persantage = Persantage;
            }else{
                Persantage = persentage;
            } 
        }else if(sgpa<=3.84 && sgpa>=3.80){
            Persantage = 10;
            if(Persantage>persentage){
                Persantage = Persantage;
            }else{
                Persantage = persentage;
            } 
        }else{
            Persantage = 0;
            if(Persantage>persentage){
                Persantage = Persantage;
            }else{
                Persantage = persentage;
            }
        }
    }
    document.getElementById('resultScholarship').innerHTML = "<b>Scholarship is:</b>" +Persantage+"%"; 
}

function calculateAmount(){
    var amount = Number(document.getElementById('amount').value);
    var persentage = document.getElementById('resultScholarship').value;
    // console.log(amount);
    Amount = amount - (amount*Persantage/100);
    document.getElementById('resultScholarship').innerHTML = "<b>Amount is:</b>" +Amount;
}