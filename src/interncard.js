function internCard (intern) {
    return `
    <div class="col">
                <div class="card" style="width: 18rem;">
                    <div class="card-body bg-primary">
                        <h2 class="card-title text-white">${intern.name}</h2>
                        <h5 class="text-white"><i class="fas fa-user-graduate"></i>${intern.getRole()}</h5>
        
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${intern.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                        <li class="list-group-item">School: ${intern.school}</li>
                    </ul>
                </div>
             </div>
    `
}

module.exports = internCard