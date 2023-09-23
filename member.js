function getSkills(skill) {
    // Assuming there is a skills array defined somewhere
    const skills = ['JavaScript', 'HTML', 'CSS', 'Python', 'Java'];
    
    // If the skill is already in the array, return the array
    if (skills.includes(skill)) {
        return skills;
    }
    
    // Otherwise, add the skill to the array and return it
    skills.push(skill);
    return skills;
}