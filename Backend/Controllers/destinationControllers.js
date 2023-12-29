const mongoose = require("mongoose");
const Destination = require('../Models/Destination')
const User = require('../Models/User')


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
                // message: 'Destinations Fetched Successfully',
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

exports.searchDestination = async (req, res) => {
    try {
        const searchString = req.body.searchString;
  
      const results = await Destination.find({ 
        $or: [
            { name: { $regex: new RegExp(searchString, 'i') } },
            { country: { $regex: new RegExp(searchString, 'i') } },
            { state: { $regex: new RegExp(searchString, 'i') } },
            { city: { $regex: new RegExp(searchString, 'i') } },
          ],
       })
        .sort({ createdAt: -1 })
        .exec();
  
      if (results.length === 0) {
        return res.json({
          status: false,
          status_code: 400,
          message: "No destinations found matching the search criteria",
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

exports.favorite = ("/", async(req, res) => {
    try{
        const destination = req.params._id
        console.log("destination ID and body ", destination, req.body.email)
        const user = await User.findOne({email:req.body.email}).exec()
        if(user === null ){
            console.log("User not found")
            return res.json({
                status: false,
                status_code: 400,
                message: "Email not exists",
            });
        }
        else{
            // Check if the destination ID already exists in the favorites array. Only one button will used to both add and remove destinations from favorite.
            const isDestinationInFavorites = user.favorites.includes(destination);

            // If not in favorite list then add it.
            if (!isDestinationInFavorites) {

                // Update the favorites array
                await User.updateOne(
                    { email: req.body.email },
                    { $push: { favorites: destination } }
                ).exec();

                console.log("Destination added to favorites");
                const updatedUser = await User.findOne({ email: req.body.email }).exec();

                return res.json({
                    status: true,
                    status_code: 200,
                    message: "Destination added to favorites",
                    data: updatedUser.favorites
                });
            } 
            // If already in favorite list then remove it.
            else {

                await User.updateOne(
                    { email: req.body.email },
                    { $pull: { favorites: destination } }
                ).exec();

                console.log("Destination removed from favorites");
                const updatedUser = await User.findOne({ email: req.body.email }).exec();

                return res.json({
                    status: true,
                    status_code: 200,
                    message: "Destination removed from favorites",
                    data: updatedUser.favorites
                });
            }
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