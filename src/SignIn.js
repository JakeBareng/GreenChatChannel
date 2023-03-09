import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

async function SignInEvent(auth) {
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth,provider);
}
function SignIn(props) {
    const { auth } = props;
    return (
        <button onClick={() => SignInEvent(auth)}>Sign In</button>
    )
}


export default SignIn;