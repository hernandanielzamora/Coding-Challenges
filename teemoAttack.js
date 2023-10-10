/*
You are given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo attacks Ashe at second timeSeries[i], and an integer duration.

Return the total number of seconds that Ashe is poisoned.

Input: timeSeries = [1,4], duration = 2
Output: 4
Explanation: Teemo's attacks on Ashe go as follows:
- At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
- At second 4, Teemo attacks, and Ashe is poisoned for seconds 4 and 5.
Ashe is poisoned for seconds 1, 2, 4, and 5, which is 4 seconds in total. 

*/



var findPoisonedDuration = function(timeSeries, duration) {
  // Output = number of seconds that ashe is poisoned

  let startTime = 0;
  let endTime = 0;
  let totalTime = 0;
  
  for(let i = 0; i < timeSeries.length; i++) {
    if(timeSeries[i] > endTime) {
      totalTime += duration;
    } else {
      totalTime += timeSeries[i] - startTime;
    }

    startTime = timeSeries[i];
    endTime = startTime + duration;

  }

  return totalTime;

};