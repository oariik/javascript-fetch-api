document.querySelector('#button1').addEventListener('click',textOutput);
document.querySelector('#button2').addEventListener('click',JsonOutput);
document.querySelector('#button3').addEventListener('click',restApiOutput);



function textOutput (){
   
    fetch("textfile.txt").then(response => response.text())      
    .then(data =>{
        document.getElementById("button1output").innerText +=data;
    })
}



function JsonOutput (){
    fetch("article.json").then(response => response.json())
    .then(articles => {

        let output = "<ul>";

        articles.forEach(function(article){
            output+= `<li>

             Title ${article.title} - Content ${article.body}
            </li>`
        });

       output+= "</ul>";
       document.getElementById("button2output").innerHTML+= output;
    });
}


function restApiOutput (){
    fetch("https://api.github.com/users")
    .then(function(response){
        return response.json();

    }).then(function(users){
        let output = "<ul>";
        users.forEach(function(user){
            output+= `<li>

             Kullanıcı Adı  ${user.login}
            </li>`;

        })


       output+= "</ul>";
       document.getElementById("button2output").innerHTML+= output;
    });
}
