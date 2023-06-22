

const Private = ({token}) => {
    console.log("token : " + token)
    return token ? (
        <div>
            <p>Connecté espace privé</p>
        </div>
    ) : (
        <div>
            <p>Accés interdit</p>
        </div>
    );
};

export default Private;