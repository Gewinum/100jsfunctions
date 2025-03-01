function diffReactions(yesterdayReactions, todayReactions) {
    const allMembers = new Set(Object.keys(yesterdayReactions)).union(new Set(Object.keys(todayReactions)))

    const actions = [];

    allMembers.forEach(member => {
        let memberYesterday = new Set();
        let memberToday = new Set();

        if (Object.keys(yesterdayReactions).includes(member)) {
            memberYesterday = new Set(yesterdayReactions[member]);
        }

        if (Object.keys(todayReactions).includes(member)) {
            memberToday = new Set(todayReactions[member]);
        }

        memberToday.difference(memberYesterday).forEach(reaction => {
            actions.push(member + " reacted with " + reaction);
        });

        memberYesterday.difference(memberToday).forEach(reaction => {
            actions.push(member + " removed their " + reaction);
        });
    });

    return actions;
}

export { diffReactions };