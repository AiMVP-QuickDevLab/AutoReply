@@ .. @@
 import { Button } from "@/components/ui/button";
+import { Link } from "react-router-dom";

 export const CallToAction = () => {
   return (
   )
 }
@@ .. @@
           <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent geist-font">
             Ready to put your inbox on autopilot?
           </h2>
           
-          <button className="primary-button px-8 py-6 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-4 inter-font">
-            Get Started Free
-          </button>
+          <Link to="/signup">
+            <button className="primary-button px-8 py-6 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-4 inter-font">
+              Get Started Free
+            </button>
+          </Link>
           
           <p className="text-white/70 inter-font">No credit card required.</p>
         </div>