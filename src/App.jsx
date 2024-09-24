import {Suspense} from "react";
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {router} from "./route/route.config";
import {store} from "./config";

import {Spinner} from "./components/spinner/Spinner";

import {ThemeProvider} from "react-bootstrap";

function App(){
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
                   minBreakpoint="xxs">
      <Provider store={store}>
        <Suspense fallback={<Spinner/>}>
          <RouterProvider router={router}/>
        </Suspense>
      </Provider>
    </ThemeProvider>
  );
}


export default App;
