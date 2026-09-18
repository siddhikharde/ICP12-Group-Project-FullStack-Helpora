import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../component/Navbar';
import UserImg from '../assets/user.png';
import Button from '../component/Button';
import Input from '../component/Input';
import axios from 'axios';
import { Plus, X, Sparkles, MapPin, Phone, Mail } from 'lucide-react';
import {
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitServerError,
  ImageKitUploadNetworkError,
  upload,
} from '@imagekit/react';
import Footer from '../component/Footer';

function Profile() {
  const [imagePreview, setImagePreview] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const jwtToken = localStorage.getItem('token');
  const [profileImage, setProfileImage] = useState(user?.profileImage || UserImg);
  const [userData, setUserData] = useState({
    id: user?._id,
    name: user?.fullName,
    email: user?.email,
    phone: user?.phoneNo,
    location: user?.location,
  });

  const editUser = async () => {
    const res = await axios.put(
      `${import.meta.env.VITE_API_BASE_URL}/user`,
      {
        id: user._id,
        fullName: userData.name,
        email: userData.email,
        phoneNo: userData.phone,
        location: userData.location,
      },
      {
        headers: { Authorization: `Bearer ${jwtToken}` },
      }
    );
    localStorage.setItem('user', JSON.stringify(res.data.data));
    setIsEditing(false);
  };

  useEffect(() => {
    if (!user) return;
    setUserData({
      id: user._id,
      name: user.fullName,
      email: user.email,
      phone: user.phoneNo,
      location: user.location,
    });
    setProfileImage(user.profileImage || UserImg);
  }, [user]);

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
      console.error('Authentication error:', error);
      throw new Error('Authentication request failed');
    }
  };

  const handleUpload = async () => {
    const fileInput = fileInputRef.current;
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      alert('Please select a file to upload');
      return;
    }

    const file = fileInput.files[0];
    let authParams;
    try {
      authParams = await authenticator();
    } catch (authError) {
      console.error('Failed to authenticate for upload:', authError);
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

      setProfileImage(uploadResponse.url);

      await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/profile-image`,
        {
          id: user._id,
          profileImage: uploadResponse.url,
        },
        {
          headers: { Authorization: `Bearer ${jwtToken}` },
        }
      );

      const updatedUser = { ...user, profileImage: uploadResponse.url };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      fileInputRef.current.value = '';
    } catch (error) {
      if (error instanceof ImageKitAbortError) {
        console.error('Upload aborted:', error.reason);
      } else if (error instanceof ImageKitInvalidRequestError) {
        console.error('Invalid request:', error.message);
      } else if (error instanceof ImageKitUploadNetworkError) {
        console.error('Network error:', error.message);
      } else if (error instanceof ImageKitServerError) {
        console.error('Server error:', error.message);
      } else {
        console.error('Upload error:', error);
      }
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#fffaf7] text-slate-900">
        <Navbar />

        <main className="mx-auto max-w-6xl px-4 pb-20 pt-14 md:px-6">
          <div className="rounded-[2.6rem] border border-slate-200 bg-white/75 p-6 shadow-[0_24px_60px_rgba(31,24,49,0.05)] md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-5">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full border border-violet-200 bg-white text-violet-700 shadow-lg"
                  >
                    <Plus size={16} />
                  </button>
                  <input type="file" ref={fileInputRef} className="hidden" onChange={handleUpload} />
                  <div className="flex h-24 w-24 cursor-pointer items-center justify-center overflow-hidden rounded-full border-4 border-violet-200 bg-gradient-to-br from-violet-100 to-[#ffe6dc] shadow-[0_18px_38px_rgba(79,60,194,0.15)]" onClick={() => setImagePreview(true)}>
                    <img src={profileImage} alt="Profile" className="h-full w-full object-cover" />
                  </div>
                </div>

                <div>
                  <p className="section-label">
                    <Sparkles size={14} />
                    Personal profile
                  </p>
                  <h1 className="mt-4 text-3xl font-extrabold tracking-[-0.06em] text-slate-900 md:text-5xl">{userData.name}</h1>
                  <p className="mt-2 text-sm text-slate-500">Manage your personal information and service preferences.</p>
                </div>
              </div>

              {!isEditing && (
                <Button title="Edit profile" className="md:min-w-[170px]" onClick={() => setIsEditing(true)} />
              )}
            </div>
          </div>

          <div className="mt-10 rounded-[2.4rem] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_rgba(31,24,49,0.05)] md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Full Name</label>
                <Input value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} disabled={!isEditing} />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Email</label>
                <Input value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} disabled={!isEditing} />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                <Input value={userData.phone} onChange={(e) => setUserData({ ...userData, phone: e.target.value })} disabled={!isEditing} />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Address</label>
                <Input value={userData.location} onChange={(e) => setUserData({ ...userData, location: e.target.value })} disabled={!isEditing} />
              </div>
            </div>

            {isEditing && (
              <div className="mt-8 flex justify-end">
                <Button title="Save changes" onClick={editUser} />
              </div>
            )}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { icon: <MapPin size={18} />, label: 'Location', value: userData.location || 'Not added yet' },
              { icon: <Phone size={18} />, label: 'Phone', value: userData.phone || 'Not added yet' },
              { icon: <Mail size={18} />, label: 'Email', value: userData.email || 'Not added yet' },
            ].map((item) => (
              <div key={item.label} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_18px_40px_rgba(31,24,49,0.04)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">{item.icon}</span>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-slate-400">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-slate-800">{item.value}</p>
              </div>
            ))}
          </div>
        </main>

        {imagePreview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <button type="button" onClick={() => setImagePreview(false)} className="absolute right-6 top-6 text-white">
              <X size={30} />
            </button>

            <div className="h-72 w-72 overflow-hidden rounded-full border-4 border-white md:h-96 md:w-96">
              <img src={profileImage} alt="Profile preview" className="h-full w-full object-cover" />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Profile;
