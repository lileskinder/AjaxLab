$(function () {
    $("#send").click(updateGuests);
});

function updateGuests() {
    var first = $("#first").val();
    var last = $("#last").val();

    $.ajax("guest.ajax", {
        "type": "post",
        "data": {
            "first": first,
            "last": last
        }
    }).done(displayGuests);
}

function displayGuests(data) {
    let items = JSON.parse(JSON.stringify(data));
    console.log(items);
    console.log(items.length);

    let ul = $("#nameList").empty();
    $.each(items, function (index, value) {
        const li = $('<li>').append(value.first + ' ' + value.last);
        ul.append(li);
    });
    // for (let i = 0; i < items.length; i++) {
    //     ul.append($('<li>'+items[i].first + ' ' + items[i].last+'</li>'));
    // }
    // const li = $('<li>').append("asdfasdf");
    // ul.append(li);
    $("#guestList").append(ul);
    // $("#guestList").append();


}