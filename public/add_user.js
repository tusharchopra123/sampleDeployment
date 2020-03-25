$(function(){
let userName = $('#userName')
let userAge = $('#userAge')
let userCity = $('#userCity')



    $('#btnUserAdd').click(function(){
        addProduct(userName.val(),userAge.val(),userCity.val(),
        function(addedUser){
            window.alert("Added"+ addedUser.name + " to Database")
        }
        )
    })



})