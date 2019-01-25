$(function () {
    var button = $("#add_movie_button").click(function() {
        var newMovie = $("#add_movie").val();
        $("#movie_list").append('<li>'+newMovie+'</li>');
        $("#add_movie").val('')
    })
});