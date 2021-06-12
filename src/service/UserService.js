import config from '../config'

class UserService{

    static getCurrentUser(){
        let user =  JSON.parse(window.localStorage.getItem("user"));
        console.log("user", user);
        return user;
    }

    static setCurrentUser(pUser){
        window.localStorage.setItem("user", JSON.stringify(pUser));
    }

    static async loadUserFile(pEmail){
        let userFile = await fetch(`${config.backendUrl}/users/${pEmail}/file`)
        try{
            return await userFile.json();
        }catch(e){
            return null;
        }
    }

    static async loadMyProfile(pEmail){
        let profileResponse = await fetch(`${config.backendUrl}/users/email/${pEmail}`)
        try{
            return await profileResponse.json();
        }catch(e){
            return null;
        }
    }
}

export default UserService;