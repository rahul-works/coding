/**
 * 1604. Alert Using Same Key-Card Three or More Times in a One Hour Period
User Accepted:2205
User Tried:2956
Total Accepted:2258
Total Submissions:7003
Difficulty:Medium
LeetCode company workers use key-cards to unlock office doors. Each time a worker uses their key-card, the security system saves the worker's name and the time when it was used. The system emits an alert if any worker uses the key-card three or more times in a one-hour period.

You are given a list of strings keyName and keyTime where [keyName[i], keyTime[i]] corresponds to a person's name and the time when their key-card was used in a single day.

Access times are given in the 24-hour time format "HH:MM", such as "23:51" and "09:49".

Return a list of unique worker names who received an alert for frequent keycard use. Sort the names in ascending order alphabetically.

Notice that "10:00" - "11:00" is considered to be within a one-hour period, while "22:51" - "23:52" is not considered to be within a one-hour period.

 

Example 1:

Input: keyName = ["daniel","daniel","daniel","luis","luis","luis","luis"], keyTime = ["10:00","10:40","11:00","09:00","11:00","13:00","15:00"]
Output: ["daniel"]
Explanation: "daniel" used the keycard 3 times in a one-hour period ("10:00","10:40", "11:00").
Example 2:

Input: keyName = ["alice","alice","alice","bob","bob","bob","bob"], keyTime = ["12:01","12:00","18:00","21:00","21:20","21:30","23:00"]
Output: ["bob"]
Explanation: "bob" used the keycard 3 times in a one-hour period ("21:00","21:20", "21:30").
Example 3:

Input: keyName = ["john","john","john"], keyTime = ["23:58","23:59","00:01"]
Output: []
Example 4:

Input: keyName = ["leslie","leslie","leslie","clare","clare","clare","clare"], keyTime = ["13:00","13:20","14:00","18:00","18:51","19:30","19:49"]
Output: ["clare","leslie"]
 

Constraints:

1 <= keyName.length, keyTime.length <= 105
keyName.length == keyTime.length
keyTime are in the format "HH:MM".
[keyName[i], keyTime[i]] is unique.
1 <= keyName[i].length <= 10
keyName[i] contains only lowercase English letters.
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */

function timeDifference(t1, t2) {
    t1 = t1.split(':');
    t2 = t2.split(':');
    return parseInt((t2[0] - t1[0]) * 60) + parseInt(t2[1] - t1[1]);
}
var alertNames = function(keyName, keyTime) {
    const hash = [],
        retArray = [];
    for (let i = 0; i < keyName.length; i++) {
        if (hash[keyName[i]]) {
            hash[keyName[i]].push(keyTime[i]);
        } else {
            hash[keyName[i]] = [keyTime[i]];
        }
    }
    for (const key in hash) {
        let count = 0,
            temp, subTime;
        for (const time of hash[key]) {
            if (temp && subTime <= 60 && timeDifference(temp, time) <= 60) {
                count++;
                subTime += timeDifference(temp, time);
                temp = time;
            } else {
                count = 1;
                temp = time;
                subTime = 0;
            }
            if (count === 3) {
                if (retArray[key] === undefined) {
                    retArray.push(key);
                }
            }
        }
    }

    if (retArray.length > 0)
        return retArray.sort(function(a, b) { return a - b });
    else
        return [];
};