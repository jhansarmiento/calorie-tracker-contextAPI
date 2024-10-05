import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useActivity } from "../hooks/useActivity";


export default function ActivityList() {

  const { state, dispatch, isEmptyActivities, categoryName } = useActivity()

  return (
    <>
      <h2 className="text-4xl font-bold text-color text-center">
        Comida Y Actividades
      </h2>

      { isEmptyActivities ? <p className="text-center font-bold my-5">No hay Actividades Aún</p> :      
      state.activities.map((activity) => (
        <div
          key={activity.id}
          className="px-5 py-10 bg-background-color mt-5 flex justify-between rounded-md shadow"
        >
          <div className="space-y-2 relative">
            <p
              className={`absolute -top-8 -left-8 px-10 py-2 text-text-color uppercase font-bold ${
                activity.category === 1 ? "bg-primary" : "bg-secondary"
              } rounded-md`}
            >
              {categoryName(+activity.category)}
            </p>
            <p className="text-2xl font-bold pt-5">{activity.name}</p>
            <p className="font-black text-4xl text-secondary">
              {activity.calories} <span>Calories</span>
            </p>
          </div>
          <div className="flex gap-5 items-center">
              <button
                onClick={() => dispatch({type: 'set-activeId', payload: {id: activity.id}})}
              >
                <PencilSquareIcon 
                  className="h-8 w-8 text-text-color"
                />
              </button>
              <button
                onClick={() => dispatch({type: 'delete-activity', payload: {id: activity.id}})}
              >
                <XCircleIcon 
                  className="h-8 w-8 text-text-color"
                />
              </button>
              
          </div>
        </div>
      ))}
    </>
  );
}
