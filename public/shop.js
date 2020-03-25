
function fetchUsers (done) {
    $.get('/api/users', function (data) {
        done(data)
    })
}
function addUser(name,age,city,done){
    $.post('/api/users',{
        name: name,
        age: age,
        city: city
    }, function(data){
        done(data)
    })
}

function createUserCard (user) {
    return $(`
    <div class="col-4 card mx-2 p-4">
        <h4 class="user-name">${user.name}</h4>
        <div class="user-age">${user.age}</div>
        <div class="user-city">${user.city}</div>
    </div>`
        )
}
