exports.seed = function(knex, Promise) {
  return knex("posts").insert([
    {
      id:1,
      couple_name: "Seema and Anish's Wedding",
      wedding_theme: "Traditional",
      wedding_date: "2019-07-28",
      item_photo:
        "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      wedding_location: "Austin, TX",
      wedding_photographer: "Sam Smith",
      user_id: 1
    },
    {  id:2,
      couple_name: "James and Lynn's Wedding",
      wedding_theme: "Modern",
      wedding_date: "2019-08-24",
      item_photo:
        "https://images.unsplash.com/photo-1507504031003-b417219a0fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      wedding_location: "Fremont, CA",
      wedding_photographer: "Kate Khan",
      user_id: 2
    },
    { 
      id:3,
      couple_name: "Eric and Jessica's Wedding",
      wedding_theme: "Rustic",
      wedding_date: "2019-07-14",
      item_photo:
        "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      wedding_location: "Boston, Massachusetts",
      wedding_photographer: "Sheena Ali",
      user_id: 3
    },
    {
      id:4,
      couple_name: "Shruti and Badri's Wedding",
      wedding_theme: "Country",
      wedding_date: "2019-01-24",
      item_photo:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      wedding_location: "Nebraska, NE",
      wedding_photographer: "Tim Young",
      user_id: 1
    },
    { 
      id:5,
      couple_name: "Josh and Jasmine's Wedding",
      wedding_theme: "Traditional",
      wedding_date: "2018-07-08",
      item_photo:
        "https://images.unsplash.com/photo-1482482097755-0b595893ba63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      wedding_location: "California, CA",
      wedding_photographer: "John Smith",
      user_id: 2
    },
    {
       id:6,
      couple_name: "Stewart and Jen's Wedding",
      wedding_theme: "Modern",
      wedding_date: "2016-06-19",
      item_photo:
        "https://images.unsplash.com/photo-1459501462159-97d5bded1416?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      wedding_location: "Los Angelos, CA",
      wedding_photographer: "Lynn Yang",
      user_id: 3
    },
    {  id:7,
      couple_name: "Larry & Lucy's Wedding",
      wedding_theme: "Rustic",
      wedding_date: "2018-14-27",
      item_photo:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      wedding_location: "Nebraska, NE",
      wedding_photographer: "James Bonebrake",
      user_id: 1
    },
    {  id:8,
      couple_name: "Cynthia & Erica's Wedding",
      wedding_theme: "Traditional",
      wedding_date: "2018-13-22",
      item_photo:
        "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      wedding_location: "Nebraska, NE",
      wedding_photographer: "Rick Khan",
      user_id: 2
    },
    {  id:9,
      couple_name: "Sherjang and Sushma's Wedding",
      wedding_theme: "Modern",
      wedding_date: "2019-18-22",
      item_photo:
        "https://images.unsplash.com/photo-1509927083803-4bd519298ac4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      wedding_location: "Manhattan, NY",
      wedding_photographer: "Shruti Malik",
      user_id: 3
    }
  ]);
};