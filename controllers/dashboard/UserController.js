 
const User = require("../../models/dashboard/login");
const cloudinary = require("../../utils/cloudinary");


/*** update user through edit users ***/
const update_user = async (req, res) => {
  const id = req.params.id;
  console.log(id)
  const { name, email } = req.body;
  try {
    let data = await User.findById(id);
    if(!data) {
      res.status(404).send({ message: 'user not found with this id' });
    }
    let image_upload;
    if (req.file) {
      data.image_id && await cloudinary.uploader.destroy(data.image_id);
      image_upload = await cloudinary.uploader.upload(req.file.path);
    }
    let record = {
      username: name,
      email: email,
      image: image_upload && image_upload.secure_url,
      image_id: image_upload && image_upload.public_id,
    };
    const user = await User.findByIdAndUpdate(req.params.id, record, {
      new: true,
    })
    return res.status(200).send(user);
  } catch (err) {
    console.log(err);
    return res.status(409).send({ message: err.message });
  }
};




/*** Export all functions ***/
module.exports = { update_user };