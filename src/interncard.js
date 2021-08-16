function internCard (intern) {
    return `
    <div class="col">
                <div class="card" style="width: 18rem;">
                    <div class="card-body bg-primary">
                        <h5 class="card-title text-white">${intern.name}</h5>
                        <h4 class="text-white">${intern.getRole()} <i class="fas fa-user-graduate"></i></h4>
        
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${intern.id}</li>
                        <li class="list-group-item">Email: ${intern.email}</li>
                        <li class="list-group-item">School: ${intern.school}</li>
                    </ul>
                </div>
             </div>
    `
}

module.exports = internCard