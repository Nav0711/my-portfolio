export const skills = [
  { name: 'C/C++', progress: 90 },
  { name: 'JavaScript', progress: 85 },
  { name: 'HTML/CSS', progress: 95 },
  { name: 'Python', progress: 80 },
  { name: 'PostgreSQL', progress: 80 },
  { name: 'Git', progress: 85 },
  { name: 'React', progress: 75 },
  { name: '', progress: 90 },
  { name: '', progress: 80 }
];

export const programmingLanguages = skills.slice(0, 5);
export const frameworksAndTools = skills.slice(5);