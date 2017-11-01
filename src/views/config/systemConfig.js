const systemConfig = {
    releaseType: 'Alpha',
    appStage: 'Development',
    coreApiUrl: {
        development: {
            auth: 'http://phonespeakapi.ddns.me/Account/Login',
            app: 'http://kzs01.den.phonespeak.com:8000/v2/'
        },
        staging: {
            auth: '',
            app: ''
        },
        production: {
            auth: '',
            app: ''
        }
    },
    extApiUrl: {
        auth: {
            Google: '',
            Facebook: '',
            Microsoft: '',
            LinkIn: '',
            Yahoo: ''
        },
        storage: {
            iDrive: '',
            SugarSync: '',
            OneDrive: '',
            GoogleDrive: '',
            PersonalBox: '',
            DropBox: ''
        },
        map: {
            Google: '',
            Esri: '',
            OpenStreet: '',
            Bing: ''
        },
    },
    extApiKey: {
        auth: {
            Google: '',
            Facebook: '',
            Microsoft: '',
            LinkIn: '',
            Yahoo: ''
        },
        storage: {
            iDrive: '',
            SugarSync: '',
            OneDrive: '',
            GoogleDrive: '',
            PersonalBox: '',
            DropBox: ''
        },
        map: {
            Google: '',
            Esri: '',
            OpenStreet: '',
            Bing: ''
        },
    }
};

const systemDefault = {
    release: systemConfig.releaseType,
    stage: systemConfig.appStage,
    coreApiUrl: {
        auth: systemConfig.coreApiUrl.development.auth,
        app: systemConfig.coreApiUrl.development.app
    }
};

export { systemConfig, systemDefault };
