import {PrismaClient} from "@prisma/client";
import { NextResponse } from "next/server";
export async function POST(req, res) {
    const prisma = new PrismaClient();
    
    try {
        const prisma = new PrismaClient()
        const newUser = await prisma.user.createMany({
            data: [
                {
               
                firstName: "Alice",
                middleName: "Middle",
                lastName: "Lasst",
                email: "jegbcxcj@gmai.com",
                mobile: "12345asdsad67890",
                passwordHash: "1234werttg567890",
                registeredAt: new Date("2023-10-11T03:16:52.768Z"),
                lastLogin: new Date("2023-10-11T03:16:52.768Z"),
                intro: "Hello",
                profile: "profile",
            },
            {
                
                firstName: "Alice",
                middleName: "Middle",
                lastName: "Least",
                email: "jjwewef@gmai.com",
                mobile: "123456eeew7890",
                passwordHash: "123456dsaawe7890",
                registeredAt: new Date("2023-10-11T03:16:52.768Z"),
                lastLogin: new Date("2023-10-11T03:16:52.768Z"),
                intro: "Hello",
                profile: "profile",
            },
            {
                
                firstName: "Alice",
                middleName: "Middle",
                lastName: "Last",
                email: "jfgfj@gmai.com",
                mobile: "123456sd7890",
                passwordHash: "12345678adsd90",
                registeredAt: new Date("2023-10-11T03:16:52.768Z"),
                lastLogin: new Date("2023-10-11T03:16:52.768Z"),
                intro: "Hello",
                profile: "profile",
            },
            {
                
                firstName: "Alice",
                middleName: "Misaddle",
                lastName: "Lsaast",
                email: "jsaj@gmai.com",
                mobile: "1234567890",
                passwordHash: "123saas4567890",
                registeredAt: new Date("2023-10-11T03:16:52.768Z"),
                lastLogin: new Date("2023-10-11T03:16:52.768Z"),
                intro: "Hello",
                profile: "profile",
            }
        ],
          })
      console.log(newUser);
      
       }
    
    catch(e){
       console.log(e)
    }
}
