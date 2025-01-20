import { MetricType } from "web-vitals";
 
const reportWebVitals = (onPerfEntry?: (metric: MetricType) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ onCLS, onINP, onFCP, onLCP, }) => 
{
       onCLS(onPerfEntry);
       onINP(onPerfEntry);
       onFCP(onPerfEntry);
       onLCP(onPerfEntry);
     });
   }
 };

 export default reportWebVitals;