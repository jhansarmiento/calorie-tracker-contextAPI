import CaloriesDisplay from "./CaloriesDisplay";
import { useActivity } from "../hooks/useActivity";

export default function CalorieTracker() {

  const { caloriesConsumed, caloriesBurned, netCalories } = useActivity()


  return (
    <>
      <h2 className="text-4xl text-white text-center font-black">
        Resumen de Calorías
      </h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <CaloriesDisplay calories={caloriesConsumed} text="Consumidas" />
        <CaloriesDisplay calories={caloriesBurned} text="Ejercicio" />
        <CaloriesDisplay calories={netCalories} text="Diferencia" />
      </div>
    </>
  );
}
