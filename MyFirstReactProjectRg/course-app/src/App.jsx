import "./App.css";
import Courses from "./Components/Courses";
import Header from "./Components/Header";
import { courses } from "./Data";
function App() {
  return (
    <>
      <Header />
      <section className="course-main">
        {courses?.map((course) => (
          <Courses key={course.id} course={course} />
        ))}
      </section>
    </>
  );
}

export default App;
