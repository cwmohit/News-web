console.log("This is my index js file");
// 2e34ffed3d2565f3d926fa5669d129e7
// Initialize the news api parameters
let source = 'the-times-of-india';
// let apiKey = 'd093053d72bc40248998159804e0e67d'
let apiKey = '76487dba644d4ef09dffeeeb8da7b4a0';


// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
// const xhr = new XMLHttpRequest();
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=us&apiKey=76487dba644d4ef09dffeeeb8da7b4a0`, true);

// What to do when response is ready
// xhr.onload = function () {
//     if (this.status === 200) {
//         let json = JSON.parse(this.responseText);
//         let articles = json.articles;
//         console.log(articles);
//         let newsHtml = "";
//         articles.forEach(function(element, index) {
        
//             let news = `<div class="card">
//                             <div class="card-header" id="heading${index}">
//                                 <h2 class="mb-0">
//                                 <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
//                                     aria-expanded="false" aria-controls="collapse${index}">
//                                    <b>Breaking News ${index+1}:</b> ${element["title"]}
//                                 </button>
//                                 </h2>
//                             </div>

//                             <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
//                                 <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
//                             </div>
//                         </div>`;
//             newsHtml += news;
//         });
//         newsAccordion.innerHTML = newsHtml;
//     }
//     else {
//         console.log("Some error occured")
//     }
// }

// xhr.send()

// function getData(){
//    url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=76487dba644d4ef09dffeeeb8da7b4a0`;
//    params={
//        method:'GET',
//        headers:{
//            'Content-type':'application/json'
//        }
//    }
//    fetch(url,params)
// }
async function getData(){
    console.log('async await');
       params={
       method:'GET',
       headers:{
           'Content-type':'application/json'
       }
   }
   const response=await fetch(`http://api.mediastack.com/v1/news?access_key=2e34ffed3d2565f3d926fa5669d129e7&country=in`);
   console.log('waiting response')
   console.log(response)

   const user=await response.json();
   console.log(user)
   return user;
}


getData().then((userdata)=>{
    console.log(userdata.data);
    let newsHtml = "";
    let articles = userdata.data;
            articles.forEach(function(element, index) {
            
                let news = `<div class="card">
                                <div class="card-header" id="heading${index}">
                                    <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                        aria-expanded="false" aria-controls="collapse${index}">
                                       <b>Breaking News ${index+1}:</b> ${element["title"]}
                                    </button>
                                    </h2>
                                </div>
    
                                <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                    <div class="card-body">
                                    
                                    ${element["description"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                                </div>
                            </div>`;
                newsHtml += news;
            });
            newsAccordion.innerHTML = newsHtml;

});
