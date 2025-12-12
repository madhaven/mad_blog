async function getUserLanguageStats(username) {
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await reposRes.json();

    const totals = {};
    let grandTotal = 0;

    // Step 1: Fetch and accumulate language data for each repo
    for (const repo of repos) {
        const langRes = await fetch(repo.languages_url);
        const langData = await langRes.json();

        for (const [lang, bytes] of Object.entries(langData)) {
            totals[lang] = (totals[lang] || 0) + bytes;
            grandTotal += bytes;
        }
    }

    // Step 2: Convert to percentages
    const percentages = {};
    for (const [lang, bytes] of Object.entries(totals)) {
        percentages[lang] = ((bytes / grandTotal) * 100).toFixed(2) + "%";
    }

    return percentages;
}
