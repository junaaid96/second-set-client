import { useEffect, useState } from "react";

const useJWT = (email) => {
    const [jwt, setJWT] = useState("");
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.accessToken) {
                        localStorage.setItem("accessToken", data.accessToken);
                        setJWT(data.accessToken);
                    }
                });
        }
    }, [email]);
    return [jwt];
};

export default useJWT;
