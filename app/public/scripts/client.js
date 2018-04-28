$('#surveyBtn').on('click', function (event) {
    event.preventDefault();
    const data = $(this).parent().serialize();
    $.post('./api/matches', data)
        .then(response => console.log(response))
})

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}