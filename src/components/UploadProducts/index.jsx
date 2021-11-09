import React, {useState} from 'react'

export default function UploadProducts() {
  const [image, setImage] = useState("");
  const [photo, setPhoto] = useState(false);


   //upload image to cloudinary with fetch method
   const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "SuperCualquiera");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dkr9yv2oa/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setPhoto(file.secure_url);
    console.log(file.secure_url);
  };

  return (
    <div>
      <h2>Upload</h2>
      Cloudinary
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={uploadImage}>Upload</button>
      {photo && <img src={photo} alt="product" />}
    </div>
  )
}
