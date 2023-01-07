console.log("CONNECTED");

let getButton = $("#myBtn")
let getH1 = $("#myH1")
let getDiv = $("#myDiv")
let myText = $("#myText")


// $("#myBtn").click(function(){
//     $("#myH1").append($("#myText").val())
// })

getButton.click(function(){
    getH1.append(myText.val())
})
