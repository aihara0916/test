/* 
 * program.js : generate program with register modal window.
 * For WIDE camp and meeting.
 * 
 * upa@haeena.net
 */

var timeslots =  [ 
    /* Day 2 */
    { "name" : "7:30 - 9:00",   "id" : "slot-day2-breakfast", "colspan" : 3, },
    { "name" : "9:00 - 9:30",   "id" : "slot-day2-1",},
    { "name" : "9:30 - 12:00",  "id" : "slot-day2-2", },
    { "name" : "12:00 - 13:00", "id" : "slot-day2-lunch", "colspan" : 3, },
    { "name" : "13:00 - 16:00", "id" : "slot-day2-3", },
    { "name" : "16:00 - 17:00", "id" : "slot-day2-4", },
    { "name" : "17:00 - 18:00", "id" : "slot-day2-5", },
    { "name" : "18:00 - 19:30", "id" : "slot-day2-dinner", "colspan" : 3, },
    { "name" : "19:30 - 21:00", "id" : "slot-day2-6", },
    { "name" : "21:00 - 24:00", "id" : "slot-day2-winetime", "colspan" : 3, },

    /* Day 3 */
    { "name" : "7:30 - 9:00",   "id" : "slot-day3-breakfast", "colspan" : 3, },
    { "name" : "9:00 - 10:30",  "id" : "slot-day3-1", },
    { "name" : "10:30 - 12:00", "id" : "slot-day3-2", },
    { "name" : "12:00 - 13:00", "id" : "slot-day3-lunch", "colspan" : 3, },
    { "name" : "13:00 - 14:30", "id" : "slot-day3-3", },
    { "name" : "14:30 - 16:00", "id" : "slot-day3-4", },
    { "name" : "16:00 - 18:00", "id" : "slot-day3-5", },
    { "name" : "18:00 - 19:30", "id" : "slot-day3-dinner", "colspan" : 3, },
    { "name" : "19:30 - 21:00", "id" : "slot-day3-6", },
    { "name" : "21:00 - 22:30", "id" : "slot-day3-7", },
    { "name" : "22:30 - 24:00", "id" : "slot-day3-winetime", "colspan" : 3, },

]

var rooms = [
    { "id" : "plenary", "name" : "Plenary" },
    { "id" : "bof1",    "name" : "BoF Room 1" },
    { "id" : "bof2",    "name" : "BoF Room 2" }
]

/* for static slots */
var staticslots = [

    /* Day 2 */
    { "slot_id" : "slot-day2-breakfast", "room_id" : "plenary",
      "content" : "Breakfast",
    },
    { "slot_id" : "slot-day2-1", "room_id" : "plenary",
      "content" : "<div class=\"bold\"> Keynote by Liu Dong from BII </div>",
    },
    { "slot_id" : "slot-day2-2", "room_id" : "plenary",
      "content" : "<div class=\"bold\"> Unconference </div>",
    },
    { "slot_id" : "slot-day2-lunch", "room_id" : "plenary",
      "content" : "Lunch",
    },
    { "slot_id" : "slot-day2-3", "room_id" : "plenary",
      "content" : "<div class=\"bold\"> Unconference </div>",
    },
    { "slot_id" : "slot-day2-dinner", "room_id" : "plenary",
      "content" : "Dinner",
    },
    { "slot_id" : "slot-day2-winetime", "room_id" : "plenary",
      "content" : "Wine time",
    },

    /* Day 3 */
    { "slot_id" : "slot-day3-breakfast", "room_id" : "plenary",
      "content" : "Breakfast",
    },
    { "slot_id" : "slot-day3-1", "room_id" : "plenary",
      "content" : "<div class=\"bold\"> Unconference </div>",
    },
    { "slot_id" : "slot-day3-2", "room_id" : "plenary",
      "content" : "<div class=\"bold\"> Unconference </div>",
    },
    { "slot_id" : "slot-day3-lunch", "room_id" : "plenary",
      "content" : "Lunch",
    },
    { "slot_id" : "slot-day3-3", "room_id" : "plenary",
      "content" : "<div class=\"bold\"> Unconference </div>",
    },
    { "slot_id" : "slot-day3-4", "room_id" : "plenary",
      "content" : "<div class=\"bold\"> Unconference </div>",
    },
    { "slot_id" : "slot-day3-6", "room_id" : "plenary",
      "content" : "<div class=\"bold\"> Unconference </div>",
    },
    { "slot_id" : "slot-day3-7", "room_id" : "plenary",
      "content" : "<div class=\"bold\"> Poster Session </div>",
    },
    { "slot_id" : "slot-day3-dinner", "room_id" : "plenary",
      "content" : "Dinner",
    },
    { "slot_id" : "slot-day3-winetime", "room_id" : "plenary",
      "content" : "Wine time",
    },

]



/* for invalid slot */
var invalid = [
    { "slot_id" : "slot-day2-2", "room_id" : "bof1", "status" : false },
    { "slot_id" : "slot-day2-2", "room_id" : "bof2", "status" : false },
    { "slot_id" : "slot-day2-3", "room_id" : "bof1", "status" : false },
    { "slot_id" : "slot-day2-3", "room_id" : "bof2", "status" : false },
    { "slot_id" : "slot-day2-6", "room_id" : "bof1", "status" : false },
    { "slot_id" : "slot-day2-6", "room_id" : "bof2", "status" : false },
    { "slot_id" : "slot-day3-5", "room_id" : "bof1", "status" : false },
    { "slot_id" : "slot-day3-5", "room_id" : "bof2", "status" : false },
    { "slot_id" : "slot-day3-7", "room_id" : "bof1", "status" : false },
    { "slot_id" : "slot-day3-7", "room_id" : "bof2", "status" : false },
]



var bofs; /* filled by wide_program_insert */
var edittime; /* filled when edit of slot is clicked */


function slot_id2name (slot_id) {
    for (var x = 0; x < timeslots.length; x++) {
	if (timeslots[x]["id"] == slot_id) {
	    return timeslots[x]["name"];
	}
    }
}

function room_id2name (room_id) {
    for (var x = 0; x < rooms.length; x++) {
	if (rooms[x]["id"] == room_id) {
	    return rooms[x]["name"];
	}
    }
}

function is_invalid_slot (slot_id, room_id) {

    var content = "";

    for (x in invalid) {
	if (invalid[x]["slot_id"] == slot_id &&
	    invalid[x]["room_id"] == room_id &&
	    invalid[x]["status"] == false) {
	    return true;
	}
    }
    return false;
}

function is_static_slot (slot_id, room_id) {

    var content = "";

    for (x in staticslots) {
	if (staticslots[x]["slot_id"] == slot_id &&
	    staticslots[x]["room_id"] == room_id) {
	    return staticslots[x]["content"];
	}
    }
    return false;
}


function wide_program (slotlist, program_id, topexist) {
    
    /* add tr th for name of rooms */
    if (topexist) {
	var roomstring = "<tr class=program-top> " +
	    "<th class=program-column-time></th> ";
	for (var x in rooms) {
 	    var room = rooms[x];
	    roomstring += "<th class=program-column-slot> " 
		+ room["name"] + " </th> ";
	}
	roomstring += " </tr>"
	$("#" + program_id).append (roomstring);
    }

    /* add each programs */
    for (var x in timeslots) {

	var slot = timeslots[x];

	if ($.inArray(slot["id"], slotlist) < 0) {
	    continue;
	}
	
	var slotstring = "<tr> <th class=program-column-time> "
	    + slot["name"] + " </th>";

	for (var y = 0; y < rooms.length; y++) {

	    var room = rooms[y];

	    var colspanstring = "";
	    if (slot["colspan"]) {
		    colspanstring = " colspan=" + slot["colspan"] + " ";
		    y += slot["colspan"];
	    }

	    /* search slot info from program.json by slot.id and room.id ? */
	    slotstring += "<td " + colspanstring + " "
		    + "class=\"" + slot["id"] + " " + room["id"]
		    + " " + "program-column-slot" + "\"></td>";
	}
	slotstring += "</tr>";

	$("#" + program_id).append(slotstring);

    }

    return;
}


function wide_program_insert () {
    /* Get program json and add insert all programs to tables.
     * This function must be called once on last of html page.
     */
    
    $.getJSON("program.json", function(data) { insert_program(data); });
}

function edit_slot_content(slot, room) {

    var hoge = ""
    hoge += "<i class=\"fa fa-pencil-square-o program-edit-btn\"";
    hoge += "onClick=onclick_edit(\"" + slot["id"] + "," + room["id"] + "\")";
    hoge += "></i>";

    hoge += "<i class=\"fa fa-trash-o program-edit-btn\"";
    hoge += "onClick=onclick_trash(\"" + slot["id"] + "," + room["id"] + "\")";
    hoge += "></i>";

    return hoge;
}

function edit_empty_content(slot, room) {

    var hoge = ""
    hoge += "<i class=\"fa fa-pencil-square-o program-edit-btn\"";
    hoge += "onClick=onclick_edit(\"" + slot["id"] + "," + room["id"] + "\")";
    hoge += "></i>";
    return hoge;
}


function find_bofobj(data, slot, room) {

    var content = "";

    if (slot["id"] in data == false) {
	return undefined;
    }
    
    if (room["id"] in data[slot["id"]] == false) {
	return undefined;
    }

    return bofobj = data[slot["id"]][room["id"]];
}


function insert_program(data) {
    
    bofs = data;

    for (var x in timeslots) {
	var slot = timeslots[x];

	for (y = 0; y < rooms.length; y++) {
	    var bofstr = "";
	    var room = rooms[y];
	    
	    var slotclass = "." + slot["id"] + "." + room["id"];

	    /* check: does static content exist */
	    var content = is_static_slot (slot["id"], room["id"]);
	    if (content) {
		bofstr = content;
		$(slotclass).append (bofstr);
		continue;
	    }

	    if (is_invalid_slot (slot["id"], room["id"])) {
		bofstr = "";
		$(slotclass).append (bofstr);
		continue;
	    }

	    var bofobj = find_bofobj(data, slot, room);

	    if (bofobj == undefined) {
		bofstr = "<p> Empty slot" 
		    + edit_empty_content(slot, room) + "</p>";
		$(slotclass).append (bofstr);
		continue;
	    }

	    bofstr = "";

	    var titleid = "title-" + slot["id"] + "-" + room["id"]
	    bofstr += "<div class=program-bold id=" + titleid + "></div>";

	    var memoid = "memo-" + slot["id"] + "-" + room["id"]
	    bofstr += "<div id=" + memoid + "></div>";

	    bofstr += "<p>";
	    bofstr += "<span class=> Newcomer : " 
		+ bofobj["newcomer"] + " </span>";
	    if (bofobj["closed"] == "closed") {
		bofstr += ". <span class=program-bold> Closed. </span>";
	    }
	    bofstr +=  edit_slot_content(slot, room)
	    bofstr += "</p>";

	    $(slotclass).append (bofstr);
	    $("#" + memoid).append ($.parseHTML(bofobj["memo"]));

	    if (bofobj["wg"] == "non-wg" || bofobj["wg"] == null) {
		$("#" + titleid).append ($.parseHTML(bofobj["title"]));
	    } else {
		$("#" + titleid).append ($.parseHTML(bofobj["wg"]));
	    }

	}
    }
}

function onclick_edit(ids) {
    
    /* edit modal */

    var a = ids.split(",");
    var slot_id = a[0];
    var room_id = a[1];

    var slot_name = slot_id2name (slot_id);
    var room_name = room_id2name (room_id);

    edittime = parseInt((new Date)/1000);

    $("#program-modal-room").html(room_name);
    $("#program-modal-slot").html(slot_name);
    //wn = '.' + $(this).data('tgt');
    wn = ".program-edit";
    var mW = $(wn).find('.modalBody').innerWidth() / 2;
    var mH = $(wn).find('.modalBody').innerHeight() / 2;
    $(wn).find('.modalBody').css({'margin-left':-mW,'margin-top':-mH});
    $(wn).fadeIn(100);

    /* setup form values */
    $("#program-form-title").val("");
    $("#program-form-wg").val("");
    $("#program-form-memo").val("");
    $("#program-form-newcomer").val(4);
    $("#program-form-closed").prop('checked', false);

    $("#program-form-wg").val("non-wg");
    if (slot_id in bofs == true) {
	if (room_id in bofs[slot_id] == true) {
	    var bof = bofs[slot_id][room_id];
	    $("#program-form-title").val(bof["title"]);
	    $("#program-form-wg").val(bof["wg"]);
	    $("#program-form-memo").val(bof["memo"]);
	    $("#program-form-newcomer").val(bof["newcomer"]);
	    if (bof["closed"] == "closed") {
		$("#program-form-closed").prop('checked', true);
	    } else {
		$("#program-form-closed").prop('checked', false);
	    }
	}
    }


    $("#submit-btn").click(function(){
	/* submit forms  */
	
	jsondata = {
	    "slot_id"  : slot_id,
	    "room_id"  : room_id,
	    "title"    : $("#program-form-title").val(),
	    "wg"       : $("#program-form-wg").val(),
	    "memo"     : $("#program-form-memo").val(),
	    "newcomer" : $("#program-form-newcomer").val(),
	    "closed"   : $("#program-form-closed:checked").val(),
	    "action"   : "edit",
	    "edittime" : edittime,
	}

	$.ajax(
	    {
		url:'program.cgi',
		type: 'POST',
		data:JSON.stringify(jsondata),
		dataType: 'json',
		contetnType: 'application/json'
	    })
	    .done(function(data, textStatus, jqXHR){
		console.log (data);
		if (data["success"] == "failed") {
		    if (data["message"] == "invalid action") {
			alert("Invalid action. please contact admin.");
		    } else if (data["message"] == "conflict") {
			alert("Commit conflict. Sorry, " +
			      "try again later.");
			window.location.reload();
		    } else {
			alert(data["message"]);
		    }
		} else {
		    window.location.reload();
		}
	    })
	    .fail(function(jqXHR, textStatus, errorThrown){
		alert("Post submit data failed: " + textStatus);
	    });
    });
}

function onclick_trash(ids) {

    /* delete modal */

    var a = ids.split(",");
    var slot_id = a[0];
    var room_id = a[1];

    var slot_name = slot_id2name (slot_id);
    var room_name = room_id2name (room_id);

    edittime = parseInt((new Date)/1000);

    $("#delete-modal-room").html(room_name);
    $("#delete-modal-slot").html(slot_name);

    //wn = '.' + $(this).data('tgt');
    wn = ".program-delete";
    var mW = $(wn).find('.modalBody').innerWidth() / 2;
    var mH = $(wn).find('.modalBody').innerHeight() / 2;
    $(wn).find('.modalBody').css({'margin-left':-mW,'margin-top':-mH});
    $(wn).fadeIn(100);

    $("#delete-btn").click(function(){
	/* submit forms  */
	
	jsondata = {
	    "slot_id" : slot_id,
	    "room_id" : room_id,
	    "action" : "delete",
	    "edittime" : edittime,
	}

	$.ajax(
	    {
		url:'program.cgi',
		type: 'POST',
		data:JSON.stringify(jsondata),
		dataType: 'json',
		contetnType: 'application/json'
	    })
	    .done(function(data, textStatus, jqXHR){
		console.log (data);
		window.location.reload();
	    })
	    .fail(function(jqXHR, textStatus, errorThrown){
		alert("Post submit data failed: " + textStatus);
	    });
    });

    return;
}

$(function(){
    /*
    $('.program-edit-btn').click(function(){
	wn = '.' + $(this).data('tgt');
	var mW = $(wn).find('.modalBody').innerWidth() / 2;
	var mH = $(wn).find('.modalBody').innerHeight() / 2;
	$(wn).find('.modalBody').css({'margin-left':-mW,'margin-top':-mH});
	$(wn).fadeIn(200);
    });
    */
    $('.program-edit-close').click(function(){
	$(wn).fadeOut(100);
    });
    $('.program-delete-close').click(function(){
	$(wn).fadeOut(100);
    });
});
