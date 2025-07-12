@@ .. @@
-          #define NUM_OCTAVES 3
+          #define NUM_OCTAVES 2

           float rand(vec2 n) { 
             return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
           }

@@ .. @@
           float fbm(vec2 x) {
             float v = 0.0;
-            float a = 0.3;
+            float a = 0.25;
             vec2 shift = vec2(100);    
             mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
             for (int i = 0; i < NUM_OCTAVES; ++i) {
               v += a * noise(x);
               x = rot * x * 2.0 + shift;
-              a *= 0.4;
+              a *= 0.5;
             }
             return v;
           }

@@ .. @@
             vec4 o = vec4(0.0);
             
-            float f = 2.0 + fbm(p + vec2(iTime * 5.0, 0.0)) * 0.5; 
+            float f = 2.0 + fbm(p + vec2(iTime * 3.0, 0.0)) * 0.4; 
             
-            for(float i = 0.0; i++ < 35.0;)
+            for(float i = 0.0; i++ < 25.0;)
             {
-              v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13.0, 11.0)) * 3.5 + vec2(sin(iTime * 3.0 + i) * 0.003, cos(iTime * 3.5 - i) * 0.003);
+              v = p + cos(i * i + (iTime + p.x * 0.06) * 0.02 + i * vec2(13.0, 11.0)) * 3.0 + vec2(sin(iTime * 2.5 + i) * 0.002, cos(iTime * 3.0 - i) * 0.002);
               
-              float tailNoise = fbm(v + vec2(iTime * 0.5, i)) * 0.3 * (1.0 - (i / 35.0)); 
+              float tailNoise = fbm(v + vec2(iTime * 0.4, i)) * 0.25 * (1.0 - (i / 25.0)); 
               
               vec4 auroraColors = vec4(
-                0.1 + 0.3 * sin(i * 0.2 + iTime * 0.4),
-                0.3 + 0.5 * cos(i * 0.3 + iTime * 0.5),
-                0.7 + 0.3 * sin(i * 0.4 + iTime * 0.3),
+                0.1 + 0.25 * sin(i * 0.2 + iTime * 0.3),
+                0.3 + 0.4 * cos(i * 0.3 + iTime * 0.4),
+                0.7 + 0.25 * sin(i * 0.4 + iTime * 0.25),
                 1.0
               );
               
-              vec4 currentContribution = auroraColors * exp(sin(i * i + iTime * 0.8)) / length(max(v, vec2(v.x * f * 0.015, v.y * 1.5)));
+              vec4 currentContribution = auroraColors * exp(sin(i * i + iTime * 0.6)) / length(max(v, vec2(v.x * f * 0.012, v.y * 1.2)));
               
-              float thinnessFactor = smoothstep(0.0, 1.0, i / 35.0) * 0.6; 
-              o += currentContribution * (1.0 + tailNoise * 0.8) * thinnessFactor;
+              float thinnessFactor = smoothstep(0.0, 1.0, i / 25.0) * 0.5; 
+              o += currentContribution * (1.0 + tailNoise * 0.6) * thinnessFactor;
             }
             
-            o = tanh(pow(o / 100.0, vec4(1.6)));
-            gl_FragColor = o * 1.5;
+            o = tanh(pow(o / 80.0, vec4(1.4)));
+            gl_FragColor = o * 1.2;
           }
         `
       });

@@ .. @@
       const animate = () => {
         animationId = requestAnimationFrame(animate);
-        material.uniforms.iTime.value += 0.016;
+        material.uniforms.iTime.value += 0.012;
         renderer.render(scene, camera);
       };