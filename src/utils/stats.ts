import { StatsType } from '../types';

export const initialStats = {
  easy: {
    win: 0,
    lose: 0,
    best: 0,
  },
  medium: {
    win: 0,
    lose: 0,
    best: 0,
  },
  expert: {
    win: 0,
    lose: 0,
    best: 0,
  },
};

export const initStats = () => {
  const stats = localStorage.getItem('stats');
  if (stats) return;
  localStorage.setItem('stats', JSON.stringify(initialStats));
};

export const resetStats = () => {
  localStorage.setItem('stats', JSON.stringify(initialStats));
};

export const updateStats = (diff: string, status: string, time?: number) => {
  const stats = JSON.parse(localStorage.getItem('stats') as string);

  stats[diff][status] += 1;
  if (time) {
    if (stats[diff]['best']) {
      stats[diff]['best'] =
        stats[diff]['best'] > time ? time : stats[diff]['best'];
    } else {
      stats[diff]['best'] = time;
    }
  }

  localStorage.setItem('stats', JSON.stringify(stats));
};

export const getStats = () => {
  return JSON.parse(localStorage.getItem('stats') as string) as StatsType;
};

export const getWinRate = (win: number, lose: number) => {
  if (win === 0) return 0;

  return (win * 100) / (win + lose);
};
