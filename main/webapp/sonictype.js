/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    var rootURL = "http://localhost:8080/webapi/sonictype";

    document.getElementById("response").addEventListener("keyup", function() { //works

    //$("#response").keypress()(function () {

        if ($("#response").text() === $("#target").text()) {
            alert("yo");
            $("#target").css("color, green");

        } else if (!($("#response").text() === "")) {
            $("#response").css("background-color, red");
        } 
    });
});