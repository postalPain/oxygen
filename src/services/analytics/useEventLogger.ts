import { useRef } from 'react';
import { analyticEvents, analytics } from '.';

export class EventLogger {
  params: Record<string, any>;

  name: analyticEvents;

  constructor(name: analyticEvents) {
    this.name = name;
  }

  getTimestamp() {
    return analytics.getTimestamp();
  }

  addParams(params: typeof this.params) {
    this.params = { ...this.params, ...params };
  }

  log(params?: typeof this.params) {
    analytics.logEvent(this.name, { ...this.params, ...params });
  }
}

export const useEventLogger = (name: analyticEvents) => {
  const eventLogger = useRef<EventLogger>(new EventLogger(name));

  return eventLogger.current;
};

