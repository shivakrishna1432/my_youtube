import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Watchpage from "./components/Watchpage";
import SearchResults from "./components/SearchResults";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <Watchpage />,
        },
        {
          path: "results",
          element: <SearchResults />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div>
        {/**
         * Header
         * Body
         *  sideBar
         *  MainContainer
         *    ButtonList
         *    videoContainer
         *      VideoCards
         *  videoPage
         *
         */}

        <RouterProvider router={appRouter}></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
