#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-

# program.cgi : generate program with register modal window.
# For WIDE camp and meeting.
# upa@haeena.net



import sys
import json
import time
from datetime import datetime

j = open ("program.json", 'r')
dump = json.load (j)
j.close ()


result = {"success":"true","message":"The Command Completed Successfully"};
req = json.load(sys.stdin)


failed = False


f = open ("log.txt", 'a')
f.write (json.dumps(req))
f.write ("\n")



if req["action"] != "edit" and req["action"] != "delete" :
    result["success"] = "failed"
    result["message"] = "invalid action"
    failed = True



if not failed :

    if req["action"] == "edit" :

        if not dump.has_key (req["slot_id"]) :
            dump[req["slot_id"]] = {}

        if not dump[req["slot_id"]].has_key (req["room_id"]) :
            dump[req["slot_id"]][req["room_id"]] = {}

        bof = dump[req["slot_id"]][req["room_id"]]

        if bof.has_key("edittime") :
            if bof["edittime"] > req["edittime"] :
                result["success"] = "failed"
                result["message"] = "conflict"
                failed = True

        if not failed :
            dump[req["slot_id"]][req["room_id"]] = req            


    if req["action"] == "delete" :

        if not dump.has_key (req["slot_id"]) :
            dump[req["slot_id"]] = {}

        if not dump[req["slot_id"]].has_key (req["room_id"]) :
            dump[req["slot_id"]][req["room_id"]] = {}

        bof = dump[req["slot_id"]][req["room_id"]]

        if bof.has_key("edittime") :
            if bof["edittime"] > req["edittime"] :
                result["success"] = "failed"
                result["message"] = "conflict"
                failed = True

        if not failed :
            dump[req["slot_id"]].pop (req["room_id"])


    j = open ("program.json", 'w')
    j.write (json.dumps(dump, indent = 4))
    j.close()


f.close()

print "Content-type: application/json\n\n"
print json.dumps(result)



