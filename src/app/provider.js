"use client";
import { db } from '@/configs/db';
import { useUser } from '@clerk/nextjs';
import { Users } from '@/configs/schema';
import React, { useEffect } from 'react';
import { eq } from 'drizzle-orm';

function Provider({ children }) {
    const { user, isLoaded, isSignedIn } = useUser();

    // Logging the loading status and sign-in status
    useEffect(() => {
        console.log("User Loaded:", isLoaded);
        console.log("User Signed In:", isSignedIn);
        console.log("User Object:", user);
    }, [isLoaded, isSignedIn, user]);

    const isNewUser = async () => {
        try {
            if (user?.primaryEmailAddress?.emailAddress) {
                console.log("Checking if user is new or existing in the database.");
                const result = await db
                    .select()
                    .from(Users)
                    .where(eq(Users.email, user.primaryEmailAddress.emailAddress));

                console.log("Database Query Result:", result);

                if (!result[0]) {
                    console.log("User not found in the database.");
                    await db.insert(Users).values({
                        name: user.fullName,
                        email: user.primaryEmailAddress.emailAddress,
                        imageUrl: user.imageUrl,
                    });
                    console.log("New user added to the database.");
                } else {
                    console.log("User already exists in the database.");
                }
            }
        } catch (error) {
            console.error("Error in isNewUser function:", error);
        }
    };

    useEffect(() => {
        const checkUser = async () => {
            if (isLoaded && isSignedIn && user) {
                await isNewUser();
            }
        };
        checkUser();
    }, [isLoaded, isSignedIn, user]);

    return <div>{children}</div>;
}

export default Provider;
