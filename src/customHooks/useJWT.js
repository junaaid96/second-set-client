import { useEffect, useState } from "react";

const useJWT = (email) => {
    const [jwt, setJWT] = useState("");
    useEffect(() => {
        if (email) {
            fetch(`https://second-set-server.vercel.app/jwt?email=${email}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.token) {
                        localStorage.setItem("accessToken", data.token);
                        setJWT(data.token);
                    }
                });
        }
    }, [email]);
    return [jwt];
};

export default useJWT;
