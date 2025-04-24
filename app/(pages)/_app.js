import { AuthProvider } from "@/context/AuthContext";  // Make sure the path is correct
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>  {/* Wrap the entire app with AuthProvider */}
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
