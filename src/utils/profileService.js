import userService from './userService';

async function addProfile(profileData) {
    if (!userService.getUser()) return;
    return fetch('/api/profiles/createProfile', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(profileData)
    })
        .then(res => {
            if (res.ok) return res.json();
            throw new Error('Error creating profile!');
        });
}

async function updateProfile(profileData) {
    return fetch(`/api/profiles/editProfile`, {
        method: 'PUT',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(profileData)
    })
        .then(res => {
            if (res.ok) return res.json();
            throw new Error('Error creating profile!');
        });
}

async function getProfile(profileData) {
    return fetch(`/api/profiles/${profileData}`)
        .then((res) => res.json());
}

async function getProfileWithUserID(userID) {
    try {
        let result = await fetch(`/api/profiles/user/${userID}`)
            .then((res) => res.json());
        return result
    } catch (err) {
        console.log('error fetching profile from user')
    }
}

function deleteProfile(profileId) {
    console.log(`/api/profiles/${profileId}`);
    return fetch(`/api/profiles/${profileId}`, {
        method: 'DELETE',
        headers: new Headers({ 'Content-Type': 'application/json' })
    })
        .then(res => {
            if (res.ok) return res.json();
            throw new Error('Error');
        });
}

export default {
    addProfile,
    getProfile,
    updateProfile,
    deleteProfile,
    getProfileWithUserID
}