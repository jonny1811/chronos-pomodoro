import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const tipsForWhenActiveTask = {
    workTime: <span>Enfoquese por {state.config.workTime} min</span>,
    shortBreakTime: <span>Descanse por {state.config.shortBreakTime} min</span>,
    longBreakTime: <span>Descanse por {state.config.longBreakTime} min</span>,
  };

  const tipsForNoActiveTask = {
    workTime: <span>Proximo ciclo es de {state.config.workTime} min</span>,
    shortBreakTime: (
      <span>
        El proximo ciclo de descanso corto es {state.config.shortBreakTime} min
      </span>
    ),
    longBreakTime: (
      <span>
        El proximo ciclo de descanso largo es {state.config.longBreakTime} min
      </span>
    ),
  };

  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
