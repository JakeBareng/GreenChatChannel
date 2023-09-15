import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Button from "react-bootstrap/Button"
async function SignInEvent(auth) {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth,provider);
}
function SignIn(props) {
    const { auth } = props;
    return (
        <Button className="" onClick={() => SignInEvent(auth)}>Sign in with google</Button>
    )
}


export default SignIn;