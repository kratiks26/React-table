
const UPLOAD_PRESET ="bpnmzvqo";
const CLOUD_NAME ="dpfzo9f1j";
const API_KEY = "151228923847575";

export const uploadToCloudinary = async(fileData) =>{
    const formData = new FormData();
    formData.append("file", fileData);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("cloud_name", CLOUD_NAME);
    formData.append("api_key", API_KEY);

    const response= await fetch("https://api.cloudinary.com/v1_1/c-ccf055591047ea3e95f7a76c8010d0/image/upload",{
        method:"POST",
        body: formData,
    });

    const data = await response.json();
    return data;
}