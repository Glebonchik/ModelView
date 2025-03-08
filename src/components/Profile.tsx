import { FaPen } from "react-icons/fa";
import { useAvatar } from "../hooks/avatarContext";
import DefaultAvatar from '../assets/no-avatar.svg'
import { useState } from "react";


const Profile = () => {
    const {avatar, setAvatar} = useAvatar();
    const [nickname, setNickname] = useState<string>("DefaultUser7747");
    const [isEditing, setIsEditing] = useState(false);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const file = e.target.files?.[0]
        if (file){
            const reader = new FileReader
            reader.onloadend = () => {
                setAvatar(reader.result as string)
            }
            reader.readAsDataURL(file);
        }
     }

    const handleSaveNickname = () => {
        setIsEditing(false);
        //Добавить логику передачи ника на серв сюда
    }

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
        <div className="flex flex-col items-start space-y-4 ml-8 mt-8">
            <h1 className="text-2xl font-bold">Профиль пользователя</h1>

            <div className="relative mx-10">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500">
                    {avatar ? (
                        <img src={avatar} alt="Profile avatar" className="w-full h-full object-cover"/>
                    ): (<img src={DefaultAvatar} alt="Profile default avatar" className="w-full h-full object-cover"/>)}
                </div>
                <label
                    htmlFor="upload-avatar"
                    className="absolute bottom-2 right-2 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer border-2 border-white shadow-md"
                >
                    <FaPen className="text-white text-sm" />
                    <input
                        id="upload-avatar"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileUpload}
                    />
                </label>
                
            </div>
            <div className="flex flex-col space-y-2">
                        {isEditing ? (
                            <>
                                <input
                                    type="text"
                                    value={nickname}
                                    onChange={(e) => setNickname(e.target.value)}
                                    className="border-2 border-gray-300 p-2 rounded w-64"
                                />
                                <button
                                    onClick={handleSaveNickname}
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                >
                                    Сохранить
                                </button>
                            </>
                        ) : (
                            
                            <div className="flex items-center space-x-4">
                                <span className="text-lg font-semibold">{nickname}</span>
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="text-blue-500 hover:underline"
                                >
                                    Изменить
                                </button>
                            </div>
                        )}
                    </div>
        </div>

    </div>

  )
}

export default Profile