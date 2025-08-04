import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Star, GitFork, Calendar, User } from 'lucide-react';

const Projects = ({ registerSection = null }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const GITHUB_USERNAME = 'Nav0711';

  useEffect(() => {
    fetchGitHubProjects();
  }, []);

  const fetchGitHubProjects = async () => {
    try {
      setLoading(true);
      
      // Fetch user's own repositories
      const userReposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=3`);
      const userRepos = await userReposResponse.json();

      // Fetch user's contributions (events to find repos they've contributed to)
      const eventsResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=3`);
      const events = await eventsResponse.json(); 

      // Extract unique repositories from push events (contributions)
      const contributedRepos = new Set();
      events.forEach(event => {
        if (event.type === 'PushEvent' && event.repo && !event.repo.name.startsWith(`${GITHUB_USERNAME}/`)) {
          contributedRepos.add(event.repo.name);
        }
      });

      // Fetch details for contributed repositories
      const contributedRepoDetails = await Promise.all(
        Array.from(contributedRepos).slice(0, 10).map(async (repoName) => {
          try {
            const response = await fetch(`https://api.github.com/repos/${repoName}`);
            return await response.json();
          } catch (error) {
            console.error(`Error fetching ${repoName}:`, error);
            return null;
          }
        })
      );

      // Combine and format all repositories
      const allRepos = [
        ...userRepos.filter(repo => !repo.fork), // Own repos (excluding forks)
        ...contributedRepoDetails.filter(repo => repo && !repo.message) // Contributed repos (filter out errors)
      ];

      // Format repositories for display
      const formattedProjects = allRepos
        .filter(repo => repo && !repo.private) // Only public repos
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)) // Sort by last updated
        .slice(0, 20) // Limit to 20 most recent
        .map(repo => ({
          name: repo.name,
          description: repo.description || 'No description available',
          github: repo.html_url,
          demo: repo.homepage || null,
          tech: repo.language || 'Unknown',
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          updated: repo.updated_at,
          isContribution: !repo.owner || repo.owner.login !== GITHUB_USERNAME,
          owner: repo.owner?.login
        }));

      setProjects(formattedProjects);
    } catch (error) {
      console.error('Error fetching GitHub projects:', error);
      setError('Failed to fetch projects from GitHub');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#f1e05a',
      TypeScript: '#2b7489',
      Python: '#3572A5',
      Java: '#b07219',
      React: '#61dafb',
      HTML: '#e34c26',
      CSS: '#1572B6',
      Go: '#00ADD8',
      Rust: '#dea584',
      C: '#555555',
      'C++': '#f34b7d',
      PHP: '#4F5D95',
      Ruby: '#701516',
      Swift: '#ffac45',
      Kotlin: '#F18E33'
    };
    return colors[language] || '#858585';
  };

  if (loading) {
    return (
      <section 
        ref={registerSection ? el => registerSection('projects', el) : null}
        id="projects" 
        className="mb-20 animate-fade-in"
      >
        <h2 className="text-xl font-semibold mb-10 text-gray-900 dark:text-white relative inline-block">
          projects
          <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gray-900 dark:bg-white opacity-30"></span>
        </h2>
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
          <span className="ml-3 text-gray-600 dark:text-gray-400">Loading projects from GitHub...</span>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section 
        ref={registerSection ? el => registerSection('projects', el) : null}
        id="projects" 
        className="mb-20 animate-fade-in"
      >
        <h2 className="text-xl font-semibold mb-10 text-gray-900 dark:text-white relative inline-block">
          projects
          <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gray-900 dark:bg-white opacity-30"></span>
        </h2>
        <div className="text-center py-12">
          <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
          <button 
            onClick={fetchGitHubProjects}
            className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={registerSection ? el => registerSection('projects', el) : null}
      id="projects" 
      className="mb-20 animate-fade-in"
    >
      <h2 className="text-xl font-semibold mb-10 text-gray-900 dark:text-white relative inline-block">
        projects
        <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gray-900 dark:bg-white opacity-30"></span>
      </h2>
      
      {projects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">No projects found</p>
        </div>
      ) : (
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={`${project.owner}-${project.name}-${index}`}
              className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {project.name}
                      </a>
                    </h3>
                    {project.isContribution && (
                      <span className="inline-flex items-center gap-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full text-xs font-medium">
                        <User size={12} />
                        contributor
                      </span>
                    )}
                  </div>
                  {project.isContribution && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                      by {project.owner}
                    </p>
                  )}
                </div>
                
                <div className="flex items-center gap-3 flex-wrap">
                  <span 
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-white"
                    style={{ backgroundColor: getLanguageColor(project.tech) }}
                  >
                    <span className="w-2 h-2 rounded-full bg-white opacity-80"></span>
                    {project.tech}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4 flex-wrap">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium px-3 py-1.5 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:-translate-y-0.5"
                  >
                    <Github size={14} />
                    github
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium px-3 py-1.5 rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transition-all hover:-translate-y-0.5"
                    >
                      <ExternalLink size={14} />
                      website
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Star size={12} />
                    {project.stars}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork size={12} />
                    {project.forks}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    {formatDate(project.updated)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <a 
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium"
        >
          <Github size={16} />
          View all projects on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;