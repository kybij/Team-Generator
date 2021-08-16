function managerCard (manager) {
    return `
    <div class="col">
    <div class="card" style="width: 18rem;">
        <div class="card-body bg-primary">
            <h5 class="card-title text-white"> ${manager.name}</h5>
            <h4 class="text-white"> ${manager.getRole()} <i class="fas fa-mug-hot"></i></h4>

        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: ${manager.email}</li>
            <li class="list-group-item">Office Number: $${manager.officeNumber}</li>
        </ul>
    </div>
 </div>
    `
}

module.exports = managerCard