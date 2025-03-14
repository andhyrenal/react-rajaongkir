import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === "admin" && password === "admin123") {
            localStorage.setItem("isLoggedIn", "true");
            navigate("/");
        } else {
            alert("Username atau password salah!");
        }
    };
    return {
        handleLogin,
        setPassword,
        setUsername
    }
}

export default useLogin;