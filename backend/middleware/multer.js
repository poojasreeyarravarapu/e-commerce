import multer from "multer";

const storage = multer.diskStorage({
    filename: function(req, file, callback){
        callback(null, file.originalname)
    }
})

//we have to keep name as storage otherwise it wont work
const upload = multer({storage})

export default upload