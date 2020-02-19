const missingAngle = (angle1, angle2) => {
  const angle3 = 180 - angle1 - angle2;
  return angle3 > 90 ? 'obtuse' : angle3 < 90 ? 'acute' : 'right';
};