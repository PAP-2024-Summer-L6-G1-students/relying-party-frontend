import {useParams, useNavigate} from "react-router-dom";
import { useEffect } from "react";

export default function LoginReceiver() {
    const navigate = useNavigate();
    const authorization = useParams().authorization;
    useEffect(()=>{
        async function fetchData() {
            const result = await fetch("https://localhost:3003/authorizelogin/" + authorization, 
                {method: "POST", credentials: 'include'});

                // If the results are okay, redirec to landing page (below)
                if (result.ok) {
                    navigate("/Profile");
                }
        }
        fetchData();
    }, []);
    return authorization;
};