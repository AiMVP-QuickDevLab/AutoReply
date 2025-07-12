@@ .. @@
 import { Button } from "@/components/ui/button";
 import { Play, ChevronDown } from "lucide-react";
+import { Link } from "react-router-dom";

 export const Hero = () => {
   return (
@@ .. @@
         {/* CTA Buttons */}
         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
-          <button className="primary-button px-8 py-6 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inter-font">
-            Try it Free
-          </button>
+          <Link to="/signup">
+            <button className="primary-button px-8 py-6 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inter-font">
+              Try it Free
+            </button>
+          </Link>
           <button className="secondary-button px-8 py-6 rounded-lg text-white font-semibold text-lg transition-all duration-300 inter-font flex items-center">
             <Play className="mr-2 h-5 w-5" />
             See it in Action
           </button>
         </div>