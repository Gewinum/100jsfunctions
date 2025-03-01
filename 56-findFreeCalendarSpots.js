function findFreeCalendarSpots(meetings) {
    if (meetings.length === 0) {
        return [
            {
                duration: 480,
                startTime: {
                    hours: 9,
                    minutes: 0
                }
            }
        ];
    }
    meetings.sort((a, b) => (a.startTime.hours * 60) + a.startTime.minutes - (b.startTime.hours * 60) - b.startTime.minutes);
    const freeTimes = [];
    let lastMeetingEnd = undefined;

    for (let i = 0; i < meetings.length; i++) {
        const currentMeeting = meetings[i];
        if (lastMeetingEnd === undefined) {
            lastMeetingEnd = {
                hours: currentMeeting.startTime.hours + Math.floor((currentMeeting.duration / 60)),
                minutes: currentMeeting.startTime.minutes + (currentMeeting.duration % 60)
            };
            continue;
        }
        if (lastMeetingEnd.minutes >= 60) {
            lastMeetingEnd = {
                hours: lastMeetingEnd.hours + 1,
                minutes: lastMeetingEnd.minutes % 60
            };
        }

        if (lastMeetingEnd.hours === currentMeeting.startTime.hours) {
            if (lastMeetingEnd.minutes === currentMeeting.startTime.minutes) {
                lastMeetingEnd = {
                    hours: currentMeeting.startTime.hours + Math.floor((currentMeeting.duration / 60)),
                    minutes: currentMeeting.startTime.minutes + (currentMeeting.duration % 60)
                };
                continue;
            }
        }

        const restingDuration = ((currentMeeting.startTime.hours - lastMeetingEnd.hours) * 60) + currentMeeting.startTime.minutes - lastMeetingEnd.minutes;

        freeTimes.push({
            startTime: lastMeetingEnd,
            duration: restingDuration,
        });
        lastMeetingEnd = {
            hours: currentMeeting.startTime.hours + Math.floor((currentMeeting.duration / 60)),
            minutes: currentMeeting.startTime.minutes + (currentMeeting.duration % 60)
        };
    }

    if (lastMeetingEnd.minutes >= 60) {
        lastMeetingEnd = {
            hours: lastMeetingEnd.hours + 1,
            minutes: lastMeetingEnd.minutes % 60
        }
    }

    if (lastMeetingEnd.hours === 17) {
        if (lastMeetingEnd.minutes === 0) {
            return freeTimes.filter(el => el.duration > 0);
        }
    }

    const restingDuration = ((17 - lastMeetingEnd.hours) * 60) - lastMeetingEnd.minutes;

    freeTimes.push({
        startTime: lastMeetingEnd,
        duration: restingDuration,
    });

    return freeTimes.filter(el => el.duration > 0);
}

export { findFreeCalendarSpots };