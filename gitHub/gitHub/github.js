class Github {

  constructor() {
    this.client_id = '62c743daf1adcad1c420';
    this.client_secret = 'fa1f8245e812c7d59e81724fe4a9510d58b9f44c';
    this.repo_count = 4;
  }


  async getRepo(userText) {

    const repoResponse = await fetch(`https://api.github.com/search/repositories?q=${userText}&client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.repo_count}`);

    const repo = await repoResponse.json();

    var repos=[];

    repo.items.forEach(function (repo) {
      
      //console.log(repo.full_name);           

      var repoObj={
        owneravatar_url : repo.owner.avatar_url,
        html_url : repo.html_url,
        name : repo.name,
        description: repo.description,
        full_name: repo.full_name,
        forks_count : repo.forks_count,
        open_issues : repo.open_issues,
        url : repo.url
      };


      repos.push(repoObj);

    })
    
    var reposWC = [];

    var i;

    for (i = 0; i < repos.length; i++) {    
    
    
    var commitsList = [];
      const commitResponse = await fetch(`https://api.github.com/repos/${repos[i].full_name}/commits`);

      const commit = await commitResponse.json();

      commit.forEach(function (commit) {        

        var commitObj={sha:commit.sha, userName:commit.commit.author.name};
        
        commitsList.push(commitObj);        

      })
      var objRepoComplete = {
          repo:repos[i],
          commits:commitsList
      };

      reposWC.push(objRepoComplete);

    }


    return {
        repo: reposWC
    }


  }
    



}