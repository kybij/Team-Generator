function engineerCard (engineer){
    return `
    <div class="col">
    <div class="card" style="width: 18rem;">
        <div class="card-body bg-primary">
            <h2 class="card-title text-white">${engineer.name}</h2>
            <h5 class="text-white"><i class="fas fa-glasses"></i> ${engineer.getRole()}</h5>
      
            </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item">Github:<a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.github}</a></li>
        </ul>
    </div>
 </div>
    `
}

module.exports = engineerCard 