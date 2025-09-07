export async function fetchCoffees() {
  const response = await fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
}