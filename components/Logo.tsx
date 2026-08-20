"use client";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center relative z-20"
    >
      <img 
        src="https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/LOGO_WEB.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbWciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvTE9HT19XRUIucG5nIiwiaWF0IjoxNzc2MTAwNTU0LCJleHAiOjE4MDc2MzY1NTR9.ohXez3syn7cmcPraXd6NfzX2-gRdSdfMoqoIBdbUX84" 
        alt="Fresaikiwi Fotografía"
        className="h-16 md:h-20 w-auto"
      />
    </Link>
  );
};
