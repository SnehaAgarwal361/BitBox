const User = require("../models/user");
const Food = require("../models/food");
const jwt = require('jsonwebtoken');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

exports.signout = (req, res) => {
    res.clearCookie("token");
    res.json({
        "message": "Signout"
    });
}


exports.signin = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email }, (err, user) => {
        if (err)
            return res.status(400).json({
                error: "User email does not exits"
            });
        else {
            if (user == null) {
                res.status(400).json({
                    error: "No User found"
                });
            }
            else {
                if (user.password === password) {
                    const token = jwt.sign({ _id: user._id }, "shhhh")
                    res.cookie("token", token, { expire: new Date() + 9999 });
                    const { _id, name, email, role , first_name, last_name,city,address,telephone,mobile,img} = user;
                    return res.json({ token, user: { _id, name, email, role, first_name, last_name, city,address, telephone, mobile, img } })
                }
                else {
                    res.status(400).json({
                        error: "Password doen't match"
                    });
                }
            }
        }
    })

}



exports.signup = (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => {
        if (err)
            return res.status(400).json({
                err: "Not Able to save user"
            });
        else
            res.json({
                username: user.username,
                email: user.email,
                id: user._id
            });
    });
}

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });


exports.update = (upload.single('img'),(req, res) => {
    const { email } = req.body;
    const { _id,  first_name, last_name,city,address,telephone,mobile, img} = req.body;
    console.log(email+ first_name);
    User.findOneAndUpdate((email, {first_name, last_name,city,address,telephone, mobile, img})).then(()=>{
        
                res.clearCookie("token");
                    const token = jwt.sign({ _id }, "shhhh")
                    res.cookie("token", token, { expire: new Date() + 9999 });
                    
                    return res.json({ token, user: { _id,  email, first_name, last_name, city,address, telephone, mobile,img } })
            
     } ).catch((err)=>console.log(err));
    }
)


exports.food = (req, res) => {
    Food.find((err, food) => {
        
            return res.json({food})
        
    })

}
