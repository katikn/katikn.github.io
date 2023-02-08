// let points = 30;
// let chars = [0, 0, 0, 0];
// $('#hp').val(chars[0])
// $('#strength').val(chars[1])

// $("#plushp").click(function () {
//     if (points != 0) {
//         chars[0] += 1
//         points -= 1
//     }
//     $('#hp').val(chars[0])
//     $('#points').html(points)
// })

// $("#minushp").click(function () {
//     if (chars[0] > 0) {
//         chars[0] -= 1
//         points += 1
//     }
//     $('#hp').val(chars[0])
//     $('#points').html(points)
// })

// $("#plusstrength").click(function () {
//     if (points != 0) {
//         chars[1] += 1
//         points -= 1
//     }
//     $('#strength').val(chars[1])
//     $('#points').html(points)
// })

// $("#minusstrength").click(function () {
//     if (chars[1] > 0) {
//         chars[1] -= 1
//         points += 1
//     }
//     $('#strength').val(chars[1])
//     $('#points').html(points)
// })

let points = 0;
$("document").ready(function () { 
    $("#firstquestiondiv").hide();
    $('#secondquestiondiv').hide()
    $('#thirdquestiondiv').hide()
    $('#fourthquestiondiv').hide()
    $('#fifthquestiondiv').hide()
    $('#sixthquestiondiv').hide()
    $('#seventhquestiondiv').hide()
    $('#eigthquestiondiv').hide()
    $('#ninthquestiondiv').hide()
    $('#tenthquestiondiv').hide()
    $('#goto2quest').hide()
    $('#goto3quest').hide()
    $('#goto4quest').hide()
    $('#goto5quest').hide()
    $('#goto6quest').hide()
    $('#goto7quest').hide()
    $('#goto8quest').hide()
    $('#goto9quest').hide()
    $('#goto10quest').hide()
    $('#gotofinish').hide()
    $('#score').hide()
    $('#finish').hide()
});

$('#starttest').click(function() {
    $('#start').hide()
    $('#score').show()
    $('#firstquestiondiv').show()
})

$('#goto2quest').click(function(){
    $('#firstquestiondiv').hide()
    $('#secondquestiondiv').show()
})

$('#goto3quest').click(function(){
    $('#secondquestiondiv').hide()
    $('#thirdquestiondiv').show()
})

$('#goto4quest').click(function(){
    $('#thirdquestiondiv').hide()
    $('#fourthquestiondiv').show()
})

$('#goto5quest').click(function(){
    $('#fourthquestiondiv').hide()
    $('#fifthquestiondiv').show()
})

$('#goto6quest').click(function(){
    $('#fifthquestiondiv').hide()
    $('#sixthquestiondiv').show()
})

$('#goto7quest').click(function(){
    $('#sixthquestiondiv').hide()
    $('#seventhquestiondiv').show()
})

$('#goto8quest').click(function(){
    $('#seventhquestiondiv').hide()
    $('#eigthquestiondiv').show()
})

$('#goto9quest').click(function(){
    $('#eigthquestiondiv').hide()
    $('#ninthquestiondiv').show()
})

$('#goto10quest').click(function(){
    $('#ninthquestiondiv').hide()
    $('#tenthquestiondiv').show()
})

$('#gotofinish').click(function(){
    $('#tenthquestiondiv').hide()
    $('#finish').show()
    if (points >= 9){
        $('#itog').html("5")
        $('#itog2').html("Вы молодец! Так держать!")
    } else if (points >= 6 && points <= 8){
        $('#itog').html("4")
        $('#itog2').html("Хороший результат, но можно и лучше! ;)")
    } else if (points >= 3 && points <= 5){
        $('#itog').html("3")
        $('#itog2').html("Нужно больше стараться. (Тест можно перепройти заново, просто обновите страницу)")
    } else if (points >= 0 && points <= 2){
        $('#itog').html("2")
        $('#itog2').html("В следующий раз повезёт! (Тест можно перепройти заново, просто обновите страницу)")
    }
})



$('#submit1').click(function(){
    $('#submit1').hide()
    let a = $("input[name=firstquestion]:checked").val()
    if (a == 3){
        points += 1;
        $('#answer1').html('Это правильный ответ!')
        $('#points').html(points)
    } else {
        $('#answer1').html('Это был неправильный ответ :(')
    }
    $('#goto2quest').show()
})

$('#submit2').click(function(){
    $('#submit2').hide()
    let a = $("input[name=secondquestion]:checked").val()
    if (a == 2) {
        points += 1;
        $('#answer2').html('Это правильный ответ!')
        $('#points').html(points)
    } else {
        $('#answer2').html('Это был неправильный ответ :(')
    }
    $('#goto3quest').show()
})

$('#submit3').click(function(){
    $('#submit3').hide()
    let a = $("input[name=thirdquestion]:checked").val()
    if (a == 1) {
        points += 1;
        $('#answer3').html('Это правильный ответ!')
        $('#points').html(points)
    } else {
        $('#answer3').html('Это был неправильный ответ :(')
    }
    $('#goto4quest').show()
})

$('#submit4').click(function(){
    $('#submit4').hide()
    let a = $("input[name=fourthquestion]:checked").val()
    if (a == 4) {
        points += 1;
        $('#answer4').html('Это правильный ответ!')
        $('#points').html(points)
    } else {
        $('#answer4').html('Это был неправильный ответ :(')
    }
    $('#goto5quest').show()
})

$('#submit5').click(function(){
    $('#submit5').hide()
    let a = $("input[name=fifthquestion]:checked").val()
    if (a == 2) {
        points += 1;
        $('#answer5').html('Это правильный ответ!')
        $('#points').html(points)
    } else {
        $('#answer5').html('Это был неправильный ответ :(')
    }
    $('#goto6quest').show()
})

$('#submit6').click(function(){
    $('#submit6').hide()
    let a = $("input[name=sixthquestion]:checked").val()
    if (a == 1) {
        points += 1;
        $('#answer6').html('Это правильный ответ!')
        $('#points').html(points)
    } else {
        $('#answer6').html('Это был неправильный ответ :(')
    }
    $('#goto7quest').show()
})

$('#submit7').click(function(){
    $('#submit7').hide()
    let a = $("input[name=seventhquestion]:checked").val()
    if (a == 4) {
        points += 1;
        $('#answer7').html('Это правильный ответ!')
        $('#points').html(points)
    } else {
        $('#answer7').html('Это был неправильный ответ :(')
    }
    $('#goto8quest').show()
})

$('#submit8').click(function(){
    $('#submit8').hide()
    let a = $("input[name=eigthquestion]:checked").val()
    if (a == 3) {
        points += 1;
        $('#answer8').html('Это правильный ответ!')
        $('#points').html(points)
    } else {
        $('#answer8').html('Это был неправильный ответ :(')
    }
    $('#goto9quest').show()
})

$('#submit9').click(function(){
    $('#submit9').hide()
    let a = $("input[name=ninthquestion]:checked").val()
    if (a == 4) {
        points += 1;
        $('#answer9').html('Это правильный ответ!')
        $('#points').html(points)
    } else {
        $('#answer9').html('Это был неправильный ответ :(')
    }
    $('#goto10quest').show()
})

$('#submit10').click(function(){
    $('#submit10').hide()
    let a = $("input[name=tenthquestion]:checked").val()
    if (a == 1) {
        points += 1;
        $('#answer10').html('Это правильный ответ!')
        $('#points').html(points)
    } else {
        $('#answer10').html('Это был неправильный ответ :(')
    }
    $('#gotofinish').show()
})

