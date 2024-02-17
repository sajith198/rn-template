export const fetchJobs = async () => {
  // Implement your API call logic
  const response = await fetch('https://api.example.com/jobs');
  const data = await response.json();
  return data;
};
