import type { TaskModel } from '../models/TaskModel';

export function getTaskStatus(task: TaskModel, activeTask: TaskModel | null) {
  if (task.completeDate) return 'Completada';
  if (task.interruptDate) return 'Interrumpida';
  if (task.id === activeTask?.id) return 'En curso';
  return 'Abandonada';
}
