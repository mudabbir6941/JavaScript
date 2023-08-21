// //<-----------------------------Assignment 03 Chapter Array Q_01------------------------->

// let studentName = [];
// studentName.push("Mudabbir");
// studentName.push("Ali");
// studentName.push("Ahmed");
// studentName.push("Umer");
// document.write(studentName);

// //<-----------------------------Assignment 03 Chapter Array Q_02------------------------>

// let arrayData = { studentName : [] };
// arrayData.studentName.push("My Array using JS object notation")
// document.write(arrayData.studentName);

//<-----------------------------Assignment 03 Chapter Array Q_03------------------------->

// let stringArray = ["This is an String Array Value First","This is an String Array Value Secound"];
// document.write(stringArray);

//<-----------------------------Assignment 03 Chapter Array Q_4------------------------->

//numbers = [1, 2, 3, 4, 5]

//<-----------------------------Assignment 03 Chapter Array Q_5------------------------->

// let booleanArray = [true,false];

//<-----------------------------Assignment 03 Chapter Array Q_6------------------------->

//mixed_array = [1, "Hello", 3.14, True, "World"]

//<-----------------------------Assignment 03 Chapter Array Q_7------------------------->

// let educationArray = ["SSC","HSC","BCS","BS","BCOM","MS","PHD"];
// document.write(educationArray);

//<-----------------------------Assignment 03 Chapter Array Q_8------------------------->

// var studentscore = [];
// let studentname = ["Ali","Ahmed","Usman"];
//  studentscore[0] = prompt("Enter User 1st Student Score")
//  studentscore[1] = prompt("Enter User 2st Student Score")
//  studentscore[2] = prompt("Enter User 3st Student Score")

// var totalmarks = 100;

// var percentage04 = [studentscore[0]*totalmarks/100,studentscore[1]*totalmarks/100,studentscore[2]*totalmarks/100]
// for(i = 0; i<studentscore.length;i++)
// {
//  document.write("Score Of "+" "+studentname[i]+" "+"is"+" "+studentscore[i]+" "+"Percentage:"+" "+percentage04[i]+"%"+" ");

// }


//<-----------------------------Assignment 03 Chapter Array Q_9------------------------->

// let colorNameArray = ["Red","Green","Yellow"];
//  document.write(colorNameArray);
//  var color = prompt("What Color You Wants To Add To The Beginning Of Array")
//  colorNameArray.unshift(color);
//  document.write(colorNameArray);

















// // let a = prompt("Enter Variable Value");
// // document.write("Result:<br> The Value of Variable a ="+a+"<br>......................................");
// // ++a;
// // document.write("<br>The Value of Variable ++a ="+a);
// // document.write("<br>Now Value of a ="+a);

// // document.write("<br><br>The Value of Variable a++ ="+a);
// // a++;
// // document.write("<br>Now Value of a =" +a);

// // document.write("<br><br>The Value of Variable --a = 11");
// // document.write("<br>The Value of Variable a ="+--a);
// // a--;
// // document.write("<br><br>The Value of Variable a-- = 11");
// // document.write("<br>The Value of Variable a ="+a--);


// //<-----------------------------Assignment 02 Q_02------------------------->

// // var a =2,b = 1;

// // --a;
// // document.write("Result of Variable a After execution of --a will be "+a)

// // var result = --a - --b;
// // document.write("Result of Variable a After execution of --a - --b will be "+result)

// //    var result= --a - --b + ++b;
// // document.write("Result of Variable a After execution of --a - --b + ++b will be "+result)

// // var result= --a - --b + ++b + b--;
// // document.write("Result of Variable a After execution of --a - --b + ++b + b-- will be "+result)



// //<-----------------------------Assignment 02 Q_03------------------------->
// // var username = prompt("Enter User Name")
// // document.write("Hello--! "+username+"<br> Wellcome To Our Website");


// //<-----------------------------Assignment 02 Q_04------------------------->
// // let table_num = parseFloat(prompt("Enter Number For Table"));
// // if(table_num >= 1)
// // {
// // document.write("Table of 4 <br>");
// // for(let i = 1; i <=10; i++)
// // {
// //     let result = table_num * i;
// //     document.write(table_num +" "+"x"+ " "+ i +" "+" "+"="+" "+result+"<br>");
// // }
// // }
// // else
// // {
// //     table_num = 5;
// //     document.write("Table of 4 <br>");
// // for(let i = 1; i <=10; i++)
// // {
// //     let result = table_num * i;
// //     document.write(table_num +" "+"x"+ " "+ i +" "+" "+"="+" "+result+"<br>");
// // }
// // }



// //<-----------------------------Assignment 02 Q_05------------------------->

// var total_marks = 100;
// var totalm = 300;
// let subject01_Name = prompt("Enter Name of 1st Subject");
// let subject02_Name = prompt("Enter Name of 2nd Subject");
// let subject03_Name = prompt("Enter Name of 3rd Subject");



// let subject1_Obtainmarks = parseFloat(prompt("Enter Marks Obtain of 1st Subject"));
// let subject2_Obtainmarks = parseFloat(prompt("Enter Marks Obtain of 2nd Subject"));
// let subject3_Obtainmarks = parseFloat(prompt("Enter Marks Obtain of 3rd Subject"));

// function subject_Sum(sub01, sub02, sub03)
// {
//     var sum = sub01+sub02+sub03;
//     return sum;
// }
// var total = subject_Sum(subject1_Obtainmarks,subject2_Obtainmarks,subject3_Obtainmarks);
// function percentage(subtotal)
// {
//     var per = subtotal/totalm*100;
//     document.write(per);
    
// }
// var percentage01 = (subject1_Obtainmarks/total_marks)*100;
// var percentage02 = (subject2_Obtainmarks/total_marks)*100;
// var percentage03 = (subject3_Obtainmarks/total_marks)*100;
// var subjtotal = subject1_Obtainmarks+subject2_Obtainmarks+subject3_Obtainmarks;

// var totalpercent = (subjtotal/totalm)*100;
// document.write("<b>Subject  Total Marks    Obtain Marks   Percentage</b> <br><br>"+subject01_Name+" "+total_marks+" "+" "+subject1_Obtainmarks+" "+" "+percentage01+"%<br>"+"<br>"+subject02_Name+" "+total_marks+" "+" "+subject2_Obtainmarks+" "+" "+percentage02+"%"+"<br>"+"<br>"+subject03_Name+" "+total_marks+" "+" "+subject3_Obtainmarks+" "+" "+percentage03+"%"+"<br>");
// document.write("<br>"+"<br><b>"+totalm+" "+subjtotal+" "+" "+percentage()+"%"+"<br></b>")



// //<-----------------------------Assignment 02 Chapter 09 Q_01------------------------->
// // let city = prompt("Enter City Name");
// // if(city == "Karachi")
// // {
// // document.write("Wellcome To City Of Light")
// // }else
// // {
// //     document.write(city);
// // }

// //<-----------------------------Assignment 02 Chapter 09 Q_02------------------------->
// // let gender = prompt("Enter Your Gender");
// // if(gender == "Male")
// // {
// // document.write("Good Morning Sir")
// // }else if(gender == "female")
// // {
// //     document.write("Good Morning Ma'am")
// // }


// //<-----------------------------Assignment 02 Chapter 09 Q_03------------------------->
// // let color = prompt("Enter Your color");
// // if(color == "Red" || color== "red")
// // {
// // document.write("Must Stop")
// // }
// // else if(color == "Yellow" || color == "yellow")
// // {
// //     document.write("Ready To Move")
// // }
// // else if(color == "Green" || color =="green")
// // {
// //     document.write("Move Now")
// // }


// //<-----------------------------Assignment 02 Chapter 09 Q_04------------------------>

// // let fuel = prompt("Enter Remaning Fuel In Liters");
// // if(fuel <= 0.25)
// // {
// // document.write("Please Refill the Fuel");
// // }
// // else
// // {
// //     document.write("NO need to Refill");
// // }
