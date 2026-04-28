async function github_activity(username) {
    try {
        const url = `https://api.github.com/users/${username}/events`;
        const response = await fetch(url);
        
        if (!response.ok) {
            if (response.status === 404) {
                console.log("GitHub username not found");
                return;
            }
            throw new Error(`HTTP error: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.length === 0) {
            console.log("No recent activity found");
            return;
        }
        
        data.slice(0, 10).forEach((event) => {
            switch (event.type) {
                case 'PushEvent':
                    console.log(`- Pushed ${event.payload.commits?.length || 0} commit(s) to ${event.repo.name}`);
                    break;

                case 'IssuesEvent':
                    console.log(
                        `- ${event.payload.action} an issue in ${event.repo.name}`
                    );
                    break;

                case 'WatchEvent':
                    console.log(`- Starred ${event.repo.name}`);
                    break;

                case 'CreateEvent':
                    console.log(
                        `- Created ${event.payload.ref_type} in ${event.repo.name}`
                    );
                    break;

                default:
                    console.log(`- ${event.type} in ${event.repo.name}`);
            }
        });

    } catch (error) {
        console.log('Something went wrong');
        console.log(error.message);
    }
}

github_activity("saifyali05");