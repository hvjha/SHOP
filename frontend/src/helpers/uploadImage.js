const url = "https://api.cloudinary.com/v1_1/dghffr4t1/image/upload";
const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "Harsh_Shop");

    const dataResponse = await fetch(url, {
        method: "POST",
        body: formData
    });

    return dataResponse.json();
};

export default uploadImage;
