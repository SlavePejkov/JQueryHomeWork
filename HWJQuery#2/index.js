let firstInputText = $("#myText")
let secondInputColor = $("#myColor")
let myBtn = $("#myBtn")
let usersInput = $("#usersInput")

$("#myBtn").click(function(){
    
    $("#usersInput").append($("#myText").val())
    
    $("#usersInput").append($("#myColor").val());

    if (firstInputText.val() == ""){
        alert("You need to write something")
    }
})


