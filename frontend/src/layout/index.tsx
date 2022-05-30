
import { useTheme } from "../store/store";
import { Theme } from "../types/theme";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }: { children: JSX.Element }): JSX.Element {
    const theme: Theme = useTheme();
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
