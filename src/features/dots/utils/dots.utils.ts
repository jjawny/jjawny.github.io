import { Vector3 } from "three";
import {
  DEPTH,
  LEFT_COLOR,
  MAX_RADIUS,
  MIN_RADIUS,
  NUM_POINTS,
  RIGHT_COLOR,
} from "~/features/dots/constants/dots.constants";

// Math is hard, credits: https://youtu.be/r9IU5eJhhGo

const getGradientStop = (ratio: number) => {
  ratio = Math.max(0, Math.min(ratio, 1));

  const getValues = (color: string) => color.match(/.{1,2}/g)?.map((oct) => parseInt(oct, 16)) || [];

  const c0Values = getValues(LEFT_COLOR);
  const c1Values = getValues(RIGHT_COLOR);

  const ci = c0Values.map((c0, i) => Math.min(Math.round(c0 * (1 - ratio) + (c1Values[i] || 0) * ratio), 255));

  const color = ci
    .reduce((a, v) => (a << 8) + v, 0)
    .toString(16)
    .padStart(6, "0");

  return `#${color}`;
};

const calculateColor = (x: number) => {
  const maxDiff = MAX_RADIUS * 2;
  const distance = x + MAX_RADIUS;
  const ratio = distance / maxDiff;
  const stop = getGradientStop(ratio);

  return stop;
};

const randomFromInterval = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const pointsInner = Array.from({ length: NUM_POINTS }, (_, k) => k + 1).map((num) => {
  const randomRadius = randomFromInterval(MIN_RADIUS, MAX_RADIUS);
  const randomAngle = Math.random() * Math.PI * 2;

  const x = Math.cos(randomAngle) * randomRadius;
  const y = Math.sin(randomAngle) * randomRadius;
  const z = randomFromInterval(-DEPTH, DEPTH);

  const color = calculateColor(x);

  return {
    position: new Vector3(x, y, z),
    idx: num,
    color,
  };
});

export const pointsOuter = Array.from({ length: NUM_POINTS / 4 }, (_, k) => k + 1).map((num) => {
  const randomRadius = randomFromInterval(MIN_RADIUS / 2, MAX_RADIUS * 2);
  const angle = Math.random() * Math.PI * 2;

  const x = Math.cos(angle) * randomRadius;
  const y = Math.sin(angle) * randomRadius;
  const z = randomFromInterval(-DEPTH * 10, DEPTH * 10);

  const color = calculateColor(x);

  return {
    position: new Vector3(x, y, z),
    idx: num,
    color,
  };
});
