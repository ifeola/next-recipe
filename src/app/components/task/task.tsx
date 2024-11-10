import { EditIcon, Trash } from "lucide-react";

const Task = ({
  title,
  description,
  date,
  button,
}: {
  title: string;
  description: string;
  date: string;
  button: string;
}) => {
  return (
    <li className="flex flex-col justify-between p-2 border border-neutral-600 h-full rounded-md bg-white/10 gap-6">
      <div>
        <h3 className="text-lg font-medium mb-1">{title}</h3>
        <p className="text-base text-neutral-300">{description}</p>
      </div>
      <div className="grid gap-1">
        <span className="text-sm text-neutral-400">{date}</span>
        <div className="flex items-center justify-between">
          <button className="py-2 px-4 bg-teal-600 rounded-full uppercase font-medium text-sm">
            {button}
          </button>
          <div className="flex items-center gap-3">
            <button>
              <EditIcon className="fill-neutral-400 w-5" />
            </button>
            <button>
              <Trash className="fill-neutral-400 w-5" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
export default Task;
