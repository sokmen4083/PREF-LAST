import config from '../config';

export default class FileService{

    static async saveFamilyInfo(pFamily){
        let familyResponse = 
            await fetch(`${config.backendUrl}/users/family`,{
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: pFamily
            });
        let family = await familyResponse.json();
        return family;
    }

}