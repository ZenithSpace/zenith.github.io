// Note: This file exports a function because it needs translation for roles/names
// Alternatively, we can store keys and translate in the component.
// For simplicity and consistency with the current request, let's export a function that takes the translation function 't'.

export const getTeamMembers = (t: (key: string) => string) => {
    // Placeholder data
    const leads = [
        {
            name: "강윤구",
            role: "Team Lead/CEO",
            image: "/assets/team/강윤구.jpg"
        },
        // Add more team members here
    ];

    return leads;
};
