

// function getusers(){
//     try {
//         fetch('https://reqres.in/api/users?page=3')
//         .then(res=> res.json())
//         .then(data => console.log(data))
        
//     } catch (error) {
//         console.log('ee'+error)
//     }

// }

// getusers();

let num=12;

function getsingluser(){

for(i=1;i<=num;i++){

 try {
        fetch('https://reqres.in/api/users/'+i)
        .then(res=> res.json())
        .then(data => {


            const div=document.createElement("DIV")
           const ss= div.innerHTML=data["data"]['id'];
            div.innerHTML+=`<div class="img-container"><img style="width:150px" src=https://reqres.in/img/faces/${ss}-image.jpg></div>`;
            document.body.appendChild(div);
            console.log(data)
        })
        
    } catch (error) {
        console.log('ee'+error)
    }
}
    

}
getsingluser();