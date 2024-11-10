import Tasks from "./components/tasks/tasks";

const page = () => {
  return (
    <section>
      <h1 className="flex items-center mb-4 text-3xl font-bold">All Tasks</h1>
      <div className="max-h-[36rem] overflow-scroll">
        <Tasks />
      </div>
    </section>
  );
};
export default page;
