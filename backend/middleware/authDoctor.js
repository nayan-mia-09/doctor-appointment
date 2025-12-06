import jwt from "jsonwebtoken";

const authDoctor = (req, res, next) => {
  try {
    const dToken = req.headers.authorization?.split(" ")[1] || req.headers.token;

    if (!dToken) {
      return res.status(401).json({ success: false, message: "Not Authorized Login Again" });
    }

    const decoded = jwt.verify(dToken, process.env.JWT_SECRET);
    req.docId = decoded.id; // attach doctor ID safely

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

export default authDoctor;
