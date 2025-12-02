// import jwt from 'jsonwebtoken'


// // User authentication middleware

// const authUser = async (req,res, next)=>{
//     try {
//         const {token} = req.headers
//         if(!token){
//             res.json({success:false,message:"Not Authorized Login Again"})
//         }
//         const token_decode = jwt.verify(token,process.env.JWT_SECRET)
//         req.body.userId = token_decode.id
//         next()
        
//     } catch (error) {
//         console.log(error);
//     res.json({ success: false, message: error.message });
//     }
// }

// export default authUser;

import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
  try {
    const token = req.headers.token || req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }

    const cleanToken = token.startsWith("Bearer ")
      ? token.split(" ")[1]
      : token;

    const decoded = jwt.verify(cleanToken, process.env.JWT_SECRET);

    // IMPORTANT: DO NOT TOUCH req.body
    req.userId = decoded.id; // safe & correct

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

export default authUser;
