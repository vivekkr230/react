import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import {FlipkartComponent} from "../src/components/flipkart/index"
import {DependencyComponent} from "./components/onload/index"
import {NasaApiComponent} from "../src/components/nasa/index"
import {FakeStoreComponent } from "./components/fakestore/index"
import {FakeApiAppComponent} from "./components/fakeapiapp/index"
import {StyleBindingComponent} from "./components/stylebinding/stylebinding"
import { HideToggleComponent } from './components/stylebinding/hidetoggle';
import { ColorTheme } from './components/classbinding/colortheme';
import { EventBindingComponent } from './components/eventbinding/eventbinding';
import { FormBindingComponent } from './components/eventbinding/formbinding';
import { CustomBinding } from './components/eventbinding/custombinding';
import { MouseComponent } from './components/mouseevent/onhovercomponent';
import { ClockBinding } from './components/clockbinding/clock';
import { TouchComponent } from './components/touchevent/touch';
import { ComponentProp } from './components/componentproperties/component';
import { ConditionalRender } from './components/conditionalrendering/conrender';
import {TableActualComponent} from '../src/practiceComponent/table/tablecomponent'
import { RenderDemo } from './components/conditionalrendering/tablesaveedit';
import {RenderDynamicGrid} from './components/dynamic-grid/renderdemo'
import { ReducerDemo } from './components/reducer/reducerdemo';
import { LikeDislikeCount } from './practiceComponent/reducer/like';
import { RefernceComponent } from './components/ref/ref';
import { CarouselComponent } from './components/ref/carousel';
import { Login } from './classComponents/login/login';
import { ButtonClick } from './classComponents/event/buttonclick';
import { ButtonEventClick } from './classComponents/event/btnwithevent';
import { ShopClassDemo } from './classComponents/shop/classshop';
import { LoginForm } from './components/form/loginForm';
import { FormicDemo, FormikDemo } from './components/formic-demo/formic-demo';
import { FormikValidation } from './components/formik-validation/formik_validation';
import { FormikValidationNew } from './components/formik-validation/formik_val_new';
import { YupComponent } from './components/formikYup/formik_yup';
import { StudentDetail } from './components/formikYup/formicUsn';
import { FormComponentPractice } from './components/form/loginformPractice';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormComponentPractice/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
