"use client";

import {useEffect} from "react";
import {Crisp} from "crisp-sdk-web";

export const CrispChat = () =>{
    useEffect(()=>{
        Crisp.configure("866bce6e-60e2-47e2-ab5d-f4c70cd33b2f");
    },[]);

    return null;
}


