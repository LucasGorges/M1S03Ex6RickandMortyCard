async function search() {
  const response = await fetch("https://api.github.com/users/LucasGorges");
  const data = await response.json();
  console.log(data);
  document.getElementById("name").innerHTML = `Name: ${data?.name}`;
  document.getElementById("status").innerHTML = `Status: ${data?.bio}`;
  document.getElementById("twitter").innerHTML = `Twitter: ${data?.twitter_username}`;
  document.getElementById("location").innerHTML = `Location: ${data?.location}`;
  document.getElementById("repositorio").innerHTML = `Repository: ${data?.public_repos}`;
  
}

search();
