# Passport Group Work: Rory, Mike P., Eric, and Nestor.

## Query:
db.getCollection('users').updateOne({username: "bobby"}, {$push: {shelfItems: {description: "taco", url: "google.com"}}},{upsert:true});


