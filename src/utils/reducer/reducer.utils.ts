import { UnknownAction } from 'redux';

type Matchable<AC extends () => UnknownAction> = AC & {
  type: ReturnType<AC>['type'];
  match(action: UnknownAction): action is ReturnType<AC>;
};

export function withMatcher<AC extends () => UnknownAction & { type: string }>(actionCreator: AC): Matchable<AC>;
export function withMatcher<AC extends (...args: any[]) => UnknownAction & { type: string }>(
  actionCreator: AC,
): Matchable<AC>;

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export function withMatcher(actionCreator: Function) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    type,
    match(action: UnknownAction) {
      return action.type === type;
    },
  });
}

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;
export function createAction<T extends string>(type: T, payload: void): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P): UnknownAction {
  return { type, payload };
}
