@@ .. @@
 import { useState } from "react";
 import { Eye, EyeOff, Mail, Lock, LogIn } from "lucide-react";
+import { Link } from "react-router-dom";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 import { useToast } from "@/hooks/use-toast";
 import { AuroraBackground } from "@/components/AuroraBackground";
 import { AuthHeader } from "@/components/auth/AuthHeader";
 import { SocialLogin } from "@/components/auth/SocialLogin";
 import { AuthFooter } from "@/components/auth/AuthFooter";

@@ .. @@
   return (
     <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center p-4">
       <AuroraBackground />
       
+      {/* Back to Home Button */}
+      <Link 
+        to="/" 
+        className="fixed top-6 left-6 z-20 glass-button px-4 py-2 rounded-lg text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
+      >
+        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
+          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
+        </svg>
+        Back to Home
+      </Link>
+      
       <div className="relative z-10 w-full max-w-md">