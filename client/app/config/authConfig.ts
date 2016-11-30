class AuthConfig {
    private static configForDevelopment = {
        providers: {
            google: {
                clientId: "485342909974-21e35mpnp886ec5c81fjgv8rlmt5g2ee.apps.googleusercontent.com"
            }
        }
    };

    private static configForProduction = {
        providers: {
            google: {
                clientId: "485342909974-21e35mpnp886ec5c81fjgv8rlmt5g2ee.apps.googleusercontent.com"
            }
        }
    };

    static config = window.location.hostname === "localhost" ? AuthConfig.configForDevelopment : AuthConfig.configForProduction;
}
Object.seal(AuthConfig);
export = AuthConfig;