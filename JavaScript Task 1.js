let name = "Aminu";

 console.log("My name is: " + name);

 const courses = ["HTML", "CSS", "Javascript", "Flutter", "Kotlin", "UI/UX"];

 console.log(courses);
 

if(courses.length%2===0){
    for(let i=1; i<=200; i++){
        if (i%2!=0){
            console.log(i);
        }
        
    }

}
else{
    for(let i=1; i<=200; i++)
        if(i%2===0){
            console.log(i);
        }
}
