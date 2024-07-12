import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import { ArticleProvider } from "./contexts/ArticleProvider";
import { CategoryProvider } from "./contexts/CategoryProvider";
import { JobProvider } from "./contexts/JobProvider";
import { WriterProvider } from "./contexts/WriterProvider";

import Makaleler from "./pages/Makaleler";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "../styles/GlobalStyles";
import Homepage from "./pages/Homepage";
import Article from "./components/Article";
import Authors from "./pages/Authors";
import TermsOfUse from "./pages/TermsOfUse";
import Author from "./components/Author";
import Privacy from "./pages/Privacy";
import Cookie from "./pages/Cookie";
import Partnership from "./pages/Partnership";
import About from "./pages/About";
import StaffOfPersonelle from "./pages/StaffOfPersonelle";
import Jobs from "./pages/Jobs";
import Subscription from "./pages/Subscription";
import ScrollToTop from "./components/ScrollToTop";
import AllDeals from "./pages/AllDeals";
import ContactUs from "./pages/ContactUs";
import NewArticle from "./pages/NewArticle";
import ProtectedRoute from "./components/ProtectedRoute";
import MyProfile from "./pages/MyProfile";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <GlobalStyles />
      <BrowserRouter>
        <ArticleProvider>
          <CategoryProvider>
            <JobProvider>
              <WriterProvider>
                <ScrollToTop />
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="makaleler" element={<Makaleler />} />
                  <Route
                    path="makale/:id"
                    element={
                      <ProtectedRoute>
                        <Article />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="authors" element={<Authors />} />
                  <Route path="author/:id" element={<Author />} />
                  <Route path="login" element={<Login />} />
                  <Route path="myProfile" element={<MyProfile />} />
                  <Route path="newArticle" element={<NewArticle />} />
                  <Route path="termsOfUse" element={<TermsOfUse />} />
                  <Route path="privacyPolicy" element={<Privacy />} />
                  <Route path="cookies" element={<Cookie />} />
                  <Route path="partnership" element={<Partnership />} />
                  <Route path="about" element={<About />} />
                  <Route path="staff" element={<StaffOfPersonelle />} />
                  <Route path="jobOpportunities" element={<Jobs />} />
                  <Route path="jobOpportunities/:id" element={<Jobs />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                  <Route path="subscription" element={<Subscription />} />
                  <Route path="all-deals" element={<AllDeals />} />
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </WriterProvider>
            </JobProvider>
          </CategoryProvider>
        </ArticleProvider>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
