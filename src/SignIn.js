import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import Button from "react-bootstrap/Button"
async function SignInEvent(auth) {
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth,provider);
}
function SignIn(props) {
    const { auth } = props;
    return (
        <Button className="mb-3" onClick={() => SignInEvent(auth)}>Sign in with google</Button>
    )
}


export default SignIn;