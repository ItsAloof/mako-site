import { Box, Divider } from "@mui/material";
import Footer from "./footer";
import Header from "./header";

interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <Box component="div">
            <Header />
            <main>{children}</main>
            <Footer />
        </Box>

    );
}