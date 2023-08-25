const mongoose = require("mongoose");
const Destination = require('../Models/Destination')

// Database Connection
var db = mongoose.connection;

// SIGNUP
exports.addDestination = ("/", async(req, res)=> 
{
    try{
        console.log(req.body)
                        
        const data = {
            "name": req.body.name,
            "country": req.body.country,
            "state": req.body.state,
            "city": req.body.city,
            "description": req.body.description,
            "writer": req.body.writer,
            "image": req.body.image
        }   

        // Adding Data to Database
        const insertDestination = await Destination(data).save()  
        return res.json({
            status: true,
            status_code: 200,
            message: "New destination added successfully",
        });

    }catch(err) {
        // If any on the data remain null.
        return res.json({
            status: false,
            status_code: 400,
            message: `error, ${err}`,
        });
    }
}
) 

// EDIT ACCOUNT DETAILS
exports.updateDestination = ("/",async(req,res) => {
    try{

        const Check = await Destination.findOne({_id:req.body._id}).exec()
        if(Check === null ){
            return res.json({
                status: false,
                status_code: 400,
                message: "Destination not exists",
            });
        }
        else{
            const result = await Destination.updateOne({_id:req.body._id},req.body)
            return res.json({
                status: true,
                status_code: 200,
                message: "destination successfully updated",
            });
        }
    }
    catch(err) {
        return res.json({
            status: false,
            status_code: 400,
            message: `error, ${err}`,
        });
    }
})

// Get User Info.
exports.showDestination = ('/',async(req,res)=>{
    try{
        var result = await Destination.findOne({'_id':req.params._id}).sort({ createdAt: -1 }).exec();
        if(result === null){
            return res.json({
                status: false,
                status_code: 400,
                message: "Destination not exists",
            })
        }else{
            return res.json({
                status: true,
                status_code: 200,
                data: result,
                message: 'Destination Fetched Successfully',
            });
        }
    }
    catch(err){
        return res.json({
            status: false,
            status_code: 400,
            message: `error, ${err}`,
        });
    }
})

exports.getAllDestinations = async (req, res) => {
    try {
        var results = await Destination.find().sort({ createdAt: -1 }).exec();
        
        if (results.length === 0) {
            return res.json({
                status: false,
                status_code: 400,
                message: "No destinations found",
            });
        } else {
            return res.json({
                status: true,
                status_code: 200,
                data: results,
                message: 'Destinations Fetched Successfully',
            });
        }
    } catch (err) {
        return res.json({
            status: false,
            status_code: 400,
            message: `Error: ${err}`,
        });
    }
};


// DELETE DATA
exports.deleteDestination = ('/', async(req,res)=>{
    try{
        const result = await Destination.deleteOne({_id:req.params._id}).exec();
        console.log(result)
        if(result.deletedCount == 1){
            return res.json({
                status: true,
                status_code: 200,
                message: 'Destination Deleted Successfully',
            })
            
        }else{
            return res.json({
                status: false,
                status_code: 400,
                message: "Destination not deleted",
            })
        }
    }
    catch(err){
        return res.json({
            status: false,
            status_code: 400,
            message: `error, ${err}`,
        });
    }

})