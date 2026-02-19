import React, { useEffect, useState, useRef } from 'react'
import Navbar from '../component/Navbar'
import UserImg from '../assets/user.png'
import Button from '../component/Button';
import Input from '../component/Input';
import axios from 'axios';
import {  Plus, X } from 'lucide-react';
import {
    ImageKitAbortError,
    ImageKitInvalidRequestError,
    ImageKitServerError,
    ImageKitUploadNetworkError,
    upload,
} from "@imagekit/react";
import Footer from '../component/Footer';

function Profile() {
    const [imagePreview, setImagePreview] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user"))
    );
    const jwtToken = localStorage.getItem("token");
    const [profileImage, setProfileImage] = useState(user?.profileImage || UserImg);
    const [userData, setUserData] = useState({
        id: user._id,
        name: user.fullName,
        email: user.email,
        phone: user.phoneNo

    })

    const editUser = async () => {
        const res = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/user`, {
            id: user._id,
            fullName: userData.name,
            email: userData.email,
            phoneNo: userData.phone,
        },
            {
                headers: { Authorization: `Bearer ${jwtToken}` }
            })
        console.log(res.data)
        localStorage.setItem("user", JSON.stringify(res.data.data));
        setIsEditing(false);
    }
    useEffect(() => {
        console.log(userData)
    }, [])

    const [progress, setProgress] = useState(0);
    const fileInputRef = useRef();
    const authenticator = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth`);
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Request failed with status ${response.status}: ${errorText}`);
            }
            const data = await response.json();
            const { signature, expire, token, publicKey } = data;
            return { signature, expire, token, publicKey };
        } catch (error) {
            console.error("Authentication error:", error);
            throw new Error("Authentication request failed");
        }
    };
    const handleUpload = async () => {
        const fileInput = fileInputRef.current;
        if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
            alert("Please select a file to upload");
            return;
        }

        const file = fileInput.files[0];
        let authParams;
        try {
            authParams = await authenticator();
        } catch (authError) {
            console.error("Failed to authenticate for upload:", authError);
            return;
        }
        const { signature, expire, token, publicKey } = authParams;
        try {
            const uploadResponse = await upload({
                expire,
                token,
                signature,
                publicKey,
                file,
                fileName: file.name,
                onProgress: (event) => {
                    setProgress((event.loaded / event.total) * 100);
                },
            });
            console.log("Upload response:", uploadResponse);
            setProfileImage(uploadResponse.url);

            const res = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/profile-image`,
                {
                    id: user._id,
                    profileImage: uploadResponse.url
                },
                {
                    headers: { Authorization: `Bearer ${jwtToken}` }
                }
            );
            const updatedUser = {
                ...user,
                profileImage: uploadResponse.url,
            };
            setUser(updatedUser);
            localStorage.setItem("user", JSON.stringify(updatedUser));

            fileInputRef.current.value = "";
        } catch (error) {
            if (error instanceof ImageKitAbortError) {
                console.error("Upload aborted:", error.reason);
            } else if (error instanceof ImageKitInvalidRequestError) {
                console.error("Invalid request:", error.message);
            } else if (error instanceof ImageKitUploadNetworkError) {
                console.error("Network error:", error.message);
            } else if (error instanceof ImageKitServerError) {
                console.error("Server error:", error.message);
            } else {
                console.error("Upload error:", error);
            }
        }
    };
    return (
        <>
        <div className='min-h-screen bg-gray-50 text-[#2a2e32]'>
            <Navbar />
            <div className=' max-w-full mx-auto mt-16 px-6'>
                <div className='bg-white rounded-2xl shadow-xl p-10 mt-20'>
                    <div className='flex flex-col md:flex-row items-center gap-8'>
                        <div className="relative">
                            <button
                                onClick={() => fileInputRef.current.click()}
                                className="absolute bottom-2 cursor-pointer right-2 bg-white border border-[#2b92f3] rounded-full p-1">
                                <Plus size={18} /> </button>
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                onChange={handleUpload}
                            />
                            <div className="w-40 h-40 rounded-full border-4 cursor-pointer border-[#2b92f3] overflow-hidden shadow-lg"
                                onClick={() => {
                                    setImagePreview(true)
                                }}>
                                <img
                                    src={profileImage}
                                    alt="Profile"
                                    className="w-full h-full object-cover "
                                /></div>
                        </div>

                        <div className='flex-col text-center md:text-left'>
                            <h2 className="text-3xl font-bold text-[#2b92f3]">
                                {userData.name}
                            </h2>
                            <p className="text-[#554d47] mt-2">
                                Manage your personal information
                            </p>
                        </div>
                        <div>
                            {
                                !isEditing && (
                                    <Button title="Edit Profile" variant="primary"
                                        onClick={() => {
                                            setIsEditing(true)
                                        }} />
                                )
                            }
                        </div>
                    </div>
                    <div className="border-t my-8"></div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold">Full Name</label>
                            <Input value={userData.name}
                                onChange={(e) => {
                                    setUserData({
                                        ...userData, name: e.target.value
                                    })
                                }}
                                disabled={!isEditing} />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-semibold">Email</label>
                            <Input value={userData.email} onChange={(e) => {
                                setUserData({
                                    ...userData, email: e.target.value
                                })
                            }}
                                disabled={!isEditing} />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-semibold">Phone Number</label>
                            <Input value={userData.phone} onChange={(e) => {
                                setUserData({
                                    ...userData, phone: e.target.value
                                })
                            }}
                                disabled={!isEditing} />
                        </div>

                    </div>
                    {isEditing && (
                        <div className='mt-8 text-righ'>
                            <Button title="Save Changes"
                                onClick={editUser} />
                        </div>
                    )}
                </div>
            </div>
            {imagePreview && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-500">

                    <button
                        onClick={() => setImagePreview(false)}
                        className="absolute top-6 right-6 text-white cursor-pointer"
                    >
                        <X size={30} />
                    </button>

                    <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white">
                        <img
                            src={profileImage}
                            alt="Profile Preview"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            )}
        </div>
           <Footer/>
        </>
    )
}

export default Profile
