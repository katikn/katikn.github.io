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
    $('#goto2quest').hide()
    $('#goto3quest').hide()
    $('#goto4quest').hide()
    $('#score').hide()
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

$('#submit1').click(function(){
    $('#submit1').hide()
    let a1 = $("input[name=firstquestion]:checked").val()
    if (a1 == 3){
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
    let a2 = $("input[name=secondquestion]:checked").val()
    if (a2 == 2) {
        points += 1;
        $('#answer2').html('Это правильный ответ!')
        $('#points').html(points)
    } else {
        $('#answer2').html('Это был неправильный ответ :(')
    }
    $('#goto3quest').show()
})

