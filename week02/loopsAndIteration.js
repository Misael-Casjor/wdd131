const DAYS = 6;
const LIMIT = 30;

let studentReport = [11, 42, 33, 64, 29, 37, 44];


for ( let count = 0; count <= DAYS; count++){
    if(studentReport[count] < LIMIT){
        console.log(studentReport[count])
    }
}
let i = 0;
do{
   
    if (studentReport[i] < LIMIT){
        console.log(studentReport[i]);
    }
    i +=1;
}while(i<DAYS);

studentReport.forEach(function(pass){
    if (pass < LIMIT){
        console.log(pass)
    }});


let days = ["Monday","Tuesday", "Wednesday", "Thoursday", "Friday", "Saturday", "Sunday"
]

for (let i = 0; i <= DAYS; i++){
    console.log(days[i]);
}