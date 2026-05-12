"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { onAuthStateChanged, signInWithPopup, signOut, type User } from "firebase/auth";
import { firebaseAuth, firebaseReady, googleProvider } from "@/lib/firebase";
import type { ChotuProfile } from "@/types/domain";

type AuthContextValue = {
  user: User | null;
  profile: ChotuProfile | null;
  loading: boolean;
  authReady: boolean;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

function buildProfile(user: User): ChotuProfile {
  return {
    uid: user.uid,
    displayName: user.displayName ?? "Future Grandmaster",
    email: user.email ?? "",
    photoURL: user.photoURL ?? undefined,
    xp: 1480,
    level: 14,
    streak: 23,
    mood: "proud"
  };
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(Boolean(firebaseAuth));

  useEffect(() => {
    if (!firebaseAuth) return;

    return onAuthStateChanged(firebaseAuth, (nextUser) => {
      setUser(nextUser);
      setLoading(false);
    });
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      profile: user ? buildProfile(user) : null,
      loading,
      authReady: firebaseReady,
      async signInWithGoogle() {
        if (!firebaseAuth) {
          throw new Error("Firebase is not configured. Add NEXT_PUBLIC_FIREBASE_* values to .env.local.");
        }
        await signInWithPopup(firebaseAuth, googleProvider);
      },
      async logout() {
        if (firebaseAuth) await signOut(firebaseAuth);
      }
    }),
    [loading, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
