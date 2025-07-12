@@ .. @@
 import { useState } from "react";
 import { Link } from "react-router-dom";
 import { Menu, X } from "lucide-react";
 import { Button } from "@/components/ui/button";

 export const Navigation = () => {
   const [isOpen, setIsOpen] = useState(false);

   return (
     <nav className="relative z-10 w-full px-6 py-4">
       <div className="max-w-7xl mx-auto flex justify-between items-center">
         <Link to="/" className="flex items-center space-x-2">
           <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
             <div className="w-4 h-4 rounded-sm bg-gradient-to-br from-blue-400 to-purple-500"></div>
           </div>
-          <span className="text-white font-medium text-lg geist-font">Aurora</span>
+          <span className="text-white font-medium text-lg geist-font">AutoReply</span>
         </Link>
   )
 }