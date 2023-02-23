import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const provider = new GoogleAuthProvider();

function SignInEvent(auth) {
    signInWithRedirect(auth,provider);
}
function SignIn(props) {
    const { auth } = props;
    return (
        <button onClick={() => SignInEvent(auth)}>Sign In</button>
    )
}


export default SignIn;