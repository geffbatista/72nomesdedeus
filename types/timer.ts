export interface TimerProps {
  seconds: number;
  isRunning: boolean;
  start?: () => void;
  pause?: () => void;
  resume?: () => void;
  restart?: (newExpiryTimestamp: Date, autoStart?: boolean | undefined) => void;
}
