const User = require("../../models/dashboard/login"); 
const cloudinary = require("../../utils/cloudinary");


/*** update user through edit users ***/
const update_user = async (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  try {
    let data = await User.findById(id);
    let image_upload;
    if (req.file) {
      await cloudinary.uploader.destroy(data.image_id);
      image_upload = await cloudinary.uploader.upload(req.file.path);
    }
    let record = {
      name: name,
      email: email,
      image: image_upload && image_upload.secure_url,
      image_id: image_upload && image_upload.public_id,
    };
    const user = await User.findByIdAndUpdate(req.params.id, record, {
      new: true,
    })
    res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.status(409).send({ message: err });
  }
};




/*** Export all functions ***/
module.exports = { update_user };