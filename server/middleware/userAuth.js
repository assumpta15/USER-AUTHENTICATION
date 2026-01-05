// import jwt from "jsonwebtoken";

// const userAuth = async (req, res, next) =>{
//     const {token} = req.cookies;

//     if(!token){
//         return res.json({success: false, message: 'Not authorized. Login Again'});
//     }

//     try {
//       const tokenDecode =  jwt.verify(token, process.env.JWT_SECRET);

//       if(tokenDecode.id){
//         req.body.userId = tokenDecode.id
//       }else{
//         return res.json({success: false, message: 'Not authorized. Login Again'})
//       }

//       next();
//     } catch (error) {
//          return res.json({success: false, message: error.message});
//     }
// }


// export default userAuth;




import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.json({ success: false, message: "Not authorized. Login Again" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded?.id) {
      return res.json({ success: false, message: "Invalid token. Login Again" });
    }

    req.userId = decoded.id; 
    next();
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export default userAuth;
