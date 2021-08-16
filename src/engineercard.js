function engineerCard (engineer){
    return `
    <div class="col">
    <div class="card" style="width: 18rem;">
        <div class="card-body bg-primary">
            <h5 class="card-title text-white">${engineer.name}</h5>
            <h4 class="text-white">${engineer.getRole()} <i class="fas fa-glasses"></i></h4>

        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: ${engineer.email}</li>
            <li class="list-group-item">Github: ${engineer.github}</li>
        </ul>
    </div>
 </div>
    `
}

module.exports = engineerCard 