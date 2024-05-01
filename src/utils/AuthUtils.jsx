class AuthUtils {
    static getSignedInUserProfile() {
        return JSON.parse(localStorage.getItem('profile')) || null;
    }

    static isUserSignedIn() {
        return localStorage.getItem('profile') !== 'null' && 
        localStorage.getItem('profile') !== null && 
        localStorage.getItem('profile') !== undefined
    }

    static logOut() {
        localStorage.removeItem('profile')
    }

    static setUserProfile(user) {
        localStorage.setItem('profile', JSON.stringify(user));
    }

    static signUp(user) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        for (let i = 0; i < users.length; i++) {
            const eachUser = users[i];
            if (eachUser.email === user.email) {
                return "User with this email exist";
            }
        }
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        this.setUserProfile(user);

        return "Success";
    }

    static login(user) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        for (let i = 0; i < users.length; i++) {
            const eachUser = users[i];
            if (eachUser.email === user.email) {
                if (eachUser.password === user.password) {
                    this.setUserProfile(user);
                    return "Authenticated";
                } else {
                    return "Invalid password";
                }
            }
        }
        return "User not found";
    }
}

export default AuthUtils;