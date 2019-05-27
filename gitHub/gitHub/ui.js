class UI {

  constructor() {


    this.displayRepo = document.getElementById('displayRepo');


  }



  showRepo(repo) {

  // Display Repo
    

    let output = '';
  
    repo.forEach(function (repo) {


      output += `
      
      <style>
      #marginTop {
        margin-top: 20px !important;
        margin-bottom: 0px;
      }
      </style>

     


      <div class="container">
      <ul class="collection">
      <li class="collection-item avatar">
      <img src="${repo.repo.owneravatar_url}" class="circle">

      <a href="${repo.repo.html_url}" target="_blank" > <span class="title">${repo.repo.name}</span> </a>
      <p>${repo.repo.description}</p>       
      <p>${repo.repo.full_name}</p>       
      <br/>
      <p><b>Number of Forks:</b> ${repo.repo.forks_count}</p>       
      <p><b>Number of Open Issues:</b> ${repo.repo.open_issues}</p>       
      <p><b>Repository URL:</b> ${repo.repo.url}</p> 
      
     <div id="marginTop" class="row">      
      <div class="col s6">
      


<a href="#" onclick="document.getElementById('foo').style.display = 'block';">Show Commits</a>  /   
<a href="#" onclick="document.getElementById('foo').style.display = 'none';">Hide Commits<br/></a>   


<div id="foo" style= "display:none">

<table style="width:100% ">
          <tr>
            <th>User</th>
            <th>Sha</th> 
          </tr>`;

      repo.commits.forEach(function (commit) {
        
         output += `<tr>
            <td>${commit.userName}</td>
            <td>${commit.sha}</td> 
          </tr>`;
       
      })
      

    output += `
    </table>
    </div>
      </div>

    </div>
       </li>
       </ul>
       </div>


       `;
      



    })


    document.getElementById('displayRepo').innerHTML = output;
  }

  clearProfile() {

    this.displayRepo.innerHTML = '';
  }

}