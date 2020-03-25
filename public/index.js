$(function () {

    let usersList = $('#users-list')

    fetchProducts(function (users) {
        usersList.empty()
        for (user of users) {
            usersList.append(createProductCard(user))
        }
    })

})