// "use server"

// import {redirect} from "next/navigation"


// export async function login(formData) {
//     const email = formData.get('email');
//     const password = formData.get('password');
//     const username = formData.get('username');
//     let role;
//     if(username == "student" && password == "student"){
//         role = "student";
//     }else if(username == "teacher" && password == "teacher")    {
//         role = "admin";
//     }else{
//         redirect("/login?error=Invalid username or password");
//     }
    

//     const cookieStore = await cookies();
//     cookieStore.set('role', role, { path: '/' });

//     redirect("/auth/dashboard");

//      async function logout() {
//         const cookieStore = await cookies();
//         cookieStore.delete('role', { path: '/' });
        
//         redirect("/login");
//     }
// }




"use server"
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import {signJwt} from "next-auth/react";

export async function login(formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    const username = formData.get('username');
    let role;   
    if(username == "student" && password == "student"){
        role = "student";
    }else if(username == "teacher" && password == "teacher")    {
        role = "admin";
    }else{
        redirect("/login?error=Invalid username or password");
    }

    const cookieStore = await cookies();
    const token = signJwt({username, role}, process.env.SECRET, {expiresIn: "1h"});
    cookieStore.set('token', token, { path: '/' });

    redirect("/auth/dashboard");
}
