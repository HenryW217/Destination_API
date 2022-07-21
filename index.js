//init express enviornment.
const express = require("express");
const server = express();

// define port we will use.
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is listening on port:${PORT}`);
})

// DB will be used as callback info.
const destinationsDB = {
    123456: {
      destination: "Eiffel Tower",
      location: "Paris",
      photo:
        "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    234567: {
      destination: "Big Ben",
      location: "London",
      photo:
        "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    },
  };

  // get, client read function
server.get('/destinations', (req,res) => {
    res.send(destinationsDB)
});

// CREATE (OPTIONAL)
server.post
// READ => DO THIS
// GET /destinations => send back the whole db

// UPDATE (OPTIONAL)
server.put
// DELETE (OPTIONAL)


