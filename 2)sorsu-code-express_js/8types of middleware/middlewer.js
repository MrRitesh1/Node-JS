module.reqFilter = (req, resp, next) => {
    // console.log('reqFilter');
    if (!req.quire.age) {
        resp.send("Please provide age");
    } else if (req.quire.age < 18) {
        resp.send("You are under aged");
    }
    else {
        next();
    }
}