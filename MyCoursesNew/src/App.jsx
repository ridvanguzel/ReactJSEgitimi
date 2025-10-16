import Header from "./Header";
import "./App.css";
import { courses } from "./Data";
import Course from "./Course";

function App() {
  return (
    <>
      <Header />
      <div className="course-main">
        {courses?.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </>
  );
}

export default App;
