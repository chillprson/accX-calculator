export function estimateValue(year: number, followers: number, tweets: number, type: string, isSuspicious: boolean): number {
  const base = getBasePrice(year);
  const perFollower = getFollowerPrice(type, followers);
  let value = base + perFollower + tweets * 1;
  if (isSuspicious) value -= 10000;
  return Math.max(value, 0);
}

function getBasePrice(year: number): number {
  if (year === 2008) return 40000;
  if (year === 2009) return 15000;
  if (year === 2010) return 10000;
  if (year >= 2011 && year <= 2012) return 9000;
  if (year >= 2013 && year <= 2018) return 7000;
  if (year >= 2019 && year <= 2022) return 9000;
  if (year === 2023) return 6000;
  if (year === 2024) return 5000;
  return 5000;
}

function getFollowerPrice(type: string, f: number): number {
  switch (type) {
    case "JFB < 4.999 Followers": return f * 20;
    case "JFB 5000 - 10.000 Followers": return f * 42;
    case "JFB >10.000 Followers": return f * 50;
    case "SELFFOL": return f * 33;
    case "INACT < 999 Followers": return f * 60;
    case "INACT 1000 - 3.999 Followers": return f * 70;
    case "INACT >4.000 Followers": return f * 100;
    default: return 0;
  }
}