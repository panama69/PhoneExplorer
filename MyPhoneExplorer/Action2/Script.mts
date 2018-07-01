Device("Device").App("Home").MobileLabel("Apps").Tap
Device("Device").App("Home").MobileLabel("Contacts").Tap
Device("Device").App("Contacts").MobileButton("add new contact").Tap
Device("Device").App("Contacts").MobileEdit("Name").SetFocus
Device("Device").EnterKeys 0,"corndog prontopup"
Device("Device").App("Contacts").MobileEdit("PhoneNumber").SetFocus
Device("Device").EnterKeys 0,"6129163944"
Device("Device").App("Contacts").MobileLabel("Save").Tap
Device("Device").Home
