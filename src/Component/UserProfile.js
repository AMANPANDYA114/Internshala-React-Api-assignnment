import React, { useState, useEffect } from 'react';

function UserProfile() {
    const [userData, setUserData] = useState({
        picture: { medium: '' },
        name: { first: '', last: '' },
        gender: '',
        phone: ''
    });

    useEffect(() => {
        fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];
                setUserData({
                    picture: user.picture,
                    name: user.name,
                    gender: user.gender,
                    phone: user.phone
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
      
        <div className="flex justify-center items-center h-screen w-200 bg-black" >
        <div className="box1 bg-gray-200 p-8 rounded-lg flex" style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.79)" }}>
            <div className="image-box flex-shrink-0 mr-4 border border-black-300">
                <img src={userData.picture.medium} alt="Profile Image" className=" imgt w-full h-full border border-black-700" />
            </div>
            <div className="flex flex-col">
                <div className="flex mb-2">
                    <div className="mr-6">
                        <p className="font-bold text-lg">First</p>
                        <p>{userData.name.first}</p>
                    </div>
                    <div>
                        <p className="font-bold text-lg">Last</p>
                        <p>{userData.name.last}</p>
                    </div>
                </div>
                <div className="flex mb-2">
                    <div>
                        <p className="font-bold text-lg">Gender</p>
                        <p>{userData.gender}</p>
                    </div>
                </div>
                <div className="flex mb-2 ">
                    <div>
                    <p className="font-bold text-lg " style={{ marginLeft: "-33px" }}>Phone</p>
                        <p>{userData.phone}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    );
}

export default UserProfile;
