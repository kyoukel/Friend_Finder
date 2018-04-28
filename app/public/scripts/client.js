$('#surveyBtn').on('click', function (event) {
    event.preventDefault();
    const data = $(this).parent().serialize();
    $.post('./api/matches', data)
        .then(response => console.log(response))
})