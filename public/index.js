$(function () {

    let usersList = $('#users-list')
    
    fetchUsers(function (users) {
        usersList.empty()
        for (user of users) {
            usersList.append(createUserCard(user))
        }
    })

})