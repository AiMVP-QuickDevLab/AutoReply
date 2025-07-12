@@ .. @@
+import { Link } from "react-router-dom";

 export const Pricing = () => {
   const plans = [
@@ .. @@
               }
               
-              <button className={`w-full py-3 rounded-lg font-medium text-sm inter-font transition-all duration-300 ${
+              <Link to={plan.name === "Enterprise" ? "/contact" : "/signup"} className="w-full">
+                <button className={`w-full py-3 rounded-lg font-medium text-sm inter-font transition-all duration-300 ${
                 plan.popular 
                   ? 'primary-button text-white' 
                   : 'glass-button text-white'
               }`}>
-                {plan.cta}
-              </button>
+                  {plan.cta}
+                </button>
+              </Link>
             </div>
           ))}
         </div>