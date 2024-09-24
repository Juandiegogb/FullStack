const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        props={{ part1, exercises1, part2, exercises2, part3, exercises3 }}
      />
      <Total props={{ exercises1, exercises2, exercises3 }} />
    </div>
  );
};

const Header = ({ course }) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};

const Content = ({ props }) => {
  console.log(props);
  return (
    <div>
      <Part part={props.part1} excercises={props.exercises1} />
      <Part part={props.part2} excercises={props.exercises2} />
      <Part part={props.part3} excercises={props.exercises3} />
    </div>
  );
};

const Total = ({ props }) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  );
};

const Part = ({ part, excercises }) => {
  return (
    <div>
      <p>
        {part} {excercises}
      </p>
    </div>
  );
};

export default App;
