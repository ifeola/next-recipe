import Task from "../task/task";

const Tasks = () => {
  const data = [
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nulla.",
      date: "08-11-2024",
      button: "completed",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nulla.",
      date: "08-11-2024",
      button: "completed",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nulla.",
      date: "08-11-2024",
      button: "completed",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nulla.",
      date: "08-11-2024",
      button: "completed",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nulla.",
      date: "08-11-2024",
      button: "completed",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nulla.",
      date: "08-11-2024",
      button: "completed",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nulla.",
      date: "08-11-2024",
      button: "completed",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nulla.",
      date: "08-11-2024",
      button: "completed",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nulla.",
      date: "08-11-2024",
      button: "completed",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nulla.",
      date: "08-11-2024",
      button: "completed",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nulla.",
      date: "08-11-2024",
      button: "completed",
    },
  ];

  return (
    <ul className="grid grid-cols-3 gap-3">
      {data.map((task, index) => {
        return (
          <Task
            key={index}
            title={task.title}
            description={task.description}
            date={task.date}
            button={task.button}
          />
        );
      })}
    </ul>
  );
};
export default Tasks;
