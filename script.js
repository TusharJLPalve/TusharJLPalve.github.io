document.addEventListener('DOMContentLoaded', () => {
    const cloudComputingProject = document.getElementById('cloudComputingProject');
    const subProject = cloudComputingProject.querySelector('.sub-project');

    // Show the sub-project when hovering over Cloud Computing Project
    cloudComputingProject.addEventListener('mouseenter', () => {
        subProject.style.display = 'block'; // Show the project info
    });

    // Hide the sub-project when the mouse leaves the Cloud Computing Project
    cloudComputingProject.addEventListener('mouseleave', () => {
        subProject.style.display = 'none'; // Hide the project info
    });
});
