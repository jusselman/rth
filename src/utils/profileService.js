import userService from './userService';

function addProfile(profileData) {
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

export default {
    addProfile
}