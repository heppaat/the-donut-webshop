"use client";

import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import useNavbarContext from "@/hooks/useNavbarContext";

interface AuthSectionProps {
  isMobile?: boolean;
}

function AuthSection({ isMobile = false }: AuthSectionProps) {
  const { user, isAuthenticated, logout } = useAuth();
  const { closeMobileMenu } = useNavbarContext();

  const handleAuthAction = () => {
    if (isMobile) {
      closeMobileMenu();
    }
  };

  if (isAuthenticated && user) {
    if (isMobile) {
      // Mobile authenticated layout
      return (
        <div className="flex flex-col space-y-3">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            {user.avatar ? (
              <Image
                src={user.avatar}
                alt={user.name}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-semibold text-sm">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
            <span className="font-medium text-foreground">{user.name}</span>
          </div>
          <Button
            variant="ghost"
            size="lg"
            className="w-full justify-start"
            onClick={() => {
              logout();
              handleAuthAction();
            }}
          >
            Logout
          </Button>
        </div>
      );
    }

    // Desktop authenticated layout
    return (
      <div className="flex items-center gap-4">
        {user.avatar ? (
          <Image
            src={user.avatar}
            alt={user.name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-primary font-semibold text-sm">
              {user.name.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        <Button variant="ghost" size="lg" onClick={logout}>
          Logout
        </Button>
      </div>
    );
  }

  // Not authenticated
  if (isMobile) {
    // Mobile not authenticated layout
    return (
      <div className="flex flex-col space-y-3">
        <Button
          variant="outline"
          size="lg"
          className="w-full"
          onClick={handleAuthAction}
        >
          Log In
        </Button>
        <Button
          variant="default"
          size="lg"
          className="w-full"
          onClick={handleAuthAction}
        >
          Sign Up
        </Button>
      </div>
    );
  }

  // Desktop not authenticated layout
  return (
    <div className="flex gap-4">
      <Button variant="outline" size="lg">
        Log In
      </Button>
      <Button variant="default" size="lg">
        Sign Up
      </Button>
    </div>
  );
}

export default AuthSection;
