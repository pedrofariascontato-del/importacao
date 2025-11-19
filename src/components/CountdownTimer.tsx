import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const targetDate = new Date("2026-04-07T00:00:00");

  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <View className="items-center mx-2">
      <View className="bg-white rounded-xl px-4 py-3 min-w-[70px] shadow-lg border border-gray-200">
        <Text className="text-navy text-3xl font-bold text-center">
          {value.toString().padStart(2, "0")}
        </Text>
      </View>
      <Text className="text-white text-xs mt-2 font-semibold uppercase tracking-wider">
        {label}
      </Text>
    </View>
  );

  return (
    <View className="bg-chinared/90 rounded-2xl p-6 mx-4 mt-4 shadow-2xl">
      <Text className="text-white text-center text-lg font-bold mb-4 uppercase tracking-wide">
        Embarque em
      </Text>
      <View className="flex-row justify-center items-center">
        <TimeBlock value={timeLeft.days} label="Dias" />
        <Text className="text-white text-2xl font-bold">:</Text>
        <TimeBlock value={timeLeft.hours} label="Horas" />
        <Text className="text-white text-2xl font-bold">:</Text>
        <TimeBlock value={timeLeft.minutes} label="Min" />
        <Text className="text-white text-2xl font-bold">:</Text>
        <TimeBlock value={timeLeft.seconds} label="Seg" />
      </View>
    </View>
  );
};
