interface GitHubRepo {
    name: string;
    full_name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
    updated_at: string;
    owner: {
        login: string;
    };
}

interface ProjectData {
    title: string;
    description: string;
    link: string;
    owner: string;
    repo: string;
    hackathonWin: boolean;
    hackathonName: string | null;
    celebrationImage: string | null;
    winType: 'first' | 'second' | 'third' | 'finalist' | null;
    language: string;
    stars: string;
    lastUpdated: string;
    tech: string[];
}

const repositories = [
    {
        owner: 'skidfuscatordev',
        repo: 'skidfuscator-java-obfuscator',
        title: 'Skidfuscator Java Obfuscator',
        hackathonWin: true,
        hackathonName: 'CCSC-NE 2024',
        celebrationImage: '/images/ccsc-ne-celebration-placeholder.svg',
        winType: 'finalist' as const,
        tech: ['Java', 'SSA', 'Obfuscation', 'Compiler']
    },
    {
        owner: 'terminalsin',
        repo: 'posturecheck',
        title: 'PostureCheck',
        hackathonWin: true,
        hackathonName: '#1st DraperU YC Hackathon 2025',
        celebrationImage: '/ghast.dev.2/images/crown-svgrepo-com.svg',
        winType: 'first' as const,
        tech: ['Java', 'SSA', 'Obfuscation', 'Compiler']
    },
    {
        owner: 'terminalsin',
        repo: 'tune-tts',
        title: 'Canari Dub',
        hackathonWin: true,
        hackathonName: '#1st AGIHouse YC Hackathon 2025',
        celebrationImage: null,
        winType: 'first' as const,
        tech: ['Python', 'TTS', 'LLM', 'LLM API']
    },
    {
        owner: 'terminalsin',
        repo: 'no-cluely',
        title: 'NoCluely',
        hackathonWin: true,
        hackathonName: '#Meme',
        celebrationImage: null,
        winType: 'finalist' as const,
        tech: ['Rust', 'Python', 'Swift', 'LLM Detection']
    },
    {
        owner: 'terminalsin',
        repo: 'piidact-chrome-extension',
        title: 'PiiDact',
        hackathonWin: false,
        hackathonName: '#Meme',
        celebrationImage: null,
        winType: 'finalist' as const,
        tech: ['JavaScript', 'Chrome', 'Privacy', 'LLM Detection']
    }
];

async function fetchGitHubRepo(owner: string, repo: string): Promise<GitHubRepo | null> {
    try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'Astro-Blog'
            }
        });

        if (!response.ok) {
            console.warn(`Failed to fetch ${owner}/${repo}: ${response.status}`);
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error(`Error fetching ${owner}/${repo}:`, error);
        return null;
    }
}

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Add a delay between API calls to respect rate limits
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getProjectsData(): Promise<ProjectData[]> {
    const projects: ProjectData[] = [];

    console.log('Fetching GitHub repository data...');

    for (let i = 0; i < repositories.length; i++) {
        const repoConfig = repositories[i];

        // Add a small delay between requests to be respectful to GitHub API
        if (i > 0) {
            await delay(100);
        }

        console.log(`Fetching ${repoConfig.owner}/${repoConfig.repo}...`);
        const repoData = await fetchGitHubRepo(repoConfig.owner, repoConfig.repo);

        if (repoData) {
            projects.push({
                title: repoConfig.title,
                description: repoData.description || `${repoConfig.title} - GitHub repository`,
                link: repoData.html_url,
                owner: repoData.owner.login,
                repo: repoData.name,
                hackathonWin: repoConfig.hackathonWin,
                hackathonName: repoConfig.hackathonName,
                celebrationImage: repoConfig.celebrationImage,
                winType: repoConfig.winType,
                language: repoData.language || 'Unknown',
                stars: repoData.stargazers_count.toString(),
                lastUpdated: formatDate(repoData.updated_at),
                tech: repoConfig.tech
            });
            console.log(`✓ Successfully fetched ${repoConfig.owner}/${repoConfig.repo} (${repoData.stargazers_count} stars)`);
        } else {
            // Fallback data if GitHub API fails
            console.log(`✗ Failed to fetch ${repoConfig.owner}/${repoConfig.repo}, using fallback data`);
            projects.push({
                title: repoConfig.title,
                description: `${repoConfig.title} - GitHub repository`,
                link: `https://github.com/${repoConfig.owner}/${repoConfig.repo}`,
                owner: repoConfig.owner,
                repo: repoConfig.repo,
                hackathonWin: repoConfig.hackathonWin,
                hackathonName: repoConfig.hackathonName,
                celebrationImage: repoConfig.celebrationImage,
                winType: repoConfig.winType,
                language: 'Java',
                stars: '0',
                lastUpdated: new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                }),
                tech: repoConfig.tech
            });
        }
    }

    console.log(`Completed fetching ${projects.length} repositories`);
    return projects;
} 
