import e from"prop-types";import r from"firebase/app";import i,{useState as n,useEffect as t,useContext as a,useMemo as p,useDebugValue as u}from"react";var o=function(e,r,i){return e.apps.find(function(e){return e.name===r})||e.initializeApp(i,r)},s=i.createContext(),f=Symbol(),c=function(e){var r=e.children,a=function(e,r,i){var a=n(function(){return o(e,i,r)}),p=a[0],u=a[1];return t(function(){u(function(){return o(e,i,r)})},[e,i,r]),p}(e.firebase,e.config,e.name),u=p(function(){return{signature:f,app:a}},[a]);return i.createElement(s.Provider,{value:u},r)};c.propTypes={firebase:e.shape({apps:e.arrayOf(e.shape({name:e.string.isRequired})),initializeApp:e.func}),config:e.shape({apiKey:e.string.isRequired,authDomain:e.string.isRequired,projectId:e.string.isRequired}).isRequired,name:e.string,children:e.element.isRequired},c.defaultProps={firebase:r,name:"[DEFAULT]"};var m=function(){var e=a(s)||{},r=e.app;if(e.signature!==f)throw new Error("useFirebaseApp must be a descendant of <FirebaseAppProvider/>");return u(r.name),r};export{c as FirebaseAppProvider,m as useFirebaseApp};
