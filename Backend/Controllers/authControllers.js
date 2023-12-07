const mongoose = require("mongoose");
const User = require('../Models/User')

// Database Connection
var db = mongoose.connection;

// SIGNUP
exports.signup = ("/", async(req, res)=> 
{
    try{
        const passwordFormat = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,999})/
        // Password needs: 1 digit, 1 lowercase, 1 uppercase, 1 special character and length of 6 minimum.
        
        const data = req.body
        console.log("Body Data: ", data.name, data.email, data.password)

        // 1. Check password length and format.
        if(!passwordFormat.test(data.password) || data.password.length < 6){
            console.log("Format of password needs 1 digit, 1 lowercase, 1 uppercase, 1 special character and minimun 6 characters long")
            return res.status(400).send({
                status: false,
                status_code: 400,
                message: 'Password needs 1 digit, 1 lowercase, 1 uppercase, 1 special character and minimun 6 characters long'
            })
        }

        // 2. Check if email already exist.
        const user = await User.findOne({email:data.email}).exec()
        console.log("user: ", user)
        if(user === null ){ 
            console.log("Not Found any data for this mail.")
            const insertData = {
                "name": data.name,
                "email" : data.email,
                "password" : data.password,
            }
            
            // Adding Data to Database
            const insertUser = await User(insertData).save()  
            return res.json({
                status: true,
                status_code: 200,
                message: "created successfully",
            });
        }
        else{
            return res.json({
                status: false,
                status_code: 400,
                message: "email already exists",
            });
        }
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

// LOGIN
exports.login = ("/", async (req,res) => {
    try{
        // Getting Email and Password from User 
        const email= req.body.email         
        const password = req.body.password

        const user = await User.findOne({email:email})
        // console.log("user",user)
        if(user === null){
            return res.json({
                status: false,
                status_code: 400,
                message: "Account Not Found"
            })
        }
        if(user.password === password){

            const userbody= {email, password}
            console.log("Login Successful: ",userbody);

            return res.json({
                status: true,
                status_code: 200,
                message: "Login Successfully",
                data:{user}
            });
        }
        else{
            // If password is Incorrect
            console.log("password is incorrect")
            return res.json({
                status: false,
                status_code: 400,
                message: "Wrong Password"
              });
        }
    }
    catch{
        return res.json({
            status: false,
            status_code: 400,
            message: `error, ${err}`,
        });
    }
})

// EDIT ACCOUNT DETAILS
exports.update = ("/",async(req,res) => {
    try{

        const Check = await User.findOne({email:req.body.email}).exec()
        if(Check === null ){
            return res.json({
                status: false,
                status_code: 400,
                message: "Email not exists",
            });
        }
        else{
            const result = await User.updateOne({email:req.body.email},req.body)
            return res.json({
                status: true,
                status_code: 200,
                message: "successfully updated",
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
exports.showUser = ('/',async(req,res)=>{
    try{
        var Userbyid = await User.findOne({'email':req.params.email}).sort({ createdAt: -1 }).exec();
        if(Userbyid === null){
            return res.json({
                status: false,
                status_code: 400,
                message: "Email not exists",
            })
        }else{
            return res.json({
                status: true,
                status_code: 200,
                data: Userbyid,
                message: 'Data Fetched Successfully',
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

// DELETE DATA
exports.delete = ('/', async(req,res)=>{
    try{
        const result = await User.deleteOne({email:req.params.email}).exec();
        console.log(result)
        if(result.deletedCount == 1){
            return res.json({
                status: true,
                status_code: 200,
                message: 'Data Deleted Successfully',
            })
            
        }else{
            return res.json({
                status: false,
                status_code: 400,
                message: "Data not deleted",
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