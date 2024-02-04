import mongoose from "mongoose";

const HeaderSchema = new mongoose.Schema({
  imageUrl: String,
  logo: String,
  phone: String,
  linkA: String,
  linkB: String,
  linkC: String,
  linkD: String,
  linkE: String,
  linkF: String,
  pathA: String,
  pathB: String,
  pathC: String,
  pathD: String,
  pathE: String,
});

const Header = mongoose.models.Headers|| mongoose.model("Headers", HeaderSchema);

export default Header;
