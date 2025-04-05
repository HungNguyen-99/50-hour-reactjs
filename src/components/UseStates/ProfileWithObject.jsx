import React, { useState } from "react";

const ProfileWithObject = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });
  const handleSetProfile = (e) => {
    setProfile((previousProfile) => ({
      ...previousProfile,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <h2>User profile</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleSetProfile}
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={profile.age}
            onChange={handleSetProfile}
          />
        </label>
      </div>
      <div>
        <h3>Profile:</h3>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
      </div>
    </div>
  );
};

export default ProfileWithObject;
