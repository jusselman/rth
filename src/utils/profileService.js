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

function getProfile(profileData) {
    return fetch(`/api/profiles/${profileData}`)
        .then((res) => res.json());


}

export default {
    addProfile,
    getProfile,
    updateProfile
}