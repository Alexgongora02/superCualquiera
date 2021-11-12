export {default} from './Login'
import {startUi} from './component/firebase'

export default function Page(){
    componentDidMount()
        startUi("#firebaseui")

        return(
            <div id="firebaseui"></div>
        );
    };


export default Page;