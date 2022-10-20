import { controlStyle } from "helpers/forApp/baseStyle";
import { Header, Hero, Project, Write, Footer } from "./index";


export const App = () => {
  return (
    <div
      style={controlStyle}
    >
      <>
        <Header />
      <main>
          <Hero />
          <Project />
          <Write/>
        </main>
        <Footer/>
        </>
    </div>
  );
};
