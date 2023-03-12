import React from 'react'
import firebase from "firebase/package.json";
import "firebase/auth";

function MainPage() {

    const signOutWithGoogle = () => {
        firebase.auth().signOut();
    };

    const [user] = useAuthState(firebase.auth());

    return (

        <>
            <h4>Main Page</h4>
            <button onClick={signOutWithGoogle}>Sign out</button>

            {user ? (
                <button onClick={signOutWithGoogle}>Sign out</button>
            ) : (
                <p>You are not signed in</p>
            )}
        </>

    );
}

export default MainPage