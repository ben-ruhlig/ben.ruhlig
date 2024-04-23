import experiences from '$lib/data/resume-experience/work-experience';

const sortedExperiences = experiences.sort((a, b) => b.jobId - a.jobId);

export { sortedExperiences };