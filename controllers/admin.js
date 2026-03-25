
module.exports.renderDashboard = (req, res) => {
    try{
        res.render("admin/dashboard");
    } catch(err){
        console.log(err.message);
        res.status(500).send("server error");
    }
}