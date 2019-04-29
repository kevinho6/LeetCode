// Time Complexity - O(n)
// Space Complexity - O(n)

var subdomainVisits = function(cpdomains) {
  const totalVisits = {};
  for (let i = 0; i < cpdomains.length; i++) {
    const curr = cpdomains[i];
    const info = curr.split(' ');
    const numVisits = info[0];
    const fullDomain = info[1];
    const domains = fullDomain.split('.');
    for (let j = 0; j < domains.length; j++) {
      const thisDomain = domains.slice(j, domains.length).join('.');

      if (totalVisits[thisDomain]) {
        totalVisits[thisDomain] += parseInt(numVisits, 10);
      } else {
        totalVisits[thisDomain] = parseInt(numVisits, 10);
      }
    }
  }

  // Convert hash table to array solution
  const solution = [];
  for (const key in totalVisits) {
    solution.push(totalVisits[key] + ' ' + key);
  }
  return solution;
};
