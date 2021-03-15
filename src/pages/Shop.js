import React, { useRef, useEffect } from 'react'

export default function Shop() {
    const storeDiv = useRef(null);
//     const scriptRef = useRef(null);
  
//     window.localStorage.setItem("show_ecwid_logs","true")
//     window.ecwid_script_defer = true;
//     window.ecwid_dynamic_widgets = true;
//     window.ec = window.ec || Object();
//     window.ec.storefront = window.ec.storefront || Object();
//     window.ec.enable_catalog_on_one_page = true;
//     window._xnext_initialization_scripts = [{
//       widgetType: 'ProductBrowser',
//       id: 'my-store-51108350',
//       arg: ["id=productBrowser", "views=grid(20,3)"]  },
//       {
//         widgetType: 'CategoriesV2',
//         id: 'my-categories-51108350',
//         arg: ["id=categoriesV2"]
//       }
//       ,
//       {
//         widgetType: 'SearchWidget',
//         id: 'my-search-51108350',
//         arg: ["id=searchWidget"]
//       }
//     ];
  
//     var script = document.createElement('script');
//     script.charSet = 'utf-8';
//     script.type = 'text/javascript';
//     script.src = 'https://app.ecwid.com/script.js?51108350';
//     script.defer = true;
//     script.ref=scriptRef;
  
  
//   useEffect(() => {
//       if(!scriptRef.current){
//         storeDiv.current.appendChild(script);
//       }
//   });
  
    return (
      <div>
        <div id="my-search-51108350"></div>
        <div id="my-categories-51108350"></div>
        <div id="my-store-51108350" ref={storeDiv}></div>
        <div></div>
      </div>
  
      );
}
