import AppBar from "ui/components/AppBar";
import UserScreen from "ui/native-only/screens/Users";

///https://nextjs.org/docs/basic-features/pages
///learn more about using getStaticPaths to read passed info and rendering corresponding info

export default function Web(props) {

    return (
        <>
            <AppBar />
            <UserScreen 
                //pass props here that you get from the router
            />
        </>
    );
}
