function managerCard (manager) {
    return `
    <div class="col">
    <div class="card" style="width: 18rem;">
        <div class="card-body bg-primary">
            <h2 class="card-title text-white"> ${manager.name}</h2>
            <h5 class="text-white"><i class="fas fa-mug-hot"></i> ${manager.getRole()} </h5>

        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office Number: $${manager.officeNumber}</li>
        </ul>
    </div>
 </div>
    `
}

module.exports = managerCard