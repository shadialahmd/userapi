

function getusers(){
    try {
        fetch('https://reqres.in/api/users?page=3')
        .then(res=> res.json())
        .then(data => console.log(data))
        
    } catch (error) {
        console.log('ee'+error)
    }

}

getusers();