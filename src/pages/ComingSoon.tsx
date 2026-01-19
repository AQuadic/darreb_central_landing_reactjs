import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (endTime: number): TimeLeft => {
  const diff = endTime - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const ComingSoon = () => {
  const endTime = new Date('2026-01-26T00:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(endTime)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endTime));
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

    return (
        <section>
        <div className="relative w-full h-screen bg-[url('/coming_bg.png')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-[#04214666]" />

            <div className="relative container py-17">
            <img src="/logo_white.svg" alt="logo" className="md:w-34 w-16" />

            <div className="flex flex-col items-center justify-center md:mt-40.75 mt-27.75">
                <p className="text-[#D7DADF] md:text-[32px] text-sm joan-regular">
                Something great is on the way
                </p>

                <h1 className="text-white md:text-[128px] text-[32px] font-semibold uppercase mt-8 kalnia">
                coming soon
                </h1>

                <div className="flex items-center gap-6 mt-10 text-white kalnia">
                <CounterItem value={timeLeft.days} label="Days" />
                <Separator />
                <CounterItem value={timeLeft.hours} label="Hours" />
                <Separator />
                <CounterItem value={timeLeft.minutes} label="Min" />
                <Separator />
                <CounterItem value={timeLeft.seconds} label="Sec" />
                </div>
            </div>
            </div>
        </div>

        <div className="w-full md:py-17 py-10 bg-[#132033] flex flex-col items-center justify-center">
            <img src="/logo_white.svg" alt="logo" className="md:w-45.25 w-31.25" /> 
            <p className="text-white md:text-[32px] text-xl font-normal md:mt-14.5 mt-6 joan-regular"> Be the First to Know! </p>
            <p className="text-[#D7DADF] md:text-lg text-sm font-normal leading-[150%] md:mt-6 mt-3 text-center joan-regular"> Enter your email below and get notified the moment our website goes live. Stay ahead with exclusive updates, launches, and early access to our latest products and services. </p> 
        </div>
        </section>
    );
};

export default ComingSoon;

const CounterItem = ({ value, label }: { value: number; label: string }) => (
  <div className="text-center">
    <p className="md:text-[40px] text-2xl font-semibold tabular-nums kalnia">
      {String(value).padStart(2, "0")}
    </p>
    <span className="text-[#D7DADF] text-sm kalnia">{label}</span>
  </div>
);

const Separator = () => (
  <span className="md:text-[48px] text-2xl font-light opacity-70">:</span>
);
